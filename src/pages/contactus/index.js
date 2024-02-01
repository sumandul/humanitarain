import Button from "@/components/Button";
import Image from "next/image";
import map from "../../../public/images/map.png"
export default function Contact() {
    return (
        <main>
            <section className="flex justify-center contact text-white py-14">
                <div className="text-center">
                    <h1 className="font-extrabold text-6xl leading-[70px]">Contact Us</h1>
                    <p className="uppercase font-bold text-2xl tracking-wider mt-6">
                        Feel free to reach out to us with any inquiries or feedback.
                        <br></br>We're here to assist you on your career journey.</p>
                    <div className="flex gap-8 items-center mt-8">

                    </div>
                </div>

            </section>

            <section className="bg-[#F6F9FD] py-14 px-24">
                <div className="flex justify-around">
                    <div className="bg-white w-[40%] rounded-2xl p-8">
                        <div className="flex gap-4 border-2 border-[#E8E8E8] rounded-2xl py-3 px-4 items-center">
                            <div className="flex gap-2 items-center">
                                <i className="bi bi-telephone-fill bg-human-green text-white text-lg font-semibold rounded-2xl py-3 px-4"></i>
                                <p className="font-semibold text-lg">Our Contact Number:</p>
                            </div>
                            <p className="text-xl font-light">01-5912147</p>
                        </div>

                        <div className="flex gap-4 border-2 border-[#E8E8E8] rounded-2xl py-3 px-4 items-center mt-4">
                            <div className="flex gap-2 items-center">
                                <i className="bi bi-envelope bg-human-green text-white text-lg font-semibold rounded-2xl py-3 px-4"></i>
                                <p className="font-semibold text-lg">Mail Us at:</p>
                            </div>
                            <p className="text-xl font-light">humanitarian@email.com</p>
                        </div>

                        <form className=" mt-8">
                            <input type="text" placeholder="Name" className="p-3 rounded-xl border-[1px] border-white bg-[#F8FAFC] w-full" />
                            <input type="email" placeholder="Email" className="p-3 rounded-xl border-[1px] border-white bg-[#F8FAFC] w-full mt-2" />
                            <input type="phone" placeholder="Phone" className="p-3 rounded-xl border-[1px] border-white bg-[#F8FAFC] w-full mt-2" />
                            <textarea type="text" placeholder="Message" className="p-3 rounded-xl border-[1px] border-white bg-[#F8FAFC] mt-2 w-full" />
                            <Button text={"Send Message"} icon={false} className={"bg-human-green py-2 w-full text-white rounded-xl font-semibold text-xl mt-4"} />
                        </form>


                    </div>

                    <div className="bg-white rounded-2xl p-8 h-max">
                    <h2 className="text-xl font-semibold">Our Location</h2>
                    <p className="text-xl font-light">Bansbari Rd, Kathmandu 44600, Nepal</p>
                    <div className="mt-8">
                        <Image src={map} alt="map" />
                    </div>
                </div>
                </div>

            </section>
        </main>
    )
}