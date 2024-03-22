import React from "react";
import Description from "../_components/organisms/description";
import ContactPage from "../_components/organisms/contactAgent";
import Footer from "../_components/organisms/footer";
import DetailNav from "../_components/organisms/detailNav";
import DetailHero from "../_components/organisms/detailHero";
import DetailHero2 from "../_components/organisms/detailHero2";

const LandingPage: React.FC = () => {
    return (
        <div>
            <DetailNav />
            <DetailHero />
            <DetailHero2 />
            <ContactPage />
            <Description />
            <Footer />
        </div>
    );
};

export default LandingPage;