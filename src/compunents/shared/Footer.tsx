import React from "react";
import Image from "next/image";
import logo from "../../assects/logo.png";

const Footer = () => {
  return (
    <footer className="min-h-24 border-t border-gray-800 px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image
          src={logo}
          alt="Fitlog Logo"
          width={18}
          height={18}
        />

        <span className="text-white text-xs font-bold">
          FITLOG
        </span>
      </div>

      {/* Copyright */}
      <p className="text-xs text-gray-500 text-center sm:text-right">
        © 2026 FitLog — Workout Library. Train hard, log honest.
      </p>

    </footer>
  );
};

export default Footer;