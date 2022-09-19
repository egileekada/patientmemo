import React from 'react'
import { Input, Textarea } from '@chakra-ui/react';
import { motion } from 'framer-motion'
import * as yup from 'yup'
import { useFormik } from 'formik';  
import { useNavigate } from 'react-router-dom';
import LoaderIcon from '../LoaderIcon';
import Modal from '../Modal';

export default function Microbiology() {

    const [loading, setLoading] = React.useState(false);
    const navigate = useNavigate()
    const [message, setMessage] = React.useState('');
    const [modal, setModal] = React.useState(0); 

    const [patientData, setPatientData] = React.useState({ 
        "MBRF.sample": "",
        "MBRF.testRequest": "",
        "MBRF.malariaParasite": "",
        "MBRF.WST.STyphiiD.O": "",
        "MBRF.WST.STyphiiD.A": "",
        "MBRF.WST.SParatyphiA.O": "",
        "MBRF.WST.SParatyphiA.A": "",
        "MBRF.WST.SParatyphiB.O": "",
        "MBRF.WST.SParatyphiB.A": "",
        "MBRF.WST.SParatyphiC.O": "",
        "MBRF.WST.SParatyphiC.A": "",
        "MBRF.stoolAnalysis.appearance": "",
        "MBRF.stoolAnalysis.macroscope": "",
        "MBRF.stoolAnalysis.microscope": "",
        "MBRF.stoolAnalysis.comment": ""})
 
    const submit = async () => {  
 
            setLoading(true);
            const request = await fetch(`https://hospital-memo-api.herokuapp.com/lab-results/microbiology-request-form/${localStorage.getItem("patientId")}`, {
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


    console.log(patientData['MBRF.sample']);
    

    return (
        <div className=' w-full flex justify-center my-10 ' >
            <Modal message={message} modal={modal} />
            <div className=' w-[500] flex flex-col items-center ' >
                <p className=' font-Ubuntu-Bold text-lg mb-4 ' >MICROBIOLOGY</p>
                <div className=' w-full flex items-center ' >
                    <div className='w-full mx-2' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >Sample</p>
                        <Input  
                            onChange={(e)=> setPatientData({...patientData, "MBRF.sample": e.target.value})}   
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
 
                    </div>
                    <div className='w-full mx-2' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >Test Request</p>
                        <Input  
                             onChange={(e)=> setPatientData({...patientData, "MBRF.testRequest": e.target.value})}   
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
 
                    </div>
                    <div className='w-full mx-2' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >Malaria Parasite(s)</p>
                        <Input  
                            onChange={(e)=> setPatientData({...patientData, "MBRF.malariaParasite": e.target.value})}   
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
 
                    </div>
                </div>
                <p className=' font-Ubuntu-Medium text-lg mt-8 mb-4 ' >Widal (Typhoid) Salmi Typhii</p>
                <div className=' w-full h-12 flex justify-between items-center px-4 bg-[#F0F5FF] ' >
                    <div className=' w-full flex justify-start mx-2  ' >
                        <p  className=' font-Ubuntu-Medium text-sm' >Salmonella</p>
                    </div>
                    <div className=' w-full flex justify-center mx-2  ' >
                        <p  className=' font-Ubuntu-Medium text-sm' >O</p>
                    </div>
                    <div className=' w-full flex justify-center mx-2  ' >
                        <p  className=' font-Ubuntu-Medium text-sm' >H</p>
                    </div>
                </div>
                <div className=' w-full h-12 mt-4 flex justify-between items-center px-4 ' >
                    <div className=' w-full flex justify-start mx-2  ' >
                        <p  className=' font-Ubuntu-Medium text-sm' >S Typhii D (O&H)</p>
                    </div>
                    <div className='w-full mx-2' > 
                        <Input  
                             onChange={(e)=> setPatientData({...patientData, "MBRF.WST.STyphiiD.O": e.target.value})}   
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
 
                    </div>
                    <div className='w-full mx-2' > 
                        <Input  
                             onChange={(e)=> setPatientData({...patientData, "MBRF.WST.STyphiiD.A": e.target.value})}   
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
 
                    </div>
                </div>
                <div className=' w-full h-12 mt-4 flex justify-between items-center px-4 ' >
                    <div className=' w-full flex justify-start mx-2  ' >
                        <p  className=' font-Ubuntu-Medium text-sm' >S Paratyphi A</p>
                    </div>
                    <div className='w-full mx-2' > 
                        <Input  
                             onChange={(e)=> setPatientData({...patientData, "MBRF.WST.SParatyphiA.O": e.target.value})}   
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
 
                    </div>
                    <div className='w-full mx-2' > 
                        <Input  
                             onChange={(e)=> setPatientData({...patientData, "MBRF.WST.SParatyphiA.A": e.target.value})}   
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
 
                    </div>
                </div>
                <div className=' w-full h-12 mt-4 flex justify-between items-center px-4 ' >
                    <div className=' w-full flex justify-start mx-2  ' >
                        <p  className=' font-Ubuntu-Medium text-sm' >S Paratyphi B</p>
                    </div>
                    <div className='w-full mx-2' > 
                        <Input  
                             onChange={(e)=> setPatientData({...patientData, "MBRF.WST.SParatyphiB.O": e.target.value})}   
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
 
                    </div>
                    <div className='w-full mx-2' > 
                        <Input  
                             onChange={(e)=> setPatientData({...patientData, "MBRF.WST.SParatyphiB.A": e.target.value})}   
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
 
                    </div>
                </div>
                <div className=' w-full h-12 mt-4 flex justify-between items-center px-4 ' >
                    <div className=' w-full flex justify-start mx-2  ' >
                        <p  className=' font-Ubuntu-Medium text-sm' >S Paratyphi C</p>
                    </div>
                    <div className='w-full mx-2' > 
                        <Input  
                             onChange={(e)=> setPatientData({...patientData, "MBRF.WST.SParatyphiC.O": e.target.value})}   
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
 
                    </div>
                    <div className='w-full mx-2' > 
                        <Input  
                             onChange={(e)=> setPatientData({...patientData, "MBRF.WST.SParatyphiC.A": e.target.value})}   
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
 
                    </div>
                </div>
                <p className=' font-Ubuntu-Medium text-lg mt-4 mb-4 text-[#7d7d7d] ' >Widal Titre : Values Significant 1/80 0r 1:80</p>
                <p className=' font-Ubuntu-Medium text-lg mt-8 mb-4 ' >Stool Analysis:</p>
                <div className='w-full mb-2 mx-2' >
                    <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >Appearance</p>
                    <Input  
                         onChange={(e)=> setPatientData({...patientData, "MBRF.stoolAnalysis.appearance": e.target.value})}   
                        className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' /> 
                </div>
                <div className='w-full mb-2 mx-2' >
                    <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >Macroscope</p>
                    <Input  
                         onChange={(e)=> setPatientData({...patientData, "MBRF.stoolAnalysis.macroscope": e.target.value})}   
                        className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' /> 
                </div>
                <div className='w-full mb-2 mx-2' >
                    <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >Microscope</p>
                    <Input  
                         onChange={(e)=> setPatientData({...patientData, "MBRF.stoolAnalysis.microscope": e.target.value})}   
                        className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' /> 
                </div>
                <div className='w-full mb-2 mx-2' >
                    <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >Comment</p>
                    <Textarea
                    height={150}  
                         onChange={(e)=> setPatientData({...patientData, "MBRF.stoolAnalysis.comment": e.target.value})}   
                        className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' /> 
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