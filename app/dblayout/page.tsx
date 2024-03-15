'use client'

import React, { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type LayoutProps = {
    children: ReactNode;
};

const DbLayout: React.FC<LayoutProps> = ({ children }) => {
    const router = useRouter();

    return (
        <div className="flex h-screen bg-gray-100">
            <div className="w-1/4 bg-gray-800 text-white">
                <div className="flex items-center justify-center h-20 border-b border-gray-700">
                    <img
                        src="/assets/avatar.png"
                        alt="Avatar"
                        className="w-10 h-10 rounded-full"
                    />
                </div>
                <nav className="mt-4">
                    <ul>
                        <li>
                            <Link href="/dashboard">
                                Dashboard
                            </Link>
                        </li>

                        <li>
                            <Link href='/profile'> Profile page of user</Link>
                        </li>
                        <li>
                            <Link href='/myProperties'> My Properties</Link>
                        </li>
                        <li>
                            <Link href='/addNewProperties'> Add New Prop</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="w-3/4 bg-white p-6">{children}</div>
        </div>
    );
};

export default DbLayout;