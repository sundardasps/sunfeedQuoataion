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

function Step5() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [month, setMonth] = useState(0);
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
  } = useFormik({
    initialValues: data.invoice.financial_statement,
    validationSchema: financialStatementSchema,
    onSubmit: async (values) => {
      dispatch(financial_statementUpdate(values));

      const invoiceData = {
        invoice: {
          contact_information: {
            company_name: data.invoice.contact_information.company_name,
            customer_name: data.invoice.contact_information.customer_name,
            address_headquarters: data.invoice.contact_information.address_headquarters,
            city: data.invoice.contact_information.city,
            postal_code: data.invoice.contact_information.postal_code,
            country: data.invoice.contact_information.country,
            company_vat_number: data.invoice.company_information.company_vat_number, // vat from another field
            phone_number_office: data.invoice.contact_information.phone_number_office,
            phone_number_mobile: data.invoice.contact_information.phone_number_mobile,
            email: data.invoice.contact_information.email,
          },
          construction_site:
            data.invoice.construction_site.filter((_,index)=>index!==0).map(site => ({
            name: site.name,
            address: site.address,
            postal_code: site.postal_code,
            country: site.country,
            sitedirector_contact: site.sitedirector_contact,
            sitedirector_email: site.sitedirector_email,
            phone_office: site.phone_office,
            phone_mobile: site.phone_mobile,
            gps_tracker: site.gps_tracker, 
          })),
          product_information: {
            inverters: data.invoice.product_information.inverters,
            solar_panel: data.invoice.product_information.solar_panel,
            fixation_type: data.invoice.product_information.fixation_type,
            cable: data.invoice.product_information.cable,
            cable_length: 0,
            electrical_board: data.invoice.product_information.electrical_board,
            option: data.invoice.product_information.inverters,
            ground_opening_size: Number(data.invoice.product_information.ground_opening_size),
            earthworks: 0,
            driver_transformer: data.invoice.product_information.driver_transformer,
            waterproof_coating: Number(data.invoice.product_information.waterproof_coating),
            technical_studies: data.invoice.product_information.technical_studies,
            construction_permit_fees:Number(data.invoice.product_information.construction_permit_fees),
            engine_rental: Number(data.invoice.product_information.engine_rental),
            dumpster: data.invoice.product_information.inverters,
            complete_kit: 0,
            complete_warehouse:"string",
            carport: 0,
            workforce: Number(data.invoice.product_information.workforce),
          },
          financial_statement: {
            deposit: data.invoice.financial_statement.deposit ? Number(data.invoice.financial_statement.deposit) : 0,
            total_payment: data.invoice.financial_statement.total_payment ? Number(data.invoice.financial_statement.total_payment) : 0,
            down_payment: 0,
            monthly_or_full: data.invoice.financial_statement.payment_method === "monthly" ? 0 : 1 ,
            interest:  data.invoice.financial_statement.interest ? Number(data.invoice.financial_statement.interest) : 0,
            number_of_months:  data.invoice.financial_statement.number_of_months ? Number(data.invoice.financial_statement.number_of_months) : 0,
          },
        },
        uuids: {
          administration_files: data.uuids.sky_picture,
          sky_picture: data.uuids.sky_picture,
          site_pictures: data.uuids.site_pictures,
          videos: data.uuids.videos,
        },
      };
      console.log(invoiceData);
      const response = await addInvoice(invoiceData)
      console.log(response,"jjjjj");
      if(response.data.status === "success"){
      navigate("/reportoverview");}
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

      if (amount < depositeNumber || amount < 500) {
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
      <div className="flex gap-4 justify-between items-end">
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
          <div className="flex justify-evenly  gap-4  items-end ">
            <div className=" transition-transform ">
              <div className="flex justify-center items-center t  gap-1 ">
                <InputLabel label="No. Of Months" />
              </div>
              <div className="flex w-min border-2 rounded-xl">
                <Button
                  onClick={handleDecrement}
                  className="rounded-r-none bg-slate-200 text-black "
                >
                  -
                </Button>
                <input
                  type="text"
                  name="number_of_months"
                  className="w-12 border-none text-center "
                  value={availableMonths[month]}
                />
                <Button
                  onClick={handleIncrement}
                  className="rounded-l-none bg-slate-200 text-black"
                >
                  +
                </Button>
              </div>
            </div>
            <div className="">
              <div className="flex justify-center items-center  gap-1   ">
                <InputLabel label="Rate Of Interest " />
              </div>

              <TextInput value={values.interest} className="w-32 " />

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
            />
            {errors.monthly_payment && touched.monthly_payment && (
              <ErrorMssgField errorMessage={errors.monthly_payment} />
            )}
          </div>
        </>
      ) : (
        ""
      )}

      <Button className="bg-[#65AC32]" type="submit">
        Next <ArrowRight />{" "}
      </Button>
    </form>
  );
}

export default Step5;
