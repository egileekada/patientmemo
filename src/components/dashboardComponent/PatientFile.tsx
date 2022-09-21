import { Input, Select } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import ContinuationSheet from '../doctorComponent/ContinuationSheet'
import Chemistry from '../laboratoryComponent/Chemistry'
import Haematology from '../laboratoryComponent/Haematology'
import Microbiology from '../laboratoryComponent/Microbiology'
import Microscopic from '../laboratoryComponent/Microscopic'
import Serologist from '../laboratoryComponent/Serologist'
import UrineAnalysis from '../laboratoryComponent/UrineAnalysis'
import LoaderIcon from '../LoaderIcon'
import DeliveryRecord from '../nurseComponent/DeliveryRecord'
import DeliveryRecordTab from '../nurseComponent/DeliveryRecordComponent/DeliveryRecordTab'
import MedicationSheet from '../nurseComponent/MedicationSheet'
import OberservationChartList from '../nurseComponent/MedicationSheetComponent/OberservationChartList'
import ObservationChart from '../nurseComponent/ObservationChart'
import OIChart from '../nurseComponent/OIChart'
import AnteNatalNotes from './managePatientComponent/AnteNatalNotes'
// import ContinutionSheet from './managePatientComponent/ContinutionSheet' 
// import DeliveryRecord from './managePatientComponent/DeliveryRecord'
// import DeliveryRecord from './managePatientComponent/DeliveryRecord'
import EditNextOfKin from './managePatientComponent/EditNextOfKin'
import EditPatientInfo from './managePatientComponent/EditPatientInfo'
import HositalHistory from './managePatientComponent/HositalHistory'
import InputAndOutputChart from './managePatientComponent/InputAndOutputChart'
import MedicalReport from './managePatientComponent/MedicalReport'
import Request from './managePatientComponent/Request'

