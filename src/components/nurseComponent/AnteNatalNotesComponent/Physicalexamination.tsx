import { Input } from '@chakra-ui/react';
import { useFormik } from 'formik';
import { motion } from 'framer-motion';
import React from 'react'
import { useNavigate } from 'react-router';
import * as yup from 'yup' 

export default function Physicalexamination(props: any) { 
        const navigate = useNavigate()
        const [loading, setLoading] = React.useState(false);
        
        const loginSchema = yup.object({ 
            firstName: yup.string().required('Required'),
            otherNames: yup.string().required('Required'),
            lastName: yup.string().required('Required'),
            gender: yup.string().required('Required'),
            address: yup.string().required('Required'),
            age: yup.number().required('Required'),
            phone: yup.string().required('Required'),
            stateOfOrigin: yup.string().required('Required'),
            LGA: yup.string().required('Required'),
            occupation: yup.string().required('Required'),
            religion: yup.string().required('Required'),
        }) 
    
        // formik
        const formik = useFormik({
            initialValues: {firstName: '', otherNames: '',lastName: '', gender: '', address: '',age: 0, phone: '', stateOfOrigin: '',LGA: '', occupation: '', religion: ''},
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
                // console.log(formik.values)
              }
        }
    
    return (
        <div className='w-full h-full px-12 py-10 font-Ubuntu-Regular' > 
            <p className='text-lg font-Ubuntu-Bold' >Physical Examination</p>
            <div className='w-full flex mt-8' >
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Height</p>
                    <Input
                        name="firstName"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("firstName", true, true)
                        }  
                        fontSize='sm' placeholder='Height' />
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
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Weight</p>
                    <Input 
                        name="lastName"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("lastName", true, true)
                        }  
                        fontSize='sm' placeholder='Weight' />
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
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >B.P</p>
                    <Input 
                        name="otherNames"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("otherNames", true, true)
                        }  
                        fontSize='sm' placeholder='B.P' />
                    <div className="w-full h-auto pt-2">
                        {formik.touched.otherNames && formik.errors.otherNames && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                            >
                                {formik.errors.otherNames}
                            </motion.p>
                        )}
                    </div> 
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Breast & Nipples</p>
                    <Input 
                        name="otherNames"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("otherNames", true, true)
                        }  
                        fontSize='sm' />
                    <div className="w-full h-auto pt-2">
                        {formik.touched.otherNames && formik.errors.otherNames && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                            >
                                {formik.errors.otherNames}
                            </motion.p>
                        )}
                    </div> 
                </div>
            </div>
            <div className='w-full flex mt-4' >
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Height</p>
                    <Input
                        name="firstName"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("firstName", true, true)
                        }  
                        fontSize='sm' placeholder='Height' />
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
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Weight</p>
                    <Input 
                        name="lastName"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("lastName", true, true)
                        }  
                        fontSize='sm' placeholder='Weight' />
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
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >B.P</p>
                    <Input 
                        name="otherNames"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("otherNames", true, true)
                        }  
                        fontSize='sm' placeholder='B.P' />
                    <div className="w-full h-auto pt-2">
                        {formik.touched.otherNames && formik.errors.otherNames && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                            >
                                {formik.errors.otherNames}
                            </motion.p>
                        )}
                    </div> 
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Breast & Nipples</p>
                    <Input 
                        name="otherNames"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("otherNames", true, true)
                        }  
                        fontSize='sm' />
                    <div className="w-full h-auto pt-2">
                        {formik.touched.otherNames && formik.errors.otherNames && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                            >
                                {formik.errors.otherNames}
                            </motion.p>
                        )}
                    </div> 
                </div>
            </div>
            <div className='w-full flex mt-4' >
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Height</p>
                    <Input
                        name="firstName"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("firstName", true, true)
                        }  
                        fontSize='sm' placeholder='Height' />
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
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Weight</p>
                    <Input 
                        name="lastName"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("lastName", true, true)
                        }  
                        fontSize='sm' placeholder='Weight' />
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
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >B.P</p>
                    <Input 
                        name="otherNames"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("otherNames", true, true)
                        }  
                        fontSize='sm' placeholder='B.P' />
                    <div className="w-full h-auto pt-2">
                        {formik.touched.otherNames && formik.errors.otherNames && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                            >
                                {formik.errors.otherNames}
                            </motion.p>
                        )}
                    </div> 
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Breast & Nipples</p>
                    <Input 
                        name="otherNames"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("otherNames", true, true)
                        }  
                        fontSize='sm' />
                    <div className="w-full h-auto pt-2">
                        {formik.touched.otherNames && formik.errors.otherNames && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                            >
                                {formik.errors.otherNames}
                            </motion.p>
                        )}
                    </div> 
                </div>
            </div>
        </div>
    )
} 