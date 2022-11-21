import { Input } from '@chakra-ui/react'; 
import { useFormik } from 'formik';
import { motion } from 'framer-motion';
import React from 'react'
import { useNavigate } from 'react-router';
import Avater from '../../../../assets/images/user.png'
import Camera from '../../../../assets/images/bxs_camera.png'
import LoaderIcon from '../../../LoaderIcon'; 
import * as axios from 'axios'   
import Modal from '../../../Modal';
import Navbar from '../../../Navbar';

export default function ViewUserInfo(props: any) {

    const userData: any = JSON.parse(localStorage.getItem('userData')+'') 
    
    const [ selectedFiles, setSelectedFiles ] = React.useState({}as any); 
    const [message, setMessage] = React.useState('');
    const [modal, setModal] = React.useState(0); 

    const [image, SetImage] = React.useState('');   

    console.log(userData)

    React.useEffect(() => {
        formik.setValues({
            firstName : userData.firstName,
            lastName : userData.lastName,
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
        initialValues: {firstName: '', lastName: '',title: '',email: ''},
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

                formData.append('lastName', formik.values.lastName)
                formData.append('firstName', formik.values.firstName)
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
        <div className=' h-full w-full flex flex-col items-center px-4 justify-center ' >   
            <Modal message={message} modal={modal} />
            <div className=' w-[800px] mt-24 flex flex-col  ' >
                <button onClick={()=> LogOut()} className='font-Ubuntu-Bold text-sm bg-[#7123E2] text-white rounded-lg h-12 px-6 ml-auto w-44 ' >Log Out</button>
                <div className=' border-2 border-[#EAEAEA] w-full py-14 px-16 mt-4 rounded-lg ' >
                    <div className=' w-full flex flex-col ' >
                        <div className=' w-full flex flex-col mb-14 ' >
                            <div className=' w-40 mx-auto ' >
                                {!image && (
                                    <img className='w-40 h-40 rounded-full object-cover' src={userData.avatar ? userData.avatar : Avater } alt=""/> 
                                )} 

                                {image && ( 
                                    <img className='w-40 h-40 rounded-full object-cover' src={selectedFiles} alt=""/>  
                                )}
                                <label className='cursor-pointer mt-4 mx-auto flex items-center py-2 px-4 '>
                                    <input style={{display:'none'}} type="file" accept="image/*" id="input" onChange={handleImageChange} />
                                    <img className=' w-6 h-6 mr-3' src={Camera} alt="camera"/>  
                                    <p className='font-Ubuntu-Bold text-xs text-[#7123E2] ' >Change Image</p>
                                </label>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-4 pl-8 w-full font-Ubuntu-Medium' >
                            <div className='w-full' > 
                                <p className=' font-Ubuntu-Medium text-sm mb-2' >FirstName</p>
                                <Input 
                                    name="firstName"
                                    onChange={formik.handleChange}
                                    // disabled
                                    onFocus={() =>
                                        formik.setFieldTouched("firstName", true, true)
                                    }  
                                    border='1px solid #7123E2' fontSize='sm' placeholder={userData.firstName} backgroundColor='#F4F4F4' size='lg'  />
                            
                                <div className="w-full h-auto pt-2">
                                    {formik.touched.firstName && formik.errors.firstName && (
                                        <motion.p
                                            initial={{ y: -100, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                        >
                                            {formik.errors.firstName}
                                        </motion.p>
                                    )}
                                </div> 
                            </div>
                            <div className='w-full' > 
                                <p className=' font-Ubuntu-Medium text-sm mb-2' >LastName</p>
                                <Input 
                                    name="lastName"
                                    onChange={formik.handleChange}
                                    // disabled
                                    onFocus={() =>
                                        formik.setFieldTouched("lastName", true, true)
                                    }  
                                    border='1px solid #7123E2' fontSize='sm' placeholder={userData.lastName} backgroundColor='#F4F4F4' size='lg'  />
                            
                                <div className="w-full h-auto pt-2">
                                    {formik.touched.lastName && formik.errors.lastName && (
                                        <motion.p
                                            initial={{ y: -100, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                        >
                                            {formik.errors.lastName}
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
                                    border='1px solid #000' fontSize='sm' value={userData.email} backgroundColor='#F4F4F4' size='lg'  />
                            
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
                                    border='1px solid #7123E2' fontSize='sm' placeholder={userData.title} backgroundColor='#F4F4F4' size='lg'  />

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
                                    border='1px solid #7123E2' fontSize='sm' value={userData.role} backgroundColor='#F4F4F4' size='lg'  />
    
                            </div> 
                        </div>
                    </div>
                </div>
                <div className=' flex   mt-10 justify-end pb-12 ' >
                <div className=' w-44' > 
                    {loading ? 
                        <button className='font-Ubuntu-Bold text-xs border-[#7123E2] text-[#7123E2] border flex justify-center items-center rounded-lg h-11 px-6 w-full ' >
                            <div className='flex items-center' >
                                <LoaderIcon size='w-7 h-7 mr-1' /> 
                                Loading
                            </div> 
                        </button>:
                        <button onClick={()=> submit(image)} className='font-Ubuntu-Bold text-xs border-[#7123E2] text-[#7123E2] rounded-lg h-11 px-6 w-full border ' >Update Profile</button>
                    }
                </div>
                <button onClick={()=> props.close(1)} className='font-Ubuntu-Bold text-xs ml-4 text-[#fff] bg-[#7123E2] rounded-lg h-11 px-6 w-44 ' >Change Password</button>
                    
                </div>
            </div> 
                {/*   */}
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
                                border='1px solid #7123E2' fontSize='sm' placeholder={userData.fullName} backgroundColor='#F4F4F4' size='lg'  />
                        
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