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
import FooterLogo from "../components/organisms/footerLogo";

type Props = {
    children: ReactNode;
};

const DbLayout: React.FC<Props> = ({ children }) => {
    const router = useRouter();

    return (
        <div className="flex">

            {/* Sidebar */}
            <div className="w-full md:w-1/5 h-screen">
                {/* Logo */}
                <div className=" bg-blue flex items-center pl-10 h-36">
                    <FooterLogo />
                </div>

                <nav className="mt-4 text-lg font-sans bg-white pl-10 flex-grow">
                    <ul className="space-y-6">
                        <li className=" border-b-2">
                            <Link href="/dashboard" className="flex items-center py-6 hover:underline">
                                <FaPerbyte className="mr-4 text-xl" />
                                Dashboard
                            </Link>
                        </li>

                        <li className=" border-b-2">
                            <p className="py-4 text-gray-500">Profile</p>
                            <Link href="/dashboard/profile" className="flex hover:underline items-center pt-4 pb-8">
                                <FaRegUser className="mr-4 text-xl" />
                                Profile
                            </Link>
                        </li>
                        <li>
                            <p className="py-4 text-gray-500">Listings</p>
                            <Link href="/dashboard/myProperties" className="flex hover:underline items-center py-4">
                                <FaHouseFlag className="mr-4 text-xl" /> My Properties
                            </Link>
                        </li>
                        <li className="">
                            <Link href="/dashboard/addNewProperties" className="flex hover:underline items-center">
                                <FaPlus className="mr-4 text-xl" /> Add New Property
                            </Link>
                        </li>
                        <li className=" border-b-2">
                            <Link href="/dashboard/favorite" className="flex hover:underline items-center pt-4 pb-8">
                                <FaRegHeart className="mr-4 text-xl" /> Favorite(s)
                            </Link>
                        </li>
                    </ul>
                    <div className="mt-auto">
                        <button className="flex items-center py-6 hover:text-orange-500">
                            <FaArrowAltCircleLeft className="mr-3 text-4xl" /> LogOut
                        </button>
                    </div>
                </nav>
            </div>
            {/* end Sidebar */}

            <div className="w-[83.33%] bg-blue h-screen">
                {/* navbar content */}

                <>
                    {children}
                </>
            </div>
        </div>
    );
};

export default DbLayout;
