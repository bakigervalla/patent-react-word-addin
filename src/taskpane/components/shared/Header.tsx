import React from "react";
import { useHistory, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const history = useHistory();

  function handleNavigate(to) {
    history.push(to);
  }

  return (
    <div className="h-11 py-1 bg-white my-1 w-full text-gray-700 dark-mode:text-gray-200 dark-mode:bg-gray-800 ">
      <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8 items-end">
        <nav className="flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
          <a
            className={`px-4 py-2 mt-2 text-sm font-semibold text-gray-900 ${
              location.pathname == "/dashboard" ? "bg-gray-200" : "bg-white"
            } rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline`}
            href="#"
            onClick={() => handleNavigate("dashboard")}
          >
            Dashboard
          </a>
          <a
            className={`px-4 py-2 mt-2 text-sm font-semibold bg-transparent ${
              location.pathname == "/citation" ? "bg-gray-200" : "bg-white"
            } rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline`}
            href="#"
            onClick={() => handleNavigate("citation")}
          >
            Citation
          </a>
          <a
            className={`px-4 py-2 mt-2 text-sm font-semibold bg-transparent ${
              location.pathname == "/login" ? "bg-gray-200" : "bg-white"
            }  rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline`}
            href="#"
            onClick={() => handleNavigate("login")}
          >
            <span>Account</span>
          </a>
          {/* <div className="relative">
          <button
            className={`flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent ${
              location.pathname == "/login" ? "bg-gray-200" : "bg-white"
            }  rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline`}
            onClick={() => handleNavigate("login")}
          >
            <span>Account</span>
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              className="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"
            >
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
            </svg>
          </button> 
        </div>*/}
        </nav>
      </div>
    </div>
  );
};

export default Header;
