import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";


const DropDownCard: React.FC = () => {
    return (
        <div>
            <ul className="w-28 shadow-lg p-4 rounded-lg space-y-4 bg-white text-gray-700">
                <li className="flex item-center gap-2 cursor-pointer"
                >
                    <FaEdit /> Edit
                </li>
                <li className="flex item-center gap-2 cursor-pointer" >
                    <FaTrashAlt /> Delete
                </li>
                <li className="flex item-center gap-2 cursor-pointer">
                    <FaShare /> Share
                </li>
            </ul>
        </div>
    );
};

export default DropDownCard;