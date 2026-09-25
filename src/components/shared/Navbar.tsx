"use client";

import React from "react";
import Image from "next/image";
import logo from "../../assects/logo.png";
import Link from "next/link";

import { usePlan } from "../../context/PlanContext";

const Navbar = () => {
  const { todayPlan, savedWorkouts } = usePlan();

  return (
    <div className="navbar min-h-16 px-4 sm:px-6 border-b border-gray-800">

      {/* Logo */}
      <div className="navbar-start">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="Fitlog Logo"
            width={24}
            height={24}
          />

          <span className="text-white font-bold text-lg">
            FITLOG
          </span>
        </Link>
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
            className="px-4 py-1.5 text-sm text-gray-400 hover:text-white"
          >
            My Plan
          </Link>

        </div>
      </div>

      {/* Right side */}
      <div className="navbar-end">
        <div className="flex items-center gap-3 sm:gap-6 text-sm">

          {/* Plan Counter */}
          <Link
            href="/planner"
            className="text-gray-300 hover:text-white flex items-center gap-1.5"
          >
            Plan
            <span className="bg-lime-400 text-black font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {todayPlan.length}
            </span>
          </Link>

          {/* Saved Counter */}
          <span className="text-gray-400 flex items-center gap-1.5">
            Saved
            <span className="bg-lime-400 text-black font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {savedWorkouts.length}
            </span>
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

              <li>
                <Link href="/">
                  Workouts
                </Link>
              </li>

              <li>
                <Link href="/planner">
                  My Plan
                </Link>
              </li>

            </ul>

          </div>

        </div>
      </div>

    </div>
  );
};

export default Navbar;