import { Input, Radio, RadioGroup, Stack } from '@chakra-ui/react';
import React from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik';  
import { motion } from 'framer-motion'
import * as axios from 'axios'   
import LoaderIcon from '../../LoaderIcon';
import { useNavigate } from 'react-router-dom';

export default function AddUser() { 

    const [ selectedFiles, setSelectedFiles ] = React.useState({}as any);  

    const [image, SetImage] = React.useState('');   
    const [role, setRole] = React.useState('');   
    const navigate = useNavigate()
    const [loading, setLoading] = React.useState(false);

    const handleImageChange = (e: any ) => {

        const selected = e.target.files[0]; 
        const TYPES = ["image/png", "image/jpg", "image/jpeg", "image/svg" ];        
        if (selected && TYPES.includes(selected.type)) {
            SetImage(selected)
            const reader: any = new FileReader();
            reader.onloadend= () => {  
                setSelectedFiles(reader.result)
            }
            reader.readAsDataURL(selected)
        } else {
            alert('File Type .svg Cannot be added')
        }   
    } 
     
    const loginSchema = yup.object({ 
        fullName: yup.string().required('Required'),
        title: yup.string().required('Required'),
        email: yup.string().email('Enter Your Email').required('Required')
    })    
 
    // formik
    const formik = useFormik({
        initialValues: {fullName: '', title: '',email: ''},
        validationSchema: loginSchema,
        onSubmit: () => {},
    });    

    const sumbit =async(item: any)=> {
        setLoading(true)
        if (!formik.dirty) {
            alert('You have to fill in th form to continue');
            return;
        }else if (!formik.isValid) {
            alert('You have to fill in the form correctly to continue');
            return;
        }else if (!role) {
            alert('Please Enter Role');
            return;
        }else {
            try {
            
                let formData = new FormData()  

                formData.append('fullName', formik.values.fullName)
                formData.append('title', formik.values.title) 
                formData.append('email', formik.values.email)  
                formData.append('role', role)   
                formData.append('image', item)    
        
                await axios.default.post(`https://hospital-memo-api.herokuapp.com/auth/add-an-admin`, formData, {
                    headers: { 'content-type': 'application/json',
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                }})      
                alert('New User Added')
                navigate('/dashboard')
                
            } catch (error) { 
                return error
            }
          }
    } 
    
    return (
        <div className='w-full h-full px-24 pt-10' > 
            <div className='w-full px-12 py-4 flex items-center ' > 
                {/* <div className='w-10 h-10 rounded-full cursor-pointer flex items-center justify-center bg-[#7123E214]' >
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 11L1 6L6 1" stroke="#7123E2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div> */}
                <div className='ml-0 '> 
                    <p className='font-Ubuntu-Medium text-lg' >Add New Staff</p> 
                    <p className='font-Ubuntu-Regular text-sm mt-1' >Add and Manage Users</p> 
                </div> 
                {loading ? 
                    <button className='font-Ubuntu-Medium text-xs border text-[#7123E2] border-[#7123E2] rounded-lg h-11 px-6 ml-auto ' >
                        <div className='flex items-center' >
                            <LoaderIcon size='w-6 h-6 mr-1' /> 
                            Loading
                        </div> 
                    </button>:
                    <button onClick={()=> sumbit(image)} className='font-Ubuntu-Medium text-xs border text-[#7123E2] border-[#7123E2] rounded-lg h-11 px-6 ml-auto ' >Add New User</button>
                }
            </div>
            <div className='w-96 mx-auto mt-8' >
                <div className='flex items-center' >

                    {!image && (
                        <div className='w-20 h-20 flex justify-center items-center rounded-full border-dashed  border border-[#7123E2] ' >
                            <svg width="25" height="25" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2266 12.1287C13.2266 14.3261 10.2132 14.5801 7.94723 14.5801L7.78507 14.5799C6.34137 14.5764 2.66656 14.4853 2.66656 12.1154C2.66656 9.96291 5.5588 9.67524 7.80755 9.66439L8.10938 9.6642C9.553 9.66771 13.2266 9.75886 13.2266 12.1287ZM7.94723 10.6641C5.10657 10.6641 3.66657 11.1521 3.66657 12.1154C3.66657 13.0874 5.10657 13.5801 7.94723 13.5801C10.7872 13.5801 12.2266 13.0921 12.2266 12.1287C12.2266 11.1567 10.7872 10.6641 7.94723 10.6641ZM7.94723 1.33313C9.89923 1.33313 11.4866 2.92113 11.4866 4.87313C11.4866 6.82513 9.89923 8.41246 7.94723 8.41246H7.9259C5.9779 8.40646 4.3999 6.8178 4.40654 4.87113C4.40654 2.92113 5.99457 1.33313 7.94723 1.33313ZM7.94723 2.28513C6.5199 2.28513 5.35855 3.4458 5.35855 4.87313C5.3539 6.2958 6.50657 7.4558 7.9279 7.46113L7.94723 7.93713V7.46113C9.3739 7.46113 10.5346 6.2998 10.5346 4.87313C10.5346 3.4458 9.3739 2.28513 7.94723 2.28513Z" fill="#7123E2" fill-opacity="0.7"/>
                            </svg>
                        </div>
                    )} 
                    {image && (
                        <label className='w-20 cursor-pointer rounded-full h-20 flex flex-col justify-center items-center ' > 
                            <input style={{display:'none'}} type="file" accept="image/*" id="input" onChange={handleImageChange} />
                            <img className='w-20 h-20 rounded-full object-cover' src={selectedFiles} alt=""/> 
                        </label>
                    )}
                    <label className='cursor-pointer ml-4'>
                        <input style={{display:'none'}} type="file" accept="image/*" id="input" onChange={handleImageChange} />
                        <p className='font-Ubuntu-Medium text-sm text-[#28A745] ' >Update image</p>
                    </label>
                </div>
                <div className='w-full grid grid-cols-1 gap-4 mt-14 pb-14 border-b border-[#EEEEEE]' >
                    <div className='w-full' > 
                        <Input 
                            name="email"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("email", true, true)
                            }  
                            border='1px solid #EEEEEE' fontSize='sm' placeholder='Enter email address' backgroundColor='#F9F9F9'  />
                    
                            <div className="w-full h-auto pt-2">
                                {formik.touched.email && formik.errors.email && (
                                    <motion.p
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                    >
                                        {formik.errors.email}
                                    </motion.p>
                                )}
                            </div> 
                    </div>
                    <div className='w-full' > 
                        <Input 
                            name="fullName"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("fullName", true, true)
                            }  
                            border='1px solid #EEEEEE' fontSize='sm' placeholder='Name' backgroundColor='#F9F9F9'  />
                    
                        <div className="w-full h-auto pt-2">
                            {formik.touched.fullName && formik.errors.fullName && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                >
                                    {formik.errors.fullName}
                                </motion.p>
                            )}
                        </div> 
                    </div>
                    <div className='w-full' > 
                        <Input 
                            name="title"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("title", true, true)
                            }  
                            border='1px solid #EEEEEE' fontSize='sm' placeholder='Title' backgroundColor='#F9F9F9'  />

                        <div className="w-full h-auto pt-2">
                            {formik.touched.title && formik.errors.title && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                >
                                    {formik.errors.title}
                                </motion.p>
                            )}
                        </div> 
                    </div>
                    {/* <div className='w-full' > 
                        <Select border='1px solid #EEEEEE' fontSize='sm' placeholder='Sex' backgroundColor='#F9F9F9' >
                            <option>male</option>
                            <option>female</option>
                        </Select>
                    </div>
                    <div className='w-full' > 
                        <Input border='1px solid #EEEEEE' fontSize='sm' placeholder='Title' backgroundColor='#F9F9F9'  />
                    </div>
                    <div className='w-full' > 
                        <Input border='1px solid #EEEEEE' fontSize='sm' placeholder='Name' backgroundColor='#F9F9F9'  />
                    </div>
                    <div className='w-full' > 
                        <Input border='1px solid #EEEEEE' fontSize='sm' placeholder='Title' backgroundColor='#F9F9F9'  />
                    </div> */}
                </div>
                <div className='w-full my-14 font-Ubuntu-Regular text-sm' >
                    <RadioGroup onChange={(e: any)=> setRole(e)} >
                        <Stack spacing={8} direction='row'>
                            <Radio colorScheme='green' value='doctor'>
                            Doctor
                            </Radio>
                            <Radio colorScheme='green' value='nurse'>
                            Nurse
                            </Radio>
                            <Radio colorScheme='green' value='pharmacy'>
                            Pharmacy
                            </Radio>
                            <Radio colorScheme='green' value='lab'>
                            Lab
                            </Radio>
                            {/* <Radio colorScheme='green' value='admin'>
                            Admin
                            </Radio> */}
                        </Stack>
                    </RadioGroup>
                </div>
            </div>
        </div>
    )
} 