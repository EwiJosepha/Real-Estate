import React from 'react';
import DdHeaderProvider from '../_components/db-header-provider';

const Dashboard: React.FC = () => {
    return (
        <DdHeaderProvider header="Dashboard" only_header>
            <div>
                <img src='' className='bg-cover object-cover w-[100%] h-1/2' />
            </div>

        </DdHeaderProvider>
    );
};

export default Dashboard;