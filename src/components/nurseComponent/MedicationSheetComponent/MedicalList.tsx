import { Input, InputGroup, InputLeftElement, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import DateFormat from '../../DateFormat'
import GetUserInfo from '../../GetUserInfo'
import LoaderIcon from '../../LoaderIcon'

export default function MedicalList(props: any) {
    
    const { isLoading, data } = useQuery('MedicalSheet', () =>
        fetch(`https://hospital-memo-api.herokuapp.com/nurse/get-medical-sheet/${localStorage.getItem("patientId")}`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )   
    
    console.log(data)

    return ( 
        <div className='w-full h-full ' >
            {isLoading ?
                <div className='w-full h-full py-20 justify-center item-center flex flex-1' > 
                    <LoaderIcon size='w-20 h-20 mr-1  ' /> 
                </div>
            :
                <div style={{width: '900px'}} className='px-12 mx-auto' > 
                    {props.input && (
                        <div className='mx-auto my-8 w-full' >
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

                                <div className=' w-full py-6 rounded-md px-2' >
                                    {/* <div className='w-full flex pl-2 justify-center ' >  
                                        {Check(data?.data?.patient._id)} 
                                            <p id='cubetext' className='font-Ubuntu-Regular text-[#5F6777] mt-1 text-xs' >{DateFormat(data?.data?.createdAt)}</p> 
                                    </div> */}
                                    <div className='w-full mt-6' >
                                        <div id='cubediv' className='w-full flex items-center py-2 bg-[#F0F5FF] px-3' >
                                            <p id='cubetext' className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >FHR:</p>
                                            <p id='cubetext' className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' >{data?.data?.natureOfFluid}</p>
                                        </div>
                                        <div className='w-full flex items-center py-2 px-3' >
                                            <p id='cubetext' className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >Nurse:</p>
                                            <p id='cubetext' className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' >{data?.data?.urine}</p>
                                        </div>
                                        <div id='cubediv' className='w-full flex flex-col py-2 bg-[#F0F5FF] px-3' >
                                            <p id='cubetext' className=' text-sm font-Ubuntu-Regular ' >Remark</p>
                                            <p id='cubetext' className='text-sm bg-[#5F6777] text-[#5F6777] font-Ubuntu-Medium  ' >{data?.data?.remark}</p>
                                        </div>
                                        {/* <div className='w-full flex items-center py-2 px-3' >
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
                                        </div>  */}
                                    </div> 
                                </div>
                        </div>
                    )}
                </div>
            }
        </div>
    )
} 



// {/* <div className='bg-white w-full py-6' > 
// <Table variant='unstyled' >
//     {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
//     <Thead>
//         <Tr className='font-Graphik-Medium text-sm' >
//             <Th>Doctor</Th>  
//             <Th>Drug/prescription</Th>  
//             <Th>Date/Time</Th> 
//             <Th>Sign</Th>  
//         </Tr>
//     </Thead>
//     <Tbody >
//         {data.map((item: any, index: any)=> {
//             return(
//                 <Tr className={index === 1 ? 'font-Ubuntu-Medium text-sm rounded-lg text-white bg-[#7123E2]' : 'font-Ubuntu-Medium text-black text-sm'} key={index} >
//                     <Td>
//                         <div className='flex items-center' >
//                             <div className='w-12 h-12 bg-red-400 rounded-full mr-3' >
//                                 <GetUserInfo image={true} data={item.request.madeBy._id} />
//                             </div>
//                             <div>
//                                 <p className='font-Ubuntu-Medium text-sm' ><GetUserInfo data={item.request.madeBy._id} /></p>
//                                 <p className='font-Ubuntu-Regular text-xs mt-1 ml-1' >{DateFormat(item.updatedAt)}</p>
//                             </div>
//                         </div>
//                     </Td> 
//                     <Td> 
//                         <div>
//                             <p className='font-Ubuntu-Medium text-sm' >{item.prescription}</p>
//                             <p className='font-Ubuntu-Regular text-xs mt-1' >001</p>
//                         </div>
//                     </Td> 
//                     <Td>{DateFormat(item.createdAt)}</Td> 
//                     <Td><GetUserInfo data={item.nurse._id} /></Td>  
//                 </Tr> 
//             )
//         })}
//     </Tbody> 
// </Table>
// </div> */}