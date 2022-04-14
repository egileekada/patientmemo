import { Input, InputGroup, InputLeftElement, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom' 
import FindPatient from '../doctorComponent/continuationSheetComponent/FindPatient'
import PatientContinuationSheet from '../doctorComponent/continuationSheetComponent/PatientContinuationSheet'
import ContiunuationSheetList from '../doctorComponent/manageContinuationSheet/ContiunuationSheetList'
import AddMedicalList from './MedicationSheetComponent/AddMedicalList'
import MedicalList from './MedicationSheetComponent/MedicalList'

export default function MedicationSheet() {
    
    const navigate = useNavigate()
    const [tab, setTab] = React.useState(false)
    const [next, setNext] = React.useState(0) 
    const [info, setInfo] = React.useState({} as any)   

    const CLickHandler =()=>{
        setTab(true)
        setNext(0)
    } 

    console.log(info)

    return (
        <div className='w-full h-full ' >
            <div className='w-full px-12 border-b py-5 flex items-center border-[#D7D0DF]' > 
                <div onClick={()=> navigate('/dashboard/nurse')} className='w-10 h-10 rounded-full cursor-pointer flex items-center justify-center bg-[#7123E214]' >
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 11L1 6L6 1" stroke="#7123E2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <p className='font-Ubuntu-Medium text-lg ml-3 mr-20' >Manage Medication Sheet</p>  
                <button onClick={()=> CLickHandler()} className='font-Ubuntu-Medium text-xs bg-[#7123E2] text-white rounded-lg py-3 px-4 ml-auto ' >Doctor Request</button>
            </div> 
            <div className='w-full' >
                {!tab && (
                    <MedicalList input={true} />
                )}
                {tab && ( 
                    <div className=' flex flex-1 justify-center items-center' > 
                        {next === 0 && (
                            <ContiunuationSheetList next={setNext} patientinfo={setInfo} />
                        )}
                        {next === 2 && (
                            <PatientContinuationSheet doctor={true} data={info}  next={setNext} />
                        )}
                        {next === 1 && (
                            <AddMedicalList data={info} />
                        )}
                    </div> 
                )}
            </div>
        </div>
    )
} 