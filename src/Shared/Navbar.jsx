import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import clsx from "clsx";
import { IoIosCall } from "react-icons/io";

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  // console.log(pathname);
  const [menuBar, setMenuBar] = useState(false);
  const [color, setColur] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 800) {
      setColur(true);
    } else {
      setColur(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div
      className={
        color
          ? `header  header-bg flex justify-between px-8 items-center py-6  text-white  ${
              pathname === "/" && "text-black"
            }`
          : `header bg-[#004733] flex justify-between px-8 items-center py-6 text-white z-60 w-full`
      }
    >
      {/* Left section in navbar */}
      <div className="flex items-center justify-between">
        <section className="flex items-center gap-4 mr-16">
          {/* website name */}
          <Link to="/">
            <h1
              className={`text-2xl font-bold ${
                pathname !== "/" && "text-black"
              } ${color && "text-black"}`}
            >
              BETTER
            </h1>
          </Link>
        </section>
        {/* Links in the center */}
        <ul className="hidden lg:block lg:flex space-x-8 ">
          <li>
            <NavLink
              to="/"
              className={` font-semibold ml-6 hover:bg-white hover:text-black py-2 px-4 rounded-full transition-all ${
                pathname !== "/" && "text-black"
              } ${color && "text-black"}`}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/start-page"
              className={` font-semibold hover:bg-white hover:text-black py-2 px-4 rounded-full transition-all ${
                pathname !== "/" && "text-black"
              } ${color && "text-black"}`}
            >
              Start Page
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mortgage"
              className={` font-semibold hover:bg-white hover:text-black py-2 px-4 rounded-full transition-all ${
                pathname !== "/" && "text-black"
              } ${color && "text-black"}`}
            >
              Mortgage Calculator
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className={` font-semibold hover:bg-white hover:text-black py-2 px-4 rounded-full transition-all ${
                pathname !== "/" && "text-black"
              } ${color && "text-black"}`}
            >
              About US
            </NavLink>
          </li>
        </ul>
      </div>
      {/* sidebar menu open */}
      <div
        className={clsx(
          "fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all z-50",
          menuBar && "translate-x-0"
        )}
      >
        <section className="text-black bg-white flex flex-col absolute left-0 top-0 h-screen p-8 gap-8  w-full">
          <IoClose
            onClick={() => setMenuBar(false)}
            className="text-4xl cursor-pointer mt-0 mb-8"
          />
          {/* Links in the center */}
          <ul className="flex flex-col gap-8 space-x-6">
            <li>
              <NavLink to="/" className=" font-semibold ">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/start-page" className=" font-semibold">
                Start Page
              </NavLink>
            </li>
            <li>
              <NavLink to="/mortgage" className=" font-semibold">
                Mortgage Calculator
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-us" className=" font-semibold">
                About US
              </NavLink>
            </li>
          </ul>
          <div className="flex flex-col gap-6">
            <button className=" text-black  px-4 py-6 rounded-full flex justify-center items-center">
              <IoIosCall className="text-3xl" />
              <p>Call us anytime at (415) 523 88371</p>
            </button>

            <button className="bg-[#1FE180] hover:bg-green-600 px-4 py-6 rounded-full text-black font-semibold">
              Continue
            </button>
            <button className="border border-gray-300 text-black font-semibold hover:outline-bg-700 px-4 py-6 rounded-full ">
              Sign in
            </button>
          </div>
        </section>
      </div>
      {/* right side for user and button */}
      <section className="flex items-center gap-4">
        {/* User photo */}

        {/* Sign Out Button */}
        <div className="flex items-center gap-6">
          <button className="bg-transparent text-white hover:bg-white hover:text-black hover:border-none rounded-full px-2 py-2 border rounded">
            <IoIosCall className="text-2xl" />
          </button>

          <button className=" text-white hover:text-black  hover:bg-white px-4 py-2 rounded-full hidden md:block">
            Sign in
          </button>

          <button className="bg-[#1FE180] hover:bg-green-600 px-4 py-2 rounded-full text-black hover:bg-transparent">
            Continue
          </button>
          <IoMenu
            onClick={() => setMenuBar(true)}
            className="text-4xl text-black cursor-pointer lg:hidden"
          />
        </div>
      </section>
    </div>
  );
};

export default Navbar;
