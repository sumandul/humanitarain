import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

export default function JobDetailPanel({id, title, company, country, city, yoe, sector,numOfApp,desc, salary, date,logo,onClick}){
    
    return(
        <div className="hidden sm:block pl-4 pr-10">
        <div className="flex justify-between items-start mt-6">
            <div>
                <img src={logo} alt="logo" className="bg-[#F0F0F5] rounded-xl" />
                <h2 className="text-xl font-bold mt-4">{title}</h2>
                <p className="text-[#6E6E9B]">{company}</p>
                <button className="text-[#5374E7] text-sm bg-[#5374E71A] py-1 px-4 rounded-2xl mt-3">{numOfApp}+ Applicants </button>
            </div>
            <button  onClick={() => onClick()}><i className="bi bi-x text-lg text-[#475569]"></i></button>
        </div>
        <hr className='mt-6'></hr>

        <h2 className="font-bold mt-6">Location</h2>
        <p className="text-[#6E6E9B]">{city}, {country}</p>

        <h2 className="font-bold mt-4">Experience</h2>
        <p className="text-[#6E6E9B]">{yoe} Years</p>

        <h2 className="font-bold mt-4">Sector</h2>
        <p className="text-[#6E6E9B]">{sector}</p>

        <h2 className="font-bold mt-4">Date Posted</h2>
        <p className="text-[#6E6E9B]">{date}</p>

        <hr className='my-6'></hr>

        <h2 className="font-bold mt-4">Job Description</h2>
        <p className="text-[#6E6E9B]">{desc.slice(0,140)}...<Link href={`/openings/${id}`} className="text-[#537FE7] underline">read more</Link></p>

        <hr className='my-6'></hr>
        <h2 className="font-bold mt-4">Base Salary</h2>
        <p className="text-[#6E6E9B]">{salary}k/month</p>

        <div className="flex justify-end">
            <Button text={"Apply Now"} icon={false} className={"bg-human-green text-white py-4 px-9 font-semibold rounded-3xl mt-6"} />
        </div>

    </div>
    )
}