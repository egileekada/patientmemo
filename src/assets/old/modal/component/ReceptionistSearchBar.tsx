import { Input } from '@chakra-ui/input'
import React from 'react'

export default function ReceptionistSearchBar(props: any) {

    const ClickHandler =()=> {
        props.close(false)
        props.show(true)
    }

    return (
        <div style={{boxShadow: '0px 2px 8px 0px #A5B0C14D'}} className='w-full z-50 rounded-lg absolute top-16 bg-white' >
            <div className='p-4 w-full' >
                <Input backgroundColor='#F0F5FF8F' placeholder='Search' />
            </div>
            <div className='w-full overflow-y-auto h-32' >
                {props.type !== 'patient' ? 
                        <>
                            <div onClick={()=> ClickHandler()} className='flex w-full items-center border-l-4 border-[#FF8811] bg-[#FEEBC666] px-3 py-4 cursor-pointer ' >
                                <p className='font-Ubuntu-Medium text-sm text-[#5F6777] mr-auto' >Online consultancy</p>
                                <p className='font-Ubuntu-Medium text-sm text-[#333]' >Free</p>
                            </div>
                            <div className='flex w-full items-center p-4 cursor-pointer ' >
                                <p className='font-Ubuntu-Medium text-sm text-[#5F6777] mr-auto' >Preventative</p>
                                <p className='font-Ubuntu-Medium text-sm text-[#333]' >Free</p>
                            </div>
                            <div className='flex w-full items-center p-4 cursor-pointer ' >
                                <p className='font-Ubuntu-Medium text-sm text-[#5F6777] mr-auto' >Online consultancy</p>
                                <p className='font-Ubuntu-Medium text-sm text-[#333]' >Free</p>
                            </div>
                        </>
                    :   
                        <>
                            <div onClick={()=> ClickHandler()} className='flex w-full items-center border-l-4 border-[#FF8811] bg-[#FEEBC666] px-3 py-4 cursor-pointer ' >
                                <div className='mr-auto flex items-center' >
                                    <div className='w-12 h-12 rounded-full bg-yellow-300' >

                                    </div>
                                    <p className='font-Ubuntu-Medium text-sm ml-2 text-[#5F6777] ' >Nifemi Damola</p>
                                </div>
                                <p className='font-Ubuntu-Medium text-sm text-[#333]' >Free</p>
                            </div>
                            <div className='flex w-full items-center p-4 cursor-pointer ' >
                                <div className='mr-auto flex items-center' >
                                    <div className='w-12 h-12 rounded-full bg-yellow-300' >

                                    </div>
                                    <p className='font-Ubuntu-Medium text-sm ml-2 text-[#5F6777] ' >Nifemi Damola</p>
                                </div>
                                <p className='font-Ubuntu-Medium text-sm text-[#333]' >Free</p>
                            </div>
                            <div className='flex w-full items-center p-4 cursor-pointer ' >
                                <div className='mr-auto flex items-center' >
                                    <div className='w-12 h-12 rounded-full bg-yellow-300' >

                                    </div>
                                    <p className='font-Ubuntu-Medium text-sm ml-2 text-[#5F6777] ' >Nifemi Damola</p>
                                </div>
                                <p className='font-Ubuntu-Medium text-sm text-[#333]' >Free</p>
                            </div>
                        </> 
            }
            </div>
        </div>
    )
} 
