
import * as Yup from "yup"
const  financial_statement= {
    payment_method:"",
    deposit: "",
    down_payment: "",
    monthly_payment: "",
    total_payment: "",
    number_of_months: "",
    interest: "",
  }





  const financialStatementSchema = Yup.object().shape({
    // deposit: Yup.string()
    //   .required("This field is required")
    //   .trim(),
    // down_payment: Yup.string()
    //   .required("This field is required")
    //   .trim(),
    // monthly_payment: Yup.string()
    //   .required("This field is required")
    //   .trim(),
    total_payment: Yup.string().test(
      "is-greater-than-500",
      "The value must be greater than 500",
      (value) => {
        return parseFloat(value) > 500;
      }
    )
    .required("This field is required")
    .trim()
    
    .matches(/^\d+(\.\d{1,2})?$/, "The value must be a valid number"),
  });
  


  export {financialStatementSchema,financial_statement}