import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import FooterLogo from "./footerLogo";

interface MobileMenuProps {
    onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onClose }) => {
    return (
        <div className="flex flex-col items-start space-y-14">
            <div className='py-2'>
                <FooterLogo />
            </div>
            <div className="space-y-10">
                <ul className="space-y-4">
                    <li className="cursor-pointer">Properties</li>
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">Contact Us</li>
                </ul>
                <div className="relative flex pb-6">
                    <FaRegUserCircle className="mr-2 text-2xl" />
                    <button className="">Log In</button>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;