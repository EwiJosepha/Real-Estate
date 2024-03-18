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
    submit: string;
    header: string;
    children: ReactNode;
};

const DbLayout: React.FC<Props> = ({ submit, header, children }) => {
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
                            <Link href="/profile" className="flex hover:underline items-center pt-4 pb-8">
                                <FaRegUser className="mr-4 text-xl" />
                                Profile
                            </Link>
                        </li>
                        <li>
                            <p className="py-4 text-gray-500">Listings</p>
                            <Link href="/myProperties" className="flex hover:underline items-center py-4">
                                <FaHouseFlag className="mr-4 text-xl" /> My Properties
                            </Link>
                        </li>
                        <li className="">
                            <Link href="/addNewProperties" className="flex hover:underline items-center">
                                <FaPlus className="mr-4 text-xl" /> Add New Property
                            </Link>
                        </li>
                        <li className=" border-b-2">
                            <Link href="/favorite" className="flex hover:underline items-center pt-4 pb-8">
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
                <div>
                    {/* navbar content */}
                    <div className="text-white h-36 justify-between flex items-center md:mx-auto md:w-[83%]">
                        <div className="text-3xl font-mono font-bold">{header}</div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-20">
                            <div className="relative group">
                                <button className=" hover:text-gray-300">Add Listings</button>
                            </div>

                            {/* Avatar */}
                            <div className="flex items-center">
                                <img
                                    src="av2.jpg"
                                    alt="Avatar"
                                    className="w-10 h-10 rounded-full cursor-pointer"
                                />
                            </div>
                        </div>
                    </div>
                    {/* end of navbar content  */}
                    {/* body Content */}
                    <div className="bg-white w-full md:w-[83%] flex-col mt-2 flex md:mx-auto">{children}</div>
                </div>


                <div className="mt-10 flex items-center md:mx-auto md:w-[83%]">{submit}
                    <button className=" text-white w-40 bg-black px-4 py-2 rounded-md mr-16">Save</button>
                    <button className=" text-red-500 ">Cancel</button>
                </div>

            </div>
        </div>
    );
};

export default DbLayout;
