import React from "react";
import { Link } from "react-router-dom";
import img1 from "../Images/92377-quiz-mode.gif";

const Home = () => {
  return (
    <nav>
      <div className="pb-5 lg:pb-0">
        <div className="md:flex justify-center items-center m-10 lg:h-screen">
          <div className="md:w-[60%] mr-12 p-10 pt-20">
            <h1 className="text-6xl font-extrabold dark:text-white">
              Free online courses to achieve your goals.
            </h1>
            <Link
              to="/courses"
              className="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline"
            >
              <button
                type="button"
                className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 m-5"
              >
                Courses
              </button>
            </Link>
          </div>
          <figure className="md:w-[40%]">
            <img className="w-full" src={img1} alt="" />
          </figure>
        </div>
      </div>
    </nav>
  );
};

export default Home;