export default function PatientFile() {
    
    const navigate = useNavigate()
    const [tab, setTab] = React.useState(0) 
    const [lab, setLab] = React.useState(false) 
    const [infoTab, setInfoTab] = React.useState(0) 

    const { isLoading, data } = useQuery('EditPaitentData', () =>
        fetch(`https://hospital-memo-api.herokuapp.com/patients/${localStorage.getItem('patientId')}`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )  

    const ClickHandler =()=> {
        navigate('/dashboard/managepatient')
        // navigate(0)
    }

    return (
        <div className='w-full' >
            <div className='w-full flex px-12 py-3 items-center border-b border-[#D7D0DF] ' >
                <div onClick={()=> ClickHandler()} className='w-10 h-10 rounded-full cursor-pointer flex items-center justify-center bg-[#7123E214]' >
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 11L1 6L6 1" stroke="#7123E2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <p className='font-Ubuntu-Medium ml-3' >Patient File</p>  
            </div>
            <div className='w-full flex justify-center border-t border-b border-[#D7D0DF]' >
                <div className='mx-auto flex ' > 
                    <div onClick={()=> [setTab(0), setLab(false)]} className={tab === 0 ? 'flex items-center pb-5 pt-6 cursor-pointer mx-2 border-b-2 border-[#7123E2] ': 'flex items-center pb-5 pt-6 cursor-pointer mx-2 border-b-2 border-transparent '} > 
                        <p className={tab === 0 ? 'font-Ubuntu-Medium px-1 text-xs text-[#7123E2]': 'font-Ubuntu-Medium px-1 text-xs text-[#817D83]'} >Bio</p>
                    </div> 
                    {/* <div onClick={()=> [setTab(1), setLab(false)]} className={tab === 1 ? 'flex items-center pb-5 pt-6 cursor-pointer mx-2 border-b-2 border-[#7123E2] ': 'flex items-center pb-5 pt-6 cursor-pointer mx-2 border-b-2 border-transparent '} > 
                        <p className={tab === 1 ? 'font-Ubuntu-Medium px-1 text-xs text-[#7123E2]': 'font-Ubuntu-Medium px-1 text-xs text-[#817D83]'} >Hospital History</p>
                    </div>  */}
                    <div onClick={()=> [setTab(5), setLab(false)]} className={tab === 5 ? 'flex items-center pb-5 pt-6 cursor-pointer mx-2 border-b-2 border-[#7123E2] ': 'flex items-center pb-5 pt-6 cursor-pointer mx-2 border-b-2 border-transparent '} > 
                        <p className={tab === 5 ? 'font-Ubuntu-Medium px-1 text-xs text-[#7123E2]': 'font-Ubuntu-Medium px-1 text-xs text-[#817D83]'} >Continuation sheet</p>
                    </div> 
                    <div onClick={()=> [setTab(2), setLab(false)]} className={tab === 2 ? 'flex items-center pb-5 pt-6 cursor-pointer mx-2 border-b-2 border-[#7123E2] ': 'flex items-center pb-5 pt-6 cursor-pointer mx-2 border-b-2 border-transparent '} > 
                        <p className={tab === 2 ? 'font-Ubuntu-Medium px-1 text-xs text-[#7123E2]': 'font-Ubuntu-Medium px-1 text-xs text-[#817D83]'} >Medication Sheet</p>
                    </div> 
                    <div onClick={()=> [setTab(3), setLab(false)]} className={tab === 3 ? 'flex items-center pb-5 pt-6 cursor-pointer mx-2 border-b-2 border-[#7123E2] ': 'flex items-center pb-5 pt-6 cursor-pointer mx-2 border-b-2 border-transparent '} > 
                        <p className={tab === 3 ? 'font-Ubuntu-Medium px-1 text-xs text-[#7123E2]': 'font-Ubuntu-Medium px-1 text-xs text-[#817D83]'} >Observation chart</p>
                    </div> 
                    <div onClick={()=> [setTab(4), setLab(false)]} className={tab === 4 ? 'flex items-center pb-5 pt-6 cursor-pointer mx-2 border-b-2 border-[#7123E2] ': 'flex items-center pb-5 pt-6 cursor-pointer mx-2 border-b-2 border-transparent '} > 
                        <p className={tab === 4 ? 'font-Ubuntu-Medium px-1 text-xs text-[#7123E2]': 'font-Ubuntu-Medium px-1 text-xs text-[#817D83]'} >Input/Output chart</p>
                    </div> 
                    <div onClick={()=> [setTab(9), setLab(false)]} className={tab === 9 ? 'flex items-center pb-5 pt-6 cursor-pointer mx-2 border-b-2 border-[#7123E2] ': 'flex items-center pb-5 pt-6 cursor-pointer mx-2 border-b-2 border-transparent '} > 
                        <p className={tab === 9 ? 'font-Ubuntu-Medium px-1 text-xs text-[#7123E2]': 'font-Ubuntu-Medium px-1 text-xs text-[#817D83]'} >Delivery Record</p>
                    </div>  
                    <div onClick={()=> [setTab(6), setLab(false)]} className={tab === 6 ? 'flex items-center pb-5 pt-6 cursor-pointer mx-2 border-b-2 border-[#7123E2] ': 'flex items-center pb-5 pt-6 cursor-pointer mx-2 border-b-2 border-transparent '} > 
                        <p className={tab === 6 ? 'font-Ubuntu-Medium px-1 text-xs text-[#7123E2]': 'font-Ubuntu-Medium px-1 text-xs text-[#817D83]'} >Ante-natal notes</p>
                    </div>  
                    <div onClick={()=> [setLab(true), setTab(10)]} className={lab ? 'flex items-center pb-5 pt-6 cursor-pointer mx-2 border-b-2 border-[#7123E2] ': 'flex items-center pb-5 pt-6 cursor-pointer mx-2 border-b-2 border-transparent '} > 
                        <p className={lab ? 'font-Ubuntu-Medium px-1 text-xs text-[#7123E2]': 'font-Ubuntu-Medium px-1 text-xs text-[#817D83]'} >Lab Result</p>
                    </div> 
                </div>
            </div>
            {lab &&  
                <div className='w-full flex justify-center border-t border-b border-[#D7D0DF]' >
                    <div className='mx-auto flex ' > 
                        <div onClick={()=> setTab(10)} className={tab === 10 ? 'flex items-center pb-5 pt-6 cursor-pointer mx-2 border-b-2 border-[#7123E2] ': 'flex items-center pb-5 pt-6 cursor-pointer mx-2 border-b-2 border-transparent '} > 
                            <p className={tab === 10 ? 'font-Ubuntu-Medium px-1 text-xs text-[#7123E2]': 'font-Ubuntu-Medium px-1 text-xs text-[#817D83]'} >Microbiology Request form</p>
                        </div> 
                        <div onClick={()=> setTab(11)} className={tab === 11 ? 'flex items-center pb-5 pt-6 cursor-pointer mx-2 border-b-2 border-[#7123E2] ': 'flex items-center pb-5 pt-6 cursor-pointer mx-2 border-b-2 border-transparent '} > 
                            <p className={tab === 11 ? 'font-Ubuntu-Medium px-1 text-xs text-[#7123E2]': 'font-Ubuntu-Medium px-1 text-xs text-[#817D83]'} >Urine Analysis Test</p>
                        </div> 
                        <div onClick={()=> setTab(12)} className={tab === 12 ? 'flex items-center pb-5 pt-6 cursor-pointer mx-2 border-b-2 border-[#7123E2] ': 'flex items-center pb-5 pt-6 cursor-pointer mx-2 border-b-2 border-transparent '} > 
                            <p className={tab === 12 ? 'font-Ubuntu-Medium px-1 text-xs text-[#7123E2]': 'font-Ubuntu-Medium px-1 text-xs text-[#817D83]'} >Microscopic & Culture/Sensitivity</p>
                        </div> 
                        <div onClick={()=> setTab(13)} className={tab === 13 ? 'flex items-center pb-5 pt-6 cursor-pointer mx-2 border-b-2 border-[#7123E2] ': 'flex items-center pb-5 pt-6 cursor-pointer mx-2 border-b-2 border-transparent '} > 
                            <p className={tab === 13 ? 'font-Ubuntu-Medium px-1 text-xs text-[#7123E2]': 'font-Ubuntu-Medium px-1 text-xs text-[#817D83]'} >Serologist Reqest Form</p>
                        </div> 
                        <div onClick={()=> setTab(14)} className={tab === 14 ? 'flex items-center pb-5 pt-6 cursor-pointer mx-2 border-b-2 border-[#7123E2] ': 'flex items-center pb-5 pt-6 cursor-pointer mx-2 border-b-2 border-transparent '} > 
                            <p className={tab === 14 ? 'font-Ubuntu-Medium px-1 text-xs text-[#7123E2]': 'font-Ubuntu-Medium px-1 text-xs text-[#817D83]'} >Haematology Request Form</p>
                        </div> 
                        <div onClick={()=> setTab(15)} className={tab === 15 ? 'flex items-center pb-5 pt-6 cursor-pointer mx-2 border-b-2 border-[#7123E2] ': 'flex items-center pb-5 pt-6 cursor-pointer mx-2 border-b-2 border-transparent '} > 
                            <p className={tab === 15 ? 'font-Ubuntu-Medium px-1 text-xs text-[#7123E2]': 'font-Ubuntu-Medium px-1 text-xs text-[#817D83]'} >Chemistry</p>
                        </div>  
                    </div>
                </div>
            }
            <div className='w-full flex justify-center items-center' >
                {isLoading ?
                    <div className='w-full h-full py-20 justify-center item-center flex flex-1' > 
                        <LoaderIcon size='w-20 h-20 mr-1 ' /> 
                    </div>
                :
                    <>
                        {tab === 0 ?
                            <>
                                {infoTab === 0 ?  
                                    <EditPatientInfo data={data} next={setInfoTab} /> 
                                        :infoTab === 1 ?  
                                            <EditNextOfKin data={data} back={setInfoTab} /> 
                                :null}
                            </>
                                // :tab === 1 ?
                                //     <HositalHistory /> 
                                        :tab === 5 ?
                                            <ContinuationSheet /> 
                                            :tab === 2 ?
                                                <MedicationSheet /> 
                                                :tab === 3 ?
                                                    <ObservationChart /> 
                                                    :tab === 4 ?
                                                        <OIChart /> 
                                                            :tab === 9 ?
                                                                <DeliveryRecord />
                                                                    // :tab === 6 ?
                                                                    //     <AnteNatalNotes />
                                                                            :tab === 7 ?
                                                                                <Request />
                                                                                :tab === 10 ?
                                                                                    <Microbiology />
                                                                                    :tab === 11 ?
                                                                                        <UrineAnalysis />
                                                                                        :tab === 12 ?
                                                                                            <Microscopic />
                                                                                            :tab === 13 ?
                                                                                                <Serologist />
                                                                                                :tab === 14 ?
                                                                                                    <Haematology />
                                                                                                    :tab === 15 ?
                                                                                                        <Chemistry />
                        :null} 
                    </>
                }
            </div>
        </div>
    )
} 