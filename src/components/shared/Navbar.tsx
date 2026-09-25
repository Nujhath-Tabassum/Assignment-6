
import React from "react";
import Image from "next/image";
import logo from "../../assects/logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar min-h-16 px-4 sm:px-6 border-b border-gray-800">

      {/* Logo */}
      <div className="navbar-start">
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt="Fitlog Logo"
            width={24}
            height={24}
          />

          <span className="text-white font-bold text-lg">
            FITLOG
          </span>
        </div>
      </div>

      {/* Navigation - Desktop */}
      <div className="navbar-center hidden md:flex">
        <div className="flex items-center gap-2">

          {/* Workouts */}
          <Link
            href="/"
            className="px-4 py-1.5 text-sm text-gray-400 hover:text-white"
          >
            Workouts
          </Link>

          {/* My Plan */}
          <Link
            href="/planner"
            className="px-4 py-1.5 text-sm text-gray-400 hover:text-white cursor-pointer"
          >
            My Plan
          </Link>

        </div>
      </div>

      {/* Right side */}
      <div className="navbar-end">
        <div className="flex items-center gap-3 sm:gap-6 text-sm">

          <span className="text-gray-300">
            Plan
          </span>

          <span className="text-gray-400">
            Saved
          </span>

          {/* Mobile Menu */}
          <div className="dropdown dropdown-end md:hidden">

            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-sm text-white"
            >
              ☰
            </div>

            <ul
              tabIndex={-1}
              className="menu dropdown-content bg-base-100 rounded-box z-10 mt-3 w-40 p-2 shadow"
            >

              {/* Mobile Workouts */}
              <li>
                <Link href="/workouts">
                  Workouts
                </Link>
              </li>

              {/* Mobile My Plan */}
              <li>
                <a>
                  My Plan
                </a>
              </li>

            </ul>

          </div>

        </div>
      </div>

    </div>
  );
};

export default Navbar;
