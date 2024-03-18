import DdHeaderProvider from '@/app/_components/db-header-provider';
import React from 'react';

const MyProperties: React.FC = () => {
    return (
        <DdHeaderProvider header="My Properties" submit=''>
            <h2 className="text-2xl font-bold mb-4">My Properties</h2>
            <p>Here are your properties.</p>
        </DdHeaderProvider>
    );
};

export default MyProperties;