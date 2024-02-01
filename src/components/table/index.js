<<<<<<< HEAD
import React from "react";

import { classNames } from "../../helper/classNames";
=======
// ... (other imports)

// ... (other imports)
import { classNames } from "@/helper/classNames";
>>>>>>> c4272b6 (update)

const Table = ({
  columns,
  data,
  pages,
  currentPage,
  limit,
  message,
  className,
}) => {
  const getCellValue = (row, selector) => {
    return selector(row);
  };
<<<<<<< HEAD
  return (
    <>
      <div className=" pb-20 overflow-x-auto sm:overflow-y-hidden    ">
        <table
          className={classNames(" bg-zapp-white  rounded-md  ", className)}
        >
          <thead className="  ">
            <tr className="border-b-[0.0625rem]   border-zapp-gray_500">
              {columns?.map((column, index) => {
                return (
                  <>
                    <th
                      className={` text-start py-4 px-2   ${
                        index === 0 && " "
                      }  uppercase   text-[20px] font-[700]`}
                      key={index}
                    >
                      {column.header}
                    </th>
                  </>
                );
              })}
            </tr>
          </thead>
          {data?.length > 0 ? (
            <tbody>
              {data?.map((row, rowIndex) => {
                return (
                  <tr
                    key={rowIndex}
                    className="border-b-[0.0625rem]  rounded-lg   border-zapp-gray_500"
                  >
                    {columns?.map((column, columnIndex) => {
                      return (
                        <>
                          <td
                            key={columnIndex}
                            className=" text-[0.8rem] py-4 pr-5"
                          >
                            {getCellValue(row, column.selector)}
                          </td>
                        </>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          ) : (
            ""
          )}
        </table>
=======

  return (
    <>
      <div className="pb-20 overflow-x-auto sm:overflow-y-hidden">
        <table
          className={classNames(
            "border-[3px] border-[#6E6E9B] rounded-xl overflow-hidden  ",
            className
          )}
        >
          <thead className="">
            <tr className="">
              {columns?.map((column, index) => (
                <th
                  className={`text-start py-4 px-2  ${
                    index === 0 ? "" : " " // This condition might not be necessary
                  } uppercase font-semibold text-[0.7rem] `} // Add rounded-xl here
                  key={index}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          {/* ... (rest of the code) */}
        </table>
        {/* ... (rest of the code) */}
>>>>>>> c4272b6 (update)
      </div>
    </>
  );
};

export default Table;
