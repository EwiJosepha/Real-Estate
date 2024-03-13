import Image from "next/image";
import InfoSection from "./components/organisms/infoSection";
import Navbar from "./components/organisms/navbar";
import HeroSection from "./components/organisms/hero";
import CardData from "./components/organisms/cardData";

export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
        <HeroSection />
        <CardData />
        <InfoSection />
      </div>
    </main>
  );
}
