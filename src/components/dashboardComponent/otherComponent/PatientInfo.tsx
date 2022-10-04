import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import * as yup from 'yup'
import { useFormik } from 'formik'; 
import { Input } from '@chakra-ui/input'
import { Select } from '@chakra-ui/select'
import LoaderIcon from '../../LoaderIcon';
import Modal from '../../Modal';

export default function PatientInfo(props: any) {

    const navigate = useNavigate()
    const [loading, setLoading] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const [modal, setModal] = React.useState(0);
    const [patientData, setPatientData] = React.useState({
        "title": "",
        "firstName": "",
        "lastName": "",
        "otherNames": "",
        "phone": "",
        "address": "",
        "age": "",
        "gender": "",
        "stateOfOrigin": "",
        "LGA": "",
        "occupation": "",
        "religion": "",
        "height": "",
        "parity": "",
        "noOfChildren": "",
        "nextOfKin.title": "",
        "nextOfKin.firstName": "",
        "nextOfKin.lastName": "",
        "nextOfKin.otherNames": "",
        "nextOfKin.relationship": "",
        "nextOfKin.address": "",
        "nextOfKin.phone": "",
        "nextOfKin.age": "",
        "nextOfKin.gender": "", 
      })
    const [state, setState] = React.useState([] as any) 
    const [cities, setCities] = React.useState([] as any) 
    const [cityLoading, setCityLoading] = React.useState(false)   
 
    React.useEffect(() => { 

        fetch(`https://www.universal-tutorial.com/api/states/Nigeria`, {
            method: 'GET', // or 'PUT'
            headers: { 
                Authorization : `Bearer ${localStorage.getItem('country-token')}`,
                "Accept": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {   
            console.log(data)  
            if(data){
                setState(data)
            }
        })
        .catch((error) => {
            console.error('Error:', error); 
        });  

        // fetch(`https://www.universal-tutorial.com/api/cities/${formik.values.stateOfOrigin}`, {
        //     method: 'GET', // or 'PUT'
        //     headers: { 
        //         Authorization : `Bearer ${localStorage.getItem('country-token')}`,
        //         "Accept": "application/json"
        //     }
        // })
        // .then(response => response.json())
        // .then(data => {    
        //     setCities(data)
        //     if(data.length !== 0){
        //         setCityLoading(true)
        //     }
        //     // console.log(data)
        // })
        // .catch((error) => {
        //     console.error('Error:', error); 
        // });  
    },[])  

    
    const submit = async () => {  
 
        setLoading(true);
        const request = await fetch(`https://hospital-memo-api.herokuapp.com/patients`, {
            method: 'POST',
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
            setMessage('Records Added Successful')
            setModal(1)          
            setLoading(false);
            const t1 = setTimeout(() => {  
                setModal(0)      
                navigate('/dashboard')
                clearTimeout(t1);
            }, 3000); 
        }else {
            setMessage('Failed To Add Records ')
            setModal(2)             
            const t1 = setTimeout(() => {  
                setModal(0)       
                clearTimeout(t1);
            }, 3000);    
            // alert(json.message);
            console.log(json) 
            setLoading(false);
        }  
    } 

    return (
        <div className='w-auto h-full px-12 py-10 font-Ubuntu-Medium text-[#333] ' > 
            <Modal message={message} modal={modal} />
            <p className='text-lg font-Ubuntu-Bold' >Personal Information</p>
            <div className='w-full flex mt-8' >
                <div className='mr-2' >
                    <p className='text-sm mb-2' >Title</p>
                    <Input onChange={(e)=> setPatientData({...patientData, title: e.target.value})}
                          
                        fontSize='sm' placeholder='Enter Title' />
                </div>
                <div className='mr-2' >
                    <p className='text-sm mb-2' >First Name</p>
                    <Input onChange={(e)=> setPatientData({...patientData, firstName: e.target.value})}
                          
                        fontSize='sm' placeholder='Enter First Name' />
                </div>
                <div className='mr-2' >
                    <p className='text-sm mb-2' >Last Name/Surname</p>
                    <Input onChange={(e)=> setPatientData({...patientData, lastName: e.target.value})}                         
                        fontSize='sm' placeholder='Enter Last Name' />
                </div>
                <div className='mr-2' >
                    <p className='text-sm mb-2' >Other Names(Optional)</p>
                    <Input onChange={(e)=> setPatientData({...patientData, otherNames: e.target.value})}                         
                        fontSize='sm' placeholder='Enter other Names' />
                </div>
            </div>
            <div className='w-full flex mt-5' >
                <div className='mr-2' >
                    <p className='text-sm mb-2' >Phone Number</p>
                    <Input onChange={(e)=> setPatientData({...patientData, phone: e.target.value})}                         
                        fontSize='sm' placeholder='080 ...' />
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-sm mb-2' >Address</p>
                    <Input onChange={(e)=> setPatientData({...patientData, address: e.target.value})}                         
                        fontSize='sm' placeholder='Home Address' />
                </div> 
            </div>
            <div className='w-full flex mt-5' >
                <div className=' w-full mr-2' >
                    <p className='text-sm mb-2' >Age</p>
                    <Input onChange={(e)=> setPatientData({...patientData, age: e.target.value})}                         
                        fontSize='sm' placeholder='Enter Age' />
                </div>
                <div className=' w-full mr-2' >
                    <p className='text-sm mb-2' >Sex/Gender</p>
                    <Select 
                        onChange={(e)=> setPatientData({...patientData, gender: e.target.value})}  
                        fontSize='sm'  placeholder='Select'>
                        <option>male</option>
                        <option>female</option>
                    </Select>
                </div> 
            </div>
            <div className='w-full flex mt-5' >
                <div className=' w-full mr-2' >
                    <p className='text-sm mb-2' >State of Origin</p>
                    <Select 
                        onChange={(e)=> setPatientData({...patientData, stateOfOrigin: e.target.value})} 
                        fontSize='sm' placeholder='Enter Your State'>
                            {state.map((item: any)=> {
                                return(
                                    <option key={item.state_name} >{item.state_name}</option>
                                )
                            })}
                        </Select>
                </div>
                <div className=' w-full mr-2' >
                    <p className='text-sm mb-2' >Local Governmet Area</p>
                    <Input onChange={(e)=> setPatientData({...patientData, LGA: e.target.value})}                         
                        fontSize='sm' placeholder='Enter LGA' /> 
                </div>
            </div>
            <div className='w-full flex mt-5' >
                <div className='w-full mr-2' >
                    <p className='text-sm mb-2' >Occupation</p>
                    <Select 
                        onChange={(e)=> setPatientData({...patientData, occupation: e.target.value})} 
                        name="occupation" 
                        fontSize='sm' placeholder='What do you do?' > 
                        <option>Profession</option>
                        <option>Employment</option>
                        <option>Business</option>
                        <option>State Service</option>
                        <option>Student</option>
                        <option>Unemployed</option>
                    </Select>
                </div> 
                <div className='w-full mr-2' >
                    <p className='text-sm mb-2' >Religion</p>
                    <Select 
                        onChange={(e)=> setPatientData({...patientData, religion: e.target.value})} 
                        fontSize='sm' placeholder='Select your religion'> 
                            <option>Christianity</option>
                            <option>Islam</option>
                            <option>Traditional beliefs</option>
                            <option>Other religions</option>
                        </Select>
                </div>
            </div> 
            <p className='text-lg font-Ubuntu-Bold mt-8' >Next of Kin’s Information</p>
            <div className='w-full flex mt-4' >
                {/* <div className='mr-2 w-full' >
                    <p className='text-sm mb-2' >Title</p>
                    <Input 
                        onChange={(e)=> setPatientData({...patientData, "nextOfKin.title": e.target.value})}    
                        fontSize='sm' placeholder='Enter Title' />
                </div> */}
                <div className='mr-2 w-full' >
                    <p className='text-sm mb-2' >First Name</p>
                    <Input 
                        onChange={(e)=> setPatientData({...patientData, "nextOfKin.firstName": e.target.value})}    
                        fontSize='sm' placeholder='Enter First Name' />
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-sm mb-2' >Last Name/Surname</p>
                    <Input 
                        onChange={(e)=> setPatientData({...patientData, "nextOfKin.lastName": e.target.value})}    
                        fontSize='sm' placeholder='Enter Last Name' />
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-sm mb-2' >Other Names(Optional)</p>
                    <Input 
                        onChange={(e)=> setPatientData({...patientData, "nextOfKin.otherNames": e.target.value})}    
                        fontSize='sm' placeholder='Enter other Names' />
                </div>
            </div>
            <div className='w-full flex mt-5' >
                <div className='mr-2 w-full' >
                    <p className='text-sm mb-2' >Relationship</p>
                    <Input 
                        onChange={(e)=> setPatientData({...patientData, "nextOfKin.relationship": e.target.value})}    
                        fontSize='sm' placeholder='Whats the relationship?' />
                </div> 
                <div className='mr-2 w-full' >
                    <p className='text-sm mb-2' >Phone Number</p>
                    <Input 
                        onChange={(e)=> setPatientData({...patientData, "nextOfKin.phone": e.target.value})}    
                        fontSize='sm' placeholder='080 ...' />
                </div>
            </div> 
             
            <div className='w-full flex mt-5' >
                <div className='mr-2 w-full' >
                    <p className='text-sm mb-2' >Age</p>
                    <Input 
                        onChange={(e)=> setPatientData({...patientData, "nextOfKin.age": e.target.value})}  
                        name="age"  
                        fontSize='sm' placeholder='Enter Age' />
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-sm mb-2' >Sex/Gender</p>
                    <Select   
                        onChange={(e)=> setPatientData({...patientData, "nextOfKin.gender": e.target.value})}  
                        fontSize='sm'  placeholder='Select'>
                        <option>male</option>
                        <option>female</option>
                    </Select>
                </div>  
                <div className='mr-2 w-full' >
                    <p className='text-sm mb-2' >Address</p>
                    <Input 
                        onChange={(e)=> setPatientData({...patientData, "nextOfKin.address": e.target.value})}    
                        fontSize='sm' placeholder='Home Address' />
                </div>  
                {/* <div className=' w-full mr-2' >
                    <p className='text-sm mb-2' >Local Governmet Area</p>
                    <Input onChange={(e)=> setPatientData({...patientData, "nextOfKin.LGA": e.target.value})}                         
                        fontSize='sm' placeholder='Enter LGA' /> 
                </div> */}
            </div>
            <div className='w-full flex mt-4' >
                <button onClick={()=> navigate('/dashboard')}  className='  py-3 w-36 ml-auto text-[#A5B0C1] text-sm mt-4 rounded-full' >Cancel</button>
                {loading ?  
                    <button className='bg-[#7123E2] h-12 flex justify-center items-center w-48  text-white text-sm mt-6 rounded-full' >
                        <div className='flex items-center' >
                            <LoaderIcon size='w-10 h-10 mr-1' /> 
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