import { Input, Select } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function PatientFile() {
    
    const navigate = useNavigate()
    const [access, setAccess] = React.useState(false)
    const [tab, setTab] = React.useState(0)
    
    return (
        <div className='w-full' >
            <div className='w-full flex px-12 py-3 items-center ' >
                <div onClick={()=> navigate('/dashboard')} className='w-10 h-10 rounded-full cursor-pointer flex items-center justify-center bg-[#7123E214]' >
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 11L1 6L6 1" stroke="#7123E2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <p className='font-Ubuntu-Medium ml-3' >Patient File</p>  
            </div>
            <div className='w-full flex justify-center border-t border-b border-[#D7D0DF]' >
                <div className='mx-auto flex ' > 
                    <div onClick={()=> setTab(0)} className={tab === 0 ? 'flex items-center pb-5 pt-6 cursor-pointer mx-2 border-b-2 border-[#7123E2] ': 'flex items-center pb-5 pt-6 cursor-pointer mx-2 border-b-2 border-transparent '} > 
                        <p className={tab === 0 ? 'font-Ubuntu-Medium px-1 text-xs text-[#7123E2]': 'font-Ubuntu-Medium px-1 text-xs text-[#817D83]'} >Bio</p>
                    </div> 
                    <div onClick={()=> setTab(1)} className={tab === 1 ? 'flex items-center pb-5 pt-6 cursor-pointer mx-2 border-b-2 border-[#7123E2] ': 'flex items-center pb-5 pt-6 cursor-pointer mx-2 border-b-2 border-transparent '} > 
                        <p className={tab === 1 ? 'font-Ubuntu-Medium px-1 text-xs text-[#7123E2]': 'font-Ubuntu-Medium px-1 text-xs text-[#817D83]'} >Delivery Record</p>
                    </div> 
                    <div onClick={()=> setTab(2)} className={tab === 2 ? 'flex items-center pb-5 pt-6 cursor-pointer mx-2 border-b-2 border-[#7123E2] ': 'flex items-center pb-5 pt-6 cursor-pointer mx-2 border-b-2 border-transparent '} > 
                        <p className={tab === 2 ? 'font-Ubuntu-Medium px-1 text-xs text-[#7123E2]': 'font-Ubuntu-Medium px-1 text-xs text-[#817D83]'} >Medication Sheet</p>
                    </div> 
                    <div onClick={()=> setTab(3)} className={tab === 3 ? 'flex items-center pb-5 pt-6 cursor-pointer mx-2 border-b-2 border-[#7123E2] ': 'flex items-center pb-5 pt-6 cursor-pointer mx-2 border-b-2 border-transparent '} > 
                        <p className={tab === 3 ? 'font-Ubuntu-Medium px-1 text-xs text-[#7123E2]': 'font-Ubuntu-Medium px-1 text-xs text-[#817D83]'} >Observation chart</p>
                    </div> 
                    <div onClick={()=> setTab(4)} className={tab === 4 ? 'flex items-center pb-5 pt-6 cursor-pointer mx-2 border-b-2 border-[#7123E2] ': 'flex items-center pb-5 pt-6 cursor-pointer mx-2 border-b-2 border-transparent '} > 
                        <p className={tab === 4 ? 'font-Ubuntu-Medium px-1 text-xs text-[#7123E2]': 'font-Ubuntu-Medium px-1 text-xs text-[#817D83]'} >Input/Output chart</p>
                    </div> 
                    <div onClick={()=> setTab(5)} className={tab === 5 ? 'flex items-center pb-5 pt-6 cursor-pointer mx-2 border-b-2 border-[#7123E2] ': 'flex items-center pb-5 pt-6 cursor-pointer mx-2 border-b-2 border-transparent '} > 
                        <p className={tab === 5 ? 'font-Ubuntu-Medium px-1 text-xs text-[#7123E2]': 'font-Ubuntu-Medium px-1 text-xs text-[#817D83]'} >Continuation sheet</p>
                    </div> 
                    <div onClick={()=> setTab(6)} className={tab === 6 ? 'flex items-center pb-5 pt-6 cursor-pointer mx-2 border-b-2 border-[#7123E2] ': 'flex items-center pb-5 pt-6 cursor-pointer mx-2 border-b-2 border-transparent '} > 
                        <p className={tab === 6 ? 'font-Ubuntu-Medium px-1 text-xs text-[#7123E2]': 'font-Ubuntu-Medium px-1 text-xs text-[#817D83]'} >Scan Result</p>
                    </div> 
                    <div onClick={()=> setTab(7)} className={tab === 7 ? 'flex items-center pb-5 pt-6 cursor-pointer mx-2 border-b-2 border-[#7123E2] ': 'flex items-center pb-5 pt-6 cursor-pointer mx-2 border-b-2 border-transparent '} > 
                        <p className={tab === 7 ? 'font-Ubuntu-Medium px-1 text-xs text-[#7123E2]': 'font-Ubuntu-Medium px-1 text-xs text-[#817D83]'} >Scan Result</p>
                    </div> 
                    <div onClick={()=> setTab(8)} className={tab === 8 ? 'flex items-center pb-5 pt-6 cursor-pointer mx-2 border-b-2 border-[#7123E2] ': 'flex items-center pb-5 pt-6 cursor-pointer mx-2 border-b-2 border-transparent '} > 
                        <p className={tab === 8 ? 'font-Ubuntu-Medium px-1 text-xs text-[#7123E2]': 'font-Ubuntu-Medium px-1 text-xs text-[#817D83]'} >Request</p>
                    </div> 
                </div>
            </div>
            <div className='w-full flex justify-center items-center' >
                <div style={{width:'700px'}} className='w-auto h-full px-12 py-10 font-Ubuntu-Regular' > 
                    <p className='text-lg font-Ubuntu-Bold' >Personal Information</p>
                    <div className='w-full flex mt-8' >
                        <div className='mr-2' >
                            <p className='text-xs mb-2' >First Name</p>
                            <Input fontSize='sm' placeholder='Enter First Name' />
                        </div>
                        <div className='mr-2' >
                            <p className='text-xs mb-2' >Last Name/Surname</p>
                            <Input fontSize='sm' placeholder='Enter Last Name' />
                        </div>
                        <div className='mr-2' >
                            <p className='text-xs mb-2' >Other Names</p>
                            <Input fontSize='sm' placeholder='Enter other Names' />
                        </div>
                    </div>
                    <div className='w-full flex mt-5' >
                        <div className='mr-2' >
                            <p className='text-xs mb-2' >Phone Number</p>
                            <Input fontSize='sm' placeholder='080 ...' />
                        </div>
                        <div className='mr-2 w-full' >
                            <p className='text-xs mb-2' >Address</p>
                            <Input fontSize='sm' placeholder='Home Address' />
                        </div> 
                    </div>
                    <div className='w-full flex mt-5' >
                        <div className='mr-2' >
                            <p className='text-xs mb-2' >Age</p>
                            <Input fontSize='sm' placeholder='Enter Age' />
                        </div>
                        <div className='mr-2' >
                            <p className='text-xs mb-2' >Sex/Gender</p>
                            <Select fontSize='sm'  placeholder='Select'>
                                <option>Male</option>
                                <option>Female</option>
                            </Select>
                        </div>
                        <div className='mr-2' >
                            <p className='text-xs mb-2' >State of Origin</p>
                            <Input fontSize='sm' placeholder='Enter Your State' />
                        </div>
                        <div className='mr-2' >
                            <p className='text-xs mb-2' >Local Governmet Area</p>
                            <Input fontSize='sm' placeholder='Enter LGA' />
                        </div>
                    </div>
                    <div className='w-full flex mt-5' >
                        <div className='mr-2' >
                            <p className='text-xs mb-2' >Occupation</p>
                            <Input fontSize='sm' placeholder='What do you do?' />
                        </div> 
                        <div className='mr-2' >
                            <p className='text-xs mb-2' >Religion</p>
                            <Input fontSize='sm' placeholder='Select your religion' />
                        </div>
                    </div> 
                    <div className='w-full flex mt-4' >
                        <button onClick={()=> navigate('/dashboard')}  className='  py-3 w-36 ml-auto text-[#A5B0C1] text-sm mt-4 rounded-full' >Cancel</button>
                        <button className='bg-[#7123E2] py-3 w-48  text-white text-sm mt-6 rounded-full' >Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
} 