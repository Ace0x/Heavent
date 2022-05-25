import React from "react";
import { FaBars, FaInstagram } from "react-icons/fa";

export default function Nav({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <>
      <nav className="fixed flex flex-wrap items-center justify-between px-2 py-3 bg-black top-0 left-0 w-full">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between text-[#ffffff]">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm title-text leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              HeaVen't
            </a>
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
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" target={"blank"}
                  href="https://www.instagram.com/rekenaar.csf/"
                >
                  <FaInstagram className="text-lg leading-lg text-white opacity-75" />
                  <span className="ml-2">Follow us!</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}