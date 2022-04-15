import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import * as yup from 'yup'
import { useFormik } from 'formik'; 
import { Input } from '@chakra-ui/input'
import { Select } from '@chakra-ui/select'
import LoaderIcon from '../../LoaderIcon';
import Modal from '../../Modal';

export default function NextOfKinInfo(props: any) { 

    const navigate = useNavigate()
    const [loading, setLoading] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const [modal, setModal] = React.useState(0);
    console.log('next '+props.patient)
    
    const loginSchema = yup.object({ 
        firstName: yup.string().required('Required'),
        otherNames: yup.string().required('Required'),
        lastName: yup.string().required('Required'),
        gender: yup.string().required('Required'),
        address: yup.string().required('Required'),
        age: yup.number().required('Required'),
        phone: yup.string().required('Required'), 
        relationship: yup.string().required('Required'), 
    }) 
 
    // formik
    const formik = useFormik({
        initialValues: {firstName: '', otherNames: '',lastName: '', gender: '', address: '',age: 0, phone: '', relationship: ''},
        validationSchema: loginSchema,
        onSubmit: () => {},
    });      

    const submit = async () => {  

        if (!formik.dirty) { 
            setMessage('You have to fill in th form to continue')
            setModal(2)             
            const t1 = setTimeout(() => {  
                setModal(0)       
                clearTimeout(t1);
            }, 3000);    
            return;
        }else if (!formik.isValid) { 
            setMessage('You have to fill in the form correctly to continue')
            setModal(2)           
            const t1 = setTimeout(() => {  
                setModal(0)       
                clearTimeout(t1);
            }, 2000);    
            return;
        }else {
            setLoading(true);
            const request = await fetch(`https://hospital-memo-api.herokuapp.com/patients`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(props.patient),
            });

            const data = await request.json();

            console.log('patient '+request.status)
            console.log('patient '+data)
            if (request.status === 201) {  
                const request = await fetch(`https://hospital-memo-api.herokuapp.com/patients/next-of-kin/${data._id}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization : `Bearer ${localStorage.getItem('token')}`
                    },
                    body: JSON.stringify(formik.values),
                });
        
                const json = await request.json();

                console.log('next of kin '+request.status)
                console.log('next of kin '+json)
                if (request.status === 201) {    
                    setMessage('Registration Successful')
                    setModal(1)          
                    const t1 = setTimeout(() => {  
                        setModal(0)      
                        navigate('/dashboard')
                        clearTimeout(t1);
                    }, 3000); 
                }else {
                    setMessage('Failed To Register')
                    setModal(2)             
                    const t1 = setTimeout(() => {  
                        setModal(0)       
                        clearTimeout(t1);
                    }, 3000);    
                    // alert(json.message);
                    console.log(json) 
                }
            }else {
                alert(data.message);
                console.log(data) 
            } 
        }
    }   

    return (
        <div className='w-auto h-full px-12 py-10 font-Ubuntu-Medium text-[#333] ' > 
            <Modal message={message} modal={modal} />
            <p className='text-lg font-Ubuntu-Bold' >Next of Kin’s Information</p>
            <div className='w-full flex mt-8' >
                <div className='mr-2' >
                    <p className='text-sm mb-2' >First Name</p>
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
                    <p className='text-sm mb-2' >Last Name/Surname</p>
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
                <div className='mr-2' >
                    <p className='text-sm mb-2' >Other Names</p>
                    <Input 
                        name="otherNames"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("otherNames", true, true)
                        }  
                        fontSize='sm' placeholder='Enter other Names' />
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
                <div className='mr-2' >
                    <p className='text-sm mb-2' >Relationship</p>
                    <Input 
                        name="relationship"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("relationship", true, true)
                        }  
                        fontSize='sm' placeholder='Whats the relationship?' />
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
                <div className='mr-2' >
                    <p className='text-sm mb-2' >Phone Number</p>
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
            </div> 
             
            <div className='w-full flex mt-5' >
                <div className='mr-2' >
                    <p className='text-sm mb-2' >Age</p>
                    <Input 
                        name="age"
                        type='number'
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
                    <p className='text-sm mb-2' >Sex/Gender</p>
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
                    <p className='text-sm mb-2' >Address</p>
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
            </div>
            <div className='w-full flex mt-4' >
                <button onClick={()=> navigate('/dashboard')} className='  py-3 w-36 ml-auto text-[#A5B0C1] text-sm mt-4 rounded-full' >Cancel</button>
                {/* <button onClick={()=> submit() } className='bg-[#7123E2] py-3 w-48  text-white text-sm mt-6 rounded-full' >Create Profile</button> */}
                {loading ?  
                    <button className='bg-[#7123E2] h-12 flex justify-center items-center w-48  text-white text-sm mt-6 rounded-full' >
                        <div className='flex items-center ' >
                            <LoaderIcon size='w-8 h-8 mr-1 ' /> 
                            Loading
                        </div> 
                    </button>
                    :
                    <button onClick={()=> submit() } className='bg-[#7123E2] py-3 w-48  text-white text-sm mt-6 rounded-full' >Create Profile</button>
                }
            </div>
        </div>
    )
} 