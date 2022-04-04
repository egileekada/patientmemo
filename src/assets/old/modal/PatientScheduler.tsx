import { Input } from '@chakra-ui/input'
import React from 'react'

export default function PatientScheduler(props: any) {
    return (
        <div style={{width: '900px'}} className='rounded-2xl flex flex-col bg-white items-center'>
            <div className=' relative w-full flex items-center mx-auto bg-[#7123E2] text-white rounded-t-2xl py-8 px-9' >
                <div className='w-16 h-16 rounded-full bg-yellow-400' />
                <div className='ml-3' >
                    <p className='font-Ubuntu-Bold text-base  ' >Julliet Abraham</p> 
                    <p className='font-Ubuntu-Regular text-xs mt-1' >Last Meeting: 12:00pm, 12, Jun 2022</p> 
                </div> 
            </div>
            <div className='w-full my-6' >
                <div className='w-full flex items-center flex-col justify-center' >
                    <div className='flex mx-auto items-center' >
                        <div className='w-10 h-10 flex justify-center items-center rounded-full border border-[#7123E2]' >
                            <div className='w-6 h-6 rounded-full bg-[#7123E2]' />
                        </div>
                        <div className='bg-[#7123E2] w-32' style={{height: '1px'}} />
                        <div className='w-10 h-10 flex justify-center items-center rounded-full border border-[#7123E2]' >
                            <div className='w-6 h-6 rounded-full bg-[#7123E2]' />
                        </div>
                    </div>
                    <div style={{width: '400px'}} className='mt-5'  >
                        <p className='font-Ubuntu-Regular text-sm text-[#333333] mb-2 ' >Event Name <span style={{color: '#C7CDD9'}} >(Optional)</span></p> 
                        <Input size='lg' fontSize='sm' placeholder='Enter event Name' />
                        <div className='w-full flex my-3' >
                            <div className='mr-2' > 
                                <p className='font-Ubuntu-Regular text-sm text-[#333333] mb-2 ' >Start Time</p> 
                                <Input size='lg' fontSize='sm' placeholder='8:00 AM' />
                            </div>
                            <div className='ml-2' > 
                                <p className='font-Ubuntu-Regular text-sm text-[#333333] mb-2 ' >End Time</p> 
                                <Input size='lg' fontSize='sm' placeholder='9:30 PM' />
                            </div>
                        </div>
                        <p className='font-Ubuntu-Regular text-sm text-[#333333] mb-2 ' >Date</p>
                        <div className='w-full rounded-md border py-5 flex items-center px-4 border-[#F0F5FF]' >
                            <p className='font-Ubuntu-Medium text-sm text-[#333333] ' >Thursday, 28 May</p>
                            <p className='font-Ubuntu-Medium text-sm text-[#7123E2] ml-auto cursor-pointer ' >EDIT</p>
                        </div>
                        <div className='w-full flex mt-8' >
                            <button onClick={()=> props.close(false)} className='  py-3 w-36 ml-auto text-[#A5B0C1] text-sm mt-6 rounded-full' >Cancel</button>
                            <button className='bg-[#7123E2] py-3 w-48  text-white text-sm mt-6 rounded-full' >Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 