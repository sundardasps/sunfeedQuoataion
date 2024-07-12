
import * as Yup from "yup"


const construction_site = {
  name_of_site: "",
  address: "",
  postal_code: "",
  country: "",
  city:"",
  sitedirector_contact: "",
  sitedirector_email: "",
  phone_office: "",
  phone_mobile: "",
  gps_tracker: [],
}

const constructionSiteSchema = Yup.object().shape({
  name_of_site: Yup.string()
    .required("This field is required")
    .min(2, "Please enter at least 2 characters")
    .trim(),
  address: Yup.string()
    .required("This field is required")
    .min(5, "Please enter at least 5 characters")
    .trim(),
    city: Yup.string()
    .required("This field is required")
    .min(5, "Please enter at least 5 characters")
    .trim(),
  postal_code: Yup.string()
    .required("This field is required")
    .matches(/^\d{5}$/, "Please enter a valid postal code")
    .trim(),
  country: Yup.string()
    .required("This field is required")
    .trim(),
  // sitedirector_contact: Yup.string()
  //   .required("This field is required")
  //   .matches(/^\+?[1-9]\d{1,14}$/, "Please enter a valid contact number")
  //   .trim(),
  sitedirector_email: Yup.string()
    .required("This field is required")
    .email("Please enter a valid email address")
    .trim(),
  phone_office: Yup.string()
    .required("This field is required")
    .matches(/^\+?[1-9]\d{1,14}$/, "Please enter a valid contact number")
    .trim(),
  phone_mobile: Yup.string()
    .required("This field is required")
    .matches(/^\+?[1-9]\d{1,14}$/, "Please enter a valid contact number")
    .trim(),
  // gps_tracker: Yup.array()
  //   .of(
  //     Yup.object().shape({
  //       lat: Yup.number()
  //         .required("Latitude is required")
  //         .min(-90, "Latitude must be between -90 and 90")
  //         .max(90, "Latitude must be between -90 and 90"),
  //       lng: Yup.number()
  //         .required("Longitude is required")
  //         .min(-180, "Longitude must be between -180 and 180")
  //         .max(180, "Longitude must be between -180 and 180"),
  //     })
  //   )
  //   .min(1, "At least one GPS tracker is required"),
});

export  {constructionSiteSchema,construction_site} 


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