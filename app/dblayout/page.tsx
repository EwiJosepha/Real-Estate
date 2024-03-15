"use client";

import React, { ReactNode } from "react";
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

type LayoutProps = {
    children: ReactNode;
};

const DbLayout: React.FC<LayoutProps> = ({ children }) => {
    const router = useRouter();

    return (
        <div>
            <div className="flex flex-col md:flex-row h-screen bg-blue">
                {/* Sidebar */}
                {/* <div className="flex justify-between"> */}
                <div className="w-1/5 bg-white ">
                    {/* Logo */}
                    <div className="py-2 bg-blue h-36">
                        <FooterLogo />
                    </div>

                    <nav className="mt-4 flex-grow">
                        <ul className="space-y-2">
                            <li className="">
                                <Link href="/dashboard" className="flex items-center">
                                    <FaPerbyte className="mr-2" />
                                    Dashboard
                                </Link>
                            </li>

                            <li className="">
                                <Link href="/profile" className="flex items-center">
                                    <FaRegUser className="mr-2" />
                                    Profile page of user
                                </Link>
                            </li>
                            <li className="">
                                <Link href="/myProperties" className="flex items-center">
                                    <FaHouseFlag className="mr-2" /> My Properties
                                </Link>
                            </li>
                            <li className="">
                                <Link href="/addNewProperties" className="flex items-center">
                                    <FaPlus className="mr-2" /> Add New Prop
                                </Link>
                            </li>
                            <li className="">
                                <Link href="/favorite" className="flex items-center">
                                    <FaRegHeart className="mr-2" /> Favorite(s)
                                </Link>
                            </li>
                        </ul>
                        <div className="mt-auto">
                            <button className="flex items-center">
                                <FaArrowAltCircleLeft className="mr-2" /> LogOut
                            </button>
                        </div>
                    </nav>
                </div>

                {/* body Content */}
                <div className="bg-pink-700 w-full md:w-1/2">{children}</div>
                {/* </div> */}

                {/* navbar content */}
                <div className="text-white p-6 flex items-center justify-between h-36 py-5">
                    <div className="">{/* empty */}</div>

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
            </div>
        </div>
    );
};

export default DbLayout;
