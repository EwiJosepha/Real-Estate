import Image from "next/image";
import InfoSection from "./components/organisms/infoSection";
import Luxury from "./components/organisms/luxury";
import Footer from "./components/organisms/footer";
import { Roboto } from '@next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400'
})

export default function Home() {
  return (
    <main className={roboto.className}>
      <div>
        <InfoSection />
        <Luxury />
        <Footer />
      </div>
    </main>
  );
}
