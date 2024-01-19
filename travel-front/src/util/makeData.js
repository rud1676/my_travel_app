export const MakeFileReader = (setState) => {
  const reader = new FileReader();
  reader.onload = (event) => {
    setState(event.target.result);
  };
  return reader;
};

export const MakeFormData = ({
  name,
  phone,
  email,
  gender,
  file,
  birth,
  snsId,
  provider,
}) => {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("phone", phone);
  formData.append("email", email);
  formData.append("birth", birth);
  formData.append("gender", gender);
  formData.append("image", file);
  if (snsId) formData.append("snsId", file);
  if (provider) formData.append("provider", provider);
  return formData;
};
