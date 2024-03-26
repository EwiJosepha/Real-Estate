import { Roboto } from "next/font/google";
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