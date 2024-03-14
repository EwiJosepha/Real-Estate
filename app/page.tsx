import Image from "next/image";
import InfoSection from "./components/organisms/infoSection";
import Luxury from "./components/organisms/luxury";
import Footer from "./components/organisms/footer";
import { Roboto } from "next/font/google";
import DetailsHero from "./components/organisms/detailsHero";
import DetailAvatar from "./components/organisms/detailAvatar";
import Description from "./components/organisms/description";
import ContactPage from "./components/organisms/contactAgent";
import Navbar from "./components/organisms/navbar";
import HeroSection from "./components/organisms/hero";
import CardData from "./components/organisms/cardData";

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400'
})

export default function Home() {
  return (
    <main className={roboto.className}>
      <div>
        <Navbar />
        <HeroSection />
        <CardData />
        <InfoSection />
        <Luxury />
        <Footer />
        <DetailsHero />
        <DetailAvatar />
        <Description />
        <ContactPage />
      </div>
    </main>
  );
}
