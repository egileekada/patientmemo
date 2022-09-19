import React from 'react'
import { Input } from '@chakra-ui/react';
import { motion } from 'framer-motion'
import * as yup from 'yup'
import { useFormik } from 'formik';  
import { useNavigate } from 'react-router-dom';
import LoaderIcon from '../LoaderIcon';
import Modal from '../Modal';

export default function UrineAnalysis() {

    const [loading, setLoading] = React.useState(false);
    const navigate = useNavigate()
    const [message, setMessage] = React.useState('');
    const [modal, setModal] = React.useState(0);  

    const [patientData, setPatientData] = React.useState({  
        "UAT.date": "",
        "UAT.sample": "",
        "UAT.PH": "",
        "UAT.specificGravity": "",
        "UAT.protein": "",
        "UAT.glucose": "",
        "UAT.blood": "",
        "UAT.bilirubin": "",
        "UAT.urobilinosen": "",
        "UAT.ketone": "",
        "UAT.nitrite": "",
        "UAT.leucocytes": ""
    })
 
    const submit = async () => {   
        setLoading(true);
        const request = await fetch(`https://hospital-memo-api.herokuapp.com/lab-results/urine-analysis-test/${localStorage.getItem("patientId")}`, {
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
                <p className=' font-Ubuntu-Bold text-center text-lg mb-3 ' >URINE ANALYSIS TEST</p>
                <div className=' w-full flex items-center ' >
                    <div className='w-full mx-2' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >Date</p>
                        <Input 
                            type="date" 
                            onChange={(e)=> setPatientData({...patientData, "UAT.date": e.target.value})}   
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' /> 
                    </div>
                    <div className='w-full mx-2' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >Sample</p>
                        <Input 
                            
                            onChange={(e)=> setPatientData({...patientData, "UAT.sample": e.target.value})}   
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                        
                    </div> 
                </div>
                <div className=' w-full h-12 flex justify-between mt-8 items-center px-4 bg-[#F0F5FF] ' >
                    <div className=' w-fit flex justify-start mx-2  ' >
                        <p  className=' font-Ubuntu-Medium w-24 text-sm' >Parameters (Tests)</p>
                    </div>
                    <div className=' w-full flex justify-center mx-2  ' >
                        <p  className=' font-Ubuntu-Medium text-sm' >Remark</p>
                    </div> 
                </div>
                <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                    <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm odd:' >PH</p>
                    </div> 
                    <div className='w-full mx-2' > 
                        <Input  
                            onChange={(e)=> setPatientData({...patientData, "UAT.PH": e.target.value})}   
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                        
                    </div>
                </div>
                <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                    <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm odd:' >Specific Gravity</p>
                    </div> 
                    <div className='w-full mx-2' > 
                        <Input  
                            onChange={(e)=> setPatientData({...patientData, "UAT.specificGravity": e.target.value})}   
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                        
                    </div>
                </div>
                <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                    <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm odd:' >Protein</p>
                    </div> 
                    <div className='w-full mx-2' > 
                        <Input 
                            
                            onChange={(e)=> setPatientData({...patientData, "UAT.protein": e.target.value})}   
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                        
                    </div>
                </div>
                <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                    <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm odd:' >Glucose</p>
                    </div> 
                    <div className='w-full mx-2' > 
                        <Input 
                            
                            onChange={(e)=> setPatientData({...patientData, "UAT.glucose": e.target.value})}   
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                        
                    </div>
                </div>
                <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                    <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm odd:' >Blood</p>
                    </div> 
                    <div className='w-full mx-2' > 
                        <Input 
                            
                            onChange={(e)=> setPatientData({...patientData, "UAT.blood": e.target.value})}   
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                        
                    </div>
                </div>
                <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                    <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm odd:' >Bilirubin</p>
                    </div> 
                    <div className='w-full mx-2' > 
                        <Input 
                            
                            onChange={(e)=> setPatientData({...patientData, "UAT.bilirubin": e.target.value})}   
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                        
                    </div>
                </div>
                <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                    <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm odd:' >Urobilinosen</p>
                    </div> 
                    <div className='w-full mx-2' > 
                        <Input 
                            
                            onChange={(e)=> setPatientData({...patientData, "UAT.urobilinosen": e.target.value})}   
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                        
                    </div>
                </div>
                <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                    <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm odd:' >Ketone</p>
                    </div> 
                    <div className='w-full mx-2' > 
                        <Input 
                            
                            onChange={(e)=> setPatientData({...patientData, "UAT.ketone": e.target.value})}   
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                        
                    </div>
                </div>
                <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                    <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm odd:' >Nitrite</p>
                    </div> 
                    <div className='w-full mx-2' > 
                        <Input 
                            
                            onChange={(e)=> setPatientData({...patientData, "UAT.nitrite": e.target.value})}   
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                        
                    </div>
                </div>
                <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                    <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm odd:' >Leucocytes</p>
                    </div> 
                    <div className='w-full mx-2' > 
                        <Input 
                            
                            onChange={(e)=> setPatientData({...patientData, "UAT.leucocytes": e.target.value})}   
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