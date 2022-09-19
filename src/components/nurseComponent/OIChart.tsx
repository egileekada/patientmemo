import React from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { IUser, UserContext } from '../../context'
import FindPatient from '../doctorComponent/continuationSheetComponent/FindPatient'
import AddIOChart from './MedicationSheetComponent/AddIOChart'
import OIChartList from './MedicationSheetComponent/OIChartList'

export default function OIChart() {
    
    const userContext: IUser = React.useContext(UserContext);   
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
                <p className='font-Ubuntu-Medium text-lg ml-3 mr-20' >Manage Input/Output chart</p>  
                {!tab && (
                    <button onClick={()=> setTab(true)} className='font-Ubuntu-Medium text-xs bg-[#7123E2] text-white rounded-lg py-3 px-4 ml-auto ' >New Chart</button>
                )}
            </div> 
            <div className='w-full' >
                {!tab && (
                    <OIChartList />
                )}
                {tab && (
                    <div className=' flex flex-1 justify-center items-center' >  
                        <AddIOChart  next={setNext} tab={setTab}  data={data?.data} /> 
                    </div>
                )}
            </div>
        </div>
    )
}
