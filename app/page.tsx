import Image from "next/image";
import InfoSection from "./components/organisms/infoSection";
import Navbar from "./components/organisms/navbar";
import HeroSection from "./components/organisms/hero";

export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
        <HeroSection />
        <InfoSection />
      </div>
    </main>
  );
}
