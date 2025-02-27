import React from "react";
import {
  FaDollarSign,
  FaHome,
  FaMobileAlt,
  FaPercentage,
  FaTags,
  FaUsers,
} from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import avtar from "../../public/betty1.jpg";
import { Link } from "react-router-dom";

const StartPage = () => {
  return (
    <div className="bg-[#FFFDFA]">
      {" "}
      <div className="sticky top-0 bg-[#FFFDFA] z-10">
        <div className="w-[90%] mx-auto py-4 flex justify-between items-center">
          {/* Left Section - Logo */}
          <Link to="/">
            <div id="header-left" data-testid="header-left">
              <h1 className="text-xl text-[#017848] font-bold">Better</h1>
              <span className=" text-gray-400 font-normal">Mortgage</span>
            </div>
          </Link>
          {/* Right Section - Help Button */}
          <div>
            <button className="flex items-center space-x-2 border-none text-green-700 border border-green-700 px-4 py-2 ">
              <div className="h-10 w-10 bg-[#9ceccc92] flex justify-center items-center rounded-full ">
                <FiPhone className="text-xl" />
              </div>

              <span className="text-sm font-medium">
                Need help? Call (415) 523 8837
              </span>
            </button>
          </div>
        </div>
        <div className="relative mt-6 w-[90%] mx-auto  h-1 bg-gray-200">
          <div
            style={{ backgroundImage: `url(${avtar})` }}
            className="w-12 h-12 absolute left-1/2 -translate-x-1/2 -top-[20px] rounded-full bg-cover bg-center"
          ></div>
        </div>
      </div>
      {/*  */}
      <div className="p-6 max-w-xl mx-auto rounded-lg mt-6">
        <h1 className="text-4xl font-bold text-center text-wrap mb-4 text-gray-800">
          Hi, I'm Betsy! <br /> What can I help you with?
        </h1>
        <div className="mt-4">
          <div role="radiogroup" className="flex flex-col gap-3">
            <button
              aria-checked="false"
              role="radio"
              className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-100"
            >
              <div className="w-9 h-9 flex justify-center items-center">
                <FaHome className="text-[#017848] text-2xl" />
              </div>
              <span className="text-gray-800 font-medium">Home Loans</span>
            </button>

            <button
              aria-checked="false"
              role="radio"
              className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-100"
            >
              <div className="w-9 h-9 flex justify-center items-center">
                <FaDollarSign className="text-[#017848] text-2xl" />
              </div>
              <span className="text-gray-800 font-medium">Mortgage Rates</span>
            </button>

            <button
              aria-checked="false"
              role="radio"
              className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-100"
            >
              <div className="w-9 h-9 flex justify-center items-center">
                <FaUsers className="text-[#017848] text-2xl" />
              </div>
              <span className="text-gray-800 font-medium">
                Customer Support
              </span>
            </button>
          </div>
        </div>
        <div className="mt-6 flex justify-between">
          <div className="text-center">
            <p className="text-2xl font-bold ">$100B</p>
            <p className="text-gray-600">Home loans funded entirely online</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold ">400K</p>
            <p className="text-gray-600">
              Customers who chose a Better Mortgage
            </p>
          </div>
        </div>
      </div>
      {/* ------------- */}
      <div className="p-6 max-w-xl mx-auto  bg-[#F0F7F1] rounded-lg mt-6">
        <p className="text-gray-500 text-lg text-center font-medium mb-6">
          After a few questions, you'll unlock:
        </p>
        <div className="flex justify-center items-center gap-4">
          <div className="flex flex-col  gap-6 justify-center">
            <div className="flex gap-2 items-center   rounded-lg ">
              <FaPercentage className="text-green-700 text-xl" />
              <p className="text-gray-500 text-[15px] font-medium">
                Custom mortgage rates
              </p>
            </div>

            <div className="flex gap-2 items-center   rounded-lg ">
              <FaTags className="text-green-700 text-xl" />
              <p className="text-gray-500 text-[15px] font-medium">
                Exclusive offers
              </p>
            </div>
            <div className="flex gap-2 items-center   rounded-lg ">
              <FaMobileAlt className="text-green-700 text-xl" />
              <p className="text-gray-500 text-[15px] font-medium">
                A personalized dashboard
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
