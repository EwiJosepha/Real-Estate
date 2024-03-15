import React from 'react';
import DbLayout from '../dblayout/page';

const Profile: React.FC = () => {
    return (
        <DbLayout>
            <h2 className="text-2xl font-bold mb-4">Profile</h2>
            <p>This is your profile page.</p>
        </DbLayout>
    );
};

export default Profile;