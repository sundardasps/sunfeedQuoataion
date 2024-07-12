
import * as Yup from "yup"
const contact_information = {
    company_name: "",
    customer_name: "",
    address_headquarters: "",
    address:"",
    address2:"",
    city: "",
    postal_code: "",
    country: "",
    company_vat_number: "",
    phone_number_office: "",
    phone_number_mobile: "",
    email: "",
  }


  const contactInformationSchema = Yup.object().shape({
    company_name: Yup.string()
      .required("Ce champ est requis")
      .min(2, "Veuillez saisir au moins 2 caractères")
      .trim(),
    customer_name: Yup.string()
      .required("Ce champ est requis")
      .min(2, "Veuillez saisir au moins 2 caractères")
      .trim(),
      address: Yup.string()
      .required("Ce champ est requis")
      .min(5, "Veuillez saisir au moins 5 caractères")
      .trim(),
      address2: Yup.string()
      .required("Ce champ est requis")
      .min(5, "Veuillez saisir au moins 5 caractères")
      .trim(),
    city: Yup.string()
      .required("Ce champ est requis")
      .min(2, "Veuillez saisir au moins 2 caractères")
      .trim(),
    postal_code: Yup.string()
      .required("Ce champ est requis")
      .matches(/^[0-9]{5}$/, "Code postal invalide"),
    country: Yup.string()
      .required("Ce champ est requis")
      .min(2, "Veuillez saisir au moins 2 caractères")
      .trim(),
    // company_vat_number: Yup.string()
    //   .required("Ce champ est requis")
    //   .min(5, "Veuillez saisir au moins 5 caractères")
    //   .trim(),
    phone_number_office: Yup.string()
      .required("Ce champ est requis")
      .matches(/^\+?[0-9\s-]{7,15}$/, "Numéro de téléphone invalide"),
    phone_number_mobile: Yup.string()
      .required("Ce champ est requis")
      .matches(/^\+?[0-9\s-]{7,15}$/, "Numéro de téléphone invalide"),
    email: Yup.string()
      .required("Ce champ est requis")
      .email("Adresse email invalide"),
  });


  export {contactInformationSchema,contact_information}