'use client'

import React from 'react';
import { FaBath, FaBed } from 'react-icons/fa';

interface CardProps {
    image: string;
    purpose: string;
    price: string;
    agent: string;
    avater: string;
}

const Card: React.FC<CardProps> = ({
    image,
    purpose,
    price,
    agent,
    avater,
}) => {
    return (
        <div className="text-base">
            <div className="relative">
                <img src={image} alt="Property" className="w-full h-72 mb-4 rounded-xl" />
                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <p className="absolute bottom-2 left-4 text-white font-extrabold text-xl">{price}</p>
            </div>
            <div className="flex items-center justify-between px-8">
                <p className="text-sm">{agent}</p>
                <img src={avater} alt="Owner Avatar" className="w-9 h-9 rounded-full mr-2" />
            </div>
            <div className='bg-blue py-2 flex text-white justify-between mt-4 px-6 items-center rounded-xl'>
                <p className=" text-gray-200 mb-2"> {purpose}</p>
                <p className='flex items-center justify-center '> 2 <FaBed className='ml-1 mr-3' />  1 <FaBath className='ml-1' /></p>

            </div>
        </div>
    );
};

export default Card;