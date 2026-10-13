import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { BarLoader } from "react-spinners";
import "./formModals.scss";
import "./submitModal.scss";

const SubmitModal = () => {
  const modalRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      modalRef.current,
      { autoAlpha: 0, y: 400 },
      {
        duration: 0.5,
        autoAlpha: 1,
        y: 0,
        ease: "power2.out",
      },
    );
  }, []);

  return (
    <div className="form-modal sumit-modal">
      <div ref={modalRef} className="form-modal-inner sumit-modal-inner">
        <div className="form-modal-inner-animation sumit-modal-inner-animation">
          <BarLoader color="#d0b42d" width="300px" height="10px" />
        </div>
        <div className="form-modal-inner-content sumit-modal-inner-content">
          <p>Validating and sending your contact form. Please standby.</p>
        </div>
      </div>
      <div className="form-modal-background sumit-modal-background" />
    </div>
  );
};

export default SubmitModal;
