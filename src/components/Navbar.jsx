import React from "react";
import { Link } from "react-router-dom";

const routes = [
  { path: "/", label: "Home" },
  { path: "/works", label: "Works" },
  { path: "/skills", label: "Skills" },
  { path: "/aboutMe", label: "About me" },
  { path: "/contact", label: "Contact" },
];

function Navbar() {
  return (
    <nav className="w-1/2 h-10 flex justify-center items-center bg-[#F3EFF5] mt-5 border-2 border-double border-[#72B01D] rounded-lg z-50 text-[#0D0A0B] ">
      <ul className="flex flex-row gap-10">
        {routes.map(({ path, label }, index) => {
          return (
            <li
              key={index}
              className="text-[#0D0A0B] hover:text-[#72B01D] hover:underline underline-offset-4 decoration-[#72B01D]"
            >
              <Link to={path}>{label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
