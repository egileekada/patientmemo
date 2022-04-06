import { Input } from '@chakra-ui/react';
import React from 'react'
import { useNavigate } from 'react-router';
import SideImage from '../assets/images/SideImage.png'
import Logo from '../assets/images/patientMemologo.png'

export default function ResetPassword() {

    const navigate = useNavigate();

    return (
        <div className='w-full flex bg-white flex-row lg:py-20 pt-10 lg:h-full h-screen'>  
            <div className='w-full h-full relative px-20 hidden lg:flex flex-col' >
                <img src={SideImage} style={{borderRadius: '30px'}} alt='SideImage' />
            </div>
            <div className='w-full h-full lg:h-screen justify-center relative items-center flex flex-col'>
                
                <div  className=' lg:w-500px w-full px-6 lg:pt-0  lg:px-0'>

                    <img style={{width: '150px'}} className='lg:mt-0 lg:absolute lg:top-4 -mt-12' alt='logo' src={Logo} />

                    <div className='  w-full lg:pt-0 pt-12  lg:px-0' >
                        <p className='text-2xl font-Ubuntu-Bold'>Reset Password</p>
                        <p className='text-base font-Ubuntu-Regular mt-4 mb-6'>Enter PIN sent to your this email address brightmac@gmail.com</p> 
                        <div className='my-4 pt-4 w-full' >
                            <p className='text-sm mb-1 font-Ubuntu-Medium '>Email Address</p> 
                            <Input size='lg' fontSize='sm' placeholder="Email" />
                        </div> 
                        <div className='my-4 pt-2 mb-10 w-full' >
                            <p className='text-sm mb-1 font-Ubuntu-Medium '>PIN</p> 
                            <Input size='lg' fontSize='sm' placeholder="0000" />
                        </div>   
                            {/* <p onClick={()=> navigate('/resetpassword')} className='text-base cursor-pointer my-2 text-right font-Ubuntu-Regular '>Forgot Password?</p>  */}
                        <button onClick={()=> navigate('/dashboard')} style={{ backgroundColor:'#7123E2'}} className='text-base w-full text-white  rounded  py-3 font-Ubuntu-Bold'>Reset Password</button>
                    </div>
                </div>
            </div>
        </div>
    )
}  
