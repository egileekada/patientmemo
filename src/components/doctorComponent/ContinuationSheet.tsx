import { Input } from '@chakra-ui/input'
import React from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import ContiunuationSheetList from './continuationSheetComponent/ContiunuationSheetList'
import Editor from './continuationSheetComponent/DoctorEditor'
import FindPatient from './continuationSheetComponent/FindPatient'
import PatientContinuationSheet from './continuationSheetComponent/PatientContinuationSheet'

export default function ContinuationSheet() {
    
    const navigate = useNavigate()
    const [next, setNext] = React.useState(0)
    const [datainfo, setData] = React.useState({} as any)
    const [patientInfo, setPatientInfo] = React.useState({} as any)  

    console.log(datainfo)

    return (
        <div className='w-full h-full ' >
            <div className='w-full px-16 border-b py-5  border-[#D7D0DF]  flex items-center' > 
                <div onClick={()=> navigate('/dashboard/doctor')} className='w-10  h-10 rounded-full cursor-pointer flex items-center justify-center bg-[#7123E214]' >
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 11L1 6L6 1" stroke="#7123E2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div > 
                    <p className='font-Ubuntu-Medium text-lg ml-3' >Create Continuation Sheet</p>
                    {/* <p className='font-Ubuntu-Regular text-sm' >12:00PM, 24, Jun 2021 - 12:00PM, 24, Jun 2022</p> */}
                </div>
                {/* {next !== 0 ?
                    <>
                        <div className='mx-auto flex' >
                            <div onClick={()=> setTab(0)} className={tab === 0 ? 'flex items-center pb-7 pt-8 cursor-pointer mx-3 border-b-2 border-[#7123E2]  ': 'flex items-center pb-7 pt-8  cursor-pointer mx-3 border-b-2 border-transparent '} > 
                                <p className={tab === 0 ? 'font-Ubuntu-Medium px-2 text-xs text-[#7123E2]': 'font-Ubuntu-Medium px-2 text-xs text-[#817D83]'} >Sheets</p>
                            </div>
                            <div onClick={()=> setTab(1)} className={tab === 1 ? 'flex items-center pb-7 pt-8  ml-4 cursor-pointer mx-3 border-b-2 border-[#7123E2] ': 'flex items-center ml-4 pb-7 pt-8  cursor-pointer mx-3 border-b-2 border-transparent '} > 
                                <p className={tab === 1 ? 'font-Ubuntu-Medium px-2 text-xs text-[#7123E2]': 'font-Ubuntu-Medium px-2 text-xs text-[#817D83]'} >Requests</p>
                            </div>
                        </div>
                        <button onClick={()=> setNext(3)} className='font-Ubuntu-Medium text-xs bg-[#7123E2] text-white rounded-lg py-3 px-6 ml-auto ' >See Other Sheets</button>
                    </>
                :
                    <div className=' ' >
                        
                    </div>} */}
                {next !== 0 ?  
                    <button onClick={()=> setNext(3)} className='font-Ubuntu-Medium ml-auto text-xs bg-[#7123E2] text-white rounded-lg py-3 px-6 ' >See Other Sheets</button>
                :null}
            </div>
            <div className='w-full h-full px-6 flex ' >
                <div className=' h-auto border-r border-[#D7D0DF] px-4 pr-10 ' >
                    <div className='flex items-center mt-20' >
                        <div className='w-10 h-10 flex justify-center items-center border border-[#7123E2] rounded-full ' >
                            <div className='w-5 h-5 bg-[#7123E2] rounded-full ' />
                        </div>
                        <p className='text-sm font-Ubuntu-Medium ml-3 text-[#7123E2]' >Find Patient</p>
                    </div>
                    <div style={{width: '1px', marginLeft: '19px'}} className='h-20 bg-[#5F6777]' >

                    </div>
                    <div className='flex items-center' >
                        <div className={!next ? 'w-10 h-10 flex justify-center items-center border border-[#5F6777] rounded-full ' : 'w-10 h-10 flex justify-center items-center border border-[#7123E2] rounded-full '} >
                            <div className={!next ? 'w-5 h-5 bg-[#5F6777] rounded-full ': 'w-5 h-5 bg-[#7123E2] rounded-full '} />
                        </div>
                        <p className={!next ? 'text-sm font-Ubuntu-Medium ml-3 text-[#5F6777]': 'text-sm font-Ubuntu-Medium ml-3 text-[#7123E2]'} >Diagnose & Request</p>
                    </div>
                </div>
                <div className='w-4/6 h-auto flex-1 flex flex-col justify-center items-center ' >
                    {next === 0 ? 
                        <FindPatient next={setNext} value={setData} />
                            :next === 1 ? 
                                <Editor value={datainfo} next={setNext} />
                                    :next === 2 ? 
                                        <PatientContinuationSheet data={patientInfo} value={datainfo} next={setNext} />
                                            :next === 3 ? 
                                                <ContiunuationSheetList patientinfo={setPatientInfo} value={datainfo} next={setNext} />
                    :null}
                </div>
            </div> 
        </div>
    )
} 