import { Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/table'
import React from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import DateFormat from '../../DateFormat'
import GetUserInfo from '../../GetUserInfo'
import Lab from '../../../assets/images/lab.png'
import Scan from '../../../assets/images/scan.png'
import Pharmacy from '../../../assets/images/pharmacy.png'

export default function RequestTab(props: any) {

    const [show, setShow] = React.useState(true)
    const [showModal, setShowModal] = React.useState(false)
    const navigate = useNavigate()
    const Information = [
        { 
            doctor: 'Dr. Emmanuel Joseph', 
            drugs: 'Paracetamol', 
            date: '12:00am, 31st, Jul 2021', 
            sign: 'Nurse Jecinta'
        }, 
        { 
            doctor: 'Dr. Emmanuel Joseph', 
            drugs: 'Paracetamol', 
            date: '12:00am, 31st, Jul 2021', 
            sign: 'Nurse Jecinta'
        }, 
        { 
            doctor: 'Dr. Emmanuel Joseph', 
            drugs: 'Paracetamol', 
            date: '12:00am, 31st, Jul 2021', 
            sign: 'Nurse Jecinta'
        }, 
        { 
            doctor: 'Dr. Emmanuel Joseph', 
            drugs: 'Paracetamol', 
            date: '12:00am, 31st, Jul 2021', 
            sign: 'Nurse Jecinta'
        }, 
    ]
 

    console.log(props.info)

    const { isLoading, data } = useQuery('requests', () =>
        fetch(`https://hospital-memo-api.herokuapp.com/requests/623fdff35a87520b1cf6403e?kind=pharmacy`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )  

    console.log(props.value)

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
                        <div onClick={()=> props.next(1)} className='w-10 h-10 rounded-full cursor-pointer flex items-center justify-center bg-[#7123E214]' >
                            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 11L1 6L6 1" stroke="#7123E2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className='ml-3' > 
                            <p className='font-Ubuntu-Medium text-lg' > 
                                {props.info.kind === 'pharmacy'  ?
                                    'Pharmacy Prescription for ' 
                                        :props.info.kind === 'lab'  ?
                                            'Lab Request for ' 
                                                :props.info.kind === 'scan'  ?
                                                    'Scan Request for ' 
                                :null}
                                for {props.value.firstName+' '+props.value.lastName}</p>
                            <p className='font-Ubuntu-Regular text-[#5F6777] mt-2 text-xs' >{DateFormat(props.value.updatedAt)}</p>
                        </div>  
                        <button className='font-Ubuntu-Medium text-xs border-[#7123E2] text-[#7123E2] border rounded-lg h-10 flex justify-center items-center px-6 ml-auto ' >Update Patient</button>
                    </div>
                    <div className='w-full flex mt-4 items-center ml-12' > 
                        <div className='w-5 h-5 rounded-full flex bg-[#7123E214] justify-center items-center' >
                            <svg width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.99967 8.85179C9.53054 8.85179 11.6663 9.26304 11.6663 10.8497C11.6663 12.437 9.51653 12.8337 6.99967 12.8337C4.46939 12.8337 2.33301 12.4224 2.33301 10.8357C2.33301 9.24846 4.48281 8.85179 6.99967 8.85179ZM6.99967 1.16699C8.71415 1.16699 10.0878 2.54017 10.0878 4.25344C10.0878 5.96671 8.71415 7.34047 6.99967 7.34047C5.28578 7.34047 3.91152 5.96671 3.91152 4.25344C3.91152 2.54017 5.28578 1.16699 6.99967 1.16699Z" fill="#7123E2"/>
                            </svg>
                        </div>
                        {/* <p className='font-Ubuntu-Medium text-sm ml-2' >Dr. Emmanuel Joesph</p> */}
                        <GetUserInfo data={props.info.madeBy} />
                    </div>   
                    <div className=' ml-12 px-20 my-10' >
                        {props.info.kind === 'lab' ? 
                            <img src={Lab} className='w-full h-44 rounded-md object-cover'  />
                            : props.info.kind === 'pharmacy' ? 
                                <img src={Pharmacy} className='w-full h-44 rounded-md object-cover' /> :
                                    <img src={Lab} className='w-full h-44 rounded-md object-cover'  />}
                        {/* <div className='w-full bg-yellow-300 h-44 rounded-md' >

                        </div> */}
                        <p className='mt-4 text-[#5F6777] text-base ml-4' >{props.info.description}</p>
                        {/* <ol className='mt-4 text-[#5F6777] text-sm ml-4' type = "1" >
                            <li className='my-1'>Magna egestas. Porttitor ullamcorper</li>
                            <li className='my-1' >Tempor dictumst vel nunc. </li>
                            <li className='my-1'>Auctor tellus nisl, metus phasellus porta morbi et.</li>
                            <li className='my-1'>Erat quis arcu turpis eget et. </li>
                            <li className='my-1'>Turpis et pharetra at viverra et nunc.</li>
                            <li className='my-1'>Tortor, sceler</li>
                        </ol>  */}
                    </div>
                    {props.info.kind === 'pharmacy' ?  
                        <div className=' ml-12 px-10 my-10'>
                            <p className='font-Ubuntu-Bold text-lg ' >Medication Sheet</p>
                            <div className='bg-white w-full py-6' > 
                                <Table variant='unstyled' >
                                    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                                    <Thead>
                                        <Tr className='font-Graphik-Medium text-sm' >
                                            <Th>Doctor</Th>  
                                            <Th>Drug/prescription</Th>  
                                            <Th>Date/Time</Th> 
                                            <Th>Sign</Th>  
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {Information.map((item, index)=> {
                                            return(
                                                <Tr className={index === 1 ? 'font-Ubuntu-Medium text-sm rounded-lg text-white bg-[#7123E2]' : 'font-Ubuntu-Medium text-black text-sm'} key={index} >
                                                    <Td>
                                                        <div className='flex items-center' >
                                                            <div className='w-12 h-12 bg-red-400 rounded-full mr-3' />
                                                            <div>
                                                                <p className='font-Ubuntu-Medium text-sm' >{item.doctor}</p>
                                                                <p className='font-Ubuntu-Regular text-xs mt-1' >12;00am, 12, Jun 2021</p>
                                                            </div>
                                                        </div>
                                                    </Td> 
                                                    <Td> 
                                                        <div>
                                                            <p className='font-Ubuntu-Medium text-sm' >{item.drugs}</p>
                                                            <p className='font-Ubuntu-Regular text-xs mt-1' >001</p>
                                                        </div>
                                                    </Td> 
                                                    <Td>{item.date}</Td> 
                                                    <Td>{item.sign}</Td>  
                                                </Tr> 
                                            )
                                        })}
                                    </Tbody> 
                                </Table>
                            </div>
                        </div>
                    :null}
                </div>
            }
        </div>
    )
} 