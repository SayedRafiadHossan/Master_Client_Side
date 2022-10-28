import React from "react";
import { useRouteError } from "react-router-dom";
import img2 from "../Images/404-error-page-examples-best.jpg";
const Error = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center items-center">
      <img className="w-full" src={img2} alt="" />
    </div>
  );
};

export default Error;
