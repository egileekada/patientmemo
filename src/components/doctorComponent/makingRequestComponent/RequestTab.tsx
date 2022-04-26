import { Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/table'
import React from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import DateFormat from '../../DateFormat'
import GetUserInfo from '../../GetUserInfo'
import Lab from '../../../assets/images/lab.jpg' 
import Pharmacy from '../../../assets/images/pharmacy.jpg' 
import Scan from '../../../assets/images/scan.jpg'

export default function RequestTab(props: any) {

    const [show, setShow] = React.useState(true)
    const [showDetail, setShowDetail] = React.useState(false); 
    const navigate = useNavigate()   

    console.log(props.info)

    return ( 
        <div className='w-full px-16 py-12' > 
            {!show ?
                <div className='w-full grid grid-cols-3 gap-6 ' >
                    <div className='w-full h-52' >
                        <div className='w-full h-40 bg-yellow-300' >

                        </div>
                        <div className='mt-6 px-3 flex items-center' > 
                            <div className='w-8 h-8 rounded-full flex bg-[#7123E214] justify-center items-center' >
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.99967 8.85179C9.53054 8.85179 11.6663 9.26304 11.6663 10.8497C11.6663 12.437 9.51653 12.8337 6.99967 12.8337C4.46939 12.8337 2.33301 12.4224 2.33301 10.8357C2.33301 9.24846 4.48281 8.85179 6.99967 8.85179ZM6.99967 1.16699C8.71415 1.16699 10.0878 2.54017 10.0878 4.25344C10.0878 5.96671 8.71415 7.34047 6.99967 7.34047C5.28578 7.34047 3.91152 5.96671 3.91152 4.25344C3.91152 2.54017 5.28578 1.16699 6.99967 1.16699Z" fill="#7123E2"/>
                                </svg>
                            </div>
                            <div className='ml-3' > 
                                <p className='font-Ubuntu-Medium text-sm' >Pharmacy Request</p>
                                <p className='font-Ubuntu-Regular text-[#5F6777] mt-1 text-xs' >12:00pm, 12, Jun 22</p>
                            </div>
                            <p className='font-Ubuntu-Regular text-[#5F6777] ml-auto text-xs'>Not completed</p>
                        </div>
                    </div> 
                </div>
            :
                <div className='w-full px-12' >
                    <div className='w-full flex ' > 
                        {/* <div onClick={()=> props.next(1)} className='w-10 h-10 rounded-full cursor-pointer flex items-center justify-center bg-[#7123E214]' >
                            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 11L1 6L6 1" stroke="#7123E2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div> */}
                        <div className='ml-3' > 
                            <p className='font-Ubuntu-Medium text-lg' > 
                                {props.info.kind === 'pharmacy'  ?
                                    'Pharmacy Prescription for ' 
                                        :props.info.kind === 'lab'  ?
                                            'Lab Request for ' 
                                                :props.info.kind === 'scan'  ?
                                                    'Scan Request for ' 
                                :null}
                                for <span onClick={()=> setShowDetail(true)} className=' text-[#7123E2] cursor-pointer' >{props.value.firstName+' '+props.value.lastName}</span></p>
                            <p className='font-Ubuntu-Regular text-[#5F6777] mt-2 text-sm' >{DateFormat(props.value.updatedAt)}</p>
                        </div>  
                        {/* <button className='font-Ubuntu-Medium text-xs border-[#7123E2] text-[#7123E2] border rounded-lg h-10 flex justify-center items-center px-6 ml-auto ' >Update Patient</button> */}
                    </div>
                    <div className='w-full flex mt-4 items-center ml-12' > 
                        <div className='w-5 h-5 rounded-full flex bg-[#7123E214] justify-center items-center' >
                            <svg width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.99967 8.85179C9.53054 8.85179 11.6663 9.26304 11.6663 10.8497C11.6663 12.437 9.51653 12.8337 6.99967 12.8337C4.46939 12.8337 2.33301 12.4224 2.33301 10.8357C2.33301 9.24846 4.48281 8.85179 6.99967 8.85179ZM6.99967 1.16699C8.71415 1.16699 10.0878 2.54017 10.0878 4.25344C10.0878 5.96671 8.71415 7.34047 6.99967 7.34047C5.28578 7.34047 3.91152 5.96671 3.91152 4.25344C3.91152 2.54017 5.28578 1.16699 6.99967 1.16699Z" fill="#7123E2"/>
                            </svg>
                        </div>
                        {/* <p className='font-Ubuntu-Medium text-sm ml-2' >Dr. Emmanuel Joesph</p> */}
                        <GetUserInfo data={props.info.madeBy._id} />
                    </div>   
                    <div className=' ml-12 px-20 my-10' >
                        {props.info.kind === 'lab' ? 
                            <img src={Lab} className='w-full h-44 rounded-md object-cover'  />
                            : props.info.kind === 'pharmacy' ? 
                                <img src={Pharmacy} className='w-full h-44 rounded-md object-cover' /> :
                                    null}
                        {/* <div className='w-full bg-yellow-300 h-44 rounded-md' >

                        </div> */}
                    {props.info.kind !== 'scan' && (
                        <>
                            <p className='mt-4 text-[#5F6777] text-base ml-4' >{props.info.description.replace('<p>', '').replace('</p>', '')}</p>
                        </>
                    )}
                    {props.info.kind === 'scan' && (
                        <>
                            {props.info.scanImageURLs.map((item: any)=> {
                                return(
                                    <img src={item} alt='scan' />
                                )
                            })}
                        </>
                    )}
                        {/* <ol className='mt-4 text-[#5F6777] text-sm ml-4' type = "1" >
                            <li className='my-1'>Magna egestas. Porttitor ullamcorper</li>
                            <li className='my-1' >Tempor dictumst vel nunc. </li>
                            <li className='my-1'>Auctor tellus nisl, metus phasellus porta morbi et.</li>
                            <li className='my-1'>Erat quis arcu turpis eget et. </li>
                            <li className='my-1'>Turpis et pharetra at viverra et nunc.</li>
                            <li className='my-1'>Tortor, sceler</li>
                        </ol>  */}
                    </div>
                    {/* {props.info.kind === 'pharmacy' ?  
                        <div className=' ml-12 px-10 my-10'>
                            <p className='font-Ubuntu-Bold text-lg ' >Medication Sheet</p>
                            <MedicalList />
                        </div>
                    :null} */}
                </div>
            }
            
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