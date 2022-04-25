import { Input, InputGroup, InputLeftElement, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom' 
import Request from '../dashboardComponent/managePatientComponent/Request'
import FindPatient from '../doctorComponent/continuationSheetComponent/FindPatient'
import PatientContinuationSheet from '../doctorComponent/continuationSheetComponent/PatientContinuationSheet'
import RequestTab from '../doctorComponent/makingRequestComponent/RequestTab'
import ContiunuationSheetList from '../doctorComponent/manageContinuationSheet/ContiunuationSheetList'
import AddMedicalList from './MedicationSheetComponent/AddMedicalList'
import GetAllRequest from './MedicationSheetComponent/GetAllRequest'
import MedicalList from './MedicationSheetComponent/MedicalList'
import ShowPrescription from './MedicationSheetComponent/ShowPrescription'

export default function MedicationSheet() {
    
    const navigate = useNavigate()
    const [tab, setTab] = React.useState(true)
    const [next, setNext] = React.useState(3) 
    const [info, setInfo] = React.useState({} as any)   
    const [datainfo, setData] = React.useState({} as any)
    const [patientInfo, setPatientInfo] = React.useState({} as any)  

    const CLickHandler =()=>{
        setTab(true)
        setNext(0)
    } 
 
    const OnBackClicked =()=> {
        if(next === 3) {
            navigate('/dashboard/nurse')
        } else if(next === 0) {
            setNext(3)
        } else if(next === 2) {
            setNext(0)
        } else if(next === 1) {
            setNext(2)
        }
    }

    return (
        <div className='w-full h-full ' >
            <div className='w-full px-12 border-b py-5 flex items-center border-[#D7D0DF]' > 
                <div onClick={()=> OnBackClicked()} className='w-10 h-10 rounded-full cursor-pointer flex items-center justify-center bg-[#7123E214]' >
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 11L1 6L6 1" stroke="#7123E2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <p className='font-Ubuntu-Medium text-lg ml-3 mr-20' >Manage Medication Sheet</p>  
                {next === 3 && ( 
                    <button onClick={()=> CLickHandler()} className='font-Ubuntu-Medium text-xs bg-[#7123E2] text-white rounded-lg py-3 px-4 ml-auto ' >Doctor Request</button>
                )}
            </div> 
            <div className='w-full' >
                {/* {!tab && (
                    // <MedicalList input={true} />
                    <div className=' flex flex-1 justify-center items-center' >
                        {next === 0 ?
                        <FindPatient next={setNext} value={setData} />
                            :next === 1 ? 
                            <ContiunuationSheetList nurse={true} patientinfo={setPatientInfo} value={datainfo} next={setNext} />
                                :next === 2 ?  
                            <PatientContinuationSheet data={patientInfo} value={datainfo} next={setNext} />
                            :next === 3 ? 
                                <ContiunuationSheetList nurse={true} patientinfo={setPatientInfo} value={datainfo} next={setNext} />
                        :null}
                        </div>
                )} */}
                {tab && ( 
                    <div className=' flex flex-1 justify-center pt-10 items-center' > 
                        {next === 3 && (
                            // <Request />
                            <MedicalList />
                        )}
                        {next === 2 && (
                            // <ContiunuationSheetList />
                            <ShowPrescription button='Confirm Prescription' data={info}  next={setNext} />
                        )}
                        {next === 1 && (
                            <AddMedicalList data={info} />
                        )}
                        {next === 0 && (
                            <GetAllRequest next={setNext} info={setInfo} />
                        )}
                    </div> 

                // {tab && ( 
                //     <div className=' flex flex-1 justify-center pt-10 items-center' > 
                //         {next === 0 && (
                //             // <Request />
                //             <MedicalList />
                //         )}
                //         {next === 2 && (
                //             // <ContiunuationSheetList />
                //         )}
                //         {next === 1 && (
                //             <AddMedicalList data={info} />
                //         )}
                //     </div> 
                // )}
                )}
            </div>
        </div>
    )
} 