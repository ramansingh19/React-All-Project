import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow sticky z-50 top-0 bg-white">
      <nav className="border-gray-200 px-4 sm:px-6 py-2.5">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="h-10 sm:h-12"
              alt="Logo"
            />
          </Link>

          {/* Right Section */}
          <div className="flex items-center gap-2 lg:order-2">

            {/* Auth buttons (desktop) */}
            <div className="hidden sm:flex gap-2">
              <Link
                to="#"
                className="text-gray-800 hover:bg-gray-50 font-medium rounded-lg text-sm px-4 py-2"
              >
                Log in
              </Link>
              <Link
                to="#"
                className="text-white bg-orange-700 hover:bg-orange-800 font-medium rounded-lg text-sm px-4 py-2"
              >
                Get started
              </Link>
            </div>

            {/* Mobile menu button (3-dot / hamburger) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center p-2 text-gray-600 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div
          className={`${isOpen ? "block" : "hidden"} justify-center lg:flex lg:items-center lg:w-auto`}
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">

            {["/", "/about", "/contact", "/github"].map((path, i) => (
              <li key={i}>
                <NavLink
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 px-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } hover:text-orange-700`
                  }
                >
                  {path === "/" ? "Home" : path.replace("/", "")}
                </NavLink>
              </li>
            ))}

            {/* Auth buttons (mobile) */}
            <li className="sm:hidden flex flex-col gap-2 px-3 mt-3">
              <Link className="text-gray-700">Log in</Link>
              <Link className="text-white bg-orange-700 rounded-lg px-4 py-2 text-center">
                Get started
              </Link>
            </li>

          </ul>
        </div>
      </nav>
    </header>
  );
}
