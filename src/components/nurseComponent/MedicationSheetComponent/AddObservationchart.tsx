import { Input } from '@chakra-ui/react';
import { useFormik } from 'formik';
import { motion } from 'framer-motion';
import * as yup from 'yup' 
import React from 'react'
import LoaderIcon from '../../LoaderIcon';
import { useNavigate } from 'react-router-dom';
import Modal from '../../Modal';

export default function AddObservationchart(props: any) {
    const [loading, setLoading] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const [modal, setModal] = React.useState(0);

    React.useEffect(() => {
        formik.setFieldValue('patient', props.data._id)
    }, [])

    
    const loginSchema = yup.object({ 
        patient: yup.string().required('Required'), 
        pulse: yup.string().required('Required'), 
        BP: yup.string().required('Required'), 
        FHR: yup.string().required('Required'), 
        uterineContraction: yup.string().required('Required'), 
        CXOS: yup.string().required('Required'), 
        remark: yup.string().required('Required'), 
        temperature: yup.string().required('Required'),
         R: yup.string().required('Required') 
    }) 
  
    // formik
    const formik = useFormik({
        initialValues: {patient: '', pulse: '', BP: '', FHR: '', uterineContraction: '', CXOS: '', remark: '', temperature: '', R: ''},
        validationSchema: loginSchema,
        onSubmit: () => {},
    });      
    const navigate = useNavigate()

    const userData: any = JSON.parse(localStorage.getItem('userData')+'') 

    const submit= async()=> {

        if (!formik.dirty) {
            setMessage('You have to fill in the form correctly to continue')
            setModal(2)           
            const t1 = setTimeout(() => {  
                setModal(0)       
                setLoading(false)  
                navigate('/dashboard/nurse')
                clearTimeout(t1); 
            }, 2000); 
            return;
          }else if (!formik.isValid) {
            // alert('You have to fill in the form correctly to continue');
            setMessage('You have to fill in the form correctly to continue')
            setModal(2)           
            const t1 = setTimeout(() => {  
                setModal(0)       
                setLoading(false)  
                props.next(0)
                props.tab(false)
                // navigate('/dashboard/nurse')
                clearTimeout(t1); 
            }, 2000); 
            return;
          }else {
              setLoading(true)
                const request = await fetch(`https://hospital-memo-api.herokuapp.com/observation-charts`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization : `Bearer ${localStorage.getItem('token')}`
                    },
                    body: JSON.stringify(formik.values),
                });
        
                const json = await request.json();

                // console.log('next of kin '+request.status)
                // console.log('next of kin '+json)
                if (request.status === 201) {        
                        // navigate('/dashboard/m')
                        // props.tab(false)
                        setMessage('Record Enter Successfully')
                        setModal(1)           
                        const t1 = setTimeout(() => {  
                            setModal(0)       
                            setLoading(false)  
                            navigate('/dashboard/nurse')
                            clearTimeout(t1); 
                        }, 2000);  
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
    }

    return (
        <div style={{width: '540px'}} className=' mx-auto h-full px-12 py-10 font-Ubuntu-Regular' > 
            
            <Modal message={message} modal={modal} />
            <p className='text-lg font-Ubuntu-Bold text-center mr-10 ' >Enter what you observe</p>
            <p className='text-sm font-Ubuntu-Regular w-96 text-center mt-2' >To complete this observation chart, you wil have to verify if patient has a file in the hospital.</p>
            <div className='w-full flex mt-8' >
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Patient</p>
                    <Input
                        name="patient"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("patient", true, true)
                        }  
                        disabled
                        _placeholder={{color: 'black'}} 
                        fontSize='sm' placeholder={props.data.firstName+' '+props.data.lastName} />
                    <div className="w-full h-auto pt-2">
                        {formik.touched.patient && formik.errors.patient && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                            >
                                {formik.errors.patient}
                            </motion.p>
                        )}
                    </div> 
                </div>  
            </div>
            <div className='w-full flex mt-3' >
                <div className=' w-full mr-2' >
                    <p className='text-xs mb-2' >Nurse</p>
                    <Input 
                        disabled
                        _placeholder={{color: 'black'}} 
                        fontSize='sm' placeholder={userData.fullName ? userData.fullName : (userData.firstName+' '+userData.lastName) } /> 
                </div>
                {/* <div className='mr-2' >
                    <p className='text-xs mb-2' >Date/Time</p>
                    <Input 
                        name="dateAndTime"
                        onChange={formik.handleChange}
                        type='datetime-local'
                        onFocus={() =>
                            formik.setFieldTouched("dateAndTime", true, true)
                        }  
                        fontSize='sm' placeholder='Enter Last Name' />
                    <div className="w-full h-auto pt-2">
                        {formik.touched.dateAndTime && formik.errors.dateAndTime && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                            >
                                {formik.errors.dateAndTime}
                            </motion.p>
                        )}
                    </div> 
                </div>  */}
            </div>
            <div className='w-full flex mt-3' >
                <div className='mr-2' >
                    <p className='text-xs mb-2' >FHR</p>
                    <Input
                        name="FHR"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("FHR", true, true)
                        }  
                        fontSize='sm' placeholder='0' />
                    <div className="w-full h-auto pt-2">
                        {formik.touched.FHR && formik.errors.FHR && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                            >
                                {formik.errors.FHR}
                            </motion.p>
                        )}
                    </div> 
                </div>
                <div className='mr-2' >
                    <p className='text-xs mb-2' >Pulse</p>
                    <Input 
                        name="pulse"
                        onChange={formik.handleChange} 
                        onFocus={() =>
                            formik.setFieldTouched("pulse", true, true)
                        }  
                        fontSize='sm' placeholder='0' />
                    <div className="w-full h-auto pt-2">
                        {formik.touched.pulse && formik.errors.pulse && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                            >
                                {formik.errors.pulse}
                            </motion.p>
                        )}
                    </div> 
                </div> 
                <div className='mr-2' >
                    <p className='text-xs mb-2' >R...</p>
                    <Input 
                        name="R"
                        onChange={formik.handleChange} 
                        onFocus={() =>
                            formik.setFieldTouched("R", true, true)
                        }  
                        fontSize='sm' placeholder='0' />
                    <div className="w-full h-auto pt-2">
                        {formik.touched.R && formik.errors.R && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                            >
                                {formik.errors.R}
                            </motion.p>
                        )}
                    </div> 
                </div> 
                <div className='mr-2' >
                    <p className='text-xs mb-2' >B/P</p>
                    <Input 
                        name="BP"
                        onChange={formik.handleChange} 
                        onFocus={() =>
                            formik.setFieldTouched("BP", true, true)
                        }  
                        fontSize='sm' placeholder='0' />
                    <div className="w-full h-auto pt-2">
                        {formik.touched.BP && formik.errors.BP && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                            >
                                {formik.errors.BP}
                            </motion.p>
                        )}
                    </div> 
                </div> 
            </div>
            <div className='w-full flex mt-3' >
                <div className='mr-2' >
                    <p className='text-xs mb-2' >Temp (degree celcius)</p>
                    <Input
                        name="temperature"
                        onChange={formik.handleChange}
                        type='number'
                        onFocus={() =>
                            formik.setFieldTouched("temperature", true, true)
                        }  
                        fontSize='sm' placeholder='0' />
                    <div className="w-full h-auto pt-2">
                        {formik.touched.temperature && formik.errors.temperature && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                            >
                                {formik.errors.temperature}
                            </motion.p>
                        )}
                    </div> 
                </div> 
                <div className='mr-2' >
                    <p className='text-xs mb-2' >Uterine Contraction</p>
                    <Input 
                        name="uterineContraction"
                        onChange={formik.handleChange} 
                        onFocus={() =>
                            formik.setFieldTouched("uterineContraction", true, true)
                        }  
                        fontSize='sm' placeholder='0' />
                    <div className="w-full h-auto pt-2">
                        {formik.touched.uterineContraction && formik.errors.uterineContraction && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                            >
                                {formik.errors.uterineContraction}
                            </motion.p>
                        )}
                    </div> 
                </div> 
                <div className='mr-2' >
                    <p className='text-xs mb-2' >CX OS</p>
                    <Input 
                        name="CXOS"
                        onChange={formik.handleChange} 
                        onFocus={() =>
                            formik.setFieldTouched("CXOS", true, true)
                        }  
                        fontSize='sm' placeholder='0' />
                    <div className="w-full h-auto pt-2">
                        {formik.touched.CXOS && formik.errors.CXOS && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                            >
                                {formik.errors.CXOS}
                            </motion.p>
                        )}
                    </div> 
                </div> 
            </div>
            <div className='w-full flex mt-3' >
                <div className=' w-full mr-2' >
                    <p className='text-xs mb-2' >Remark</p>
                    <Input
                        name="remark"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("remark", true, true)
                        }  
                        fontSize='sm' placeholder='Enter Remark' />
                    <div className="w-full h-auto pt-2">
                        {formik.touched.remark && formik.errors.remark && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                            >
                                {formik.errors.remark}
                            </motion.p>
                        )}
                    </div> 
                </div> 
            </div> 
            <div className='w-full flex justify-end mt-4' >
                {/* <button onClick={()=> navigate('/dashboard')}  className='  py-3 w-36 ml-auto text-[#A5B0C1] text-sm mt-4 rounded-full' >Cancel</button> */}
                {loading ?  
                    <button className='bg-[#7123E2] h-12 flex justify-center items-center w-48  text-white text-sm mt-6 rounded-full' >
                        <div className='flex items-center ' >
                            <LoaderIcon size='w-8 h-8 mr-1 ' /> 
                            Loading
                        </div> 
                    </button>
                    :
                    <button onClick={()=> submit() } className='bg-[#7123E2] py-3 w-48  text-white text-sm mt-6 rounded-full' >Submit</button>
                }
            </div>
        </div>
    )
} 