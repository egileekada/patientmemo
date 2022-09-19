import { InputGroup, InputRightElement, Input } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import DateFormat from '../../DateFormat'
import GetUserInfo from '../../GetUserInfo'
import LoaderIcon from '../../LoaderIcon'
import FindPatient from '../../dashboardComponent/FindPatient'

export default function OIChartList() {
 
    const { isLoading, data } = useQuery('OIChartListData', () =>
        fetch(`https://hospital-memo-api.herokuapp.com/nurse/io-chart/${localStorage.getItem("patientId")}`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )     

    const [numb, setNumb] = React.useState(-1) 
    const [showFile, setShowFile] = React.useState(false)
    const [patientIndex, setPatientIndex] = React.useState('')
    const [show, setShow] = React.useState([] as any)

    const Check =(item: any)=> { 
        if(numb !== item){ 
            setNumb(item)
            const obj = [...show, item]
            setShow(obj)
        } 
    } 
 
    return (
        <div className='w-full flex flex-col justify-center items-center  px-16 py-6' >
            {/* <div className='w-auto flex items-center' >
                {showFile && (
                    <svg onClick={()=> setShowFile(false)} className='mr-5 cursor-pointer' width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 11L1 6L6 1" stroke="#7123E2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                )}
                <FindPatient show={setShowFile} numb={setNumb} array={setShow} index={setPatientIndex} nurse={true} />
            </div> */}

            {show.length === 0 && (
                <>  
                    {showFile && (
                        <>
                            {!isLoading && ( 
                                <div className='w-full h-full justify-center flex mt-14' >
                                    <p className='font-Ubuntu-Medium text-xl' >No Record For This Patient</p>
                                </div>
                            )} 
                        </>
                    )}
                </>
            )}

            {isLoading ?
                <div className='w-full h-full py-20 justify-center item-center flex flex-1' > 
                    <LoaderIcon size='w-20 h-20 mr-1 ' /> 
                </div>
            :
                <div className='w-full mt-6' > 
                    <div className=' w-full py-6 rounded-md px-2' >
                        <div className='w-full flex pl-2 justify-center ' >  
                            {Check(data?.data?.patient._id)} 
                                <p id='cubetext' className='font-Ubuntu-Regular text-[#5F6777] mt-1 text-xs' >{DateFormat(data?.data?.createdAt)}</p> 
                        </div>
                        <div className='w-full mt-6' >
                            <div id='cubediv' className='w-full flex items-center py-2 bg-[#F0F5FF] px-3' >
                                <p id='cubetext' className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >Nature of fluid:</p>
                                <p id='cubetext' className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' >{data?.data?.natureOfFluid}</p>
                            </div>
                            <div className='w-full flex items-center py-2 px-3' >
                                <p id='cubetext' className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >Amount:</p>
                                <p id='cubetext' className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' >{data?.data?.urine}mls</p>
                            </div>
                            <div id='cubediv' className='w-full flex items-center py-2 bg-[#F0F5FF] px-3' >
                                <p id='cubetext' className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >Urine:</p>
                                <p id='cubetext' className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' >{data?.data?.urine}m/s</p>
                            </div>
                            <div className='w-full flex items-center py-2 px-3' >
                                <p id='cubetext' className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >Emesis:</p>
                                <p id='cubetext' className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' >{data?.data?.emesis}</p>
                            </div>
                            <div id='cubediv' className='w-full flex items-center py-2 bg-[#F0F5FF] px-3' >
                                <p id='cubetext' className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >BO:</p>
                                <p id='cubetext' className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' >{data?.data?.BO}</p>
                            </div> 
                            <div className='w-full flex items-center py-2 px-3' >
                                <p id='cubetext' className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >Nurse</p>
                                <p id='cubetext' className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' ><GetUserInfo data={data?.data?.nurse._id} /></p>
                            </div> 
                        </div> 
                    </div>
                    {/* {data.map((item: any, index: any)=> {
                        if(showFile){
                            if(item.patient._id === patientIndex) {
                                return( 
                                    <div key={index} id='hoverevent' className=' w-full py-12 rounded-md px-2' >
                                        <div className='w-full flex pl-2' > 
                                            <div id='cubediv' className='w-8 h-8 rounded-full flex bg-[#7123E214] justify-center items-center' >
                                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path id='cubetext' d="M6.99967 8.85179C9.53054 8.85179 11.6663 9.26304 11.6663 10.8497C11.6663 12.437 9.51653 12.8337 6.99967 12.8337C4.46939 12.8337 2.33301 12.4224 2.33301 10.8357C2.33301 9.24846 4.48281 8.85179 6.99967 8.85179ZM6.99967 1.16699C8.71415 1.16699 10.0878 2.54017 10.0878 4.25344C10.0878 5.96671 8.71415 7.34047 6.99967 7.34047C5.28578 7.34047 3.91152 5.96671 3.91152 4.25344C3.91152 2.54017 5.28578 1.16699 6.99967 1.16699Z" fill="#7123E2"/>
                                                </svg>
                                            </div>
                                            {Check(item.patient._id)}
                                            <div className='ml-3' > 
                                                <p className='font-Ubuntu-Medium text-sm' ><GetUserInfo data={item.nurse._id} /></p>
                                                <p id='cubetext' className='font-Ubuntu-Regular text-[#5F6777] mt-1 text-xs' >{DateFormat(item.createdAt)}</p>
                                            </div>
                                        </div>
                                        <div className='w-full mt-6' >
                                            <div id='cubediv' className='w-full flex items-center py-2 bg-[#F0F5FF] px-3' >
                                                <p id='cubetext' className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >Nature of fluid:</p>
                                                <p id='cubetext' className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' >{item.natureOfFluid}</p>
                                            </div>
                                            <div className='w-full flex items-center py-2 px-3' >
                                                <p id='cubetext' className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >Amount:</p>
                                                <p id='cubetext' className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' >{item.urine}mls</p>
                                            </div>
                                            <div id='cubediv' className='w-full flex items-center py-2 bg-[#F0F5FF] px-3' >
                                                <p id='cubetext' className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >Urine:</p>
                                                <p id='cubetext' className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' >{item.urine}m/s</p>
                                            </div>
                                            <div className='w-full flex items-center py-2 px-3' >
                                                <p id='cubetext' className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >Emesis:</p>
                                                <p id='cubetext' className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' >{item.emesis}</p>
                                            </div>
                                            <div id='cubediv' className='w-full flex items-center py-2 bg-[#F0F5FF] px-3' >
                                                <p id='cubetext' className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >BO:</p>
                                                <p id='cubetext' className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' >{item.BO}</p>
                                            </div> 
                                            <div className='w-full flex items-center py-2 px-3' >
                                                <p id='cubetext' className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >Nurse</p>
                                                <p id='cubetext' className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' ><GetUserInfo data={item.nurse._id} /></p>
                                            </div> 
                                        </div> 
                                    </div> 
                                )
                            }
                        } else { 
                            return(  
                                <div key={index} id='hoverevent' className=' w-full py-12 rounded-md px-2' >
                                    <div className='w-full flex pl-2' > 
                                        <div id='cubediv' className='w-8 h-8 rounded-full flex bg-[#7123E214] justify-center items-center' >
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path id='cubetext' d="M6.99967 8.85179C9.53054 8.85179 11.6663 9.26304 11.6663 10.8497C11.6663 12.437 9.51653 12.8337 6.99967 12.8337C4.46939 12.8337 2.33301 12.4224 2.33301 10.8357C2.33301 9.24846 4.48281 8.85179 6.99967 8.85179ZM6.99967 1.16699C8.71415 1.16699 10.0878 2.54017 10.0878 4.25344C10.0878 5.96671 8.71415 7.34047 6.99967 7.34047C5.28578 7.34047 3.91152 5.96671 3.91152 4.25344C3.91152 2.54017 5.28578 1.16699 6.99967 1.16699Z" fill="#7123E2"/>
                                            </svg>
                                        </div>
                                        <div className='ml-3' > 
                                            <p className='font-Ubuntu-Medium text-sm' ><GetUserInfo data={item.nurse._id} /></p>
                                            <p id='cubetext' className='font-Ubuntu-Regular text-[#5F6777] mt-1 text-xs' >{DateFormat(item.createdAt)}</p>
                                        </div>
                                    </div>
                                    <div className='w-full mt-6' >
                                        <div id='cubediv' className='w-full flex items-center py-2 bg-[#F0F5FF] px-3' >
                                            <p id='cubetext' className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >Nature of fluid:</p>
                                            <p id='cubetext' className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' >{item.natureOfFluid}</p>
                                        </div>
                                        <div className='w-full flex items-center py-2 px-3' >
                                            <p id='cubetext' className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >Amount:</p>
                                            <p id='cubetext' className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' >{item.urine}mls</p>
                                        </div>
                                        <div id='cubediv' className='w-full flex items-center py-2 bg-[#F0F5FF] px-3' >
                                            <p id='cubetext' className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >Urine:</p>
                                            <p id='cubetext' className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' >{item.urine}m/s</p>
                                        </div>
                                        <div className='w-full flex items-center py-2 px-3' >
                                            <p id='cubetext' className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >Emesis:</p>
                                            <p id='cubetext' className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' >{item.emesis}</p>
                                        </div>
                                        <div id='cubediv' className='w-full flex items-center py-2 bg-[#F0F5FF] px-3' >
                                            <p id='cubetext' className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >BO:</p>
                                            <p id='cubetext' className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' >{item.BO}</p>
                                        </div> 
                                        <div className='w-full flex items-center py-2 px-3' >
                                            <p id='cubetext' className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >Nurse</p>
                                            <p id='cubetext' className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' ><GetUserInfo data={item.nurse._id} /></p>
                                        </div> 
                                    </div> 
                                </div>  
                            )
                        }
                    })}  */}
                </div> 
            }
        </div>
    )
} 