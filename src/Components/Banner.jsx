import React from "react";
import bannerImg from "../../public/hero-variant-c.webp";
import { FaRegClock, FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Banner = () => {
  return (
    <div className="bg-[#004733] relative isolate">
      {/* Text Content */}
      <h1 className="text-5xl text-center absolute top-[15%] left-1/2 md:top-[30%] md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:text-6xl md:text-[130px] font-bold text-green-300 z-1 w-full ">
        Mortgages <br /> <span className="text-green-400">made simple</span>
      </h1>
      <div className="absolute top-[25%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col w-72 md:hidden">
        <button className="mt-6 bg-green-400 hover:bg-green-500 text-green-900 font-semibold py-3 px-6 rounded-full text-lg transition">
          Start my approval
        </button>
        {/* Info Section */}
        <div className="flex flex-row justify-center items-center gap-3 mt-2 text-green-300 text-sm">
          <div className="flex items-center gap-1">
            <FaRegClock className="text-lg" />
            <span>3 min</span>
          </div>
          <span>|</span>
          <span>No credit impact</span>
        </div>
      </div>
      {/* Button */}
      <div className="absolute top-[60%] left-[60%] transform -translate-x-1/2 -translate-y-1/2  z-10 w-full hidden md:block ">
        <button className="mt-6 bg-green-400 hover:bg-green-500 text-green-900 font-semibold py-3 px-6 rounded-full text-lg transition">
          Start my approval
        </button>
        {/* Info Section */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-2 text-green-300 text-sm">
          <div className="flex items-center gap-1">
            <FaRegClock className="text-lg" />
            <span>3 min</span>
          </div>
          <span>|</span>
          <span>No credit impact</span>
        </div>
      </div>
      {/* Image */}

      <div className="min-h-[900px] md:min-h-[1100px] flex flex-col md:flex-row justify-end md:justify-center items-end text-center px-4">
        <div className=" ">
          <img src={bannerImg} alt="" />
        </div>

        {/* mobile device */}
        {/* Ratings */}
        <div className="absolute bottom-[0%] bg-[#073126] left-[40%] transform -translate-x-1/3 -translate-y-1/2 md:hidden p-4 rounded-lg">
          <div className="flex flex-col items-start items-center gap-2  text-green-300">
            <div className="flex items-center gap-2">
              <FcGoogle className="text-2xl" />
              <div className="flex text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar className="text-gray-500" />
              </div>
            </div>
            <span className="text-sm">4.0 Stars | 3,177 Google reviews</span>
          </div>
        </div>

        {/* Ratings */}
        <div className="absolute top-[60%] left-[80%] transform -translate-x-1/3 -translate-y-1/2 hidden md:block">
          <div className="flex flex-col items-start items-center gap-2 mt-6 text-green-300">
            <div className="flex items-center gap-2">
              <FcGoogle className="text-2xl" />
              <div className="flex text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar className="text-gray-500" />
              </div>
            </div>
            <span className="text-sm">4.0 Stars | 3,177 Google reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
