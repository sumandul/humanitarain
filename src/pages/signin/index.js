import LoginForm from "@/components/LoginForm";
import google from "../../../public/images/google.png"
import Image from "next/image";
import Link from "next/link";
export default function SignIn(){
    return(
        <main className="signin grid">
            <section className="place-self-center grid bg-white rounded-xl  text-center w-[30%] py-8 my-10">
                    <h1 className="text-4xl font-bold">Sign In</h1>

                   <LoginForm />

                   <div className="border-[1px] border-[#49C199] place-self-center my-4 w-1/2">

                   </div>

                   <div className="">
                        <p className="text-xs font-light text-[#A0AEC0]">or Sign in as User using Google </p>
                        <div className="flex justify-center my-4">
                            <Image src={google} alt="google"/>
                        </div>
                   </div>

                   <div className="border-[1px] border-[#49C199] place-self-center mb-4 w-1/2">

                   </div>

                   <div className="">
                        <p className="font-bold text-[#8391A2]">Don't have an account? </p>
                        <div className="flex gap-4 justify-center items-center mt-3">
                           <Link href="/register-as-user"><button className="bg-[#49C199] font-bold text-white rounded-xl py-3 px-8">Register as User</button></Link> 
                           <Link href="/register-as-recruiter"><button className="bg-[#49C199] font-bold text-white rounded-xl py-3 px-8">Register as Recruiter</button></Link> 
                        </div>
                   </div>
            </section>  
        </main>
    )
}