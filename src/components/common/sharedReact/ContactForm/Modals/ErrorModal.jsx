import "./formModals.scss";
import ErrorIcon from "./ErrorIcon";

const ErrorModal = ({
  handleErrorModalClose,
  errorMessages,
  validationFailedError,
  timeOutError,
  unknownError,
}) => {
  console.log("errorMessage: ", errorMessages[0]?.unknownErrorMessage);
  return (
    <div className="form-modal error-modal">
      <div className="form-modal-inner error-modal-inner">
        <div className="form-modal-inner-icon error-modal-inner-icon">
          <ErrorIcon />
        </div>
        <div className="form-modal-inner-content error-modal-inner-content">
          <p>There was an error With The Contact Form.</p>
          <div className="form-modal-inner-content-details error-modal-inner-content-details">
            {validationFailedError && (
              <ul>
                <p>
                  One or more fields have an error. Please check and try again.
                </p>
                {errorMessages.map((error) => (
                  <li key={error.idref}>
                    {error.field.replace(/([a-z0-9])([A-Z])/g, "$1 $2")}
                  </li>
                ))}
              </ul>
            )}

            {timeOutError && (
              <p>{errorMessages[0].errorMessageTimeout.message}</p>
            )}
            {unknownError && (
              <p>
                Unknown Error - {errorMessages[0]?.unknownErrorMessage.message}
              </p>
            )}
          </div>
        </div>
        <div className="form-modal-inner-button error-modal-inner-button">
          <button onClick={handleErrorModalClose}>Close</button>
        </div>
      </div>
      <div className="form-modal-background error-modal-background" />
    </div>
  );
};

export default ErrorModal;
