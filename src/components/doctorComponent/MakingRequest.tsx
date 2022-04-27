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
                
                <div onClick={()=> navigate('/dashboard/doctor')} className='w-10 h-10 rounded-full cursor-pointer flex items-center justify-center bg-[#7123E214]' > 
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
                <div onClick={()=> OnBackHandler()} className='w-10 h-10 ml-3 rounded-full cursor-pointer flex items-center justify-center bg-[#7123E214]' >
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