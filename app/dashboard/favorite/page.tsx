'use client'

import DdHeaderProvider from "@/app/_components/db-header-provider";
import Card from "@/app/_components/organisms/card";
import React from "react";
import Link from "next/link";

const properties = [
    {
        id: 1,
        image: 'card4.jpg',
        listing: 'Apartment/Rent',
        price: '$35,600',
        agent: 'Young Filz',
        avatar: 'av3.jpg',
    },
    {
        id: 2,
        image: 'card5.jpg',
        listing: 'House/Sell',
        price: '$19,000',
        agent: 'Moses Aloyr',
        avatar: 'av4.jpg',
    },
    {
        id: 2,
        image: 'card6.jpg',
        listing: 'Studio/Sell',
        price: '$980,000',
        agent: 'Daisy Smith',
        avatar: 'av5.jpg',
    },
];

const Favorite: React.FC = () => {
    return (
        <DdHeaderProvider header="Favorites" only_header>
            <div className="container mx-auto py-8 mt-28 items-center justify-center lg:w-2/3">
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
                                isFavorite={true}
                                onToggleFavorite={() => { }}
                            />

                        </Link>)
                    ))}
                </div>
            </div>
        </DdHeaderProvider>
    )
}
export default Favorite