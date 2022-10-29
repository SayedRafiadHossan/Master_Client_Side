import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/FooterSite/Footer";
import useAuth from "../components/Share/useAuth";
import Header from "../Header/Header";
import RightSide from "../RightSide/RightSide";

const Main = () => {
  const { user } = useAuth();
  return (
    <div>
      <Header></Header>
      <div className="lg:flex">
        <div
          className={
            user?.displayName ? "lg:w-[20%] hidden lg:block mt-52" : "hidden"
          }
        >
          <RightSide></RightSide>
        </div>
        <div
          className={
            user?.displayName
              ? "lg:w-[80%] bg-base-200"
              : "lg:w-[100%] bg-base-200"
          }
        >
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
