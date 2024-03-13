'use client'

import React from 'react';
import Link from 'next/link';
// import Card from '../components/Card';
import Card from './card';

const properties = [
    {
        id: 1,
        image: 'image-url-1.jpg',
        purpose: 'Rent',
        price: '$1000',
        ownerName: 'John Doe',
        ownerAvatar: 'avatar-url-1.jpg',
    },
    {
        id: 2,
        image: 'image-url-2.jpg',
        purpose: 'Sell',
        price: '$500000',
        ownerName: 'Jane Smith',
        ownerAvatar: 'avatar-url-2.jpg',
    },
    // Add more property objects as needed
];

const CardData: React.FC = () => {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4">Properties</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {properties.map((property) => (
                    <Link href={`/property/${property.id}`} key={property.id}>
                        <a>
                            <Card
                                image={property.image}
                                purpose={property.purpose}
                                price={property.price}
                                ownerName={property.ownerName}
                                ownerAvatar={property.ownerAvatar}
                            />
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CardData;