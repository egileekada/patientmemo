import { InputGroup, InputRightElement, Input } from '@chakra-ui/input';
import { motion } from 'framer-motion';
import React from 'react'
import LoaderIcon from '../LoaderIcon'
import * as yup from 'yup'
import Avater from '../../assets/images/user.png'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import Modal from '../Modal';

export default function ChangePassword(props: any) {

    const [loading, setLoading] = React.useState(false);
    const [showpassword, setShowpass] = React.useState(false);

    const userData: any = JSON.parse(localStorage.getItem('userData')+'') 
    
    const [ selectedFiles, setSelectedFiles ] = React.useState({}as any); 
    const [message, setMessage] = React.useState('');
    const [modal, setModal] = React.useState(0);  

    const [image, SetImage] = React.useState('');   

    const handleShowpassword = () => {
        setShowpass(prev => !prev);
    } 

    const loginSchema = yup.object({ 
        password: yup.string().required('Your password is required').min(6, 'A minimium of 6 characters'),
        confirmPassword: yup.string().required('Your password is required').min(6, 'A minimium of 6 characters')
    }) 

    // formik
    const formik = useFormik({
        initialValues: {password: '', confirmPassword: ''},
        validationSchema: loginSchema,
        onSubmit: () => {},
    });    


    const submit = async () => {
    
        if (!formik.dirty) {
            setMessage('You have to fill in the form correctly to continue')
            setModal(2)  
            return;
        }else if (!formik.isValid) {
            setMessage('You have to fill in the form correctly to continue')
            setModal(2)  
        //   alert('You have to fill in the form correctly to continue');
            return;
        }else {
            setLoading(true);
            const request = await fetch(`https://hospital-memo-api.herokuapp.com/auth/change-password`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(formik.values),
            });
    
            const json = await request.json();

            console.log(request.status)
            console.log(json)
            if (request.status === 200) {    
                setMessage('Password Has Been Updated')
                setModal(1)  
                const t1 = setTimeout(() => {  
                    props.next(0)
                    clearTimeout(t1); 
                }, 2000);   
            }else {
                setMessage('Incorrect Password')
                setModal(2)  
                // alert('Incorrect Password');
                // console.log(json)
                setLoading(false);
            }
        }
    }    
    const navigate = useNavigate()

    const LogOut =()=> {
        localStorage.clear()
        navigate('/')
    } 

    return (

        <div className='w-full h-full px-24 pt-10' > 
            <Modal message={message} modal={modal} />
            <div className='w-full px-12 py-4 flex items-center ' >  
                <div className='ml-0'> 
                    <p className='font-Ubuntu-Medium text-lg' >Account</p> 
                    <p className='font-Ubuntu-Regular text-sm mt-1' >Manage Users</p> 
                </div>  
                <button onClick={()=> LogOut()} className='font-Ubuntu-Medium text-sm bg-[#7123E2] text-white rounded-lg h-11 px-6 ml-auto ' >Log Out</button> 
            </div>
            <div className='w-auto rounded-xl flex p-6 justify-center mt-8' >
                <div style={{border: '1px solid #CED5DE', borderRadius: '4px'}}  className='flex px-14 items-center flex-col justify-center mr-2' >

                    {!image && (
                        <div className='w-20 h-20 flex justify-center items-center rounded-full  ' >

                            {!userData.avatar && ( 
                                <img className='w-20 h-20 rounded-full object-cover' src={Avater} alt=""/>  
                            )}

                            {userData.avatar && ( 
                                <img className='w-20 h-20 rounded-full object-cover' src={userData.avatar} alt=""/>  
                            )}
                        </div>
                    )} 

                    {image && ( 
                        <img className='w-20 h-20 rounded-full object-cover' src={selectedFiles} alt=""/>  
                    )}
                    <p className='text-sm font-Ubuntu-Medium mt-4 text-[#112030]' >{userData.fullName}</p>
                    <p className='text-xs font-Ubuntu-Regular mt-1 text-[#8EA7C0]' >{userData.email}</p> 
                </div>
                <div style={{width: '505px',border: '1px solid #CED5DE', borderRadius: '4px'}} className='p-8 py-14 ml-4' >
                    <div className='grid grid-cols-1 gap-4 font-Ubuntu-Medium' >
                        <div className='w-full' >
                            {/* <p className='text-sm mb-1 font-Ubuntu-Medium '>Password</p>   */} 
                            <Input 
                                name="password"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("password", true, true)
                                } 
                                type="password" size='lg' fontSize='sm'  placeholder="Old Password" />
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
                        <div className=' w-full' >
                            {/* <p className='text-sm mb-1 font-Ubuntu-Medium '>Password</p>   */}
                            <InputGroup >
                                <InputRightElement 
                                children={
                                    <svg onClick={()=> handleShowpassword()} className='mr-4 mt-1 cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3747 2.00024C14.6307 2.00024 16.6447 3.43324 17.3837 5.56724C17.5197 5.95824 17.3117 6.38524 16.9197 6.52124C16.5287 6.65824 16.1017 6.44924 15.9657 6.05724C15.4367 4.52824 13.9917 3.50024 12.3717 3.50024H12.3577C10.2657 3.50024 8.5617 5.19424 8.5527 7.28424L8.552 8.62625L16.184 8.62695C18.688 8.62695 20.726 10.6649 20.726 13.1699V17.4579C20.726 19.9629 18.688 22.0009 16.184 22.0009H8.542C6.037 22.0009 4 19.9629 4 17.4579V13.1699C4 11.1866 5.277 9.49593 7.05221 8.87786L7.0527 7.30124C7.0657 4.36324 9.4417 2.00024 12.3547 2.00024H12.3747ZM16.184 10.1269H8.542C6.864 10.1269 5.5 11.4919 5.5 13.1699V17.4579C5.5 19.1359 6.864 20.5009 8.542 20.5009H16.184C17.861 20.5009 19.226 19.1359 19.226 17.4579V13.1699C19.226 11.4919 17.861 10.1269 16.184 10.1269ZM12.3633 13.4527C12.7773 13.4527 13.1133 13.7887 13.1133 14.2027V16.4247C13.1133 16.8387 12.7773 17.1747 12.3633 17.1747C11.9493 17.1747 11.6133 16.8387 11.6133 16.4247V14.2027C11.6133 13.7887 11.9493 13.4527 12.3633 13.4527Z" fill="#727272"/>
                                    </svg>
                                }
                                />
                                <Input 
                                    name="confirmPassword"
                                    onChange={formik.handleChange}
                                    onFocus={() =>
                                        formik.setFieldTouched("confirmPassword", true, true)
                                    } 
                                    type={showpassword ? "text" : "confirmPassword"} size='lg' fontSize='sm' placeholder="New Password" /> 
                            </InputGroup> 
                            <div className="w-full h-auto pt-2">
                                {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                                    <motion.p
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                    >
                                        {formik.errors.confirmPassword}
                                    </motion.p>
                                )}
                            </div> 
                        </div>  
                    </div>
                    <div className='w-full mt-10' > 
                        {loading ? 
                            <button className='font-Ubuntu-Medium text-xs text-white bg-[#7123E2] flex justify-center items-center rounded-lg h-11 px-6 w-full ' >
                                <div className='flex items-center' >
                                    <LoaderIcon size='w-7 h-7 mr-1' /> 
                                    Loading
                                </div> 
                            </button>:
                            <button onClick={()=> submit()} className='font-Ubuntu-Medium text-xs border text-[#fff] bg-[#7123E2] rounded-lg h-11 px-6 w-full ' >Update Password</button>
                        }
                    </div>
                </div>  
            </div>
        </div> 
    )
} 