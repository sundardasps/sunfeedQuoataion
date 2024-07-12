import React from "react";
import InputField from "./InputField";
import InputLabel from "./InputLabel";
import { locationDemmy } from "../../assets";
import { Button } from "flowbite-react";
import FieldTitle from "./FieldTitle";
import { useSelector } from "react-redux";

function Report() {
  const data = useSelector((state)=>state.proposalDetails)
  console.log(data);
  return (
    <div className="w-11/12 p-5 space-y-5">
      <form className="w-full rounded-md border-2 p-5 space-y-2 bg-[#F8F8F8] border-[#65AC32]">
        <h1 className="text-2xl text-start">Contact information</h1>
        <div className="grid grid-cols-3 gap-3 my-5">
          <div>
            <div className="mb-2 block">
              <InputLabel label="Company Name" />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
              {data.invoice.
            contact_information
            .company_name}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Customer Name" />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
              {data.invoice.
            contact_information
            .customer_name}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Address " />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
               {data.invoice.
            contact_information
            .address}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Address 2" />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
               {data.invoice.
            contact_information
            .address2}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="City" />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
               {data.invoice.
            contact_information
            .city}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Country" />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
               {data.invoice.
            contact_information
            .country}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Postal Code" />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
               {data.invoice.
            contact_information
            .postal_code}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Phone Number (Office)" />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
               {data.invoice.
            contact_information
            .phone_number_office}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Phone Number (Mobile)" />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
               {data.invoice.
            contact_information
            .phone_number_mobile}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Email" />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
               {data.invoice.
            contact_information
            .email}
            </div>
          </div>
        </div>
      </form>
      <form className="w-full rounded-md border-2 p-5 space-y-2 bg-[#F8F8F8] border-[#65AC32]">
        <h1 className="text-2xl text-start">Company information</h1>
        <div className="grid grid-cols-3 gap-3 my-5">
          <div>
            <div className="mb-2 block">
              <InputLabel label="Company Name" />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
              {data.invoice.
            company_information.company_name}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Address Headquarters " />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
              {data.invoice.
            company_information.address_headquarters}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="City " />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
              {data.invoice.
            company_information.city}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Postal Code" />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
              {data.invoice.
            company_information.postal_code}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Country" />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
              {data.invoice.
            company_information.country}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Phone Number (Office)" />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
              {data.invoice.
            company_information.phone_number_office}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Phone Number (Mobile)" />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
              {data.invoice.
            company_information.phone_number_mobile}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Email" />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
              {data.invoice.
            company_information.email}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Company VAT Number" />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
              {data.invoice.
            company_information.company_vat_number}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="IBAN Number" />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
              {data.invoice.
            company_information.iban_number}
            </div>
          </div>
        </div>
      </form>
      <form className="w-full rounded-md border-2 p-5 space-y-2 bg-[#F8F8F8] border-[#65AC32]">
        <h1 className="text-2xl text-start">Construction Site Information</h1>
        <div className="grid grid-cols-3 gap-3 my-5">
          <div>
            <div className="mb-2 block">
              <InputLabel label="Name of the Site" />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
              {data.invoice.
              company_information.company_name}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Country" />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
              {data.invoice.
            company_information.company_name}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Address" />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
              {data.invoice.
            company_information.company_name}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Site Director Email" />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
              {data.invoice.
            company_information.company_name}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="City " />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
              {data.invoice.
            company_information.company_name}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Company Name" />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
              {data.invoice.
            company_information.company_name}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Company Name" />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
              {data.invoice.
            company_information.company_name}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Company Name" />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
              {data.invoice.
            company_information.company_name}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Company Name" />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
              {data.invoice.
            company_information.company_name}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Company Name" />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
              {data.invoice.
            company_information.company_name}
            </div>
          </div>
        </div>
      </form>

      <form className="w-full rounded-md border-2 p-5 space-y-2 bg-[#F8F8F8] border-[#65AC32]">
        <h1 className="text-2xl text-start">Construction Site Information</h1>
        <div className="grid grid-cols-3 gap-3 my-5">
          <div>
            <div className="mb-2 block">
              <InputLabel label="Name of the Site" />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
              {data.invoice.
            company_information.company_name}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Address " />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
              {data.invoice.
            company_information.company_name}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="City " />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
              {data.invoice.
            company_information.company_name}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Zip Code" />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
              {data.invoice.
            company_information.company_name}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Country" />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
              {data.invoice.
            company_information.company_name}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Site Director Email" />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
              {data.invoice.
            company_information.company_name}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Phone Number (Mobile)" />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
              {data.invoice.
            company_information.company_name}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Phone Number (Mobile)" />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
              {data.invoice.
            company_information.company_name}
            </div>
          </div>
          <div>
            <img src={locationDemmy} alt="" className="w-full" />
          </div>
        </div>
      </form>

      <form className="w-full rounded-md border-2 p-5 space-y-2 bg-[#F8F8F8] border-[#65AC32]">
        <h1 className="text-2xl text-start">
          Product Information & Technical Sheet
        </h1>
        <div className="grid grid-cols-3 gap-3 my-5">
          <div>
            <div className="mb-2 block">
              <InputLabel label="Inverters" />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
              {data.invoice.
            company_information.company_name}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Electric Board (Mono / Tri)" />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
              {data.invoice.
            company_information.company_name}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Water Proof Coating (m)" />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
              {data.invoice.
            company_information.company_name}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Solar Panel" />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
              {data.invoice.
            company_information.company_name}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Technical Studies and Construction Permit Site Fees" />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
              {data.invoice.
            company_information.company_name}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Fixation Type" />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
              {data.invoice.
            company_information.company_name}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Earthworks (sq.ft)" />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
              {data.invoice.
            company_information.company_name}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Cable (m)" />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
              {data.invoice.
            company_information.company_name}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Driver Transformer" />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
              {data.invoice.
            company_information.company_name}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Dumpster" />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
              {data.invoice.
            company_information.company_name}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Workforce (W)" />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
              {data.invoice.
            company_information.company_name}
            </div>
          </div>
        </div>
      </form>

      <h1 className="text-2xl text-start">Financial Statement</h1>
      <form className="w-full rounded-md border-2 p-5 space-y-2 bg-[#F8F8F8] border-[#65AC32]">
        <div className="col-span-full">
          <FieldTitle label="Payment method" />
        </div>
        <div className="w-min">
          <div className="col-span-2 flex gap-4 justify-between items-end">
            <div className="w-full">
              <div className="flex justify-start items-start gap-1">
                <InputLabel label="No. Of Months" />
              </div>
              <div className="flex w-min border-2 rounded-xl">
                <Button className="rounded-r-none bg-slate-200 text-black">
                  -
                </Button>
                <input type="text" className="w-10 border-none text-center" />
                <Button className="rounded-l-none bg-slate-200 text-black">
                  +
                </Button>
              </div>
            </div>
            <div className="w-full">
              <div className="flex justify-start items-start gap-1">
                <InputLabel label="Rate Of Interest" />
              </div>
              <div className="flex w-min border-2 rounded-xl">
                <Button className="rounded-r-none bg-slate-200 text-black">
                  -
                </Button>
                <input type="text" className="w-10 border-none text-center" />
                <Button className="rounded-l-none bg-slate-200 text-black">
                  +
                </Button>
              </div>
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Electric Board (Mono / Tri)" />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
              {data.invoice.
            company_information.company_name}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Fixation Type" />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
              {data.invoice.
            company_information.company_name}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Earthworks (sq.ft)" />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
              {data.invoice.
            company_information.company_name}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Cable (m)" />
            </div>
            <div className="w-full bg-white p-1 rounded-md">
              {data.invoice.
            company_information.company_name}
            </div>
          </div>
        </div>
      </form>
      <div className="flex justify-center my-5">
        <Button onClick={()=>window.print()} className="bg-[#65AC32]" type="submit">
          Download Report
        </Button>
      </div>
    </div>
  );
}

export default Report;
