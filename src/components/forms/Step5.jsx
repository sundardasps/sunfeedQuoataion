import FormTitle from "../common/FormTitle";
import FieldTitle from "../common/FieldTitle";
import InputLabel from "../common/InputLabel";
import InputField from "../common/InputField";
import ErrorMssgField from "../common/ErrorMssgField";
import { useFormik } from "formik";
import { ArrowRight } from "flowbite-react-icons/outline";
import { useNavigate } from "react-router-dom";
import { numberValidation } from "../../utils/onlyNumbervalidation";
import { useEffect, useState } from "react";
import { monthlyInstallments } from "../../utils/constents";
import { financialStatementSchema } from "../../yup/step5";
import { useDispatch, useSelector } from "react-redux";
import { financial_statementUpdate } from "../../redux/slice";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { addInvoice } from "../../api";
import toast, { Toaster } from "react-hot-toast";

function Step5() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [month, setMonth] = useState(0);
  const [loading, setLoading] = useState(false);
  const data = useSelector((state) => state.proposalDetails);
  const monthAlreadyHave = Number(
    data.invoice.financial_statement.number_of_months
  );

  console.log(monthAlreadyHave);
  const availableMonths = [
    "18",
    "24",
    "30",
    "36",
    "42",
    "48",
    "54",
    "60",
    "63",
  ];

  const {
    errors,
    handleBlur,
    handleChange,
    values,
    touched,
    handleSubmit,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: data.invoice.financial_statement,
    validationSchema: financialStatementSchema,
    onSubmit: async (values) => {
      try {

      setLoading(true)
      dispatch(financial_statementUpdate(values));
      resetForm()
      navigate("/reportoverview");        
      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    },
  });

  const handleDecrement = () => {
    setMonth((curr) => (curr > 0 ? curr - 1 : curr));
  };

  const handleIncrement = () => {
    setMonth((curr) => (curr < availableMonths.length - 1 ? curr + 1 : curr));
  };

  useEffect(() => {
    const calculation = (totalAmount, totalMonths, deposite) => {
      const amount = Number(totalAmount);
      const month = Number(totalMonths);
      const depositeNumber = Number(deposite);

      if (amount <= depositeNumber || amount < 500 ) {
        setFieldValue("monthly_payment", "");
        setFieldValue("interest", "");
        return;
      }
      

      const entries = monthlyInstallments.filter(
        ({ months }) => months === month
      );
      entries.forEach((values) => {
        let lowerLimit, upperLimit;
        if (values.range.includes("-")) {
          [lowerLimit, upperLimit] = values.range.split("-");
        } else {
          lowerLimit = upperLimit = parseInt(values.range);
        }

        if (
          (amount >= Number(lowerLimit) && amount <= Number(upperLimit)) ||
          amount > 50000
        ) {
          const totalValue = amount * values.value - depositeNumber;
          const installment = Math.floor(totalValue / 100);
          setFieldValue("interest", values.value);
          setFieldValue("monthly_payment", installment);
        }
      });
    };

    if (values.total_payment && availableMonths[month]) {
      calculation(values.total_payment, availableMonths[month], values.deposit);
    }
  }, [month, values.total_payment, values.deposit]);

  useEffect(() => {
    setFieldValue("number_of_months", availableMonths[month]);
  }, [month]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-md flex-col gap-4 w-full rounded-md border-2 p-5 space-y-2 bg-[#F8F8F8] border-[#65AC32] "
    >
      <FormTitle label="Financial Statement" />
      <FieldTitle label="Payment method" />
      <div className="flex gap-4 justify-between items-start">
        <div className="w-2/3 ">
          <div className="flex items-center gap-2">
            <Checkbox
              id="remember"
              className="cursor-pointer"
              checked={values.payment_method === "full"}
              onChange={() => setFieldValue("payment_method", "full")}
            />
            <Label htmlFor="remember">Full Payment</Label>
          </div>
        </div>
        <div className="w-2/3 ">
          <div className="flex items-center gap-2">
            <Checkbox
              id="remember"
              className="cursor-pointer"
              checked={values.payment_method === "monthly"}
              onChange={() => setFieldValue("payment_method", "monthly")}
            />
            <Label htmlFor="remember">Monthly Instalments</Label>
          </div>
        </div>
      </div>
      {values?.payment_method === "full" ||
      values?.payment_method === "monthly" ? (
        <div>
          <div className="mb-2 block">
            <InputLabel label="Total Payment" />
          </div>
          <InputField
            value={values.total_payment}
            name="total_payment"
            onBlur={handleBlur}
            onChange={(e) => numberValidation(e, handleChange)}
            disabled={loading}
          />
          {errors.total_payment && touched.total_payment && (
            <ErrorMssgField errorMessage={errors.total_payment} />
          )}
        </div>
      ) : (
        ""
      )}
      {values?.payment_method === "monthly" ? (
        <>
          {" "}
          <div className="flex justify-center sm:justify-evenly gap-2  items-end  ">
            <div className=" transition-transform  ">
              <div className="flex justify-center items-center t  gap-1 ">
                <InputLabel label="No. Of Months" />
              </div>
              <div className="flex w-min border-2 rounded-xl">
                <Button
                  onClick={handleDecrement}
                  className="rounded-r-none bg-slate-200 text-black "
                  disabled={loading}
                >
                  -
                </Button>
                <input
                  type="text"
                  name="number_of_months"
                  className="w-12 border-none text-center "
                  value={availableMonths[month]}
                  disabled={loading}
                />
                <Button
                  onClick={handleIncrement}
                  className="rounded-l-none bg-slate-200 text-black"
                  disabled={loading}
                >
                  +
                </Button>
              </div>
            </div>
            <div className="">
              <div className="flex justify-center items-center  gap-1   ">
                <InputLabel label="Rate Of Interest " />
              </div>

              <TextInput disabled={loading} value={values.interest} className="w-32 " />

              {/* <div className="flex w-min border-2 rounded-xl">
                <Button className="rounded-r-none bg-slate-200 text-black ">
                  -
                </Button>
                <input type="text" className="w-10 border-none text-center" />
                <Button className="rounded-l-none bg-slate-200 text-black">
                  +
                </Button>
              </div> */}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Deposit " />
            </div>
            <InputField
              value={values.deposit}
              name="deposit"
              onBlur={handleBlur}
              onChange={(e) => numberValidation(e, handleChange)}
              disabled={loading}
            />
            {errors.deposit && touched.deposit && (
              <ErrorMssgField errorMessage={errors.deposit} />
            )}
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Monthly Payment" />
            </div>
            <InputField
              value={values.monthly_payment}
              name="monthly_payment"
              onBlur={handleBlur}
              disabled={loading}
            />
            {errors.monthly_payment && touched.monthly_payment && (
              <ErrorMssgField errorMessage={errors.monthly_payment} />
            )}
          </div>
        </>
      ) : (
        ""
      )}

      <Button disabled={loading}  className="bg-[#65AC32]" type="submit">
      {loading ? "Uploading..." :<>Next<ArrowRight /></>}
      </Button>
      <Toaster position="top-right" reverseOrder={false} />
    </form>
  );
}

export default Step5;
