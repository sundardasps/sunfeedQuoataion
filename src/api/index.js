
import axios from "axios";

const api = axios.create({
  baseURL:import.meta.env.VITE_BASE_URL
})

export async function addInvoice(invoice) {
  try {
    const respose = await api.post(
      "https://51264l4ryi.execute-api.eu-west-3.amazonaws.com/dev/invoices", invoice
    );
    return respose;
  } catch (error) {
    console.log(error);
    const errorMessage = error.message;
    return { error: errorMessage };
  }
}

export async function getS3PresignedURL(size) {
  try {
    const respose = await api.get(
      "https://51264l4ryi.execute-api.eu-west-3.amazonaws.com/dev/presigned_urls",
      { params: {size: size}}
    );
    return respose;
  } catch (error) {
    console.log(error);
  }
}

export async function uploadToPresignedUrl(
  presignedUrl,
  file,
  setUploadProgress
) {


  let config = {
    method: 'PUT',
    maxBodyLength: Infinity,
    url: presignedUrl,
    headers: {
      'Content-Type': file.type 
    },
    data: file,
    onUploadProgress: (progressEvent) => {
      const percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      setUploadProgress(percentCompleted);
      console.log(`Upload Progress: ${percentCompleted}%`);
    }
  };

  try {
    const uploadResponse = await axios(config);
    console.log(uploadResponse);
    return uploadResponse;
  } catch (error) {
    console.log(error);
    throw error; // Re-throw the error to be handled by the calling function
  }
}


