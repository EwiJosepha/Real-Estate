import React from 'react';
import DbLayout from '../dblayout/page';



const AddNewProperty: React.FC = () => {
    return (
        <DbLayout header="New Properties" submit=''>
            <div className="">
                <h2 className="text-2xl font-bold mb-4">Add New Property</h2>
                <p>Add a new property here.</p>
            </div>
        </DbLayout>
    );
};

export default AddNewProperty;