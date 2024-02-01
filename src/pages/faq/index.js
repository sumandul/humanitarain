import FAQCard from "@/components/FAQCard";

export default function Faq() {
    return (
        <main>
            <section className="flex justify-center faq text-white py-14">
                <div className="text-center">
                    <h1 className="font-extrabold text-6xl leading-[70px]">Frequently Asked Questions</h1>
                    <p className="uppercase font-bold text-2xl tracking-wider mt-6">
                        Explore common queries and find quick answers</p>
                    <div className="flex gap-8 items-center mt-8">

                    </div>
                </div>

            </section>

            <section className="sm:px-36">
                <div className="my-10 max-w-[1440px]">
                    <FAQCard question={'Question 1'} answer={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'} />
                    <FAQCard question={'Question 2'} answer={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'} />
                    <FAQCard question={'Question 3'} answer={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'} />
                </div>
            </section>
        </main>
    )
}