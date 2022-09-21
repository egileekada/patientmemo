import { Input } from '@chakra-ui/input'
import { tab } from '@testing-library/user-event/dist/tab'
import React from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { IUser, UserContext } from '../../context'
import DateFormat from '../DateFormat'
import GetUserInfo from '../GetUserInfo'
import ContiunuationSheetList from './continuationSheetComponent/ContiunuationSheetList'
import Editor from './continuationSheetComponent/DoctorEditor'
import FindPatient from './continuationSheetComponent/FindPatient'
import PatientContinuationSheet from './continuationSheetComponent/PatientContinuationSheet'

export default function ContinuationSheet() {
    
    const navigate = useNavigate()
    const [showDetail, setShowDetail] = React.useState(false); 
    const [next, setNext] = React.useState(3)
    const [datainfo, setData] = React.useState({} as any)
    const [patientInfo, setPatientInfo] = React.useState({} as any)  
 
    const userContext: IUser = React.useContext(UserContext);   

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

    console.log(data);
    

    const ClickHandler =()=> { 
        {next === 2 && (
            setNext(3)
        )}
        {next === 3 && (
            setNext(1)
        )}
    }

    return (
        <div className='w-full h-full ' >
            <div className='w-full px-16 border-b py-5  border-[#D7D0DF]  flex' >  
                {next === 2 && (
                    <div onClick={()=> ClickHandler()} className='w-10  h-10 rounded-full cursor-pointer mr-3 flex items-center justify-center bg-[#7123E214]' >
                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 11L1 6L6 1" stroke="#7123E2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                )}
                <div > 
                    <p className='font-Ubuntu-Bold text-lg ' >Continuation Sheet for <span onClick={()=> setShowDetail(true)} className=' text-[#7123E2] cursor-pointer' >{data?.data?.firstName+' '+ data?.data?.lastName}</span></p>
                    <p className='text-xs mt-1 font-Ubuntu-Regular text-[#5F6777]' >{DateFormat(data?.data?.updatedAt)}</p>
                    {next === 2 && 
                        <div className='mt-3   flex items-center' >    
                        <p className='font-Ubuntu-Medium text-sm mr-3' >By {patientInfo?.doctor?.title ? patientInfo?.doctor?.title+' ': ''}{patientInfo?.doctor?.fullName ? patientInfo?.doctor?.fullName : (patientInfo?.doctor?.firstName+' '+patientInfo?.doctor?.lastName)}</p> 
                        </div>
                    }
                </div> 
                {next === 1 ?  
                    <button onClick={()=> setNext(3)} className='font-Ubuntu-Medium ml-auto text-xs bg-[#7123E2] text-white rounded-lg py-3 px-6 ' >See Other Sheets</button>
                :null}
                {next === 3 ?  
                    <button onClick={()=> setNext(1)} className='font-Ubuntu-Medium ml-auto text-xs bg-[#7123E2] text-white rounded-lg py-3 px-6 ' >Add New Record</button>
                :null}
            </div>
            <div className='w-full h-auto px-6 flex ' > 
                <div className='w-4/6 h-auto flex-1 flex flex-col items-center ' >
                    {next === 0 ? 
                        <FindPatient header='Enter Patient Name' body='To create a continuation sheet, you wil have to verity patient before you has a file in the hospital.' next={setNext} value={setData} />
                            :next === 1 ? 
                                <Editor value={userContext.patient} next={setNext} />
                                    :next === 2 ? 
                                        <PatientContinuationSheet data={patientInfo} value={userContext.patient} next={setNext} />
                                            :next === 3 ? 
                                                <ContiunuationSheetList patientinfo={setPatientInfo} value={userContext.patient} next={setNext} />
                    :null}
                </div>
            </div> 

        {showDetail ? 
            (
                <>
                    <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">  
                        <div style={{ boxShadow: '0px 3px 34px 0px #5F67771C', width: '512px'}} className='  font-Ubuntu-Regular h-auto px-8 rounded-lg py-8 border border-[#E0E0E0] z-50 bg-white ' >
                            <div className='flex items-center' >
                                <p className='font-Ubuntu-Medium text-base ' >Patient Details</p>
                                <svg onClick={()=> setShowDetail(false)} className='ml-auto cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                    <g id="Iconly_Light_Close_Square" data-name="Iconly/Light/Close Square" transform="translate(0.75 0.75)">
                                        <g id="Close_Square" data-name="Close Square">
                                        <path id="Stroke_1" data-name="Stroke 1" d="M4.792,0,0,4.792" transform="translate(6.853 6.845)" fill="none" stroke="#7123E2" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                                        <path id="Stroke_2" data-name="Stroke 2" d="M4.8,4.8,0,0" transform="translate(6.85 6.843)" fill="none" stroke="#7123E2" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                                        <path id="Stroke_3" data-name="Stroke 3" d="M13.584,0H4.915C1.894,0,0,2.139,0,5.166v8.168C0,16.361,1.885,18.5,4.915,18.5h8.668c3.031,0,4.917-2.139,4.917-5.166V5.166C18.5,2.139,16.614,0,13.584,0Z" fill="none" stroke="#7123E2" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div className='flex items-center mt-7' >
                                <p className='font-Ubuntu-Medium text-sm' >Patient Name</p>
                                <p className='font-Ubuntu-Medium text-sm ml-auto' >{data?.data?.firstName+' '+data?.data?.lastName}</p>
                            </div>
                            <div className='flex items-center mt-4' >
                                <p className='font-Ubuntu-Medium text-sm' >Gender</p>
                                <p className='font-Ubuntu-Medium text-sm ml-auto' >{data?.data?.gender}</p>
                            </div>
                            <div className='flex items-center mt-4' >
                                <p className='font-Ubuntu-Medium text-sm' >Phone</p>
                                <p className='font-Ubuntu-Medium text-sm ml-auto ' >{data?.data?.phone}</p>
                            </div>
                            <div className='flex items-center mt-4' >
                                <p className='font-Ubuntu-Medium text-sm' >Home Address</p>
                                <p className='font-Ubuntu-Medium text-sm ml-auto' >{data?.data?.address}</p>
                            </div>
                            <div className='flex items-center mt-4' >
                                <p className='font-Ubuntu-Medium text-sm' >State Of Origin</p>
                                <p className='font-Ubuntu-Medium text-sm ml-auto' >{data?.data?.stateOfOrigin}</p>
                            </div>
                            <div className='flex items-center mt-4' >
                                <p className='font-Ubuntu-Medium text-sm' >Next Of Kin Name</p>
                                {/* <p className='font-Ubuntu-Medium text-sm ml-auto' >{data?.data?.nextOfKin?.firstName+' '+data?.data?.nextOfKin?.lastName}</p> */}
                            </div> 
                            <div className='flex items-center mt-4' >
                                <p className='font-Ubuntu-Medium text-sm' >Next Of Kin Phone Number</p>
                                {/* <p className='font-Ubuntu-Medium text-sm ml-auto' >{data?.data?.nextOfKin?.phone}</p> */}
                            </div> 
                            <button onClick={()=> setShowDetail(false)} className='font-Ubuntu-Medium text-white text-xs py-3 w-full mt-7 bg-[#7123E2] rounded' >Ok</button>
                        </div>
                    </div> 
                    <div className="opacity-25 fixed flex flex-1 inset-0 z-20 bg-black"/>
                </>
            ) : null} 
        </div>
    )
} 