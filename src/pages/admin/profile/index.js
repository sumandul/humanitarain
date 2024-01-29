import Link from "next/link";
import AdminDashBoardLayout from "@/components/DashBoardLayout";
import Image from "next/image";
import ImageSkleton from "../../../../public/profile.png";

export default function Profile() {
  return (
    <AdminDashBoardLayout>
      <div className=" flex flex-col gap-10">
        <h3 className=" text-[32px] font-semibold">Profile</h3>
        <div className=" ">
          <span className=" bg-[#E6FAF8] rounded-xl font-semibold text-base text-[#324054] px-4 py-3  ">
            Recruiter
          </span>
        </div>
        <div className="w-[15rem] h-[15rem]  rounded-full bg-gray-400">
          <Image src={ImageSkleton} className=" object-cover w-full h-full" />
        </div>
        <div></div>
      </div>
    </AdminDashBoardLayout>
  );
}
