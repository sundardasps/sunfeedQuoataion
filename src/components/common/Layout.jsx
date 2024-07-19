import Navbar from "./Navbar";
import PrevPageButton from "./PrevPageButton";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

function Layout() {
  const { pathname } = useLocation();
  const formatedName = pathname.includes("step")
    ? pathname.replace("/", "").replace("step", "step ")
    : "";
  const currentPageNo = Number(formatedName[formatedName.length - 1]);
  const data = useSelector((state) => state.proposalDetails);
  const navigate = useNavigate()

  useEffect(() => {
    const steps = [
      {
        path: "/step1",
        isNotComplete: () => Object.values(data.invoice.contact_information).some(value => value === ""),
      },
      {
        path: "/step2",
        isNotComplete: () => Object.values(data.invoice.company_information).some(value => value === ""),
      },
      {
        path: "/step3",
        isNotComplete: () => Object.values(data.invoice.construction_site[data.invoice.construction_site.length-1]).some(value => value === ""
          //  || (Array.isArray(value) && value.length === 0)
          ),
      },
      {
        path: "/step4",
        isNotComplete: () => Object.values(data.invoice.product_information).some((value) => value === ""),
      },
      {
        path: "/step5",
        isNotComplete: () => Object.values(data.invoice.financial_statement).some(({ total_payment }) => total_payment === ""),
      },
    ];

    const incompleteStep = steps.find(step => step.isNotComplete());

    if (incompleteStep) {
      navigate(incompleteStep.path)
    }
  }, []);

  
  return (
    <div className=" ">
      <Navbar />
      <div className={`flex justify-between items-center    m-auto ${pathname === "/step3" ? "w-full" : "max-w-md"}`}>
        <div className=" absolute ml-5 flex-shrink-0  ">
          {currentPageNo > 1 && currentPageNo <= 5 ? (
            <PrevPageButton route={`/step${Number(currentPageNo) - 1}`} />
          ) : (
            ""
          )}
        </div>
        <div className="flex-grow text-center">
          <h1 className="capitalize text-2xl font-extrabold">{formatedName}</h1>
        </div>
      </div>
      <div className="flex justify-center items-center  my-5 p-3 ">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
