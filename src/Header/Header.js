import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../Images/png-clipart-logo-education-reading-others-miscellaneous-angle.png";
import useAuth from "../components/Share/useAuth";

const Header = () => {
  const [toggle, setToggole] = useState(false);
  const { user, logout } = useAuth();
  return (
    <div>
      <div className="navbar bg-slate-100 ">
        <Link to="/" className="flex-1">
          <img src={img1} className="mr-3 h-6 sm:h-10" alt="..." />
          <div className="text-xl">Master-Study</div>
        </Link>
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col mt-4 bg-gray-50 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700 mr-10">
            {user?.photoURL ? (
              <>
                <li>
                  <Link
                    to="/"
                    className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/courses"
                    className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Faq"
                    className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Blog"
                    className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Blog
                  </Link>
                </li>

                <li>
                  <Link
                    onClick={logout}
                    className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Log Out
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/Login"
                    className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Log In
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Signup"
                    className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Sign Up
                  </Link>
                </li>
              </>
            )}

            <li>
              <button onClick={() => setToggole(!toggle)} className="h-6 w-6 ">
                {toggle ? (
                  <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
                ) : (
                  <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
                )}
              </button>
            </li>
          </ul>
        </div>
        {user?.photoURL && (
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} alt="" />
                </div>
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
