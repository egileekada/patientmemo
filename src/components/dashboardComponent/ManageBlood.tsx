import { InputGroup, InputRightElement, Input, Select } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import * as yup from 'yup'
import { useFormik } from 'formik'; 
import LoaderIcon from '../LoaderIcon'
import { useQuery } from 'react-query'
import ListOfDonors from './otherComponent/ListOfDonor'
import ListOfDonorHistory from './otherComponent/ListOfDonorHistory'
import Modal from '../Modal'

export default function ManageBloodBank() {
    
    const [message, setMessage] = React.useState('');
    const [modal, setModal] = React.useState(0);
    const navigate = useNavigate()
    const [tab, setTab] = React.useState(0)
    const [showModal, setShowModal] = React.useState(false)
    const [showDetail, setShowDetail] = React.useState(false)
    const [loading, setLoading] = React.useState(false);

    const loginSchema = yup.object({ 
        firstName: yup.string().required('Required'),
        patientId: yup.string().required('Required'),
        lastName: yup.string().required('Required'),
        relationship: yup.string().required('Required'),
        bloodGroup: yup.string().required('Required'),
        homeAddress: yup.string().required('Required'),
        healthChallenge: yup.string().required('Required'),  
    })    
 
    // formik
    const formik = useFormik({
        initialValues: {firstName: '', patientId: '',lastName: '', bloodGroup: '', relationship: '',homeAddress: '', healthChallenge: ''},
        validationSchema: loginSchema,
        onSubmit: () => {},
    });    

    const submit = async () => {  

        if (!formik.dirty) {
            setMessage('You have to fill in the form to continue')
            setModal(2)           
            const t1 = setTimeout(() => {  
                setModal(0)       
                setLoading(false)  
                clearTimeout(t1); 
            }, 2000);  
            return;
        }else if (!formik.isValid) {
            setMessage('You have to fill in the form to continue')
            setModal(2)           
            const t1 = setTimeout(() => {  
                setModal(0)       
                setLoading(false)  
                clearTimeout(t1); 
            }, 2000);  
            return;
        }else {
            setLoading(true);
            const request = await fetch(`https://hospital-memo-api.herokuapp.com/blood-donors`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(formik.values),
            });

            const data = await request.json();

            console.log('patient '+request.status)
            console.log('patient '+data)
            if (request.status === 200) {    
                setMessage('Records Added Successfully')
                setModal(1)                   
                const t1 = setTimeout(() => {  
                    setModal(0)     
                    setShowModal(false)
                    setLoading(false)  
                    clearTimeout(t1);
                }, 3000); 
            }else {
                // alert(data.message);
                // console.log(data) 
                setMessage('Error Occurred')
                setModal(2)           
                const t1 = setTimeout(() => {  
                    setModal(0)       
                    setLoading(false)  
                    clearTimeout(t1); 
                }, 2000); 
            } 
        }
    }  

    const { isLoading, data } = useQuery('', () =>
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

    return (
        <div className='w-full h-auto' >
            <Modal message={message} modal={modal} />
            <div className='w-full px-12 border-b flex pb-5 pt-5 items-center border-[#D7D0DF]' > 
                <div onClick={()=> navigate('/dashboard/laboratory')} className='w-10 h-10 rounded-full cursor-pointer flex items-center justify-center bg-[#7123E214]' >
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 11L1 6L6 1" stroke="#7123E2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <p className='font-Ubuntu-Medium text-lg ml-3 mr-20' >Manage Blood Bank</p> 
                <button onClick={()=> setShowModal(true)} className='font-Ubuntu-Medium text-xs bg-[#7123E2] text-white rounded-lg py-3 px-6 ml-auto ' >Add Donor</button>
            </div>
            <div className='w-full h-auto relative' >
                {/* {tab === 0 ?  
                    <ListOfDonors />
                : 
                // } */}
                <ListOfDonorHistory />
                {showModal ? (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">  
                            <div style={{ boxShadow: '0px 3px 34px 0px #5F67771C'}} className='  font-Ubuntu-Regular absolute w-auto h-auto px-8 rounded-lg py-8 top-4 border border-[#E0E0E0] z-50 bg-white right-4  ' > 
                                <div className='flex items-center' >
                                    <p className='font-Ubuntu-Medium text-lg ' >Donor Details</p>
                                    <svg onClick={()=> setShowModal(false)} className='ml-auto cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                        <g id="Iconly_Light_Close_Square" data-name="Iconly/Light/Close Square" transform="translate(0.75 0.75)">
                                            <g id="Close_Square" data-name="Close Square">
                                            <path id="Stroke_1" data-name="Stroke 1" d="M4.792,0,0,4.792" transform="translate(6.853 6.845)" fill="none" stroke="#7123E2" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                                            <path id="Stroke_2" data-name="Stroke 2" d="M4.8,4.8,0,0" transform="translate(6.85 6.843)" fill="none" stroke="#7123E2" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                                            <path id="Stroke_3" data-name="Stroke 3" d="M13.584,0H4.915C1.894,0,0,2.139,0,5.166v8.168C0,16.361,1.885,18.5,4.915,18.5h8.668c3.031,0,4.917-2.139,4.917-5.166V5.166C18.5,2.139,16.614,0,13.584,0Z" fill="none" stroke="#7123E2" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div className='w-full flex mt-8' >
                                    <div style={{width: '210px'}} className='mr-2' >
                                        <p className='text-xs mb-2 font-Ubuntu-Medium' >First Name</p>
                                        <Input 
                                            name="firstName"
                                            onChange={formik.handleChange}
                                            onFocus={() =>
                                                formik.setFieldTouched("firstName", true, true)
                                            }  
                                            fontSize='sm' placeholder='Enter First Name' />
                                        <div className="w-full h-auto pt-2">
                                            {formik.touched.firstName && formik.errors.firstName && (
                                                <motion.p
                                                    initial={{ y: -100, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                                >
                                                    {formik.errors.firstName}
                                                </motion.p>
                                            )}
                                        </div> 
                                    </div>
                                    <div style={{width: '210px'}} className='mr-2' >
                                        <p className='text-xs mb-2 font-Ubuntu-Medium' >Last Name/Surname</p>
                                        <Input  
                                            name="lastName"
                                            onChange={formik.handleChange}
                                            onFocus={() =>
                                                formik.setFieldTouched("lastName", true, true)
                                            }  
                                            fontSize='sm' placeholder='Enter Last Name' />
                                        <div className="w-full h-auto pt-2">
                                            {formik.touched.lastName && formik.errors.lastName && (
                                                <motion.p
                                                    initial={{ y: -100, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                                >
                                                    {formik.errors.lastName}
                                                </motion.p>
                                            )}
                                        </div> 
                                    </div> 
                                </div>
                                <div className='w-full flex mt-4' >
                                    <div style={{width: '210px'}} className='mr-2' >
                                        <p className='text-xs mb-2 font-Ubuntu-Medium' >Patient <span className='text-[#5F6777] font-Ubuntu-Regular' >(If non enter NIL)</span></p>
                                        <Select  
                                            name="patientId"
                                            onChange={formik.handleChange}
                                            onFocus={() =>
                                                formik.setFieldTouched("patientId", true, true)
                                            }  
                                            fontSize='sm' placeholder='Select Patient Name' >
                                                {data.map((item: any)=> {
                                                    return(
                                                        <option value={item._id} >{item.firstName+' '+item.lastName}</option>
                                                    )
                                                })}
                                        </Select>
                                        <div className="w-full h-auto pt-2">
                                            {formik.touched.patientId && formik.errors.patientId && (
                                                <motion.p
                                                    initial={{ y: -100, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                                >
                                                    {formik.errors.patientId}
                                                </motion.p>
                                            )}
                                        </div> 
                                    </div>
                                    <div style={{width: '210px'}} className='mr-2' >
                                        <p className='text-xs mb-2 font-Ubuntu-Medium' >Relationship <span className='text-[#5F6777] font-Ubuntu-Regular' >(If non enter NIL)</span></p>
                                        <Input  
                                            name="relationship"
                                            onChange={formik.handleChange}
                                            onFocus={() =>
                                                formik.setFieldTouched("relationship", true, true)
                                            }  
                                            fontSize='sm' placeholder='Enter Relationship' />
                                        <div className="w-full h-auto pt-2">
                                            {formik.touched.relationship && formik.errors.relationship && (
                                                <motion.p
                                                    initial={{ y: -100, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                                >
                                                    {formik.errors.relationship}
                                                </motion.p>
                                            )}
                                        </div> 
                                    </div> 
                                </div>
                                <div className=' w-full mr-2 mt-4' >
                                    <p className='text-xs mb-2 font-Ubuntu-Medium' >Blood Group <span className='text-[#5F6777] font-Ubuntu-Regular' >(Please carefully confirm)</span></p>
                                    <Select  
                                        name="bloodGroup"
                                        onChange={formik.handleChange}
                                        onFocus={() =>
                                            formik.setFieldTouched("bloodGroup", true, true)
                                        }  
                                        fontSize='sm' placeholder='Select Blood Group' >
                                            <option>A+</option>
                                            <option>A-</option>
                                            <option>B+</option>
                                            <option>B-</option>
                                            <option>O+</option>
                                            <option>O-</option>
                                            <option>AB+</option>
                                            <option>AB-</option>
                                        </Select>
                                    <div className="w-full h-auto pt-2">
                                        {formik.touched.bloodGroup && formik.errors.bloodGroup && (
                                            <motion.p
                                                initial={{ y: -100, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                            >
                                                {formik.errors.bloodGroup}
                                            </motion.p>
                                        )}
                                    </div> 
                                </div>
                                <div className=' w-full mr-2 mt-4' >
                                    <p className='text-xs mb-2 font-Ubuntu-Medium' >Home Address <span className='text-[#5F6777] font-Ubuntu-Regular' >(Optional)</span></p>
                                    <Input  
                                        name="homeAddress"
                                        onChange={formik.handleChange}
                                        onFocus={() =>
                                            formik.setFieldTouched("homeAddress", true, true)
                                        }  
                                        fontSize='sm' placeholder='Home Address' />
                                    <div className="w-full h-auto pt-2">
                                        {formik.touched.homeAddress && formik.errors.homeAddress && (
                                            <motion.p
                                                initial={{ y: -100, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                            >
                                                {formik.errors.homeAddress}
                                            </motion.p>
                                        )}
                                    </div> 
                                </div>
                                <div className=' w-full mr-2 mt-4' >
                                    <p className='text-xs mb-2 font-Ubuntu-Medium' >Health Challenges</p>
                                    <Input  
                                        name="healthChallenge"
                                        onChange={formik.handleChange}
                                        onFocus={() =>
                                            formik.setFieldTouched("healthChallenge", true, true)
                                        }  
                                        fontSize='sm' placeholder='Note  if any' />
                                    <div className="w-full h-auto pt-2">
                                        {formik.touched.healthChallenge && formik.errors.healthChallenge && (
                                            <motion.p
                                                initial={{ y: -100, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                            >
                                                {formik.errors.healthChallenge}
                                            </motion.p>
                                        )}
                                    </div> 
                                </div>
                                {loading ?  
                                    <button className='bg-[#7123E2] h-12 flex justify-center items-center w-full  text-white text-sm mt-6 rounded' >
                                        <div className='flex items-center' >
                                            <LoaderIcon size='w-8 h-8 mr-1' /> 
                                            Loading
                                        </div> 
                                    </button>
                                    :
                                    <button onClick={()=> submit()} className='text-xs h-12 items-center rounded bg-[#7123E2] mt-8 w-full flex justify-center text-white font-Ubuntu-Medium' >I have carefully noted the details of the blood donated & the donor</button>
                                }
                                {/* <button onClick={()=> setShowModal(false)} className='text-xs py-3 rounded bg-[#7123E2] mt-8 w-full text-white font-Ubuntu-Medium' >I have carefully noted the details of the blood donated & the donor</button> */}
                            </div>
                        </div>
                        <div className="opacity-25 fixed flex flex-1 inset-0 z-20 bg-black"/>
                    </>
                ) : null} 
            </div>

        </div>
    )
} 