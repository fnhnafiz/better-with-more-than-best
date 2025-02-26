import React from "react";
import firstHome from "../../public/first-home.webp";
import betterHeloc from "../../public/better-heloc.webp";
import oneDay from "../../public/one-day.webp";
import insurance from "../../public/insurance.webp";
const GotQuestion = () => {
  return (
    <div className="w-[70%] md:w-11/12 mx-auto  my-20">
      {/* top header */}
      <div className="flex justify-between flex-wrap gap-8 items-end">
        {/* left content */}
        <div>
          <h1 className="text-5xl font-semibold">
            Got questions? <br /> We've got answers
          </h1>
        </div>
        {/* right button */}
        <div className="space-x-4">
          <button className="bg-white text-gray-800 font-semibold rounded-full px-4 border-1 py-2 border-4 border-green-900 transition duration-300">
            Our products
          </button>
          <button className="bg-white text-gray-800 font-semibold rounded-full px-4 border-1 py-2 transition duration-300">
            Calculators
          </button>
          <button className="bg-white text-gray-800 font-semibold rounded-full px-4 border-1 py-2 transition duration-300">
            Guides & FAQs
          </button>
        </div>
      </div>
      {/* bottom content 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start my-22">
        {/* First Question */}
        <div className="bg-[#F0F7F1] p-6 flex flex-col md:flex-row md:justify-between lg:flex-col items-start md:items-center lg:items-start gap-6 col-span-12 lg:col-span-4">
          <div className="space-y-4  md:w-1/2 lg:w-full">
            <h1 className="text-4xl font-semibold">
              Buying your first home with Better
            </h1>
            <svg
              width="48"
              height="49"
              viewBox="0 0 48 49"
              fill="none"
              className="transition ease-universal duration-300 fill-transparent  [&_path]:fill-[#004733] group-hover:[&_path]:fill-white [&_rect]:stroke-[#A4A8A4] group-hover:[&_rect]:stroke-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.843384"
                width="47"
                height="47"
                rx="23.5"
                stroke="#A4A8A4"
              ></rect>
              <path
                d="M24 16.3434L22.59 17.7534L28.17 23.3434H16V25.3434H28.17L22.59 30.9334L24 32.3434L32 24.3434L24 16.3434Z"
                fill="#004733"
              ></path>
            </svg>
          </div>
          <div className="w-full  ">
            <img className="rounded-lg w-full" src={firstHome} alt="" />
          </div>
        </div>

        {/* Second Question */}
        <div className="bg-[#F0F7F1] p-6 flex flex-col md:flex-row lg:grid lg:grid-cols-2 items-start gap-6 col-span-12 lg:col-span-8">
          <div className="space-y-4 md:w-1/2 lg:w-full">
            <h1 className="text-4xl font-semibold">
              One Day Mortgage <sup>1</sup>
            </h1>
            <p className="text-gray-700 text-xl hidden lg:block">
              Kick your home loan into hyperdrive. Going from locked rate to
              Commitment Letter takes weeks for traditional lenders. We do it in
              a single day. Traditional lenders deliver a Commitment Letter in a
              few weeks.<sup>1</sup>
            </p>
            <svg
              width="48"
              height="49"
              viewBox="0 0 48 49"
              fill="none"
              className="transition ease-universal duration-300 fill-transparent  [&_path]:fill-[#004733] group-hover:[&_path]:fill-white [&_rect]:stroke-[#A4A8A4] group-hover:[&_rect]:stroke-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.843384"
                width="47"
                height="47"
                rx="23.5"
                stroke="#A4A8A4"
              ></rect>
              <path
                d="M24 16.3434L22.59 17.7534L28.17 23.3434H16V25.3434H28.17L22.59 30.9334L24 32.3434L32 24.3434L24 16.3434Z"
                fill="#004733"
              ></path>
            </svg>
          </div>
          <div className="w-full md:w-1/2 lg:w-full">
            <img
              className="rounded-lg w-full h-52 lg:h-full object-cover"
              src={oneDay}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* Bottom Content 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start my-22">
        {/* Second Question */}
        <div className="bg-[#F0F7F1] p-6 flex flex-col md:flex-row lg:grid lg:grid-cols-2 items-start gap-6 col-span-12 lg:col-span-8">
          <div className="space-y-4 md:w-1/2 lg:w-full">
            <h1 className="text-4xl font-semibold">Better HELOC</h1>
            <p className="text-gray-700 text-xl hidden lg:block">
              Kick your home loan into hyperdrive. Going from locked rate to
              Commitment Letter takes weeks for traditional lenders. We do it in
              a single day. Traditional lenders deliver a Commitment Letter in a
              few weeks.<sup>1</sup>
            </p>
            <svg
              width="48"
              height="49"
              viewBox="0 0 48 49"
              fill="none"
              className="transition ease-universal duration-300 fill-transparent  [&_path]:fill-[#004733] group-hover:[&_path]:fill-white [&_rect]:stroke-[#A4A8A4] group-hover:[&_rect]:stroke-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.843384"
                width="47"
                height="47"
                rx="23.5"
                stroke="#A4A8A4"
              ></rect>
              <path
                d="M24 16.3434L22.59 17.7534L28.17 23.3434H16V25.3434H28.17L22.59 30.9334L24 32.3434L32 24.3434L24 16.3434Z"
                fill="#004733"
              ></path>
            </svg>
          </div>
          <div className="w-full md:w-1/2 lg:w-full">
            <img
              className="rounded-lg w-full h-52 lg:h-full object-cover"
              src={betterHeloc}
              alt=""
            />
          </div>
        </div>
        {/* First Question */}
        <div className="bg-[#F0F7F1] p-6 flex flex-col md:flex-row md:justify-between lg:flex-col items-start md:items-center lg:items-start gap-6 col-span-12 lg:col-span-4">
          <div className="space-y-4  md:w-1/2 lg:w-full">
            <h1 className="text-4xl font-semibold">Insurance</h1>
            <svg
              width="48"
              height="49"
              viewBox="0 0 48 49"
              fill="none"
              className="transition ease-universal duration-300 fill-transparent  [&_path]:fill-[#004733] group-hover:[&_path]:fill-white [&_rect]:stroke-[#A4A8A4] group-hover:[&_rect]:stroke-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.843384"
                width="47"
                height="47"
                rx="23.5"
                stroke="#A4A8A4"
              ></rect>
              <path
                d="M24 16.3434L22.59 17.7534L28.17 23.3434H16V25.3434H28.17L22.59 30.9334L24 32.3434L32 24.3434L24 16.3434Z"
                fill="#004733"
              ></path>
            </svg>
          </div>
          <div className="w-full  ">
            <img className="rounded-lg w-full h-full" src={insurance} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GotQuestion;
