import React from 'react'
import { useNavigate } from 'react-router-dom' 
import PatientInfo from './otherComponent/PatientInfo'
import NextOfKinInfo from './otherComponent/NextOfKinInfo'

export default function RegisterPatient() {

    const [next, setNext] = React.useState(false)
    const navigate = useNavigate()
    const [patientInfo, setPatientInfo] = React.useState({}as any)
    const OnClickHandler =()=> {
        {!next && ( 
            navigate('/dashboard')
        )}
        {next && ( 
            setNext(false)
        )}
    } 

    return (
        <div className='w-full h-full ' >
            <div className='w-full py-3 px-12 border-b flex items-center border-[#D7D0DF]' > 
                <div onClick={()=> OnClickHandler()} className='w-10 h-10 rounded-full cursor-pointer flex items-center justify-center bg-[#7123E214]' >
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
                        <p className='text-sm font-Ubuntu-Medium ml-3 w-24 text-[#7123E2]' >Personal Information</p>
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
                <div className={!next ? 'w-full': 'hidden'} >
                    <PatientInfo next={setNext} value={setPatientInfo} />
                </div>
                <div className={next ? 'w-full': 'hidden'} >
                    <NextOfKinInfo next={setNext} patient={patientInfo} />
                </div>
                {/* {!next ? 

                :
                } */}
            </div>
        </div>
    )
} 