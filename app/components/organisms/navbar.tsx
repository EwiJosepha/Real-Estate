import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-blue">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <span className="text-white text-lg font-bold">D&J</span>
                    </div>
                    <div className="flex items-center space-x-20">

                        <div className="relative">
                            <button className="text-white hover:text-gray-300">Properties</button>
                        </div>

                        <div className="relative group">
                            <button className="text-white hover:text-gray-300"> Other Services</button>
                            <ul className="absolute hidden group-hover:block bg-gray-800 text-white py-2 mt-2 rounded-md">
                                <li><a href="#" className="block px-4 py-2 hover:bg-gray-700">Help</a></li>
                                <li><a href="#" className="block px-4 py-2 hover:bg-gray-700">Contact</a></li>
                            </ul>
                        </div>

                        <div className="relative">
                            <button className="text-white hover:text-gray-300">Sign In / Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;