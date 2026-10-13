import "./formModals.scss";
import SuccessIcon from "./SuccessIcon";

const SuccessModal = ({ handleSuccessModalClose }) => {
  return (
    <div className="form-modal success-modal">
      <div className="form-modal-inner success-modal-inner">
        <div className="form-modal-inner-icon success-modal-inner-icon">
          <SuccessIcon />
        </div>
        <div className="form-modal-inner-content success-modal-inner-content">
          <p>Your form has been successfully sent.</p>
        </div>
        <div className="form-modal-inner-button success-modal-inner-button">
          <button onClick={handleSuccessModalClose}>Close</button>
        </div>
      </div>
      <div className="form-modal-background success-modal-background" />
    </div>
  );
};

export default SuccessModal;
