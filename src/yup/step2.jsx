import * as Yup from "yup";

const ibanRegex = /^FR\d{2}\d{10}[A-Z0-9]{11}\d{2}$/;
const vatRegex = /^[A-Z0-9]{7,15}$/;

const exampleIban = "FR1420041010050500013M02606";
const exampleVat = "DE123456789";

const company_information = {
  company_name: "",
  address_headquarters: "",
  email: "",
  city: "",
  country: "",
  postal_code: "",
  company_vat_number: "",
  phone_number_office: "",
  phone_number_mobile: "",
  iban_number: "",
  electricity_bill: [],
  construction_permit: [],
  annual_number_report: [],
  recto_and_verse_link: [],
};

const company_informationSchema = Yup.object().shape({
  company_name: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, "This field can only contain letters")
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
    .matches(vatRegex, "Invalid VAT number (example: DE123456789)")
    .test(
      "not-example-vat",
      "Please enter a different VAT number",
      (value) => value !== exampleVat
    )
    .trim(),
  iban_number: Yup.string()
    .required("This field is required")
    .min(27, "Please enter at least 27 characters")
    .max(27, "IBAN number should be exactly 27 characters")
    .matches(
      ibanRegex,
      "Invalid French IBAN number (example: FR1420041010050500013M02606 )"
    )
    .test(
      "not-example-iban",
      "Please enter a different IBAN number",
      (value) => value !== exampleIban
    )
    .trim(),
  phone_number_office: Yup.string()
    .required("This field is required")
    .matches(/^\+?[0-9\s-]{7,15}$/, "Invalid phone number").min(10,"Invalid phone number").max(10,"Invalid phone number"),
  phone_number_mobile: Yup.string()
    .required("This field is required")
    .matches(/^\+?[0-9\s-]{7,15}$/, "Invalid phone number").min(10,"Invalid phone number").max(10,"Invalid phone number"),
  email: Yup.string()
    .required("This field is required")
    .email("Invalid email address"),
  annual_number_report: Yup.array().min(
    1,
    "At least one annual report is required."
  ),
  recto_and_verse_link: Yup.array().min(
    1,
    "At least one verse link is required."
  ),
  construction_permit: Yup.array().min(
    1,
    "At least one construction permit is required."
  ),
  electricity_bill: Yup.array().min(
    1,
    "At least one electricity bill is required."
  ),
});

export { company_informationSchema, company_information };
