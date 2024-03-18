'use client'

import DdHeaderProvider from '@/app/_components/db-header-provider';
import React, { useState } from 'react';

const AddNewProperty: React.FC = () => {
    // State to store the uploaded images
    const [uploadedImages, setUploadedImages] = useState<string[]>([]);

    // Function to handle image upload
    const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(event.target.files || []);

        const formData = new FormData();

        // Upload each image to Cloudinary
        for (const file of files) {
            formData.append('file', file);
            formData.append('upload_preset', 'your_cloudinary_upload_preset');

            const response = await fetch('https://api.cloudinary.com/v1_1/your_cloud_name/image/upload', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            // Store the uploaded image URL
            setUploadedImages((prevImages) => [...prevImages, data.secure_url]);
        }
    };

    return (
        <DdHeaderProvider header="New Properties" submit="">

            {/* Overview Card */}

            <div className="mx-auto container py-6 px-20">
                {/* <h2 className="text-2xl font-bold mb-4"></h2> */}

                <div className="gap-4 gap-y-8 space-y-11">
                    <div className="bg-gray-100 mt-4 p-4 shadow rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">Overview</h3>
                        <div className="my-4">
                            <label htmlFor="propertyTitle" className="block">
                                Property Title*
                            </label>
                            <input
                                type="text"
                                id="propertyTitle"
                                className="border border-gray-300 px-4 py-2 rounded-md w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="propertyDescription" className="block">
                                Description*
                            </label>
                            <textarea
                                id="propertyDescription"
                                className="border border-gray-300 px-4 py-2 rounded-md w-full"
                            ></textarea>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="propertyCategory" className="block">
                                Category*
                            </label>
                            <input
                                type="text"
                                id="propertyCategory"
                                className="border border-gray-300 px-4 py-2 rounded-md w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="propertyPrice" className="block">
                                Price*
                            </label>
                            <input
                                type="text"
                                id="propertyPrice"
                                className="border border-gray-300 px-4 py-2 rounded-md w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="listedIn" className="block">
                                Listed in*
                            </label>
                            <select id="listedIn" className="border border-gray-300 px-4 py-2 rounded-md w-full">
                                <option value="">All Listings</option>
                                <option value="buy">Buy</option>
                                <option value="sell">Sell</option>
                                <option value="rent">Rent</option>
                            </select>
                        </div>
                    </div>

                    {/* Listing Details Card */}
                    <div className="bg-gray-100 p-4 shadow rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">Listing Details</h3>
                        <div className="mb-4">
                            <label htmlFor="bedrooms" className="block">
                                Number of Bedrooms
                            </label>
                            <input
                                type="text"
                                id="bedrooms"
                                className="border border-gray-300 px-4 py-2 rounded-md w-full"
                            />
                        </div>
                        {/* ... other fields for the listing details section */}
                    </div>

                    {/* Photo and Video Upload Card */}
                    <div className="bg-gray-100 p-4 shadow rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">Photo and Video Upload</h3>
                        <div className="mb-4">
                            <label htmlFor="mainImage" className="block">
                                Main Image
                            </label>
                            <input
                                type="file"
                                id="mainImage"
                                className="w-full"
                                onChange={handleImageUpload}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="additionalImages" className="block">
                                Additional Images
                            </label>
                            <input
                                type="file"
                                id="additionalImages"
                                className="w-full"
                                onChange={handleImageUpload}
                                multiple
                            />
                        </div>
                        {/* ... other fields for the photo and video upload section */}
                    </div>
                </div>

                {/* Display uploaded images */}
                {uploadedImages.length > 0 && (
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold mb-2">Uploaded Images</h3>
                        <div className="grid grid-cols-3 gap-4">
                            {uploadedImages.map((image) => (
                                <div key={image}>
                                    <img src={image} alt="Uploaded" className="w-full h-40 object-cover rounded-lg" />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </DdHeaderProvider>
    );
};

export default AddNewProperty;