import clearFormFields from "./clearFormFields";

const submitForm = async (
  event,
  setFormStatus,
  formStatus,
  setFormData,
  formData,
  recaptchaRef,
  setIsCaptchaVerified,
) => {
  event.preventDefault();

  setFormStatus((prevState) => {
    return {
      ...prevState,
      submitting: true,
    };
  });

  const timeoutID = setTimeout(() => {
    setFormStatus({
      ...formStatus,
      submitting: false,
      errorWarnDisplay: true,
      success: false,
      validationFailedError: false,
      timeOutError: true,
      unknownError: false,
      errors: [
        {
          errorMessageTimeout: {
            message:
              "Form was not submitted because the server took too long to respond or your browser has block the request to the server. - Timeout Error. Please try again.",
          },
        },
      ],
      captachError: false,
    });
  }, 10000);

  try {
    const formDataArray = Object.entries(formData);
    const bodyFormData = new FormData();
    formDataArray.forEach((field) => {
      bodyFormData.append(field[0], field[1]);
    });

    const response = await fetch("/.netlify/functions/contact", {
      method: "POST",
      body: JSON.stringify(formData),
    }).then((response) => {
      // console.log("response before JSON: ", response);
      if (response.status === 404) {
        throw new Error(
          `Contact Form was not sent because the server is not found - ${response.status}. Please try again.`,
        );
      } else if (response.status !== 200) {
        throw new Error(
          `Contact Form was not sent because something went wrong with the request to the server - ${response.status}. Please try again.`,
        );
      }

      return response.json();
    });

    // console.log("response: ", response);

    if (response.data.status === "mail_sent") {
      clearTimeout(timeoutID);
      setFormStatus({
        ...formStatus,
        submitting: false,
        errorWarnDisplay: false,
        success: true,
        validationFailedError: false,
        timeOutError: false,
        unknownError: false,
        errors: [],
        captachError: false,
      });
      clearFormFields(setFormData);
      // ✅ Reset reCAPTCHA
      recaptchaRef.current?.reset();
      setIsCaptchaVerified(false);
    } else if (response.data.status === "validation_failed") {
      clearTimeout(timeoutID);
      setFormStatus({
        ...formStatus,
        submitting: false,
        errorWarnDisplay: true,
        success: false,
        validationFailedError: true,
        timeOutError: false,
        unknownError: false,
        errors: response.data.invalid_fields,
        captachError: false,
      });
      // ✅ Reset reCAPTCHA
      recaptchaRef.current?.reset();
      setIsCaptchaVerified(false);
    } else {
      clearTimeout(timeoutID);
      throw new Error(
        `Contact Form was not sent - CMS Contact Form Error:- ${response?.data?.status}`,
      );
    }
  } catch (error) {
    // console.log("error: ", error);
    clearTimeout(timeoutID);
    setFormStatus({
      ...formStatus,
      submitting: false,
      errorWarnDisplay: true,
      success: false,
      validationFailedError: false,
      timeOutError: false,
      unknownError: true,
      errors: [{ unknownErrorMessage: error }],
      captachError: false,
    });
    // ✅ Reset reCAPTCHA
    recaptchaRef.current?.reset();
    setIsCaptchaVerified(false);
  }
};

export default submitForm;
