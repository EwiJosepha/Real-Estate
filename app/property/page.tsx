import React from "react";
import Navbar from "../_components/organisms/navbar";
import Footer from "../_components/organisms/footer";
import CardData from "../_components/organisms/cardData";

const PropertyPage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <div className="">
                <CardData showLink={false} />
            </div>
            <Footer />
        </div>
    );
};

export default PropertyPage;