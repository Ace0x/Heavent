import React from "react";
import { FaBars, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function Nav({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const { currentUser } = useAuth();

  const UserNotSet = () => (
    <>
      <li className="nav-item">
        <NavLink
          className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
          to="/login"
        >
          <span className="ml-2">Log In</span>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
          to="/signup"
        >
          <span className="ml-2">Sign Up</span>
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <nav className="fixed flex flex-wrap items-center justify-between px-2 py-3 bg-black top-0 left-0 w-full">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between text-[#ffffff]">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <NavLink
              className="text-sm title-text leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              to="#pablo"
            >
              HeaVen't
            </NavLink>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {!currentUser ? (
                <UserNotSet />
              ) : (
                <li className="nav-item">
                  <NavLink
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    to="/"
                  >
                    <FaInstagram className="text-lg leading-lg text-white opacity-75" />
                    <span className="ml-2">Log Out</span>
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
