import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import * as yup from 'yup'
import { useFormik } from 'formik'; 
import { Input } from '@chakra-ui/input'
import { Select } from '@chakra-ui/select'
import LoaderIcon from '../../LoaderIcon';

export default function EditNextOfKin(props : any) {

    const navigate = useNavigate()
    const [loading, setLoading] = React.useState(false); 
    const [requestCode, setRequestCode] = React.useState(false) 
    
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

    React.useEffect(() => {
        formik.setValues(props.data.otherNames)
    }, [props.data])
 
    // formik
    const formik = useFormik({
        initialValues: {firstName: '', otherNames: '',lastName: '', gender: '', address: '',age: 0, phone: '', relationship: ''},
        validationSchema: loginSchema,
        onSubmit: () => {},
    });      


    const submit = async () => {  

        if (!formik.dirty) {
            alert('You have to fill in th form to continue');
            return;
        }else if (!formik.isValid) {
            alert('You have to fill in the form correctly to continue');
            return;
        }else { 
            const request = await fetch(`https://hospital-memo-api.herokuapp.com/patients/next-of-kin/${props.data._id}`, {
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
                const t1 = setTimeout(() => {  
                    // navigate('/dashboard/m')
                    props.next(false) 
                    clearTimeout(t1);
                }, 3000); 
            }else {
                alert(json.message);
                console.log(json) 
            } 
        }
    }  

    console.log(props.data)

    const ClickHandler =(item: any)=> {
        localStorage.setItem('patientId', item)
        navigate('/dashboard/patientfile')
    }

    return (
        <div style={{width:'700px'}} className='w-auto h-full flex justify-center px-12 py-10 font-Ubuntu-Regular' > 
            {!requestCode ? 
                <div>
                    <p className='text-lg font-Ubuntu-Bold' >Next of Kin’s Information</p>
                    <div className='w-full flex mt-8' >
                        <div className='mr-2' >
                            <p className='text-xs mb-2' >First Name</p>
                            <Input 
                                name="firstName"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("firstName", true, true)
                                } placeholder={props.data.nextOfKin.firstName} fontSize='sm' />
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
                            <Input 
                                name="lastName"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("lastName", true, true)
                                }  placeholder={props.data.nextOfKin.lastName} fontSize='sm' />
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
                            <Input 
                                name="otherNames"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("otherNames", true, true)
                                }  placeholder={props.data.nextOfKin.otherNames} fontSize='sm'  />
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
                            <p className='text-xs mb-2' >Relationship</p>
                            <Input 
                                name="relationship"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("relationship", true, true)
                                }  placeholder={props.data.nextOfKin.relationship} fontSize='sm'  />
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
                            <p className='text-xs mb-2' >Phone Number</p>
                            <Input 
                                name="phone"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("phone", true, true)
                                }  placeholder={props.data.nextOfKin.phone} fontSize='sm' />
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
                            <p className='text-xs mb-2' >Age</p>
                            <Input 
                                name="age"
                                type='number'
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("age", true, true)
                                }  placeholder={props.data.nextOfKin.age} fontSize='sm'  />
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
                                }  placeholder={props.data.nextOfKin.gender} fontSize='sm' >
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
                            <p className='text-xs mb-2' >Address</p>
                            <Input 
                                name="address"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("address", true, true)
                                }  placeholder={props.data.nextOfKin.address} fontSize='sm' />
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
                        {/* <button onClick={()=> props.next(false) } className='  py-3 w-36 ml-auto text-[#A5B0C1] text-sm mt-4 rounded-full' >Cancel</button> */}
                        {/* <button onClick={()=> submit() } className='bg-[#7123E2] py-3 w-48  text-white text-sm mt-6 rounded-full' >Create Profile</button> */}
                        {loading ?  
                            <button className='bg-[#7123E2] h-12 flex justify-center items-center w-48  text-white text-sm mt-6 rounded-full' >
                                <div className='flex items-center animate-pulse ' >
                                    <LoaderIcon size='w-10 h-10 mr-1 animate-pulse ' /> 
                                    Loading
                                </div> 
                            </button>
                            :
                            <button onClick={()=> submit() } className='bg-[#7123E2] py-3 w-48  text-white text-sm mt-6 rounded-full' >Create Profile</button>
                        }
                    </div> 
                </div>
            :
                <div style={{width: '480px'}} className='h-full flex flex-col justify-center font-Ubuntu-Regular items-center' >
                    <p className='text-lg font-Ubuntu-Bold' >Personal Information</p>
                    <p className='w-96 text-[#5F6777] mt-2 mb-12 font-Ubuntu-Regular text-center text-sm' >This key is owned by the MD, meaning there need to be an approval from the MD to Access</p>
                    <Input fontSize='sm' backgroundColor='white' border='1px solid #A5B0C1' />
                    <button onClick={()=> ClickHandler('')} className='bg-[#7123E2] py-3 w-48  text-white text-sm mt-12 rounded-full' >Request Edit Access</button>
                </div>
            }
        </div>
    )
} 