import React from "react";
import ContactPage from "../_components/organisms/contactAgent";
import Footer from "../_components/organisms/footer";
import DetailNav from "../_components/organisms/detailNav";
import DetailHero from "../_components/organisms/detailHero";
import DescriptionPage from "../_components/organisms/description";

const LandingPage: React.FC = () => {
    return (
        <div>
            <DetailNav />
            <DetailHero />
            <DescriptionPage />
            <ContactPage />
            <Footer />
        </div>
    );
};

export default LandingPage;