import Image from "next/image";
import InfoSection from "./components/organisms/infoSection";
import Luxury from "./components/organisms/luxury";
import Footer from "./components/organisms/footer";

export default function Home() {
  return (
    <main>
      <div>
        <InfoSection />
        <Luxury />
        <Footer/>
      </div>
    </main>
  );
}
