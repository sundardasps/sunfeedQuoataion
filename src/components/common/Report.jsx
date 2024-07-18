
import InputLabel from "./InputLabel";
import { locationDemmy, locationMarker, logo } from "../../assets";
import { Button } from "flowbite-react";
import FieldTitle from "./FieldTitle";
import { useSelector } from "react-redux";


function Report({invoice_id}) {
  const data = useSelector((state) => state.proposalDetails);
  return (
    <div id="pdf-content" className=" absolute -top-[9999px]  w-[794px]  px-10  print:block">
      <div className="flex flex-col  relative  ">
        <img src={logo} alt="" className="w-32 md:w-2/12 " />
        <h1 className="absolute top-4 right-3 text-sm text-start">Invoice id :<span className="font-bold ml-1">{invoice_id}</span></h1>
        <h1 className="text-xl  text-start my-2">Contact information</h1>
        <form className="w-full rounded-md border-2 p-2  bg-[#F8F8F8] border-[#65AC32]">
          <div className="grid grid-cols-3 gap-2 ">
            <div>
              <div className="mb-2 block">
                <InputLabel label="Company Name" />
              </div>
              <div className="w-full text-xs  rounded-md break-words">
                {data.invoice.contact_information.company_name}
              </div>
            </div>
            <div>
              <div className="mb-2 block ">
                <InputLabel label="Customer Name" />
              </div>
                <div className="w-full text-xs  rounded-md break-words">
                {data.invoice.contact_information.customer_name}
              </div>
            </div>
            <div>
              <div className="mb-2 block">
                <InputLabel label="Address " />
              </div>
                <div className="w-full text-xs  rounded-md break-words">
                {data.invoice.contact_information.address_headquarters}
              </div>
            </div>
            <div>
              <div className="mb-2 block">
                <InputLabel label="Address 2" />
              </div>
                <div className="w-full text-xs  rounded-md break-words">
                {data.invoice.contact_information.address2}
              </div>
            </div>
            <div>
              <div className="mb-2 block">
                <InputLabel label="City" />
              </div>
                <div className="w-full text-xs  rounded-md break-words">
                {data.invoice.contact_information.city}
              </div>
            </div>
            <div>
              <div className="mb-2 block">
                <InputLabel label="Country" />
              </div>
                <div className="w-full text-xs  rounded-md break-words">
                {data.invoice.contact_information.country}
              </div>
            </div>
            <div>
              <div className="mb-2 block">
                <InputLabel label="Postal Code" />
              </div>
                <div className="w-full text-xs  rounded-md break-words">
                {data.invoice.contact_information.postal_code}
              </div>
            </div>
            <div>
              <div className="mb-2 block">
                <InputLabel label="Phone Number (Office)" />
              </div>
                <div className="w-full text-xs  rounded-md break-words">
                {data.invoice.contact_information.phone_number_office}
              </div>
            </div>
            <div>
              <div className="mb-2 block">
                <InputLabel label="Phone Number (Mobile)" />
              </div>
                <div className="w-full text-xs  rounded-md break-words">
                {data.invoice.contact_information.phone_number_mobile}
              </div>
            </div>
            <div>
              <div className="mb-2 block">
                <InputLabel label="Email" />
              </div>
                <div className="w-full text-xs  rounded-md break-words">
                {data.invoice.contact_information.email}
              </div>
            </div>
          </div>
        </form>

        <h1 className="text-xl text-start my-2">Company information</h1>
        <form className="w-full rounded-md border-2 p-2  bg-[#F8F8F8] border-[#65AC32]">
          <div className="grid grid-cols-3 gap-2">
            <div>
              <div className="mb-2 block">
                <InputLabel label="Company Name" />
              </div>
                <div className="w-full text-xs  rounded-md break-words">
                {data.invoice.company_information.company_name}
              </div>
            </div>
            <div>
              <div className="mb-2 block">
                <InputLabel label="Address Headquarters " />
              </div>
                <div className="w-full text-xs  rounded-md break-words">
                {data.invoice.company_information.address_headquarters}
              </div>
            </div>
            <div>
              <div className="mb-2 block">
                <InputLabel label="City " />
              </div>
                <div className="w-full text-xs  rounded-md break-words">
                {data.invoice.company_information.city}
              </div>
            </div>
            <div>
              <div className="mb-2 block">
                <InputLabel label="Postal Code" />
              </div>
                <div className="w-full text-xs  rounded-md break-words">
                {data.invoice.company_information.postal_code}
              </div>
            </div>
            <div>
              <div className="mb-2 block">
                <InputLabel label="Country" />
              </div>
                <div className="w-full text-xs  rounded-md break-words">
                {data.invoice.company_information.country}
              </div>
            </div>
            <div>
              <div className="mb-2 block">
                <InputLabel label="Phone Number (Office)" />
              </div>
                <div className="w-full text-xs  rounded-md break-words">
                {data.invoice.company_information.phone_number_office}
              </div>
            </div>
            <div>
              <div className="mb-2 block">
                <InputLabel label="Phone Number (Mobile)" />
              </div>
                <div className="w-full text-xs  rounded-md break-words">
                {data.invoice.company_information.phone_number_mobile}
              </div>
            </div>
            <div>
              <div className="mb-2 block">
                <InputLabel label="Email" />
              </div>
                <div className="w-full text-xs  rounded-md break-words">
                {data.invoice.company_information.email}
              </div>
            </div>
            <div>
              <div className="mb-2 block">
                <InputLabel label="Company VAT Number" />
              </div>
                <div className="w-full text-xs  rounded-md break-words">
                {data.invoice.company_information.company_vat_number}
              </div>
            </div>
            <div>
              <div className="mb-2 block">
                <InputLabel label="IBAN Number" />
              </div>
                <div className="w-full text-xs  rounded-md break-words">
                {data.invoice.company_information.iban_number}
              </div>
            </div>
          </div>
        </form>

        <h1 className="text-xl text-start my-2">Construction Site Information</h1>
        {data.invoice.construction_site.filter((_, index) => index !== 0).map((site, index) => (
          <form key={index} className="w-full my-2 rounded-md border-2 p-2 bg-[#F8F8F8] border-[#65AC32]">
            <div className="grid grid-cols-3 gap-2">
              <div className="space-y-5">
                <div>
                  <div className="mb-2 block">
                    <InputLabel label="Name of the Site" />
                  </div>
                  <div className="w-full text-xs rounded-md break-words">
                    {site.name_of_site}
                  </div>
                </div>
                <div>
                  <div className="mb-2 block">
                    <InputLabel label="Address" />
                  </div>
                  <div className="w-full text-xs rounded-md break-words">
                    {site.address}
                  </div>
                </div>
                <div>
                  <div className="mb-2 block">
                    <InputLabel label="City" />
                  </div>
                  <div className="w-full text-xs rounded-md break-words">
                    {site.city}
                  </div>
                </div>
                <div>
                  <div className="mb-2 block">
                    <InputLabel label="Zip Code" />
                  </div>
                  <div className="w-full text-xs rounded-md break-words">
                    {site.postal_code}
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <div className="mb-2 block">
                    <InputLabel label="Country" />
                  </div>
                  <div className="w-full text-xs rounded-md break-words">
                    {site.country}
                  </div>
                </div>
                <div>
                  <div className="mb-2 block">
                    <InputLabel label="Site Director Email" />
                  </div>
                  <div className="w-full text-xs rounded-md break-words">
                    {site.sitedirector_email}
                  </div>
                </div>
                <div>
                  <div className="mb-2 block">
                    <InputLabel label="Phone Number (Office)" />
                  </div>
                  <div className="w-full text-xs rounded-md break-words">
                    {site.phone_office}
                  </div>
                </div>
                <div>
                  <div className="mb-2 block">
                    <InputLabel label="Phone Number (Mobile)" />
                  </div>
                  <div className="w-full text-xs rounded-md break-words">
                    {site.phone_mobile}
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <img id="img" src={site?.sky_image} alt="Site Image" className="w-full h-[24vh]" />
                </div>
                <div>
                  <div className="flex justify-start items-start gap-1">
                    <img src={locationMarker} alt="Location Marker" />
                    <InputLabel label="Latitude" />
                  </div>
                  <div className="w-full text-xs rounded-md break-words">
                    {site.gps_tracker[0]}
                  </div>
                </div>
                <div>
                  <div className="flex justify-start items-start gap-1">
                    <img src={locationMarker} alt="Location Marker" />
                    <InputLabel label="Longitude" />
                  </div>
                  <div className="w-full text-xs rounded-md break-words">
                    {site.gps_tracker[1]}
                  </div>
                </div>
              </div>
            </div>
          </form>
        ))}
      </div>

      <h1 className="text-xl text-start my-2">
        Product Information & Technical Sheet
      </h1>
      <form className="w-full rounded-md border-2 p-2  bg-[#F8F8F8] border-[#65AC32]">
        <div className="grid grid-cols-3 gap-2 ">
          <div>
            <div className="mb-2 block">
              <InputLabel label="Inverters" />
            </div>
              <div className="w-full text-xs  rounded-md break-words">
              {data.invoice.product_information.inverters}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Electric Board (Mono / Tri)" />
            </div>
              <div className="w-full text-xs  rounded-md break-words">
              {data.invoice.product_information.electrical_board}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Water Proof Coating (m)" />
            </div>
              <div className="w-full text-xs  rounded-md break-words">
              {data.invoice.product_information.waterproof_coating}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Solar Panel" />
            </div>
              <div className="w-full text-xs  rounded-md break-words">
              {data.invoice.product_information.solar_panel}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Technical Studies and Construction Permit Site Fees" />
            </div>
              <div className="w-full text-xs  rounded-md break-words">
              {data.invoice.product_information.technical_studies}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Fixation Type" />
            </div>
              <div className="w-full text-xs  rounded-md break-words">
              {data.invoice.product_information.fixation_type}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Earthworks (sq.ft)" />
            </div>
              <div className="w-full text-xs  rounded-md break-words">
              {data.invoice.product_information.earthworks}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Cable (m)" />
            </div>
              <div className="w-full text-xs  rounded-md break-words">
              {data.invoice.product_information.cable}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Driver Transformer" />
            </div>
              <div className="w-full text-xs  rounded-md break-words">
              {data.invoice.product_information.driver_transformer}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Dumpster" />
            </div>
              <div className="w-full text-xs  rounded-md break-words">
              {data.invoice.product_information.dumpster}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Workforce (W)" />
            </div>
              <div className="w-full text-xs  rounded-md break-words">
              {data.invoice.product_information.workforce}
            </div>
          </div>
        </div>
      </form>

      <h1 className="text-xl text-start my-2">Financial Statement</h1>
      <form className="w-full rounded-md border-2 p-2 bg-[#F8F8F8] border-[#65AC32]">
        <div className="col-span-full">
          <FieldTitle label="Payment method" />
        </div>

        <div className="max-w-md">
          <div>
            <div className="mb-2 block">
              <InputLabel label="Total Payment" />
            </div>
              <div className="w-full text-xs  rounded-md break-words">
              {data.invoice.financial_statement.total_payment}
            </div>
          </div>
          {data.invoice.financial_statement.payment_method === "monthly" ? (
            <>
              {" "}
              <div className="col-span-2  flex gap-4 justify-between items-end">
                <div className="w-full">
                  <div className="flex justify-start items-start gap-1">
                    <InputLabel label="No. Of Months" />
                  </div>
                  <div className="flex w-min border-2 rounded-xl">
                    <Button
                      disabled
                      className="rounded-r-none bg-slate-200 text-black"
                    >
                      -
                    </Button>
                    <input
                      type="text"
                      value={data.invoice.financial_statement.number_of_months}
                      className="w-12 border-none text-center"
                    />
                    <Button
                      disabled
                      className="rounded-l-none bg-slate-200 text-black"
                    >
                      +
                    </Button>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-center items-center  gap-1   ">
                    <InputLabel label="Rate Of Interest " />
                  </div>

                  <div className="  w-full text-xs  rounded-md text-center">
                    {data.invoice.financial_statement.interest}
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-2 block">
                  <InputLabel label="Deposit" />
                </div>
                  <div className="w-full text-xs  rounded-md break-words">
                  {data.invoice.financial_statement.deposit
                    ? data.invoice.financial_statement.deposit
                    : 0}
                </div>
              </div>
              <div>
                <div className="mb-2 block">
                  <InputLabel label="Monthly Payment" />
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
