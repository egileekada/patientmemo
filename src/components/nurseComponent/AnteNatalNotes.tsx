import React from 'react'
import { useNavigate } from 'react-router-dom' 
import FindPatient from '../doctorComponent/continuationSheetComponent/FindPatient'
import HistoryOfPresentPregnancy from './AnteNatalNotesComponent/HistoryOfPresentPregnancy'
import PersonnalInformation from './AnteNatalNotesComponent/PersonnalInformation'
import Physicalexamination from './AnteNatalNotesComponent/Physicalexamination'
import Previousmedicalhistory from './AnteNatalNotesComponent/Previousmedicalhistory'
import SpecialInvestigation from './AnteNatalNotesComponent/SpecialInvestigation'

export default function AnteNatalNotes() {

    const [next, setNext] = React.useState(1)
    const navigate = useNavigate()
    const [patientInfo, setPatientInfo] = React.useState({}as any) 
    const [requestData, setData] = React.useState({} as any);

    return (
        <div className='w-full h-full ' >
            <div className='w-full py-3 px-12 border-b flex items-center border-[#D7D0DF]' > 
                <div onClick={()=> navigate('/dashboard/nurse')} className='w-10 h-10 rounded-full cursor-pointer flex items-center justify-center bg-[#7123E214]' >
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 11L1 6L6 1" stroke="#7123E2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <p className='font-Ubuntu-Medium text-lg ml-3' >ANTE-NATAL NOTES</p>
            </div>
            <div className='w-full h-full px-6 flex ' >
                <div className='h-auto w-auto border-r border-[#D7D0DF] px-4 pr-12 ' >
                    {/* <div className='flex items-center mt-20' >
                        <div className='w-10 h-10 flex justify-center items-center border border-[#7123E2] rounded-full ' >
                            <div className='w-5 h-5 bg-[#7123E2] rounded-full ' />
                        </div>
                        <p className='text-sm font-Ubuntu-Medium ml-3 text-[#7123E2]' >Personal Information</p>
                    </div> */}
                    <div className='flex items-center  mt-20' >
                        <div className={next >= 1 ? 'w-10 h-10 flex justify-center items-center border border-[#7123E2] rounded-full ' : 'w-10 h-10 flex justify-center items-center border border-[#5F6777] rounded-full '} >
                            <div className={next >= 1 ? 'w-5 h-5 bg-[#7123E2] rounded-full ': 'w-5 h-5 bg-[#5F6777] rounded-full '} />
                        </div>
                        <p className={next >= 1 ? 'text-sm font-Ubuntu-Medium ml-3 text-[#7123E2]' : 'text-sm font-Ubuntu-Medium ml-3 text-[#5F6777]'} >Personal Information</p>
                    </div>
                    <div style={{width: '1px', marginLeft: '19px'}} className='h-10 bg-[#5F6777]' >

                    </div>
                    <div className='flex items-center' >
                        <div className={next >= 2 ? 'w-10 h-10 flex justify-center items-center border border-[#7123E2] rounded-full ' : 'w-10 h-10 flex justify-center items-center border border-[#5F6777] rounded-full '} >
                            <div className={next >= 2 ? 'w-5 h-5 bg-[#7123E2] rounded-full ': 'w-5 h-5 bg-[#5F6777] rounded-full '} />
                        </div>
                        <p className={next >= 2 ? 'text-sm font-Ubuntu-Medium ml-3 text-[#7123E2]' : 'text-sm font-Ubuntu-Medium ml-3 text-[#5F6777]'} >Prev. Medical History</p>
                    </div>
                    <div style={{width: '1px', marginLeft: '19px'}} className='h-10 bg-[#5F6777]' >

                    </div>
                    <div className='flex items-center' >
                        <div className={next >= 3 ? 'w-10 h-10 flex justify-center items-center border border-[#7123E2] rounded-full ' : 'w-10 h-10 flex justify-center items-center border border-[#5F6777] rounded-full ' } >
                            <div className={next >= 3 ? 'w-5 h-5 bg-[#7123E2] rounded-full ' : 'w-5 h-5 bg-[#5F6777] rounded-full '} />
                        </div>
                        <p className={next >= 3 ? 'text-sm font-Ubuntu-Medium ml-3 text-[#7123E2]' : 'text-sm font-Ubuntu-Medium ml-3 text-[#5F6777]'} >Special Report</p>
                    </div>
                    <div style={{width: '1px', marginLeft: '19px'}} className='h-10 bg-[#5F6777]' >

                    </div>
                    <div className='flex items-center' >
                        <div className={next >= 4 ? 'w-10 h-10 flex justify-center items-center border border-[#7123E2] rounded-full ' : 'w-10 h-10 flex justify-center items-center border border-[#5F6777] rounded-full ' } >
                            <div className={next >= 4 ? 'w-5 h-5 bg-[#7123E2] rounded-full ' : 'w-5 h-5 bg-[#5F6777] rounded-full '} />
                        </div>
                        <p className={next >= 4 ? 'text-sm font-Ubuntu-Medium ml-3 text-[#7123E2]' : 'text-sm font-Ubuntu-Medium ml-3 text-[#5F6777]'} >History of Present Preg.</p>
                    </div>
                    <div style={{width: '1px', marginLeft: '19px'}} className='h-10 bg-[#5F6777]' >

                    </div>
                    <div className='flex items-center' >
                        <div className={next >= 5 ? 'w-10 h-10 flex justify-center items-center border border-[#7123E2] rounded-full ' : 'w-10 h-10 flex justify-center items-center border border-[#5F6777] rounded-full ' } >
                            <div className={next >= 5 ? 'w-5 h-5 bg-[#7123E2] rounded-full ' : 'w-5 h-5 bg-[#5F6777] rounded-full '} />
                        </div>
                        <p className={next >= 5 ? 'text-sm font-Ubuntu-Medium ml-3 text-[#7123E2]' : 'text-sm font-Ubuntu-Medium ml-3 text-[#5F6777]'} >Physical Examination</p>
                    </div>
                    <div style={{width: '1px', marginLeft: '19px'}} className='h-10 bg-[#5F6777]' >

                    </div>
                    <div className='flex items-center' >
                        <div className={next >= 6 ? 'w-10 h-10 flex justify-center items-center border border-[#7123E2] rounded-full ' : 'w-10 h-10 flex justify-center items-center border border-[#5F6777] rounded-full ' } >
                            <div className={next >= 6 ? 'w-5 h-5 bg-[#7123E2] rounded-full ' : 'w-5 h-5 bg-[#5F6777] rounded-full '} />
                        </div>
                        <p className={next >= 6 ? 'text-sm font-Ubuntu-Medium ml-3 text-[#7123E2]' : 'text-sm font-Ubuntu-Medium ml-3 text-[#5F6777]'} >Follow up visit</p>
                    </div>
                    <div style={{width: '1px', marginLeft: '19px'}} className='h-10 bg-[#5F6777]' >

                    </div>
                    <div className='flex items-center' >
                        <div className={next >= 7 ? 'w-10 h-10 flex justify-center items-center border border-[#7123E2] rounded-full ' : 'w-10 h-10 flex justify-center items-center border border-[#5F6777] rounded-full ' } >
                            <div className={next >= 7 ? 'w-5 h-5 bg-[#7123E2] rounded-full ' : 'w-5 h-5 bg-[#5F6777] rounded-full '} />
                        </div>
                        <p className={next >= 7 ? 'text-sm font-Ubuntu-Medium ml-3 text-[#7123E2]' : 'text-sm font-Ubuntu-Medium ml-3 text-[#5F6777]'} >Pelvic Assessment</p>
                    </div>
                </div>
                <div className='flex flex-1 justify-center w-full ' >
                    {next === 0 && (
                        <FindPatient header='Patient Delivery Record' body='To create/view a patient’s delivery record, you wil have to verify if patient has a file in the hospital.'  next={setNext} value={setData} />
                    )}
                    {next === 1 && (
                        <PersonnalInformation data={requestData} next={setNext} />
                    )} 
                    {next === 2 && (
                        <Previousmedicalhistory data={requestData} next={setNext} />
                    )} 
                    {next === 3 && (
                        <SpecialInvestigation data={requestData} next={setNext} />
                    )} 
                    {next === 4 && (
                        <HistoryOfPresentPregnancy data={requestData} next={setNext} />
                    )} 
                    {next === 5 && (
                        <Physicalexamination data={requestData} next={setNext} />
                    )} 
                </div> 
            </div>
        </div>
    )
} 