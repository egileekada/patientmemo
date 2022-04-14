import React from 'react'
import { useQuery } from 'react-query'
import Lab from '../../../assets/images/lab.png'
import Scan from '../../../assets/images/scan.png'
import Pharmacy from '../../../assets/images/pharmacy.png'
import LoaderIcon from '../../LoaderIcon'
import DateFormat from '../../DateFormat'


export default function GetAllRequest(props: any) {
 
    const { isLoading, data } = useQuery('getpatient', () =>
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
        props.info(item)
        props.next(2)
    }

    console.log(data)

    return (
        <div className='w-full px-36' > 
            <div className='w-full py-8 flex items-center' >  
                <div className='ml-0' > 
                    <p className='font-Ubuntu-Medium text-lg' >Medication Sheet</p>
                    {/* <p className='font-Ubuntu-Regular text-sm' >12:00PM, 24, Jun 2021 - 12:00PM, 24, Jun 2022</p> */}
                </div>
                <button className='py-2 text-[#7123E2] border-[#7123E2] rounded-md px-4 border text-xs ml-auto font-Ubuntu-Medium  ' >Update Patient</button>
            </div>
            {isLoading ?
                <div className='w-full h-full py-20 justify-center item-center flex flex-1' > 
                    <LoaderIcon size='w-20 h-20 mr-1 animate-pulse ' /> 
                </div>
            :
                <>
                    {data.length === 0  ?
                        <div className='w-full flex justify-center items-center py-20' >
                            <p className='font-Ubuntu-Regular text-[#5F6777]  text-lg'>No Request Avaliable</p>
                        </div> 
                    :
                    
                        <div className='w-full grid grid-cols-3 gap-6 py-4 ' > 
                            {data.map((item: any)=> {  
                                return(
                                    <>
                                        {item.kind === 'pharmacy' && (
                                            <div className='w-full h-52' >
                                                <div onClick={()=> OnClickHandler(item)} className=' cursor-pointer w-full h-40 ' >
                                                    {item.kind === 'lab' ? 
                                                        <img src={Lab} className='w-full h-40 object-cover'  />
                                                        : item.kind === 'pharmacy' ? 
                                                            <img src={Pharmacy} className='w-full h-40 object-cover' /> :
                                                                <img src={Scan} className='w-full h-40 object-cover'  />}
                                                </div>
                                                <div className='mt-6 px-3 flex items-center' > 
                                                    <div className='w-8 h-8 rounded-full flex bg-[#7123E214] justify-center items-center' >
                                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M6.99967 8.85179C9.53054 8.85179 11.6663 9.26304 11.6663 10.8497C11.6663 12.437 9.51653 12.8337 6.99967 12.8337C4.46939 12.8337 2.33301 12.4224 2.33301 10.8357C2.33301 9.24846 4.48281 8.85179 6.99967 8.85179ZM6.99967 1.16699C8.71415 1.16699 10.0878 2.54017 10.0878 4.25344C10.0878 5.96671 8.71415 7.34047 6.99967 7.34047C5.28578 7.34047 3.91152 5.96671 3.91152 4.25344C3.91152 2.54017 5.28578 1.16699 6.99967 1.16699Z" fill="#7123E2"/>
                                                        </svg>
                                                    </div>
                                                    <div className='ml-3' > 
                                                        <p className='font-Ubuntu-Medium text-sm' > 
                                                            {item.kind === 'lab' ? 
                                                                'Laboratory Request'
                                                                    :item.kind === 'pharmacy' ? 
                                                                        'Pharmacy Request':
                                                                            'Scan Request' } 
                                                        </p>
                                                        <p className='font-Ubuntu-Regular text-[#5F6777] mt-1 text-xs' >{DateFormat(item.updatedAt)}</p>
                                                    </div>
                                                    {item.status === 'pending' ?
                                                        <p className='font-Ubuntu-Regular text-[#5F6777] ml-auto text-xs'>Not completed</p>: 
                                                        <p className='font-Ubuntu-Regular text-[#7123E2] ml-auto text-xs'>Completed</p>

                                                    }
                                                </div>
                                            </div>
                                        )} 
                                    </>
                                )
                            })}
                        </div>
                    } 
            </>
        }
        </div>
    )
} 