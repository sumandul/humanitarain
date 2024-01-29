import Image from "next/image";
import hero from "../../public/images/hero.png";
import { Open_Sans, Roboto } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return (
    <main>
      <section className="hero h-[80vh]">www</section>
    </main>
  );
}
