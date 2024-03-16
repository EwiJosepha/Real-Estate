import React from 'react';
import DbLayout from '../dblayout/page';

const Dashboard: React.FC = () => {
    return (
        <DbLayout>
            <div>
                <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
                <p>Welcome to the dashboard!</p>
            </div>

        </DbLayout>
    );
};

export default Dashboard;