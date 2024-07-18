
import * as Yup from "yup"


const construction_site = {
  name: "",
  address: "",
  postal_code: "",
  country: "",
  city:"",
  sitedirector_contact: "",
  sitedirector_email: "",
  phone_office: "",
  phone_mobile: "",
  gps_tracker: [],
  site_pictures:[],
  videos:[],
  sky_image:"",
}

const constructionSiteSchema = Yup.object().shape({
  name: Yup.string()
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
  sitedirector_contact: Yup.string()
    .required("This field is required")
    .matches(/^\+?[1-9]\d{1,14}$/, "Please enter a valid contact number")
    .trim(),
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
  gps_tracker: Yup.array()
    .min(2, "At least one GPS tracker is required (Please click anywhere in map to select.) "),
    site_pictures: Yup.array()
    .min(1, "At least one site image is required."),
    videos: Yup.array()
    .min(1, "At least one site video  is required. "),
});

export  {constructionSiteSchema,construction_site} 
