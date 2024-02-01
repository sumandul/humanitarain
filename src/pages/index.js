import Image from "next/image";
import hero from "../../public/images/hero.png";
import { Open_Sans, Roboto } from "next/font/google";
import Button from "@/components/Button";
import services1 from "../../public/images/services1.png"
import services2 from "../../public/images/services2.png"
import WorkProcessCard from "@/components/WorkProcessCard";
import workprocess from "../../public/images/work-process.png"
import workprocess2 from "../../public/images/work-process2.png"
import workprocess3 from "../../public/images/work-process3.png"
import globesearch from "../../public/images/globesearch.png"
import cv from "../../public/images/cv.png"
import appreview from "../../public/images/appreview.png"
import FAQCard from "@/components/FAQCard";
const openSans = Open_Sans({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return (
<<<<<<< HEAD
    <main>
      <section className="hero h-[80vh]">www</section>
=======
    <main className={openSans.className}>
      <section className="hero h-[80vh]">
        <div className={`h-[50%] bg-black/40 text-white text-center py-12 px-16`}>
          <h1 className="font-bold text-6xl leading-[70px]">Humanitarian Manpower Service</h1>
          <p className="uppercase font-bold text-2xl tracking-wider mt-6">we are a leading recruitment and outsourcing agency based in nepal</p>
          <div className={`${roboto.className} text-2xl font-bold mt-12 flex gap-8 justify-center items-center`}>

            <Button className={'bg-human-green rounded-3xl py-3 px-9'} text={'View Current Openings'} icon={true} />
            <Button className={'border-2 border-white rounded-3xl py-2 px-9'} text={'Recruit Candidates'} icon={true} />
          </div>
        </div>
      </section>

      <section className="mt-16 px-24  flex justify-center">
        <div className="max-w-[1440px] ">
          <h2 className="text-5xl font-extrabold text-center">Our Services</h2>
          <div className="grid grid-cols-[1fr_35px_1fr] gap-10 mt-14">
            <div className="bg-[#F8FAFC] rounded-3xl py-8 px-10 max-w-[592px]">
              <div className="rounded-xl">
                <Image src={services1} alt="services" />
                <h2 className="text-3xl font-bold mt-6">Candidate Recruitment</h2>
                <p className="text-xl mt-6">Our dedicated team is committed to guiding you through each step, ensuring a smooth experience.</p>
                <div className={`${roboto.className} text-xl text-white font-bold mt-12 flex gap-8 justify-end items-center`}>
                  <Button className={'bg-human-green rounded-3xl py-3 px-9'} text={'View Current Openings'} icon={true} />
                </div>
              </div>
            </div>
            <div className="bg-human-green rounded-3xl w-[35px] h-[6px] place-self-center">

            </div>
            <div className="bg-[#F8FAFC] rounded-3xl py-8 px-10 max-w-[592px]">
              <div className="rounded-xl">
                <Image src={services2} alt="services" />
                <h2 className="text-3xl font-bold mt-6">Client Recruitment</h2>
                <p className="text-xl mt-6">We specialize in unlocking your company's full potential by connecting you with top-tier talent.</p>
                <div className={`${roboto.className} text-xl text-white font-bold mt-12 flex gap-8 justify-end items-center`}>
                  <Button className={'bg-human-green rounded-3xl py-3 px-9'} text={'Learn More'} icon={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="mt-16 px-24 flex justify-center">
        <div className="max-w-[1440px]">
          <h2 className="text-5xl font-extrabold text-center">Our Work Process</h2>
          <div className="grid grid-cols-[1fr_33px_1fr_33px_1fr] gap-10 mt-14 ">
            <WorkProcessCard img={workprocess} heading={'View Open Positions'} icon={globesearch} para={'Browse through diverse roles that align with your skills, experience, and career aspirations.'} />
            <div className="bg-[#2DD4BF] rounded-3xl w-[35px] h-[6px] place-self-center"></div>
            <WorkProcessCard img={workprocess2} heading={'Submit Your CV'} icon={cv} para={"Once you've identified the role that resonates with your career goals, submit your application."} />
            <div className="bg-[#2DD4BF] rounded-3xl w-[35px] h-[6px] place-self-center"></div>
            <WorkProcessCard img={workprocess3} heading={'Application Review'} icon={appreview} para={'Our dedicated recruitment team will carefully review your CV and take decision.'} />
          </div>
        </div>
      </section>

      <section className="mt-16 px-40">
       
          <h2 className="text-5xl font-extrabold text-center">Frequently Asked Questions</h2>
          <div className="mt-10">
            <FAQCard question={'Question 1'} answer={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}/>
            <FAQCard question={'Question 2'} answer={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}/>
            <FAQCard question={'Question 3'} answer={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}/>
          </div>
      </section>

      <section className="text-center mt-16 py-10">
        <i className="text-6xl text-[#FACC15] bi bi-bell-fill"></i>
        <h2 className="font-extrabold text-6xl mt-8">Get Notified</h2>
        <p className="text-lg font-semibold mt-8">Subscribe to our newsletter to get update on new Vacancies.</p>
        <div className="grid mt-8"> 
        <form className="place-self-center w-[332px]">
          <input type="email" placeholder="Enter your Email Address" className="rounded-xl py-2 px-6"/>
          
        </form>
          
        </div>
        <div className="flex justify-center mt-8">
        <Button icon={false} text={'Subscribe'} className={'bg-[#047857] rounded-lg py-2 px-7 text-white text-xl font-semibold'}/>
        </div>
       
      </section>
>>>>>>> 0a18f20 (Completed all the front end pages)
    </main>
  );
}
