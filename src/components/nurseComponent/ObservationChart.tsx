import React from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import FindPatient from '../doctorComponent/continuationSheetComponent/FindPatient'
import AddObservationchart from './MedicationSheetComponent/AddObservationchart'
import OberservationChartList from './MedicationSheetComponent/OberservationChartList'

export default function ObservationChart() {
    
    const navigate = useNavigate()
    const [tab, setTab] = React.useState(false)
    const [next, setNext] = React.useState(0)  

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

    return (
        <div className='w-full h-full ' >
            <div className='w-full px-12 border-b py-5 flex items-center border-[#D7D0DF]' > 
                {/* <div onClick={()=> navigate('/dashboard/nurse')} className='w-10 h-10 rounded-full cursor-pointer flex items-center justify-center bg-[#7123E214]' >
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 11L1 6L6 1" stroke="#7123E2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div> */}
                <p className='font-Ubuntu-Medium text-lg ml-3 mr-20' >Manage Observation chart</p>  
                {!tab && (
                    <button onClick={()=> setTab(true)} className='font-Ubuntu-Medium text-xs bg-[#7123E2] text-white rounded-lg py-3 px-4 ml-auto ' >Add Observation Chart</button>
                )}
            </div> 
            <div className='w-full' >
                {!tab && (
                    <OberservationChartList />
                )}
                {tab && (
                    <div className=' flex flex-1 justify-center items-center' >  
                        <AddObservationchart next={setNext} tab={setTab} data={data?.data} /> 
                    </div>
                )}
            </div>
        </div>
    )
}
