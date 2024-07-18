import axios from "axios";
import html2canvas from "html2canvas";
import { getS3PresignedURL, uploadToPresignedUrl } from "../api";
import { construction_siteUpdate, uuidUpdate } from "../redux/slice";

export async function addNewSite(values, setFieldValue, dispatch) {
  try {
    const { videos, site_pictures } = values;

    const screenshotFile = await captureScreenshot();

    const skyImgUploadPromise = s3FileUploader(1, [screenshotFile], true);
    const imagesUploadPromise = s3FileUploader(site_pictures.length, site_pictures);
    const videosUploadPromise = s3FileUploader(videos.length, videos);

    const [skyImgUpload, imagesUpload, videosUpload] = await Promise.all([
      skyImgUploadPromise,
      imagesUploadPromise,
      videosUploadPromise,
    ]);
  console.log(skyImgUpload);
  console.log(imagesUpload);
  console.log(videosUpload);
  
      // Construct the new site object
      const newSite = {
        ...values,
        sky_image: skyImgUpload.skyIMG,
        site_pictures: imagesUpload,
        videos: videosUpload,
      };
  
      // Dispatch the updated construction site data
      console.log(newSite,'fff');
      dispatch(construction_siteUpdate([{ ...newSite }]));
  
      // Update uuids
      const uuids = {
        sky_picture:[skyImgUpload.key],
        site_pictures: imagesUpload,
        videos: videosUpload,
      };
  
      // Dispatch the uuids update
      dispatch(uuidUpdate(uuids));
      return {message:"New site added.."}

  } catch (error) {
    console.log(error);
  }
}

async function captureScreenshot() {
  const element = document.getElementById("print");
  const canvas = await html2canvas(element, {
    useCORS: true,
    allowTaint: true,
  });
  const data = canvas.toDataURL("image/jpg");
  const byteString = atob(data.split(",")[1]);
  const mimeString = data.split(",")[0].split(":")[1].split(";")[0];
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  const blobData = new Blob([ab], { type: mimeString });
  return new File([blobData], `${new Date().getTime()}-siteImg.png`, {
    type: "image/png",
  });
}

export async function s3FileUploader(size, files, isSkyImg = false) {
  if (size === 0) return [];

  const response = await getS3PresignedURL(size);
  if (response.status !== 200) {
    throw new Error("Failed to get S3 presigned URL");
  }

  const uploadPromises = [];
  const uploadedKeys = [];

  for (let i = 0; i < size; i++) {
    const file = files[i];
    const s3Url = Object.values(response.data[i])[0];
    const s3URLKey = Object.keys(response.data[i])[0];
    const uploadPromise = uploadToPresignedUrl(s3Url, file).then(uploadResponse => {
      if (uploadResponse.status === 200) {
        uploadedKeys.push(s3URLKey);
      } else {
        throw new Error(`Failed to upload file: ${file.name}`);
      }
    });
    uploadPromises.push(uploadPromise);
  }

  await Promise.all(uploadPromises);

  if (isSkyImg) {
    const fullURL = new URL(Object.values(response.data[0])[0]);
    const savedIMGURL = `${fullURL.protocol}//${fullURL.hostname}/${Object.keys(response.data[0])[0]}`;
    return { skyIMG: savedIMGURL, key: Object.keys(response.data[0])[0] };
  }

  return uploadedKeys;
}
