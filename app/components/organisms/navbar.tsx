import React from 'react';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import FooterLogo from './footerLogo';


const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-blue">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16 py-5">
                    {/* Logo */}
                    <div className='py-2'>
                        <FooterLogo />
                    </div>

                    {/* Mobile Menu */}
                    <div className="md:hidden">
                        <button
                            onClick={handleMobileMenuToggle}
                            className="text-white hover:text-gray-300"
                        >
                            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-20">
                        <div className="relative">
                            <Link href="/properties">
                                <a className="text-white hover:text-gray-300">Properties</a>
                            </Link>
                        </div>

                        <div className="relative group">
                            <button className="text-white hover:text-gray-300">Other Services</button>
                            <ul
                                className={`absolute ${isMobileMenuOpen ? 'block' : 'hidden'
                                    } md:block bg-gray-800 text-white py-2 mt-2 rounded-md`}
                            >
                                <li>
                                    <Link href="/help">
                                        <a className="block px-4 py-2 hover:bg-gray-700">Help</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <a className="block px-4 py-2 hover:bg-gray-700">Contact</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="relative">
                            <button className="text-white hover:text-gray-300">Sign In / Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

