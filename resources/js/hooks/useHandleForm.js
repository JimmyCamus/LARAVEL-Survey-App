const useHandleForm = async (e, url) => {
  e.preventDefault();
  const formData = new FormData();
  Array.from(e.currentTarget.elements).forEach((field) => {
    if (!field.name) {
      return;
    }
    formData.append(field.name, field.value);
  });

  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  return data;
};

export default useHandleForm;
