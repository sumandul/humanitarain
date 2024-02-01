"use client"

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useState } from 'react';



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

export default function JobForm() {

    const [selectedFile, setSelectedFile] = useState()
    const handleChange = (e) =>{
        e.preventDefault();
       setSelectedFile(e.target.files[0]);
    }
   
    return (
        <form>
            <div className="flex flex-col gap-4 mt-4">
                <div className="flex gap-4 font-bold">
                    <i className="bi bi-upload"></i>
                    <h3 className=''>Upload Your CV*</h3>
                </div>

                <Button component="label" variant="contained" sx={{ backgroundColor: '#F8FAFC', color: 'black', textTransform: "capitalize", border: "1px solid #475569", width: "max-content" }}>
                    Browse Files
                    <VisuallyHiddenInput type="file" onChange={handleChange}/>
                </Button>
                {selectedFile && selectedFile.name}
                <input type="text" placeholder="Name*" required className="rounded-lg border-2 border-[#00000033] py-2 px-4" />

                <input type="email" placeholder="Email*" required className="rounded-lg border-2 border-[#00000033] py-2 px-4" />

                <input type="phone" placeholder="Phone Number*" required className="rounded-lg border-2 border-[#00000033] py-2 px-4" />
            </div>
            <div className="mt-6 flex justify-end">
                <button className={"font-semibold bg-[#047857] text-white py-2 px-8 rounded-3xl"}>Submit Application</button>
            </div>

        </form>
    )
}