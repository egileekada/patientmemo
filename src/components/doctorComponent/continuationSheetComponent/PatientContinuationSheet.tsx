import React from 'react'
import { useQuery } from 'react-query'
import DateFormat from '../../DateFormat'
import GetUserInfo from '../../GetUserInfo'

export default function PatientContinuationSheet(props: any) { 

    const { isLoading, data } = useQuery('PatientDataInfo', () =>
        fetch(`https://hospital-memo-api.herokuapp.com/patients/${props.data.patient}`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )   
    
    const [showDetail, setShowDetail] = React.useState(false); 

    return (
        <div className='w-full h-full px-16  ' >
            <div className='w-full pt-8 flex items-center' >  
                <div className='ml-3' > 
                    <p className='font-Ubuntu-Medium text-lg' >Continuation Sheets for <span onClick={()=> setShowDetail(true)} className=' text-[#7123E2] cursor-pointer' >{!isLoading && (data.firstName+' '+data.lastName)}</span></p>
                    <p className='font-Ubuntu-Regular mt-2 text-sm' >{!isLoading && (DateFormat(data.updatedAt))}</p>
                </div> 
            </div> 
            <div className='mt-3 px-3 ml-10 flex items-center' > 
                <div className='w-6 h-6 rounded-full flex bg-[#7123E214] justify-center items-center' >
                    <svg width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.99967 8.85179C9.53054 8.85179 11.6663 9.26304 11.6663 10.8497C11.6663 12.437 9.51653 12.8337 6.99967 12.8337C4.46939 12.8337 2.33301 12.4224 2.33301 10.8357C2.33301 9.24846 4.48281 8.85179 6.99967 8.85179ZM6.99967 1.16699C8.71415 1.16699 10.0878 2.54017 10.0878 4.25344C10.0878 5.96671 8.71415 7.34047 6.99967 7.34047C5.28578 7.34047 3.91152 5.96671 3.91152 4.25344C3.91152 2.54017 5.28578 1.16699 6.99967 1.16699Z" fill="#7123E2"/>
                    </svg>
                </div>
                <GetUserInfo data={props.data.doctor} /> 
            </div>
            <div className="mt-8" dangerouslySetInnerHTML={{ __html: props.data.note}}  />
            {props.doctor && (
                <div className='w-full flex mt-10' >
                    <button onClick={()=> props.next(1)} className='font-Ubuntu-Medium text-xs bg-[#7123E2] text-white rounded-lg py-3 px-4 ml-auto ' >Add Prescription</button>
                </div>
            )}

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
                                    <p className='font-Ubuntu-Medium text-sm ml-auto' >{props.value.firstName+' '+props.value.lastName}</p>
                                </div>
                                <div className='flex items-center mt-4' >
                                    <p className='font-Ubuntu-Medium text-sm' >Gender</p>
                                    <p className='font-Ubuntu-Medium text-sm ml-auto' >{props.value.gender}</p>
                                </div>
                                <div className='flex items-center mt-4' >
                                    <p className='font-Ubuntu-Medium text-sm' >Phone</p>
                                    <p className='font-Ubuntu-Medium text-sm ml-auto ' >{props.value.phone}</p>
                                </div>
                                <div className='flex items-center mt-4' >
                                    <p className='font-Ubuntu-Medium text-sm' >Home Address</p>
                                    <p className='font-Ubuntu-Medium text-sm ml-auto' >{props.value.address}</p>
                                </div>
                                <div className='flex items-center mt-4' >
                                    <p className='font-Ubuntu-Medium text-sm' >State Of Origin</p>
                                    <p className='font-Ubuntu-Medium text-sm ml-auto' >{props.value.stateOfOrigin}</p>
                                </div>
                                <div className='flex items-center mt-4' >
                                    <p className='font-Ubuntu-Medium text-sm' >Next Of Kin Name</p>
                                    <p className='font-Ubuntu-Medium text-sm ml-auto' >{props.value.nextOfKin.firstName+' '+props.value.nextOfKin.lastName}</p>
                                </div> 
                                <div className='flex items-center mt-4' >
                                    <p className='font-Ubuntu-Medium text-sm' >Next Of Kin Phone Number</p>
                                    <p className='font-Ubuntu-Medium text-sm ml-auto' >{props.value.nextOfKin.phone}</p>
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