"use client"
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import logo from "../../../public/images/footerLogo.png"
import Image from "next/image";
import defaultprofile from "../../../public/images/defaultprofile.png"
import Link from "next/link";
import { useEffect, useState } from 'react';
import { OutlinedInput } from '@mui/material';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export default function SignInUser() {
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
    const [isNextClicked, setIsNextClicked] = useState(false)

    const [country, setCountry] = useState('');

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    };


    const handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.files[0]);
        setSelectedFile(e.target.files[0]);
    }

    const handleNextClick = (e) => {
        e.preventDefault();
        setIsNextClicked(true)
    }

    const handleRegisterClick = (e) => {
        e.preventDefault();
    }
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])
    return (
        <main className="signin grid">
           
            <section className="sm:place-self-center grid bg-white sm:rounded-xl  text-center sm:w-[30%] py-8 sm:my-10">
                <Link href="/signin" className='place-self-start pl-6'><i className="bi bi-arrow-left text-2xl text-left"></i></Link>
                <div className="flex justify-center">

                    <Image src={logo} alt="logo" />
                </div>
                <h1 className="text-3xl font-bold my-3">Register as Recruiter</h1>
                <div className="flex gap-2 justify-center items-center mt-4">
                    <div className={`rounded-2xl ${isNextClicked ? 'bg-[#D9D9D9]': 'bg-[#4FD1C5]'} w-[33px] h-[6px]`}></div>
                    <div className={`rounded-2xl ${isNextClicked ?'bg-[#4FD1C5]' : 'bg-[#D9D9D9]'}  w-[33px] h-[6px]`}></div>
                </div>
                <form className="px-14 mt-4">
                    {
                        isNextClicked ?
                            <>
                                <FormControl fullWidth>
                               
                                    
                                    <Select
                                        placeholder='Select Country'

                                        value={country}
                                        label="country"
                                        onChange={handleCountryChange}
                                        input={<OutlinedInput />}
                                       
                                    >
                                        <MenuItem value={10}>Dubai</MenuItem>
                                        <MenuItem value={20}>Saudi</MenuItem>
                                        <MenuItem value={30}>Bharain</MenuItem>
                                    </Select>
                                </FormControl>

                                <div className="flex flex-col gap-2 items-start mt-4">
                                    <label>Company Name*</label>
                                    <input type="text" required className="rounded-xl border-2 border-[#E2E8F0] py-2 px-6 w-full" />
                                </div>

                                <div className="flex flex-col gap-2 items-start mt-4">
                                    <label>Official Website*</label>
                                    <input type="text" required className="rounded-xl border-2 border-[#E2E8F0] py-2 px-6 w-full" />
                                </div>

                                <div className="flex flex-col gap-2 items-start mt-4">
                                    <label>Official Email Address (for query)*</label>
                                    <input type="text" required className="rounded-xl border-2 border-[#E2E8F0] py-2 px-6 w-full" />
                                </div>

                            </>
                            :
                            <>
                                <div className="flex flex-col items-center gap-4 mt-2">
                                    <div className='w-[101px] h-[71px]'>
                                        {
                                            selectedFile ? <img src={preview} className='w-full h-full object-contain' /> : <Image src={defaultprofile} alt="photo" className='w-full h-full object-contain' />
                                        }
                                    </div>

                                    <div>

                                        <Button component="label" variant="contained" sx={{ backgroundColor: '#49C199', color: 'white', textTransform: "capitalize", border: "1px solid #475569", width: "max-content" }}>
                                            Upload Image
                                            <VisuallyHiddenInput type="file" onChange={handleChange} />
                                        </Button>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 items-start">
                                    <label>Email*</label>
                                    <input type="email" required className="rounded-xl border-2 border-[#E2E8F0] py-2 px-6 w-full" />
                                </div>

                                <div className="flex flex-col gap-2 items-start">
                                    <label>Full Name*</label>
                                    <input type="text" required className="rounded-xl border-2 border-[#E2E8F0] py-2 px-6 w-full" />
                                </div>

                                <div className="flex flex-col gap-2 items-start mt-4">
                                    <label>Password*</label>
                                    <input type="password" required className="rounded-xl border-2 border-[#E2E8F0] py-2 px-6 w-full" />
                                </div>

                                <div className="flex flex-col gap-2 items-start mt-4">
                                    <label>Confirm Password*</label>
                                    <input type="password" required className="rounded-xl border-2 border-[#E2E8F0] py-2 px-6 w-full" />
                                </div>
                            </>
                    }



                    {
                        isNextClicked ? <button className="uppercase bg-[#49C199] font-bold text-white rounded-xl py-3 px-6 w-full mt-6" onClick={handleRegisterClick}>Register</button> : <button className="uppercase bg-[#49C199] font-bold text-white rounded-xl py-3 px-6 w-full mt-6" onClick={handleNextClick}>Next</button>
                    }

                </form>

            </section>
        </main>
    )
}