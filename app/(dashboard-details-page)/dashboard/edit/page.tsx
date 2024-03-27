'use client'
import DdHeaderProvider from '@/app/_components/db-header-provider'
import React from 'react'
import Link from 'next/link'
import { useAppContext } from '@/app/_core/store/app-context'

const  EditProfile: React.FC =()=> {
  const {profileInfo, setProfileInfo} = useAppContext()
  return (
    <div>
     <DdHeaderProvider header="Edit Page" submit=''>
     <div className="mx-auto container py-10 px-20 mb-16">
                    {/* Profile Image
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
                    </div> */}



                    {/* Username */}
                    < div className="mb-4">
                        <label htmlFor="username" className="block font-medium">
                            Username*
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={profileInfo.username}
                            readOnly
                            // onChange={(e) => handleUsername(e)}
                            className="border border-gray-300 px-4 py-2 rounded-md w-full"
                            required />
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
                                value={profileInfo.firstName}
                                readOnly
                                // onChange={(e) => handleFirstName(e)}
                                className="border border-gray-300 px-4 py-2 rounded-md w-full"
                                required />
                        </div>

                        {/* Last Name */}
                        <div className="mb-4 w-[45%]">
                            <label htmlFor="lastName" className="block font-medium">
                                Last Name*
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                value={profileInfo.lastName}
                                readOnly
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
                                value={profileInfo.email}
                                readOnly
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
                                value={profileInfo.phoneNumber}
                                readOnly
                                className="border border-gray-300 px-4 py-2 rounded-md w-full"
                                required />
                        </div>
                    </div>

                    {/* Bio */}
                    <div className="mb-4">
                        <label htmlFor="bio" className="block font-medium">
                            Bio*
                        </label>
                        <textarea
                            id="bio"
                            value={profileInfo.bio}
                            readOnly
                            className="border border-gray-300 px-4 py-2 rounded-md w-full"
                            required></textarea>
                    </div>
                    <Link href={"/dashboard"}>
                        <button className=' bg-slate-950 text-red-500' >submit</button>
                    </Link>

                    {/* Submit Button */}
                    {/* have use props to pass the data between components  */}
                </div>
     </DdHeaderProvider>
    </div>
  )
}

export default EditProfile