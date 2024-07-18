import Location from "../common/GoogleMap";
import FormTitle from "../common/FormTitle";
import InputLabel from "../common/InputLabel";
import InputField from "../common/InputField";
import FileUploade from "../common/FileUpload";
import ErrorMssgField from "../common/ErrorMssgField";
import { Button } from "flowbite-react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { numberValidation } from "../../utils/onlyNumbervalidation";
import { construction_site, constructionSiteSchema } from "../../yup/step3";
import { construction_siteUpdate } from "../../redux/slice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import html2canvas from "html2canvas";
import { useState } from "react";
import { uploadToPresignedUrl } from "../../api";
import { addNewSite } from "../../utils/addNewSite";
import {
  allowedIMGFileTypes,
  allowedVideoFileTypes,
} from "../../utils/constents";
import { Toaster } from "react-hot-toast";

function Step3() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [videoFile, setVideoFile] = useState([]);
  const [imgFile, setIMGFile] = useState([]);
  const [location, setLocation] = useState({
    lat: 48.856614,
    lng: 2.3522219,
  });
  const data = useSelector((state) => state.proposalDetails);
  const {
    errors,
    handleBlur,
    handleChange,
    values,
    touched,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: construction_site,
    validationSchema: constructionSiteSchema,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const response = await addNewSite(values, setFieldValue, dispatch);
        if (response.message) {
          setLoading(false);
          navigate("/step4");
        }
      } catch (error) {
        setLoading(false);
        console.log(error, "error from axios");
      }
    },
  });

  return (
    <div className="w-full  p-5 bg-[#F8F8F8] rounded-md border-2 border-[#65AC32]  md:mx-5">
      <form className=" md:flex justify-evenly  w-full    ">
        <div className="w-full md:w-1/3">
          <FormTitle label="Construction Site Information" />
          <div>
            <div className="mb-2 block">
              <InputLabel label="Name of the Site" />
            </div>
            <InputField
              value={values.name}
              name="name"
              onBlur={handleBlur}
              onChange={handleChange}
              disabled={loading}
            />
            {errors.name && touched.name && (
              <ErrorMssgField errorMessage={errors.name} />
            )}
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Address " />
            </div>
            <InputField
              value={values.address}
              name="address"
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.address && touched.address && (
              <ErrorMssgField errorMessage={errors.address} />
            )}
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="City " />
            </div>
            <InputField
              value={values.city}
              name="city"
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.city && touched.city && (
              <ErrorMssgField errorMessage={errors.city} />
            )}
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Zip Code" />
            </div>
            <InputField
              value={values.postal_code}
              name="postal_code"
              onBlur={handleBlur}
              onChange={(e) => numberValidation(e, handleChange)}
            />
            {errors.postal_code && touched.postal_code && (
              <ErrorMssgField errorMessage={errors.postal_code} />
            )}
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Country" />
            </div>
            <InputField
              value={values.country}
              name="country"
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.country && touched.country && (
              <ErrorMssgField errorMessage={errors.country} />
            )}
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Site Director Email" />
            </div>
            <InputField
              value={values.sitedirector_email}
              name="sitedirector_email"
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.sitedirector_email && touched.sitedirector_email && (
              <ErrorMssgField errorMessage={errors.sitedirector_email} />
            )}
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Site Director Contact" />
            </div>
            <InputField
              value={values.sitedirector_contact}
              name="sitedirector_contact"
              onBlur={handleBlur}
              onChange={(e) => numberValidation(e, handleChange)}
            />
            {errors.sitedirector_contact && touched.sitedirector_contact && (
              <ErrorMssgField errorMessage={errors.sitedirector_contact} />
            )}
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Phone Number (Office)" />
            </div>
            <InputField
              value={values.phone_office}
              name="phone_office"
              onBlur={handleBlur}
              onChange={(e) => numberValidation(e, handleChange)}
            />
            {errors.phone_office && touched.phone_office && (
              <ErrorMssgField errorMessage={errors.phone_office} />
            )}
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Phone Number (Mobile)" />
            </div>
            <InputField
              value={values.phone_mobile}
              name="phone_mobile"
              onBlur={handleBlur}
              onChange={(e) => numberValidation(e, handleChange)}
            />
            {errors.phone_mobile && touched.phone_mobile && (
              <ErrorMssgField errorMessage={errors.phone_mobile} />
            )}
          </div>
        </div>
        <div className="w-full md:w-2/4 mt-5">
          <FormTitle label="Location Information" />
          <Location
            location={location}
            setLocation={setLocation}
            setFieldValue={setFieldValue}
            errors={errors}
          />
          <div className="my-5">
            <div className="mb-2 block">
              <InputLabel label="Site Video" />
            </div>
            <FileUploade
              field={"videos"}
              setFile={setVideoFile}
              storedFile={videoFile}
              allowedFileTypes={allowedVideoFileTypes}
              setFieldValue={setFieldValue}
              alertType={"videos"}
              disabled={loading}
            />
          {errors.videos && touched.videos && (
              <ErrorMssgField errorMessage={errors.videos} />
            )}
          </div>
          <div className="my-2">
            <div className="mb-2 block">
              <InputLabel label="Site Images" />
            </div>
            <FileUploade
              field={"site_pictures"}
              setFile={setIMGFile}
              storedFile={imgFile}
              allowedFileTypes={allowedIMGFileTypes}
              setFieldValue={setFieldValue}
              alertType={"photos"}
              disabled={loading}
            />
          {errors.site_pictures && touched.site_pictures && (
              <ErrorMssgField errorMessage={errors.site_pictures} />
            )}
          </div>
        </div>
      </form>
      <div className="flex justify-center items-center gap-3 my-5">
        <h3>{data.invoice.construction_site.length - 1} site added </h3>
        <Button className="bg-[#65AC32]" onClick={handleSubmit}>
          {loading ? "Uploading..." : "Add new site"}
        </Button>
      </div>
      <div className="flex justify-end mt-5">
        <Button
          disabled={Object.values(
            data.invoice.construction_site[
              data.invoice.construction_site.length - 1
            ]
          ).some((value) => value === "")}
          className="bg-[#65AC32]"
          onClick={() => navigate("/step4")}
        >
          Next
        </Button>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default Step3;
