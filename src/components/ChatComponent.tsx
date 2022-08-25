import { Input } from '@chakra-ui/react'
import React from 'react'

export default function ChatComponent() {
    return (
        <div className=' w-280px border-l h-full mr-4 rounded-xl border-[#C8C8C8] flex px-4 flex-col  ' >
            <div className=' w-14 h-14 mt-8 mb-4 rounded-full mx-auto bg-red-400 ' >

            </div>
            <Input />
            <p className=' font-Ubuntu-Medium text-sm mt-4 mb-2 ' >12 participant</p>
            <div style={{boxShadow: "0px 4px 10px 0px #6C6C6C26"}} className=' my-3 p-4 rounded-md flex items-center ' >
                <div className=' w-fit h-fit ' > 
                    <div className=' w-14 h-14  rounded-full bg-red-400 ' >

                    </div>
                </div>
                <div className=' pl-2  font-Ubuntu-Medium ' >
                    <p className=' text-base ' >Dr Randon Mon</p>
                    <p className=' text-sm ' >Hi Admin kindly ....</p>
                </div>
            </div>
            <div style={{boxShadow: "0px 4px 10px 0px #6C6C6C26"}} className=' my-3 p-4 rounded-md flex items-center ' >
                <div className=' w-fit h-fit ' > 
                    <div className=' w-14 h-14  rounded-full bg-red-400 ' >

                    </div>
                </div>
                <div className=' pl-2  font-Ubuntu-Medium ' >
                    <p className=' text-base ' >Dr Randon Mon</p>
                    <p className=' text-sm ' >Hi Admin kindly ....</p>
                </div>
            </div>
            <button className=' w-full h-9 bg-[#A5B0C1] font-Ubuntu-Regular text-sm ' >See all</button>
        </div>
    )
} 