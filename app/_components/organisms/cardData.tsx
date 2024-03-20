'use client'

import React, { Component, useState } from 'react';
import Link from 'next/link';
import Card from './card';
import { properties } from '@/app/propertyData';


const CardData: React.FC<{ showLink?: boolean }> = ({ showLink = true }) => {
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

    const displayedProperties = showLink ? properties.slice(0, 3) : properties;
    // Display only the first three properties 

    return (
        <>
            <div className="container mx-auto py-8 mt-28 items-center justify-center md:mx-auto md:w-3/4 lg:w-2/3">

                {showLink && (<div className='flex items-center mb-7 font-bold font-serif'>
                    <h1 className="text-3xl mr-6">Latest Properties</h1>
                    <Link href='/property' passHref className='text-xl text-blue'> See All...</Link>
                </div>)}


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 object-cover">
                    {displayedProperties.map((property) => (
                        (<div>

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

                        </div>)
                    ))}
                </div>
            </div>
        </>
    );
};

export default CardData;