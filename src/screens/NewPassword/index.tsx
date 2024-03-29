import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import React from 'react'
import { useNavigate } from 'react-router';
import SideImage from '../../assets/images/SideImage.png'
import Logo from '../../assets/images/patientMemologo.png'

export default function NewPassword() {
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
                    <p className='text-2xl font-Ubuntu-Bold'>Create Password</p>
                    <p className='text-base font-Ubuntu-Regular mt-4 mb-6'>Create your New password</p>  
                    <div className='my-4 pt-2 w-full' >
                        <p className='text-sm mb-1 font-Ubuntu-Medium '>Password</p>  
                        <InputGroup >
                            <InputRightElement 
                            children={
                                <svg className='mr-4 mt-1 cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3747 2.00024C14.6307 2.00024 16.6447 3.43324 17.3837 5.56724C17.5197 5.95824 17.3117 6.38524 16.9197 6.52124C16.5287 6.65824 16.1017 6.44924 15.9657 6.05724C15.4367 4.52824 13.9917 3.50024 12.3717 3.50024H12.3577C10.2657 3.50024 8.5617 5.19424 8.5527 7.28424L8.552 8.62625L16.184 8.62695C18.688 8.62695 20.726 10.6649 20.726 13.1699V17.4579C20.726 19.9629 18.688 22.0009 16.184 22.0009H8.542C6.037 22.0009 4 19.9629 4 17.4579V13.1699C4 11.1866 5.277 9.49593 7.05221 8.87786L7.0527 7.30124C7.0657 4.36324 9.4417 2.00024 12.3547 2.00024H12.3747ZM16.184 10.1269H8.542C6.864 10.1269 5.5 11.4919 5.5 13.1699V17.4579C5.5 19.1359 6.864 20.5009 8.542 20.5009H16.184C17.861 20.5009 19.226 19.1359 19.226 17.4579V13.1699C19.226 11.4919 17.861 10.1269 16.184 10.1269ZM12.3633 13.4527C12.7773 13.4527 13.1133 13.7887 13.1133 14.2027V16.4247C13.1133 16.8387 12.7773 17.1747 12.3633 17.1747C11.9493 17.1747 11.6133 16.8387 11.6133 16.4247V14.2027C11.6133 13.7887 11.9493 13.4527 12.3633 13.4527Z" fill="#727272"/>
                                </svg>
                            }
                            />
                            <Input size='lg' fontSize='sm' placeholder="Password" /> 
                        </InputGroup>
                    </div>    
                    <button onClick={()=> navigate('/dashboard')} style={{ backgroundColor:'#7123E2'}} className='text-base w-full mt-10 text-white  rounded  py-3 font-Ubuntu-Bold'>Create New Password</button>
                </div>
            </div>
        </div>
    </div>
)
}