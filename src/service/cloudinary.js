const cloudName = process.env.REACT_APP_CLOUDINARY_NAME;
const upload_preset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;

const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
// const url = "https://api.cloudinary.com/v1_1/demo/image/upload";
export const setImage = async (file) => {
  console.log(file);

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", upload_preset);
  //   formData.append("upload_preset", "docs_upload_example_us_preset");
  console.log(formData);
  try {
    const response = await fetch(`${url}`, {
      method: "POST",
      body: formData,
    });
    const result = await response.json();

    console.log(result);
    return result;

    //   .then((response) => console.log(response.text()))
    //   .then((data) => console.log(data));
  } catch (error) {
    console.log(error);
  }

  console.log("eeeeeeeeeeeeeeeeeend");

  //   formData.append('file', )
};
