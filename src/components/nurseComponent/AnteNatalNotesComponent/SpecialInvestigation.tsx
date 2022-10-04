import { Textarea } from '@chakra-ui/react'
import React from 'react'
import LoaderIcon from '../../LoaderIcon'

export default function SpecialInvestigation(props: any) {
    return (
        <div className='p-12 w-full flex flex-col ' >  
            <p className='font-Ubuntu-Bold text-lg text-center ' > Report of Special Investigations </p>
            <p className='text-xs mt-1 font-Ubuntu-Regular text-[#5F6777] mb-10' ></p>
            {/* <FilesEditor /> */}
            <Textarea 
                height='50vh'
                name="note"
                value={props.data["specialInvestigation.report"]}
                onChange={(e)=> props.setData({...props.data, "specialInvestigation.report": e.target.value})} 
                placeholder='How about the patient?...'
                /> 
            <div className='w-full flex mt-12 items-center justify-end' >
                 
                <button onClick={()=> props.next(2)}  className='  py-3 w-36 ml-auto text-[#A5B0C1] text-sm rounded-full' >Back</button>
                 
                    <button onClick={()=> props.next(4)} className='w-44 rounded-full h-10 text-sm bg-[#7123E2] text-white font-Ubuntu-Medium' >Next</button>
                {/* } */}
            </div> 
        </div>
    )
} 