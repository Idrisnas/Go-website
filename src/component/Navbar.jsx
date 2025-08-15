import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import RoundedButton from "./RoundedButton";
import Logo from "../assets/logo.png";

function NavBar() {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);
  const location = useLocation();

  // Scroll background color toggle
  const handleScroll = () => {
    setNavColour(window.scrollY >= 20);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reusable nav link component
  const navLink = (path, label) => (
    <Link
      to={path}
      className={`${
        location.pathname === path
          ? "text-yellow-400 font-semibold"
          : "text-black"
      } hover:text-yellow-700 transition-colors duration-200`}
      onClick={() => setExpand(false)}
    >
      {label}
    </Link>
  );

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        navColour ? "bg-[#FDF4D4] shadow-md" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex justify-between items-center py-3 mt-6 rounded-full bg-[#FDF4D4]">
        {/* Logo + Nav Links (Desktop) */}
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-1 text-yellow-300 p-2 rounded-3xl text-lg font-semibold bg-white hover:text-black transition-colors duration-200"
          >
            <img src={Logo} alt="Logo" className="h-8 w-auto" />
          </Link>

          <div className="hidden md:flex items-center gap-8 font-sora font-normal text-base leading-6 tracking-[-0.2px] text-center">
            {navLink("/goride", "GoRide")}
            {navLink("/godelivery", "GoDelivery")}
            {navLink("/goeat", "GoEat")}
            {navLink("/gopay", "GoPay")}
          </div>
        </div>

        {/* Right Buttons (Desktop) */}
        <div className="hidden md:flex gap-4">
          <RoundedButton to="/partner" text="Partner" variant="outline" />
          <RoundedButton
            to="/driver"
            text="Become a Driver"
            variant="primary"
          />
        </div>

        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden w-12 h-12 flex flex-col justify-center items-center space-y-1 bg-black hover:bg-gray-800 rounded-full shadow-md transition duration-300"
          onClick={() => setExpand(true)}
          aria-label="Open menu"
        >
          <span className="w-6 h-0.5 bg-white rounded-sm"></span>
          <span className="w-6 h-0.5 bg-white rounded-sm"></span>
          <span className="w-6 h-0.5 bg-white rounded-sm"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-full max-w-sm   bg-gray-100 shadow-lg z-50 transition-transform duration-300 ease-in-out ${
          expand ? "translate-x-0" : "-translate-x-full"
        } flex flex-col px-2 py-4 md:hidden`}
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b-8 border-gray-700  pb-4 bg--700">
          <Link
            to="/"
            className="bg-white py-2 px-4 rounded-[47.29px]"
            onClick={() => setExpand(false)}
          >
            <img src={Logo} alt="Logo" className="h-8 w-auto" />
          </Link>
          <div className="flex items-center gap-3">
            <RoundedButton
              to="/partner"
              text="Partner"
              variant="outline"
              className="border  text-[10px] py-1 px-5"
            />

            <button
              className="w-9 h-9 flex items-center justify-center bg-yellow-400 text-black text-2xl font-bold rounded-full shadow-sm hover:bg-yellow-300 transition duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              onClick={() => setExpand(false)}
              aria-label="Close menu"
            >
              &times;
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-start mt-4 text-left text-base font-sora text-black w-full space-y-6">
          <div className="border-b border-gray-300 w-full py-3 hover:bg-yellow-100 transition">
            {navLink("/goride", "GoRide")}
          </div>
          <div className="border-b border-gray-300 w-full py-3 hover:bg-yellow-100 transition">
            {navLink("/godelivery", "GoDelivery")}
          </div>
          <div className="border-b border-gray-300 w-full py-3 hover:bg-yellow-100 transition">
            {navLink("/goeat", "GoEat")}
          </div>
          <div className="pt-2">{navLink("/gopay", "GoPay")}</div>
        </div>

        {/* Divider */}
        <div className="my-4 border-t-8 border-yellow-200"></div>

        {/* CTA Buttons */}
        <div className="flex flex-col items-start gap-4 w-full">
          <RoundedButton
            to="/driver"
            text="Become a Driver"
            variant="primary"
          />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
