import Table from "../../../../components/table/";
import AdminDashBoardLayout from "../../../../components/DashBoardLayout";
// import ImageSkleton from "../../../../public/rect.png";
import { HiOutlinePencil } from "react-icons/hi";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";

export default function ApplicantsList() {
  const columns = [
    {
      header: "S.N.",
    },
    {
      header: "Name",
    },
    {
      header: "CV",
    },
    {
      header: "Shortlisted",
    },
  ];
  return (
    <AdminDashBoardLayout>
      <div className=" flex flex-col  gap-16 ">
        <div>
          <h3 className=" text-[32px] font-semibold">Applicants</h3>
          <p className="text-[#475569] text-[18px] font-normal">
            Call Center Executive
          </p>
        </div>
        <div>
          <Table columns={columns} className={"w-full"} />
        </div>
        {/* <div className="  grid grid-cols-3 gap-20">
          <div className=" border-[1px] border-[#D9D9D9] flex flex-col gap-6 rounded-[12px] p-6 ">
            <div className=" flex justify-between">
              <div className=" w-[72px] h-[72px] ">
                <Image
                  width={300}
                  height={400}
                  src={ImageSkleton}
                  className=" w-full h-full object-cover"
                />
              </div>

              <div>
                <HiOutlinePencil className=" text-2xl" />
              </div>
            </div>
            <div>
              <h5 className=" text-[20px] font-[700]   text-human-black">
                Call Center Executive
              </h5>
              <p className=" font-normal text-[18px]  text-[#475569]">
                Netflix
              </p>
            </div>
            <div>
              <div className=" flex flex-col  justify-start gap-3  ">
                <span className=" bg-[#F0F0F5]  w-[8rem]  text-[#181823] py-2 px-3 font-normal text-[14px] flex  gap-2 rounded-[50px]">
                  Location: <p className=" text-[#475569]"> Dubai</p>
                </span>
                <span className=" bg-[#F0F0F5]  w-[16rem] text-[#181823] py-2 px-3 font-normal text-[14px] flex  gap-2 rounded-[50px]">
                  Experience Required:{" "}
                  <p className=" text-[#475569]"> 2 Years</p>
                </span>
              </div>
            </div>
            <div className=" flex justify-between">
              <div className=" text-base font-normal text-human-black flex items-center gap-2">
                <HiOutlineCurrencyDollar className="    text-3xl text-[#537FE7]" />{" "}
                $32k/month
              </div>
              <div className=" text-[14px] text-[#AAAAC5]">
                Posted: 01/03/2024
              </div>
            </div>
          </div>{" "}
          <div className=" border-[1px] border-[#D9D9D9] flex flex-col gap-6 rounded-[12px] p-6 ">
            <div className=" flex justify-between">
              <div className=" w-[72px] h-[72px] ">
                <Image
                  width={300}
                  height={400}
                  src={ImageSkleton}
                  className=" w-full h-full object-cover"
                />
              </div>

              <div>
                <HiOutlinePencil className=" text-2xl" />
              </div>
            </div>
            <div>
              <h5 className=" text-[20px] font-[700]   text-human-black">
                Call Center Executive
              </h5>
              <p className=" font-normal text-[18px]  text-[#475569]">
                Netflix
              </p>
            </div>
            <div>
              <div className=" flex flex-col  justify-start gap-3  ">
                <span className=" bg-[#F0F0F5]  w-[8rem]  text-[#181823] py-2 px-3 font-normal text-[14px] flex  gap-2 rounded-[50px]">
                  Location: <p className=" text-[#475569]"> Dubai</p>
                </span>
                <span className=" bg-[#F0F0F5]  w-[16rem] text-[#181823] py-2 px-3 font-normal text-[14px] flex  gap-2 rounded-[50px]">
                  Experience Required:{" "}
                  <p className=" text-[#475569]"> 2 Years</p>
                </span>
              </div>
            </div>
            <div className=" flex justify-between">
              <div className=" text-base font-normal text-human-black flex items-center gap-2">
                <HiOutlineCurrencyDollar className="    text-3xl text-[#537FE7]" />{" "}
                $32k/month
              </div>
              <div className=" text-[14px] text-[#AAAAC5]">
                Posted: 01/03/2024
              </div>
            </div>
          </div>
          <div className=" border-[1px] border-[#D9D9D9] flex flex-col gap-6 rounded-[12px] p-6 ">
            <div className=" flex justify-between">
              <div className=" w-[72px] h-[72px] ">
                <Image
                  width={300}
                  height={400}
                  src={ImageSkleton}
                  className=" w-full h-full object-cover"
                />
              </div>

              <div>
                <HiOutlinePencil className=" text-2xl" />
              </div>
            </div>
            <div>
              <h5 className=" text-[20px] font-[700]   text-human-black">
                Call Center Executive
              </h5>
              <p className=" font-normal text-[18px]  text-[#475569]">
                Netflix
              </p>
            </div>
            <div>
              <div className=" flex flex-col  justify-start gap-3  ">
                <span className=" bg-[#F0F0F5]  w-[8rem]  text-[#181823] py-2 px-3 font-normal text-[14px] flex  gap-2 rounded-[50px]">
                  Location: <p className=" text-[#475569]"> Dubai</p>
                </span>
                <span className=" bg-[#F0F0F5]  w-[16rem] text-[#181823] py-2 px-3 font-normal text-[14px] flex  gap-2 rounded-[50px]">
                  Experience Required:{" "}
                  <p className=" text-[#475569]"> 2 Years</p>
                </span>
              </div>
            </div>
            <div className=" flex justify-between">
              <div className=" text-base font-normal text-human-black flex items-center gap-2">
                <HiOutlineCurrencyDollar className="    text-3xl text-[#537FE7]" />{" "}
                $32k/month
              </div>
              <div className=" text-[14px] text-[#AAAAC5]">
                Posted: 01/03/2024
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </AdminDashBoardLayout>
  );
}
