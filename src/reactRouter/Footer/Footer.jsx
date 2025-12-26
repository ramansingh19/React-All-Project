import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-white border-y">
  <div className="mx-auto w-full max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8">
    
    {/* Top Section */}
    <div className="flex flex-col md:flex-row md:justify-between gap-8">
      
      {/* Logo */}
      <div className="flex justify-center md:justify-start">
        <Link to="/" className="flex items-center">
          <img
            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
            className="h-12 sm:h-14 md:h-16"
            alt="Logo"
          />
        </Link>
      </div>

      {/* Links */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center sm:text-left">
        <div>
          <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">
            Resources
          </h2>
          <ul className="text-gray-500 font-medium space-y-3">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">
            Follow us
          </h2>
          <ul className="text-gray-500 font-medium space-y-3">
            <li>
              <a
                href="https://github.com/ramansingh19"
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Discord
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">
            Legal
          </h2>
          <ul className="text-gray-500 font-medium space-y-3">
            <li>
              <Link to="#" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <hr className="my-6 border-gray-200" />

    {/* Bottom Section */}
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
      <span className="text-sm text-gray-500 text-center sm:text-left">
        © 2023 <span className="hover:underline">Raman kumar</span>. All Rights Reserved.
      </span>

      <div className="flex space-x-5">
        <Link to="#" className="text-gray-500 hover:text-gray-900">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 8 19">
            <path
              fillRule="evenodd"
              d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
              clipRule="evenodd"
            />
          </svg>
        </Link>

        <Link to="#" className="text-gray-500 hover:text-gray-900">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 21 16">
            <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3..." />
          </svg>
        </Link>

        <Link to="#" className="text-gray-500 hover:text-gray-900">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 17">
            <path
              fillRule="evenodd"
              d="M20 1.892a8.178 8.178 0 0 1-2.355.635..."
              clipRule="evenodd"
            />
          </svg>
        </Link>

        <Link to="#" className="text-gray-500 hover:text-gray-900">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 .333A9.911 9.911 0 0 0..."
              clipRule="evenodd"
            />
          </svg>
        </Link>

        <Link to="#" className="text-gray-500 hover:text-gray-900">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 0a10 10 0 1 0 10 10..."
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  </div>
</footer>

    );
}