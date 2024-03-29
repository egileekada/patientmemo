import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/images/patientMemologo.png'
import Bell from '../assets/images/bell.png'
import user from '../assets/images/user.png'

export default function Navbar(props: any) {  
    

    const userData: any = JSON.parse(localStorage.getItem('userData')+'') 
    const navigate = useNavigate() 
    const [pharm, setPharm] = React.useState(false)

    const ClickHandler =()=> { 
        {userData.role === 'nurse' && ( 
            navigate('/dashboard/findpatient')
        )}
        {userData.role === 'admin' && ( 
            navigate('/dashboard')
        )}
        {userData.role === 'doctor' && ( 
            navigate('/dashboard/findpatient')
        )}
        {userData.role === 'pharmacy' && ( 
            navigate('/dashboard/pharmacy')
        )}
        {userData.role === 'lab' && ( 
            navigate('/dashboard/findpatient')
        )}
    }

    return (
        <div className='w-full bg-white px-10 border-b border-[#D7D0DF] flex items-center py-5' > 
            <img style={{width: '150px'}} onClick={()=> ClickHandler()}  className=' cursor-pointer relative z-20' alt='logo' src={Logo} />
                {props.show &&( 
                    <div className=' absolute w-full flex justify-center ' >   
                        <div onClick={()=> ClickHandler()} className={props.tab === 1 ? 'flex  pt-6 pb-2 w-16 justify-center  cursor-pointer mx-2 border-b-2 border-[#7123E2] ': 'flex  pt-6 pb-2 w-16 justify-center  cursor-pointer mx-2 border-b-2 border-transparent '} > 
                            <p className={props.tab === 1 ? 'font-Ubuntu-Medium px-1 text-xs text-[#7123E2]': 'font-Ubuntu-Medium px-1 text-xs text-[#817D83]'} >Patient</p>
                        </div>  
                        <div onClick={()=> [navigate("/chat"), ]} className={props.tab === 2 ? 'flex  pt-6 pb-2 w-16 justify-center cursor-pointer mx-2 border-b-2 border-[#7123E2] ': 'flex  pt-6  pb-2 w-16 justify-center cursor-pointer mx-2 border-b-2 border-transparent '} > 
                            <p className={props.tab === 2 ? 'font-Ubuntu-Medium px-1 text-xs text-[#7123E2]': 'font-Ubuntu-Medium px-1 text-xs text-[#817D83]'} >Chat</p>
                        </div>  
                    </div>
                )}
            <button onClick={()=> navigate("/chat")} className=' ml-auto w-9 h-9 flex justify-center relative z-20 items-center rounded-full bg-[#50505030] ' > 
                <img className='w-6 h-6  rounded-full object-cover' src={Bell} alt='avatar'  />
            </button>
            <div onClick={()=> {navigate('/dashboard/profile')}} className='flex relative z-20 items-center cursor-pointer ml-8' > 
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
