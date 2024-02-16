"use client"
import Image from "next/image"
import Logo from "../../public/images/logo.png"

import { Roboto } from "next/font/google";
import Link from "next/link";
import { useState } from "react";



const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

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

    const [hamburg, setHamBurg] = useState(false)


    const handleClick = () =>{
        console.log("Aaaa");
        setHamBurg(!hamburg)
    }

  
    return(

        <header className="sm:px-40 sm:py-6">
            <nav className={`flex gap-10 items-center justify-between font-bold relative ${roboto.className}`}>
                <div className="max-w-[100px]  sm:max-w-[175px] sm:max-h-[95px]">
                    <Link href="/">
                        <Image src={Logo} alt="logo" className="max-w-full max-h-full"/>
                    </Link>
                </div>
                <button className="pr-4 sm:hidden" onClick={handleClick}>
                    {hamburg ? <i className="bi bi-x font-bold text-2xl"></i> : <i className="bi bi-list font-bold text-2xl"></i>}
                </button>
              
               <ul className={`${hamburg ? "block top-16 right-0 text-left py-4 text-base pl-3 pr-10 bg-white w-fit h-fit" :"hidden "} bottom-0  z-99 bg-white absolute sm:flex sm:static sm:top-0 sm:gap-4`}>
                    {
                        NavItems.map((data,index) =>{
                            return <Link href={data.link} key={index} onClick={handleClick}><li className="mb-4 sm:mb-0">{data.item}</li></Link>
                        })
                    }

                    <Link href="/signin" className="sm:hidden" onClick={handleClick}><button className="border-b-2 border-human-green">Login</button></Link> 
                </ul>
             
                  
                   <Link href="/signin" className="hidden sm:block"><button className="bg-human-green text-white py-2 px-6 rounded-3xl">Login</button></Link> 
               
            </nav>
        </header>
    )
}
