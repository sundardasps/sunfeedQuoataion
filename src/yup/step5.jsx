
import * as Yup from "yup"
const  financial_statement= {
    deposit: "",
    down_payment: "",
    monthly_payment: "",
    total_payment: "",
  }





  const financialStatementSchema = Yup.object().shape({
    deposit: Yup.string()
      .required("This field is required")
      .trim(),
    down_payment: Yup.string()
      .required("This field is required")
      .trim(),
    monthly_payment: Yup.string()
      .required("This field is required")
      .trim(),
    total_payment: Yup.string()
      .required("This field is required")
      .trim(),
  });
  


  export {financialStatementSchema,financial_statement}