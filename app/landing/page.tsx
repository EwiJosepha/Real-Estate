import React from "react";
import Navbar from "../components/organisms/navbar";
import HeroSection from "../components/organisms/hero";
import InfoSection from "../components/organisms/infoSection";
import Luxury from "../components/organisms/luxury";
import CardData from "../components/organisms/cardData";
import Footer from "../components/organisms/footer";

const LandingPage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <InfoSection />
            {/* <Luxury /> */}
            <CardData />
            <Footer />
        </div>
    );
};

export default LandingPage;