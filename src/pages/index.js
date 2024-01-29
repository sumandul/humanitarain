import Image from "next/image";
import hero from "../../public/images/hero.png"
import { Open_Sans, Roboto } from "next/font/google";
import Button from "@/components/Button";
import services1 from "../../public/images/services1.png"
import services2 from "../../public/images/services2.png"
import WorkProcessCard from "@/components/WorkProcessCard";
import workprocess from "../../public/images/work-process.png"
import workprocess2 from "../../public/images/work-process2.png"
import workprocess3 from "../../public/images/work-process3.png"
import globesearch from "../../public/images/globesearch.png"
import cv from "../../public/images/cv.png"
import appreview from "../../public/images/appreview.png"
import FAQCard from "@/components/FAQCard";
const openSans = Open_Sans({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return <main className=" text-green-500">hello world</main>;
}
