"use client"
import google from "../../../public/images/google.png"
import logo from "../../../public/images/footerLogo.png"
import Image from "next/image";
import Link from "next/link";
export default function SignInUser() {
    return (
        <main className="signin grid">
            <section className="place-self-center grid bg-white rounded-xl  text-center w-[30%] py-8 my-10">
            <Link href="/signin" className='place-self-start pl-6'><i className="bi bi-arrow-left text-2xl text-left"></i></Link>
                <div className="flex justify-center">
                    <Image src={logo} alt="logo" />
                </div>
                <h1 className="text-3xl font-bold my-3">Register as User</h1>

                <form className="px-14 mt-4">
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
                        <input type="password" required className="rounded-xl border-2 border-[#E2E8F0] py-2 px-6 w-full" />
                    </div>

                    <div className="flex flex-col gap-2 items-start mt-4">
                        <label>Confirm Password*</label>
                        <input type="password" required className="rounded-xl border-2 border-[#E2E8F0] py-2 px-6 w-full" />
                    </div>

               

                    <button className="uppercase bg-[#49C199] font-bold text-white rounded-xl py-3 px-6 w-full mt-6">Register</button>
                </form>

            </section>
        </main>
    )
}