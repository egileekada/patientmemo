import { Input } from '@chakra-ui/input';
import { Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react';
import { useFormik } from 'formik';
import { motion } from 'framer-motion';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup' 
import DateFormat from '../../DateFormat';
import GetUserInfo from '../../GetUserInfo';
import LoaderIcon from '../../LoaderIcon';

export default function Previousmedicalhistory(props: any) {

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
            <p className='text-lg font-Ubuntu-Bold' >Previous Medical History</p>
            <div className='w-full flex mt-8' >
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Heart Disease</p>
                    <Input
                        name="firstName"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("firstName", true, true)
                        }  
                        fontSize='sm' placeholder='Heart Disease' />
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
                    <p className='text-xs mb-2' >Kidney Diseases</p>
                    <Input 
                        name="lastName"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("lastName", true, true)
                        }  
                        fontSize='sm' placeholder='Kidney Diseases' />
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
                    <p className='text-xs mb-2' >Chest Disease</p>
                    <Input 
                        name="otherNames"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("otherNames", true, true)
                        }  
                        fontSize='sm' placeholder='Chest Disease' />
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
            <div className='w-full flex mt-5' >
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Operations</p>
                    <Input
                        name="firstName"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("firstName", true, true)
                        }  
                        fontSize='sm' />
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
                    <p className='text-xs mb-2' >G.I.T</p>
                    <Input 
                        name="lastName"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("lastName", true, true)
                        }  
                        fontSize='sm' />
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
                    <p className='text-xs mb-2' >Endocrine</p>
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
            <div className='w-full flex mt-5' >
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >NIL</p>
                    <Input 
                        name="phone"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("phone", true, true)
                        }  
                        fontSize='sm' />
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
                <div className='mr-2 w-full' />
                <div className='mr-2 w-full' />
            </div> 

            <p className='text-lg font-Ubuntu-Bold mt-10' >Previous Pregnancies:</p>
            <div className='w-full flex mt-8' >
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Total</p>
                    <Input
                        name="firstName"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("firstName", true, true)
                        }  
                        fontSize='sm' />
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
                    <p className='text-xs mb-2' >No. of living Children</p>
                    <Input 
                        name="lastName"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("lastName", true, true)
                        }  
                        fontSize='sm' />
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
                <div className='mr-2 w-full' />
            </div>
            <div className='w-full mt-8' >
                <Table variant='unstyled' >
                    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                    <Thead>
                        <Tr className='font-Graphik-Medium text-sm' >
                            <Th>Date of Birth</Th>  
                            <Th>Duration of pregnacy</Th>  
                            <Th>Pregnancy Labour and Puerperium</Th> 
                            <Th>Birth Weight</Th>  
                            <Th>Baby Sex</Th>  
                        </Tr>
                    </Thead>
                    <Tbody > 
                        <Tr>
                            <Td> 
                                <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                            </Td> 
                            <Td>  
                                <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                            </Td> 
                            <Td>
                                <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                            </Td> 
                            <Td>
                                <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                            </Td>  
                            <Td>
                                <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                            </Td>  
                        </Tr>  
                        <Tr>
                            <Td> 
                                <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                            </Td> 
                            <Td>  
                                <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                            </Td> 
                            <Td>
                                <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                            </Td> 
                            <Td>
                                <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                            </Td>  
                            <Td>
                                <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                            </Td>  
                        </Tr>  
                        <Tr>
                            <Td> 
                                <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                            </Td> 
                            <Td>  
                                <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                            </Td> 
                            <Td>
                                <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                            </Td> 
                            <Td>
                                <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                            </Td>  
                            <Td>
                                <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                            </Td>  
                        </Tr>  
                    </Tbody> 
                </Table>
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
                    <button onClick={()=> props.next(3) } className='bg-[#7123E2] py-3 w-48  text-white text-sm mt-6 rounded-full' >Next</button>
                }
            </div>
        </div>
    )
} 