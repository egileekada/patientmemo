import React from 'react' 
import { Input, Select } from '@chakra-ui/react';
import { motion } from 'framer-motion'
import * as yup from 'yup'
import { useFormik } from 'formik';  
import { useNavigate } from 'react-router-dom';
import LoaderIcon from '../LoaderIcon';
import Modal from '../Modal';
import { useQuery } from 'react-query';

export default function Chemistry() {

    const [loading, setLoading] = React.useState(false);
    const navigate = useNavigate()
    const [message, setMessage] = React.useState('');
    const [modal, setModal] = React.useState(0);

    const [patientData, setPatientData] = React.useState({
        "chemistry.sodium": "",
        "chemistry.potassium": "",
        "chemistry.chloride": "",
        "chemistry.creatinine": "",
        "chemistry.urea": "",
        "chemistry.bicarbonate": "",
        "chemistry.calcium": "",
        "chemistry.uricAcid": "",
        "chemistry.bilirubinDirect": "",
        "chemistry.bilirubinInDirect": "",
        "chemistry.AST": "",
        "chemistry.ALT": "",
        "chemistry.phosphate": "",
        "chemistry.protein": "",
        "chemistry.albumin": "",
        "chemistry.totalCholeterol": "",
        "chemistry.triglyceride": "",
        "chemistry.HDL": "",
        "chemistry.LDL": "",
        "chemistry.FBS": "",
        "chemistry.RBS": ""
      })
 
    const submit = async () => {   
        setLoading(true);
        const request = await fetch(`https://hospital-memo-api.herokuapp.com/lab-results/chemistry-request-form/${localStorage.getItem("patientId")}`, {
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
        if(data?.data?.chemistry){ 
            setPatientData({   
                "chemistry.sodium": data?.data.chemistry.sodium,
                "chemistry.potassium": data?.data.chemistry.potassium,
                "chemistry.chloride": data?.data.chemistry.chloride,
                "chemistry.creatinine": data?.data.chemistry.creatinine,
                "chemistry.urea": data?.data.chemistry.urea,
                "chemistry.bicarbonate": data?.data.chemistry.bicarbonate,
                "chemistry.calcium": data?.data.chemistry.calcium,
                "chemistry.uricAcid": data?.data.chemistry.uricAcid,
                "chemistry.bilirubinDirect": data?.data.chemistry.bilirubinDirect,
                "chemistry.bilirubinInDirect": data?.data.chemistry.bilirubinInDirect,
                "chemistry.AST": data?.data.chemistry.AST,
                "chemistry.ALT": data?.data.chemistry.ALT,
                "chemistry.phosphate": data?.data.chemistry.phosphate,
                "chemistry.protein": data?.data.chemistry.protein,
                "chemistry.albumin": data?.data.chemistry.albumin,
                "chemistry.totalCholeterol": data?.data.chemistry.totalCholeterol,
                "chemistry.triglyceride": data?.data.chemistry.triglyceride,
                "chemistry.HDL": data?.data.chemistry.HDL,
                "chemistry.LDL": data?.data.chemistry.LDL,
                "chemistry.FBS": data?.data.chemistry.FBS,
                "chemistry.RBS": data?.data.chemistry.RBS})
        }
    }, [data])

    console.log(data?.data);  

    return (
        <div className=' w-full flex justify-center my-10 ' >
        <Modal message={message} modal={modal} />
            <div className=' w-full grid grid-cols-3 gap-6 px-10 ' >
                <div className=' w-full ' >
                    <div className=' w-full h-12 flex justify-between mt-8 items-center px-4 bg-[#F0F5FF] ' >
                        <div className=' w-fit flex justify-start mx-2  ' >
                            <p  className=' font-Ubuntu-Medium w-24 text-sm' >Kidney function test</p>
                        </div>
                        <div className=' w-full flex justify-center mx-2  ' >
                            <p  className=' font-Ubuntu-Medium text-sm' >Result(s)</p>
                        </div> 
                        <div className=' w-fit flex justify-start mx-2  ' >
                            <p  className=' font-Ubuntu-Medium w-24 text-sm' >Reff-Range</p>
                        </div> 
                    </div>
                    <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                        <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                            <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >Sodium</p>
                        </div> 
                        <div className='w-full mx-2' > 
                            <Input paddingLeft="1px" paddingRight="1px" width="40px" value={patientData['chemistry.sodium']}  
                                onChange={(e)=> setPatientData({...patientData, "chemistry.sodium": e.target.value})}  
                                className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                    
                        </div>
                        <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                            <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >135 - 145 mmol/L</p>
                        </div>  
                    </div>  
                    <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                        <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                            <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >Potassium</p>
                        </div> 
                        <div className='w-full mx-2' > 
                            <Input paddingLeft="1px" paddingRight="1px" width="40px" value={patientData['chemistry.potassium']}  
                            onChange={(e)=> setPatientData({...patientData, "chemistry.potassium": e.target.value})}  
                                className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                    
                        </div>
                        <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                            <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >3.4 - 4.8 mmol/L</p>
                        </div>  
                    </div>  
                    <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                        <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                            <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >Chloride</p>
                        </div> 
                        <div className='w-full mx-2' > 
                            <Input paddingLeft="1px" paddingRight="1px" width="40px" value={patientData['chemistry.chloride']}  
                            onChange={(e)=> setPatientData({...patientData, "chemistry.chloride": e.target.value})}  
                                className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                    
                        </div>
                        <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                            <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >95 - 105 mmol/L</p>
                        </div>  
                    </div>  
                    <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                        <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                            <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >Creatinine</p>
                        </div> 
                        <div className='w-full mx-2' > 
                            <Input paddingLeft="1px" paddingRight="1px" width="40px" value={patientData['chemistry.creatinine']}  
                            onChange={(e)=> setPatientData({...patientData, "chemistry.creatinine": e.target.value})}  
                                className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                    
                        </div>
                        <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                            <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >50 - 125 mmol/L</p>
                        </div>  
                    </div>  
                    <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                        <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                            <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >Urea</p>
                        </div> 
                        <div className='w-full mx-2' > 
                            <Input paddingLeft="1px" paddingRight="1px" width="40px" value={patientData['chemistry.urea']}  
                            onChange={(e)=> setPatientData({...patientData, "chemistry.urea": e.target.value})}  
                                className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                    
                        </div>
                        <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                            <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >2.4 - 6.0 mmol/L</p>
                        </div>  
                    </div>  
                    <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                        <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                            <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >Bicarbonate</p>
                        </div> 
                        <div className='w-full mx-2' > 
                            <Input paddingLeft="1px" paddingRight="1px" width="40px" value={patientData['chemistry.bicarbonate']}  
                            onChange={(e)=> setPatientData({...patientData, "chemistry.bicarbonate": e.target.value})}  
                                className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                    
                        </div>
                        <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                            <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >24 - 30 mmol/L</p>
                        </div>  
                    </div>  
                    <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                        <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                            <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >Calcium</p>
                        </div> 
                        <div className='w-full mx-2' > 
                            <Input paddingLeft="1px" paddingRight="1px" width="40px" value={patientData['chemistry.calcium']}  
                            onChange={(e)=> setPatientData({...patientData, "chemistry.calcium": e.target.value})}  
                                className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                    
                        </div>
                        <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                            <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >2.1 - 2.6 mmol/L</p>
                        </div>  
                    </div>  
                    <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                        <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                            <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >Uric Acid</p>
                        </div> 
                        <div className='w-full mx-2' > 
                            <Input paddingLeft="1px" paddingRight="1px" width="40px" value={patientData['chemistry.uricAcid']}  
                            onChange={(e)=> setPatientData({...patientData, "chemistry.uricAcid": e.target.value})}  
                                className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                    
                        </div>
                        <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                            <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >120 - 420 ummol/L</p>
                        </div>  
                    </div>  
                </div>
                <div className=' w-full ' >
                    <div className=' w-full h-12 flex justify-between mt-8 items-center px-4 bg-[#F0F5FF] ' >
                        <div className=' w-fit flex justify-start mx-2  ' >
                            <p  className=' font-Ubuntu-Medium w-24 text-sm' >Liver function test</p>
                        </div>
                        <div className=' w-full flex justify-center mx-2  ' >
                            <p  className=' font-Ubuntu-Medium text-sm' >Result(s)</p>
                        </div> 
                        <div className=' w-fit flex justify-start mx-2  ' >
                            <p  className=' font-Ubuntu-Medium w-24 text-sm' >Reff-Range</p>
                        </div> 
                    </div>
                    <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                        <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                            <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >Bilirubin direct</p>
                        </div> 
                        <div className='w-full mx-2' > 
                            <Input paddingLeft="1px" paddingRight="1px" width="40px" value={patientData['chemistry.bilirubinDirect']}  
                            onChange={(e)=> setPatientData({...patientData, "chemistry.bilirubinDirect": e.target.value})}  
                                className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                    
                        </div>
                        <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                            <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >5 - 18 umol/L</p>
                        </div>  
                    </div>  
                    <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                        <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                            <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >Bilirubin indirect (conj)</p>
                        </div> 
                        <div className='w-full mx-2' > 
                            <Input paddingLeft="1px" paddingRight="1px" width="40px" value={patientData['chemistry.bilirubinInDirect']}  
                            onChange={(e)=> setPatientData({...patientData, "chemistry.bilirubinInDirect": e.target.value})}  
                                className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                    
                        </div>
                        <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                            <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >{"< 8 umol/L"}</p>
                        </div>  
                    </div>  
                    <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                        <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                            <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >AST</p>
                        </div> 
                        <div className='w-full mx-2' > 
                            <Input paddingLeft="1px" paddingRight="1px" width="40px" value={patientData['chemistry.AST']}  
                            onChange={(e)=> setPatientData({...patientData, "chemistry.AST": e.target.value})}  
                                className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                    
                        </div>
                        <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                            <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >Up to 12 u/L</p>
                        </div>  
                    </div>  
                    <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                        <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                            <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >ALT</p>
                        </div> 
                        <div className='w-full mx-2' > 
                            <Input paddingLeft="1px" paddingRight="1px" width="40px" value={patientData['chemistry.ALT']}  
                            onChange={(e)=> setPatientData({...patientData, "chemistry.ALT": e.target.value})}  
                                className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                    
                        </div>
                        <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                            <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >Up to 12 u/L</p>
                        </div>  
                    </div>  
                    <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                        <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                            <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >phosphate</p>
                        </div> 
                        <div className='w-full mx-2' > 
                            <Input paddingLeft="1px" paddingRight="1px" width="40px" value={patientData['chemistry.phosphate']}  
                            onChange={(e)=> setPatientData({...patientData, "chemistry.phosphate": e.target.value})}  
                                className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                    
                        </div>
                        <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                            <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >9 - 35 u/L</p>
                        </div>  
                    </div>  
                    <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                        <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                            <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >Protein</p>
                        </div> 
                        <div className='w-full mx-2' > 
                            <Input paddingLeft="1px" paddingRight="1px" width="40px" value={patientData['chemistry.protein']}  
                            onChange={(e)=> setPatientData({...patientData, "chemistry.protein": e.target.value})}  
                                className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                    
                        </div>
                        <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                            <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >62 - 80 g/L</p>
                        </div>  
                    </div>  
                    <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                        <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                            <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >Albumin</p>
                        </div> 
                        <div className='w-full mx-2' > 
                            <Input paddingLeft="1px" paddingRight="1px" width="40px" value={patientData['chemistry.albumin']}  
                            onChange={(e)=> setPatientData({...patientData, "chemistry.albumin": e.target.value})}  
                                className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                    
                        </div>
                        <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                            <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >36 - 50 g/L</p>
                        </div>  
                    </div>  
                    {/* <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                        <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                            <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >Lipid Profile</p>
                        </div> 
                        <div className='w-full mx-2' > 
                            <Input paddingLeft="1px" paddingRight="1px" width="40px" value={patientData['chemistry.totalCholeterol']}  
                            onChange={(e)=> setPatientData({...patientData, "chemistry.totalCholeterol": e.target.value})}  
                                className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                    
                        </div>
                        <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                            <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' > </p>
                        </div>  
                    </div>   */}
                </div>
                <div className=' w-full ' >
                    <div className=' w-full h-12 flex justify-between mt-8 items-center px-4 bg-[#F0F5FF] ' >
                        <div className=' w-fit flex justify-start mx-2  ' >
                            <p  className=' font-Ubuntu-Medium w-24 text-sm' >Liver function test</p>
                        </div>
                        <div className=' w-full flex justify-center mx-2  ' >
                            <p  className=' font-Ubuntu-Medium text-sm' >Result(s)</p>
                        </div> 
                        <div className=' w-fit flex justify-start mx-2  ' >
                            <p  className=' font-Ubuntu-Medium w-24 text-sm' >Reff-Range</p>
                        </div> 
                    </div>
                    <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                        <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                            <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >Total Chlesterol</p>
                        </div> 
                        <div className='w-full mx-2' > 
                            <Input paddingLeft="1px" paddingRight="1px" width="40px" value={patientData['chemistry.totalCholeterol']}  
                            onChange={(e)=> setPatientData({...patientData, "chemistry.totalCholeterol": e.target.value})}  
                                className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                    
                        </div>
                        <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                            <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >3.5 - 6.8 mmol/L</p>
                        </div>  
                    </div>  
                    <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                        <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                            <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >Triglyceride</p>
                        </div> 
                        <div className='w-full mx-2' > 
                            <Input paddingLeft="1px" paddingRight="1px" width="40px" value={patientData['chemistry.triglyceride']}  
                            onChange={(e)=> setPatientData({...patientData, "chemistry.triglyceride": e.target.value})}  
                                className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                    
                        </div>
                        <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                            <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >0.3 - 1.8 mmol/L</p>
                        </div>  
                    </div>  
                    <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                        <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                            <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >HDL</p>
                        </div> 
                        <div className='w-full mx-2' > 
                            <Input paddingLeft="1px" paddingRight="1px" width="40px" value={patientData['chemistry.HDL']}  
                            onChange={(e)=> setPatientData({...patientData, "chemistry.HDL": e.target.value})}  
                                className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                    
                        </div>
                        <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                            <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >0.8 - 1.8 mmol/L</p>
                        </div>  
                    </div>  
                    <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                        <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                            <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >LDL</p>
                        </div> 
                        <div className='w-full mx-2' > 
                            <Input paddingLeft="1px" paddingRight="1px" width="40px" value={patientData['chemistry.LDL']}  
                            onChange={(e)=> setPatientData({...patientData, "chemistry.LDL": e.target.value})}  
                                className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                    
                        </div>
                        <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                            <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >1.8 - 4.0 mmol/L</p>
                        </div>  
                    </div>  
                    <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                        <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                            <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >FBS</p>
                        </div> 
                        <div className='w-full mx-2' > 
                            <Input paddingLeft="1px" paddingRight="1px" width="40px" value={patientData['chemistry.FBS']}  
                            onChange={(e)=> setPatientData({...patientData, "chemistry.FBS": e.target.value})}  
                                className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                    
                        </div>
                        <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                            <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >3.8 - 5.5 mmol/L</p>
                        </div>  
                    </div>  
                    <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                        <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                            <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >RBS</p>
                        </div> 
                        <div className='w-full mx-2' > 
                            <Input paddingLeft="1px" paddingRight="1px" width="40px" value={patientData['chemistry.RBS']}  
                            onChange={(e)=> setPatientData({...patientData, "chemistry.RBS": e.target.value})}  
                                className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' />
                    
                        </div>
                        <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                            <p  className=' font-Ubuntu-Medium w-32 text-center text-sm ' >4.0 - 10 mmol/L</p>
                        </div>  
                    </div>   
                    <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                        <div className=' w-full h-full items-center flex justify-start px-1 ' >
                            <p  className=' w-full font-Ubuntu-Medium text-center text-sm ' >2Hpp</p>
                            <p  className=' w-full font-Ubuntu-Medium text-center text-sm ' >=</p>
                            <p  className=' w-full font-Ubuntu-Medium text-center text-sm ' >FBS</p>
                            <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                                <p  className=' font-Ubuntu-Medium w-12 text-center text-sm ' > </p>
                            </div>  
                            <p  className='w-full font-Ubuntu-Medium text-center text-sm ' >2Hpp</p>
                            <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                                <p  className=' font-Ubuntu-Medium w-12 text-center text-sm ' > </p>
                            </div>  
                        </div>   
                    </div>  
                    <div className=' w-full h-12 flex justify-between  my-3 items-center  ' >
                        <div className=' w-full h-full items-center flex justify-start px-1 ' >
                            <p  className=' w-full font-Ubuntu-Medium text-center text-sm ' >OGTT</p>
                            <p  className=' w-full font-Ubuntu-Medium text-center text-sm ' >=</p>
                            <p  className=' w-full font-Ubuntu-Medium text-center text-sm ' >FBS</p>
                            <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                                <p  className=' font-Ubuntu-Medium w-12 text-center text-sm ' > </p>
                            </div>  
                            <p  className='w-full font-Ubuntu-Medium text-center text-sm ' ></p>
                            <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#fff] ' >
                                <p  className=' font-Ubuntu-Medium w-12 text-center text-sm ' > </p>
                            </div>  
                        </div>   
                    </div> 
                    <div className=' w-full h-12 flex justify-between  my-3 items-center  ' > 
                        <p  className='w-auto mr-4 ml-auto font-Ubuntu-Medium text-center text-sm ' >1 Glucose intake 30 min </p>
                            <div className=' w-fit h-full items-center flex justify-start px-2 bg-[#F0F5FF] ' >
                            <p  className=' font-Ubuntu-Medium w-12 text-center text-sm ' > </p>
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
        </div>
    )
} 