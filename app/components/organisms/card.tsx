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
            <div>
                <img src={image} alt="Property" className="w-full h-48 object-cover mb-4" />
                <p className="text-lg font-bold mb-4">{price}</p>
            </div>
            <div className="flex items-center justify-between">
                <p className="text-sm">{ownerName}</p>
                <img src={ownerAvatar} alt="Owner Avatar" className="w-8 h-8 rounded-full mr-2" />
            </div>
            <div className='bg-blue py-2 flex text-white justify-between mt-4 px-6 items-center'>
                <p className=" text-gray-200 mb-2">Apartment/ {purpose}</p>
                <p>2 rooms, 1 bath</p>

            </div>
        </div>
    );
};

export default Card;