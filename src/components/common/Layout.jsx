import React from "react";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";
import PrevPageButton from "./PrevPageButton";

function Layout() {
  const { pathname } = useLocation();
  const formatedName = pathname.includes("step")
    ? pathname.replace("/", "").replace("step", "step ")
    : "";
  const currentPageNo = Number(formatedName[formatedName.length - 1]);

  return (
    <div className="">
      <Navbar />
      <div className="flex justify-between items-center mt-5 ">
        <div className="absolute ml-2 flex-shrink-0 ">
          {currentPageNo > 1 && currentPageNo <= 5 ? (
            <PrevPageButton route={`/step${Number(currentPageNo) - 1}`} />
          ) : (
            ""
          )}
        </div>
        <div className="flex-grow text-center ">
          <h1 className="capitalize text-xl font-bold">{formatedName}</h1>
        </div>
      </div>
      <div className="flex justify-center items-center  my-5">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
