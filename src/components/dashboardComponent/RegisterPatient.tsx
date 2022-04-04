import { Input } from '@chakra-ui/input'
import { Select } from '@chakra-ui/select'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function RegisterPatient() {

    const [next, setNext] = React.useState(false)
    const navigate = useNavigate()

    return (
        <div className='w-full h-full ' >
            <div className='w-full py-3 px-12 border-b flex items-center border-[#D7D0DF]' > 
                <div onClick={()=> navigate('/dashboard')} className='w-10 h-10 rounded-full cursor-pointer flex items-center justify-center bg-[#7123E214]' >
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 11L1 6L6 1" stroke="#7123E2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <p className='font-Ubuntu-Medium text-lg ml-3' >Register New Patients</p>
            </div>
            <div className='w-full h-full px-6 flex ' >
                <div className='h-auto border-r border-[#D7D0DF] px-4 ' >
                    <div className='flex items-center mt-20' >
                        <div className='w-10 h-10 flex justify-center items-center border border-[#7123E2] rounded-full ' >
                            <div className='w-5 h-5 bg-[#7123E2] rounded-full ' />
                        </div>
                        <p className='text-sm font-Ubuntu-Medium ml-3 text-[#7123E2]' >Personal Information</p>
                    </div>
                    <div style={{width: '1px', marginLeft: '19px'}} className='h-40 bg-[#5F6777]' >

                    </div>
                    <div className='flex items-center' >
                        <div className={!next ? 'w-10 h-10 flex justify-center items-center border border-[#5F6777] rounded-full ' : 'w-10 h-10 flex justify-center items-center border border-[#7123E2] rounded-full '} >
                            <div className={!next ? 'w-5 h-5 bg-[#5F6777] rounded-full ': 'w-5 h-5 bg-[#7123E2] rounded-full '} />
                        </div>
                        <p className={!next ? 'text-sm font-Ubuntu-Medium ml-3 text-[#5F6777]': 'text-sm font-Ubuntu-Medium ml-3 text-[#7123E2]'} >Next of Kin</p>
                    </div>
                </div>
                {!next ? 
                    <div className='w-auto h-full px-12 py-10 font-Ubuntu-Regular' > 
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
                            <button onClick={()=> setNext(true) } className='bg-[#7123E2] py-3 w-48  text-white text-sm mt-6 rounded-full' >Next</button>
                        </div>
                    </div>
                :
                    <div className='w-auto h-full px-12 py-10 font-Ubuntu-Regular' > 
                        <p className='text-lg font-Ubuntu-Bold' >Next of Kin’s Information</p>
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
                                <p className='text-xs mb-2' >Relationship</p>
                                <Input fontSize='sm' placeholder='Whats the relationship?' />
                            </div> 
                            <div className='mr-2' >
                                <p className='text-xs mb-2' >Phone Number</p>
                                <Input fontSize='sm' placeholder='080 ...' />
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
                                <p className='text-xs mb-2' >Address</p>
                                <Input fontSize='sm' placeholder='Home Address' />
                            </div> 
                        </div>
                        <div className='w-full flex mt-4' >
                            <button onClick={()=> setNext(false) } className='  py-3 w-36 ml-auto text-[#A5B0C1] text-sm mt-4 rounded-full' >Cancel</button>
                            <button className='bg-[#7123E2] py-3 w-48  text-white text-sm mt-6 rounded-full' >Create Profile</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
} 