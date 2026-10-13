export const handler = async function (req, context) {
  const FORM_POST_URL = `https://mjmclain.swbdatabases3.ca/wp-json/contact-form-7/v1/contact-forms/7/feedback`;
  const formData = JSON.parse(req.body);

  const bodyFormData = new FormData();
  Object.entries(formData).forEach(([key, value]) => {
    bodyFormData.append(key, value);
  });

  // Fetch automatically handles the Content-Type for FormData
  const response = await fetch(FORM_POST_URL, {
    method: "POST",
    body: bodyFormData,
  });

  const data = await response.json();

  console.log("Good-Bye Trevor!!");

  return {
    statusCode: response.status,
    body: JSON.stringify({ data }),
  };
};
