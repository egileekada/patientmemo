import React from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import DateFormat from '../DateFormat'
import LoaderIcon from '../LoaderIcon'
import Lab from '../../assets/images/lab.png'
import Scan from '../../assets/images/scan.png'
import Pharmacy from '../../assets/images/pharmacy.png'
import GetPatientInfo from '../GetPatientInfo'
import GetUserInfo from '../GetUserInfo'
import MedicalList from '../nurseComponent/MedicationSheetComponent/MedicalList'

export default function RequestTab() {

    const [show, setShow] = React.useState(false)
    const [info, setInfo] = React.useState({} as any)
    // const [showModal, setShowModal] = React.useState(false)
    // const navigate = useNavigate() 
 
    const { isLoading, data } = useQuery('requests', () =>
        fetch(`https://hospital-memo-api.herokuapp.com/requests`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )   
    const OnClickHandler =(item: any)=> {
        setInfo(item)
        setShow(true)
    } 

    return ( 
        <div className='w-full px-16 py-12' > 
            {!show ?
                <div>
                    {isLoading ?
                        <div className='w-full h-full py-20 justify-center item-center flex flex-1' >  
                            <LoaderIcon size='w-20 h-20 animate-spin ' /> 
                        </div>
                    :
                        <div className='w-full h-full grid grid-cols-4 gap-6 py-12 px-8' > 
                            {data.map((item: any)=> {
                                if(item.kind === 'pharmacy'){
                                    return(  
                                        <div className='w-full h-52' > 
                                            <div onClick={()=> OnClickHandler(item)} className=' cursor-pointer w-full h-40 ' >
                                                {item.kind === 'lab' ? 
                                                    <img src={Lab} alt='lab' className='w-full h-40 object-cover'  />
                                                    : item.kind === 'pharmacy' ? 
                                                        <img src={Pharmacy} alt='pharmacy' className='w-full h-40 object-cover' /> :
                                                            <img src={Scan} alt='scan' className='w-full h-40 object-cover'  />}
                                            </div>
                                            {/* <div className='w-full h-40 bg-yellow-300' >

                                            </div> */}
                                            <div className='mt-6 px-3 flex items-center' > 
                                                <div className='w-8 h-8 rounded-full flex bg-[#7123E214] justify-center items-center' >
                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.99967 8.85179C9.53054 8.85179 11.6663 9.26304 11.6663 10.8497C11.6663 12.437 9.51653 12.8337 6.99967 12.8337C4.46939 12.8337 2.33301 12.4224 2.33301 10.8357C2.33301 9.24846 4.48281 8.85179 6.99967 8.85179ZM6.99967 1.16699C8.71415 1.16699 10.0878 2.54017 10.0878 4.25344C10.0878 5.96671 8.71415 7.34047 6.99967 7.34047C5.28578 7.34047 3.91152 5.96671 3.91152 4.25344C3.91152 2.54017 5.28578 1.16699 6.99967 1.16699Z" fill="#7123E2"/>
                                                    </svg>
                                                </div>
                                                <div className='ml-3' > 
                                                    <p className='font-Ubuntu-Medium text-sm' >Pharmacy Request</p>
                                                    <p className='font-Ubuntu-Regular text-[#5F6777] mt-1 text-xs' >{DateFormat(item.updatedAt)}</p>
                                                </div>
                                                {item.status === 'pending' ?
                                                    <p className='font-Ubuntu-Regular text-[#5F6777] ml-auto text-xs'>Not completed</p>: 
                                                    <p className='font-Ubuntu-Regular text-[#7123E2] ml-auto text-xs'>Completed</p> 
                                                }
                                            </div>
                                        </div>  
                                    )
                                }
                            })}
                        </div>
                    }
                </div>
            :
                <div className='w-full px-12' >
                    <div className='w-full flex ' > 
                        <div onClick={()=> setShow(false)} className='w-10 h-10 rounded-full cursor-pointer flex items-center justify-center bg-[#7123E214]' >
                            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 11L1 6L6 1" stroke="#7123E2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className='ml-3' > 
                            <p className='font-Ubuntu-Medium text-lg flex' >Pharmacy Request for <GetPatientInfo title='name' data={info.patient} />
                            </p>
                            <p className='font-Ubuntu-Regular text-[#5F6777] mt-2 text-xs' > <GetPatientInfo title='' data={info.patient} /></p>
                        </div>  
                        {/* <button className='font-Ubuntu-Medium text-xs border-[#7123E2] text-[#7123E2] border rounded-lg h-10 flex justify-center items-center px-6 ml-auto ' >Update Patient</button> */}
                    </div>
                    <div className='w-full flex mt-4 items-center ml-12' > 
                        <div className='w-5 h-5 rounded-full flex bg-[#7123E214] justify-center items-center' >
                            <svg width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.99967 8.85179C9.53054 8.85179 11.6663 9.26304 11.6663 10.8497C11.6663 12.437 9.51653 12.8337 6.99967 12.8337C4.46939 12.8337 2.33301 12.4224 2.33301 10.8357C2.33301 9.24846 4.48281 8.85179 6.99967 8.85179ZM6.99967 1.16699C8.71415 1.16699 10.0878 2.54017 10.0878 4.25344C10.0878 5.96671 8.71415 7.34047 6.99967 7.34047C5.28578 7.34047 3.91152 5.96671 3.91152 4.25344C3.91152 2.54017 5.28578 1.16699 6.99967 1.16699Z" fill="#7123E2"/>
                            </svg>
                        </div>
                        <GetUserInfo data={info.madeBy._id} />
                        {/* <p className='font-Ubuntu-Medium text-sm ml-2' >Dr. Emmanuel Joesph</p> */}
                    </div>   
                    <div className=' ml-12 px-20 my-10' >

                        {info.kind === 'lab' ? 
                            <img src={Lab} className='w-full h-44 rounded-md object-cover'  />
                            : info.kind === 'pharmacy' ? 
                                <img src={Pharmacy} className='w-full h-44 rounded-md object-cover' /> :
                                    <img src={Lab} className='w-full h-44 rounded-md object-cover'  />}
                        {/* <div className='w-full bg-yellow-300 h-44 rounded-md' >

                        </div> */}
                        <p className='mt-4 text-[#5F6777] text-base ml-4' >{info.description.replace('<p>', '').replace('</p>', '')}</p>
                        {/* <ol className='mt-4 text-[#5F6777] text-sm ml-4' type = "1" >
                            <li className='my-1'>Magna egestas. Porttitor ullamcorper</li>
                            <li className='my-1' >Tempor dictumst vel nunc. </li>
                            <li className='my-1'>Auctor tellus nisl, metus phasellus porta morbi et.</li>
                            <li className='my-1'>Erat quis arcu turpis eget et. </li>
                            <li className='my-1'>Turpis et pharetra at viverra et nunc.</li>
                            <li className='my-1'>Tortor, sceler</li>
                        </ol>  */}
                    </div>
                    <div className=' ml-12 px-10 my-10'>
                        <p className='font-Ubuntu-Bold text-lg ' >Medication Sheet</p> 
                        <MedicalList />
                    </div>
                </div>
            }
        </div>
    )
} 