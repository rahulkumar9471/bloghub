import client from "./client";

export const uploadPdf = async (formData) => {
  const token = localStorage.getItem("auth-token");
  try {
    const { data } = await client.post("/blog/upload-pdf", formData, {
      headers: {
        Authorization: "Bearer " + token,
        "content-type": "multipart/form-data",
      },
    });
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) return response.data;

    return { error: error.message || error };
  }
};
