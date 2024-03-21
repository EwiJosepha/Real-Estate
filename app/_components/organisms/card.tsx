import React from 'react';
import { FaBath, FaBed, FaHeart } from 'react-icons/fa';
import Link from 'next/link';

interface CardProps {
    id: number;
    image: string;
    listing: string;
    price: string;
    agent: string;
    avatar: string;
    onToggleFavorite: (id: number) => void;
    isFavorite: boolean;
}

const Card: React.FC<CardProps> = ({
    id,
    image,
    listing,
    price,
    agent,
    avatar,
    onToggleFavorite,
    isFavorite,
}) => {
    const handleToggleFavorite = () => {
        onToggleFavorite(id);
    };

    return (
        <div className="text-base">
            <div className="relative">

                <Link href="/details">
                    <div className="relative overflow-hidden  mb-4">
                        <img src={image} alt="Property" className="w-full h-72 rounded-xl" />
                        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                        <p className="absolute bottom-2 left-4 text-white font-extrabold text-xl">{price}</p>
                    </div>
                </Link>

                {isFavorite ? (
                    <button
                        onClick={handleToggleFavorite}
                        className="absolute p-2 rounded-full bg-pink-200 top-3 right-3 text-red-500"
                    >
                        <FaHeart />
                    </button>
                ) : (
                    <button
                        onClick={handleToggleFavorite}
                        className="absolute p-2 rounded-full bg-gray-600 top-3 z-10 right-3 text-white hover:bg-pink-200 hover:text-red-500"
                    >
                        <FaHeart />
                    </button>
                )}
            </div>

            <div>
                <Link href='/details'>
                    <div className="flex items-center justify-between px-8">
                        <p className="text-sm">{agent}</p>
                        <img src={avatar} alt="Owner Avatar" className="w-10 h-10 rounded-full mr-2" />
                    </div>
                    <div className="bg-blue py-2 flex text-white justify-between mt-4 px-6 items-center rounded-xl">
                        <p className="text-gray-200 mb-2">{listing}</p>
                        <p className="flex items-center justify-center">
                            2 <FaBed className="ml-1 mr-3" /> 1 <FaBath className="ml-1" />
                        </p>
                    </div>
                </Link>

            </div>
            <style jsx>{`
  .relative {
    overflow: hidden;
  }

  .relative:hover img {
    transform: scale(1.1);
    transition: transform 0.4s ease-in-out;
    transform-origin: center center;
  }
`}</style>
        </div>
    );
};

export default Card;