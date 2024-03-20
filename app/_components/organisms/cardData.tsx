'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Card from './card';


const properties = [
    {
        id: 1,
        image: 'card1.webp',
        listing: 'Apartment/Rent',
        price: '$2000',
        agent: 'John Doe',
        avatar: 'av1.jpg',
    },
    {
        id: 2,
        image: 'card2.webp',
        listing: 'House/Sell',
        price: '$500000',
        agent: 'Jane Smith',
        avatar: 'av2.jpg',
    },
    {
        id: 2,
        image: 'card3.webp',
        listing: 'Studio/Sell',
        price: '$50000',
        agent: 'Jane Smith',
        avatar: 'img1.webp',
    },
];

const CardData: React.FC = () => {
    const [favorites, setFavorites] = useState<number[]>([]);

    const toggleFavorite = (id: number) => {
        setFavorites((prevFavorites) => {
            if (prevFavorites.includes(id)) {
                return prevFavorites.filter((favId) => favId !== id)
            } else {
                return [...prevFavorites, id]
            }
        })
    }
    return (
        <div className="container mx-auto py-8 mt-28 items-center justify-center md:mx-auto md:w-3/4 lg:w-2/3">
            <div className='flex items-center mb-7 font-bold font-serif'>
                <h1 className="text-3xl mr-6">Latest Properties</h1>
                <Link href={'/properties'} className='text-xl text-blue'> See All...</Link>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 object-cover">
                {properties.map((property) => (
                    (<Link href={`/property/${property.id}`} key={property.id} legacyBehavior>

                        <Card
                            id={property.id}
                            image={property.image}
                            listing={property.listing}
                            price={property.price}
                            agent={property.agent}
                            avatar={property.avatar}
                            isFavorite={favorites.includes(property.id)}
                            onToggleFavorite={toggleFavorite}
                        />

                    </Link>)
                ))}
            </div>
        </div>
    );
};

export default CardData;