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

    const handleSearch = () => {
    };

    return (
        <div className='font-serif'>
            <section className='w-[100%] max-w-full'>
                <img
                    src={images[currentImageIndex]}
                    alt="Hero Image"
                    style={{ width: '100%', height: '730px', transition: 'filter 0.5s' }}
                />


            </section>
            <section className="absolute flex flex-col bottom-1/3 transform translate-x-1/2">
                <h1 className='text-white font-extrabold text-4xl mb-20'>Find Your Dream Home At D&J. The Best Luxury Selection</h1>

                <div className='text-white bg-blue border-0 px-6 py-4 w-40 rounded-lg -mb-2'>
                    <button className='mr-6 items-center'>Rent</button>
                    <button className='items-center'>Buy</button>
                </div>
                <div className="flex items-center px-6 bg-white border py-2 w-[60%] justify-between">
                    <input
                        type="text"
                        className="block bg-none p-2 pl-10 border-0 focus:pl-3 outline-none"
                        placeholder="Search by No of rooms, bath..."
                    />
                    <FaSearch className="text-black" />
                </div>
            </section>
        </div>
    );
};

export default HeroSection;