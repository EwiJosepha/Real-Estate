// 'use client'

// import React, { useState, useEffect } from 'react';

// const images = [
//     'image1.jpg',
//     'image2.jpg',
//     'image3.jpg',
//     // Add more image URLs here
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
//         <section className="hero-section">
//             <img src={images[currentImageIndex]} alt="Hero Image" />
//             {/* Other content for the hero section */}
//         </section>
//     );
// };

// export default HeroSection;