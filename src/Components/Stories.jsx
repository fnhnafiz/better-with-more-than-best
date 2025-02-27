import React from "react";
import stories from "../../public/stories.webp";
import { FaStar } from "react-icons/fa";

const Stories = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center mt-20 px-10 md:px-40 min-h-screen bg-gray-100 md:gap-32">
      {/* Left image section - moves to bottom on mobile */}
      <div className="flex flex-col gap-8 w-full lg:w-1/2">
        <div className="flex space-x-8 mt-8 md:hidden">
          <button className="bg-white text-gray-800 font-semibold py-1 px-4 border-1 border-4 border-green-900 rounded-full">
            Arian
          </button>
          <button className="bg-white text-gray-800 font-semibold py-1 px-4 border-1 rounded-full">
            Amanda
          </button>
          <button className="bg-white text-gray-800 font-semibold py-1 px-4 border-1 rounded-full">
            Paul
          </button>
        </div>
        {/* Image */}
        <div className="flex justify-center lg:justify-start lg:items-start items-center">
          <img
            src={stories}
            alt="Stories"
            className="rounded-lg shadow-lg w-[60%]"
          />
        </div>
        <div className="flex space-x-2 hidden md:block">
          <button className="bg-white text-gray-800 font-semibold rounded-full px-4 border-1 py-2 border-4 border-green-900 transition duration-300">
            Arian
          </button>
          <button className="bg-white text-gray-800 font-semibold rounded-full px-4 border-1 py-2 transition duration-300">
            Amanda
          </button>
          <button className="bg-white text-gray-800 font-semibold rounded-full px-4 border-1 py-2 transition duration-300">
            Paul
          </button>
        </div>
      </div>
      {/* Right side content - moves to top on mobile */}
      <div className="text-left w-full lg:w-1/2 flex gap-5 flex-col">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Find out why we’re better.
        </h1>
        <button className="bg-green-900 text-white font-semibold py-4 px-6 rounded-full transition duration-300 mb-4">
          See all our stories
        </button>
        <p className="text-gray-600 flex items-center justify-center md:justify-start gap-4">
          <span className="flex items-center ">
            <FaStar className="text-green-400 mr-1" />
            <p>Trustpilot</p>
          </span>
          <span className="ml-2">4.4 out of 5</span>
        </p>
      </div>
    </div>
  );
};

export default Stories;
