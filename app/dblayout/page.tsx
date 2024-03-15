'use client'

import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';
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
                        <li className={router.pathname === '/dashboard' ? 'bg-gray-700' : ''}>
                            <Link href="/dashboard" className="block py-2 px-4">
                                Dashboard
                            </Link>
                        </li>
                        <li className={router.pathname === '/profile' ? 'bg-gray-700' : ''}>
                            <Link href="/profile" className="block py-2 px-4">
                                Profile
                            </Link>
                        </li>
                        <li className={router.pathname === '/my-properties' ? 'bg-gray-700' : ''}>
                            <Link href="/my-properties" className="block py-2 px-4">
                                My Properties
                            </Link>
                        </li>
                        <li className={router.pathname === '/add-new-property' ? 'bg-gray-700' : ''}>
                            <Link href="/add-new-property" className="block py-2 px-4">
                                Add New Property
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="w-3/4 bg-white p-6">{children}</div>
        </div>
    );
};

export default DbLayout;