import jsPDF from "jspdf";
import Report from "../common/Report";
import InputLabel from "../common/InputLabel";
import FieldTitle from "../common/FieldTitle";
import html2canvas from "html2canvas";
import { Button, Label } from "flowbite-react";
import { clearForm } from "../../redux/slice";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { locationMarker } from "../../assets";
import { useEffect, useState } from "react";
import { addInvoice } from "../../api";
import PrevPageButton from "../common/PrevPageButton";

function FinalReport() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setloading] = useState(false)

  


  const data = useSelector((state) => state.proposalDetails);
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
        monthly_or_full: data?.invoice?.financial_statement?.payment_method === "monthly" ? 0 : 1 ,
        interest:  data.invoice.financial_statement.interest ? Number(data.invoice.financial_statement.interest) : 0,
        number_of_months:  data.invoice.financial_statement.number_of_months ? Number(data.invoice.financial_statement.number_of_months) : 0,
        monthly_payment: data.invoice.financial_statement.monthly_payment ? Number(data.invoice.financial_statement.monthly_payment) : 0,
      },
    },
    uuids: {
      administration_files: data.uuids.administration_files,
      sky_picture: data.uuids.sky_picture,
      site_pictures: data.uuids.site_pictures,
      videos: data.uuids.videos,
    },
  };


  const handleDownload = async () => {
    setloading(true)
    console.log(invoiceData);
    const response = await addInvoice(invoiceData)
   if(response.data.status === "success"){
     const invoiceIdDiv = document.getElementById("invoiceId")
     invoiceIdDiv.innerHTML = response.data.invoice_id
     const element = document.getElementById("pdf-content");
    // Capture the content
    const canvas = await html2canvas(element, {
      logging: true , useCORS: true, allowTaint:true });
      const imgData = canvas.toDataURL("image/png");

    // Generate PDF
    const pdf = new jsPDF("p", "mm", "a4");
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    let heightLeft = pdfHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
    heightLeft -= pdf.internal.pageSize.getHeight();

    while (heightLeft >= 0) {
      position = heightLeft - pdfHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
      heightLeft -= pdf.internal.pageSize.getHeight();
    }

    pdf.save("downloaded.pdf");
    setloading(false)}
  }
   



  return (
    <div  className="  space-y-2 ">
      <PrevPageButton route={`/step5`} />
      <h1 className="text-2xl text-start">Contact information</h1>
      <form className="w-full rounded-md border-2 px-5 space-y-2 bg-[#F8F8F8] border-[#65AC32]">
        <div className="grid sm:grid-cols-3 gap-3 my-5">
          <div>
            <div className="mb-2 block">
              <InputLabel label="Company Name" />
            </div>
            <div className="w-full text-xs  rounded-md">
              {data?.invoice?.contact_information?.company_name}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Customer Name" />
            </div>
            <div className="w-full  text-xs  rounded-md">
              {data?.invoice?.contact_information?.customer_name}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Address " />
            </div>
            <div className="w-full text-xs  rounded-md">
              {data?.invoice?.contact_information?.address_headquarters}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Address 2" />
            </div>
            <div className="w-full text-xs  rounded-md">
              {data?.invoice?.contact_information?.address2}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="City" />
            </div>
            <div className="w-full text-xs  rounded-md">
              {data?.invoice?.contact_information?.city}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Country" />
            </div>
            <div className="w-full text-xs  rounded-md">
              {data?.invoice?.contact_information?.country}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Postal Code" />
            </div>
            <div className="w-full text-xs  rounded-md">
              {data?.invoice?.contact_information?.postal_code}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Phone Number (Office)" />
            </div>
            <div className="w-full text-xs  rounded-md">
              {data?.invoice?.contact_information?.phone_number_office}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Phone Number (Mobile)" />
            </div>
            <div className="w-full text-xs  rounded-md">
              {data?.invoice?.contact_information?.phone_number_mobile}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Email" />
            </div>
            <div className="w-full text-xs  rounded-md">
              {data?.invoice?.contact_information?.email}
            </div>
          </div>
        </div>
      </form>
      <h1 className="text-2xl text-start">Company information</h1>
      <form className="w-full rounded-md border-2 px-5 space-y-2 bg-[#F8F8F8] border-[#65AC32]">
        <div className="grid sm:grid-cols-3 gap-3 my-5">
          <div>
            <div className="mb-2 block">
              <InputLabel label="Company Name" />
            </div>
            <div className="w-full text-xs  rounded-md">
              {data?.invoice?.company_information?.company_name}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Address Headquarters " />
            </div>
            <div className="w-full text-xs  rounded-md">
              {data?.invoice?.company_information?.address_headquarters}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="City " />
            </div>
            <div className="w-full text-xs  rounded-md">
              {data?.invoice?.company_information?.city}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Postal Code" />
            </div>
            <div className="w-full text-xs  rounded-md">
              {data?.invoice?.company_information?.postal_code}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Country" />
            </div>
            <div className="w-full text-xs  rounded-md">
              {data?.invoice?.company_information?.country}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Phone Number (Office)" />
            </div>
            <div className="w-full text-xs  rounded-md">
              {data?.invoice?.company_information?.phone_number_office}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Phone Number (Mobile)" />
            </div>
            <div className="w-full text-xs  rounded-md">
              {data?.invoice?.company_information?.phone_number_mobile}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Email" />
            </div>
            <div className="w-full text-xs  rounded-md">
              {data?.invoice?.company_information?.email}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Company VAT Number" />
            </div>
            <div className="w-full text-xs  rounded-md">
              {data?.invoice?.company_information?.company_vat_number}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="IBAN Number" />
            </div>
            <div className="w-full text-xs  rounded-md">
              {data?.invoice?.company_information?.iban_number}
            </div>
          </div>
        </div>
      </form>

      <h1 className="text-2xl text-start">Construction Site Information</h1>
      {data?.invoice?.construction_site?.filter((_,index)=>index!==0).map((site,index)=>(  
      <form key={index} className="w-full rounded-md border-2 px-5  bg-[#F8F8F8] border-[#65AC32]">
        <div className="grid sm:grid-cols-3 gap-3 my-5">
          <div className="space-y-5">
            <div>
              <div className="mb-2 block">
                <InputLabel label="Name of the Site" />
              </div>
              <div className="w-full text-xs  rounded-md">
                {site.name}
              </div>
            </div>
            <div>
              <div className="mb-2 block">
                <InputLabel label="Address " />
              </div>
              <div className="w-full text-xs  rounded-md">
                {site.address}
              </div>
            </div>
            <div>
              <div className="mb-2 block">
                <InputLabel label="City " />
              </div>
              <div className="w-full text-xs  rounded-md">
                {site.city}
              </div>
            </div>
            <div>
              <div className="mb-2 block">
                <InputLabel label="Zip Code" />
              </div>
              <div className="w-full text-xs  rounded-md">
                {site.postal_code}
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <div className="mb-2 block">
                <InputLabel label="Country" />
              </div>
              <div className="w-full text-xs  rounded-md">
                {site.country}
              </div>
            </div>
            <div>
              <div className="mb-2 block">
                <InputLabel label="Site Director Email" />
              </div>
              <div className="w-full text-xs  rounded-md">
                {site.sitedirector_email}
              </div>
            </div>
            <div>
              <div className="mb-2 block">
                <InputLabel label="Phone Number (Office)" />
              </div>
              <div className="w-full text-xs  rounded-md">
                {site.phone_office}
              </div>
            </div>
            <div>
              <div className="mb-2 block">
                <InputLabel label="Phone Number (Mobile)" />
              </div>
              <div className="w-full text-xs  rounded-md">
                {site.phone_mobile}
              </div>
            </div>
          </div>

            <div className="space-y-5">
                <div>
                  <img crossOrigin="true" id="img" src={site?.sky_image} alt="Site Image" className="w-full " 
                      />
                </div>
                <div className="flex justify-around gap-2">
                <div className="text-center">
                  <div className="flex justify-start items-start gap-1">
                    <img src={locationMarker} alt="Location Marker" />
                    <Label className="">Latitude</Label>
                  </div>
                  <div className="w-full text-[0.6rem] sm:text-xs rounded-md   break-words">
                    {site.gps_tracker[0]}
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex justify-start items-start gap-1">
                    <img src={locationMarker} alt="Location Marker" />
                    <Label className="">Longitude</Label>
                  </div>
                  <div className="w-full text-[0.6rem] sm:text-xs  rounded-md break-words">
                    {site.gps_tracker[1]}
                  </div>
                </div>
                </div>
              </div>
        </div>
      </form>
      ))}

      <h1 className="text-2xl text-start">
        Product Information & Technical Sheet
      </h1>
      <form className="w-full rounded-md border-2 px-5  bg-[#F8F8F8] border-[#65AC32]">
        <div className="grid sm:grid-cols-3 gap-3 my-5 ">
          <div>
            <div className="mb-2 block">
              <InputLabel label="Inverters" />
            </div>
            <div className="w-full text-xs  rounded-md">
              {data?.invoice?.product_information?.inverters}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Electric Board (Mono / Tri)" />
            </div>
            <div className="w-full text-xs  rounded-md">
              {data?.invoice?.product_information?.electrical_board}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Water Proof Coating (m)" />
            </div>
            <div className="w-full text-xs  rounded-md">
              {data?.invoice?.product_information?.waterproof_coating}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Solar Panel" />
            </div>
            <div className="w-full text-xs  rounded-md">
              {data?.invoice?.product_information?.solar_panel}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Technical Studies and Construction Permit Site Fees" />
            </div>
            <div className="w-full text-xs  rounded-md">
              {data?.invoice?.product_information?.technical_studies}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Fixation Type" />
            </div>
            <div className="w-full text-xs  rounded-md">
              {data?.invoice?.product_information?.fixation_type}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Earthworks (sq.ft)" />
            </div>
            <div className="w-full text-xs  rounded-md">
              {data?.invoice?.product_information?.earthworks}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Cable (m)" />
            </div>
            <div className="w-full text-xs  rounded-md">
              {data?.invoice?.product_information?.cable}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Driver Transformer" />
            </div>
            <div className="w-full text-xs  rounded-md">
              {data?.invoice?.product_information?.driver_transformer}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Dumpster" />
            </div>
            <div className="w-full text-xs  rounded-md">
              {data?.invoice?.product_information?.dumpster}
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <InputLabel label="Workforce (W)" />
            </div>
            <div className="w-full text-xs  rounded-md">
              {data?.invoice?.product_information?.workforce}
            </div>
          </div>
        </div>
      </form>

      <h1 className="text-2xl text-start">Financial Statement</h1>
      <form className="w-full rounded-md border-2 p-5 space-y-2 bg-[#F8F8F8] border-[#65AC32]">
        <div className="col-span-full">
          <FieldTitle label="Payment method" />
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
      <div className="flex justify-end gap-5">
        <div className="flex justify-center my-5">
          <Button
            onClick={() => handleDownload()}
            className="bg-[#65AC32]"
            type="submit"
          >
           {loading ? "Downloading..." : "Download report"}
          </Button>
        </div>
      </div>
      <Report />
    </div>
  );
}

export default FinalReport;
