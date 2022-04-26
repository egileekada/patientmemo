import { InputGroup, InputLeftElement, Input, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import GetPatientInfo from '../GetPatientInfo'
import LoaderIcon from '../LoaderIcon'
import FindPatient from './FindPatient'

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
            <div className='w-full px-12 relative border-b py-5 flex items-center border-[#D7D0DF]' > 
                <div className=' absolute flex items-center ' >
                    <div onClick={()=> navigate('/dashboard')} className='w-10 h-10 rounded-full cursor-pointer flex items-center justify-center bg-[#7123E214]' >
                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 11L1 6L6 1" stroke="#7123E2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <p className='font-Ubuntu-Medium text-lg ml-3 mr-20' >Manage Patient</p>  
                </div>
                <div className='mx-auto ' >
                    <FindPatient /> 
                </div>
                {/* <button className='font-Ubuntu-Medium text-xs bg-[#7123E2] text-white rounded-lg py-3 px-4 ml-auto ' >Add New Patient</button> */}
            </div>
                {isLoading ?
                    <div className='w-full h-full py-20 justify-center item-center flex flex-1' > 
                        <LoaderIcon size='w-20 h-20 mr-1 ' /> 
                    </div>
                :

                    <div className='bg-white w-full py-6 px-8' > 
                        <Table variant='unstyled' >
                            {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                            <Thead backgroundColor='#7123E2' borderRadius='8px' >
                                <Tr className='font-Graphik-Medium text-sm h-20 text-white' >
                                    <Th>Name</Th>  
                                    <Th>ID Number</Th>  
                                    <Th>Address</Th> 
                                    <Th>Age</Th>  
                                    <Th>Occupation</Th> 
                                    <Th>Phone Number</Th>   
                                </Tr>
                            </Thead>
                            <Tbody >
                                {data.map((item: any, index: any)=> {
                                    return(
                                        <Tr onClick={()=> ClickHandler(item._id)} className={'font-Ubuntu-Medium cursor-pointer text-black text-sm'} key={index} >
                                            <Td>
                                                <div className='flex items-center' >
                                                    <div className='w-12 h-12 rounded-full bg-[#E0E0E0] flex justify-center items-center' > 
                                                        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5.99996 9.11593C8.89238 9.11593 11.3333 9.58594 11.3333 11.3993C11.3333 13.2133 8.87637 13.6666 5.99996 13.6666C3.10821 13.6666 0.666626 13.1966 0.666626 11.3833C0.666626 9.56927 3.12355 9.11593 5.99996 9.11593ZM5.99996 0.333313C7.95936 0.333313 9.52928 1.90266 9.52928 3.86068C9.52928 5.8187 7.95936 7.38872 5.99996 7.38872C4.04122 7.38872 2.47064 5.8187 2.47064 3.86068C2.47064 1.90266 4.04122 0.333313 5.99996 0.333313Z" fill="#7123E2"/>
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p className='font-Ubuntu-Medium text-sm ml-3' >{item.firstName+' '+item.lastName}</p> 
                                                    </div>
                                                </div>
                                            </Td> 
                                            <Td>{(item._id).substr(0, 7)}</Td> 
                                            <Td>{item.address}</Td>
                                            <Td>{item.age}</Td>
                                            <Td>{item.occupation}</Td>
                                            <Td>{item.phone}</Td> 
                                        </Tr> 
                                    )
                                })}
                            </Tbody> 
                        </Table>
                    </div> 
                }
        </div>
    )
}  
