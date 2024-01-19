export const MakeFileReader = (setState) => {
  const reader = new FileReader();
  reader.onload = (event) => {
    setState(event.target.result);
  };
  return reader;
};

export const MakeFormData = ({ name, phone, email, gender, file, birth }) => {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("phone", phone);
  formData.append("email", email);
  formData.append("birth", birth);
  formData.append("gender", gender);
  formData.append("image", file);
  return formData;
};
