import React from 'react';
import DbLayout from '../dblayout/page';

const MyProperties: React.FC = () => {
    return (
        <DbLayout>
            <h2 className="text-2xl font-bold mb-4">My Properties</h2>
            <p>Here are your properties.</p>
        </DbLayout>
    );
};

export default MyProperties;