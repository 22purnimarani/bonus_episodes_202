import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faSearch,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate(); 
  const handleSearchClick = () => {
    // When the search button is clicked, navigate to the product page
    navigate("/products");
  };
  return (
    <header className="mt-8 top-0 left-0 right-0 bg-ivory shadow-md z-20">
      {/* Top Section with Logo, Search Bar, and Icons */}
      <div className="flex justify-between items-center py-3 px-4 max-w-full">
        {/* Left Section for spacing */}
        <div className="w-1/12"></div>

        {/* Centered Logo */}
        <div className="flex justify-center w-1/6">
          <span className="text-2xl font-bold font-fligen text-terracotta">
            Bonus Episodes
          </span>
        </div>

        {/* Search Bar and Icons */}
        <div className="flex items-center justify-end w-1/3">
          {/* Search Bar with Icon */}
          <div className="relative hidden md:flex">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-full pl-4 pr-10 py-1 outline-none focus:ring-2 focus:ring-terracotta transition-all duration-300 bg-ivory"
            />
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-terracotta focus:outline-none"
              aria-label="Search"
              onClick={handleSearchClick}
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          {/* Shopping Cart Icon */}
          <a
            href="/cart"
            className="hover:text-terracotta font-yeseva px-4"
            aria-label="Shopping Cart"
          >
            <FontAwesomeIcon icon={faShoppingCart} />
          </a>

          {/* Hamburger Icon */}
          <button
            className="lg:hidden focus:outline-none px-2"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon
              icon={isOpen ? faTimes : faBars}
              className="text-terracotta h-6"
            />
          </button>
        </div>
      </div>

      {/* Navbar Links */}
      <div
        className={`flex justify-center w-full lg:flex lg:w-auto ${
          isOpen ? "" : "hidden"
        }`}
      >
        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          <li>
            <a
              href="/"
              className="block py-2 pl-3 pr-4 hover:text-oliveGreen font-yeseva"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#hero"
              className="block py-2 pl-3 pr-4 hover:text-oliveGreen font-yeseva"
            >
              Hero
            </a>
          </li>
          <li>
            <a
              href="#featuredproducts"
              className="block py-2 pl-3 pr-4 hover:text-oliveGreen font-yeseva"
            >
              Featured Products
            </a>
          </li>
          <li>
            <a
              href="#promo"
              className="block py-2 pl-3 pr-4 hover:text-oliveGreen font-yeseva"
            >
              Promo
            </a>
          </li>
          <li>
            <a
              href="#service"
              className="block py-2 pl-3 pr-4 hover:text-oliveGreen font-yeseva"
            >
              ServiceSection
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="block py-2 pl-3 pr-4 hover:text-oliveGreen font-yeseva"
            >
              FAQ
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
