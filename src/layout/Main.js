import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/FooterSite/Footer";
import Header from "../Header/Header";
import RightSide from "../RightSide/RightSide";

const main = () => {
  return (
    <div>
      <Header></Header>
      <div className="lg:flex">
        <div className="lg:w-[20%] hidden lg:block mt-52">
          <RightSide></RightSide>
        </div>
        <div className="lg:w-[80%] bg-base-200">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default main;
