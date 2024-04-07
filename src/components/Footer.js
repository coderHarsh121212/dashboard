import React from "react";

const Footer = () => {
  return (
    <footer className="backgr">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-4 flex-col sm:flex-row">
          <p className="text-white text-sm">
            © {new Date().getFullYear()} People Dashboard. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-orange-500 hover:text-indigo-700 ">
              Privacy Policy
            </a>
            <a href="#" className="text-orange-500 hover:text-indigo-700">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
