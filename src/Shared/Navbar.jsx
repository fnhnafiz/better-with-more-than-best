import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import clsx from "clsx";
import { IoIosCall } from "react-icons/io";

const Navbar = () => {
  const { pathname } = useLocation();
  const [menuBar, setMenuBar] = useState(false);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 1100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  const getTextColor = () => {
    if (color) {
      return "text-black";
    } else {
      return "text-white";
    }
  };
  return (
    <div
      className={`header ${
        color ? "header-bg" : "bg-[#004733]"
      } flex justify-between px-4 w-full items-center py-6 fixed top-0 left-0 right-0 z-[9999]`}
    >
      {/* Left section in navbar */}
      <div className="flex items-center justify-between">
        <section className="flex items-center gap-4 mr-16">
          <IoMenu
            onClick={() => setMenuBar(true)}
            className={`text-4xl cursor-pointer lg:hidden ${
              color ? "text-black" : "text-white"
            }`}
          />
          {/* website name */}
          <Link to="/">
            <h1 className={`text-2xl font-bold ${getTextColor()}`}>BETTER</h1>
          </Link>
        </section>
        {/* Links in the center */}
        <ul className="hidden lg:block lg:flex space-x-8">
          <li>
            <NavLink
              onClick={() => setMenuBar(false)}
              to="/"
              className={`font-semibold ml-6 hover:bg-white hover:text-black py-2 px-4 rounded-full transition-all ${getTextColor()}`}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/start-page"
              className={`font-semibold hover:bg-white hover:text-black py-2 px-4 rounded-full transition-all ${getTextColor()}`}
            >
              Start Page
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mortgage"
              className={`font-semibold hover:bg-white hover:text-black py-2 px-4 rounded-full transition-all ${getTextColor()}`}
            >
              Mortgage Calculator
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className={`font-semibold hover:bg-white hover:text-black py-2 px-4 rounded-full transition-all ${getTextColor()}`}
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
        <section className="text-black bg-white flex flex-col absolute left-0 top-0 h-screen p-8 gap-8 w-full">
          <IoClose
            onClick={() => setMenuBar(false)}
            className="text-4xl cursor-pointer mt-0 mb-8"
          />
          {/* Links in the center */}
          <ul className="flex flex-col gap-8 space-x-6">
            <li>
              <NavLink
                onClick={() => setMenuBar(false)}
                to="/"
                className="font-semibold"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setMenuBar(false)}
                to="/start-page"
                className="font-semibold"
              >
                Start Page
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setMenuBar(false)}
                to="/mortgage"
                className="font-semibold"
              >
                Mortgage Calculator
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setMenuBar(false)}
                to="/about-us"
                className="font-semibold"
              >
                About US
              </NavLink>
            </li>
          </ul>
          <div className="flex flex-col gap-6">
            <button className="text-black px-4 py-6 rounded-full flex justify-center items-center">
              <IoIosCall className="text-3xl" />
              <p>Call us anytime at (415) 523 88371</p>
            </button>

            <button className="bg-[#1FE180] hover:bg-green-600 px-4 py-6 rounded-full text-black font-semibold">
              Continue
            </button>
            <button className="border border-gray-300 text-black font-semibold hover:outline-bg-700 px-4 py-6 rounded-full">
              Sign in
            </button>
          </div>
        </section>
      </div>
      {/* right side for user and button */}
      <section className="flex items-center gap-4">
        <div className="flex items-center gap-6">
          <button
            className={`bg-transparent rounded-full px-2 py-2 border ${getTextColor()}`}
          >
            <IoIosCall className="text-2xl" />
          </button>

          <button
            className={`px-4 py-2 rounded-full hidden md:block ${getTextColor()}`}
          >
            Sign in
          </button>

          <button className="bg-[#1FE180] hover:bg-green-600 px-4 py-2 rounded-full text-black hover:bg-transparent hover:text-white">
            Continue
          </button>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
