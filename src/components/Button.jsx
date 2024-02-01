import {  Roboto } from "next/font/google";
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export default function Button({className, text, icon}){
    return(
        <button className={`${className} ${roboto.className} flex gap-4 items-center justify-center`}><p>{text}</p> {icon && <i className="bi bi-arrow-right-short"></i>}</button>
    )
}