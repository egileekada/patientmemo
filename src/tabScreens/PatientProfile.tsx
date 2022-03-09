import React from 'react'

export default function PatientProfile() {
    return (
        <div className='p-8 w-full' >
            <div className='w-full flex items-center' >
                <div style={{backgroundColor: 'rgba(113, 35, 226, 0.08)'}} className='w-10 h-10 cursor-pointer rounded-full flex justify-center items-center' >
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 11L1 6L6 1" stroke="#7123E2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <p className='font-Ubuntu-Medium ml-3' >Patient’s Profile</p>
                <div className='ml-auto' > 
                    <button style={{backgroundColor: '#7123E2', borderRadius: '10px'}} className='py-2 w-32 text-white ml-4 text-sm' >Diagnose</button>
                </div>
            </div> 
            <div className='w-full flex items-center py-10 mt-8 rounded-lg bg-white px-14 ' >
                <div className='w-28 h-28 rounded-full bg-pink-300' >

                </div>
                <div className='ml-3' >
                    <p className='font-Ubuntu-Medium text-xl ' >Chiamaka Jane</p>
                    <p className='font-Ubuntu-Medium text-sm mt-2 ' style={{color: '#FF8811'}} >Status: Pregnant</p>
                </div>
                <div className='ml-auto' >
                    <div className='flex justify-end' >
                        <div className='w-10 h-10 mx-2 rounded-full bg-gray-400' >

                        </div>
                        <div className='w-10 h-10 mx-2 rounded-full bg-gray-400' >

                        </div>
                        <div className='w-10 h-10 ml-2 rounded-full bg-gray-400' >

                        </div>
                    </div>
                    <div className='flex items-center mt-6' >
                        <p style={{backgroundColor: '#F8FAFE', color: '#5F6777'}} className='rounded-md py-2 px-4 text-sm' >Proposed Delivery Date: 12, Jun 2022</p>
                        <p style={{backgroundColor: '#FAF6FF', color: '#7123E2'}} className='rounded-md py-2 px-4 text-sm ml-5' >Marital Status: 1Married</p>
                        <p style={{color: '#FF8811'}} className='rounded-md py-2 px-4 text-sm ml-5' >Marital Status: 1Married</p>
                    </div>
                </div>
            </div>
            <div className='w-full flex' > 
                <div className='bg-white mt-3 rounded-lg w-80 h-64 py-7 px-6' >
                    <p className='font-Ubuntu-Bold text-xl ' >Doctor</p>
                    <div className='mt-5 flex items-center' >
                        <div className='w-12 h-12 rounded-full bg-yellow-300' >

                        </div>
                        <div className='ml-2' >
                            <p className='font-Ubuntu-Medium text-sm ' >Jumoke Batmus</p>
                            <p className='font-Ubuntu-Regular text-xs ' style={{color: '#727272'}} >12:00pm, 12, Jun 2021</p>
                        </div>
                    </div>
                    <div className='mt-2 flex items-center' >
                        <div className='w-12 h-12 rounded-full bg-yellow-300' >

                        </div>
                        <div className='ml-2' >
                            <p className='font-Ubuntu-Medium text-sm ' >Jumoke Batmus</p>
                            <p className='font-Ubuntu-Regular text-xs ' style={{color: '#727272'}} >12:00pm, 12, Jun 2021</p>
                        </div>
                    </div>
                    <div className='mt-2 flex items-center' >
                        <div className='w-12 h-12 rounded-full bg-yellow-300' >

                        </div>
                        <div className='ml-2' >
                            <p className='font-Ubuntu-Medium text-sm ' >Jumoke Batmus</p>
                            <p className='font-Ubuntu-Regular text-xs ' style={{color: '#727272'}} >12:00pm, 12, Jun 2021</p>
                        </div>
                    </div>
                </div>
                <div className='bg-white mt-3 ml-3 rounded-lg flex flex-col flex-1 h-64 py-7 px-6' >
                    <p className='font-Ubuntu-Bold text-xl ' >Doctor’s Prescription</p>
                    <p className='font-Ubuntu-Regular text-sm mt-4 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices nunc porttitor lectus mi id sem vulputate eu velit. Sed ut vitae amet nibh ac sed arcu at. Tincidunt eu sit sit orci arcu sed tortor leo euismod. Pellentesque ultricies vitae aliquet sagittis rhoncus tincidunt auctor sed sed.</p>
                    <p className='font-Ubuntu-Regular text-sm mt-4 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices nunc porttitor lectus mi id sem vulputate eu velit. Sed ut vitae amet nibh ac sed arcu at. Tincidunt eu sit sit orci arcu sed tortor leo euismod. Pellentesque ultricies vitae aliquet sagittis rhoncus tincidunt auctor sed sed.</p>
                </div>
            </div>
            <div className='bg-white mt-3 mb-20 rounded-lg flex flex-col flex-1 py-7 px-6' >
                <p className='font-Ubuntu-Bold text-xl ' >Notes</p>
                <p className='font-Ubuntu-Regular text-sm mt-4 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices nunc porttitor lectus mi id sem vulputate eu velit. Sed ut vitae amet nibh ac sed arcu at. Tincidunt eu sit sit orci arcu sed tortor leo euismod. Pellentesque ultricies vitae aliquet sagittis rhoncus tincidunt auctor sed sed.</p>
                <p className='font-Ubuntu-Regular text-sm mt-4 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices nunc porttitor lectus mi id sem vulputate eu velit. Sed ut vitae amet nibh ac sed arcu at. Tincidunt eu sit sit orci arcu sed tortor leo euismod. Pellentesque ultricies vitae aliquet sagittis rhoncus tincidunt auctor sed sed.</p>
                <p className='font-Ubuntu-Regular text-sm mt-4 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices nunc porttitor lectus mi id sem vulputate eu velit. Sed ut vitae amet nibh ac sed arcu at. Tincidunt eu sit sit orci arcu sed tortor leo euismod. Pellentesque ultricies vitae aliquet sagittis rhoncus tincidunt auctor sed sed.</p>
            </div>
        </div>
    )
} 