import Image from "next/image"
import map from "../../public/images/map.png"
import { Open_Sans } from "next/font/google";
import logo from "../../public/images/footerLogo.png"
import Button from "./Button";
const openSans = Open_Sans({ subsets: ["latin"] });
const Footer = () => {
    return (
        <footer className={`bg-[#E2E8F0] ${openSans.className}  py-12 px-16`}>
            <section className="grid grid-cols-3 gap-10 py-4 px-16">
                <div>
                    <h2 className="text-xl font-semibold">Our Location</h2>
                    <div className="mt-8">
                        <Image src={map} alt="map" />
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-semibold">Contact Us</h2>
                    <div className="mt-8">
                        <ul>
                            <li className="flex items-center gap-4 mt-3"><i className="bi bi-geo-alt-fill"></i> <p>Bansbari Rd, Kathmandu 44600, Nepal</p></li>
                            <li className="flex items-center gap-4 mt-3"><i className="bi bi-envelope-fill"></i> <p>Email</p></li>
                            <li className="flex items-center gap-4 mt-3"><i className="bi bi-telephone-fill"></i> <p>01-5912147</p></li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-semibold">Send Us and Email</h2>
                    <form className="w-[330px] mt-8">
                    <input type="text" placeholder="Name" className="p-3 rounded-xl border-[1px] border-white bg-transparent w-full" />
                    <input type="email" placeholder="Email" className="p-3 rounded-xl border-[1px] border-white bg-transparent w-full mt-2"/>
                    <input type="phone" placeholder="Phone" className="p-3 rounded-xl border-[1px] border-white bg-transparent w-full mt-2"/>
                    <textarea type="text" placeholder="Message" className="p-3 rounded-xl border-[1px] border-white bg-transparent mt-2 w-full"/>
                    <Button text={"Send Message"} icon={false} className={"bg-human-green py-2 w-full text-white rounded-xl font-semibold text-xl mt-4"}/>
                    </form>
                    

                </div>
            </section>
            <div className="border-[1px] border-[#F8FAFC] mt-12"></div>

            <section className="flex items-center justify-between mt-6 pl-4 pr-10">
                <div className="flex gap-8 basis-[60%] items-center">
                    <Image src={logo} alt="logo" />

                    <div className="flex justify-between gap-8 w-full font-light">
                        <div className="">
                        <p>Humanitarian Human Resource Pvt Ltd @ 2023.</p>
                        <p>All rights reserved.</p>
                        </div>
                       
                        
                        <p>Powered by: <br></br>Nexsewa Pvt Ltd.</p>
                        </div>
                </div>

                <div className="flex gap-8 text-xl">
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-twitter-x"></i>
                    <i className="bi bi-linkedin"></i>
                </div>
            </section>
        </footer>
    )
}

export default Footer