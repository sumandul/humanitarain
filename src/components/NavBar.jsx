import Image from "next/image";
import Logo from "../../public/images/logo.png";

import { Open_Sans, Roboto } from "next/font/google";
import Link from "next/link";

const openSans = Open_Sans({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

const NavItems = [
  {
    item: "Home",
    link: "/",
  },

  {
    item: "About Us",
    link: "/aboutus",
  },
  {
    item: "Our Services",
    link: "/ourservices",
  },
  {
    item: "Current Opennings",
    link: "/openings",
  },
  {
    item: "FAQ",
    link: "/faq",
  },
  {
    item: "Contact Us",
    link: "/contactus",
  },
];
export default function NavBar() {
  return (
    <header className="sm:px-40 sm:py-6">
      <nav
        className={`flex gap-10 items-center justify-between font-bold ${roboto.className}`}
      >
        <div className="max-w-[175px] max-h-[95px]">
          <Link href="/">
            <Image src={Logo} alt="logo" className="max-w-full max-h-full" />
          </Link>
        </div>
        <ul className="flex gap-4">
          {NavItems.map((data, i) => {
            return (
              <Link key={i} href={data.link}>
                <li>{data.item}</li>
              </Link>
            );
          })}
        </ul>

        <Link href="/signin">
          <button className="bg-human-green text-white py-2 px-6 rounded-3xl">
            Login
          </button>
        </Link>
      </nav>
    </header>
  );
}
