
import * as Yup from "yup"
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
    }



    const company_informationSchema = Yup.object().shape({
      company_name: Yup.string()
      .required("Ce champ est requis")
      .min(2, "Veuillez saisir au moins 2 caractères")
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
      iban_number: Yup.string()
      .required("Ce champ est requis")
      .min(5, "Veuillez saisir au moins 5 caractères")
      .trim(),

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


  export {company_informationSchema,company_information}


  
// import * as Yup from "yup"
// const  product_information = {
//     inverters: "",
//     solar_panel: "",
//     fixation_type: "",
//     cable: "",
//     cable_length: 0,
//     electrical_board: "",
//     option: "",
//     ground_opening_size: 0,
//     earthworks: 0,
//     driver_transformer: "",
//     waterproof_coating: 0,
//     technical_studies: "",
//     construction_permit_fees: 0,
//     engine_rental: 0,
//     dumpster: "",
//     complete_kit: 0,
//     complete_warehouse: "",
//     carport: 0,
//     workforce: 0,
//   }





//   const productInformationSchema = Yup.object().shape({
//     inverters: Yup.string()
//       .required("Ce champ est requis")
//       .min(2, "Veuillez saisir au moins 2 caractères")
//       .trim(),
//     solar_panel: Yup.string()
//       .required("Ce champ est requis")
//       .min(2, "Veuillez saisir au moins 2 caractères")
//       .trim(),
//     fixation_type: Yup.string()
//       .required("Ce champ est requis")
//       .min(2, "Veuillez saisir au moins 2 caractères")
//       .trim(),
//     cable: Yup.string()
//       .required("Ce champ est requis")
//       .min(2, "Veuillez saisir au moins 2 caractères")
//       .trim(),
//     cable_length: Yup.number()
//       .required("Ce champ est requis")
//       .min(0, "La longueur du câble doit être au moins 0"),
//     electrical_board: Yup.string()
//       .required("Ce champ est requis")
//       .min(2, "Veuillez saisir au moins 2 caractères")
//       .trim(),
//     option: Yup.string()
//       .required("Ce champ est requis")
//       .min(2, "Veuillez saisir au moins 2 caractères")
//       .trim(),
//     ground_opening_size: Yup.number()
//       .required("Ce champ est requis")
//       .min(0, "La taille de l'ouverture du sol doit être au moins 0"),
//     earthworks: Yup.number()
//       .required("Ce champ est requis")
//       .min(0, "Les travaux de terrassement doivent être au moins 0"),
//     driver_transformer: Yup.string()
//       .required("Ce champ est requis")
//       .min(2, "Veuillez saisir au moins 2 caractères")
//       .trim(),
//     waterproof_coating: Yup.number()
//       .required("Ce champ est requis")
//       .min(0, "Le revêtement étanche doit être au moins 0"),
//     technical_studies: Yup.string()
//       .required("Ce champ est requis")
//       .min(2, "Veuillez saisir au moins 2 caractères")
//       .trim(),
//     construction_permit_fees: Yup.number()
//       .required("Ce champ est requis")
//       .min(0, "Les frais de permis de construire doivent être au moins 0"),
//     engine_rental: Yup.number()
//       .required("Ce champ est requis")
//       .min(0, "La location de l'engin doit être au moins 0"),
//     dumpster: Yup.string()
//       .required("Ce champ est requis")
//       .min(2, "Veuillez saisir au moins 2 caractères")
//       .trim(),
//     complete_kit: Yup.number()
//       .required("Ce champ est requis")
//       .min(0, "Le kit complet doit être au moins 0"),
//     complete_warehouse: Yup.string()
//       .required("Ce champ est requis")
//       .min(2, "Veuillez saisir au moins 2 caractères")
//       .trim(),
//     carport: Yup.number()
//       .required("Ce champ est requis")
//       .min(0, "Le carport doit être au moins 0"),
//     workforce: Yup.number()
//       .required("Ce champ est requis")
//       .min(0, "La main-d'œuvre doit être au moins 0"),
//   });
  
//   export default productInformationSchema;
  


//   export {productInformationSchema,product_information}