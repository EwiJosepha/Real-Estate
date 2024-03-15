import React from 'react';
import DbLayout from '../dblayout/page';



const AddNewProperty: React.FC = () => {
    return (
        <DbLayout>
            <div>
                <h2 className="text-2xl font-bold mb-4">Add New Property</h2>
                <p>Add a new property here.</p>
            </div>

        </DbLayout>
    );
};

export default AddNewProperty;