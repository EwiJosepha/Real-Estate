'use client'

import React, { useState, useEffect } from 'react';

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

    return (
        <section className='w-full max-w-full'>
            <img
                src={images[currentImageIndex]}
                alt="Hero Image"
                style={{ width: '100%', height: '800px' }}
            />
        </section>
    );
};

export default HeroSection;