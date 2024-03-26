'use client'

import DdHeaderProvider from '@/app/_components/db-header-provider';
import PropertyImageCard from '@/app/_components/organisms/propertyImageCard';
import PropertyListingDetailCard from '@/app/_components/organisms/propertyListingDetailCard';
import DbPropertyOverviewCard from '@/app/_components/organisms/propertyOverviewCard';
import React, { useState } from 'react';

const AddNewProperty: React.FC = () => {


    return (
        <DdHeaderProvider header="New Properties" submit="">
            <div className="mx-auto container py-6 px-4 md:px-20">

                <div className="space-y-16">
                    {/* Overview Card */}
                    <DbPropertyOverviewCard />

                    {/* Listing Details Card */}
                    <PropertyListingDetailCard />

                    {/* Photo and Video Upload Card */}
                    <PropertyImageCard />
                </div>
            </div>
        </DdHeaderProvider>
    );
};

export default AddNewProperty;