import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/images/patientMemologo.png'
import user from '../assets/images/user.png'

export default function Navbar() {  
    
    const userData: any = JSON.parse(localStorage.getItem('userData')+'') 
    const navigate = useNavigate()

    return (
        <div className='w-full bg-white px-10 border-b border-[#D7D0DF] flex items-center py-5' > 
            <img style={{width: '150px'}} className='' alt='logo' src={Logo} /> 
            <div onClick={()=> navigate('/dashboard/profile')} className='flex items-center cursor-pointer ml-auto' > 
                <div className='w-12 ml-6 h-12 rounded-full' >
                    {userData.avatar && ( 
                        <img className='w-12 h-12 rounded-full object-cover' src={userData.avatar} alt='avatar'  />
                    )}
                    {!userData.avatar && ( 
                        <img className='w-12 h-12 rounded-full object-cover' src={user} alt='avatar'  />
                    )}
                </div>
                <div className='ml-3' >
                    <p className='font-Ubuntu-Medium' >{userData.fullName ? userData.fullName:(userData.firstName+' '+userData.lastName)}</p>
                    <p className='font-Ubuntu-Medium text-sm mt-1 ' >{'ID - '+(userData._id).slice(0, 7)}</p>
                </div>
            </div>
        </div>
    )
}
