import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ManageAppointment() {
    
    const navigate = useNavigate()
    const [tab, setTab] = React.useState(0)

    return (
        <div className='w-full h-full ' >
            <div className='w-full px-12 border-b flex items-center border-[#D7D0DF]' > 
                <div onClick={()=> navigate('/dashboard')} className='w-10 h-10 rounded-full cursor-pointer flex items-center justify-center bg-[#7123E214]' >
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 11L1 6L6 1" stroke="#7123E2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <p className='font-Ubuntu-Medium text-lg ml-3 mr-20' >Manage Visitations/Appointment</p> 
                <div onClick={()=> setTab(0)} className={tab === 0 ? 'flex items-center pb-7 pt-8 cursor-pointer mx-3 border-b-2 border-[#7123E2]  ': 'flex items-center pb-7 pt-8  cursor-pointer mx-3 border-b-2 border-transparent '} > 
                    <p className={tab === 0 ? 'font-Ubuntu-Medium px-2 text-xs text-[#7123E2]': 'font-Ubuntu-Medium px-2 text-xs text-[#817D83]'} >Unattended to</p>
                </div>
                <div onClick={()=> setTab(1)} className={tab === 1 ? 'flex items-center pb-7 pt-8  ml-4 cursor-pointer mx-3 border-b-2 border-[#7123E2] ': 'flex items-center ml-4 pb-7 pt-8  cursor-pointer mx-3 border-b-2 border-transparent '} > 
                    <p className={tab === 1 ? 'font-Ubuntu-Medium px-2 text-xs text-[#7123E2]': 'font-Ubuntu-Medium px-2 text-xs text-[#817D83]'} >Attended to/History</p>
                </div>
                <button className='font-Ubuntu-Medium text-xs bg-[#7123E2] text-white rounded-lg py-3 px-6 ml-auto ' >Add to List</button>
            </div>
            <div className='w-full h-full' >
                {tab === 0 ?  
                    <div className='w-full grid grid-cols-4 gap-6 py-12 px-8' > 
                        <div className=' px-3 flex items-center' > 
                            <div className='w-8 h-8 rounded-full flex bg-[#7123E214] justify-center items-center' >
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.99967 8.85179C9.53054 8.85179 11.6663 9.26304 11.6663 10.8497C11.6663 12.437 9.51653 12.8337 6.99967 12.8337C4.46939 12.8337 2.33301 12.4224 2.33301 10.8357C2.33301 9.24846 4.48281 8.85179 6.99967 8.85179ZM6.99967 1.16699C8.71415 1.16699 10.0878 2.54017 10.0878 4.25344C10.0878 5.96671 8.71415 7.34047 6.99967 7.34047C5.28578 7.34047 3.91152 5.96671 3.91152 4.25344C3.91152 2.54017 5.28578 1.16699 6.99967 1.16699Z" fill="#7123E2"/>
                                </svg>
                            </div>
                            <div className='ml-3' > 
                                <p className='font-Ubuntu-Medium text-sm' >Abayomi Josephine</p>
                                <p className='font-Ubuntu-Regular text-[#5F6777] mt-1 text-xs' >12:00pm, 12, Jun 22</p>
                            </div>
                            <p className='font-Ubuntu-Medium text-[#7123E2] ml-auto text-xs'>2nd Position</p>
                        </div>
                    </div>
                : 
                    <div className='w-full grid grid-cols-4 gap-6 py-12 relative px-8' > 
                        <div className='px-3 flex items-center' > 
                            <div className='w-8 h-8 rounded-full flex bg-[#7123E214] justify-center items-center' >
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.99967 8.85179C9.53054 8.85179 11.6663 9.26304 11.6663 10.8497C11.6663 12.437 9.51653 12.8337 6.99967 12.8337C4.46939 12.8337 2.33301 12.4224 2.33301 10.8357C2.33301 9.24846 4.48281 8.85179 6.99967 8.85179ZM6.99967 1.16699C8.71415 1.16699 10.0878 2.54017 10.0878 4.25344C10.0878 5.96671 8.71415 7.34047 6.99967 7.34047C5.28578 7.34047 3.91152 5.96671 3.91152 4.25344C3.91152 2.54017 5.28578 1.16699 6.99967 1.16699Z" fill="#7123E2"/>
                                </svg>
                            </div>
                            <div className='ml-3' > 
                                <p className='font-Ubuntu-Medium text-sm' >Abayomi Josephine</p>
                                <p className='font-Ubuntu-Regular text-[#5F6777] mt-1 text-xs' >12:00pm, 12, Jun 22</p>
                            </div>
                            <p className='font-Ubuntu-Medium text-[#7123E2] ml-auto text-xs'>2nd Position</p>
                        </div>
                        <div style={{ boxShadow: '0px 3px 34px 0px #5F67771C'}} className=' absolute w-96 px-8 rounded-lg py-8 top-4 border border-[#E0E0E0] z-50 bg-white right-4  ' > 
                            <InputGroup >
                                <InputRightElement 
                                children={
                                    <svg className='cursor-pointer' width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 5L5 9L13 1" stroke="#7123E2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                }
                                />
                                <Input fontSize='xs' placeholder="Enter Patient name" border='0px' backgroundColor='#F6F7F9'  /> 
                            </InputGroup> 
                        </div>
                    </div>}
            </div>
        </div>
    )
} 