import React from 'react'
import { useNavigate } from 'react-router-dom'
import DoctorEditor from './DoctorEditor'
import FindPatient from './FindPatient'
import RequestTab from './RequestTab'

export default function ManageActivities() {
    const [tab, setTab] = React.useState(0)
    const [next, setNext] = React.useState(0)
    const [data, setData] = React.useState({} as any)
    const navigate = useNavigate() 

    console.log(data)

    const userData: any = JSON.parse(localStorage.getItem('userData')+'') 
    return (
        <div className='w-full h-full relative' >
            {userData.role !== 'lab' && ( 
                <>
                    <div className="absolute flex flex-1 justify-center items-center inset-0 z-50 "> 
                        <p className='font-Ubuntu-Bold text-5xl text-white relative z-50' >You Are Not Assigned To This Role</p>
                    </div>
                    <div className=" opacity-50  absolute flex flex-1 inset-0 z-40 bg-[#7123E2]"/>
                </>
            )}
            <div className='w-full px-12 border-b flex items-center relative border-[#D7D0DF]' >  
                <div onClick={()=> navigate('/dashboard/laboratory')} className='w-10 absolute h-10 rounded-full cursor-pointer flex items-center justify-center bg-[#7123E214]' >
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 11L1 6L6 1" stroke="#7123E2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <p className='font-Ubuntu-Medium text-lg absolute ml-12' >Manage the Activities</p> 
                <div className='mx-auto flex' >
                    <div onClick={()=> setTab(0)} className={tab === 0 ? 'flex items-center pb-7 pt-8 cursor-pointer mx-3 border-b-2 border-[#7123E2]  ': 'flex items-center pb-7 pt-8  cursor-pointer mx-3 border-b-2 border-transparent '} > 
                        <p className={tab === 0 ? 'font-Ubuntu-Medium px-2 text-xs text-[#7123E2]': 'font-Ubuntu-Medium px-2 text-xs text-[#817D83]'} >Upload New</p>
                    </div>
                    <div onClick={()=> setTab(1)} className={tab === 1 ? 'flex items-center pb-7 pt-8  ml-4 cursor-pointer mx-3 border-b-2 border-[#7123E2] ': 'flex items-center ml-4 pb-7 pt-8  cursor-pointer mx-3 border-b-2 border-transparent '} > 
                        <p className={tab === 1 ? 'font-Ubuntu-Medium px-2 text-xs text-[#7123E2]': 'font-Ubuntu-Medium px-2 text-xs text-[#817D83]'} >Requests</p>
                    </div>
                </div> 
            </div>
            <div className='w-full relative' >
                {tab === 0 ? 
                    <>
                        {next === 0 ?
                            <div className='w-full flex justify-center items-center' > 
                                <FindPatient header='Enter Patient Name' body='To create a continuation sheet, you wil have to verity patient before you has a file in the hospital.' next={setNext} value={setData} /> 
                            </div>
                                :
                                    <DoctorEditor value={data} next={setNext} /> 
                        }
                    </>
                        :tab === 1 ? 
                            <RequestTab /> 
                :null}
                </div>
        </div>
    )
}
