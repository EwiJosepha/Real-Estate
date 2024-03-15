'use client'

import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

const images = [
    'REImg.webp',
    'img2.webp',
    'img1.webp',
];

const HeroSection: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const handleSearch = () => { };

    return (
        <div className="font-serif">
            <section className="w-full max-w-full">
                <img
                    src={images[currentImageIndex]}
                    alt="Hero Image"
                    className="w-full object-cover transition-filter duration-500"
                    style={{ height: '820px' }}
                />
            </section>
            <section className="absolute bottom-1/3 transform -translate-x-1/2 left-1/2">
                <div className="container mx-auto px-4">
                    <h1 className="text-white font-extrabold md:text-4xl mb-20 sm:text-3xl xs:text-center ">
                        Find Your Dream Home At D&J. The Best Luxury Selection
                    </h1>

                    <div className="text-white -mb-6 bg-blue border-0 px-6 py-4 w-40 rounded-lg">
                        <button className="mr-6 items-center">Rent</button>
                        <button className="items-center">Buy</button>
                    </div>
                    <div className="flex items-center bg-white border py-2 px-6 sm:w-[50%] md:w-[100%] justify-between mt-4">
                        <input
                            type="text"
                            className="block bg-none p-2 pl-10 border-0 focus:pl-3 outline-none flex-1"
                            placeholder="Search by No of rooms, bath..."
                        />
                        <div className="p-2 cursor-pointer">
                            <FaSearch className="text-black" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;