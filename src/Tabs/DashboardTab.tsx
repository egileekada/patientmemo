import React from 'react'
import { useNavigate } from 'react-router-dom'
import ChatComponent from '../components/ChatComponent'
import RoleNavbar from '../components/RoleNavbar'
import staff from "../assets/images/staff.png"
import ViewAllStaff from '../components/ViewAllStaff'

export default function DashboardTab() {

    const navigate = useNavigate() 
    const userData: any = JSON.parse(localStorage.getItem('userData')+'') 

    return (
        <div className='w-full h-screen overflow-hidden relative flex  ' > 
            <div className=' px-6 py-8 w-full overflow-y-auto font-Ubuntu-Regular text-[#585858] ' >
                <p className=' text-3xl' >Good morning! {userData.fullName ? userData.fullName : userData.firstName+" "+userData.lastName}</p>
                <p className=' text-xl ' >Have a good day at work</p> 
                <div className=' flex  mt-7 w-full gap-6 ' >
                    <div onClick={()=> navigate('/dashboard/registerpatient')} className='bg-[#7123E2] w-72 rounded-2xl px-6 py-8 relative cursor-pointer' >
                        <div className='w-14 h-14 flex justify-center items-center  rounded-full bg-[#5815BA]' >
                            <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.333 0H4.33301C3.27214 0 2.25473 0.421427 1.50458 1.17157C0.754435 1.92172 0.333008 2.93913 0.333008 4V20C0.333008 21.0609 0.754435 22.0783 1.50458 22.8284C2.25473 23.5786 3.27214 24 4.33301 24H20.333C20.6866 24 21.0258 23.8595 21.2758 23.6095C21.5259 23.3594 21.6663 23.0203 21.6663 22.6667V1.33333C21.6663 0.979711 21.5259 0.640573 21.2758 0.390524C21.0258 0.140476 20.6866 0 20.333 0ZM4.33301 21.3333C3.97939 21.3333 3.64025 21.1929 3.3902 20.9428C3.14015 20.6928 2.99967 20.3536 2.99967 20C2.99967 19.6464 3.14015 19.3072 3.3902 19.0572C3.64025 18.8071 3.97939 18.6667 4.33301 18.6667H18.9997V21.3333H4.33301Z" fill="white"/>
                            </svg>
                        </div>
                        <p className='font-Ubuntu-Bold text-xl text-white mt-3 relative z-30' >Register<br/> New Patients</p>
                        <div className='w-36 h-36  rounded-tl-full absolute bottom-0 right-0 bg-[#5815BA]' />
                    </div>  
                </div> 
                <ViewAllStaff />
                <p className=' text-xl mt-8 ' >Todays Report</p> 
                <div className='grid grid-cols-4 w-full mt-4 pb-20 gap-6' >
                    <div className=' w-fit  ' > 
                        <div className=' w-24 h-24 rounded-lg bg-[#F542425E] ' >
                        </div>
                        <p className=' text-lg text-center ' >Patients</p> 
                        <p className=' text-center ' >40</p> 
                    </div>
                    <div className=' w-fit  ' > 
                        <div className=' w-24 h-24 rounded-lg bg-[#7123E247] ' >
                        </div>
                        <p className=' text-lg text-center ' >Available beds</p> 
                        <p className=' text-center ' >40</p> 
                    </div>
                    <div className=' w-fit  ' > 
                        <div className=' w-24 h-24 rounded-lg bg-[#10920542] ' >
                        </div>
                        <p className=' text-lg text-center ' >Total  Staffs</p> 
                        <p className=' text-center ' >40</p> 
                    </div>
                    <div className=' w-fit  ' > 
                        <div className=' w-24 h-24 rounded-lg bg-[#DB720A36] ' >
                        </div>
                        <p className=' text-lg text-center ' >Total  Rooms</p> 
                        <p className=' text-center ' >40</p> 
                    </div>
                </div>
            </div>
            <div className=' w-fit h-full ' >
                <ChatComponent />
            </div> 
        </div>
    )
} 