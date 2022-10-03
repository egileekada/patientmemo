import React from 'react'
import { Input } from '@chakra-ui/react';
import { motion } from 'framer-motion'
import * as yup from 'yup'
import { useFormik } from 'formik';  
import { useNavigate } from 'react-router-dom';
import LoaderIcon from '../LoaderIcon';
import { useQuery } from 'react-query';
import Modal from '../Modal';

export default function Haematology() { 

    const [loading, setLoading] = React.useState(false);
    const navigate = useNavigate()
    const [message, setMessage] = React.useState('');
    const [modal, setModal] = React.useState(0);

    const [patientData, setPatientData] = React.useState({
        "HRF.fullBloodCount": "",
        "HRF.PCV": "",
        "HRF.HB": "",
        "HRF.WBC": "",
        "HRF.neutrophils": "",
        "HRF.lymphocytes": "",
        "HRF.monocytes": "",
        "HRF.eosinophils": "",
        "HRF.basophils": "",
        "HRF.bloodGroup": "",
        "HRF.genotype": "",
        "HRF.directCoombTest": "",
        "HRF.inDirectCoombTest": "",
        "HRF.bleedingTime": "",
        "HRF.clottingTime": ""
      })
 
    const submit = async () => {   
        setLoading(true);
        const request = await fetch(`https://hospital-memo-api.herokuapp.com/lab-results/haematology-request-form/${localStorage.getItem("patientId")}`, {
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



    const { isLoading, data } = useQuery('Lab'+localStorage.getItem("patientId"), () =>
        fetch(`https://hospital-memo-api.herokuapp.com/lab-results/${localStorage.getItem("patientId")}`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )  

    React.useEffect(()=> { 
        if(data?.data?.MBRF){ 
            setPatientData({  
                "HRF.fullBloodCount": data?.data.HRF.fullBloodCount,
                "HRF.PCV": data?.data.HRF.PCV,
                "HRF.HB": data?.data.HRF.HB,
                "HRF.WBC": data?.data.HRF.WBC,
                "HRF.neutrophils": data?.data.HRF.neutrophils,
                "HRF.lymphocytes": data?.data.HRF.lymphocytes,
                "HRF.monocytes": data?.data.HRF.monocytes,
                "HRF.eosinophils": data?.data.HRF.eosinophils,
                "HRF.basophils": data?.data.HRF.basophils,
                "HRF.bloodGroup": data?.data.HRF.bloodGroup,
                "HRF.genotype": data?.data.HRF.genotype,
                "HRF.directCoombTest": data?.data.HRF.directCoombTest,
                "HRF.inDirectCoombTest": data?.data.HRF.inDirectCoombTest,
                "HRF.bleedingTime": data?.data.HRF.bleedingTime,
                "HRF.clottingTime": data?.data.HRF.clottingTime })
        }
    }, [data]) 

    return (
        <div className=' w-full flex justify-center my-10 ' >
            <Modal message={message} modal={modal} />
            <div className=' w-[640px] ' >
                {/* <p className=' font-Ubuntu-Bold text-center text-lg mb-3 ' >SEROLOGIST REQUEST FORM</p> */}
                <div className=' w-full flex items-center ' >
                    <div className='w-full mx-2' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >Full Blood Count (FBC)</p>
                        <Input  value={patientData['HRF.fullBloodCount']}
                            onChange={(e)=> setPatientData({...patientData, "HRF.fullBloodCount": e.target.value})}   
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                        
                    </div> 
                </div>
                <div className=' w-full h-12 flex justify-between mt-8 items-center px-4 bg-[#F0F5FF] ' >
                    <div className=' w-fit flex justify-start mx-2  ' >
                        <p  className=' font-Ubuntu-Medium w-24 text-sm' >Tests</p>
                    </div>
                    <div className=' w-full flex justify-center mx-2  ' >
                        <p  className=' font-Ubuntu-Medium text-sm' >Result(s)</p>
                    </div> 
                    <div className=' w-fit flex justify-start mx-2  ' >
                        <p  className=' font-Ubuntu-Medium w-24 text-sm' >Male</p>
                    </div>
                    <div className=' w-fit flex justify-start mx-2  ' >
                        <p  className=' font-Ubuntu-Medium w-24 text-sm' >Female</p>
                    </div>
                </div>
                <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                    <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >Pack cell vol.(PCV)</p>
                    </div> 
                    <div className='w-full mx-2' > 
                        <Input  value={patientData['HRF.PCV']}
                            onChange={(e)=> setPatientData({...patientData, "HRF.PCV": e.target.value})}   
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                        
                    </div>
                    <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >40 - 50%</p>
                    </div> 
                    <div className=' w-fit h-full items-center flex justify-start px-2 mx-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >37 - 47%</p>
                    </div> 
                </div>  
                <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                    <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >Haemoglobin(HB)</p>
                    </div> 
                    <div className='w-full mx-2' > 
                        <Input  value={patientData['HRF.HB']}
                            onChange={(e)=> setPatientData({...patientData, "HRF.HB": e.target.value})}   
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                        
                    </div>
                    <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >12.5 - 18.0</p>
                    </div> 
                    <div className=' w-fit h-full items-center flex justify-start px-2 mx-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >11.5 - 16.0 g/dl</p>
                    </div> 
                </div>  
                <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                    <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >WBC</p>
                    </div> 
                    <div className='w-full mx-2' > 
                        <Input  value={patientData['HRF.WBC']}
                            onChange={(e)=> setPatientData({...patientData, "HRF.WBC": e.target.value})}   
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                        
                    </div>
                    <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >4.0 - 11.0</p>
                    </div> 
                    <div className=' w-fit h-full items-center flex justify-start px-2 mx-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >4.0 - 11.0 </p>
                    </div> 
                </div>  
                <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                    <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >Neutrophils</p>
                    </div> 
                    <div className='w-full mx-2' > 
                        <Input  value={patientData['HRF.neutrophils']}
                            onChange={(e)=> setPatientData({...patientData, "HRF.neutrophils": e.target.value})}   
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                        
                    </div>
                    <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >40 - 75%</p>
                    </div> 
                    <div className=' w-fit h-full items-center flex justify-start px-2 mx-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >40 - 75%</p>
                    </div> 
                </div>  
                <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                    <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >Lymphocytes</p>
                    </div> 
                    <div className='w-full mx-2' > 
                        <Input  value={patientData['HRF.lymphocytes']}
                            onChange={(e)=> setPatientData({...patientData, "HRF.lymphocytes": e.target.value})}   
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                        
                    </div>
                    <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >20 - 45%</p>
                    </div> 
                    <div className=' w-fit h-full items-center flex justify-start px-2 mx-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >20 - 45%</p>
                    </div> 
                </div>  
                <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                    <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >Monocytes</p>
                    </div> 
                    <div className='w-full mx-2' > 
                        <Input  value={patientData['HRF.monocytes']}
                            onChange={(e)=> setPatientData({...patientData, "HRF.monocytes": e.target.value})}   
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                        
                    </div>
                    <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >2 - 8%</p>
                    </div> 
                    <div className=' w-fit h-full items-center flex justify-start px-2 mx-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >2 - 8%</p>
                    </div> 
                </div>  
                <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                    <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >Eosinophils</p>
                    </div> 
                    <div className='w-full mx-2' > 
                        <Input  value={patientData['HRF.eosinophils']}
                            onChange={(e)=> setPatientData({...patientData, "HRF.eosinophils": e.target.value})}   
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                        
                    </div>
                    <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >1 - 6%</p>
                    </div> 
                    <div className=' w-fit h-full items-center flex justify-start px-2 mx-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >1 - 6%</p>
                    </div> 
                </div>  
                <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                    <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >Basophils</p>
                    </div> 
                    <div className='w-full mx-2' > 
                        <Input  value={patientData['HRF.basophils']}
                            onChange={(e)=> setPatientData({...patientData, "HRF.basophils": e.target.value})}   
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                        
                    </div>
                    <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >{"< 1%"}</p>
                    </div> 
                    <div className=' w-fit h-full items-center flex justify-start px-2 mx-2 bg-[#F0F5FF] ' >
                        <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >{"< 1%"}</p>
                    </div> 
                </div>  
                
                <p className=' font-Ubuntu-Bold text-center text-lg mt-10 mb-3 ' >Other Request Comment</p>
                <div className=' w-full flex items-center ' >
                    <div className='w-full mx-2' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >Blood Group</p>
                        <Input  value={patientData['HRF.bloodGroup']}
                            onChange={(e)=> setPatientData({...patientData, "HRF.bloodGroup": e.target.value})}   
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                        
                    </div> 
                    <div className='w-full mx-2' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >Genotype</p>
                        <Input  value={patientData['HRF.genotype']}
                            onChange={(e)=> setPatientData({...patientData, "HRF.genotype": e.target.value})}   
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                        
                    </div> 
                </div>   
                <div className=' w-full flex items-center my-2 ' >
                    <div className='w-full mx-2' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >Direct COOMb Test</p>
                        <Input  value={patientData['HRF.directCoombTest']}
                            onChange={(e)=> setPatientData({...patientData, "HRF.directCoombTest": e.target.value})}   
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                        
                    </div> 
                    <div className='w-full mx-2' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >Indirect COOMb Test</p>
                        <Input  value={patientData['HRF.inDirectCoombTest']}
                            onChange={(e)=> setPatientData({...patientData, "HRF.inDirectCoombTest": e.target.value})}   
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                        
                    </div> 
                </div>  
                <div className=' w-full flex items-center my-2 ' >
                    <div className='w-full mx-2' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >Bleeding Time</p>
                        <Input  value={patientData['HRF.bleedingTime']}
                            onChange={(e)=> setPatientData({...patientData, "HRF.bleedingTime": e.target.value})}   
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                        
                    </div> 
                    <div className='w-full mx-2' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >Clotting Time</p>
                        <Input  value={patientData['HRF.clottingTime']}
                            onChange={(e)=> setPatientData({...patientData, "HRF.clottingTime": e.target.value})}   
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                        
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