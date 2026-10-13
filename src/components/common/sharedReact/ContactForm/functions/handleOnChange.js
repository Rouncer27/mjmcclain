const handleOnChange = (event, setFormData, formData) => {
  setFormData({
    ...formData,
    [event.target.name]: event.target.value,
  });
};

export default handleOnChange;
