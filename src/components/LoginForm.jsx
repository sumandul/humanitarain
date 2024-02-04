"use client"

import Link from "next/link"

export default function LoginForm(){
    return(
        <form className="px-6 sm:px-14 mt-4">
            <div className="flex flex-col gap-2 items-start">
                <label>Username</label>
                <input type="text" required className="rounded-xl border-2 border-[#E2E8F0] py-2 px-6 w-full"/>
            </div>

            <div className="flex flex-col gap-2 items-start mt-4">
                <label>Password</label>
                <input type="password" required className="rounded-xl border-2 border-[#E2E8F0] py-2 px-6 w-full"/>
            </div>

            <div className="flex justify-between items-center mt-4">
                <i className="bi bi-eye-fill text-human-green"></i>
                <Link href="#">Forget Password?</Link>
            </div>

            <button className="uppercase bg-[#49C199] font-bold text-white rounded-xl py-3 px-6 w-full mt-6">Sign IN</button>
        </form>
    )
}