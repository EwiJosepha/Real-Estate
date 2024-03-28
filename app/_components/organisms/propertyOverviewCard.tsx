import React from 'react'

import { useAppContext } from '@/store/app-context';

interface PropertyInfo {
    //
}

const DbPropertyOverviewCard: React.FC<PropertyInfo> = ({}) => {
    const { propertyInfo, setPropertyInfo } = useAppContext();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setPropertyInfo((prevPropertyInfo) => ({
            ...prevPropertyInfo,
            name: value,
            description: value,
            price: parseFloat(value),
        }));

     
    };

    function save () {
        const prop = localStorage.setItem("properties", JSON.stringify(propertyInfo))
        console.log(prop);
        
    }


    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setPropertyInfo((prevPropertyInfo) => ({
            ...prevPropertyInfo,
            rentOrSale: value,
            type: value,

        }));
    };

    return (
        <div className="mt-4 p-4 shadow shadow-blue rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Overview</h3>
            <div className="mb-4">
                <label htmlFor="propertyTitle" className="block">
                    Property Name*
                </label>
                <input
                    type="text"
                    id="propertyTitle"
                    className="border border-gray-200 px-4 py-3 rounded-md w-full"
                    onChange={handleInputChange}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="propertyDescription" className="block">
                    Description*
                </label>
                <textarea
                    id="propertyDescription"
                    className="border border-gray-200 px-4 py-3 rounded-md w-full"
                ></textarea>
            </div>


            <div className='flex justify-between'>
                <div className="mb-4 w-[45%]">
                    <label htmlFor="propertyCategory" className="block">
                        Property Type*
                    </label>
                    <select className="border border-gray-200 px-4 py-3 rounded-md w-full"
                        onChange={handleSelectChange}>
                        <option value='apartment'>Apartment</option>
                        <option value='studios'>Studios</option>
                        <option value='house'>House</option>
                        <option value='villas'>Villas</option>
                        <option value='self-contain'>Self Contain</option>
                    </select>
                </div>
                <div className="mb-4 w-[45%]">
                    <label htmlFor="listedIn" className="block">
                        Listed in*
                    </label>
                    <select className="border border-gray-200 px-4 py-3 rounded-md w-full"
                        onChange={handleSelectChange}>
                        <option value="">All Listings</option>
                        <option value="buy">Buy</option>
                        <option value="sell">Sell</option>
                        <option value="rent">Rent</option>
                    </select>
                </div>
            </div>

            <div className="mb-4">
                <label htmlFor="propertyPrice" className="block">
                    Price*
                </label>
                <input
                    type="text"
                    id="propertyPrice"
                    className="border border-gray-200 px-4 py-3 rounded-md w-full"
                    onChange={handleInputChange}
                />
            </div>
            <button onClick={save}>save</button>
        </div>
    );
};
export default DbPropertyOverviewCard