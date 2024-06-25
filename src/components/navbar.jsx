"use client";

import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex items-center justify-between px-4 py-6 bg-white shadow-md w-full h-fit">
      {/* Logo */}
      <div className="flex-shrink-0 ml-12">
        <img src="logo.png" alt="Logo" className="h-14" />
      </div>

      {/* Search Box */}
      <div className="hidden lg:flex items-center w-68 h-10 bg-white border border-gray-300 rounded-lg overflow-hidden ml-12 flex-grow">
        <input
          type="text"
          placeholder="Search"
          className="w-full h-full px-4 py-2 bg-white text-black focus:outline-none"
        />
        <div className="p-2 bg-customPurple">
          <img src="/search.svg" alt="Search" className="h-6 w-6 text-white" />
        </div>
      </div>

      {/* Search Icon for Mobile */}
      <div className="lg:hidden flex-shrink-0 p-2 bg-customPurple ml-16">
        <img src="/search.svg" alt="Search" className="h-6 w-6 text-white" />
      </div>

      {/* Bell Icon for Mobile */}
      <div className="lg:hidden flex-shrink-0 p-2">
        <img src="bell.png" alt="Notifications" className="h-6" />
      </div>
      {/* Hamburger Menu for Mobile */}
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-customPurple focus:outline-none"
        >
          <FaBars className="h-6 w-6 mr-6" />
        </button>
      </div>

      {/* Navigation Links for Large Screens */}
      <div className="hidden lg:flex gap-8 items-center ml-14 flex-grow">
        <div className="flex gap-3 items-center">
          <img src="nav.png" alt="Explore" className="h-6" />
          <p>Explore</p>
          <img src="arrow.svg" alt="Arrow" className="h-2" />
        </div>
        <div className="flex gap-3 items-center">
          <img src="star.png" alt="Hobbies" className="h-6" />
          <p>Hobbies</p>
          <img src="arrow.svg" alt="Arrow" className="h-2" />
        </div>
        <div className="flex gap-6 items-center">
          <img src="save.png" alt="Save" className="h-6" />
          <img src="bell.png" alt="Notifications" className="h-6" />
          <img src="cart.png" alt="Cart" className="h-6" />
        </div>
        <button className="bg-white text-black px-4 py-2 rounded-md border-2 border-customPurple w-28 h-10">
          Sign In
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-md p-4">
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
              <img src="nav.png" alt="Explore" className="h-6" />
              <p>Explore</p>
            </div>
            <div className="flex gap-3 items-center">
              <img src="star.png" alt="Hobbies" className="h-6" />
              <p>Hobbies</p>
            </div>
            <div className="flex gap-3 items-center">
              <img src="save.png" alt="Save" className="h-6" />
              <p>Save</p>
            </div>
            <div className="flex gap-3 items-center">
              <img src="cart.png" alt="Cart" className="h-6" />
              <p>Cart</p>
            </div>
            <button className="bg-white text-black px-4 py-2 rounded-md border-2 border-customPurple w-full">
              Sign In
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
