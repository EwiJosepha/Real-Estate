'use client'

import DdHeaderProvider from '@/app/_components/db-header-provider';
import { useState } from 'react';

const Profile: React.FC = () => {
    const [imageUrl, setImageUrl] = useState('');
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [bio, setBio] = useState('');

    const handleImageDelete = () => {
        setImageUrl('');
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImageUrl(reader.result as string);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <DdHeaderProvider header="Profile" submit=''>
            <div className="mx-auto container py-6 px-20 overflow-scroll">
                {/* Profile Image */}
                {imageUrl && (
                    <div className="mb-4 flex items-center">
                        <img src={imageUrl} alt="Profile" className=" h-16 w-16 rounded-full" />

                        <button className="text-red-500 ml-2" onClick={handleImageDelete}>
                            Delete
                        </button>
                    </div>
                )}

                <div className="mb-4">
                    <input type="file" id="image" accept="image/*" onChange={handleImageChange} />
                </div>


                {/* Username */}
                <div className="mb-4">
                    <label htmlFor="username" className="block font-medium">
                        Username*
                    </label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="border border-gray-300 px-4 py-2 rounded-md w-full"
                    />
                </div>

                <div className='flex justify-between'>
                    {/* First Name */}
                    <div className="mb-4 w-[45%]">
                        <label htmlFor="firstName" className="block font-medium">
                            First Name*
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="border border-gray-300 px-4 py-2 rounded-md w-full"
                        />
                    </div>

                    {/* Last Name */}
                    <div className="mb-4 w-[45%]">
                        <label htmlFor="lastName" className="block font-medium">
                            Last Name*
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="border border-gray-300 px-4 py-2 rounded-md w-full"
                        />
                    </div>
                </div>

                <div className='flex justify-between'>
                    {/* Email */}
                    <div className="mb-4 w-[45%]">
                        <label htmlFor="email" className="block font-medium">
                            Email*
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border border-gray-300 px-4 py-2 rounded-md w-full"
                        />
                    </div>

                    {/* Phone Number */}
                    <div className="mb-4 w-[45%]">
                        <label htmlFor="phoneNumber" className="block font-medium">
                            Phone Number*
                        </label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="border border-gray-300 px-4 py-2 rounded-md w-full"
                        />
                    </div>
                </div>

                {/* Bio */}
                <div className="mb-4">
                    <label htmlFor="bio" className="block font-medium">
                        Bio*
                    </label>
                    <textarea
                        id="bio"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        className="border border-gray-300 px-4 py-2 rounded-md w-full"
                    ></textarea>
                </div>

                {/* Submit Button */}
                {/* have use props to pass the data between components  */}
            </div>
        </DdHeaderProvider>
    );
};

export default Profile;