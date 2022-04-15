import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import LoaderIcon from '../LoaderIcon'

export default function ManagePatient() {
    
    const navigate = useNavigate()
    const [patientDetail, setPatientDetail] = React.useState([] as any)

    const { isLoading, data } = useQuery('patientdata', () =>
        fetch(`https://hospital-memo-api.herokuapp.com/patients`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )  

    React.useEffect(() => {
        setPatientDetail(data)
    }, [data])

    const ClickHandler =(item: any)=> {
        localStorage.setItem('patientId', item)
        navigate('/dashboard/patientfile')
    } 
    
    return (
        <div className='w-full h-full ' >
            <div className='w-full px-12 border-b py-5 flex items-center border-[#D7D0DF]' > 
                <div onClick={()=> navigate('/dashboard')} className='w-10 h-10 rounded-full cursor-pointer flex items-center justify-center bg-[#7123E214]' >
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 11L1 6L6 1" stroke="#7123E2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <p className='font-Ubuntu-Medium text-lg ml-3 mr-20' >Manage Patient</p>  
                <div className='mx-auto w-96' >
                    <InputGroup >
                        <InputLeftElement 
                        children={
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.82567 1.33398C11.4057 1.33398 14.3177 4.24598 14.3177 7.82598C14.3177 9.51502 13.6695 11.0555 12.6088 12.2116L14.6959 14.2945C14.8913 14.4898 14.8919 14.8058 14.6966 15.0011C14.5993 15.0998 14.4706 15.1485 14.3426 15.1485C14.2153 15.1485 14.0873 15.0998 13.9893 15.0025L11.8769 12.896C10.7657 13.7859 9.35679 14.3187 7.82567 14.3187C4.24567 14.3187 1.33301 11.406 1.33301 7.82598C1.33301 4.24598 4.24567 1.33398 7.82567 1.33398ZM7.82567 2.33398C4.79701 2.33398 2.33301 4.79732 2.33301 7.82598C2.33301 10.8547 4.79701 13.3187 7.82567 13.3187C10.8537 13.3187 13.3177 10.8547 13.3177 7.82598C13.3177 4.79732 10.8537 2.33398 7.82567 2.33398Z" fill="#5F6777"/>
                            </svg>
                        }
                        />
                        <Input fontSize='xs' placeholder="Search for patient by name, Blood group, location" border='0px' backgroundColor='#F6F7F9'  /> 
                    </InputGroup> 
                </div>
                {/* <button className='font-Ubuntu-Medium text-xs bg-[#7123E2] text-white rounded-lg py-3 px-4 ml-auto ' >Add New Patient</button> */}
            </div>
                {isLoading ?
                    <div className='w-full h-full py-20 justify-center item-center flex flex-1' > 
                        <LoaderIcon size='w-20 h-20 mr-1 ' /> 
                    </div>
                :
                    <div className='w-full grid grid-cols-4 bg-white relative z-50 gap-6 mt-8 px-8 py-6' > 
                        {data.map((item: any)=> {
                            return(
                                <div key={item._id} onClick={()=> ClickHandler(item._id)} className=' bg-[#7123E2] py-6 px-4 cursor-pointer text-white relative ' >
                                    <div className=' flex items-center relative z-50' > 
                                        <div className='w-8 h-8 rounded-full flex bg-[#FFF] justify-center items-center' >
                                            <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.99967 8.85179C9.53054 8.85179 11.6663 9.26304 11.6663 10.8497C11.6663 12.437 9.51653 12.8337 6.99967 12.8337C4.46939 12.8337 2.33301 12.4224 2.33301 10.8357C2.33301 9.24846 4.48281 8.85179 6.99967 8.85179ZM6.99967 1.16699C8.71415 1.16699 10.0878 2.54017 10.0878 4.25344C10.0878 5.96671 8.71415 7.34047 6.99967 7.34047C5.28578 7.34047 3.91152 5.96671 3.91152 4.25344C3.91152 2.54017 5.28578 1.16699 6.99967 1.16699Z" fill="#7123E2"/>
                                            </svg>
                                        </div>
                                        <p className='font-Ubuntu-Regular ml-auto text-[#FFF] mt-1 text-xs' >Blood group: <span className=' font-Ubuntu-Bold' >+O</span></p>
                                    </div>
                                    <p className='font-Ubuntu-Medium mt-2 relative z-50' >{item.firstName+ ' '+item.lastName}</p>
                                    <div className='flex w-full items-center mt-2 relative z-50' >
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.54317 2.95178C2.54434 2.95178 2.51517 2.98211 2.47842 3.01828C2.33726 3.15536 2.04501 3.44061 2.04206 4.03736C2.03742 4.87211 2.58634 6.42203 5.22942 9.06453C7.86026 11.6942 9.40784 12.2495 10.2443 12.2495H10.2566C10.8533 12.2466 11.138 11.9538 11.2757 11.8132C11.3177 11.77 11.3515 11.7385 11.3754 11.7187C11.9564 11.1342 12.2539 10.699 12.251 10.4202C12.2469 10.1355 11.8928 9.79894 11.4034 9.33344C11.2477 9.18528 11.0785 9.02428 10.9 8.84578C10.4374 8.38436 10.2082 8.46311 9.70417 8.64044C9.00709 8.88486 8.05042 9.21736 6.56409 7.73044C5.07542 6.24294 5.40851 5.28744 5.65234 4.59036C5.82851 4.08636 5.90901 3.85653 5.44584 3.39336C5.26442 3.21253 5.10167 3.04103 4.95176 2.88353C4.48917 2.39703 4.15551 2.04528 3.87259 2.04119H3.86792C3.58851 2.04119 3.15451 2.33986 2.54026 2.95411C2.54201 2.95236 2.54259 2.95178 2.54317 2.95178ZM10.2449 13.1245C8.79126 13.1245 6.89601 11.9672 4.61109 9.68344C2.31742 7.39036 1.15834 5.48928 1.16704 4.03269C1.17234 3.07019 1.67692 2.57728 1.86651 2.39236C1.87642 2.38011 1.91026 2.34686 1.92192 2.33519C2.75842 1.49811 3.32251 1.15978 3.88367 1.1661C4.53526 1.17494 4.99901 1.66261 5.58584 2.28036C5.73109 2.43319 5.88859 2.59944 6.06417 2.77444C6.91584 3.62611 6.67317 4.32086 6.47834 4.87853C6.26601 5.48694 6.08226 6.01194 7.18242 7.11211C8.28376 8.21228 8.80876 8.02853 9.41484 7.81444C9.97309 7.61961 10.6661 7.37578 11.5189 8.22744C11.6916 8.40011 11.8555 8.55586 12.0066 8.69994C12.6273 9.28969 13.1173 9.75578 13.1255 10.4091C13.1324 10.9662 12.7941 11.5338 11.9588 12.3697L11.5889 12.1189L11.9016 12.4245C11.7167 12.6141 11.2243 13.1193 10.2613 13.1245H10.2449Z" fill="#EDE0FF"/>
                                        </svg>
                                        <p className='font-Ubuntu-Regular ml-2 text-sm' >{item.phone}</p>
                                    </div>
                                    <div className='flex w-full items-center mt-2 relative z-50' >
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.14551 1.16602C9.79909 1.16602 11.958 3.34127 11.958 6.01527C11.958 9.30235 8.19201 12.541 7.14551 12.541C6.09901 12.541 2.33301 9.30235 2.33301 6.01527C2.33301 3.34127 4.49192 1.16602 7.14551 1.16602ZM7.14551 2.04102C4.97434 2.04102 3.20801 3.82427 3.20801 6.01527C3.20801 8.80302 6.48867 11.519 7.14551 11.6637C7.80234 11.5184 11.083 8.80243 11.083 6.01527C11.083 3.82427 9.31667 2.04102 7.14551 2.04102ZM7.14609 4.08268C8.19142 4.08268 9.04192 4.93318 9.04192 5.9791C9.04192 7.02443 8.19142 7.87435 7.14609 7.87435C6.10076 7.87435 5.25026 7.02443 5.25026 5.9791C5.25026 4.93318 6.10076 4.08268 7.14609 4.08268ZM7.14609 4.95768C6.58317 4.95768 6.12526 5.4156 6.12526 5.9791C6.12526 6.54202 6.58317 6.99935 7.14609 6.99935C7.70901 6.99935 8.16692 6.54202 8.16692 5.9791C8.16692 5.4156 7.70901 4.95768 7.14609 4.95768Z" fill="#EDE0FF"/>
                                        </svg>
                                        <p className='font-Ubuntu-Regular ml-2 text-sm' >{item.address}</p>
                                    </div>
                                    <div className='w-full h-36 z-10 rounded-t-full absolute left-0 bottom-0 bg-[#5F1AC2]'  />
                                </div>
                            )
                        })} 
                    </div> 
                }
        </div>
    )
}  
