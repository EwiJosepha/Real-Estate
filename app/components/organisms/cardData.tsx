'use client'

import React from 'react';
import Link from 'next/link';
// import Card from '../components/Card';
import Card from './card';

const properties = [
    {
        id: 1,
        image: 'card1.webp',
        purpose: 'Rent',
        price: '$1000',
        ownerName: 'John Doe',
        ownerAvatar: 'av1.jpg',
    },
    {
        id: 2,
        image: 'card2.webp',
        purpose: 'Sell',
        price: '$500000',
        ownerName: 'Jane Smith',
        ownerAvatar: 'av2.jpg',
    },
    // Add more property objects as needed
];

const CardData: React.FC = () => {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4">Latest Properties</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {properties.map((property) => (
                    (<Link href={`/property/${property.id}`} key={property.id}>

                        <Card
                            image={property.image}
                            purpose={property.purpose}
                            price={property.price}
                            ownerName={property.ownerName}
                            ownerAvatar={property.ownerAvatar}
                        />

                    </Link>)
                ))}
            </div>
        </div>
    );
};

export default CardData;