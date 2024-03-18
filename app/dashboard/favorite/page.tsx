import DdHeaderProvider from "@/app/_components/db-header-provider";
import React from "react";

const Favorite: React.FC = () => {
    return (
        <DdHeaderProvider header="Favorites" only_header>
            <h1> put your favorites here please</h1>
        </DdHeaderProvider>
    )
}
export default Favorite