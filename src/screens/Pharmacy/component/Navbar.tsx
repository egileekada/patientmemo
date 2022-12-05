import { Input } from '@chakra-ui/react'
import React from 'react'

export default function Navbar() {
    return (
        <div className=' w-full flex items-center poppins-regular px-[50px] bg-white justify-between h-[92px] ' >
            <Input width="474.74px" height="41px" placeholder="Search for anything here.." background="#E3EBF3" fontSize="sm" />
            <div className=' flex items-end flex-col ' >
                <div className=' flex items-center  ' > 
                    <div className=' w-fit ' >
                        <div className=' w-[22px] h-[22px] rounded-full bg-yellow-400 ' >
                            
                        </div>
                    </div>
                    <p className=' text-[#1D242E] ml-3 font-medium ' >Good Morning</p>
                </div>
                <p className=' font-medium text-sm text-[#1D242E] mt-[2px] ' >14 November 2022  22:45:04</p>
            </div>
        </div>
    )
} 