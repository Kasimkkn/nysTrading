import React from 'react';
import brochureGif from '../assets/img/brochure.gif';
import logo from '../assets/img/logo.png';

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="sticky top-0 z-50">
            {/* Top Bar */}
            <div className="bg-dark-blue py-2 px-4 hidden md:flex justify-between items-center">
                <div className="flex space-x-4">
                    <span className='text-text-color'>+91-9999376935</span>
                    <span className='text-text-color'>Mon - Sat: 10 am - 6:30 pm</span>
                </div>
                <div className="flex space-x-4">
                    <a href="path_to_brochure.pdf" className="px-3 py-1 text-text-color inline-flex items-center">
                        <img src={brochureGif} alt="PDF" className="w-4 h-4 mr-2" />
                        Download Brochure
                    </a>
                </div>
            </div>

            {/* Main Header */}
            <div className="bg-white shadow-md">
                <div className={`flex ${isOpen ? 'flex-wrap' : ''} items-center py-4 px-4`}>
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img src={logo} alt="Ruchi Cargo Agency" className="h-12" />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex ml-auto">
                        <button onClick={toggleMenu} className='text-2xl hover:text-text-color text-dark-blue'>
                            &#9776;
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <nav className={`w-full z-50 md:w-auto md:flex md:items-center md:space-x-6 mt-4 md:mt-0 ${isOpen ? 'block' : 'hidden'}`}>
                        <a href="#home" className="block md:inline text-gray-800 py-2 md:py-0">Home</a>
                        <a href="#about" className="block md:inline text-gray-800 py-2 md:py-0">About Us</a>
                        <a href="#services" className="block md:inline text-gray-800 py-2 md:py-0">Our Services</a>
                        <a href="#partner" className="block md:inline text-gray-800 py-2 md:py-0">Our Products</a>
                        <a href="#contact" className="block md:inline text-gray-800 py-2 md:py-0">Contact Us</a>
                    </nav>

                    {/* Enquiry Button */}
                    <div className="hidden md:flex">
                        <button className="bg-text-color text-white px-4 py-2 rounded">Enquiry Now</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
