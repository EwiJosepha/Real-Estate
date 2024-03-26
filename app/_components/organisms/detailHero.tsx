'use client'

import React, { useState } from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';

const DetailHero: React.FC = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        'detail1.jpeg',
        'detail2.jpeg',
        'detail3.jpeg',
        'detail4.jpeg',
        'detail5.jpeg',
        'detail6.jpg',
        'detail7.jpg',
        'detail8.jpg',
    ];

    const previousImage = () => {
        setCurrentImage((prevState) =>
            prevState === 0 ? images.length - 1 : prevState - 1
        );
    };

    const nextImage = () => {
        setCurrentImage((prevState) =>
            prevState === images.length - 1 ? 0 : prevState + 1
        );
    };

    return (
        <div className="relative p-4">
            <button
                className="absolute top-1/2 left-7 transform -translate-y-1/2 px-4 py-2 border-4 bg-transparent border-white font-bold"
                onClick={previousImage}
            >
                <GrPrevious className="text-white" />
            </button>
            <img
                className="h-[85vh] w-full object-cover top-0 cursor-pointer hover:transition-opacity"
                src={images[currentImage]}
                alt="Carousel Image"
            />
            <button
                className="absolute top-1/2 right-7 transform -translate-y-1/2 px-4 py-2 bg-transparent font-bold border-4 border-white"
                onClick={nextImage}
            >
                <GrNext className="text-white" />
            </button>

            <div className="mt-3 flex justify-center">
                {images.map((image, index) => (
                    <img
                        key={index}
                        className={`w-full h-24 object-cover mx-2 cursor-pointer ${index === currentImage ? 'border-2' : ''
                            }`}
                        src={image}
                        alt="Thumbnail"
                        onClick={() => setCurrentImage(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default DetailHero;