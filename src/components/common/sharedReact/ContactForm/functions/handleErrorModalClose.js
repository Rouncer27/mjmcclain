const handleErrorModalClose = (setFormStatus, formStatus) => {
  setFormStatus({
    ...formStatus,
    submitting: false,
    errorWarnDisplay: false,
    success: false,
  });
};

export default handleErrorModalClose;
