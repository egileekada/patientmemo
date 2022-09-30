import React from 'react'
import { useNavigate } from 'react-router-dom'
import ChatComponent from '../components/ChatComponent'
import RoleNavbar from '../components/RoleNavbar'
import staff from "../assets/images/staff.png"
import ViewAllStaff from '../components/ViewAllStaff'
import PatientsData from '../components/PatientsData'
import StaffData from '../components/StaffData'

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
                <div className='grid grid-cols-4 w-fit pb-20 mt-8 gap-6' >
                    <PatientsData />
                    <div className=' w-36 flex flex-col items-center ' > 
                        <div className=' w-24 h-24 flex justify-center items-center rounded-lg bg-[#7123E247] ' >
                            <svg width="43" height="30" viewBox="0 0 43 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2008 1.46058C12.8333 1.09276 12.3969 0.800943 11.9166 0.601776C11.4362 0.40261 10.9214 0.3 10.4014 0.299805C9.88143 0.29961 9.36651 0.401834 8.88604 0.60064C8.40557 0.799446 7.96897 1.09094 7.60115 1.45848L6.86195 2.19768C6.14719 1.99416 5.39089 1.98627 4.67204 2.17485C3.95319 2.36343 3.29816 2.74155 2.77535 3.26973C1.99025 4.06281 1.54986 5.13368 1.54986 6.24963C1.54986 7.36558 1.99025 8.43645 2.77535 9.22953L3.65 10.1105V21.3003H0.5V23.4003H2.6525C2.13105 23.9113 1.77358 24.5659 1.62568 25.2808C1.47778 25.9957 1.54616 26.7385 1.82209 27.4143C2.09802 28.0902 2.569 28.6686 3.17497 29.0758C3.78094 29.4829 4.49444 29.7003 5.22447 29.7003C5.95451 29.7003 6.66801 29.4829 7.27398 29.0758C7.87995 28.6686 8.35093 28.0902 8.62686 27.4143C8.90279 26.7385 8.97117 25.9957 8.82327 25.2808C8.67537 24.5659 8.3179 23.9113 7.79645 23.4003H35.2035C34.6821 23.9113 34.3246 24.5659 34.1767 25.2808C34.0288 25.9957 34.0972 26.7385 34.3731 27.4143C34.6491 28.0902 35.12 28.6686 35.726 29.0758C36.332 29.4829 37.0455 29.7003 37.7755 29.7003C38.5056 29.7003 39.2191 29.4829 39.825 29.0758C40.431 28.6686 40.902 28.0902 41.1779 27.4143C41.4538 26.7385 41.5222 25.9957 41.3743 25.2808C41.2264 24.5659 40.869 23.9113 40.3475 23.4003H42.5V21.3003H38.3V18.0317C39.2017 17.806 40.0018 17.2849 40.5727 16.5514C41.1436 15.818 41.4525 14.9144 41.45 13.985C41.45 11.6855 39.601 9.81963 37.3193 9.81963H15.3155C15.273 9.81975 15.2309 9.81145 15.1916 9.79524C15.1523 9.77902 15.1166 9.75519 15.0866 9.72513L14.7023 9.33663L15.0898 8.95128C15.4576 8.58374 15.7495 8.14732 15.9486 7.66695C16.1478 7.18659 16.2503 6.67169 16.2504 6.15167C16.2505 5.63166 16.1482 5.11672 15.9492 4.63628C15.7502 4.15584 15.4585 3.71931 15.0908 3.35163L13.2008 1.46163V1.46058ZM13.2218 7.84773L13.6051 7.46553C13.7778 7.29294 13.9148 7.088 14.0082 6.86244C14.1017 6.63687 14.1498 6.3951 14.1498 6.15093C14.1498 5.90676 14.1017 5.66499 14.0082 5.43942C13.9148 5.21386 13.7778 5.00892 13.6051 4.83633L11.715 2.94633C11.3666 2.5975 10.8939 2.40133 10.4009 2.40093C9.90785 2.40054 9.43484 2.59596 9.08585 2.94423L8.71835 3.31173L13.2228 7.84773H13.2218ZM39.35 13.985C39.35 12.8279 38.4239 11.9196 37.3193 11.9196H15.3155C14.9962 11.9197 14.6801 11.8566 14.3853 11.7341C14.0905 11.6116 13.8229 11.432 13.5977 11.2056L7.1864 4.75023C6.99561 4.55664 6.76823 4.40291 6.51749 4.29798C6.26675 4.19305 5.99766 4.13901 5.72585 4.13901C5.45404 4.13901 5.18494 4.19305 4.93421 4.29798C4.68347 4.40291 4.45609 4.55664 4.2653 4.75023C3.87101 5.14989 3.64994 5.68873 3.64994 6.25016C3.64994 6.81158 3.87101 7.35042 4.2653 7.75008L12.5099 16.0503H37.3193C38.426 16.0503 39.35 15.1421 39.35 13.985ZM11.2887 17.8007C11.5113 18.0243 11.8116 18.1503 12.1256 18.1503H36.2V21.3003H5.75V12.2241L11.2887 17.8007ZM6.8 26.0253C6.8 26.443 6.63406 26.8437 6.33869 27.139C6.04332 27.4344 5.64272 27.6003 5.225 27.6003C4.80728 27.6003 4.40668 27.4344 4.11131 27.139C3.81594 26.8437 3.65 26.443 3.65 26.0253C3.65 25.6076 3.81594 25.207 4.11131 24.9116C4.40668 24.6163 4.80728 24.4503 5.225 24.4503C5.64272 24.4503 6.04332 24.6163 6.33869 24.9116C6.63406 25.207 6.8 25.6076 6.8 26.0253ZM37.775 27.6003C38.1927 27.6003 38.5933 27.4344 38.8887 27.139C39.1841 26.8437 39.35 26.443 39.35 26.0253C39.35 25.6076 39.1841 25.207 38.8887 24.9116C38.5933 24.6163 38.1927 24.4503 37.775 24.4503C37.3573 24.4503 36.9567 24.6163 36.6613 24.9116C36.3659 25.207 36.2 25.6076 36.2 26.0253C36.2 26.443 36.3659 26.8437 36.6613 27.139C36.9567 27.4344 37.3573 27.6003 37.775 27.6003Z" fill="#7123E2"/>
                            </svg>
                        </div>
                        <p className=' text-lg text-center font-Ubuntu-Medium mt-2 ' >Available beds</p> 
                        <p className=' text-center font-Ubuntu-Regular ' >40</p> 
                    </div>
                    <StaffData />
                    <div className=' w-36 flex flex-col items-center  ' > 
                        <div className=' w-24 h-24 flex justify-center items-center  rounded-lg bg-[#DB720A36] ' >
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.5 26.4997V5.49969H22V0.8125L5.5 3.65731V26.4997H1V28.4997H6.43125L22 30.6471V7.49969H25.5V28.4997H31V26.4997H27.5ZM20 28.3523L7.5 26.6282V5.34206L20 3.18719V28.3523Z" fill="#DB720A"/>
                                <path d="M16 14.5H18V18.5H16V14.5Z" fill="#DB720A"/>
                            </svg>
                        </div>
                        <p className=' text-lg text-center font-Ubuntu-Medium mt-2 ' >Total  Rooms</p> 
                        <p className=' text-center font-Ubuntu-Regular  ' >40</p> 
                    </div>
                </div>
            </div>
            <div className=' w-fit h-full ' >
                <ChatComponent />
            </div> 
        </div>
    )
} 