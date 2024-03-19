"use client";

import React from "react";
import type { ReactNode } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
    FaArrowAltCircleLeft,
    FaPerbyte,
    FaPlus,
    FaRegHeart,
    FaRegUser,
} from "react-icons/fa";
import { FaHouseFlag } from "react-icons/fa6";
import FooterLogo from "../_components/organisms/footerLogo";

type Props = {
    children: ReactNode;
};

const DbLayout: React.FC<Props> = ({ children }) => {
    const router = useRouter();

    return (
        <div className="flex-none md:flex">

            {/* Sidebar */}
            <div className="md:block w-full md:w-1/5 md:h-screen fixed md:relative">
                {/* Logo */}
                <button className="bg-blue md:ml-[12%] my-14">
                    <FooterLogo />
                </button>

                <nav className="mt-4 text-lg flex md:flex-col font-sans pl-10">
                    <ul className="space-y-6 flex md:flex-col md:flex-none">
                        <li className="md:block md:border-y-2">
                            <Link href="/dashboard" className="flex items-center py-10 hover:underline">
                                <FaPerbyte className="block mr-4 text-xl" />
                                <span className="hidden md:inline">Dashboard</span>
                            </Link>
                        </li>

                        <li className="md:block md:border-b-2">
                            <p className="py-4 text-gray-500 hidden md:block">Profile</p>
                            <Link href="/dashboard/profile" className="flex hover:underline items-center pt-4 pb-8">
                                <FaRegUser className="block mr-4 text-xl" />
                                <span className="hidden md:inline">Profile</span>
                            </Link>
                        </li>
                        <li className="md:block">
                            <p className="py-4 text-gray-500 hidden md:block">Listings</p>
                            <Link href="/dashboard/myProperties" className="flex hover:underline items-center py-4">
                                <FaHouseFlag className="block mr-4 text-xl" />
                                <span className="hidden md:inline">My Properties</span>
                            </Link>
                        </li>
                        <li className="md:block">
                            <Link href="/dashboard/addNewProperties" className="flex hover:underline items-center">
                                <FaPlus className="block mr-4 text-xl" />
                                <span className="hidden md:inline">Add New Property</span>
                            </Link>
                        </li>
                        <li className="md:block md:border-b-2">
                            <Link href="/dashboard/favorite" className="flex hover:underline items-center pt-4 pb-8">
                                <FaRegHeart className="block mr-4 text-xl" />
                                <span className="hidden md:inline">Favorite(s)</span>
                            </Link>
                        </li>
                    </ul>
                    <div className="mt-auto">
                        <button className="flex items-center py-6 hover:text-orange-500">
                            <FaArrowAltCircleLeft className="block mr-3 text-4xl" />
                            <span className="hidden md:inline">LogOut</span>
                        </button>
                    </div>
                </nav>
            </div>
            {/* end Sidebar */}

            {/* body content  */}
            <div className="md:w-[83.33%] w-full bg-blue overflow-hidden h-full">
                <>
                    {children}
                </>
            </div>
        </div>
    );
};

export default DbLayout;
