const clearFormFields = (setFormData) => {
  setFormData(() => {
    return {
      firstName: "",
      lastName: "",
      yourEmail: "",
      phone: "",
      locationPlan: "",
      comments: "",
      _wpcf7_unit_tag: "wpcf7-f858-965",
    };
  });
};

export default clearFormFields;
