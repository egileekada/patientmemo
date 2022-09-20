import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/images/patientMemologo.png'
import Bell from '../assets/images/bell.png'
import user from '../assets/images/user.png'

export default function Navbar() {  
    
    const userData: any = JSON.parse(localStorage.getItem('userData')+'') 
    const navigate = useNavigate()

    return (
        <div className='w-full bg-white px-10 border-b border-[#D7D0DF] flex items-center py-5' > 
            <img style={{width: '150px'}} className='' alt='logo' src={Logo} />
            <button onClick={()=> navigate("/chat")} className=' ml-auto w-9 h-9 flex justify-center items-center rounded-full bg-[#50505030] ' > 
                <img className='w-6 h-6  rounded-full object-cover' src={Bell} alt='avatar'  />
            </button>
            <div onClick={()=> navigate('/dashboard/profile')} className='flex items-center cursor-pointer ml-8' > 
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
                    <p className='font-Ubuntu-Medium text-sm mt-1 ' >{(userData.role)}</p>
                </div>
            </div>
        </div>
    )
}
