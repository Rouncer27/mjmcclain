import { useState, useRef } from "react";

import handleErrorModalClose from "./functions/handleErrorModalClose.js";
import handleSuccessModalClose from "./functions/handleSuccessModalClose.js";
import handleOnChange from "./functions/handleOnChange.js";
import submitForm from "./functions/submitForm.js";

import ErrorModal from "./Modals/ErrorModal";
import SubmitModal from "./Modals/SubmitModal";
import SuccessModal from "./Modals/SuccessModal";

import Input from "./Components/Input/Input.jsx";
import Textarea from "./Components/Textarea/Textarea.jsx";

// ✅ reCAPTCHA
import ReCAPTCHA from "react-google-recaptcha";

import "./contactForm.scss";

const ContactForm = () => {
  // ✅ reCAPTCHA
  const recaptchaRef = useRef(null);
  // ✅ reCAPTCHA
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    yourEmail: "",
    phone: "",
    comments: "",
    _wpcf7_unit_tag: "wpcf7-f858-965",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    errorWarnDisplay: false,
    success: false,
    captachError: false,
    validationFailedError: false,
    timeOutError: false,
    unknownError: false,
    errors: [],
  });

  // ✅ reCAPTCHA
  const onChangeRecaptcha = (value) => {
    setIsCaptchaVerified(!!value);

    setFormStatus((prev) => ({
      ...prev,
      captachError: false,
    }));
  };

  return (
    <div className="contact-form">
      <form
        className="contact-form-fields"
        onSubmit={(event) => {
          event.preventDefault();
          // ✅ reCAPTCHA
          const recaptchaValue = recaptchaRef.current.getValue();
          // ✅ reCAPTCHA
          if (recaptchaValue === "") {
            setFormStatus({
              ...formStatus,
              captachError: true,
            });
            return;
          }
          submitForm(
            event,
            setFormStatus,
            formStatus,
            setFormData,
            formData,
            recaptchaRef,
            setIsCaptchaVerified,
          );
        }}
      >
        <fieldset>
          <Input
            handler={(event) => handleOnChange(event, setFormData, formData)}
            value={formData.firstName}
            label="First Name"
            id="firstName"
            type="text"
            size="half"
            placeholder="First Name"
            required={true}
            error={formStatus.errors.find(
              (error) => error.idref === "firstName",
            )}
          />
          <Input
            handler={(event) => handleOnChange(event, setFormData, formData)}
            value={formData.lastName}
            label="Last Name"
            id="lastName"
            type="text"
            size="half"
            placeholder="Last Name"
            required={true}
            error={formStatus.errors.find(
              (error) => error.idref === "lastName",
            )}
          />
          <Input
            handler={(event) => handleOnChange(event, setFormData, formData)}
            value={formData.phone}
            label="Phone Number"
            id="phone"
            type="text"
            size="half"
            placeholder="Phone Number"
            required={true}
            error={formStatus.errors.find((error) => error.idref === "phone")}
          />
          <Input
            handler={(event) => handleOnChange(event, setFormData, formData)}
            value={formData.yourEmail}
            label="Email"
            id="yourEmail"
            type="email"
            size="half"
            placeholder="Email"
            required={true}
            error={formStatus.errors.find(
              (error) => error.idref === "yourEmail",
            )}
          />
          <Textarea
            handler={(event) => handleOnChange(event, setFormData, formData)}
            value={formData.comments}
            label="Comments"
            id="comments"
            size="full"
            placeholder="Comments"
            required={true}
            rows="10"
            error={formStatus.errors.find(
              (error) => error.idref === "comments",
            )}
          />
        </fieldset>
        {/*  ✅ reCAPTCHA */}
        <div className="captcha-container">
          {formStatus.captachError && (
            <p>
              The form will not submit until you have checked the reCAPTCHA.
            </p>
          )}
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={`6Lcgb4ksAAAAADQGNBqcN4SLp-Wnta2ZaLmCc5bU`}
            onChange={onChangeRecaptcha}
            onExpired={() => setIsCaptchaVerified(false)}
          />
        </div>
        {/*  ✅ reCAPTCHA */}

        <div className="contact-form-fields-button">
          <button
            disabled={!isCaptchaVerified || formStatus.submitting}
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
      {formStatus.submitting && <SubmitModal />}
      {formStatus.success && (
        <SuccessModal
          handleSuccessModalClose={() =>
            handleSuccessModalClose(setFormStatus, formStatus, setFormData)
          }
        />
      )}
      {formStatus.errorWarnDisplay && (
        <ErrorModal
          handleErrorModalClose={() =>
            handleErrorModalClose(setFormStatus, formStatus)
          }
          errorMessages={formStatus.errors}
          validationFailedError={formStatus.validationFailedError}
          timeOutError={formStatus.timeOutError}
          unknownError={formStatus.unknownError}
        />
      )}
    </div>
  );
};

export default ContactForm;
