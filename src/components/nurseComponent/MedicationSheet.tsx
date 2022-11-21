import { Input, InputGroup, InputLeftElement, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'  
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
                <p className='font-Ubuntu-Medium text-lg ml-3 mr-20' >Manage Medication Sheet</p>  
                {next === 3 && ( 
                    <button onClick={()=> CLickHandler()} className='font-Ubuntu-Medium text-xs bg-[#7123E2] text-white rounded-lg py-3 px-4 ml-auto ' >Add Medical Sheet</button>
                )}
            </div> 
            <div className='w-full' > 
                {tab && ( 
                    <div className=' flex flex-1 justify-center pt-10 items-center' > 
                        {next === 3 && ( 
                            <MedicalList />
                        )}
                        {next === 2 && (
                            // <ContiunuationSheetList />
                            <ShowPrescription button='Confirm Prescription' data={info}  next={setNext} />
                        )}
                        {next === 1 && (
                            <AddMedicalList data={data?.data} next={setNext} />
                        )}
                        {next === 0 && (
                            <GetAllRequest next={setNext} info={setInfo} />
                        )}
                    </div>  
                )}
            </div>
        </div>
    )
} 