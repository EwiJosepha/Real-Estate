import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-blue max-w-full">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <span className="text-white text-lg font-bold">D&J</span>
                    </div>
                    <div className="flex items-center space-x-20">
                        <div className="relative">
                            <Link href="/properties" className="text-white hover:text-gray-300">
                                Properties
                            </Link>
                        </div>

                        <div className="relative group">
                            <button className="text-white hover:text-gray-300">Other Services</button>
                            <ul className="absolute hidden group-hover:block bg-gray-800 text-white py-2 mt-2 rounded-md">
                                <li>
                                    <Link href="/help" className="block px-4 py-2 hover:bg-gray-700">
                                        Help
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="block px-4 py-2 hover:bg-gray-700">
                                        Contact
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




// 'use client'

// import React, { useState, useEffect } from 'react';

// const images = [
//     'REImg.webp',
//     'img2.webp',
//     'img1.webp',
// ];

// const HeroSection: React.FC = () => {
//     const [currentImageIndex, setCurrentImageIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//         }, 5000);

//         return () => {
//             clearInterval(interval);
//         };
//     }, []);

//     return (
//         <section className='w-full max-w-full'>
//             <img
//                 src={images[currentImageIndex]}
//                 alt="Hero Image"
//                 style={{ width: '100%', height: '800px' }}
//             />
//         </section>
//     );
// };

// export default HeroSection;