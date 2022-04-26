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
                <div onClick={()=> navigate('/dashboard/nurse')} className='w-10 h-10 rounded-full absolute cursor-pointer flex items-center justify-center bg-[#7123E214]' > 
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
                </div>
                <div onClick={()=> ClickHandler()} className='w-10 h-10 ml-12 rounded-full absolute cursor-pointer flex items-center justify-center bg-[#7123E214]' >
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 11L1 6L6 1" stroke="#7123E2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div> 
                <p className='font-Ubuntu-Medium  text-lg absolute ml-28 ' >Manage Delivery Record</p> 
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