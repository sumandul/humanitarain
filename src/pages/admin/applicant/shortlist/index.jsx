// import Table from "@/components/table";
import AdminDashBoardLayout from "../../../../components/DashBoardLayout";
// import ImageSkleton from "../../../../public/rect.png";
import { HiOutlinePencil } from "react-icons/hi";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import Link from "next/link";

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
        <div className=" flex justify-between item center">
          <div>
            <h3 className=" text-[32px] font-semibold">
              Shortlisted Applicants
            </h3>
            <p className="text-[#475569] text-[18px] font-normal">
              Call Center Executive
            </p>
          </div>
        </div>
        <div className=" grid grid-cols-3 gap-10 ">
          <div className=" flex flex-col gap-6 border-[1px] rounded-[16px] p-8">
            <div className=" font-[700] text-base text-[#0D0C22]">
              S.N.:<span className=" font-normal ml-2 ">1</span>
            </div>
            <div className=" font-[700] text-base text-[#0D0C22]">
              Name:<span className=" font-normal ml-2 ">suman Dulal</span>
            </div>
            <div className=" font-[700] text-base text-[#0D0C22]">
              Phone Number:
              <span className=" font-normal ml-2 ">1545454545454</span>
            </div>
            <div className=" font-[700] text-base text-[#0D0C22]">
              Email:<span className=" font-normal ml-2 ">1545454545454</span>
            </div>
            <div className=" font-[700] text-base text-[#0D0C22]">
              CV:
              <span className=" font-normal border-[1px] ml-2  border-[#D9D9D9] bg-[#F8FAFC] rounded-md p-1">
                open cv
              </span>
            </div>
          </div>
          <div className=" flex flex-col gap-6 border-[1px] rounded-[16px] p-8">
            <div className=" font-[700] text-base text-[#0D0C22]">
              S.N.:<span className=" font-normal ml-2 ">1</span>
            </div>
            <div className=" font-[700] text-base text-[#0D0C22]">
              Name:<span className=" font-normal ml-2 ">suman Dulal</span>
            </div>
            <div className=" font-[700] text-base text-[#0D0C22]">
              Phone Number:
              <span className=" font-normal ml-2 ">1545454545454</span>
            </div>
            <div className=" font-[700] text-base text-[#0D0C22]">
              Email:<span className=" font-normal ml-2 ">1545454545454</span>
            </div>
            <div className=" font-[700] text-base text-[#0D0C22]">
              CV:
              <span className=" font-normal border-[1px] ml-2  border-[#D9D9D9] bg-[#F8FAFC] rounded-md p-1">
                open cv
              </span>
            </div>
          </div>
          <div className=" flex flex-col gap-6 border-[1px] rounded-[16px] p-8">
            <div className=" font-[700] text-base text-[#0D0C22]">
              S.N.:<span className=" font-normal ml-2 ">1</span>
            </div>
            <div className=" font-[700] text-base text-[#0D0C22]">
              Name:<span className=" font-normal ml-2 ">suman Dulal</span>
            </div>
            <div className=" font-[700] text-base text-[#0D0C22]">
              Phone Number:
              <span className=" font-normal ml-2 ">1545454545454</span>
            </div>
            <div className=" font-[700] text-base text-[#0D0C22]">
              Email:<span className=" font-normal ml-2 ">1545454545454</span>
            </div>
            <div className=" font-[700] text-base text-[#0D0C22]">
              CV:
              <span className=" font-normal border-[1px] ml-2  border-[#D9D9D9] bg-[#F8FAFC] rounded-md p-1">
                open cv
              </span>
            </div>
          </div>{" "}
          <div className=" flex flex-col gap-6 border-[1px] rounded-[16px] p-8">
            <div className=" font-[700] text-base text-[#0D0C22]">
              S.N.:<span className=" font-normal ml-2 ">1</span>
            </div>
            <div className=" font-[700] text-base text-[#0D0C22]">
              Name:<span className=" font-normal ml-2 ">suman Dulal</span>
            </div>
            <div className=" font-[700] text-base text-[#0D0C22]">
              Phone Number:
              <span className=" font-normal ml-2 ">1545454545454</span>
            </div>
            <div className=" font-[700] text-base text-[#0D0C22]">
              Email:<span className=" font-normal ml-2 ">1545454545454</span>
            </div>
            <div className=" font-[700] text-base text-[#0D0C22]">
              CV:
              <span className=" font-normal border-[1px] ml-2  border-[#D9D9D9] bg-[#F8FAFC] rounded-md p-1">
                open cv
              </span>
            </div>
          </div>{" "}
          <div className=" flex flex-col gap-6 border-[1px] rounded-[16px] p-8">
            <div className=" font-[700] text-base text-[#0D0C22]">
              S.N.:<span className=" font-normal ml-2 ">1</span>
            </div>
            <div className=" font-[700] text-base text-[#0D0C22]">
              Name:<span className=" font-normal ml-2 ">suman Dulal</span>
            </div>
            <div className=" font-[700] text-base text-[#0D0C22]">
              Phone Number:
              <span className=" font-normal ml-2 ">1545454545454</span>
            </div>
            <div className=" font-[700] text-base text-[#0D0C22]">
              Email:<span className=" font-normal ml-2 ">1545454545454</span>
            </div>
            <div className=" font-[700] text-base text-[#0D0C22]">
              CV:
              <span className=" font-normal border-[1px] ml-2  border-[#D9D9D9] bg-[#F8FAFC] rounded-md p-1">
                open cv
              </span>
            </div>
          </div>{" "}
          <div className=" flex flex-col gap-6 border-[1px] rounded-[16px] p-8">
            <div className=" font-[700] text-base text-[#0D0C22]">
              S.N.:<span className=" font-normal ml-2 ">1</span>
            </div>
            <div className=" font-[700] text-base text-[#0D0C22]">
              Name:<span className=" font-normal ml-2 ">suman Dulal</span>
            </div>
            <div className=" font-[700] text-base text-[#0D0C22]">
              Phone Number:
              <span className=" font-normal ml-2 ">1545454545454</span>
            </div>
            <div className=" font-[700] text-base text-[#0D0C22]">
              Email:<span className=" font-normal ml-2 ">1545454545454</span>
            </div>
            <div className=" font-[700] text-base text-[#0D0C22]">
              CV:
              <span className=" font-normal border-[1px] ml-2  border-[#D9D9D9] bg-[#F8FAFC] rounded-md p-1">
                open cv
              </span>
            </div>
          </div>
        </div>
      </div>
    </AdminDashBoardLayout>
  );
}
