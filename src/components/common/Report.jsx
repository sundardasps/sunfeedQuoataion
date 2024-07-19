
import InputLabel from "./InputLabel";
import { locationDemmy, locationMarker, logo } from "../../assets";
import { Button, Label } from "flowbite-react";
import FieldTitle from "./FieldTitle";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";


function Report({invoice_id}) {
  const data = useSelector((state) => state.proposalDetails);


  return (
    <div id="pdf-content" className="   w-[794px]  px-5  print:block  py-5">
      <div className="flex flex-col  relative  ">
        <img src={logo} alt="" className="w-32 md:w-2/12 " />
        <h1 className="absolute top-4 right-3 text-sm text-start">Invoice id :<span className="font-bold ml-1">{invoice_id}</span></h1>
        <h1 className="text-base  text-start font-bold my-2">Contact information</h1>
        <form className="w-full rounded-md border-2 p-2  bg-[#F8F8F8] border-[#65AC32]">
          <div className="grid grid-cols-3 gap-2 ">
            <div>
              <div className="block">
                <Label className="">Company Name</Label>
              </div>
              <div className="w-full text-xs  rounded-md break-words">
                {data.invoice.contact_information.company_name}
              </div>
            </div>
            <div>
              <div className="mb-2 block ">
                <Label className="">Customer Name</Label>
              </div>
                <div className="w-full text-xs  rounded-md break-words">
                {data.invoice.contact_information.customer_name}
              </div>
            </div>
            <div>
              <div className=" block">
                <Label className="">Address</Label>
              </div>
                <div className="w-full text-xs  rounded-md break-words">
                {data.invoice.contact_information.address_headquarters}
              </div>
            </div>
            <div>
              <div className=" block">
                <Label className="">Address 2</Label>
              </div>
                <div className="w-full text-xs  rounded-md break-words">
                {data.invoice.contact_information.address2}
              </div>
            </div>
            <div>
              <div className=" block">
                <Label className="">City</Label>
              </div>
                <div className="w-full text-xs  rounded-md break-words">
                {data.invoice.contact_information.city}
              </div>
            </div>
            <div>
              <div className=" block">
                <Label className="">Country</Label>
              </div>
                <div className="w-full text-xs  rounded-md break-words">
                {data.invoice.contact_information.country}
              </div>
            </div>
            <div>
              <div className=" block">
                <Label className="">Postal Code</Label>
              </div>
                <div className="w-full text-xs  rounded-md break-words">
                {data.invoice.contact_information.postal_code}
              </div>
            </div>
            <div>
              <div className=" block">
                <Label className="">Phone Number (Office)</Label>
              </div>
                <div className="w-full text-xs  rounded-md break-words">
                {data.invoice.contact_information.phone_number_office}
              </div>
            </div>
            <div>
              <div className=" block">
                <Label className="">Phone Number (Mobile)</Label>
              </div>
                <div className="w-full text-xs  rounded-md break-words">
                {data.invoice.contact_information.phone_number_mobile}
              </div>
            </div>
            <div>
              <div className=" block">
                <Label className="">Email</Label>
              </div>
                <div className="w-full text-xs  rounded-md break-words">
                {data.invoice.contact_information.email}
              </div>
            </div>
          </div>
        </form>

        <h1 className="text-base  text-start font-bold my-2">Company information</h1>
        <form className="w-full rounded-md border-2 p-2  bg-[#F8F8F8] border-[#65AC32]">
          <div className="grid grid-cols-3 gap-2">
            <div>
              <div className=" block">
                <Label className="">Company Name</Label>
              </div>
                <div className="w-full text-xs  rounded-md break-words">
                {data.invoice.company_information.company_name}
              </div>
            </div>
            <div>
              <div className=" block">
                <Label className="">Address Headquarters</Label>
              </div>
                <div className="w-full text-xs  rounded-md break-words">
                {data.invoice.company_information.address_headquarters}
              </div>
            </div>
            <div>
              <div className=" block">
                <Label className="">City</Label>
              </div>
                <div className="w-full text-xs  rounded-md break-words">
                {data.invoice.company_information.city}
              </div>
            </div>
            <div>
              <div className=" block">
                <Label className="">Postal Code</Label>
              </div>
                <div className="w-full text-xs  rounded-md break-words">
                {data.invoice.company_information.postal_code}
              </div>
            </div>
            <div>
              <div className=" block">
                <Label className="">Country</Label>
              </div>
                <div className="w-full text-xs  rounded-md break-words">
                {data.invoice.company_information.country}
              </div>
            </div>
            <div>
              <div className=" block">
                <Label className="">Phone Number (Office)</Label>
              </div>
                <div className="w-full text-xs  rounded-md break-words">
                {data.invoice.company_information.phone_number_office}
              </div>
            </div>
            <div>
              <div className=" block">
                <Label className="">Phone Number (Mobile)</Label>
              </div>
                <div className="w-full text-xs  rounded-md break-words">
                {data.invoice.company_information.phone_number_mobile}
              </div>
            </div>
            <div>
              <div className=" block">
                <Label className="">Email</Label>
              </div>
                <div className="w-full text-xs  rounded-md break-words">
                {data.invoice.company_information.email}
              </div>
            </div>
            <div>
              <div className=" block">
                <Label className="">Company VAT Number</Label>
              </div>
                <div className="w-full text-xs  rounded-md break-words">
                {data.invoice.company_information.company_vat_number}
              </div>
            </div>
            <div>
              <div className=" block">
                <Label className="">IBAN Number</Label>
              </div>
                <div className="w-full text-xs  rounded-md break-words">
                {data.invoice.company_information.iban_number}
              </div>
            </div>
          </div>
        </form>

        <h1 className="text-base  text-start font-bold mt-2">Construction Site Information</h1>
        {data.invoice.construction_site.filter((_, index) => index !== 0).map((site, index) => (
          <form key={index} className="w-full my-2 rounded-md border-2 p-2 bg-[#F8F8F8] border-[#65AC32]">
            <div className="grid grid-cols-3">
              <div className="space-y-5">
                <div>
                  <div className=" block">
                    <Label className="">Name of the Site</Label>
                  </div>
                  <div className="w-full text-xs rounded-md break-words">
                    {site.name}
                  </div>
                </div>
                <div>
                  <div className=" block">
                    <Label className="">Address</Label>
                  </div>
                  <div className="w-full text-xs rounded-md break-words">
                    {site.address}
                  </div>
                </div>
                <div>
                  <div className=" block">
                    <Label className="">City</Label>
                  </div>
                  <div className="w-full text-xs rounded-md break-words">
                    {site.city}
                  </div>
                </div>
                <div>
                  <div className=" block">
                    <Label className="">Zip Code</Label>
                  </div>
                  <div className="w-full text-xs rounded-md break-words">
                    {site.postal_code}
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <div className=" block">
                    <Label className="">Country</Label>
                  </div>
                  <div className="w-full text-xs rounded-md break-words">
                    {site.country}
                  </div>
                </div>
                <div>
                  <div className=" block">
                    <Label className="">Site Director Email</Label>
                  </div>
                  <div className="w-full text-xs rounded-md break-words">
                    {site.sitedirector_email}
                  </div>
                </div>
                <div>
                  <div className=" block">
                    <Label className="">Phone Number (Office)</Label>
                  </div>
                  <div className="w-full text-xs rounded-md break-words">
                    {site.phone_office}
                  </div>
                </div>
                <div>
                  <div className=" block">
                    <Label className="">Phone Number (Mobile)</Label>
                  </div>
                  <div className="w-full text-xs rounded-md break-words">
                    {site.phone_mobile}
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <img crossOrigin="true" id="img" src={site?.sky_image} alt="Site Image" className="w-full" 
                      />
                </div>
                <div className="flex justify-between">
                <div className="text-center">
                  <div className="flex justify-start items-start gap-1">
                    <img src={locationMarker} alt="Location Marker" />
                    <Label className="">Latitude</Label>
                  </div>
                  <div className="w-full text-xs rounded-md   break-words">
                    {site.gps_tracker[0]}
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex justify-start items-start gap-1">
                    <img src={locationMarker} alt="Location Marker" />
                    <Label className="">Longitude</Label>
                  </div>
                  <div className="w-full text-xs rounded-md break-words">
                    {site.gps_tracker[1]}
                  </div>
                </div>
                </div>
              </div>
            </div>
          </form>
        ))}
      </div>

      <h1 className="text-base  text-start font-bold my-2">
        Product Information & Technical Sheet
      </h1>
      <form className="w-full rounded-md border-2 p-2  bg-[#F8F8F8] border-[#65AC32]">
        <div className="grid grid-cols-3 gap-2 ">
          <div>
            <div className=" block">
              <Label className="">Inverters</Label>
            </div>
              <div className="w-full text-xs  rounded-md break-words">
              {data.invoice.product_information.inverters}
            </div>
          </div>
          <div>
            <div className=" block">
              <Label className="">Electric Board (Mono / Tri)</Label>
            </div>
              <div className="w-full text-xs  rounded-md break-words">
              {data.invoice.product_information.electrical_board}
            </div>
          </div>
          <div>
            <div className=" block">
              <Label className="">Water Proof Coating (m)</Label>
            </div>
              <div className="w-full text-xs  rounded-md break-words">
              {data.invoice.product_information.waterproof_coating}
            </div>
          </div>
          <div>
            <div className=" block">
              <Label className="">Solar Panel</Label>
            </div>
              <div className="w-full text-xs  rounded-md break-words">
              {data.invoice.product_information.solar_panel}
            </div>
          </div>
          <div>
            <div className=" block">
              <Label className="">Technical Studies and Construction Permit Site Fees</Label>
            </div>
              <div className="w-full text-xs  rounded-md break-words">
              {data.invoice.product_information.technical_studies}
            </div>
          </div>
          <div>
            <div className=" block">
              <Label className="">Fixation Type</Label>
            </div>
              <div className="w-full text-xs  rounded-md break-words">
              {data.invoice.product_information.fixation_type}
            </div>
          </div>
          <div>
            <div className=" block">
              <Label className="">Earthworks (sq.ft)</Label>
            </div>
              <div className="w-full text-xs  rounded-md break-words">
              {data.invoice.product_information.earthworks}
            </div>
          </div>
          <div>
            <div className=" block">
              <Label className="">Cable (m)</Label>
            </div>
              <div className="w-full text-xs  rounded-md break-words">
              {data.invoice.product_information.cable}
            </div>
          </div>
          <div>
            <div className=" block">
              <Label className="">Driver Transformer</Label>
            </div>
              <div className="w-full text-xs  rounded-md break-words">
              {data.invoice.product_information.driver_transformer}
            </div>
          </div>
          <div>
            <div className=" block">
              <Label className="">Dumpster</Label>
            </div>
              <div className="w-full text-xs  rounded-md break-words">
              {data.invoice.product_information.dumpster}
            </div>
          </div>
          <div>
            <div className=" block">
              <Label className="">Workforce (W)</Label>
            </div>
              <div className="w-full text-xs  rounded-md break-words">
              {data.invoice.product_information.workforce}
            </div>
          </div>
        </div>
      </form>

      <h1 className="text-base  text-start font-bold my-2">Financial Statement</h1>
      <form className="w-full rounded-md border-2 p-2 bg-[#F8F8F8] border-[#65AC32]">
        <div className="col-span-full my-2">
          <Label className="text-xl">Payment method</Label>
        </div>

        <div className="max-w-md space-y-1">
          <div>
            <div className=" block">
              <Label className="">Total Payment</Label>
            </div>
              <div className="w-full text-xs  rounded-md break-words">
              {data.invoice.financial_statement.total_payment}
            </div>
          </div>
          {data.invoice.financial_statement.payment_method === "monthly" ? (
            <>
              {" "}
              <div className="flex  ">
                <div className="w-1/2 ">
                  <div className="flex justify-start  items-start pb-2">
                    <Label className="">No. Of Months</Label>
                  </div>
              
                    <div className="  w-full text-xs  rounded-md   ">
                    {data.invoice.financial_statement.number_of_months}
                  </div>
                </div>
                <div className="w-full   ">
                  <div className="flex justify-start items-start  pb-2   ">
                    <Label className="">Rate Of Interest</Label>
                  </div>
                  <div className="  w-full text-xs  rounded-md   ">
                    {data.invoice.financial_statement.interest}
                  </div>
                </div>
              </div>
              <div>
                <div className=" block">
                  <Label className="">Deposit</Label>
                </div>
                  <div className="w-full text-xs  rounded-md break-words">
                  {data.invoice.financial_statement.deposit
                    ? data.invoice.financial_statement.deposit
                    : 0}
                </div>
              </div>
              <div>
                <div className=" block">
                  <Label className="">Monthly Payment</Label>
                </div>
                  <div className="w-full text-xs  rounded-md break-words">
                  {data.invoice.financial_statement.monthly_payment}
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </form>
    </div>
  );
}

export default Report;
