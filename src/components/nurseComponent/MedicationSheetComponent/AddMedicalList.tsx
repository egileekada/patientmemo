import { Input, Select } from '@chakra-ui/react';
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

    const { data } = useQuery('PatientDataInfo', () =>
        fetch(`https://hospital-memo-api.herokuapp.com/patients/${props.data.patient}`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )   
    
    React.useEffect(() => {
        formik.setFieldValue('patient', props.data.patient)
        formik.setFieldValue('requestId', props.data.doctor)
    }, []) 
 
    console.log(props.data)

    // formik
    const formik = useFormik({
        initialValues: {prescription: '', patient: '',  requestId: ''},
        validationSchema: loginSchema,
        onSubmit: () => {},
    });     

    // {
    //     "prescription":"This is the description",
    //     "patient":"624c67420892c90016448c29",
    //     "dateAndTime":"12pm-2pm",
    //     "requestId":"62544b63d241e00016c7ecd2"
    // }

    const submit=async()=> {

        if (!formik.dirty) {
            alert('You have to fill in th form to continue');
            return;
          }else if (!formik.isValid) {
            alert('You have to fill in the form correctly to continue');
            return;
          }else {
            setLoading(true)
                const request = await fetch(`https://hospital-memo-api.herokuapp.com/medical-sheets`, {
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
            <p className='text-lg font-Ubuntu-Bold' >Personal Information</p>
            <div className='w-full flex mt-8' >
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Full Name</p>
                    <Input
                        disabled
                        _placeholder={{color: 'black'}} 
                        fontSize='sm' placeholder={data.firstName+' '+data.lastName}  /> 
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
                {/* <div className='mr-2' >
                    <p className='text-xs mb-2' >Date/Time</p>
                    <Input 
                        name="dateAndTime"
                        onChange={formik.handleChange}
                        type='datetime-local'
                        onFocus={() =>
                            formik.setFieldTouched("dateAndTime", true, true)
                        }  
                        fontSize='sm' placeholder='Enter Date And Time' />
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
                    </div>  */}
                {/* </div>  */}
            </div>
            <div className='w-full flex mt-3' >
                <div className=' w-full mr-2' >
                    <p className='text-xs mb-2' >Prescription</p>
                    <Input
                        name="prescription"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("prescription", true, true)
                        }  
                        fontSize='sm' placeholder='Enter Prescription' />
                    <div className="w-full h-auto pt-2">
                        {formik.touched.prescription && formik.errors.prescription && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                            >
                                {formik.errors.prescription}
                            </motion.p>
                        )}
                    </div> 
                </div> 
            </div> 
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
                    <button onClick={()=> submit() } className='bg-[#7123E2] py-3 w-48  text-white text-sm mt-6 rounded-full ml-auto' >Submit</button>
                }
            </div>
        </div>
    )
} 