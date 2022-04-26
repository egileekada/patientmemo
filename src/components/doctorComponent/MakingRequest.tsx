import React from 'react'
import { useNavigate } from 'react-router-dom'
import FindPatient from './continuationSheetComponent/FindPatient'
import DoctorEditor from './makingRequestComponent/DoctorEditor'
import DoctorRequest from './makingRequestComponent/DoctorRequest'
import RequestTab from './makingRequestComponent/RequestTab'
import Lab from '.././../assets/images/lab.jpg' 
import Pharmacy from '.././../assets/images/pharmacy.jpg' 
import Scan from '.././../assets/images/scan.jpg'

export default function MakingRequest() {
    
    const navigate = useNavigate() 
    const [tab, setTab] = React.useState(0)
    const [kind, setKind] = React.useState('')
    const [showModal, setShowModal] = React.useState(false)
    const [data, setData] = React.useState({} as any)
    const [info, setInfo] = React.useState({} as any)

    const ClickHandler =(item:any)=> {
        setKind(item)
        setTab(2)
        setShowModal(false)
    }
    
    const OnBackHandler =()=> {
        {tab === 0 && (
            navigate('/dashboard/doctor')
        )}
        {tab === 3 && (
            setTab(1)
        )}
        {tab === 2 && (
            setTab(1)
        )}
        {tab === 1 && (
            setTab(0)
        )}
    }

    return (
        <div className='w-full h-full ' >
            <div className='w-full px-16 py-5 border-b border-[#D7D0DF]  flex items-center' > 
                <div onClick={()=> OnBackHandler()} className='w-10 h-10 rounded-full cursor-pointer flex items-center justify-center bg-[#7123E214]' >
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 11L1 6L6 1" stroke="#7123E2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div > 
                    <p className='font-Ubuntu-Medium text-lg ml-3' >Register New Patients</p>
                    {/* <p className='font-Ubuntu-Regular text-sm' >12:00PM, 24, Jun 2021 - 12:00PM, 24, Jun 2022</p> */}
                </div>   
                {tab === 1 && ( 
                    <button onClick={()=> setShowModal(true)} className='font-Ubuntu-Medium text-xs bg-[#7123E2] text-white rounded-lg py-3 px-6 ml-auto ' >Make Request</button> 
                )}
            </div> 
            <div className='w-full px-16 relative' >
                {tab === 0 ? 
                    <div className='w-full flex justify-center items-center' > 
                        <FindPatient header='Enter Patient Name' body='To create a continuation sheet, you wil have to verity patient before you has a file in the hospital.' next={setTab} value={setData} />
                    </div>
                        :tab === 1 ?
                            <DoctorRequest value={data} next={setTab} info={setInfo} />
                                :tab === 2 ?
                                    <DoctorEditor kind={kind} next={setTab} value={data} />
                                        :tab === 3 ? 
                                            <RequestTab info={info} next={setTab} value={data} /> 
                :null}

                {showModal ? 
                    <div style={{ boxShadow: '0px 3px 34px 0px #5F67771C'}} className=' flex flex-col  font-Ubuntu-Regular absolute w-auto h-auto px-4 rounded-lg py-8 top-4 border border-[#E0E0E0] z-50 bg-white right-4  ' >
                        
                        <p onClick={()=> setShowModal(false)} className='text-sm font-Ubuntu-Medium text-[#7123E2] mb-6 ml-auto cursor-pointer mr-6 ' >close</p>
                        <div className=' grid grid-cols-3 font-Ubuntu-Medium' >
                            <div onClick={()=> ClickHandler('lab')} className='w-48 mx-4 cursor-pointer rounded-md' >
                                <div className='w-full rounded-md h-64 ' >
                                    <img src={Lab} alt='lab' className='w-full h-full object-cover rounded-md'  />
                                </div>
                                <p className='text-sm text-[#363E4B] mt-2 ' >Laboratory Request</p>
                            </div>
                            <div onClick={()=> ClickHandler('pharmacy')} className='w-48 mx-4 cursor-pointer rounded-md' >
                                <div className='w-full rounded-md h-64 ' >
                                    <img src={Pharmacy} alt='pharm' className='w-full h-full object-cover rounded-md'  />
                                </div>
                                <p className='text-sm text-[#363E4B] mt-2 ' >Pharmacy Request</p>
                            </div>
                            <div onClick={()=> ClickHandler('scan')} className='w-48 mx-4 cursor-pointer rounded-md' >
                                <div className='w-full rounded-md h-64' >
                                    <img src={Scan} alt='scan' className='w-full h-full object-cover rounded-md'  /> 
                                </div>
                                <p className='text-sm text-[#363E4B] mt-2 ' >Scan Request</p>
                            </div>
                        </div>
                    </div>
                :null}
            </div>

        </div>
    )
} 