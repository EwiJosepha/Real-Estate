import React from "react";
import DetailsHero from "../_components/organisms/detailsHero";
import DetailAvatar from "../_components/organisms/detailAvatar";
import Description from "../_components/organisms/description";
import ContactPage from "../_components/organisms/contactAgent";
import Footer from "../_components/organisms/footer";

const LandingPage: React.FC = () => {
    return (
        <div>
            <DetailsHero />
            <DetailAvatar />
            <Description />
            <ContactPage />
            <Footer />
        </div>
    );
};

export default LandingPage;