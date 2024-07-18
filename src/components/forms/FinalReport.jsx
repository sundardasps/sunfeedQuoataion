import jsPDF from "jspdf";
import Report from "../common/Report";
import InputLabel from "../common/InputLabel";
import FieldTitle from "../common/FieldTitle";
import html2canvas from "html2canvas";
import { Button } from "flowbite-react";
import { clearForm } from "../../redux/slice";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { locationDemmy, locationMarker } from "../../assets";
import { useEffect, useState } from "react";

function FinalReport() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setloading] = useState(false)
  const params = useLocation()
  const {invoice_id} = params.state
  


  const data = useSelector((state) => state.proposalDetails);

  const handleDownload = async () => {
    setloading(true);
    const element = document.getElementById("pdf-content");
  
    // Capture the content
    const canvas = await html2canvas(element, {
      backgroundColor: "none",
      logging: true,
      useCORS: true,
      allowTaint: false,
    });
    const imgData = canvas.toDataURL("image/jpg");
  
    // Generate PDF
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgProps = pdf.getImageProperties(imgData);
    const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;
  
    let heightLeft = imgHeight;
    let position = 0;
  
    pdf.addImage(imgData, "PNG", 0, position, pdfWidth, imgHeight);
    heightLeft -= pdfHeight;
  
    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, pdfWidth, imgHeight);
      heightLeft -= pdfHeight;
    }
  
    pdf.save("downloaded.pdf");
    setloading(false);
    // dispatch(clearForm());
    // navigate("/step1");
  };
  

  const handleClearForm = () => {
    dispatch(clearForm());
    navigate("/step1");
  };

  useEffect(()=>{
   if(!invoice_id){
    navigate('/step5')
   }
  },[invoice_id,navigate])

  return (
    <div className="w-11/12  space-y-5 ">
      <h1 className="absolute top-5 right-5  sm:top-10 sm:right-16 text-xs  sm:text-xl text-start">Invoice id :<span className="font-bold ml-1">{invoice_id}</span></h1>

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
              <img src={site.sky_image} alt="" className=" h-[24vh]" />
            </div>
            <div>
              <div className="flex justify-start items-start gap-1">
                <img src={locationMarker} alt="icon" />
                <InputLabel label="Latitude" />
              </div>
              <div className="w-full text-xs  rounded-md">
                {site.gps_tracker?.[0] ??
                  "Latitude not available"}
              </div>
            </div>
            <div>
              <div className="flex justify-start items-start gap-1">
                <img src={locationMarker} alt="icon" />
                <InputLabel label="Longitude" />
              </div>
              <div className="w-full text-xs  rounded-md">
                {site.gps_tracker?.[1] ??
                  "Longitude not available"}
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

        <div className="max-w-md">
          <div>
            <div className="mb-2 block">
              <InputLabel label="Total Payment" />
            </div>
            <div className="w-full text-xs  rounded-md">
              {data?.invoice?.financial_statement?.total_payment}
            </div>
          </div>
          {data?.invoice?.financial_statement?.payment_method === "monthly" ? (
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
                      value={
                        data?.invoice?.financial_statement?.number_of_months
                      }
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

                  <div className=" w-full text-xs  rounded-md text-center">
                    {data?.invoice?.financial_statement?.interest}
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-2 block">
                  <InputLabel label="Deposit" />
                </div>
                <div className="w-full text-xs  rounded-md">
                  {data?.invoice?.financial_statement?.deposit
                    ? data?.invoice?.financial_statement?.deposit
                    : 0}
                </div>
              </div>
              <div>
                <div className="mb-2 block">
                  <InputLabel label="Monthly Payment" />
                </div>
                <div className="w-full text-xs  rounded-md">
                  {data?.invoice?.financial_statement?.monthly_payment}
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
            onClick={() => handleClearForm()}
            className="bg-[#65AC32]"
            type="submit"
          >
            Clear form
          </Button>
        </div>
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
      <Report invoice_id={invoice_id}/>
    </div>
  );
}

export default FinalReport;
