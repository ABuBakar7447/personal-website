// import { Link, useLocation } from "react-router-dom";
import Navbarbtn from "../../Components/NavbarBtn/NavbarBtn";
import "../../Components/Style/Style.css";
import NavRoutebtn from "../../Components/NavRoutebtn/NavRoutebtn";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const values = [
    {
      id: 1,
      src: "https://cdn.lordicon.com/cnpvyndp.json",
      href: "#introduction",
      defaultText: "Info",
    },
    {
      id: 2,
      src: "https://cdn.lordicon.com/kthelypq.json",
      href: "#about",
      defaultText: "About",
    },
    {
      id: 3,
      src: "https://cdn.lordicon.com/eouimtlu.json",
      href: "#service",
      defaultText: "Services",
    },
    {
      id: 4,
      src: "https://cdn.lordicon.com/jnikqyih.json",
      href: "#skills",
      defaultText: "Skills",
    },
    {
      id: 5,
      src: "https://cdn.lordicon.com/jkzgajyr.json",
      href: "#projects",
      defaultText: "Projects",
    },
    {
      id: 6,
      src: "https://cdn.lordicon.com/nzixoeyk.json",
      href: "#contactme",
      defaultText: "Contact Me",
    },
  ];

  const routeValues = [
    {
      id: 1,
      link: "/",
      src: "https://cdn.lordicon.com/cnpvyndp.json",
      defaultText: "Home",
    },
    {
      id: 2,
      link: "/allproject",
      src: "https://cdn.lordicon.com/jkzgajyr.json",
      defaultText: "All Project",
    },
    {
      id: 3,
      link: "/blog",
      src: "https://cdn.lordicon.com/lyrrgrsl.json",
      defaultText: "Blog",
    },
  ];

  return (
    

    <div>
      {/* Desktop Navbar */}
      <div className="navbar w-[80px] lg:fixed lg:z-10 hidden lg:block">
        <div className="navbar-center lg:flex">
          <ul className="menu menu-vertical">
            {/* Route Links */}
            <div className="py-12 border-[1px] border-white rounded-full">
              {routeValues
                .filter((routevalue) => routevalue.link !== location.pathname)
                .map((routevalue) => (
                  <NavRoutebtn key={routevalue.id} routevalue={routevalue} />
                ))}
            </div>

            {/* Section Links (only on home route) */}
            {location.pathname === "/" && (
              <div className="py-12 border-[1px] border-white rounded-full text-white mt-4">
                {values.map((value) => (
                  <Navbarbtn key={value.id} value={value} />
                ))}
              </div>
            )}
          </ul>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-black z-50">
        <ul className="flex justify-around items-center py-2">
          {routeValues
            .filter((routevalue) => routevalue.link !== location.pathname)
            .map((routevalue) => (
              <NavRoutebtn key={routevalue.id} routevalue={routevalue} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
