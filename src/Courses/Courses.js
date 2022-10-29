import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCart from "../components/courseCart/CourseCart";

const Courses = () => {
  const allCourses = useLoaderData();
  return (
    <div className="grid lg:grid-cols-3 gap-6 mt-6 ml-5">
      {allCourses.map((c) => (
        <CourseCart key={c.id} c={c}></CourseCart>
      ))}
    </div>
  );
};

export default Courses;
