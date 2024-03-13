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
        <div className="border p-4">
            <img src={image} alt="Property" className="w-full h-48 object-cover mb-4" />
            <p className="text-sm text-gray-500 mb-2">{purpose}</p>
            <p className="text-lg font-bold mb-4">{price}</p>
            <div className="flex items-center">
                <img src={ownerAvatar} alt="Owner Avatar" className="w-8 h-8 rounded-full mr-2" />
                <p className="text-sm">{ownerName}</p>
            </div>
        </div>
    );
};

export default Card;