import Footer from "../assets/footer.png";
import Facebook from "../assets/Facebook.png";
import Instagram from "../assets/Instagram.png";
import Twitter from "../assets/Twitter.png";
import Linkdnl from "../assets/Linkdnl.png";
import gologo from "../assets/gologo.png";


import React from "react";
import { Link } from "react-router-dom";

const FooterLinks = () => {
  return (
    <div
    style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "",
      }}
    className="mt-6  mx-auto max-w-7xl ">
      <div
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
         
        }}
        className="mt-6 md:p-4 mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-10 items-center justify-items-center "
>
        <div className="space-y-6 ">
          <div className="">
            <img src={Footer} alt="" />
          </div>
          <div className="flex gap-3">
            <div
              style={{ backgroundColor: "#121212" }}
              className="p-3 rounded-full"
            >
              <img src={Facebook} alt="" />
            </div>
            <div
              style={{ backgroundColor: "#121212" }}
              className="p-3 rounded-full"
            >
              <img src={Linkdnl} alt="" />
            </div>
            <div
              style={{ backgroundColor: "#121212" }}
              className="p-3 rounded-full"
            >
              {" "}
              <img src={Twitter} alt="" />
            </div>{" "}
            <div
              style={{ backgroundColor: "#121212" }}
              className="p-3 rounded-full"
            >
              <img src={Instagram} alt="" />
            </div>
          </div>
          <p>Address: ..................</p>
        </div>
        <div className="flex gap-10 sm:gap-32 md:gap-12 w-full p-4 md:p-0 m-0 md:justify-center justify-between ">

          <div className="flex flex-col leading-10 text-gray-400">
            <h1 className=" text-xl  text-white font-bold">Product</h1>
            <Link className="hover:text-yellow-500 transition-colors duration-300">
              Go Ride
            </Link>
            <Link className="hover:text-yellow-500 transition-colors duration-300">
              Go Deliver
            </Link>
            <Link className="hover:text-yellow-500 transition-colors duration-300">
              Go Shop
            </Link>
            <Link className="hover:text-yellow-500 transition-colors duration-300">
              Go Card
            </Link>
          </div>{" "}
          <div className="flex flex-col leading-10 text-gray-400">
            <h1 className=" text-xl  text-white font-bold">Company</h1>
            {/* <Link className="hover:text-yellow-500 transition-colors duration-300">
             About Us
            </Link> */}
            <Link className="hover:text-yellow-500 transition-colors duration-300">
Career            </Link>
            <Link className="hover:text-yellow-500 transition-colors duration-300">
           Contact Us
            </Link>
            <Link className="hover:text-yellow-500 transition-colors duration-300">
Blog            </Link>
<Link className="hover:text-yellow-500 transition-colors duration-300">
Terms & Policy            </Link>
          </div>{" "}
        </div>
        <div>
        <div
  className="leading-10 text-gray-500 relative md:p-6 rounded-md bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${gologo})`,
  }}
  
>
  <div className="relative  p-4 rounded-md">
    <h1 className="text-xl text-white font-bold mb-2">Cities</h1>
    <h1>
      <strong className="text-white font-bold">Lagos:</strong> Adeniran Ogunsanya St, Surulere Lagos
    </h1>
    <h1>
      <strong className="text-white font-bold">Abuja:</strong> Office 1H1, Apo Urban Shelter Market Abuja
    </h1>
  </div>
</div>
        </div>
      </div>
      <p className="my-4 text-gray-500 text-center">All right reserve GoCaby Techenology Limited</p>
    </div>
  );
};

export default FooterLinks;
