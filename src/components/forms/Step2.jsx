import InputLabel from "../common/InputLabel";
import InputField from "../common/InputField";
import FieldTitle from "../common/FieldTitle";
import FileUpload from "../common/FileUpload"; // Corrected from FileUploade
import ErrorMssgField from "../common/ErrorMssgField";
import FormTitle from "../common/FormTitle";
import { Button } from "flowbite-react";
import { useFormik } from "formik";
import { ChooseFile } from "../common/ChooseFile";
import { ArrowRight } from "flowbite-react-icons/outline";
import { useNavigate } from "react-router-dom";
import { numberValidation } from "../../utils/onlyNumbervalidation";
import { useDispatch, useSelector } from "react-redux";
import { company_informationUpdate, uuidUpdate } from "../../redux/slice";
import { company_informationSchema } from "../../yup/step2";
import { allowedFileTypes } from "../../utils/constents";
import { s3FileUploader } from "../../utils/addNewSite";
import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { useJsApiLoader } from "@react-google-maps/api";
import toast from "react-hot-toast";

function Step2() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  const [file, setFile] = useState([]);

  const data = useSelector((state) => state.proposalDetails);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ["places", "drawing"],
  });
  const initialValue = {
    company_name: data?.invoice?.company_information?.company_name || "",
    address_headquarters:
      data?.invoice?.company_information?.address_headquarters || "",
    city: data?.invoice?.company_information?.city || "",
    postal_code: data?.invoice?.company_information?.postal_code || "",
    country: data?.invoice?.company_information?.country || "",
    company_vat_number:
      data?.invoice?.company_information?.company_vat_number || "",
    phone_number_office:
      data?.invoice?.company_information?.phone_number_office || "",
    phone_number_mobile:
      data?.invoice?.company_information?.phone_number_mobile || "",
    iban_number: data?.invoice?.company_information?.iban_number || "",
    email: data?.invoice?.company_information?.email || "",
    annual_number_report:
      data?.invoice?.company_information?.annual_number_report || [],
    recto_and_verse_link:
      data?.invoice?.company_information?.recto_and_verse_link || [],
    construction_permit:
      data?.invoice?.company_information?.construction_permit || [],
    electricity_bill:
      data?.invoice?.company_information?.electricity_bill || [],
  };

  const {
    errors,
    handleBlur,
    handleChange,
    values,
    touched,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: initialValue,
    validationSchema: company_informationSchema,
    onSubmit: async (value) => {
      try {
        setloading(true);
        const administration_files = [
          ...value.recto_and_verse_link,
          ...value.construction_permit,
          ...value.electricity_bill,
          ...value.annual_number_report,
        ];

        const nonEmptyFiles = administration_files.filter(
          (file) => file.name && file
        );

        

        const response = await s3FileUploader(
          nonEmptyFiles.length,
          nonEmptyFiles
        );

        if (response.length > 0) {
          const uuids = {
            administration_files: response,
          };
          dispatch(uuidUpdate(uuids));
        }

          const dispatchValues = {
            company_name: value.company_name,
            address_headquarters: value.address_headquarters,
            email: value.email,
            city: value.city,
            country: value.country,
            postal_code: value.postal_code,
            company_vat_number: value.company_vat_number,
            phone_number_office: value.phone_number_office,
            phone_number_mobile: value.phone_number_mobile,
            iban_number: value.iban_number,
            electricity_bill: [{}],
            construction_permit: [{}],
            annual_number_report: [{}],
            recto_and_verse_link: [{}],
          };
          dispatch(company_informationUpdate(dispatchValues));
          navigate("/step3");

      } catch (error) {
        console.log(error);
      } finally {
        setloading(false);
      }
    },
    enableReinitialize: true,
  });

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-md flex-col gap-4 w-full rounded-md border-2 p-5 space-y-2 bg-[#F8F8F8] border-[#65AC32]"
    >
      <FormTitle label="Company information" />
      <div>
        <div className="mb-2 block">
          <InputLabel label="Company Name" />
        </div>
        <InputField
          value={values.company_name}
          name="company_name"
          onBlur={handleBlur}
          onChange={handleChange}
          disabled={loading}
        />
        {errors.company_name && touched.company_name && (
          <ErrorMssgField errorMessage={errors.company_name} />
        )}
      </div>
      <div>
        <div className="mb-2 block">
          <InputLabel label="Address Headquarters " />
        </div>
        <InputField
          value={values.address_headquarters}
          name="address_headquarters"
          onBlur={handleBlur}
          onChange={handleChange}
          disabled={loading}
        />
        {errors.address_headquarters && touched.address_headquarters && (
          <ErrorMssgField errorMessage={errors.address_headquarters} />
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
          disabled={loading}
        />
        {errors.city && touched.city && (
          <ErrorMssgField errorMessage={errors.city} />
        )}
      </div>
      <div>
        <div className="mb-2 block">
          <InputLabel label="Postal Code" />
        </div>
        <InputField
          value={values.postal_code}
          name="postal_code"
          onBlur={handleBlur}
          onChange={(e) => numberValidation(e, handleChange)}
          disabled={loading}
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
          disabled={loading}
        />
        {errors.country && touched.country && (
          <ErrorMssgField errorMessage={errors.country} />
        )}
      </div>
      <div>
        <div className="mb-2 block">
          <InputLabel label="Phone Number (Office)" />
        </div>
        <InputField
          value={values.phone_number_office}
          name="phone_number_office"
          onBlur={handleBlur}
          onChange={(e) => numberValidation(e, handleChange)}
          disabled={loading}
        />
        {errors.phone_number_office && touched.phone_number_office && (
          <ErrorMssgField errorMessage={errors.phone_number_office} />
        )}
      </div>
      <div>
        <div className="mb-2 block">
          <InputLabel label="Phone Number (Mobile)" />
        </div>
        <InputField
          value={values.phone_number_mobile}
          name="phone_number_mobile"
          onBlur={handleBlur}
          onChange={(e) => numberValidation(e, handleChange)}
          disabled={loading}
        />
        {errors.phone_number_mobile && touched.phone_number_mobile && (
          <ErrorMssgField errorMessage={errors.phone_number_mobile} />
        )}
      </div>
      <div>
        <div className="mb-2 block">
          <InputLabel label="Email" />
        </div>
        <InputField
          value={values.email}
          name="email"
          onBlur={handleBlur}
          onChange={handleChange}
          disabled={loading}
        />
        {errors.email && touched.email && (
          <ErrorMssgField errorMessage={errors.email} />
        )}
      </div>
      <div>
        <div className="mb-2 block">
          <InputLabel label="Company VAT Number" />
        </div>
        <InputField
          value={values.company_vat_number}
          name="company_vat_number"
          onBlur={handleBlur}
          onChange={handleChange}
          disabled={loading}
        />
        {errors.company_vat_number && touched.company_vat_number && (
          <ErrorMssgField errorMessage={errors.company_vat_number} />
        )}
      </div>
      <div>
        <div className="mb-2 block">
          <InputLabel label="IBAN Number" />
        </div>
        <InputField
          value={values.iban_number}
          name="iban_number"
          onBlur={handleBlur}
          onChange={handleChange}
          disabled={loading}
        />
        {errors.iban_number && touched.iban_number && (
          <ErrorMssgField errorMessage={errors.iban_number} />
        )}
      </div>
      <div>
        <div className="mb-2 block">
          <FieldTitle
            label="Annual Numbers Report"
            htmlFor="Annual Numbers Report"
          />
        </div>
        <ChooseFile
          key="annual_number_report"
          name="annual_number_report"
          setFieldValue={setFieldValue}
          fileType={allowedFileTypes}
          alertType="Document/img"
          disabled={loading}
        />
        {errors.annual_number_report && touched.annual_number_report && (
          <ErrorMssgField errorMessage={errors.annual_number_report} />
        )}
      </div>
      <div>
        <div className="mb-2 block">
          <FieldTitle
            label="ID Recto and Verso 2 Link"
            htmlFor="ID Recto and Verso 2 Link"
          />
        </div>
        <ChooseFile
          key="recto_and_verse_link"
          name="recto_and_verse_link"
          setFieldValue={setFieldValue}
          fileType={allowedFileTypes}
          alertType="Document/img"
          disabled={loading}
        />
        {errors.recto_and_verse_link && touched.recto_and_verse_link && (
          <ErrorMssgField errorMessage={errors.recto_and_verse_link} />
        )}
      </div>
      <div>
        <div className="mb-2 block">
          <FieldTitle
            label="Construction Permit"
            htmlFor="Construction Permit"
          />
        </div>
        <ChooseFile
          key="construction_permit"
          name="construction_permit"
          setFieldValue={setFieldValue}
          fileType={allowedFileTypes}
          alertType="Document/img"
          disabled={loading}
        />
        {errors.construction_permit && touched.construction_permit && (
          <ErrorMssgField errorMessage={errors.construction_permit} />
        )}
      </div>
      <div>
        <div className="mb-2 block">
          <FieldTitle
            label="Electricity Bill (last 12 months)"
            htmlFor="Electricity Bill (last 12 months)"
          />
        </div>
        <FileUpload
          key="electricity_bill"
          field="electricity_bill"
          allowedFileTypes={allowedFileTypes}
          setFile={setFile}
          setFieldValue={setFieldValue}
          storedFile={file}
          alertType="Document/img"
          disabled={loading}
        />
        {errors.electricity_bill && touched.electricity_bill && (
          <ErrorMssgField errorMessage={errors.electricity_bill} />
        )}
      </div>
      <Button disabled={loading} className="bg-[#65AC32]" type="submit">
        {loading ? (
          "Uploading..."
        ) : (
          <>
            Next
            <ArrowRight />
          </>
        )}
      </Button>
    </form>
  );
}

export default Step2;
