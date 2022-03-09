import React from 'react'
import CalenderComponent from '../components/CalenderComponent'

export default function Doctor() {
    return (
        <div className='p-8 w-full' >
            <div className='w-full flex items-center' >
                <div style={{backgroundColor: 'rgba(113, 35, 226, 0.08)'}} className='w-10 h-10 cursor-pointer rounded-full flex justify-center items-center' >
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 11L1 6L6 1" stroke="#7123E2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <p className='font-Ubuntu-Medium ml-3' >Schedule</p>
                <div className='ml-auto' >
                    <button style={{border: '1px solid #7123E2', borderRadius: '10px'}} className='py-2 w-32 text-sm' >Patients</button>
                    <button style={{backgroundColor: '#7123E2', borderRadius: '10px'}} className='py-2 w-32 text-white ml-4 text-sm' >Prescribe Drug</button>
                </div>
            </div> 
            <div className='mt-12 mb-28 ' >
                <CalenderComponent />
            </div>
        </div>
    )
}
