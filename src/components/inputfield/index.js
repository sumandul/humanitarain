import React, { useState } from "react";
import PropTypes from "prop-types";
<<<<<<< HEAD
<<<<<<< HEAD
import { classNames } from "../../helper/classNames";
=======
import { classNames } from "../helpers/classNames";
>>>>>>> 085b5a4 (update)
=======
import { classNames } from "../../helper/classNames";
>>>>>>> c4272b6 (update)
import { HiEye, HiEyeOff } from "react-icons/hi";

const InputField = ({
  className,
  label,
  name,
  placeholder,
  value,
  type,
  icon,
  onChange,
  register,
  disabled,
  rules,
  onClick,
  errors,
  ...props
}) => {
  const currentDate = new Date().toISOString().split("T")[0];
  const [showPassword, SetShowPassword] = useState(false);
<<<<<<< HEAD
<<<<<<< HEAD
  console.log(name);
  return (
    <div>
      {label && (
        <label className="block capitalize text-sm sm:text-[20px] mb-4     text-[#232321]  font-semibold ">
=======
  return (
    <div>
      {label && (
        <label className="block capitalize text-sm sm:text-base mb-2     text-zapp-light_black  font-semibold ">
>>>>>>> 085b5a4 (update)
=======
  console.log(name);
  return (
    <div>
      {label && (
        <label className="block capitalize text-sm sm:text-[20px] mb-4     text-[#232321]  font-semibold ">
>>>>>>> c4272b6 (update)
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={showPassword ? "text" : type}
          className={classNames(
<<<<<<< HEAD
<<<<<<< HEAD
            "px-3     text-[0.8rem]  sm:text-base       bg-zapp-white  accent-zapp-primary border-[0.05rem]   focus: outline-zapp-primary   border-zapp-gray_500 rounded-[5px]   ",
=======
            "px-3     text-[0.8rem]  sm:text-base      w-full  bg-zapp-white  accent-zapp-primary border-[0.05rem]   focus: outline-zapp-primary   border-zapp-gray_500 rounded-[1rem]   ",
>>>>>>> 085b5a4 (update)
=======
            "px-3     text-[0.8rem]  sm:text-base       bg-zapp-white  accent-zapp-primary border-[0.05rem]   focus: outline-zapp-primary   border-zapp-gray_500 rounded-[5px]   ",
>>>>>>> c4272b6 (update)
            className
          )}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          onClick={onClick}
<<<<<<< HEAD
<<<<<<< HEAD
=======
          max={currentDate}
>>>>>>> 085b5a4 (update)
=======
>>>>>>> c4272b6 (update)
          {...props}
          {...(register && register(name, rules))}
        />

        {icon && (
          <span className=" left-4 top-4  h-full absolute  text-zapp-black   opacity-60 text-[1.4rem] ">
            {icon}
          </span>
        )}
        {name === "password" && (
          <div
            className=" text-zapp-primary absolute right-4 top-4"
            onClick={() => SetShowPassword(!showPassword)}
          >
            {showPassword ? <HiEye /> : <HiEyeOff />}
          </div>
        )}
      </div>

      {errors && (
<<<<<<< HEAD
<<<<<<< HEAD
        <p className=" text-sm    text-red-500  font-light  capitalize ">
=======
        <p className=" text-sm   text-zapp-primary  font-light  capitalize ">
>>>>>>> 085b5a4 (update)
=======
        <p className=" text-sm    text-red-500  font-light  capitalize ">
>>>>>>> c4272b6 (update)
          {errors[name]?.message}
        </p>
      )}
    </div>
  );
};
InputField.defaultProps = {
  type: "text",
};
InputField.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf([
    "text",
    "password",
    "file",
    "number",
    "date",
    "checkbox",
    "radio",
    "email",
    "month",
    "range",
    "color",
    "datetime-local",
  ]),
};

export default InputField;
