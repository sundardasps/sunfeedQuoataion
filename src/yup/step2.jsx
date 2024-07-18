import * as Yup from "yup";
const company_information = {
  company_name: "",
  address_headquarters: "",
  city: "",
  postal_code: "",
  country: "",
  company_vat_number: "",
  phone_number_office: "",
  phone_number_mobile: "",
  iban_number: "",
  email: "",
  annual_number_report:[],
  recto_and_verse_link:[],
  construction_permit:[],
  electricity_bill:[]
};

const company_informationSchema = Yup.object().shape({
  company_name: Yup.string()
    .required("This field is required")
    .min(2, "Please enter at least 2 characters")
    .trim(),
  city: Yup.string()
    .required("This field is required")
    .min(2, "Please enter at least 2 characters")
    .trim(),
  postal_code: Yup.string()
    .required("This field is required")
    .matches(/^[0-9]{5}$/, "Invalid postal code"),
  country: Yup.string()
    .required("This field is required")
    .min(2, "Please enter at least 2 characters")
    .trim(),
    address_headquarters: Yup.string()
    .required("This field is required")
    .min(2, "Please enter at least 2 characters")
    .trim(),
    company_vat_number: Yup.string()
    .required("This field is required")
    .matches(/^\+?[0-9\s-]{7,15}$/, "Invalid phone number")
    .trim(),
  iban_number: Yup.string()
    .required("This field is required")
    .min(5, "Please enter at least 5 characters")
    .trim(),
  phone_number_office: Yup.string()
    .required("This field is required")
    .matches(/^\+?[0-9\s-]{7,15}$/, "Invalid phone number"),
  phone_number_mobile: Yup.string()
    .required("This field is required")
    .matches(/^\+?[0-9\s-]{7,15}$/, "Invalid phone number"),
  email: Yup.string()
    .required("This field is required")
    .email("Invalid email address"),
    annual_number_report:Yup.array().min(1,"At least one annual report is required."),
    recto_and_verse_link:Yup.array().min(1,"At least one verse link is required."),
    construction_permit:Yup.array().min(1,"At least one construction permit is required."),
    electricity_bill:Yup.array().min(1,"At least one electricity bill is required."),
});

export { company_informationSchema, company_information };

