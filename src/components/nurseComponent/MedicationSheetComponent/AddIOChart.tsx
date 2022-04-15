import { Input } from '@chakra-ui/react';
import { useFormik } from 'formik';
import { motion } from 'framer-motion';
import React from 'react'
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup' 
import LoaderIcon from '../../LoaderIcon';

export default function AddIOChart(props: any) {
    const [loading, setLoading] = React.useState(false);
    
    const loginSchema = yup.object({ 
        urine: yup.string().required('Required'),
        BO: yup.string().required('Required'),
        natureOfFluid: yup.string().required('Required'),
        emesis: yup.string().required('Required'),
        amount: yup.string().required('Required'),
        // dateAndTime: yup.string().required('Required'), 
    }) 
    const navigate = useNavigate() 
    
    React.useEffect(() => {
        formik.setFieldValue('patient', props.data._id) 
    }, []) 
  
    // formik
    const formik = useFormik({
        initialValues: {urine: '', patient: '',  BO: '', natureOfFluid: '',  emesis: '', amount: ''},
        validationSchema: loginSchema,
        onSubmit: () => {},
    });    

    const submit=async()=> {

        if (!formik.dirty) {
            alert('You have to fill in th form to continue');
            return;
          }else if (!formik.isValid) {
            alert('You have to fill in the form correctly to continue');
            return;
          }else {
            setLoading(true)
                const request = await fetch(`https://hospital-memo-api.herokuapp.com/input-outputs`, {
                    method: 'POST',
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
                        // props.tab(false)
                        alert('Record Enter Successfull')
                        navigate('/dashboard/nurse')
                        clearTimeout(t1);
                    }, 3000); 
                }else {
                    alert(json.error.message);
                    console.log(json) 
                } 
          }
    }

    const userData: any = JSON.parse(localStorage.getItem('userData')+'') 

    return (
        <div style={{width: '540px'}} className=' mx-auto h-full px-12 py-10 font-Ubuntu-Regular' > 
            <p className='text-lg font-Ubuntu-Bold text-center' >The Input/Output chart</p>
            <p className='text-sm font-Ubuntu-Regular text-center mt-1' >To complete this Input/Output chart, you wil have to verify if patient has a file in the hospital.</p>
            <div className='w-full flex mt-8' >
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Full Name</p>
                    <Input
                        disabled
                        _placeholder={{color: 'black'}} 
                        fontSize='sm' placeholder={props.data.firstName+' '+props.data.lastName}  
                        /> 
                </div>  
            </div>
            <div className='w-full flex mt-3' >
                <div className='w-full mr-2' >
                    <p className='text-xs mb-2' >Nurse</p>
                    <Input 
                        disabled
                        _placeholder={{color: 'black'}} 
                        fontSize='sm' placeholder={userData.fullName ? userData.fullName : (userData.firstName+' '+userData.lastName) } />
                </div> 
            </div>
            <div className='w-full flex mt-3' >
                <div className=' w-full mr-2' >
                    <p className='text-xs mb-2' >Nature of fluid</p>
                    <Input
                        name="natureOfFluid"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("natureOfFluid", true, true)
                        }  
                        fontSize='sm' placeholder='Enter Nature of fluid' />
                    <div className="w-full h-auto pt-2">
                        {formik.touched.natureOfFluid && formik.errors.natureOfFluid && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                            >
                                {formik.errors.natureOfFluid}
                            </motion.p>
                        )}
                    </div> 
                </div> 
                <div className=' w-full mr-2' >
                    <p className='text-xs mb-2' >Amount</p>
                    <Input
                        name="amount"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("amount", true, true)
                        }  
                        type='number'
                        fontSize='sm' placeholder='0' />
                    <div className="w-full h-auto pt-2">
                        {formik.touched.amount && formik.errors.amount && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                            >
                                {formik.errors.amount}
                            </motion.p>
                        )}
                    </div> 
                </div> 
            </div> 
            <div className='w-full flex mt-3' >
                <div className=' w-full mr-2' >
                    <p className='text-xs mb-2' >Urine</p>
                    <Input
                        name="urine"
                        type='number'
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("urine", true, true)
                        }  
                        fontSize='sm' placeholder='0' />
                    <div className="w-full h-auto pt-2">
                        {formik.touched.urine && formik.errors.urine && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                            >
                                {formik.errors.urine}
                            </motion.p>
                        )}
                    </div> 
                </div> 
                <div className=' w-full mr-2' >
                    <p className='text-xs mb-2' >Emesis</p>
                    <Input
                        name="emesis"
                        type='number'
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("emesis", true, true)
                        }  
                        fontSize='sm' placeholder='0' />
                    <div className="w-full h-auto pt-2">
                        {formik.touched.emesis && formik.errors.emesis && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                            >
                                {formik.errors.emesis}
                            </motion.p>
                        )}
                    </div> 
                </div>
                <div className=' w-full mr-2' >
                    <p className='text-xs mb-2' >BO</p>
                    <Input
                        name="BO"
                        type='number'
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("BO", true, true)
                        }  
                        fontSize='sm' placeholder='0' />
                    <div className="w-full h-auto pt-2">
                        {formik.touched.BO && formik.errors.BO && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                            >
                                {formik.errors.BO}
                            </motion.p>
                        )}
                    </div> 
                </div>  
            </div> 
            <div className='w-full flex mt-4' >
                {/* <button onClick={()=> navigate('/dashboard')}  className='  py-3 w-36 ml-auto text-[#A5B0C1] text-sm mt-4 rounded-full' >Cancel</button> */}
                {loading ?  
                    <button className='bg-[#7123E2] h-12 flex justify-center items-center w-48  text-white text-sm mt-6 ml-auto rounded-full' >
                        <div className='flex items-center ' >
                            <LoaderIcon size='w-10 h-10 mr-1 ' /> 
                            Loading
                        </div> 
                    </button>
                    :
                    <button onClick={()=> submit() } className='bg-[#7123E2] py-3 w-48  text-white text-sm mt-6 rounded-full ml-auto' >Submit</button>
                }
            </div>
        </div>
    )
} 