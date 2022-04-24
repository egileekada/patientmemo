import { Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import DateFormat from '../../DateFormat'
import GetPatientInfo from '../../GetPatientInfo'
import GetUserInfo from '../../GetUserInfo'
import LoaderIcon from '../../LoaderIcon'

export default function ListOfDonorHistory() {

    const [showDetail, setShowDetail] = React.useState('')
    const [detail, setDetail] = React.useState({} as any)
    const { isLoading, data } = useQuery('donorList', () =>
        fetch(`https://hospital-memo-api.herokuapp.com/blood-donors`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    ) 

    const ClickHandler =(item: any)=> {
        setDetail(item)
        setShowDetail(item._id)
    }

    console.log(data)

    return (
        <div className='w-full h-full ' > 
            {isLoading ?
                <div className='w-full h-full py-20 justify-center item-center flex flex-1' > 
                    <LoaderIcon size='w-20 h-20 mr-1 ' /> 
                </div>
            : 
                <div className='bg-white w-full py-6 px-8' > 
                    <Table variant='unstyled' >
                        {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                        <Thead backgroundColor='#7123E2' >
                            <Tr className='font-Graphik-Medium text-sm h-20 text-white' >
                                <Th>Patient</Th>  
                                <Th>ID Number</Th>  
                                <Th>Donor</Th> 
                                <Th>Relationship</Th>  
                                <Th>Blood Group</Th> 
                                <Th>Status</Th>   
                            </Tr>
                        </Thead>
                        <Tbody >
                            {data.map((item: any, index: any)=> {
                                return(
                                    <Tr onClick={()=> ClickHandler(item)} className={'font-Ubuntu-Medium cursor-pointer text-black text-sm'} key={index} >
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
                                        <Td>
                                            <div className='flex items-center' >
                                                <div className='w-12 h-12 rounded-full bg-[#E0E0E0] flex justify-center items-center' > 
                                                    <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.99996 9.11593C8.89238 9.11593 11.3333 9.58594 11.3333 11.3993C11.3333 13.2133 8.87637 13.6666 5.99996 13.6666C3.10821 13.6666 0.666626 13.1966 0.666626 11.3833C0.666626 9.56927 3.12355 9.11593 5.99996 9.11593ZM5.99996 0.333313C7.95936 0.333313 9.52928 1.90266 9.52928 3.86068C9.52928 5.8187 7.95936 7.38872 5.99996 7.38872C4.04122 7.38872 2.47064 5.8187 2.47064 3.86068C2.47064 1.90266 4.04122 0.333313 5.99996 0.333313Z" fill="#7123E2"/>
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className='font-Ubuntu-Medium text-sm ml-3' ><GetPatientInfo data={item.patient} title='name' /></p> 
                                                </div>
                                            </div>
                                        </Td> 
                                        <Td>{item.relationship}</Td> 
                                        <Td>{item.bloodGroup}</Td> 
                                        <Td>
                                            <div className='flex items-center'>
                                                <div className=' w-2 h-2 rounded-full mr-2 bg-[#30D606]' />
                                                <p>Available</p>
                                            </div>    
                                        </Td> 
                                    </Tr> 
                                )
                            })}
                        </Tbody> 
                    </Table>
                </div>
            // <div className='w-full h-full grid grid-cols-4 gap-6 py-12 px-8' > 
            //         {data.map((item: any)=> {
            //             return(  
            //                 <div onClick={()=> ClickHandler(item)} className={showDetail === item._id ? ' px-4 rounded flex h-full cursor-pointer flex-col py-6 bg-[#7123E2] text-white' : ' px-4 rounded flex h-full cursor-pointer flex-col py-6 bg-[#7123E214]'} > 
            //                     <div className='flex w-full' >
            //                         <div className={showDetail === item._id ? 'w-8 h-8 rounded-full flex bg-[#FFF] justify-center items-center':'w-8 h-8 rounded-full flex bg-[#7123E214] justify-center items-center'} >
            //                             <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            //                                 <path fill-rule="evenodd" clip-rule="evenodd" d="M4 11.2494C1.93225 11.2494 0.25 9.56713 0.25 7.49938C0.25 5.56663 3.34675 1.3715 3.69963 0.900125C3.84138 0.710375 4.15863 0.710375 4.30037 0.900125C4.65325 1.3715 7.75 5.56663 7.75 7.49938C7.75 9.56713 6.06775 11.2494 4 11.2494ZM6.54325 8.06413C6.62012 7.87175 6.52638 7.6535 6.334 7.57662C6.1405 7.49938 5.92337 7.59388 5.84687 7.78588C5.54312 8.54563 4.81825 9.03688 4 9.03688C3.793 9.03688 3.625 9.2045 3.625 9.41188C3.625 9.61888 3.793 9.78688 4 9.78688C5.12725 9.78688 6.1255 9.11038 6.54325 8.06413Z" fill="#F44336"/>
            //                             </svg>
            //                         </div>
            //                         <div className='ml-3 w-auto flex flex-col' > 
            //                             <p className='font-Ubuntu-Medium text-sm w-40' >{item.firstName+' '+item.lastName}</p>
            //                             <p className={showDetail === item._id ? 'font-Ubuntu-Regular mt-1 text-xs': 'font-Ubuntu-Regular text-[#5F6777] mt-1 text-xs'} >Blood group: <span className={showDetail ? ' font-Ubuntu-Bold':' font-Ubuntu-Bold text-[#7123E2]'} >{item.bloodGroup}</span></p>
            //                         </div>
            //                     </div>
            //                     <p className={showDetail === item._id ? 'font-Ubuntu-Medium text-[#fff] ml-auto text-xs mt-auto' : 'font-Ubuntu-Medium text-[#7123E2] ml-auto text-xs mt-auto'}>{item.relationship} to a patient</p> 
            //                 </div> 
            //             )
            //         })}
            //     </div>
            }

            {showDetail ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">  
                            <div style={{ boxShadow: '0px 3px 34px 0px #5F67771C', width: '512px'}} className='  font-Ubuntu-Regular h-auto px-8 rounded-lg py-8 border border-[#E0E0E0] z-50 bg-white ' >
                                <div className='flex items-center' >
                                    <p className='font-Ubuntu-Medium text-base ' >Abayomi josephine Donation Details</p>
                                    <svg onClick={()=> setShowDetail('')} className='ml-auto cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
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
                                    <p className='font-Ubuntu-Medium text-sm ml-auto' >{detail.firstName+' '+detail.lastName}</p>
                                </div>
                                <div className='flex items-center mt-4' >
                                    <p className='font-Ubuntu-Medium text-sm' >Relationship with patient</p>
                                    <p className='font-Ubuntu-Medium text-sm ml-auto' >{detail.relationship}</p>
                                </div>
                                <div className='flex items-center mt-4' >
                                    <p className='font-Ubuntu-Medium text-sm' >Blood Group</p>
                                    <p className='font-Ubuntu-Medium text-sm ml-auto text-[#7123E2]' >{detail.bloodGroup}</p>
                                </div>
                                <div className='flex items-center mt-4' >
                                    <p className='font-Ubuntu-Medium text-sm' >Home Address</p>
                                    <p className='font-Ubuntu-Medium text-sm ml-auto' >{detail.homeAddress}</p>
                                </div>
                                <div className='flex items-center mt-4' >
                                    <p className='font-Ubuntu-Medium text-sm' >Health Challenge</p>
                                    <p className='font-Ubuntu-Medium text-sm ml-auto' >{detail.healthChallenge}</p>
                                </div>
                                <button onClick={()=> setShowDetail('')} className='font-Ubuntu-Medium text-white text-xs py-3 w-full mt-7 bg-[#7123E2] rounded' >Ok</button>
                            </div>
                        </div> 
                        <div className="opacity-25 fixed flex flex-1 inset-0 z-20 bg-black"/>
                    </>
                ) : null} 
        </div>
    )
} 