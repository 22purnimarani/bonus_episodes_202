import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBars,
    faTimes,
    faSearch,
    faShoppingCart,
} from '@fortawesome/free-solid-svg-icons'

// import logo from '../assets/logo.jpeg'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
      <header className=" mb-10 mt-16 left-0 right-0 flex flex-wrap justify-between items-center py-3 px-4 bg-ivory shadow-md max-w-full z-20">
            {/* Logo */}
            <a className="flex items-center">
                {/* <img src={logo} className=" h-16 mr-1" /> */}
                <span className="text-2xl font-bold text-justify font-fligen text-terracotta">
                    Bonus Episodes
                </span>
            </a>
            {/* Icons (Search, Cart) */}
            <div className="flex items-center justify-between lg:order-2">
                <a
                    href="/"
                    className="hover:text-terracotta font-yeseva px-2"
                    aria-label="Search"
                >
                    <FontAwesomeIcon icon={faSearch} />
                </a>
                <a
                    href="/cart"
                    className="hover:text-terracotta font-yeseva px-2"
                    aria-label="Shopping Cart"
                >
                    <FontAwesomeIcon icon={faShoppingCart} />
                </a>
                {/* Hamburger Icon */}
                <button
                    className="lg:hidden focus:outline-none px-2"
                    onClick={() => toggleMenu()}
                >
                    <FontAwesomeIcon
                        icon={isOpen ? faTimes : faBars}
                        className="text-terracotta h-6"
                    />
                </button>
            </div>

            <div
                className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${
                    isOpen ? '' : 'hidden'
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
    )
}

export default Header