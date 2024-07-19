
import * as Yup from "yup"
const contact_information = {
    company_name: "",
    customer_name: "",
    address_headquarters: "",
    // address:"",
    address2:"",
    city: "",
    postal_code: "",
    country: "",
    // company_vat_number: "",
    phone_number_office: "",
    phone_number_mobile: "",
    email: "",
  }

  const contactInformationSchema = Yup.object().shape({
    company_name: Yup.string().matches(/^[a-zA-Z\s]+$/,"This field can only contain letters")
      .required("This field is required")
      .min(2, "Please enter at least 2 characters")
      .trim(),
    customer_name: Yup.string().matches(/^[a-zA-Z\s]+$/,"This field can only contain letters")
      .required("This field is required")
      .min(2, "Please enter at least 2 characters")
      .trim(),
      address_headquarters: Yup.string()
      .required("This field is required")
      .min(5, "Please enter at least 5 characters")
      .trim(),
    address2: Yup.string()
      .required("This field is required")
      .min(5, "Please enter at least 5 characters")
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
    phone_number_office: Yup.string()
      .required("This field is required")
      .matches(/^\+?[0-9\s-]{7,15}$/, "Invalid phone number")
      .min(10,"Invalid phone number").max(10,"Invalid phone number"),
    phone_number_mobile: Yup.string()
      .required("This field is required")
      .matches(/^\+?[0-9\s-]{7,15}$/, "Invalid phone number")
      .min(10,"Invalid phone number").max(10,"Invalid phone number"),
    email: Yup.string()
      .required("This field is required")
      .email("Invalid email address"),
  });
  


  export {contactInformationSchema,contact_information}