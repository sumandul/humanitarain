import { useState } from "react";
import InputField from "../../../components/inputfield";
import Image from "next/image";
import ImageSkleton from "../../../../public/rect.png";
import AdminDashBoardLayout from "../../../components/DashBoardLayout";
import { HiMiniArrowUpTray } from "react-icons/hi2";
import { useForm } from "react-hook-form";
// import TextEditor from "../../../components/textEditor";
// import TextEditor from "@/components/textEditor";
import dynamic from "next/dynamic";

const TextEditor = dynamic(() => import("../../../components/textEditor"), {
  ssr: false, // Set ssr to false to only render on the client side
});

export default function Profile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);
  const [newOpen, setNewOpen] = useState({
    openingName: "",
    companyName: "",
    location: "",
    jobDescription: "",
  });
  const [image, setImage] = useState(null);
  const handlePanImageChange = (event) => {
    const file = event.target.files[0];
    const imageURL = URL.createObjectURL(file);
    setImage(imageURL);
    // const formData = new FormData();
    // formData.append("image", file);
    // setImage(formData);
  };
  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <AdminDashBoardLayout>
      <div className=" flex flex-col gap-20  ">
        <h3 className=" text-[32px] font-semibold">Add New Opening</h3>
        <div className="  grid grid-cols-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" flex flex-col gap-10">
              <div>
                <InputField
                  name={"openingName"}
                  className={"w-full py-3  border-[1px] border-[#000000]"}
                  label={"Opening Name"}
                  register={register}
                  errors={errors}
                  rules={{
                    required: true,
                    required: "This is required.",
                  }}
                  placeholder={"Eg: Call Center Executive"}
                />
              </div>
              <div>
                <InputField
                  name={"companyName"}
                  register={register}
                  errors={errors}
                  rules={{
                    required: true,
                    required: "This is required.",
                  }}
                  className={"w-full py-3  border-[1px] border-[#000000] "}
                  label={"Company Name"}
                  placeholder={"Eg. Netflix"}
                />
              </div>
              <div>
                <InputField
                  name={"location"}
                  register={register}
                  errors={errors}
                  rules={{
                    required: true,
                    required: "This is required.",
                  }}
                  className={"w-full py-3  border-[1px] border-[#000000] "}
                  label={"Location"}
                  placeholder={"Eg. Dubai"}
                />
              </div>
              <div>
                <TextEditor label={"Job Description"} />
              </div>
              <div>
                <InputField
                  name={"experience"}
                  register={register}
                  errors={errors}
                  rules={{
                    required: true,
                    required: "This is required.",
                  }}
                  className={"w-full py-3  border-[1px] border-[#000000] "}
                  label={"Experience (in Years)"}
                  placeholder={"Eg. 2"}
                />
              </div>
              <div>
                <InputField
                  name={"sector"}
                  register={register}
                  errors={errors}
                  rules={{
                    required: true,
                    required: "This is required.",
                  }}
                  className={"w-full py-3  border-[1px] border-[#000000] "}
                  label={"Sector"}
                  placeholder={"Customer Support"}
                />
              </div>
              <div>
                <InputField
                  name={"salary"}
                  register={register}
                  errors={errors}
                  rules={{
                    required: true,
                    required: "This is required.",
                  }}
                  className={"w-full py-3  border-[1px] border-[#000000] "}
                  label={"Base Salary (in USD, per month)"}
                  placeholder={"Eg. 10000"}
                />
              </div>
              <div className=" flex justify-end">
                <button className="bg-human-green text-white py-3 px-6 rounded-3xl">
                  Submit
                </button>
              </div>
            </div>
          </form>
          <div className="  flex justify-center   ">
            <div>
              <span className=" text-[#232321] text-[20px]  font-semibold">
                {" "}
                Upload Company Logo
              </span>
              <div className=" ml-8 w-[160px] h-[160px] my-4 ">
                <Image
                  width={300}
                  height={400}
                  src={image ? image : ImageSkleton}
                  className=" w-full h-full object-cover"
                />
              </div>
              <div>
                <label htmlFor="pan">
                  <div className="   ">
                    <div className=" flex gap-3 text-base font-normal">
                      <span className=" text-zapp-light_black flex">
                        <HiMiniArrowUpTray />
                      </span>
                      <p>
                        {" "}
                        Choose File (optional)
                        <p className=" text-human-red">
                          File size must not exceed 2 MB
                        </p>
                      </p>
                    </div>
                    <input
                      id="pan"
                      type="file"
                      name="pan_image"
                      onChange={handlePanImageChange}
                      className="py-3  hidden  w-[300px]"
                    />
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminDashBoardLayout>
  );
}
