import { Input, Select } from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as yup from 'yup' 
import { motion } from 'framer-motion';
import React from 'react'
import LoaderIcon from '../../LoaderIcon';

export default function AddMedicalList() {
    const [loading, setLoading] = React.useState(false);
    
    const loginSchema = yup.object({ 
        firstName: yup.string().required('Required'),
        otherNames: yup.string().required('Required'),
        lastName: yup.string().required('Required'),
        gender: yup.string().required('Required'), 
    }) 

    // formik
    const formik = useFormik({
        initialValues: {firstName: '', otherNames: '',lastName: '', gender: ''},
        validationSchema: loginSchema,
        onSubmit: () => {},
    });     

    const submit=()=> {

        if (!formik.dirty) {
            alert('You have to fill in th form to continue');
            return;
          }else if (!formik.isValid) {
            alert('You have to fill in the form correctly to continue');
            return;
          }else {
            // props.next(true)
            // props.value(formik.values)
            console.log(formik.values)
          }
    }

    return (
        <div style={{width: '540px'}} className=' mx-auto h-full px-12 py-10 font-Ubuntu-Regular' > 
            <p className='text-lg font-Ubuntu-Bold' >Personal Information</p>
            <div className='w-full flex mt-8' >
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Full Name</p>
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
            </div>
            <div className='w-full flex mt-3' >
                <div className='mr-2' >
                    <p className='text-xs mb-2' >Nurse</p>
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
                <div className='mr-2' >
                    <p className='text-xs mb-2' >Date/Time</p>
                    <Input 
                        name="lastName"
                        onChange={formik.handleChange}
                        type='date'
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
            <div className='w-full flex mt-3' >
                <div className=' w-full mr-2' >
                    <p className='text-xs mb-2' >Prescription</p>
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
            </div>
            {/* <div className='w-full flex mt-5' >
                <div className='mr-2' >
                    <p className='text-xs mb-2' >Phone Number</p>
                    <Input 
                        name="phone"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("phone", true, true)
                        }  
                        fontSize='sm' placeholder='080 ...' />
                    <div className="w-full h-auto pt-2">
                        {formik.touched.phone && formik.errors.phone && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                            >
                                {formik.errors.phone}
                            </motion.p>
                        )}
                    </div> 
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Address</p>
                    <Input 
                        name="address"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("address", true, true)
                        }  
                        fontSize='sm' placeholder='Home Address' />
                    <div className="w-full h-auto pt-2">
                        {formik.touched.address && formik.errors.address && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                            >
                                {formik.errors.address}
                            </motion.p>
                        )}
                    </div> 
                </div> 
            </div> */}
            {/* <div className='w-full flex mt-5' >
                <div className='mr-2' >
                    <p className='text-xs mb-2' >Age</p>
                    <Input 
                        name="age"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("age", true, true)
                        }  
                        fontSize='sm' placeholder='Enter Age' />
                    <div className="w-full h-auto pt-2">
                        {formik.touched.age && formik.errors.age && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                            >
                                {formik.errors.age}
                            </motion.p>
                        )}
                    </div> 
                </div>
                <div className='mr-2' >
                    <p className='text-xs mb-2' >Sex/Gender</p>
                    <Select 
                        name="gender"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("gender", true, true)
                        }  
                        fontSize='sm'  placeholder='Select'>
                        <option>male</option>
                        <option>female</option>
                    </Select>
                    <div className="w-full h-auto pt-2">
                        {formik.touched.gender && formik.errors.gender && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                            >
                                {formik.errors.gender}
                            </motion.p>
                        )}
                    </div> 
                </div>
                <div className='mr-2' >
                    <p className='text-xs mb-2' >State of Origin</p>
                    <Input 
                        name="stateOfOrigin"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("stateOfOrigin", true, true)
                        }  
                        fontSize='sm' placeholder='Enter Your State' />
                    <div className="w-full h-auto pt-2">
                        {formik.touched.stateOfOrigin && formik.errors.stateOfOrigin && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                            >
                                {formik.errors.stateOfOrigin}
                            </motion.p>
                        )}
                    </div> 
                </div>
                <div className='mr-2' >
                    <p className='text-xs mb-2' >Local Governmet Area</p>
                    <Input 
                        name="LGA"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("LGA", true, true)
                        }  
                        fontSize='sm' placeholder='Enter LGA' />
                    <div className="w-full h-auto pt-2">
                        {formik.touched.LGA && formik.errors.LGA && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                            >
                                {formik.errors.LGA}
                            </motion.p>
                        )}
                    </div> 
                </div>
            </div>  */}
            <div className='w-full flex mt-4' >
                {/* <button onClick={()=> navigate('/dashboard')}  className='  py-3 w-36 ml-auto text-[#A5B0C1] text-sm mt-4 rounded-full' >Cancel</button> */}
                {loading ?  
                    <button className='bg-[#7123E2] h-12 flex justify-center items-center w-48  text-white text-sm mt-6 rounded-full' >
                        <div className='flex items-center animate-pulse ' >
                            <LoaderIcon size='w-10 h-10 mr-1 animate-pulse ' /> 
                            Loading
                        </div> 
                    </button>
                    :
                    <button onClick={()=> submit() } className='bg-[#7123E2] py-3 w-48  text-white text-sm mt-6 rounded-full' >Next</button>
                }
            </div>
        </div>
    )
} 