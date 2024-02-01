
export default function JobCard({ id, title, company, country, yoe, urgency, sector, salary, date, onClick, panelId,isJobCardClicked }) {
    return (
        <>
            <div className={`border-2 ${isJobCardClicked && panelId === id ? 'border-human-green' : 'border-[#D9D9D9]'} rounded-xl  p-6 cursor-pointer`} onClick={() => onClick(id)}>

                <div className="flex justify-between items-start">
                    <h2 className="text-xl font-bold">{title}</h2>
                    <i className="bi bi-bookmark text-lg text-[#475569]"></i>
                </div>
                <p className="text-lg text-[#475569]">{company}</p>
                <div className="flex gap-3 flex-col mt-4 items-start">
                    <button className="rounded-3xl bg-[#F0F0F5] text-sm py-2 px-4 ">Location: <span className="text-[#475569]">{country}</span></button>
                    <button className="rounded-3xl bg-[#F0F0F5] text-sm py-2 px-4 ">Experience Required: <span className="text-[#475569]">{yoe} Years</span></button>
                    <button className="rounded-3xl bg-[#F0F0F5] text-sm py-2 px-4 ">Urgency: <span className="text-[#475569]">{urgency}</span></button>
                    <button className="rounded-3xl bg-[#F0F0F5] text-sm py-2 px-4 ">Sector: <span className="text-[#475569]">{sector}</span></button>

                </div>


                <div className="flex justify-between items-center mt-6">
                    <div className="flex items-center gap-2">
                        <i className="bi bi-coin text-xl"></i>
                        <p>${salary}k/month</p>
                    </div>

                    <p className="text-[#475569] text-sm">Posted: {date}</p>
                </div>
            </div>

        </>
    )
}