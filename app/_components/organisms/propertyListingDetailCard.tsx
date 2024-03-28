import React, { useState } from "react";
type Prop = {
    rooms: string;
    bath: number;
    livingRooms: string;
    location: string;
    areaInKm: string;
    shortDescription: string;
    images: string[];
    agentId: number;
}
const PropertyListingDetailCard: React.FC = () => {
    const [propertyInfo, setPropertyInfo] = useState<Prop>({
        rooms: "",
        bath: 0,
        livingRooms: "",
        location: "",
        areaInKm: "",
        shortDescription: "",
        images: [],
        agentId: 0
    })

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setPropertyInfo((prevPropertyInfo) => ({
            ...prevPropertyInfo,
            bath: parseFloat(value),
            livingRooms: value,
            rooms: value,

        }));
    };


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setPropertyInfo((prevPropertyInfo) => ({
            ...prevPropertyInfo,
            areaInKm: value,
            location: value
        }));
    };

    return (
        <div className="p-4 shadow shadow-blue rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Listing Details</h3>

            <div className='flex justify-between items-center'>
                <div className="my-4 w-[45%]">
                    <label htmlFor="propertySize" className="block">
                        Surface Area in ft*
                    </label>
                    <input
                        type="text"
                        id="propertySize"
                        className="border border-gray-200 px-4 py-3 rounded-md w-full"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-4 w-[45%]">
                    <label htmlFor="bedrooms" className="block">
                        Bedrooms*
                    </label>
                    <select className="border border-gray-200 px-4 py-3 rounded-md w-full" onChange={handleSelectChange}>
                        <option value="">0</option>
                        <option value="number">1</option>
                        <option value="number">2</option>
                        <option value="number">3</option>
                        <option value="number">4</option>
                        <option value="number">5</option>
                    </select>
                </div>
            </div>
            <div className='flex justify-between'>
                <div className="mb-4 w-[45%]">
                    <label htmlFor="bathrooms" className="block">
                        Bathrooms*
                    </label>
                    <select className="border border-gray-200 px-4 py-3 rounded-md w-full" onChange={handleSelectChange}>
                        <option value="">0</option>
                        <option value="number">1</option>
                        <option value="number">2</option>
                        <option value="number">3</option>
                        <option value="number">4</option>
                        <option value="number">5</option>
                    </select>
                </div>
                <div className="mb-4 w-[45%]">
                    <label htmlFor="bathrooms" className="block">
                        Livingrooms*
                    </label>
                    <select className="border border-gray-200 px-4 py-3 rounded-md w-full" onChange={handleSelectChange}>
                        <option value="">0</option>
                        <option value="number">1</option>
                        <option value="number">2</option>
                        <option value="number">3</option>
                        <option value="number">4</option>
                        <option value="number">5</option>
                    </select>
                </div>
            </div>
            <div className="mb-4">
                <label htmlFor="kitchenDescription" className="block">
                    Kitchen*
                </label>
                <textarea
                    id="kitchenDescription"
                    // onChange={handleTexarea}
                    className="border border-gray-200 px-4 py-3 rounded-md w-full"
                ></textarea>
            </div>
            <div className="mb-4">
                <label htmlFor="propertyLocation" className="block">
                    Location*
                </label>
                <input
                    type="text"
                    id="propertyLocation"
                    className="border border-gray-200 px-4 py-3 rounded-md w-full"
                    onChange={handleInputChange}
                />
            </div>

        </div>
    );
};
export default PropertyListingDetailCard