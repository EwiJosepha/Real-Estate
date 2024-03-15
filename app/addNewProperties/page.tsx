import React from 'react';
import DbLayout from '../dblayout/page';



const AddNewProperty: React.FC = () => {
    return (
        // <div className='p-6'>
        <DbLayout>
            <div className="flex justify-center items-center h-[80%]">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Add New Property</h2>
                    <p>Add a new property here.</p>
                </div>
            </div>
        </DbLayout>
        // </div>
    );
};

export default AddNewProperty;