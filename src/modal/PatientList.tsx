import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'
import React from 'react'

export default function PatientList(props: any) {

    const ClickHandler =()=> {
        props.close(false)
        props.next(true)
    }
    
    return (
        <div style={{width:'479px', backgroundColor: '#F4F4F4'}} className='bg-white h-screen overflow-y-auto'>
            <div className='bg-white w-full px-12 py-10' >
                <p className='font-Ubuntu-Bold text-xl text-left ' >Patients</p> 
            </div> 
            <div className='w-full px-3 mt-4 font-Ubuntu-Regular' > 
                <InputGroup >
                    <InputLeftElement 
                    children={
                        <svg width="20px" height="20px" className='mt-2' viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.82592 0.333328C10.4059 0.333328 13.3179 3.24533 13.3179 6.82533C13.3179 8.51436 12.6697 10.0548 11.609 11.211L13.6962 13.2938C13.8915 13.4891 13.8922 13.8051 13.6969 14.0005C13.5995 14.0991 13.4709 14.1478 13.3429 14.1478C13.2155 14.1478 13.0875 14.0991 12.9895 14.0018L10.8772 11.8953C9.76597 12.7852 8.35704 13.318 6.82592 13.318C3.24592 13.318 0.333252 10.4053 0.333252 6.82533C0.333252 3.24533 3.24592 0.333328 6.82592 0.333328ZM6.82592 1.33333C3.79725 1.33333 1.33325 3.79666 1.33325 6.82533C1.33325 9.85399 3.79725 12.318 6.82592 12.318C9.85392 12.318 12.3179 9.85399 12.3179 6.82533C12.3179 3.79666 9.85392 1.33333 6.82592 1.33333Z" fill="#727272"/>
                        </svg>
                    }
                    />
                    <Input size='lg' fontSize='sm' backgroundColor='white' placeholder="Search for patients" /> 
                </InputGroup>
                <div className='mt-4' >
                    <div onClick={()=> ClickHandler()} className=' relative w-full my-2 cursor-pointer flex items-center bg-[#7123E2] text-white rounded-2xl py-8 px-9' >
                        <div className='w-16 h-16 rounded-full bg-yellow-400' />
                        <div className='ml-3' >
                            <p className='font-Ubuntu-Bold text-base  ' >Julliet Abraham</p> 
                            <p className='font-Ubuntu-Regular text-xs mt-1' >Last Meeting: 12:00pm, 12, Jun 2022</p> 
                        </div> 
                    </div>
                    <div className='w-full my-2 flex items-center bg-white rounded-2xl py-8 px-9' >
                        <div className='w-16 h-16 rounded-full bg-yellow-400' />
                        <div className='ml-3' >
                            <p className='font-Ubuntu-Bold text-base  ' >Julliet Abraham</p> 
                            <p className='font-Ubuntu-Regular text-xs mt-1' >Last Meeting: 12:00pm, 12, Jun 2022</p> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 