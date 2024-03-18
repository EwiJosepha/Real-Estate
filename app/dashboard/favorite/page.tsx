import React from "react";
import DdHeaderProvider from "@/app/components/db-header-provider";

const Favorite: React.FC = () => {
    return (
        <DdHeaderProvider header="Favorites" submit=''>
            <h1> put your favorites here please</h1>
        </DdHeaderProvider>
    )
}
export default Favorite