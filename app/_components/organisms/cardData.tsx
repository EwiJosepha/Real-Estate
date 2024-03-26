'use client'

import React, { Component, useState } from 'react';
import Link from 'next/link';
import Card from './card';
import { properties } from '@/app/propertyData';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import { getAllProperties } from '@/app/utils/util';

type Property = {
    id: number;
    name: string;
    type: string;
    description: string;
    rooms: string;
    bath: number;
    livingRooms: string;
    location: string;
    price: number;
    areaInKm: string;
    rentOrSale: string;
    shortDescription: string;
    images: string[];
    agentId: number;
}

const CardData: React.FC<{ showLink?: boolean }> = ({ showLink = true }) => {
    const [favorites, setFavorites] = useState<number[]>([]);

    const { data, isLoading, isError } = useQuery({
        queryKey: ["properties"],
        queryFn: async () => {
            const { data } = await axios.get(getAllProperties)
            return data as Property[]
        }
    })

    if (isLoading) return <div>Loading ...</div>
    if (isError) return <div>please try again</div>

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

    return (
        <>
            <div className="container mx-auto py-8 mt-28 items-center justify-center md:mx-auto md:w-3/4 lg:w-2/3">

                {showLink && (<div className='flex justify-between items-center mb-8'>
                    <div className='flex items-center font-bold font-serif'>
                        <h1 className="text-3xl mr-6">Latest Properties</h1>
                        <Link href='/property' passHref className='text-xl text-blue'> See All...</Link>
                    </div>
                    <input
                        type='search'
                        placeholder='search by baths'
                        className='border border-gray-400 px-6 py-2' />
                </div>)}


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 object-cover">
                    {data?.map((prop, i) => (
                        <div key={i}>
                            <Card
                                key={i}
                                id={prop.id}
                                name={prop.name}
                                type={prop.type}
                                rooms={prop.rooms}
                                description={prop.description}
                                bath={prop.bath}
                                livingRooms={prop.livingRooms}
                                location={prop.location}
                                price={prop.price}
                                areaInKm={prop.areaInKm}
                                rentOrSale={prop.rentOrSale}
                                shortDescription={prop.shortDescription}
                                images={prop.images}
                                agentId={prop.agentId}
                            // onToggleFavorite={toggleFavorite}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CardData;