import { InputGroup, InputLeftElement, Input, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { IUser, UserContext } from '../../context'
import GetPatientInfo from '../GetPatientInfo'
import LoaderIcon from '../LoaderIcon'
import FindPatient from './FindPatient'

export default function ManagePatient() {
    
    const navigate = useNavigate()
    const [patientDetail, setPatientDetail] = React.useState([] as any)
    const [deleteModal, setDeleteModal] = React.useState(false)

    const { isLoading, data, refetch } = useQuery('patientdataAll', () =>
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

    const userContext: IUser = React.useContext(UserContext);   
    React.useEffect(() => {
        setPatientDetail(data)
    }, [data])

    const ClickHandler =(item: any)=> {
        userContext.setPatient(item)
        console.log(item);
        
        localStorage.setItem('patientId', item._id)
        navigate('/dashboard/patientfile')
    }  
    

    const DeleteHandler =async(index: any)=> {
        await fetch(`https://hospital-memo-api.herokuapp.com/admins/remove-patient/${index}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${localStorage.getItem('token')}` 
            }, 
        });

        refetch()
        setDeleteModal(false)
        // {DeleteTank(index)}
    }
    
    return (
        <div className='w-full h-full ' >
            <div className='w-full relative border-b py-5 flex items-center border-[#D7D0DF]' > 
                <div className=' absolute flex items-center pl-8 ' >
                    {/* <div onClick={()=> navigate('/dashboard')} className='w-10 h-10 rounded-full cursor-pointer flex items-center justify-center bg-[#7123E214]' >
                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 11L1 6L6 1" stroke="#7123E2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div> */}
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

                    <div className='bg-white w-full py-6' > 
                    {data?.data?.length !== 0 && (
                        <>
                        <Table variant='unstyled' >
                            {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                            <Thead backgroundColor='#4C04B4' borderRadius='8px' >
                                <Tr className='font-Graphik-Medium text-sm h-20 text-white' >
                                    <Th>Name</Th>  
                                    <Th>ID Number</Th>  
                                    <Th>Address</Th> 
                                    <Th>Age</Th>  
                                    <Th>Occupation</Th> 
                                    <Th>Phone Number</Th>  
                                    <Th>Action</Th>  
                                </Tr>
                            </Thead>
                            <Tbody >
                                {[...data?.data]?.reverse()?.map((item: any, index: any)=> {
                                    return(
                                        <Tr className={'font-Ubuntu-Medium  text-black text-sm'} key={index} >
                                            <Td onClick={()=> ClickHandler(item)} className="cursor-pointer"  >
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
                                            <Td className=' relative z-30 ' >
                                                <svg onClick={()=> setDeleteModal(true)} className="cursor-pointer relative z-30 " width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17 5V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V5H4C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H5V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H17ZM15 4H9V5H15V4ZM17 7H7V18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18V7Z" fill="#000"/>
                                                    <path d="M9 9H11V17H9V9Z" fill="#000"/>
                                                    <path d="M13 9H15V17H13V9Z" fill="#000"/>
                                                </svg>    
                                            </Td> 

                                            {deleteModal ? 
                                                (
                                                    <>
                                                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                                                            <div className='w-80 rounded-lg flex flex-col justify-center items-center bg-white p-8' >
                                                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17 5V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V5H4C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H5V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H17ZM15 4H9V5H15V4ZM17 7H7V18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18V7Z" fill="#ff0000"/>
                                                                    <path d="M9 9H11V17H9V9Z" fill="#ff0000"/>
                                                                    <path d="M13 9H15V17H13V9Z" fill="#ff0000"/>
                                                                </svg>
                                                                <p className=' font-Inter-Medium text-sm mt-3 text-black text-center' >Do You Want To Delete The Patient?</p>
                                                                {/* <p className=' font-Inter-Medium text-xs mt-1 text-gray-400 text-center'>Note: The Storage Tank Of This Product Will Be Deleted</p> */}
                                                                <div className='flex mt-8' >
                                                                    <button onClick={()=> setDeleteModal(false) } className=' bg-gray-400 text-white py-2 rounded mr-1 px-6 font-Inter-Bold text-sm' >Cancel</button>
                                                                    <button  onClick={()=> DeleteHandler(item._id)} className=' bg-[#ff0000] text-white py-2 rounded ml-1 px-6 font-Inter-Bold text-sm' >Delete</button>
                                                                </div> 
                                                                {/* <button onClick={()=> DeleteHandler(item._id)} ></button> */}
                                                            </div>
                                                        </div> 
                                                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                                                    </>
                            ) : null}  
                                        </Tr> 
                                    )
                                })}
                            </Tbody> 
                        </Table>

                        </>
                    )}
                    {data?.data?.length === 0 && (
                        <p className='font-Ubuntu-Medium text-2xl mt-20 text-center '>No Records Found</p>
                    )}
                    </div> 
                }
                
        </div>
    )
}  
