import React from 'react' 
import { motion } from 'framer-motion'
import * as yup from 'yup'
import { useFormik } from 'formik';  
import { useNavigate } from 'react-router-dom';
import LoaderIcon from '../LoaderIcon';
import { Input } from '@chakra-ui/react';
import Modal from '../Modal';

export default function Serologist() {

    const [loading, setLoading] = React.useState(false);
    const navigate = useNavigate()
    const [message, setMessage] = React.useState('');
    const [modal, setModal] = React.useState(0);

    const [patientData, setPatientData] = React.useState({
        "serologistRF.hiv": "hiv",
        "serologistRF.hepatitisB": "hepatitisB",
        "serologistRF.hepatitisA": "hepatitisA",
        "serologistRF.VDRL": "VDRL",
        "serologistRF.pregnancyTest": "pregnancyTest",
        "serologistRF.hPylori": "hPylori"
      })
 
    const submit = async () => {   
        setLoading(true);
        const request = await fetch(`https://hospital-memo-api.herokuapp.com/lab-results/serologist-request-form/${localStorage.getItem("patientId")}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(patientData),
        });

        const json = await request.json();

        console.log('patient '+request.status)
        console.log('patient '+json)
        if (request.status === 201) {     
            setMessage(' Successful')
            setModal(1)          
            const t1 = setTimeout(() => {  
                setModal(0)      
                // navigate(0)
                clearTimeout(t1);
            }, 3000); 
        }else {
            setMessage(json.message)
            setModal(2)             
            const t1 = setTimeout(() => {  
                setModal(0)       
                clearTimeout(t1);
            }, 3000);    
            // alert(json.message);
            console.log(json) 
        }  
        setLoading(false);
    }   

    return (
        <div className=' w-full flex justify-center my-10 ' >
            <Modal message={message} modal={modal} />
            <div className=' w-[640px] ' >
                <p className=' font-Ubuntu-Bold text-center text-lg mb-3 ' >SEROLOGIST REQUEST FORM</p>
                <div className=' w-full h-12 flex justify-between items-center px-4 bg-[#F0F5FF] ' >
                    <div className=' w-fit flex justify-start mx-2  ' >
                        <p  className=' font-Ubuntu-Medium w-24 text-sm' >Investigations</p>
                    </div>
                    <div className=' w-full flex justify-center mx-2  ' >
                        <p  className=' font-Ubuntu-Medium text-sm' >Remark</p>
                    </div> 
                </div>
                <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                    <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm odd:' >HIV 1&2</p>
                    </div> 
                    <div className='w-full mx-2' > 
                        <Input
                            onChange={(e)=> setPatientData({...patientData, "serologistRF.hiv": e.target.value})}   
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                    </div>
                </div>
                <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                    <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm odd:' >Hepatitis B (HbsAs)</p>
                    </div> 
                    <div className='w-full mx-2' > 
                        <Input
                            onChange={(e)=> setPatientData({...patientData, "serologistRF.hepatitisB": e.target.value})}   
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                    </div>
                </div>
                <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                    <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm odd:' >Hepatitis A (HCV)</p>
                    </div> 
                    <div className='w-full mx-2' > 
                        <Input
                            onChange={(e)=> setPatientData({...patientData, "serologistRF.hepatitisA": e.target.value})}   
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                    </div>
                </div>
                <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                    <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm odd:' >VDRL (Syphilis)</p>
                    </div> 
                    <div className='w-full mx-2' > 
                        <Input
                            onChange={(e)=> setPatientData({...patientData, "serologistRF.VDRL": e.target.value})}   
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                    </div>
                </div>
                <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                    <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm odd:' >Pregnancy Test</p>
                    </div> 
                    <div className='w-full mx-2' > 
                        <Input
                            onChange={(e)=> setPatientData({...patientData, "serologistRF.pregnancyTest": e.target.value})}   
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                    </div>
                </div>
                <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                    <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm odd:' >H-Pylori/FOB</p>
                    </div> 
                    <div className='w-full mx-2' > 
                        <Input
                            onChange={(e)=> setPatientData({...patientData, "serologistRF.hPylori": e.target.value})}   
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                    </div>
                </div>
                <div className='w-full flex justify-end mt-4 font-Ubuntu-Medium' >
                    {/* <button className='  py-3 w-36 text-[#7123E2] text-sm mt-4 rounded-full' >Cancel</button>  */}
                    {loading ?  
                        <button className='bg-[#7123E2] h-12 flex justify-center items-center w-48  text-white text-sm mt-6 rounded-full' >
                            <div className='flex items-center ' >
                                <LoaderIcon size='w-10 h-10 mr-1 s' /> 
                                Loading
                            </div> 
                        </button>
                        :
                        <button onClick={submit} className='bg-[#7123E2] py-3 w-48  text-white text-base font-Ubuntu-Bold mt-6 rounded-full' >Save</button>
                    }
                </div>
            </div>
        </div>
    )
} 