import {
  CalendarCheck,
  CircleUser,
  Heart,
  LogOut,
  Menu,
  Settings,
} from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const [activeLink, setActiveLink] = useState(null);

  // Fonction pour définir l'élément actif
  const handleClick = (link: any) => {
    setActiveLink(link);
  };

  return (
    <div>
      <div>
        <nav className=" bg-black p-5  max-sm:p-4 max-lg:p-4">
          <div className="flex justify-around max-sm:justify-between max-lg:justify-between">
            <div className="flex max-sm:gap-4  max-lg:gap-4">
              <Menu
                className="hidden max-sm:block max-lg:block max-lg:mt-2 max-sm:mt-0.5"
                color="white"
                onClick={toggleSidebar}
              />
              <h1 className="text-white font-[Open_Sans] text-3xl   max-sm:mt-1   max-sm:text-xs font-bold max-lg:text-xs max-lg:w-32 max-lg:mt-3">
                S K I N K A R E
              </h1>
            </div>
            <div className="flex px-36  max-sm:hidden  max-lg:hidden ">
              <ul className="flex text-gray-300 gap-5  font-mono  ">
                <li>
                  <a href="#product">Nos Produit</a>
                </li>
                <li>
                  <a href="#conseil">Nos Conseil</a>
                </li>
                <li>
                  <a href="#pro">A Propos</a>
                </li>
                <li>
                  <a href="#service">Service Client</a>
                </li>
              </ul>
            </div>
            <div className="flex gap-3">
              <Heart className="text-white" />
              <CalendarCheck className="text-white  max-sm:hidden " />
              <CircleUser className="text-white " />
            </div>
          </div>
        </nav>
        {/* <main><Home/> </main> */}
      </div>

      <div
        className={`fixed inset-0  bg-opacity-50 z-50 transition-opacity ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      >
        <div
          className={`fixed top-0 left-0 w-64 bg-white h-full p-5 max-lg:w-[400px] max-sm:w-[300px] transform transition-transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <p className="text-center font-extrabold text-3xl max-sm:mt-5 max-lg:mt-9">SKINA</p>
          <div className="flex flex-col gap-60 max-lg:gap-80 max-lg:mt-18  max-sm:gap-48 max-sm:mt-1">
            <div>
              <ul className="mt-20 flex flex-col gap-6">
                <li
                  className={`${
                    activeLink === "product"
                      ? "bg-black text-white"
                      : "bg-gray-200 hover:bg-black hover:text-white"
                  } p-3 rounded-2xl`}
                >
                  <a href="#product" onClick={() => handleClick("product")}>
                    Nos Produit
                  </a>
                </li>
                <li
                  className={`${
                    activeLink === "conseil"
                      ? "bg-black text-white"
                      : "bg-gray-200 hover:bg-black hover:text-white"
                  } p-3 rounded-2xl`}
                >
                  <a href="#conseil" onClick={() => handleClick("conseil")}>
                    Nos Conseil
                  </a>
                </li>
                <li
                  className={`${
                    activeLink === "pro"
                      ? "bg-black text-white"
                      : "bg-gray-200 hover:bg-black hover:text-white"
                  } p-3 rounded-2xl`}
                >
                  <a href="#pro" onClick={() => handleClick("pro")}>
                    A Propos
                  </a>
                </li>
                <li
                  className={`${
                    activeLink === "service"
                      ? "bg-black text-white"
                      : "bg-gray-200 hover:bg-black hover:text-white"
                  } p-3 rounded-2xl`}
                >
                  <a href="#service" onClick={() => handleClick("service")}>
                    Service Client
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex gap-10">
              <LogOut />
              <Settings />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
