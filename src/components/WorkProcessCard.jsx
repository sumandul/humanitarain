import Image from "next/image";

export default function WorkProcessCard({ img, icon, heading, para }) {
    return (
        <div className="bg-[#F8FAFC] rounded-3xl py-8 px-10">
            <div className="rounded-xl">
                <Image src={img} alt="services" />
                <div className="flex gap-4 items-center mt-6">
                    <div className="bg-[#ECFDF5] rounded-full p-4">
                        <Image src={icon} alt="icon" />
                    </div>

                    <h2 className="text-[28px] font-bold ">{heading}</h2>
                </div>

                <p className="text-2xl mt-6 font-light">{para}</p>

            </div>
        </div>
    )
}