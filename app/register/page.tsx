import React from 'react';
import Link from 'next/link';
import { FaTimes } from 'react-icons/fa';

const RegisterPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-blue">
            <div className="bg-white w-96 p-10 rounded shadow">
                <div className='items-center flex justify-between mb-6'>

                    <h2 className="text-2xl font-bold ">Register</h2>
                    <Link href='/' passHref ><FaTimes /></Link>
                </div>

                <form>
                    <div className="mb-4">
                        <label htmlFor="username" className="block mb-2 font-medium">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 font-medium">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue text-white py-2 px-4 rounded hover:bg-blue transition-colors duration-300"
                    >
                        Register
                    </button>
                </form>
                <p className="text-sm text-gray-600 mt-4">
                    Already have an account?{' '}
                    <Link href="/login" className="text-blue-500 hover:text-blue-600">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;