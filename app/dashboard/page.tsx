import React from 'react';
import Layout from '../dblayout/page';

const Dashboard: React.FC = () => {
    return (
        <Layout>
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
            <p>Welcome to the dashboard!</p>
        </Layout>
    );
};

export default Dashboard;