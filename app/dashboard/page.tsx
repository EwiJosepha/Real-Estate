import React from 'react';
import DdHeaderProvider from '../_components/db-header-provider';

const Dashboard: React.FC = () => {
    return (
        <DdHeaderProvider header="Dashboard" submit='' only_header>
            <div>
                <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
                <p>Welcome to the dashboard!</p>
            </div>

        </DdHeaderProvider>
    );
};

export default Dashboard;