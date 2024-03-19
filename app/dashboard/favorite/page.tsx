'use client'

import React from "react";
import { Link } from "react-router-dom";
import DdHeaderProvider from "@/app/_components/db-header-provider";
import Card from "@/app/_components/organisms/card";

interface Property {
    id: number;
    image: string;
    listing: string;
    price: string;
    agent: string;
    avatar: string;
}

interface FavoriteProps {
    properties: Property[] | undefined;
}

const Favorite: React.FC<FavoriteProps> = ({ properties }) => {
    return (
        <DdHeaderProvider header="Favorites" only_header>
            <div className="container mx-auto py-8 mt-28 items-center justify-center md:mx-auto md:w-3/4 lg:w-2/3">
                <h1 className="text-3xl font-bold mb-6">Your Favorite Properties</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 object-cover">
                    {properties?.map((property) => (
                        <Link to={`/property/${property.id}`} key={property.id}>
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
                        </Link>
                    ))}
                </div>
            </div>
        </DdHeaderProvider>
    );
};

export default Favorite;