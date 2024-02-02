// ... (other imports)

// ... (other imports)
import { classNames } from "../../helper/classNames";

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
      </div>
    </>
  );
};

export default Table;
