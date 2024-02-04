"use client"

import { useState } from "react"

const FAQCard = ({question, answer}) =>{
    const [isClicked, setIsClicked] = useState(false)

    const clickHandler = () =>{
        setIsClicked(!isClicked)
    }
    return(
        <div className={`p-4 rounded-2xl py-5 sm:py-10 px-6 sm:px-12 mt-10 ${isClicked ? "border-2 border-[#2DD4BF]":" shadow-lg"}`}>
        <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">{question}</h3>

        <div className={`rounded-full py-3 px-4 flex items-center text-xl justify-center cursor-pointer ${isClicked ? 'bg-[#2DD4BF] text-white':'shadow-lg text-[#2DD4BF]'}`} onClick={clickHandler}>
         
          {isClicked ?  <i className="bi bi-caret-down-fill"></i> :<i className="bi bi-caret-right-fill"></i>}
        </div>
        </div>
        {isClicked && <div className="flex">
        <p className="mt-2 text-lg basis-3/4">{answer}</p>

        </div>
        }
        
      </div>
    )
}

export default FAQCard