"use client"
import Slider from '@mui/material/Slider';
import { FormControlLabel, FormGroup, PaginationItem } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
export default function Filters({ onClick, isFilterShown, mobileFilter }) {
    const [value, setValue] = useState([0, 100000]);
    // Location checkbox
    const [malaysia, setMalaysia] = useState(false)
    const [dubai, setDubai] = useState(false)
    const [saudi, setSaudi] = useState(false)
    const [bharain, setBharain] = useState(false)

    // Sector Checkbox
    const [it, setIt] = useState(false)
    const [finance, setFinance] = useState(false)
    const [marketing, setMarketing] = useState(false)
    const [customerSupp, setCustomerSupp] = useState(false)
    const [manufacture, setManufacture] = useState(false)
    const [hr, setHr] = useState(false)
    const [others, setOthers] = useState(false)

    // Experience Checkbox
    const [lessTwo, setLessTwo] = useState(false)
    const [twoFour, setLessTwoFour] = useState(false)
    const [fourSix, setFourSix] = useState(false)
    const [six, setSix] = useState(false)

    //Handle value Change made to the range slide
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    //Handles the Reset filter button
    //Clears all the checked options
    const handleReset = () => {
        setMalaysia(false)
        setDubai(false)
        setBharain(false)
        setSaudi(false)
        setIt(false)
        setFinance(false)
        setMarketing(false)
        setManufacture(false)
        setHr(false)
        setCustomerSupp(false)
        setLessTwo(false)
        setLessTwoFour(false)
        setFourSix(false)
        setSix(false)
        setOthers(false)

    }

    function valuetext(value) {
        return `$${value}`;
    }
    const MAX = 100000;
    const MIN = 0;

    return (
        <>
            {/* This is for mobile veiw only */}
            {mobileFilter &&  
            <div className={`flex gap-2 items-center my-3`}>
                <i className="bi bi-arrow-left text-lg"></i>
                <button className="underline text-center text-[#537FE7] font-semibold" onClick={() => onClick()}> Hide Filters</button>
             
            </div> 
            }
            {/* End of mobile view */}


            <div className={`flex items-center ${isFilterShown ? 'justify-between': 'justify-center' }`}>
                {isFilterShown ? 
                <> 
                    <h3 className="text-[24px] font-bold">Filters</h3>
                    <button className="underline text-[#537FE7] font-semibold" onClick={handleReset}>Reset All</button>
                </> : <i className="bi bi-sliders2-vertical text-xl bg-white rounded py-1 px-2 font-bold border-2 border-black"></i>}

            </div>

            <div className={`${mobileFilter ? "hidden":"flex"} justify-center`}>
                <button className="underline mt-4 text-center text-[#537FE7] font-semibold" onClick={() => onClick()}>{isFilterShown ? 'Hide' : 'Show'} Filters</button>
            </div>
            {
                isFilterShown && (
                    <>
                        <hr className='mt-4'></hr>
                        <div className='mt-6 px-4'>
                            <h3 className='text-xl font-bold'>Base Salary Range</h3>
                            <Slider
                                value={value}
                                onChange={handleChange}
                                valueLabelDisplay="on"
                                getAriaValueText={valuetext}
                                valueLabelFormat={valuetext}
                                className='text-human-green mt-10'
                                min={MIN}
                                max={MAX}
                            />
                        </div>
                        <hr className='mt-4'></hr>

                        <div className='mt-6'>
                            <h3 className='text-xl font-bold'>Location</h3>
                            <FormGroup className={`my-4`}>
                                <FormControlLabel control={<Checkbox checked={dubai} onChange={(event) => setDubai(event.target.checked)} />} label="Dubai" />
                                <FormControlLabel control={<Checkbox checked={malaysia} onChange={(event) => setMalaysia(event.target.checked)} />} label="Malaysia" />
                                <FormControlLabel control={<Checkbox checked={saudi} onChange={(event) => setSaudi(event.target.checked)} />} label="Saudi Arabia" />
                                <FormControlLabel control={<Checkbox checked={bharain} onChange={(event) => setBharain(event.target.checked)} />} label="Bahrain" />
                            </FormGroup>
                        </div>

                        <hr className='mt-4'></hr>

                        <div className='mt-6'>
                            <h3 className='text-xl font-bold'>Sector</h3>
                            <FormGroup className={`my-4`}>
                                <FormControlLabel control={<Checkbox checked={it} onChange={(event) => setIt(event.target.checked)} />} label="Information Technology" />
                                <FormControlLabel control={<Checkbox checked={finance} onChange={(event) => setFinance(event.target.checked)} />} label="Finance and Accounting" />
                                <FormControlLabel control={<Checkbox checked={marketing} onChange={(event) => setMarketing(event.target.checked)} />} label="Marketing" />
                                <FormControlLabel control={<Checkbox checked={customerSupp} onChange={(event) => setCustomerSupp(event.target.checked)} />} label="Customer Support" />
                                <FormControlLabel control={<Checkbox checked={manufacture} onChange={(event) => setManufacture(event.target.checked)} />} label="Manufacturing" />
                                <FormControlLabel control={<Checkbox checked={hr} onChange={(event) => setHr(event.target.checked)} />} label="Human Resources" />
                                <FormControlLabel control={<Checkbox checked={others} onChange={(event) => setOthers(event.target.checked)} />} label="Others" />
                            </FormGroup>
                        </div>

                        <hr className='mt-4'></hr>

                        <div className='mt-6'>
                            <h3 className='text-xl font-bold'>Experience</h3>
                            <FormGroup className={`my-4`}>
                                <FormControlLabel control={<Checkbox checked={lessTwo} onChange={(event) => setLessTwo(event.target.checked)} />} label="<2 years" />
                                <FormControlLabel control={<Checkbox checked={twoFour} onChange={(event) => setLessTwoFour(event.target.checked)} />} label="2-4 years" />
                                <FormControlLabel control={<Checkbox checked={fourSix} onChange={(event) => setFourSix(event.target.checked)} />} label="4-6 years" />
                                <FormControlLabel control={<Checkbox checked={six} onChange={(event) => setSix(event.target.checked)} />} label=">6 years" />
                            </FormGroup>
                        </div>
                    </>
                )

            }

        </>
    )
}