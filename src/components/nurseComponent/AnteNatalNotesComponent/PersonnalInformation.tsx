import { Input, Select } from '@chakra-ui/react';
import { useFormik } from 'formik';
import { motion } from 'framer-motion';
import React from 'react'
import { useNavigate } from 'react-router';
import * as yup from 'yup' 
import LoaderIcon from '../../LoaderIcon';

export default function PersonnalInformation(props: any) {

    const navigate = useNavigate()
    const [loading, setLoading] = React.useState(false);  

    return (
        <div className='w-auto h-full px-12 py-10 font-Ubuntu-Regular' > 
            <p className='text-lg font-Ubuntu-Bold' >Personal Information</p>
            <div className='w-full flex mt-8' >
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >First Name</p>
                    <Input value={props.data.firstName}
                        fontSize='sm' placeholder='Enter First Name' />
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Last Name/Surname</p>
                    <Input  value={props.data.lastName}
                        fontSize='sm' placeholder='Enter Last Name' />
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Other Names</p>
                    <Input  value={props.data.otherNames}
                        fontSize='sm' placeholder='Enter other Names' />
                </div>
            </div>
            <div className='w-full flex mt-5' >
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Special Points</p>
                    <Input onChange={(e)=> props.setData({...props.data, specialPoint: e.target.value})} 
                        fontSize='sm' placeholder='...' />
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Date of Booking</p>
                    <Input  onChange={(e)=> props.setData({...props.data, dateOfBooking: e.target.value})} 
                        fontSize='sm' placeholder='...' />
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Indication for Booking</p>
                    <Input  onChange={(e)=> props.setData({...props.data, indicationOfBook: e.target.value})} 
                        fontSize='sm' placeholder='...' />
                </div>
            </div>
            <div className='w-full flex mt-5' >
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >L.M.P</p>
                    <Input  onChange={(e)=> props.setData({...props.data, LMP: e.target.value})} 
                        fontSize='sm' placeholder='L.M.P' />
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >E.D.D</p>
                    <Input  onChange={(e)=> props.setData({...props.data, EDD: e.target.value})} 
                        fontSize='sm' placeholder='E.D.D' />
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Address</p>
                    <Input  value={props.data.address}
                        fontSize='sm' placeholder='Home Address' />
                </div> 
            </div>
            <div className='w-full flex mt-5' >
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >State of Origin</p>
                    <Input  value={props.data.stateOfOrigin}
                        fontSize='sm' placeholder='Enter Your State' />
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Age</p>
                    <Input  value={props.data.age}
                        fontSize='sm' placeholder='Enter Age' />
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Occupation</p>
                    <Input  value={props.data.occupation}
                        fontSize='sm' placeholder='What do you do?' />
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Tribe/Nationality</p>
                    <Input  onChange={(e)=> props.setData({...props.data, nationality: e.target.value})} 
                        fontSize='sm' placeholder='0' />
                </div>
            </div>
            <p className='text-xs mt-8' >HUSBAND (IF ANY)</p>
            <div className='w-full flex mt-6' >
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Full Name</p>
                    <Input  onChange={(e)=> props.setData({...props.data, "husband.name": e.target.value})} 
                        fontSize='sm' placeholder='Primary/Secondary/Post Sec.' />
                </div> 
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Occupation</p>
                    <Input  onChange={(e)=> props.setData({...props.data, "husband.occupation": e.target.value})} 
                        fontSize='sm' placeholder='Where does he work?' />
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Employer</p>
                    <Input  onChange={(e)=> props.setData({...props.data, "husband.employer": e.target.value})} 
                        fontSize='sm' placeholder='Employer' />
                </div>
            </div> 
            <div className='w-full flex pb-10 py-4' >
                <button onClick={()=> navigate('/dashboard/nurse')}  className='  py-3 w-36 ml-auto text-[#A5B0C1] text-sm mt-4 rounded-full' >Cancel</button>
                {loading ?  
                    <button className='bg-[#7123E2] h-12 flex justify-center items-center w-48  text-white text-sm mt-6 rounded-full' >
                        <div className='flex items-center ' >
                            <LoaderIcon size='w-10 h-10 mr-1 ' /> 
                            Loading
                        </div> 
                    </button>
                    :
                    <button onClick={()=> props.next(2) } className='bg-[#7123E2] py-3 w-48  text-white text-sm mt-6 rounded-full' >Next</button>
                }
            </div>
        </div>
    )
} 