import React from 'react';
import DbLayout from '../dblayout/page';

const Dashboard: React.FC = () => {
    return (
        <DbLayout>
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
            <p>Welcome to the dashboard!</p>
        </DbLayout>
    );
};

export default Dashboard;