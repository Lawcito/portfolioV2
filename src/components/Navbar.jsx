import { Link, useLocation } from "react-router-dom";
import mugiwara from "../assets/mugiwara.png";
import { useState } from "react";

const routes = [
  { path: "/", label: "Home" },
  { path: "/works", label: "Works" },
  { path: "/skills", label: "Skills" },
  { path: "/aboutMe", label: "About me" },
];

function Navbar() {
  const location = useLocation(undefined);
  const [isOpen, setIsOpen] = useState(undefined);

  return (
    <nav className="lg:w-1/3 h-10 lg:flex lg:justify-center items-center lg:bg-[#F3EFF5] lg:mt-5 rounded-lg z-50 text-[#0D0A0B]">
      {/* Hamburguesa para mobile */}
      <button
        className="lg:hidden flex place-self-end place-items-center mt-5 mr-5 mb-5"
        onClick={() => setIsOpen(!isOpen)}
      >
        {!isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="#F3EFF5"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="#F3EFF5"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
        )}
      </button>
      {isOpen ? (
        <ul className="flex flex-col bg-[#F3EFF5] items-center w-full h-screen justify-evenly">
          {routes.map(({ path, label }, index) => {
            return (
              <li
                key={index}
                className={`relative text-[#0D0A0B] hover:text-[#72B01D] hover:underline underline-offset-4 decoration-[#72B01D] text-[${
                  path == location.pathname ? "#72B01D" : false
                }]`}
              >
                <Link to={path}>{label}</Link>
                {path == location.pathname ? (
                  <img
                    src={mugiwara}
                    alt="mugiwara logo"
                    className="h-3 absolute -top-2"
                  />
                ) : (
                  false
                )}
              </li>
            );
          })}
        </ul>
      ) : (
        false
      )}
      <ul className="lg:flex flex-row gap-10 hidden">
        {routes.map(({ path, label }, index) => {
          return (
            <li
              key={index}
              className={`relative text-[#0D0A0B] hover:text-[#72B01D] hover:underline underline-offset-4 decoration-[#72B01D] text-[${
                path == location.pathname ? "#72B01D" : false
              }]`}
            >
              <Link to={path}>{label}</Link>
              {path == location.pathname ? (
                <img
                  src={mugiwara}
                  alt="mugiwara logo"
                  className="h-3 absolute -top-2"
                />
              ) : (
                false
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
