import { Input, Select, Textarea } from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as yup from 'yup' 
import { motion } from 'framer-motion';
import React from 'react'
import LoaderIcon from '../../LoaderIcon';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

export default function AddMedicalList(props: any) {
    const [loading, setLoading] = React.useState(false);
    
    const loginSchema = yup.object({ 
        prescription: yup.string().required('Required'),
        // dateAndTime: yup.string().required('Required'), 
    }) 
    const navigate = useNavigate() 

    React.useEffect(() => {
        formik.setFieldValue('patient', props.data?.patient?._id)
        formik.setFieldValue('requestId', props.data?._id)
   }, []) 
 
    console.log(props.dat)

    // {
    //     "patient": "6313347f27e123eaa2716b57",
    //     "fertalHeartRate": "any medical value",
    //     "remark": "patient is in critical condition",
    //     "dateAndTime": "20-10-2022"
    //   }

    // formik
    const formik = useFormik({
        initialValues: {fertalHeartRate: '', dateAndTime: '', remark: ''},
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
                const request = await fetch(`https://hospital-memo-api.herokuapp.com/nurse/get-medical-sheet/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization : `Bearer ${localStorage.getItem('token')}`
                    },
                    body: JSON.stringify({
                        "patient": localStorage.getItem("patientId"),
                        "fertalHeartRate": formik.values.fertalHeartRate,
                        "remark": formik.values.remark,
                        "dateAndTime": formik.values.dateAndTime 
                    }),
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

    const { isLoading, data } = useQuery('patientdata', () =>
        fetch(`https://hospital-memo-api.herokuapp.com/patients/${localStorage.getItem("patientId")}`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )   
    const userData: any = JSON.parse(localStorage.getItem('userData')+'') 

    return (
        <div style={{width: '540px'}} className=' mx-auto h-full px-12 py-10 font-Ubuntu-Regular' > 
            <p className='text-lg font-Ubuntu-Bold' >Personal Information</p>
            <div className='w-full flex mt-8' >
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Full Name</p>
                    <Input
                        disabled
                        _placeholder={{color: 'black'}} 
                        fontSize='sm' 
                        placeholder={data.data?.firstName+' '+data.data?.lastName}  
                        /> 
                </div>  
            </div>
            <div className=' w-full mr-2 mt-3' >
                <p className='text-xs mb-2' >FHR</p>
                <Input
                    name="fertalHeartRate"
                    onChange={formik.handleChange}
                    onFocus={() =>
                        formik.setFieldTouched("fertalHeartRate", true, true)
                    }  
                    fontSize='sm' placeholder='0' />
                <div className="w-full h-auto pt-2">
                    {formik.touched.fertalHeartRate && formik.errors.fertalHeartRate && (
                        <motion.p
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                        >
                            {formik.errors.fertalHeartRate}
                        </motion.p>
                    )}
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
                <div className=' w-full mr-2' >
                    <p className='text-xs mb-2' >Date/Time</p>
                    <Input
                        name="dateAndTime"
                        type="datetime-local"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("dateAndTime", true, true)
                        }  
                        fontSize='sm' placeholder='Enter Prescription' />
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
                </div> 
            </div>
            <div className='w-full flex mt-3' >
                <div className=' w-full mr-2' >
                    <p className='text-xs mb-2' >Remark</p>
                    <Textarea
                        name="remark"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("remark", true, true)
                        }  
                        height="150px"
                        fontSize='sm' placeholder='' />
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
                    <button className='bg-[#7123E2] h-12 flex justify-center items-center w-48  text-white text-sm mt-6  ml-auto rounded-full' >
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