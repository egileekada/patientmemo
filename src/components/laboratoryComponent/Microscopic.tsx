import React from 'react'
import { Input, Select } from '@chakra-ui/react';
import { motion } from 'framer-motion'
import * as yup from 'yup'
import { useFormik } from 'formik';  
import { useNavigate } from 'react-router-dom';
import LoaderIcon from '../LoaderIcon';
import Modal from '../Modal';

export default function Microscopic() {

    const [loading, setLoading] = React.useState(false);
    const navigate = useNavigate()
    const [message, setMessage] = React.useState('');
    const [modal, setModal] = React.useState(0);

    const [patientData, setPatientData] = React.useState({
        "microscopicCultureSensitivity.microscopy": "",
        "microscopicCultureSensitivity.pusCells": "",
        "microscopicCultureSensitivity.bacteriaRod": "",
        "microscopicCultureSensitivity.epthicells": "",
        "microscopicCultureSensitivity.culture": "",
        "microscopicCultureSensitivity.ampecilin.urine": "",
        "microscopicCultureSensitivity.ampecilin.others": "",
        "microscopicCultureSensitivity.augmentin.urine": "",
        "microscopicCultureSensitivity.augmentin.others": "",
        "microscopicCultureSensitivity.ciprofloxain.urine": "",
        "microscopicCultureSensitivity.ciprofloxain.others": "",
        "microscopicCultureSensitivity.leuofloxain.urine": "",
        "microscopicCultureSensitivity.leuofloxain.others": "",
        "microscopicCultureSensitivity.perfloxain.urine": "",
        "microscopicCultureSensitivity.perfloxain.others": "",
        "microscopicCultureSensitivity.erythronycin.urine": "",
        "microscopicCultureSensitivity.erythronycin.others": "",
        "microscopicCultureSensitivity.ampiclox.urine": "",
        "microscopicCultureSensitivity.ampiclox.others": "",
        "microscopicCultureSensitivity.ceporex.urine": "",
        "microscopicCultureSensitivity.ceporex.others": "",
        "microscopicCultureSensitivity.streptomycin.urine": "",
        "microscopicCultureSensitivity.streptomycin.others": "",
        "microscopicCultureSensitivity.gentamycin.urine": "",
        "microscopicCultureSensitivity.gentamycin.others": "",
        "microscopicCultureSensitivity.amoxil.urine": "",
        "microscopicCultureSensitivity.amoxil.others": "",
        "microscopicCultureSensitivity.septoin.urine": "",
        "microscopicCultureSensitivity.septoin.others": "",
        "microscopicCultureSensitivity.nalixidicAcid.urine": "",
        "microscopicCultureSensitivity.nalixidicAcid.others": "",
        "microscopicCultureSensitivity.ofloxain.urine": "",
        "microscopicCultureSensitivity.ofloxain.others": "",
        "microscopicCultureSensitivity.chlorophenicol.urine": "",
        "microscopicCultureSensitivity.chlorophenicol.others": "",
        "microscopicCultureSensitivity.rifampicin.urine": "",
        "microscopicCultureSensitivity.rifampicin.others": "",
        "microscopicCultureSensitivity.norfloxacin.urine": "",
        "microscopicCultureSensitivity.norfloxacin.others": "",
    })
 
    const submit = async () => {   
        setLoading(true);
        const request = await fetch(`https://hospital-memo-api.herokuapp.com/lab-results/microscopic-culture-sensitivity/${localStorage.getItem("patientId")}`, {
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
            <div className=' w-[600px] ' >
                <p className=' font-Ubuntu-Bold text-lg mb-3 text-center ' >MICROSCOPIC & CULTURE & SENSITIVITY</p> 
                <div className=' w-full flex items-center mt-8 ' >
                    <div className='w-full mx-2' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >Microscopy</p>
                        <Input 
                            onChange={(e)=> setPatientData({...patientData, "microscopicCultureSensitivity.microscopy": e.target.value})}  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                        
                    </div> 
                    <div className='w-full mx-2' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >Pus Cells</p>
                        <Select 
                            onChange={(e)=> setPatientData({...patientData, "microscopicCultureSensitivity.pusCells": e.target.value})}  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                        
                    </div> 
                </div>   
                <div className=' w-full flex items-center my-2 ' >
                    <div className='w-full mx-2' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >Bacteria Rod</p>
                        <Input 
                            onChange={(e)=> setPatientData({...patientData, "microscopicCultureSensitivity.bacteriaRod": e.target.value})}  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                        
                    </div> 
                    <div className='w-full mx-2' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >Epthicells</p>
                        <Input 
                            onChange={(e)=> setPatientData({...patientData, "microscopicCultureSensitivity.epthicells": e.target.value})}  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                        
                    </div> 
                </div>  
                <div className=' w-full flex items-center my-2 ' >
                    <div className='w-full mx-2' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >Culture</p>
                        <Input 
                            onChange={(e)=> setPatientData({...patientData, "microscopicCultureSensitivity.culture": e.target.value})}  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                        
                    </div>  
                </div>
                <div className=' w-full h-12 flex justify-between mt-8 items-center px-4 bg-[#F0F5FF] ' >
                    <div className=' w-fit flex justify-start mx-2  ' >
                        <p  className=' font-Ubuntu-Medium w-24 text-sm' >......</p>
                    </div>
                    <div className=' w-full flex justify-center mx-2  ' >
                        <p  className=' font-Ubuntu-Medium text-sm' >Urine</p>
                    </div> 
                    <div className=' w-full flex justify-center mx-2  ' >
                        <p  className=' font-Ubuntu-Medium text-sm' >Others</p>
                    </div> 
                </div>
                <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                    <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm odd:' >Ampecilin</p>
                    </div> 
                    <div className='w-full px-1' > 
                        <Input 
                            onChange={(e)=> setPatientData({...patientData, "microscopicCultureSensitivity.ampecilin.urine": e.target.value})}  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                        
                    </div>
                    <div className='w-full px-1' > 
                        <Input 
                            onChange={(e)=> setPatientData({...patientData, "microscopicCultureSensitivity.ampecilin.others": e.target.value})}  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                        
                    </div>
                </div>
                <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                    <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm odd:' >Augmentin</p>
                    </div> 
                    <div className='w-full px-1' > 
                        <Input 
                            onChange={(e)=> setPatientData({...patientData, "microscopicCultureSensitivity.augmentin.urine": e.target.value})}  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                        
                    </div>
                    <div className='w-full px-1' > 
                        <Input 
                            onChange={(e)=> setPatientData({...patientData, "microscopicCultureSensitivity.augmentin.others": e.target.value})}  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                        
                    </div>
                </div>
                <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                    <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm odd:' >Ciprofloxain</p>
                    </div> 
                    <div className='w-full px-1' > 
                        <Input 
                            onChange={(e)=> setPatientData({...patientData, "microscopicCultureSensitivity.ciprofloxain.urine": e.target.value})}  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                        
                    </div>
                    <div className='w-full px-1' > 
                        <Input 
                            onChange={(e)=> setPatientData({...patientData, "microscopicCultureSensitivity.ciprofloxain.others": e.target.value})}  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                        
                    </div>
                </div>
                <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                    <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm odd:' >Leuofloxain</p>
                    </div> 
                    <div className='w-full px-1' > 
                        <Input 
                            onChange={(e)=> setPatientData({...patientData, "microscopicCultureSensitivity.leuofloxain.urine": e.target.value})}  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                        
                    </div>
                    <div className='w-full px-1' > 
                        <Input 
                            onChange={(e)=> setPatientData({...patientData, "microscopicCultureSensitivity.leuofloxain.others": e.target.value})}  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' /> 
                    </div>
                </div>
                <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                    <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm odd:' >Perfloxain</p>
                    </div> 
                    <div className='w-full px-1' > 
                        <Input 
                            onChange={(e)=> setPatientData({...patientData, "microscopicCultureSensitivity.perfloxain.urine": e.target.value})}  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                        
                    </div>
                    <div className='w-full px-1' > 
                        <Input 
                            onChange={(e)=> setPatientData({...patientData, "microscopicCultureSensitivity.perfloxain.others": e.target.value})}  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                        
                    </div>
                </div>
                <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                    <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm odd:' >Erythronycin</p>
                    </div> 
                    <div className='w-full px-1' > 
                        <Input 
                            onChange={(e)=> setPatientData({...patientData, "microscopicCultureSensitivity.erythronycin.urine": e.target.value})}  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                        
                    </div>
                    <div className='w-full px-1' > 
                        <Input 
                            onChange={(e)=> setPatientData({...patientData, "microscopicCultureSensitivity.erythronycin.others": e.target.value})}  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                        
                    </div>
                </div>
                <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                    <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm odd:' >Ampiciox</p>
                    </div> 
                    <div className='w-full px-1' > 
                        <Input 
                            onChange={(e)=> setPatientData({...patientData, "microscopicCultureSensitivity.ampiclox.urine": e.target.value})}  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                        
                    </div>
                    <div className='w-full px-1' > 
                        <Input 
                            onChange={(e)=> setPatientData({...patientData, "microscopicCultureSensitivity.ampiclox.others": e.target.value})}  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                        
                    </div>
                </div>
                <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                    <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm odd:' >Ceporex</p>
                    </div> 
                    <div className='w-full px-1' > 
                        <Input 
                            onChange={(e)=> setPatientData({...patientData, "microscopicCultureSensitivity.ceporex.urine": e.target.value})}  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                        
                    </div>
                    <div className='w-full px-1' > 
                        <Input 
                            onChange={(e)=> setPatientData({...patientData, "microscopicCultureSensitivity.ceporex.others": e.target.value})}  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                        
                    </div>
                </div>
                <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                    <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm odd:' >Streptomycin</p>
                    </div> 
                    <div className='w-full px-1' > 
                        <Input 
                            onChange={(e)=> setPatientData({...patientData, "microscopicCultureSensitivity.streptomycin.urine": e.target.value})}  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                        
                    </div>
                    <div className='w-full px-1' > 
                        <Input 
                            onChange={(e)=> setPatientData({...patientData, "microscopicCultureSensitivity.streptomycin.others": e.target.value})}  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                        
                    </div>
                </div>
                <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                    <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm odd:' >Gentamycin</p>
                    </div> 
                    <div className='w-full px-1' > 
                        <Input 
                            onChange={(e)=> setPatientData({...patientData, "microscopicCultureSensitivity.gentamycin.urine": e.target.value})}  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                        
                    </div>
                    <div className='w-full px-1' > 
                        <Input 
                            onChange={(e)=> setPatientData({...patientData, "microscopicCultureSensitivity.gentamycin.others": e.target.value})}  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                        
                    </div>
                </div>
                <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                    <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm odd:' >Amoxil</p>
                    </div> 
                    <div className='w-full px-1' > 
                        <Input 
                            onChange={(e)=> setPatientData({...patientData, "microscopicCultureSensitivity.amoxil.urine": e.target.value})}  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                        
                    </div>
                    <div className='w-full px-1' > 
                        <Input 
                            onChange={(e)=> setPatientData({...patientData, "microscopicCultureSensitivity.amoxil.others": e.target.value})}  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                        
                    </div>
                </div>
                <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                    <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm odd:' >Septoin</p>
                    </div> 
                    <div className='w-full px-1' > 
                        <Input 
                            onChange={(e)=> setPatientData({...patientData, "microscopicCultureSensitivity.septoin.urine": e.target.value})}  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                        
                    </div>
                    <div className='w-full px-1' > 
                        <Input 
                            onChange={(e)=> setPatientData({...patientData, "microscopicCultureSensitivity.septoin.others": e.target.value})}  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                        
                    </div>
                </div>
                <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                    <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm odd:' >Nalixidic Acid</p>
                    </div> 
                    <div className='w-full px-1' > 
                        <Input 
                            onChange={(e)=> setPatientData({...patientData, "microscopicCultureSensitivity.nalixidicAcid.urine": e.target.value})}  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                        
                    </div>
                    <div className='w-full px-1' > 
                        <Input 
                            onChange={(e)=> setPatientData({...patientData, "microscopicCultureSensitivity.nalixidicAcid.others": e.target.value})}  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                        
                    </div>
                </div>
                <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                    <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm odd:' >Ofloxain</p>
                    </div> 
                    <div className='w-full px-1' > 
                        <Input 
                            onChange={(e)=> setPatientData({...patientData, "microscopicCultureSensitivity.ofloxain.urine": e.target.value})}  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                        
                    </div>
                    <div className='w-full px-1' > 
                        <Input 
                            onChange={(e)=> setPatientData({...patientData, "microscopicCultureSensitivity.ofloxain.others": e.target.value})}  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                        
                    </div>
                </div>
                <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                    <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm odd:' >Chlorophenicol</p>
                    </div> 
                    <div className='w-full px-1' > 
                        <Input 
                            onChange={(e)=> setPatientData({...patientData, "microscopicCultureSensitivity.chlorophenicol.urine": e.target.value})}  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                        
                    </div>
                    <div className='w-full px-1' > 
                        <Input 
                            onChange={(e)=> setPatientData({...patientData, "microscopicCultureSensitivity.chlorophenicol.others": e.target.value})}  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                        
                    </div>
                </div>
                <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                    <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm' >Rifampicin</p>
                    </div> 
                    <div className='w-full px-1' > 
                        <Input 
                            onChange={(e)=> setPatientData({...patientData, "microscopicCultureSensitivity.rifampicin.urine": e.target.value})}  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                        
                    </div>
                    <div className='w-full px-1' > 
                        <Input 
                            onChange={(e)=> setPatientData({...patientData, "microscopicCultureSensitivity.rifampicin.others": e.target.value})}  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                        
                    </div>
                </div>
                <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                    <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm odd:' >Norfloxacin</p>
                    </div> 
                    <div className='w-full px-1' > 
                        <Input 
                            onChange={(e)=> setPatientData({...patientData, "microscopicCultureSensitivity.norfloxacin.urine": e.target.value})}  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                        
                    </div>
                    <div className='w-full px-1' > 
                        <Input 
                            onChange={(e)=> setPatientData({...patientData, "microscopicCultureSensitivity.norfloxacin.others": e.target.value})}  
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