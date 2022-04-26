import React from 'react'
import { useNavigate } from 'react-router-dom'
import FindPatient from '../doctorComponent/continuationSheetComponent/FindPatient'
import DeliveryRecordTab from './DeliveryRecordComponent/DeliveryRecordTab'
import SummaryOfRecords from './DeliveryRecordComponent/SummaryOfRecords'

export default function DeliveryRecord() {

    const [tab, setTab] = React.useState(0)
    const [data, setData] = React.useState({} as any)
    const navigate = useNavigate()

    const ClickHandler =()=> {
        {tab === 0 && (
            navigate('/dashboard/nurse')
        )}
        {tab !== 0 && (
            setTab(0)
        )}
    }

    return (
        <div className='w-full h-full ' >
            <div className={tab === 0 ? 'w-full px-12 border-b  flex items-center border-[#D7D0DF] pb-7 pt-8': 'w-full px-12 border-b  flex items-center border-[#D7D0DF]'} > 
                <div onClick={()=> ClickHandler()} className='w-10 h-10 rounded-full absolute cursor-pointer flex items-center justify-center bg-[#7123E214]' >
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 11L1 6L6 1" stroke="#7123E2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div> 
                <p className='font-Ubuntu-Medium  text-lg absolute ml-14 ' >Manage Delivery Record</p> 
                {tab !== 0 && (
                    <div className='mx-auto flex' >
                        <div onClick={()=> setTab(1)} className={tab === 1 ? 'flex items-center pb-7 pt-8 cursor-pointer mx-3 border-b-2 border-[#7123E2]  ': 'flex items-center pb-7 pt-8  cursor-pointer mx-3 border-b-2 border-transparent '} > 
                            <p className={tab === 1 ? 'font-Ubuntu-Medium px-2 text-xs text-[#7123E2]': 'font-Ubuntu-Medium px-2 text-xs text-[#817D83]'} >Delivery Details</p>
                        </div>
                        <div onClick={()=> setTab(2)} className={tab === 2 ? 'flex items-center pb-7 pt-8  ml-4 cursor-pointer mx-3 border-b-2 border-[#7123E2] ': 'flex items-center ml-4 pb-7 pt-8  cursor-pointer mx-3 border-b-2 border-transparent '} > 
                            <p className={tab === 2 ? 'font-Ubuntu-Medium px-2 text-xs text-[#7123E2]': 'font-Ubuntu-Medium px-2 text-xs text-[#817D83]'} >Summary of Labour</p>
                        </div> 
                    </div>  
                )}
            </div> 
            <div className='w-full justify-center flex relative' >
                {tab === 0 ? 
                    <FindPatient header='Patient Delivery Record' body='To create/view a patient’s delivery record, you wil have to verify if patient has a file in the hospital.' next={setTab} value={setData} />
                    :tab === 1 ? 
                        <DeliveryRecordTab data={data} />
                        :tab === 2 ? 
                            <SummaryOfRecords data={data}  />
                :null}
            </div>
        </div>
    )
} 