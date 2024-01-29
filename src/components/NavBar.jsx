import Image from "next/image"
import Logo from "../../public/images/logo.png"

import { Open_Sans, Roboto } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight:["400", "700"] });

const NavItems = [
    {"item":"Home"},
    {"item":"About Us"},
    {"item":"Our Services"},
    {"item":"Current Opennings"},
    {"item":"FAQ"},
    {"item":"Contact Us"},
]
export default function NavBar(){
    return(

        <header className="sm:px-40 sm:py-6">
            <nav className={`flex gap-10 items-center justify-between font-bold ${roboto.className}`}>
                <div className="max-w-[185px] max-h-[100px]"><Image src={Logo} alt="logo" className="max-w-full max-h-full"/></div>
                <ul className="flex gap-4">
                        {
                            NavItems.map((data,index) =>{
                                return <li key={index}>{data.item}</li>
                            })
                        }
                    </ul>
             
                  
                    <button className="bg-human-green text-white py-2 px-6 rounded-3xl">Login</button>
               
            </nav>
        </header>
    )
}