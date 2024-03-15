import React from "react";
import DetailsHero from "../components/organisms/detailsHero";
import DetailAvatar from "../components/organisms/detailAvatar";
import Description from "../components/organisms/description";
import ContactPage from "../components/organisms/contactAgent";
import Footer from "../components/organisms/footer";

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