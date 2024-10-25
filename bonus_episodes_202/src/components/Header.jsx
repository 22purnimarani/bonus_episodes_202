import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-ivory shadow-md mt-16">
      {/* Logo */}
      <div className="text-2xl font-bold text-justify font-fligen text-terracotta">
        <a href="/">Bonus Episodes</a> {/* to be updated with actual website name */}
      </div>

      {/* Hamburger Icon */}
      <button onClick={toggleMenu} className="md:hidden focus:outline-none aria-expanded={isOpen}">
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-terracotta" />
      </button>

      {/* Navigation */}
      <nav className={`md:flex md :static top-full left-0 w-full md:w-auto bg-white md:bg-transparent text-chocolateBrown transition-all duration-300 ${isOpen ? 'block' : 'hidden md:block'}`}>
        <ul className="grid grid-cols-2 gap-2 md:flex md:space-x-6 text-lg p-4 md:p-0">
          <li><a href="/" className="hover:text-oliveGreen font-yeseva">Home</a></li>
          <li><a href="/gallery" className="hover:text-oliveGreen font-yeseva">Gallery</a></li>
          <li><a href="/shop" className="hover:text-oliveGreen font-yeseva">Shop</a></li>
          <li><a href="/faq" className="hover:text-oliveGreen font-yeseva">FAQ</a></li>
          <li><a href="/contact" className="hover:text-oliveGreen font-yeseva">Contact</a></li>
        </ul>
      </nav>

      {/* Icons (Search, Cart) */}
      <div className={`flex items-center space-x-4 text-chocolateBrown ${isOpen ? 'block' : 'hidden md:flex'}`}>
        <a href="/" className="hover:text-terracotta font-yeseva" aria-label="Search">
          <FontAwesomeIcon icon={faSearch} />
        </a>
        <a href="/cart" className="hover:text-terracotta font-yeseva" aria-label="Shopping Cart">
          <FontAwesomeIcon icon={faShoppingCart} />
        </a>
      </div>
    </header>
  );
};

export default Header;
