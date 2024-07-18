
import * as Yup from "yup"
const  product_information = {
    inverters: "",
    solar_panel: "",
    fixation_type: "",
    cable: "",
    // cable_length: "",
    electrical_board: "",
    // option: "",
    ground_opening_size: "",
    earthworks: "",
    driver_transformer: "",
    waterproof_coating: "",
    technical_studies: "",
    construction_permit_fees: "",
    engine_rental: "",
    dumpster: "",
    // complete_kit: "",
    // complete_warehouse: "",
    // carport: "",
    workforce: "",
  }





  const productInformationSchema = Yup.object().shape({
    inverters: Yup.string()
      .required("This field is required")
      .trim(),
    solar_panel: Yup.string()
      .required("This field is required")
      .trim(),
    fixation_type: Yup.string()
      .required("This field is required")
      .trim(),
    cable: Yup.string()
      .required("This field is required")
      .trim(),
    // cable_length: Yup.number()
    //   .required("This field is required")
    //   .typeError("Cable length must be a number")
    //   .positive("Cable length must be a positive number"),
    electrical_board: Yup.string()
      .required("This field is required")
      .trim(),
    // option: Yup.string()
    //   .required("This field is required")
    //   .trim(),
    ground_opening_size: Yup.number()
      .required("This field is required")
      .typeError("Ground opening size must be a number")
      .positive("Ground opening size must be a positive number"),
    earthworks: Yup.number()
      .required("This field is required")
      .typeError("Earthworks must be a number")
      .positive("Earthworks must be a positive number"),
    driver_transformer: Yup.string()
      .required("This field is required")
      .trim(),
    waterproof_coating: Yup.number()
      .required("This field is required")
      .typeError("Waterproof coating must be a number")
      .positive("Waterproof coating must be a positive number"),
    technical_studies: Yup.string()
      .required("This field is required")
      .trim(),
    construction_permit_fees: Yup.number()
      .required("This field is required")
      .typeError("Construction permit fees must be a number")
      .positive("Construction permit fees must be a positive number"),
    engine_rental: Yup.number()
      .required("This field is required")
      .typeError("Engine rental must be a number")
      .positive("Engine rental must be a positive number"),
    dumpster: Yup.string()
      .required("This field is required")
      .trim(),
    // complete_kit: Yup.number()
    //   .required("This field is required")
    //   .typeError("Complete kit must be a number")
    //   .positive("Complete kit must be a positive number"),
    // complete_warehouse: Yup.string()
    //   .required("This field is required")
    //   .trim(),
    // carport: Yup.number()
    //   .required("This field is required")
    //   .typeError("Carport must be a number")
    //   .positive("Carport must be a positive number"),
    workforce: Yup.number()
      .required("This field is required")
      .typeError("Workforce must be a number")
      .positive("Workforce must be a positive number"),
  });
  
  export default productInformationSchema;
  


  export {productInformationSchema,product_information}