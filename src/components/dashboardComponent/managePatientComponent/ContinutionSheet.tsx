import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ContinutionSheet() {
    
    const navigate = useNavigate()

    return (
        <div className='w-full h-full px-16  ' >
            <div className='w-full py-8 flex items-center' > 
                {/* <div onClick={()=> navigate('/dashboard')} className='w-10 h-10 rounded-full cursor-pointer flex items-center justify-center bg-[#7123E214]' >
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 11L1 6L6 1" stroke="#7123E2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div> */}
                <div > 
                    <p className='font-Ubuntu-Medium text-lg' >Continuation Sheets for Adeyoni Josephine</p>
                    <p className='font-Ubuntu-Regular text-sm' >12:00PM, 24, Jun 2021 - 12:00PM, 24, Jun 2022</p>
                </div>
                <button className='py-2 text-[#7123E2] border-[#7123E2] rounded-md px-4 border text-xs ml-auto font-Ubuntu-Medium  ' >Update Patient</button>
            </div>
            <div className='w-full grid grid-cols-3 gap-6 py-6 ' >
                <div className='w-full h-52' >
                    <div className='w-full h-40 bg-yellow-300' >

                    </div>
                    <div className='mt-6 px-3 flex items-center' > 
                        <div className='w-8 h-8 rounded-full flex bg-[#7123E214] justify-center items-center' >
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.99967 8.85179C9.53054 8.85179 11.6663 9.26304 11.6663 10.8497C11.6663 12.437 9.51653 12.8337 6.99967 12.8337C4.46939 12.8337 2.33301 12.4224 2.33301 10.8357C2.33301 9.24846 4.48281 8.85179 6.99967 8.85179ZM6.99967 1.16699C8.71415 1.16699 10.0878 2.54017 10.0878 4.25344C10.0878 5.96671 8.71415 7.34047 6.99967 7.34047C5.28578 7.34047 3.91152 5.96671 3.91152 4.25344C3.91152 2.54017 5.28578 1.16699 6.99967 1.16699Z" fill="#7123E2"/>
                            </svg>
                        </div>
                        <div className='ml-3' > 
                            <p className='font-Ubuntu-Medium text-sm' >Dr. Emmanuel Joesph</p>
                            <p className='font-Ubuntu-Regular text-[#5F6777] mt-1 text-xs' >12:00pm, 12, Jun 22</p>
                        </div>
                        <p className='font-Ubuntu-Regular text-[#5F6777] ml-auto text-xs'>No Request</p>
                    </div>
                </div>
            </div>
        </div>
    )
} 