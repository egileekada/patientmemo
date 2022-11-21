import React from 'react'
import SideImage from '../../assets/images/SideImage.png'
import Logo from '../../assets/images/whitelogo.png'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useFormik } from 'formik';
import { motion } from 'framer-motion';
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom';
import LoaderIcon from '../../components/LoaderIcon';
import { useLoginCallback } from '../../action/useAuth';
import Modal from '../../components/Modal';

export default function Index() {


    const navigate = useNavigate();
    const [loading, setLoading] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const [modal, setModal] = React.useState(0);
    const [showpassword, setShowpass] = React.useState(false);

    const handleShowpassword = () => {
        setShowpass(prev => !prev);
    } 

    const loginSchema = yup.object({ 
        email: yup.string().email('This email is not valid').required('Your email is required'),
        password: yup.string().required('Your password is required').min(6, 'A minimium of 6 characters')
    }) 

    // formik
    const formik = useFormik({
        initialValues: {email: '', password: ''},
        validationSchema: loginSchema,
        onSubmit: () => {},
    });   

      
    const { handleLogin } = useLoginCallback();

    const submit = async () => {
    
        if (!formik.dirty) { 
          setMessage('You have to fill in th form to continue')
          setModal(2)           
          const t1 = setTimeout(() => {  
              setModal(0)       
              clearTimeout(t1);
          }, 2000); 
          return;
        }else if (!formik.isValid) { 
          setMessage('You have to fill in the form correctly to continue')
          setModal(2)           
          const t1 = setTimeout(() => {  
              setModal(0)       
              clearTimeout(t1);
          }, 2000); 
          return;
        }else {
            setLoading(true);
            const request = await handleLogin(JSON.stringify(formik.values))  
            if (request.status === 200) {   
                sessionStorage.setItem('token', request.data.token);   
                localStorage.setItem('token', request.data.token);    
                localStorage.setItem('userData', JSON. stringify(request.data.user));   
                console.log(request.data.user.role)     
                setMessage('Login Successful')
                setModal(1)
                const t1 = setTimeout(() => { 
                    setModal(0)
                    if(request.data.user.role === 'doctor'){
                        localStorage.setItem('tab', '1')
                        navigate('/dashboard/findpatient'); 
                    } else if(request.data.user.role === 'lab'){
                        localStorage.setItem('tab', '4')
                        navigate('/dashboard/findpatient'); 
                    } else if(request.data.user.role === 'pharmacy'){
                        localStorage.setItem('tab', '3')
                        navigate('/dashboard/pharmacy'); 
                    } else if(request.data.user.role === 'nurse'){
                        localStorage.setItem('tab', '2')
                        navigate('/dashboard/findpatient'); 
                    } else {
                        localStorage.setItem('tab', '0')
                        navigate('/dashboard'); 
                    }
                    clearTimeout(t1);
                    setLoading(false);
                }, 3000); 
            }else { 
                setMessage(request.data.error.message)
                setLoading(false)
                setModal(2)
                const t1 = setTimeout(() => {
                    setLoading(false);
                    setModal(0)
                    clearTimeout(t1);
                }, 3000);  
            }
        }
    }  

    return (
        <div className='w-full flex bg-white flex-row  relative lg:py-0 pt-0 h-screen'>  
            <Modal message={message} modal={modal} /> 
                <img src={SideImage} className='object-cover w-full h-screen ' alt='SideImage' /> 
            <div className=' absolute inset-0 bg-black bg-opacity-75 z-10 ' />

            <div className='w-full absolute  h-full items-center z-20 justify-center flex flex-col'>
                
                <div  className=' lg:w-405px w-full flex flex-col lg:pt-0 px-4'>

                    <img style={{width: '200px'}} className=' absolute top-8 left-8  ' alt='logo' src={Logo} />
                    <p className=' text-center mx-auto text-[#C8A4FC] text-lg flex items-center font-Ubuntu-Bold ' >Good day! <span className=' ml-1 font-Ubuntu-Regular text-white ' >please enter your details.</span></p>
                    <p className=' font-Ubuntu-Regular text-[#BDADD3] mt-1 ' >Our patient are at the center of everything we do</p>

                    <div className='  w-full text-white border-l border-b border-white rounded-xl p-6 mt-10 ' >
                        <p className='text-2xl pb-5 font-Ubuntu-Bold'>Sign in</p>
                        {/* <p className='text-base font-Graphik-Regular mt-4 mb-6'>Manage 9Jawarehouse SEAMLESSLY</p>  */}
                        <div className='my-2 w-full' >
                            <p className='text-sm mb-1 font-Ubuntu-Medium '>Email Address</p> 
                            <Input 
                                name="email"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("email", true, true)
                                } color="#000"
                                size='lg' fontSize='sm' backgroundColor="white" placeholder="Email" />
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
                        <div className='my-2 w-full' >
                            <p className='text-sm mb-1 font-Ubuntu-Medium '>Password</p>  
                            <InputGroup >
                                <InputRightElement 
                                children={
                                    <svg onClick={()=> handleShowpassword()} className='mr-4 mt-1 cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3747 2.00024C14.6307 2.00024 16.6447 3.43324 17.3837 5.56724C17.5197 5.95824 17.3117 6.38524 16.9197 6.52124C16.5287 6.65824 16.1017 6.44924 15.9657 6.05724C15.4367 4.52824 13.9917 3.50024 12.3717 3.50024H12.3577C10.2657 3.50024 8.5617 5.19424 8.5527 7.28424L8.552 8.62625L16.184 8.62695C18.688 8.62695 20.726 10.6649 20.726 13.1699V17.4579C20.726 19.9629 18.688 22.0009 16.184 22.0009H8.542C6.037 22.0009 4 19.9629 4 17.4579V13.1699C4 11.1866 5.277 9.49593 7.05221 8.87786L7.0527 7.30124C7.0657 4.36324 9.4417 2.00024 12.3547 2.00024H12.3747ZM16.184 10.1269H8.542C6.864 10.1269 5.5 11.4919 5.5 13.1699V17.4579C5.5 19.1359 6.864 20.5009 8.542 20.5009H16.184C17.861 20.5009 19.226 19.1359 19.226 17.4579V13.1699C19.226 11.4919 17.861 10.1269 16.184 10.1269ZM12.3633 13.4527C12.7773 13.4527 13.1133 13.7887 13.1133 14.2027V16.4247C13.1133 16.8387 12.7773 17.1747 12.3633 17.1747C11.9493 17.1747 11.6133 16.8387 11.6133 16.4247V14.2027C11.6133 13.7887 11.9493 13.4527 12.3633 13.4527Z" fill="#727272"/>
                                    </svg>
                                }
                                />
                                <Input 
                                    name="password"
                                    onChange={formik.handleChange}
                                    onFocus={() =>
                                        formik.setFieldTouched("password", true, true)
                                    }  backgroundColor="white" color="#000"
                                    type={showpassword ? "text" : "password"} size='lg' fontSize='sm' placeholder="Password" /> 
                            </InputGroup> 
                            <div className="w-full h-auto pt-2">
                                {formik.touched.password && formik.errors.password && (
                                    <motion.p
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                    >
                                        {formik.errors.password}
                                    </motion.p>
                                )}
                            </div> 
                        </div>   
                        <p onClick={()=> navigate('/resetpassword')} className='text-sm cursor-pointer my-1 text-right font-Ubuntu-Regular '>Forgot Password?</p> 
                        {loading ? 
                                <button style={{ backgroundColor:'#7123E2'}} className='text-base w-full mt-6 h-12 text-white flex items-center justify-center  rounded font-Ubuntu-Bold'> 
                                        <div className='flex mx-auto items-center ' >
                                            <LoaderIcon size='w-8 h-8 mr-1 ' /> 
                                            Loading
                                        </div> 
                                </button>
                            :
                            <button onClick={()=> submit()} style={{ backgroundColor:'#7123E2'}} className='text-base w-full mt-6 h-12 text-white flex items-center justify-center  rounded font-Ubuntu-Bold'> 
                                Log In
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
} 