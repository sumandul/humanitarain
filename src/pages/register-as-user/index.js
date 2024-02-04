"use client"
import google from "../../../public/images/google.png"
import logo from "../../../public/images/footerLogo.png"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function SignInUser() {
    const [password1, setPassword1] = useState();
    const [password2, setPassword2] = useState();
    const [inCorrectPass, setInCorrectPass] = useState();
    
    const handleFormSubmit = (e) =>{
        e.preventDefault();
        console.log(password1);
        if(password1 != password2){
            setInCorrectPass(true)
        }else{
            setInCorrectPass(false)
        }
    }
   
    return (
        <main className="signin px-4 grid">
            <section className="place-self-center grid bg-white rounded-xl  text-center sm:w-[30%] py-8 my-10">
            <Link href="/signin" className='place-self-start pl-6'><i className="bi bi-arrow-left text-2xl text-left"></i></Link>
                <div className="flex justify-center">
                    <Image src={logo} alt="logo" />
                </div>
                <h1 className="text-3xl font-bold my-3">Register as User</h1>

                <form className="px-14 mt-4" onSubmit={handleFormSubmit}>
                    <div className="flex flex-col gap-2 items-start">
                        <label>Email*</label>
                        <input type="email" required className="rounded-xl border-2 border-[#E2E8F0] py-2 px-6 w-full" />
                    </div>
                    <div className="flex flex-col gap-2 items-start">
                        <label>Username*</label>
                        <input type="text" required className="rounded-xl border-2 border-[#E2E8F0] py-2 px-6 w-full" />
                    </div>

                    <div className="flex flex-col gap-2 items-start mt-4">
                        <label>Password*</label>
                        <input type="password" required className={`rounded-xl border-2 ${inCorrectPass ? 'border-[#E33629]':'border-[#E2E8F0]' } py-2 px-6 w-full`} onChange={(e) => setPassword1(e.target.value)}/>
                    </div>

                    <div className="flex flex-col gap-2 items-start mt-4">
                        <label>Confirm Password*</label>
                        <input type="password" required className={`rounded-xl border-2 ${inCorrectPass ? 'border-[#E33629]':'border-[#E2E8F0]' } py-2 px-6 w-full`} onChange={(e) => setPassword2(e.target.value)}/>
                        {inCorrectPass ? <p className="text-sm text-[#E33629]">Passwords Does Not Match</p> :""}
                    </div>

               

                    <button className="uppercase bg-[#49C199] font-bold text-white rounded-xl py-3 px-6 w-full mt-6">Register</button>
                </form>

            </section>
        </main>
    )
}