'use client'

import React from 'react';
import DdHeaderProvider from '../_components/db-header-provider';
import BarCharts from '../_components/organisms/barCharts';
import { BsPersonCircle } from 'react-icons/bs';
import { CiBookmarkMinus } from 'react-icons/ci';
import { FaEye, FaHeart } from 'react-icons/fa';

const Dashboard: React.FC = () => {
    return (
        <DdHeaderProvider header="Dashboard" only_header>
            <div className='bg-blue'>
                <div className='bg-white py-4 px-6 rounded-lg mb-10'>
                    <ul className='flex justify-between items-center'>
                        <li className=''>All Properties <br /><span>1.9K+</span></li>
                        <li><BsPersonCircle /></li>
                        <li>Total Pending<span>03</span></li>
                        <li><CiBookmarkMinus /></li>
                        <li>Total Views<span>4.8K</span></li>
                        <li><FaEye /></li>
                        <li>Total Favorites <span>06</span></li>
                        <li><FaHeart /></li>
                    </ul>
                </div>
                <div className='bg-white p-2 rounded-lg font-bold text-xl'>
                    <h1>Property Overview</h1>
                    <BarCharts />
                </div>
            </div>

        </DdHeaderProvider>
    );
};

export default Dashboard;