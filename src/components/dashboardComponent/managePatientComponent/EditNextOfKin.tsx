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
    const [access, setAccess] = React.useState(false)
    const [message, setMessage] = React.useState('');
    const [modal, setModal] = React.useState(0);
    
    const loginSchema = yup.object({ 
        firstName: yup.string().required('Required'),
        otherNames: yup.string().required('Required'),
        lastName: yup.string().required('Required'),
        gender: yup.string().required('Required'),
        address: yup.string().required('Required'),
        age: yup.number().required('Required'),
        phone: yup.string().required('Required'), 
        relationship: yup.string().required('Required'), 
        accessKey: yup.string().required('Required'), 
    }) 

    React.useEffect(() => {
        formik.setValues(props.data.nextOfKin)
    }, [props.data])
 
    // formik
    const formik = useFormik({
        initialValues: {firstName: '', otherNames: '',lastName: '', gender: '', address: '',age: 0, phone: '', relationship: '', accessKey: ''},
        validationSchema: loginSchema,
        onSubmit: () => {},
    });      


    const submit = async () => {  
        setLoading(true)
        if (!formik.dirty) {
            setMessage('You have to fill in the form correctly to continue')
            setModal(2)           
            const t1 = setTimeout(() => {  
                setModal(0)       
                setLoading(false)  
                clearTimeout(t1); 
            }, 2000);
            // alert('You have to fill in th form to continue');
            return;
        }else if (!formik.isValid) {
            setMessage('You have to fill in the form correctly to continue')
            setModal(2)           
            const t1 = setTimeout(() => {  
                setModal(0)       
                setLoading(false)  
                clearTimeout(t1); 
            }, 2000);
            return;
        }else { 
            const request = await fetch(`https://hospital-memo-api.herokuapp.com/patients/next-of-kin/${props.data._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(formik.values),
            });
    
            const json = await request.json();
 
            if (request.status === 201) {            
                const t1 = setTimeout(() => {  
                    // navigate('/dashboard/m')
                    setMessage('You have to fill in the form correctly to continue')
                    setModal(1)           
                    const t1 = setTimeout(() => {  
                        setModal(0)       
                        setLoading(false)  
                        navigate('/dashboard/managepatient')
                        clearTimeout(t1); 
                    }, 2000);
                    clearTimeout(t1);
                }, 3000); 
            }else {
                setMessage('Error Occurred')
                setModal(2)           
                const t1 = setTimeout(() => {  
                    setModal(0)       
                    setLoading(false)  
                    clearTimeout(t1); 
                }, 2000);
                // alert(json.error.message);
                // console.log(json) 
            } 
        }
        setLoading(false)
    }  

    const GetAccessCode = async()=> {
        setLoading(true)
        const request = await fetch(`https://hospital-memo-api.herokuapp.com/auth/request-access-key`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                patientId: props.data._id
            }),
        });

        const data = await request.json();

        console.log('Request code '+request.status)
        alert('Access Key for this Patient '+data.accessKey)
        // set(true)
        setRequestCode(false)
        setAccess(true)
        setLoading(false)
    }

    // console.log(props.data)

    // const ClickHandler =(item: any)=> {
    //     localStorage.setItem('patientId', item)
    //     navigate('/dashboard/patientfile')
    // }

    return (
        <div style={{width:'700px'}} className='w-auto h-full flex justify-center px-12 py-10 font-Ubuntu-Medium text-[#333] ' > 
            {!requestCode ? 
                <div>
                    <p className='text-lg font-Ubuntu-Bold' >Next of Kin’s Information</p>
                    <div className='w-full flex mt-8' >
                        <div className='mr-2' >
                            <p className='text-sm mb-2' >First Name</p>
                            <Input 
                                name="firstName"
                                onChange={formik.handleChange}
                                disabled={!access ? true : false} 
                                _placeholder={access ? {color: 'gray.500' } : {color: 'black' } }
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
                            <p className='text-sm mb-2' >Last Name/Surname</p>
                            <Input 
                                name="lastName"
                                onChange={formik.handleChange}
                                disabled={!access ? true : false} 
                                _placeholder={access ? {color: 'gray.500' } : {color: 'black' } }
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
                            <p className='text-sm mb-2' >Other Names</p>
                            <Input 
                                name="otherNames"
                                onChange={formik.handleChange}
                                disabled={!access ? true : false} 
                                _placeholder={access ? {color: 'gray.500' } : {color: 'black' } }
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
                            <p className='text-sm mb-2' >Relationship</p>
                            <Input 
                                name="relationship"
                                onChange={formik.handleChange}
                                disabled={!access ? true : false} 
                                _placeholder={access ? {color: 'gray.500' } : {color: 'black' } }
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
                            <p className='text-sm mb-2' >Phone Number</p>
                            <Input 
                                name="phone"
                                onChange={formik.handleChange}
                                disabled={!access ? true : false} 
                                _placeholder={access ? {color: 'gray.500' } : {color: 'black' } }
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
                            <p className='text-sm mb-2' >Age</p>
                            <Input 
                                name="age"
                                type='number'
                                onChange={formik.handleChange}
                                disabled={!access ? true : false} 
                                _placeholder={access ? {color: 'gray.500' } : {color: 'black' } }
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
                            <p className='text-sm mb-2' >Sex/Gender</p>
                            <Select 
                                name="gender"
                                onChange={formik.handleChange}
                                disabled={!access ? true : false} 
                                _placeholder={access ? {color: 'gray.500' } : {color: 'black' } }
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
                            <p className='text-sm mb-2' >Address</p>
                            <Input 
                                name="address"
                                onChange={formik.handleChange}
                                disabled={!access ? true : false} 
                                _placeholder={access ? {color: 'gray.500' } : {color: 'black' } }
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
                    <div className='w-full flex mt-5' >
                        <div className='mr-2' >
                            <p className='text-sm mb-2' >accessKey</p>
                            <Input fontSize='sm' disabled={!access ? true : false} 
                                name="accessKey"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("accessKey", true, true)
                                } 
                                placeholder='accessKey' />
                            <div className="w-full h-auto pt-2">
                                {formik.touched.accessKey && formik.errors.accessKey && (
                                    <motion.p
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                    >
                                        {formik.errors.accessKey}
                                    </motion.p>
                                )}
                            </div> 
                        </div>
                    </div>
                    <div className='w-full flex' > 
                        <button onClick={()=> navigate('/dashboard/managepatient')}  className='  py-3 w-36 ml-auto text-[#A5B0C1] text-sm mt-4 rounded-full' >Cancel</button>
                        {access ?
                            <>
                                {loading ?  
                                    <button className='bg-[#7123E2] h-11 flex justify-center items-center w-48  text-white text-sm mt-6 rounded-full' >
                                        <div className='flex items-center ' >
                                            <LoaderIcon size='w-9 h-9 mr-1 ' /> 
                                            Loading
                                        </div> 
                                    </button>
                                    :
                                    <button onClick={()=> submit()} className='bg-[#7123E2] h-11 w-48  text-white text-sm mt-6 rounded-full' >Update</button>
                                }
                            </>:                            
                            <button onClick={()=> setRequestCode(true)} className='bg-[#7123E2] py-3 w-48  text-white text-sm mt-6 rounded-full' >Request Edit Access</button>}
                    </div>
                </div>
            :
                <div style={{width: '480px'}} className='h-full flex flex-col justify-center font-Ubuntu-Regular items-center' >
                    <p className='text-lg font-Ubuntu-Bold' >Personal Information</p>
                    <p className='w-96 text-[#5F6777] mt-2 font-Ubuntu-Regular text-center text-sm' >This key is owned by the MD, meaning there need to be an approval from the MD to Access</p>
                    {/* <Input fontSize='sm' backgroundColor='white' border='1px solid #A5B0C1' /> */}
                    {loading ?  
                        <button className='bg-[#7123E2] h-11 flex justify-center items-center w-48  text-white text-sm mt-12 rounded-full' >
                            <div className='flex items-center ' >
                                <LoaderIcon size='w-7 h-7 mr-1 ' /> 
                                Loading
                            </div> 
                        </button>
                        :
                        <button onClick={()=> GetAccessCode()} className='bg-[#7123E2] h-11 w-48  text-white text-sm mt-12 rounded-full' >Request Edit Access</button>
                    }
                </div>
            }
        </div>
    )
} 