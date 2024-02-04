"use client"
import Image from "next/image"
import Logo from "../../public/images/logo.png"

import { Open_Sans, Roboto } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

const openSans = Open_Sans({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight:["400", "700"] });

const NavItems = [
    {
        "item":"Home",
        "link":"/"
    },

    {
        "item":"About Us",
        "link":"/aboutus"},
    {
        "item":"Our Services",
        "link":"/ourservices"},
    {
        "item":"Current Opennings",
        "link":"/openings"},
    {
        "item":"FAQ",
        "link":"/faq"},
    {
        "item":"Contact Us",
        "link":"/contactus"},
]
export default function NavBar(){
    const [isHamburgerClicked, setIsHamburgerClicked] = useState(false)

    const handleNavClick = () =>{
        console.log("aaaaa");
        console.log("Clicked", isHamburgerClicked);
        setIsHamburgerClicked(!isHamburgerClicked)
    }
    return(

        <header className="sm:px-40 sm:py-6">
            <nav className={`flex gap-10 items-center justify-between font-bold relative ${roboto.className}`}>
                <div className="max-w-[100px]  sm:max-w-[175px] sm:max-h-[95px]"><Link href="/"><Image src={Logo} alt="logo" className="max-w-full max-h-full"/></Link></div>
                <button className="sm:hidden" onClick={handleNavClick}>
                    <i className="bi bi-list font-bold text-2xl"></i>
                </button>
                {
                    isHamburgerClicked && <h1>aaaaaaaaaaaaaaa</h1>
                }
               <ul className="sm:flex hidden absolute sm:static sm:top-0  bottom-0 z-99 text-center bg-white sm:gap-4">
                    {
                        NavItems.map((data,index) =>{
                            return <Link href={data.link} key={index}><li>{data.item}</li></Link>
                        })
                    }
                </ul>
             
                  
                   <Link href="/signin" className="hidden sm:block"><button className="bg-human-green text-white py-2 px-6 rounded-3xl">Login</button></Link> 
               
            </nav>
        </header>
    )
}