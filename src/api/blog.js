import client from "./client";

export const uploadPdf = async (formData, onUploadProgress) => {
  const token = localStorage.getItem("auth-token");
  try {
    const { data } = await client.post("/blog/upload-pdf", formData, {
      headers: {
        Authorization: "Bearer " + token,
        "content-type": "multipart/form-data",
      },
      onUploadProgress: ({ loaded, total }) => {
        if (onUploadProgress) onUploadProgress(Math.floor((loaded / total) * 100))
      }
    });
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) return response.data;

    return { error: error.message || error };
  }
};
