import clearFormFields from "./clearFormFields";

const handleSuccessModalClose = (setFormStatus, formStatus, setFormData) => {
  setFormStatus({
    ...formStatus,
    submitting: false,
    errorWarnDisplay: false,
    success: false,
    captachError: false,
    validationFailedError: false,
    timeOutError: false,
    unknownError: false,
    errors: [],
  });

  clearFormFields(setFormData);
};

export default handleSuccessModalClose;
