import Link from "next/link";
import { FaRegCircleUser } from "react-icons/fa6";

export default function AdminDashBoardLayout({ children }) {
  const sideMenu = [
    {
      title: "profile",
      path: "/admin/profile",
      icon: <FaRegCircleUser />,
    },
    {
      title: "Add New Opening",
      path: "/new",
      icon: <FaRegCircleUser />,
    },
    {
      title: "Edit Opening Details",
      path: "/profile",
      icon: <FaRegCircleUser />,
    },
    {
      title: "Applicants",
      path: "/profile",
      icon: <FaRegCircleUser />,
    },
  ];
  return (
    <div className=" flex  min-h-screen">
      <div className=" basis-[20%]  pt-10 border-r-2   border-[#CCC5FA] flex justify-center  ">
        <div>
          <ul className=" flex flex-col gap-3">
            {sideMenu.map((item) => (
              <Link href={`${item.path}`}>
                <li className=" flex items-center gap-2">
                  {item.icon} {item.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className=" basis-[80%] p-20 ">{children}</div>
    </div>
  );
}
