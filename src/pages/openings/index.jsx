"use client";

import Button from "../../components/Button";
// import openings from "../../../public/images/openings.png";
import Filters from "../../components/Filters";
import JobCard from "../../components/JobCard";
import data from "../../JsonDummy/JobData.json";
import React, { useState } from "react";
import JobDetailPanel from "../../components/JobDetailPanel";
export default function Openings() {
  const [panelData, setPanelData] = useState([]);
  const [isFilterShown, setIsFilterShown] = useState(true);
  const [isJobCardClicked, setIsJobCardClicked] = useState(false);
  const [showMobileFilters, setShowMobileFilter] = useState(false)

  const handleFilterDisplay = () => {
    setIsFilterShown(!isFilterShown);
  };
  const handleClick = (id) => {
    for (const i in data) {
      if (data[i].jobId === id) {
        setPanelData(data[i]);
        setIsJobCardClicked(true);
      }
    }
  };

  const handleMobileFilterClick = () => {
    setShowMobileFilter(!showMobileFilters)
  }
  const handlePanelClose = () => {
    setIsJobCardClicked(false);
  };

  return (

    showMobileFilters ?
      (
        <main  className="my-6">
          <div className="border-r-2 border-[#D9D9D9] pl-6 pr-8  block" >
            <Filters
              onClick={handleMobileFilterClick}
              isFilterShown={isFilterShown}
              mobileFilter = {showMobileFilters}
            />
          </div >
        </main >
      )
      :
      (
        <main className="mb-6">
          <section className="flex justify-center openings text-white py-14 px-12">
            <div className="text-center">
              <h1 className="font-extrabold text-3xl sm:text-6xl sm:leading-[70px]">
                Current Openings
              </h1>
              <p className="uppercase font-bold text-base sm:text-2xl tracking-wider mt-6">
                View a wide range of career possibilities with our curated list of
                Jobs
              </p>
              <div className="flex flex-col sm:flex-row gap-8 items-end sm:items-center mt-8">
                <div className="sm:basis-3/4 relative">
                  <i className="bi bi-search text-black absolute left-0 top-3 left-4 text-xl"></i>
                  <input
                    type="text"
                    placeholder="Job Title"
                    className="w-full py-4 px-16 text-black rounded-xl"
                  />
                </div>
                <div className='flex gap-2 items-center'>

                  <Button
                    text={"Search"}
                    icon={false}
                    className={
                      "rounded-full bg-human-green py-4 px-8 text-xl font-semibold"
                    }
                  />

                  <button className="text-black font-semibold sm:hidden" onClick={handleMobileFilterClick}><i className="bi bi-sliders2-vertical text-xl bg-white rounded py-1 px-2 font-bold border-2 border-black"></i></button>
                </div>
              </div>
            </div>
          </section>

          <section
            className={`grid px-8 sm:pl-20 sm:pr-12 mt-16 gap-6 ${isJobCardClicked && isFilterShown && "grid-rows-1 sm:grid-cols-[315px_1fr_330px]"
              }  ${!isFilterShown && isJobCardClicked && "grid-rows-1 sm:grid-cols-[150px_1fr_330px]"
              } ${isFilterShown && !isJobCardClicked && "grid-rows-1 sm:grid-cols-[315px_1fr]"} ${!isFilterShown && !isJobCardClicked && "grid-rows-1 sm:grid-cols-[150px_1fr]"
              }`}
          >
            {/* Filters */}
            <div className="border-r-2 border-[#D9D9D9] pl-6 pr-8 hidden sm:block">
              <Filters
                onClick={handleFilterDisplay}
                isFilterShown={isFilterShown}
              />
            </div>

            {/* Job Cards */}
            <div className="sm:border-r-2 sm:border-[#D9D9D9] sm:pr-8">
              <div className="flex justify-between items-center">
                <h3 className="text-[24px] font-bold">Search Results</h3>
                <p className="text-[#8C8CB0] font-light">
                  {data?.length} results found
                </p>
              </div>
              <div
                className={`grid ${isJobCardClicked ? "sm:grid-cols-2" : "sm:grid-cols-3"
                  } gap-8 mt-10`}
              >
                {data.map((data) => {
                  return (
                    <JobCard
                      key={data.jobId}
                      id={data.jobId}
                      title={data.title}
                      company={data.company}
                      country={data.country}
                      yoe={data.yoe}
                      sector={data.sector}
                      date={data.date}
                      urgency={data.urgency}
                      salary={data.salary}
                      onClick={handleClick}
                      isJobCardClicked={isJobCardClicked}
                      panelId={panelData?.jobId}
                    />
                  );
                })}
              </div>
            </div>

            {/* Job Description */}
            {isJobCardClicked && panelData && (
              <JobDetailPanel
                onClick={handlePanelClose}
                id={panelData.jobId}
                logo={panelData.logo}
                title={panelData.title}
                company={panelData.company}
                country={panelData.country}
                city={panelData.city}
                yoe={panelData.yoe}
                sector={panelData.sector}
                date={panelData.date}
                urgency={panelData.urgency}
                salary={panelData.salary}
                numOfApp={panelData.numofApp}
                desc={panelData.desc}
              />
            )}
          </section>
        </main>
      )


  );
}
