import { Input } from '@chakra-ui/input'
import { Select } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import * as yup from 'yup'
import { useFormik } from 'formik'; 
import LoaderIcon from '../../LoaderIcon'

export default function EditPatientInfo(props: any) {
    
    const [access, setAccess] = React.useState(false)
    const [requestCode, setRequestCode] = React.useState(false)

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

    React.useEffect(() => {
        formik.setValues(props.data)
    }, [props.data])

    // formik
    const formik = useFormik({
        initialValues: {firstName: '', otherNames: '',lastName: '', gender: '', address: '',age: 0, phone: '', stateOfOrigin: '',LGA: '', occupation: '', religion: ''},
        validationSchema: loginSchema,
        onSubmit: () => {},
    });     

    const ClickHandler =()=> {
        setAccess(true)
        setRequestCode(false)
    }

    const submit = async () => {  

        if (!formik.dirty) {
            alert('You have to fill in th form to continue');
            return;
        }else if (!formik.isValid) {
            alert('You have to fill in the form correctly to continue');
            return;
        }else {
            setLoading(true);
            const request = await fetch(`https://hospital-memo-api.herokuapp.com/patients/${props.data._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(formik.values),
            });

            const data = await request.json();

            console.log('patient '+request.status)
            console.log('patient '+data)
            if (request.status === 201) {  
                console.log('patient success ')
                // const request = await fetch(`https://hospital-memo-api.herokuapp.com/patients/next-of-kin/${data._id}`, {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json',
                //         Authorization : `Bearer ${localStorage.getItem('token')}`
                //     },
                //     body: JSON.stringify(formik.values),
                // });
        
                // const json = await request.json();

                // console.log('next of kin '+request.status)
                // console.log('next of kin '+json)
                // if (request.status === 201) {            
                //     const t1 = setTimeout(() => {  
                //             navigate('/dashboard')
                //             clearTimeout(t1);
                //     }, 3000); 
                // }else {
                //     alert(json.message);
                //     console.log(json) 
                // }
            }else {
                alert(data.message);
                console.log(data) 
            } 
        }
        setLoading(false);
    }    

    return (
        <div style={{width:'700px'}} className='w-auto h-full flex justify-center px-12 py-10 font-Ubuntu-Regular' > 
            {!requestCode ? 
                <div className='w-full' > 
                    <p className='text-lg font-Ubuntu-Bold' >Personal Information</p>
                    <div className='w-full flex mt-8' >
                        <div className='mr-2' >
                            <p className='text-xs mb-2' >First Name</p>
                            <Input fontSize='sm' disabled={!access ? true : false} 
                                _placeholder={access ? {color: 'gray.500' } : {color: 'black' } }  placeholder={props.data.firstName}
                                name="firstName"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("firstName", true, true)
                                }   />
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
                            <p className='text-xs mb-2' >Last Name/Surname</p>
                            <Input fontSize='sm' disabled={!access ? true : false}  
                                name="lastName"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("lastName", true, true)
                                } 
                                _placeholder={access ? {color: 'gray.500' } : {color: 'black' } }  placeholder={props.data.lastName} />
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
                            <p className='text-xs mb-2' >Other Names</p>
                            <Input fontSize='sm' disabled={!access ? true : false}  
                                name="otherNames"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("otherNames", true, true)
                                } 
                                _placeholder={access ? {color: 'gray.500' } : {color: 'black' } }  placeholder={props.data.otherNames}/>
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
                            <p className='text-xs mb-2' >Phone Number</p>
                            <Input fontSize='sm' disabled={!access ? true : false}  
                                name="phone"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("phone", true, true)
                                } 
                                _placeholder={access ? {color: 'gray.500' } : {color: 'black' } }  placeholder={props.data.phone} />
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
                            <Input fontSize='sm' disabled={!access ? true : false} 
                                name="address"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("address", true, true)
                                }   
                                _placeholder={access ? {color: 'gray.500' } : {color: 'black' } }  placeholder={props.data.address} />
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
                    <div className='w-full flex mt-5' >
                        <div className='mr-2' >
                            <p className='text-xs mb-2' >Age</p>
                            <Input fontSize='sm' disabled={!access ? true : false}  
                                name="age"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("age", true, true)
                                } 
                                _placeholder={access ? {color: 'gray.500' } : {color: 'black' } }  placeholder={props.data.age} />
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
                            <Select fontSize='sm'  disabled={!access ? true : false} 
                                name="gender"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("gender", true, true)
                                }  
                                _placeholder={access ? {color: 'gray.500' } : {color: 'black' } }  placeholder={props.data.gender}>
                                <option>Male</option>
                                <option>Female</option>
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
                            <Input fontSize='sm' disabled={!access ? true : false} 
                                name="stateOfOrigin"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("stateOfOrigin", true, true)
                                } 
                                _placeholder={access ? {color: 'gray.500' } : {color: 'black' } }  placeholder={props.data.stateOfOrigin} />
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
                            <Input fontSize='sm' disabled={!access ? true : false} 
                                name="LGA"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("LGA", true, true)
                                } 
                                _placeholder={access ? {color: 'gray.500' } : {color: 'black' } }  placeholder={props.data.LGA} />
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
                    </div>
                    <div className='w-full flex mt-5' >
                        <div className='mr-2' >
                            <p className='text-xs mb-2' >Occupation</p>
                            <Input fontSize='sm' disabled={!access ? true : false} 
                                name="occupation"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("occupation", true, true)
                                } 
                                _placeholder={access ? {color: 'gray.500' } : {color: 'black' } }  placeholder={props.data.occupation}/>
                            <div className="w-full h-auto pt-2">
                                {formik.touched.occupation && formik.errors.occupation && (
                                    <motion.p
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                    >
                                        {formik.errors.occupation}
                                    </motion.p>
                                )}
                            </div> 
                        </div> 
                        <div className='mr-2' >
                            <p className='text-xs mb-2' >Religion</p>
                            <Input fontSize='sm' disabled={!access ? true : false} 
                                name="religion"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("religion", true, true)
                                } 
                                _placeholder={access ? {color: 'gray.500' } : {color: 'black' } }  placeholder={props.data.religion} />
                            <div className="w-full h-auto pt-2">
                                {formik.touched.religion && formik.errors.religion && (
                                    <motion.p
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                    >
                                        {formik.errors.religion}
                                    </motion.p>
                                )}
                            </div> 
                        </div>
                    </div> 
                    <div className='w-full flex mt-4' >
                        <button onClick={()=> props.next(1)}  className='  py-3 w-36 ml-auto text-[#A5B0C1] text-sm mt-4 rounded-full' >Next Of Kin</button>
                        {access ?
                            <>
                                {loading ?  
                                    <button className='bg-[#7123E2] h-12 flex justify-center items-center w-48  text-white text-sm mt-6 rounded-full' >
                                        <div className='flex items-center animate-pulse ' >
                                            <LoaderIcon size='w-9 h-9 mr-1 animate-pulse ' /> 
                                            Loading
                                        </div> 
                                    </button>
                                    :
                                    <button onClick={()=> submit()} className='bg-[#7123E2] py-3 w-48  text-white text-sm mt-6 rounded-full' >Update</button>
                                }
                            </>:                            
                            <button onClick={()=> setRequestCode(true)} className='bg-[#7123E2] py-3 w-48  text-white text-sm mt-6 rounded-full' >Request Edit Access</button>}
                    </div>
                </div>
            :
                <div style={{width: '480px'}} className='h-full flex flex-col justify-center font-Ubuntu-Regular items-center' >
                    <p className='text-lg font-Ubuntu-Bold' >Personal Information</p>
                    <p className='w-96 text-[#5F6777] mt-2 mb-12 font-Ubuntu-Regular text-center text-sm' >This key is owned by the MD, meaning there need to be an approval from the MD to Access</p>
                    <Input fontSize='sm' backgroundColor='white' border='1px solid #A5B0C1' />
                    <button onClick={()=> ClickHandler()} className='bg-[#7123E2] py-3 w-48  text-white text-sm mt-12 rounded-full' >Request Edit Access</button>
                </div>
            }
        </div> 
    )
} 