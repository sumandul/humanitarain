import Image from "next/image";
import data from "../../../JsonDummy/JobData.json";
import { useRouter } from "next/router";
import JobForm from "../../../components/JobForm";
import jobApp from "../../../../public/images/jobApp.png";
export default function Details() {
  const router = useRouter();
  console.log(router.query.id);
  let show = {};
  for (const i in data) {
    if (data[i].jobId === router.query.id) {
      show = data[i];
    }
  }

  console.log(show);

  return (
    <>
      <hr></hr>
      <main className="px-8 sm:px-20 mb-14">
        <section className="mt-10">
          <div className="flex justify-between gap-16 items-start">
            <div>
              <div className="flex items-center sm:items-start gap-4">
                <img
                  src={show.logo}
                  alt="logo"
                  className="bg-[#F0F0F5] rounded-xl"
                />
                <div>
                  <h2 className="text-lg sm:text-xl font-bold mt-4">{show.title}</h2>
                  <p className="text-[#6E6E9B]">{show.company}</p>
                </div>
              </div>
              <button className="text-[#5374E7] text-sm bg-[#5374E71A] py-1 px-4 rounded-2xl mt-3">
                {show.numofApp}+ Applicants{" "}
              </button>
            </div>

            <button>
              <i className="bi bi-bookmark text-lg text-[#475569]"></i>
            </button>
          </div>
        </section>

        <hr className="my-8"></hr>

        <section className="flex flex-col sm:flex-row gap-6 sm:gap-16 sm:items-center">
          <div>
            <h2 className="font-bold">Location</h2>
            <p className="text-[#6E6E9B]">
              {show.city}, {show.country}
            </p>
          </div>

          <div>
            <h2 className="font-bold ">Experience</h2>
            <p className="text-[#6E6E9B]">{show.yoe} Years</p>
          </div>

          <div>
            <h2 className="font-bold ">Sector</h2>
            <p className="text-[#6E6E9B]">{show.sector}</p>
          </div>
          <div>
            <h2 className="font-bold ">Date Posted</h2>
            <p className="text-[#6E6E9B]">{show.date}</p>
          </div>
          <div>
            <h2 className="font-bold ">Base Salary</h2>
            <p className="text-[#6E6E9B]">{show.salary}k/month</p>
          </div>
        </section>
        <hr className="my-8"></hr>

        <section className="sm:w-[60%]">
          <h2 className="font-bold mt-4 text-xl">Job Description</h2>
          <p className="text-[#475569] mt-2">{show.desc}</p>

          <h2 className="font-bold mt-4 underline text-[#475569]">
            Key Requirements
          </h2>
          <ul className="ml-7">
            {show.requirements?.map((data, index) => {
              return (
                <li key={index} className="list-disc">
                  {data}
                </li>
              );
            })}
          </ul>

          <p className="font-bold text-[#475569] mt-6">
            CANDIDATES THAT DO NOT MEET THE KEY REQUIREMENTS WILL NOT BE
            CONSIDERED
          </p>
        </section>
        <hr className="mb-8 mt-2"></hr>

        <section className="flex justify-between">
          <div className="w-full sm:basis-1/4">
            <h2 className="text-xl font-bold">Your Application</h2>
            <JobForm />
          </div>

          <div className="hidden sm:block">
            <Image src={jobApp} alt="job application" />
          </div>
        </section>
      </main>
    </>
  );
}
