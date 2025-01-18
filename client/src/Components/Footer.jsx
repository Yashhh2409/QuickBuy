import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <div className="flex items-center gap-3">
          <img src={assets.logo} className="mb-5 w-12" alt="" />
          <p className="text-2xl sm:text-3xl font-medium">QuickBuy</p>
          </div>
          <p className="w-full md:w-2/3 text-gray-600">
          Your one-stop destination for trendy fashion. Quick, stylish, and hassle-free shopping at your fingertips.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col text-gray-600">
            <Link to="/">Home</Link>
            <Link to="/about">About us</Link>
            <Link to="/contact">Contact us</Link>
            <Link to="/collection">Shop now</Link>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col text-gray-600">
            <li>+91-7395-5763-25</li>
            <li>shop@quickbuy.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
        Copyright © 2024 <Link to="/">QuickBuy.com</Link> - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
