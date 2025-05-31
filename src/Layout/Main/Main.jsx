import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Profile from "../../Shared/Profile/Profile";
import { useEffect, useState } from "react";

const Main = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Check if the current path is home
  const isHomeRoute = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >700);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


   
  // doing below any page will start from the top not from the middle of the page when we change routes
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    // <div className="w-[90%] mx-auto grid grid-cols-12">
    //     <div className="col-span-12 lg:col-span-4 py-5 order-2 lg:order-1">
    //         <Profile></Profile>
    //     </div>
    //     <div className="col-span-12 lg:col-span-7 order-3 lg:order-2">
    //         <Outlet></Outlet>
    //     </div>
    //     <div className="order-1 lg:order-3">
    //         <Navbar></Navbar>
    //     </div>
    // </div>

    // <div className="w-[90%] mx-auto grid grid-cols-12 transition-all duration-300 ease-in-out">
    //   {/* Profile: Only show when scrolled */}
    //   {scrolled && (
    //     <div className="col-span-12 lg:col-span-4 py-5 order-2 lg:order-1 transition-all duration-300">
    //       <Profile />
    //     </div>
    //   )}

    //   {/* Outlet Area: changes col-span based on scroll */}
    //   <div
    //     className={`order-3 lg:order-2 transition-all duration-300 ${
    //       scrolled ? "col-span-12 lg:col-span-7" : "col-span-12 lg:col-span-11"
    //     }`}
    //   >
    //     <Outlet />
    //   </div>

    //   {/* Navbar: fixed on large screens */}
    //   <div
    //     className={`order-1 lg:order-3 transition-all duration-300 ${
    //       scrolled ? "" : "col-span-12 lg:col-span-1"
    //     }`}
    //   >
    //     <Navbar />
    //   </div>
    // </div>

    <div className="w-[95%] mx-auto grid grid-cols-12 transition-all duration-300 ease-in-out bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">
      {/* Profile: Only show when scrolled AND on medium screens and above */}
      {scrolled && isHomeRoute && (
        <div className="hidden md:block col-span-12 lg:col-span-4 py-5 order-2 lg:order-1 transition-all duration-300">
          <Profile />
        </div>
      )}

      {/* Outlet Area: changes col-span based on scroll */}
      {/* <div
        className={`order-3 lg:order-2 transition-all duration-300 ${
          scrolled ? "col-span-12 lg:col-span-7" : "col-span-12 lg:col-span-11"
        }`}
      >
        <Outlet />
      </div> */}

      {/* Navbar */}
      {/* <div
        className={`order-1 lg:order-3 transition-all duration-300 ${
          scrolled ? "" : "col-span-12 lg:col-span-1"
        }`}
      >
        <Navbar />
      </div> */}



      {/* Outlet */}
      <div
        className={`order-3 lg:order-2 transition-all duration-300 ${
          scrolled && isHomeRoute ? "col-span-12 lg:col-span-7" : "col-span-12 lg:col-span-11"
        }`}
      >
        <Outlet />
      </div>

      {/* Navbar */}
      <div
        className={`order-1 lg:order-3 transition-all duration-300 ${
          scrolled && isHomeRoute ? "" : "col-span-12 lg:col-span-1"
        }`}
      >
        <Navbar />
      </div>
    </div>
  );
};

export default Main;
