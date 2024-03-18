import React from 'react';
import DdHeaderProvider from '@/app/components/db-header-provider';

const MyProperties: React.FC = () => {
    return (
        <DdHeaderProvider header="My Properties" submit=''>
            <h2 className="text-2xl font-bold mb-4">My Properties</h2>
            <p>Here are your properties.</p>
        </DdHeaderProvider>
    );
};

export default MyProperties;