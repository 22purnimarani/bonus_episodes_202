import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-evenly items-center px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <a href="/">Bonus Episodes</a> {/* to be updated with actual website name */}
      </div>

      {/* Hamburger Icon */}
      <button onClick={toggleMenu} className="md:hidden focus:outline-none">
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>

      {/* Navigation */}
      <nav className={`md:flex md :static top-full left-0 w-full md:w-auto bg-white md:bg-transparent transition-all duration-300 ${isOpen ? 'block' : 'hidden md:block'}`}>
        <ul className="grid grid-cols-2 gap-2 md:flex md:space-x-6 text-lg p-4 md:p-0"> 
          <li><a href="/" className="hover:text-gray-500">Home</a></li>
          <li><a href="/gallery" className="hover:text-gray-500">Gallery</a></li>
          <li><a href="/shop" className="hover:text-gray-500">Shop</a></li>
          <li><a href="/faq" className="hover:text-gray-500">FAQ</a></li>
          <li><a href="/contact" className="hover:text-gray-500">Contact</a></li>
        </ul>
      </nav>

      {/* Icons (Search, Cart) */}
      <div className={`flex items-center space-x-4 ${isOpen ? 'block' : 'hidden md:flex'}`}>
        <a href="/" className="hover:text-gray-500" aria-label="Search">
          <i className="fas fa-search"></i>
        </a>
        <a href="/cart" className="hover:text-gray-500" aria-label="Shopping Cart">
          <i className="fas fa-shopping-cart"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
