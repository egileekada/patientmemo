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

    const CLickHandler =()=>{
        setTab(true)
        setNext(1)
    } 
 
    const { isLoading, data } = useQuery('patientdata', () =>
        fetch(`https://hospital-memo-api.herokuapp.com/patients/${localStorage.getItem("patientId")}`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )    
 
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
                {/* <div onClick={()=> navigate('/dashboard/nurse')} className='w-10 h-10 rounded-full cursor-pointer flex items-center justify-center bg-[#7123E214]' > 
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 495.398 495.398" >
                        <g>
                            <g>
                                <g>
                                    <path fill="#7123E2" d="M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391
                                        v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158
                                        c11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747
                                        c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z"/>
                                    <path fill="#7123E2" d="M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401
                                        c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79
                                        c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z"/>
                                </g>
                            </g>
                        </g> 
                    </svg>
                </div>  */}
                {/* <div onClick={()=> OnBackClicked()} className='w-10 h-10 rounded-full cursor-pointer ml-2 flex items-center justify-center bg-[#7123E214]' >
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 11L1 6L6 1" stroke="#7123E2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div> */}
                <p className='font-Ubuntu-Medium text-lg ml-3 mr-20' >Manage Medication Sheet</p>  
                {next === 3 && ( 
                    <button onClick={()=> CLickHandler()} className='font-Ubuntu-Medium text-xs bg-[#7123E2] text-white rounded-lg py-3 px-4 ml-auto ' >Add Medical Sheet</button>
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
                            <AddMedicalList data={data?.data} />
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