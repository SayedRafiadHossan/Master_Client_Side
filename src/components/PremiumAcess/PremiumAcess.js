import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PremiumAcess = () => {
  const { id } = useParams();

  const [SingleCourse, setSingleCourse] = useState([]);
  console.log(SingleCourse);

  useEffect(() => {
    fetch(`http://localhost:5000/courses/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleCourse(data);
      });
  }, [id]);
  return (
    <div>
      <div className="flex w-[70%] mx-auto shadow-2xl mt-20 mb-56">
        <div className="w-[75%]">
          <img className="w-full" src={SingleCourse.img} alt="" />
        </div>
        <div className="w-[25%]  items-center flex flex-col justify-center">
          <h1 className="mb-4 text-xl font-bold">{SingleCourse.title}</h1>
          <p className="mb-4 font-bold">ID : {SingleCourse.id}</p>
          <p className="font-bold">Price : {SingleCourse.price}</p>
        </div>
      </div>
    </div>
  );
};

export default PremiumAcess;
