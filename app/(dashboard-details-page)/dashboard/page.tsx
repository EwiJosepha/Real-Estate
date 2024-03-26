'use client'

import DdHeaderProvider from '@/app/_components/db-header-provider';
import React from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { CiBookmarkMinus } from 'react-icons/ci';
import { FaEye, FaHeart } from 'react-icons/fa';

const Dashboard: React.FC = () => {
    return (
        <DdHeaderProvider header="Dashboard" only_header>
            <>
                <div className='bg-blue pb-20'>
                    <div className=' hidden md:block bg-white py-7 px-8 rounded-lg mb-10'>
                        <ul className='flex justify-between items-center'>
                            <li className='text-gray-400'>All Properties <br /><span className='font-serif text-3xl font-bold text-black'>1.9K+</span></li>
                            <li className='text-5xl font-bold'><BsPersonCircle /></li>
                            <li className='text-gray-400'>Total Pending <br /><span className='font-serif text-3xl font-bold text-black'>03</span></li>
                            <li className='text-2xl bg-black p-4 rounded-full text-white font-bold'><CiBookmarkMinus /></li>
                            <li className='text-gray-400'>Total Views <br /><span className='font-serif text-3xl font-bold text-black'>4.8K</span></li>
                            <li className='text-2xl bg-black p-4 rounded-full text-white font-bold'><FaEye /></li>
                            <li className='text-gray-400'>Total Favorites<br /> <span className='font-serif text-3xl font-bold text-black'>06</span></li>
                            <li className='text-2xl bg-black p-4 rounded-full text-white font-bold'><FaHeart /></li>
                        </ul>
                    </div>
                    <div className='md:flex'>

                        <div className='bg-white p-2 rounded-lg font-bold text-xl w-full md:w-[58%] mr-10 mb-10 md:mb-0'>
                            <h1 className='py-4 pl-4'>Property Overview</h1>
                            {/* <BarCharts /> */}
                        </div>

                        <div className='container bg-white rounded-lg md:w-[38%] py-2 px-4'>
                            <h1 className='text-2xl font-bold font-serif py-4'>Recent Message</h1>

                            <div className='border-b-2 border-gray-200 pl-6 space-y-2'>
                                <p className='text-gray-500 text-sm'>Samuel Roi. <span className='ml-60'> FEB 22</span></p>
                                <h2 className='font-mono'>Work Inquiry from Rebase</h2>
                                <p className='text-gray-500 text-sm pb-4'>Hello am Samuel from Rebase offering web development course.</p>
                            </div>

                            <div className='border-b-2 border-gray-200 pl-6 space-y-2'>
                                <p className='text-gray-500 text-sm pt-4'>Gael Kelz.. <span className='ml-60'> MAY 23</span></p>
                                <h2 className='font-mono'>Product Designer Opportunities</h2>
                                <p className='text-gray-500 text-sm pb-4'>Gael from Opportunity Corners great Job.</p>
                            </div>

                            <div className='pl-6 space-y-2'>
                                <p className='text-gray-500 text-sm pt-4'>Demian Josh. <span className='ml-60'> JAN 24</span></p>
                                <h2 className='font-mono'>Hunting Marketing Specialist</h2>
                                <p className='text-gray-500 text-sm pb-4'>Hello, This is Demian from HuntX. We offer the best business solution to our client...</p>
                            </div>

                        </div>
                    </div>

                </div>
            </>
        </DdHeaderProvider>
    );
};

export default Dashboard;