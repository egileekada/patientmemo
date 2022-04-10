import React from 'react'
import { useNavigate } from 'react-router-dom'
import DoctorRequest from './makingRequestComponent/DoctorRequest'

export default function MakingRequest() {
    
    const navigate = useNavigate() 
    const [tab, setTab] = React.useState(1)
    const [showModal, setShowModal] = React.useState(false)

    return (
        <div className='w-full h-full ' >
            <div className='w-full px-16 py-5 border-b border-[#D7D0DF]  flex items-center' > 
                <div onClick={()=> navigate('/dashboard')} className='w-10 h-10 rounded-full cursor-pointer flex items-center justify-center bg-[#7123E214]' >
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 11L1 6L6 1" stroke="#7123E2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div > 
                    <p className='font-Ubuntu-Medium text-lg ml-3' >Register New Patients</p>
                    {/* <p className='font-Ubuntu-Regular text-sm' >12:00PM, 24, Jun 2021 - 12:00PM, 24, Jun 2022</p> */}
                </div>  
                {/* <div className='mx-auto flex' >
                    <div onClick={()=> setTab(0)} className={tab === 0 ? 'flex items-centercursor-pointer mx-3 border-b-2 border-[#7123E2]  ': 'flex items-center pb-7 pt-8  cursor-pointer mx-3 border-b-2 border-transparent '} > 
                        <p className={tab === 0 ? 'font-Ubuntu-Medium px-2 text-xs text-[#7123E2]': 'font-Ubuntu-Medium px-2 text-xs text-[#817D83]'} >Sheets</p>
                    </div>
                    <div onClick={()=> setTab(1)} className={tab === 1 ? 'flex items-center pb-7 pt-8  ml-4 cursor-pointer mx-3 border-b-2 border-[#7123E2] ': 'flex items-center ml-4 pb-7 pt-8  cursor-pointer mx-3 border-b-2 border-transparent '} > 
                        <p className={tab === 1 ? 'font-Ubuntu-Medium px-2 text-xs text-[#7123E2]': 'font-Ubuntu-Medium px-2 text-xs text-[#817D83]'} >Requests</p>
                    </div>
                </div> */}
                <button onClick={()=> setShowModal(true)} className='font-Ubuntu-Medium text-xs bg-[#7123E2] text-white rounded-lg py-3 px-6 ml-auto ' >Make Request</button> 
            </div> 
            <div className='w-full px-16 relative' >
                {tab === 1 ?
                    <DoctorRequest />
                :null}

                {showModal ? 
                    <div style={{ boxShadow: '0px 3px 34px 0px #5F67771C'}} className=' flex flex-col  font-Ubuntu-Regular absolute w-auto h-auto px-4 rounded-lg py-8 top-4 border border-[#E0E0E0] z-50 bg-white right-4  ' >
                        
                        <p onClick={()=> setShowModal(false)} className='text-sm font-Ubuntu-Medium text-[#7123E2] mb-6 ml-auto cursor-pointer mr-6 ' >close</p>
                        <div className=' grid grid-cols-3 font-Ubuntu-Medium' >
                            <div className='w-48 mx-4 rounded-md' >
                                <div className='w-full rounded-md h-64 bg-yellow-300' >

                                </div>
                                <p className='text-sm text-[#363E4B] mt-2 ' >Labouratory Request</p>
                            </div>
                            <div className='w-48 mx-4 rounded-md' >
                                <div className='w-full rounded-md h-64 bg-yellow-300' >

                                </div>
                                <p className='text-sm text-[#363E4B] mt-2 ' >Labouratory Request</p>
                            </div>
                            <div className='w-48 mx-4 rounded-md' >
                                <div className='w-full rounded-md h-64 bg-yellow-300' >

                                </div>
                                <p className='text-sm text-[#363E4B] mt-2 ' >Labouratory Request</p>
                            </div>
                        </div>
                    </div>
                :null}
            </div>

        </div>
    )
} 