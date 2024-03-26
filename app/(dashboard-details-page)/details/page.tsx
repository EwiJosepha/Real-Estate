'use client'

import ContactPage from "@/components/organisms/contactAgent";
import Footer from "@/components/organisms/footer";
import DetailNav from "@/components/organisms/detailNav";
import DetailHero from "@/components/organisms/detailHero";
import DescriptionPage from "@/components/organisms/description";

const DetailPage: React.FC = () => {

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

export default DetailPage;