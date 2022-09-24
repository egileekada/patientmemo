import { Input } from '@chakra-ui/react';
import React from 'react'
import { useNavigate } from 'react-router';
import SideImage from '../assets/images/SideImage.png'
import Logo from '../assets/images/whitelogo.png'

export default function ResetPassword() {

    const navigate = useNavigate();

    return (
        <div className='w-full flex bg-white flex-row lg:h-full h-screen'>  
            {/* <div className='w-full h-full relative px-20 hidden lg:flex flex-col' >
                <img src={SideImage} style={{borderRadius: '30px'}} alt='SideImage' />
            </div> */}
                <img src={SideImage} className='object-cover w-full h-screen ' alt='SideImage' />
            <div className=' absolute inset-0 bg-black bg-opacity-75 z-10 ' />

            <div className='w-full absolute  h-full items-center z-20 justify-center flex flex-col'>
                
                
                <div  className=' lg:w-405px w-full flex flex-col lg:pt-0  px-4'>

                    <img style={{width: '200px'}} className=' absolute top-8 left-8  ' alt='logo' src={Logo} />

                    <div className='  w-full py-12 px-6 bg-white rounded-2xl ' >
                        <p className='text-2xl font-Ubuntu-Bold'>Password Recovery</p>
                        <p className='text-base font-Ubuntu-Regular mt-4 mb-6'>Please enter the email address linked to this account</p> 
                        <div className='my-4 pt-4 w-full' >
                            <p className='text-sm mb-1 font-Ubuntu-Medium '>Company’s Email Address</p> 
                            <Input size='lg' fontSize='sm' placeholder="Email" />
                        </div> 
                        {/* <div className='my-4 pt-2 mb-10 w-full' >
                            <p className='text-sm mb-1 font-Ubuntu-Medium '>PIN</p> 
                            <Input size='lg' fontSize='sm' placeholder="0000" />
                        </div>    */}
                            {/* <p onClick={()=> navigate('/resetpassword')} className='text-base cursor-pointer my-2 text-right font-Ubuntu-Regular '>Forgot Password?</p>  */}
                        <button onClick={()=> navigate('/dashboard')} style={{ backgroundColor:'#7123E2'}} className='text-base w-full text-white  rounded  py-3 font-Ubuntu-Medium'>Continue</button>
                        <p className='text-sm font-Ubuntu-Regular mt-3 text-center'>Remember your password ? <a className=' font-Ubuntu-Bold text-[#7123E2] ml-2 ' href='/' >Sign in</a></p> 
                    </div>
                </div>
            </div>
        </div>
    )
}  
