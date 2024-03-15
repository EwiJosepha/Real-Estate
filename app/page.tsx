import { Roboto } from "next/font/google";
import DetailsHero from "./components/organisms/detailsHero";
import DetailAvatar from "./components/organisms/detailAvatar";
import Description from "./components/organisms/description";
import ContactPage from "./components/organisms/contactAgent";
import Navbar from "./components/organisms/navbar";
import HeroSection from "./components/organisms/hero";
import CardData from "./components/organisms/cardData";
import LandingPage from "./landing/page";

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400'
})

export default function Home() {
  return (
    <main className={roboto.className}>
      <div>
        <LandingPage />
      </div>
    </main>
  );
}
