import { Input } from '@chakra-ui/react'; 
import { useFormik } from 'formik';
import { motion } from 'framer-motion';
import React from 'react'
import { useNavigate } from 'react-router';
import Avater from '../../assets/images/user.png'
import LoaderIcon from '../LoaderIcon'; 
import * as axios from 'axios'   
import Modal from '../Modal';
import Navbar from '../Navbar';

export default function ViewUserInfo() {

    const userData: any = JSON.parse(localStorage.getItem('userData')+'') 
    
    const [ selectedFiles, setSelectedFiles ] = React.useState({}as any); 
    const [message, setMessage] = React.useState('');
    const [modal, setModal] = React.useState(0); 

    const [image, SetImage] = React.useState('');   

    // console.log(userData)

    React.useEffect(() => {
        formik.setValues({
            fullName : userData.fullName,
            title : userData.title,
            email : userData.email, 
        })
    }, []) 
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
    // formik
    const formik = useFormik({
        initialValues: {fullName: '', title: '',email: ''},
        // validationSchema: loginSchema,
        onSubmit: () => {},
    });     

    const submit =async(item: any)=> {
        setLoading(true)
        if (!formik.dirty) {
            setMessage('You have to fill in the form correctly to continue')
            setModal(2)     
            return;
        }else if (!formik.isValid) {
            setMessage('You have to fill in the form correctly to continue')
            setModal(2)     
            return;
        } else {
            try {
            
                let formData = new FormData()  

                formData.append('fullName', formik.values.fullName)
                formData.append('title', formik.values.title)  
                {image !== '' && (
                    formData.append('image', item)    
                )} 
        
                const request = await axios.default.put(`https://hospital-memo-api.herokuapp.com/admins/${userData._id}`, formData, {
                    headers: { 'content-type': 'application/json',
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                }})      
                
                localStorage.setItem('userData', JSON. stringify(request.data)); 
                setMessage('User Information Has Been Updated')
                setModal(1)  
                const t1 = setTimeout(() => {  
                    navigate(0)
                    clearTimeout(t1); 
                }, 2000);   
                
            } catch (error) { 
                setMessage('Error Updating Profile')
                setModal(2)     
                return error
            }
          }
    }   

    const LogOut =()=> {
        localStorage.clear()
        navigate('/')
    }

    return (
        <div className='w-full h-full ' > 
            <Modal message={message} modal={modal} /> 
            <Navbar />
            <div>
                
            </div>
                {/* <button onClick={()=> LogOut()} className='font-Ubuntu-Medium text-sm bg-[#7123E2] text-white rounded-lg h-11 px-6 ml-auto ' >Log Out</button>   */}
            {/* <div className='w-auto rounded-xl flex p-6 justify-center mt-8' >
                <div style={{border: '1px solid #CED5DE', borderRadius: '4px'}}  className='flex px-14 items-center flex-col justify-center mr-2' >

                    {!image && (
                        <div className='w-28 h-28 flex justify-center items-center rounded-full  ' >

                            {!userData.avatar && (

                                <img className='w-28 h-28 rounded-full object-cover' src={Avater} alt=""/>  
                            )}

                            {userData.avatar && ( 
                                <img className='w-28 h-28 rounded-full object-cover' src={userData.avatar} alt=""/>  
                            )}
                        </div>
                    )} 

                    {image && ( 
                        <img className='w-28 h-28 rounded-full object-cover' src={selectedFiles} alt=""/>  
                    )}
                    <p className='text-sm font-Ubuntu-Medium mt-4 text-[#112030]' >{userData.fullName}</p>
                    <p className='text-xs font-Ubuntu-Regular mt-1 text-[#8EA7C0]' >{userData.email}</p>
                    <label className='cursor-pointer mt-10 border rounded border-[#28A745] py-2 px-4 '>
                        <input style={{display:'none'}} type="file" accept="image/*" id="input" onChange={handleImageChange} />
                        <p className='font-Ubuntu-Regular text-xs text-[#28A745] ' >Change Image</p>
                    </label>
                </div>
                <div style={{width: '605px',border: '1px solid #CED5DE', borderRadius: '4px'}} className='p-8 py-14 ml-4' >
                    <div className='grid grid-cols-2 gap-4 font-Ubuntu-Medium' >
                        <div className='w-full' > 
                            <p className=' font-Ubuntu-Medium text-sm mb-2' >Full Name</p>
                            <Input 
                                name="fullName"
                                onChange={formik.handleChange}
                                // disabled
                                onFocus={() =>
                                    formik.setFieldTouched("fullName", true, true)
                                }  
                                border='1px solid #7123E2' fontSize='sm' placeholder={userData.fullName} backgroundColor='#F9f9f9' size='lg'  />
                        
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
                            <p className=' font-Ubuntu-Medium text-sm mb-2' >Email</p>
                            <Input 
                                name="email"
                                onChange={formik.handleChange}
                                // disabled
                                onFocus={() =>
                                    formik.setFieldTouched("email", true, true)
                                }  
                                border='1px solid #000' fontSize='sm' value={userData.email} backgroundColor='#F9f9f9' size='lg'  />
                        
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
                            <p className=' font-Ubuntu-Medium text-sm mb-2' >Title</p>
                            <Input 
                                name="title"
                                onChange={formik.handleChange}
                                // disabled
                                onFocus={() =>
                                    formik.setFieldTouched("title", true, true)
                                }  
                                border='1px solid #7123E2' fontSize='sm' placeholder={userData.title} backgroundColor='#F9f9f9' size='lg'  />

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
                        <div className='w-full' > 
                            <p className=' font-Ubuntu-Medium text-sm mb-2' >Role</p>
                            <Input  
                                border='1px solid #7123E2' fontSize='sm' value={userData.role} backgroundColor='#F9f9f9' size='lg'  />
 
                        </div> 
                    </div>
                    <div className='w-full mt-10' > 
                        {loading ? 
                            <button className='font-Ubuntu-Medium text-xs text-[#fff] bg-[#7123E2] flex justify-center items-center rounded-lg h-11 px-6 w-full ' >
                                <div className='flex items-center' >
                                    <LoaderIcon size='w-7 h-7 mr-1' /> 
                                    Loading
                                </div> 
                            </button>:
                            <button onClick={()=> submit(image)} className='font-Ubuntu-Medium text-xs text-[#fff] bg-[#7123E2] rounded-lg h-11 px-6 w-full ' >Update Profile</button>
                        }
                    </div>
                </div>  
            </div> */}
        </div>
    )
} 