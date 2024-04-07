import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="backgr">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <p
              className="font-sans text-white text-md font-normal sm:text-xl sm:font-extrabold cursor-pointer  "
              onClick={() => navigate("/")}
            >
              DASH<span className="text-orange-400">BOARD</span>
            </p>
          </div>
          <div className=" md:block">
            <div className="ml-10 flex items-baseline space-x-3">
              <a
                href="#"
                className="bg-gray-900 text-orange-500 px-2 py-2 rounded-md text-sm font-medium sm:px-3"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-orange-400 px-2 py-2 rounded-md text-sm font-medium sm:px-3"
              >
                Users
              </a>
              {/* <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Settings
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
