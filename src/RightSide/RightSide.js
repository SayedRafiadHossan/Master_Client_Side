import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../components/Share/useAuth";

const RightSide = () => {
  const { user } = useAuth();

  const [SingleCourse, setSingleCourse] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => {
        setSingleCourse(data);
      });
  }, []);
  return (
    <div>
      {user.photoURL && (
        <>
          {SingleCourse.map((c) => (
            <Link
              to={`/details/${c.id}`}
              className="m-4 text-lg font-bold bg-cyan-100 rounded-lg p-3 block"
            >
              {c.title}
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default RightSide;
