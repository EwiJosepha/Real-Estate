'use client'

import React from 'react';
import Link from 'next/link';
import Card from './card';

const properties = [
    {
        id: 1,
        image: 'card1.webp',
        purpose: 'Apartment/Rent',
        price: '$2000',
        agent: 'John Doe',
        avater: 'av1.jpg',
    },
    {
        id: 2,
        image: 'card2.webp',
        purpose: 'House/Sell',
        price: '$500000',
        agent: 'Jane Smith',
        avater: 'av2.jpg',
    },
    {
        id: 2,
        image: 'card3.webp',
        purpose: 'Studio/Sell',
        price: '$50000',
        agent: 'Jane Smith',
        avater: 'img1.webp',
    },
];

const CardData: React.FC = () => {
    return (
        <div className="container mx-auto py-8 mt-28 items-center justify-center md:mx-auto md:w-3/4 lg:w-2/3">
            <h1 className="text-3xl font-bold mb-6">Latest Properties</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {properties.map((property) => (
                    (<Link href={`/property/${property.id}`} key={property.id} legacyBehavior>

                        <Card
                            image={property.image}
                            purpose={property.purpose}
                            price={property.price}
                            agent={property.agent}
                            avater={property.avater}
                        />

                    </Link>)
                ))}
            </div>
        </div>
    );
};

export default CardData;