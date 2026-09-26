"use client";

import Image from "next/image";
import logo from "../../assects/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { usePlan } from "../../context/PlanContext";

const Navbar = () => {
    const { todayPlan, savedWorkouts } = usePlan();
    const pathname = usePathname();

    const isWorkoutsActive = pathname === "/";
    const isPlanActive = pathname.startsWith("/planner");

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
                        className={`px-4 py-1.5 text-sm rounded-full ${
                            isWorkoutsActive
                                ? "bg-[#1d2b0d] text-lime-400"
                                : "text-gray-400 hover:text-white"
                        }`}
                    >
                        Workouts
                    </Link>

                    {/* My Plan */}
                    <Link
                        href="/planner"
                        className={`px-4 py-1.5 text-sm rounded-full ${
                            isPlanActive
                                ? "bg-[#1d2b0d] text-lime-400"
                                : "text-gray-400 hover:text-white"
                        }`}
                    >
                        My Plan
                    </Link>

                </div>
            </div>

            {/* Right side */}
<div className="navbar-end">
    <div className="flex items-center gap-5 text-sm">

        {/* Plan Counter */}
        <Link
            href="/planner"
            className="text-gray-300 hover:text-white flex items-center gap-1.5"
        >
            Plan

            <span className="bg-lime-400 text-black font-bold text-[12px] w-5 h-5 rounded-full flex items-center justify-center">
                {todayPlan.length}
            </span>
        </Link>

        {/* Saved Counter */}
        <Link
            href="/planner/savedPlan"
            className="text-gray-400 hover:text-white flex items-center gap-1.5"
        >
            Saved

            <span className="border border-gray-700 text-gray-400 font-bold text-[12px] w-5 h-5 rounded-full flex items-center justify-center">
                {savedWorkouts.length}
            </span>
        </Link>

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
                    <Link href="/">Workouts</Link>
                </li>

                <li>
                    <Link href="/planner">My Plan</Link>
                </li>
            </ul>
        </div>

    </div>
</div>

        </div>
    );
};

export default Navbar;