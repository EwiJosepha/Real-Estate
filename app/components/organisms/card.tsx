'use client'

import React from 'react';

interface CardProps {
    image: string;
    purpose: string;
    price: string;
    ownerName: string;
    ownerAvatar: string;
}

const Card: React.FC<CardProps> = ({
    image,
    purpose,
    price,
    ownerName,
    ownerAvatar,
}) => {
    return (
        <div className="text-base">
            <div className='rounded-xl'>
                <img src={image} alt="Property" className="w-full h- h-72 mb-4" />
                <p className="text-lg font-bold mb-4">{price}</p>
            </div>
            <div className="flex items-center justify-between px-8">
                <p className="text-sm">{ownerName}</p>
                <img src={ownerAvatar} alt="Owner Avatar" className="w-8 h-8 rounded-full mr-2" />
            </div>
            <div className='bg-blue py-2 flex text-white justify-between mt-4 px-6 items-center rounded-xl'>
                <p className=" text-gray-200 mb-2">Apartment/ {purpose}</p>
                <p>2 rooms, 1 bath</p>

            </div>
        </div>
    );
};

export default Card;