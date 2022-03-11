import React from 'react'
import logo from '../assets/images/modalogo.png'

export default function ReceptionistModal(props: any) {
    return (
        <div style={{width: '900px', height: '580px' }} className='rounded-2xl flex bg-white items-start' >
            <div style={{width: '200px', height: '480px' }} className=' relative bg-gradient-to-b from-[#7123E2] to-[#BB5778] rounded-tl-2xl flex flex-col items-center' >
                <div className=' mt-12 flex flex-col items-center' >
                    <div className='w-20 h-20 rounded-full bg-blue-400' >

                    </div>
                    <p className='font-Ubuntu-Bold text-sm mt-3 text-white ' >Dr. Adeyemi Joseph</p>
                    <p className='font-Ubuntu-Regular text-sm mt-1 text-white ' >Gynaecologist</p>
                </div>
                <img src={logo} alt='lo' className=' h-72 object-cover object-left absolute bottom-0' />
            </div>
            <div className='p-14 flex flex-col flex-1' >
                <div className='flex items-center' >
                    <div className='w-10 h-10 rounded-full bg-[#E8EFFF] flex items-center font-Ubuntu-Medium text-sm justify-center' >
                        1
                    </div>
                    <div className='w-36 h-1 bg-[#E8EFFF]' />
                    <div className='w-10 h-10 rounded-full bg-[#E8EFFF] flex items-center font-Ubuntu-Medium text-sm justify-center' >
                        1
                    </div>
                    <div className='w-36 h-1 bg-[#E8EFFF]' />
                    <div className='w-10 h-10 rounded-full bg-[#E8EFFF] flex items-center font-Ubuntu-Medium text-sm justify-center' >
                        1
                    </div>
                </div>
                <div style={{width: '490px'}} className='mt-6' >
                    <p className='font-Ubuntu-Medium text-sm mb-2 text-[#333333]' >First you need to Add Service</p>
                    <div className='border border-[#F0F5FF] rounded-lg cursor-pointer h-20 flex justify-center items-center w-full' >
                        <div className='w-8 h-8 rounded-full bg-[#E8EFFF] text-[#A5B0C1] flex items-center font-Ubuntu-Medium text-base justify-center' >
                            +
                        </div>
                        <p className='font-Ubuntu-Medium text-xs text-[#A5B0C1] ml-2' >Select Service</p>
                    </div>
                    <p className='font-Ubuntu-Medium text-sm mb-2 mt-4 text-[#333333]' >Add Patient Next</p>
                    <div className='border border-[#F0F5FF] rounded-lg cursor-pointer h-20 flex justify-center items-center w-full' >
                        <div className='w-8 h-8 rounded-full bg-[#E8EFFF] text-[#A5B0C1] flex items-center font-Ubuntu-Medium text-base justify-center' >
                            +
                        </div>
                        <p className='font-Ubuntu-Medium text-xs text-[#A5B0C1] ml-2' >Select Patient</p>
                    </div>
                    <p className='font-Ubuntu-Medium text-sm mb-2 mt-4 text-[#333333]' >Time & Date</p>
                    <div className='border border-[#F0F5FF] rounded-lg px-8 h-20 flex justify-center items-center w-full' >
                        <div>
                            <p className='font-Ubuntu-Medium text-sm text-[#333333]' >Thursday, 28 May   14:00 - 15:00</p>
                            <p className='font-Ubuntu-Medium text-xs text-[#A5B0C1]' >* Patient Approval is needed</p>
                        </div>
                        <p className='font-Ubuntu-Medium text-xs text-[#7123E2] -mt-8 cursor-pointer ml-auto'>EDIT</p>
                    </div>
                    <div className='w-full flex' >
                        <button onClick={()=> props.close(false)} className='  py-3 w-36 ml-auto text-[#A5B0C1] text-sm mt-6 rounded-full' >Cancel</button>
                        <button onClick={()=> props.close(false)} className='bg-[#A5B0C1] py-3 w-48  text-white text-sm mt-6 rounded-full' >Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
} 