import React from 'react'  
import FindPatient from '../../components/PatientInformation/continuationSheet/components/FindPatient'
import Navbar from '../../components/Navbar' 

export default function NurseTab() { 
    const [data, setData] = React.useState({} as any) 
    const userData: any = JSON.parse(localStorage.getItem('userData')+'')  
    

    return (
        <div className='w-full h-screen flex flex-col pb-12 relative' >
            <div className='w-full' >
                <Navbar show={true} tab={1} />
            </div>   
            <div className=' w-full h-full flex flex-1 flex-col justify-center items-center ' > 
                <p className=' text-3xl font-Ubuntu-Regular mt-14 text-[#585858] ' >Good morning! {userData.fullName ? userData.fullName:(userData.firstName+' '+userData.lastName)} </p>
                <p className=' text-lg font-Ubuntu-Medium my-6 text-[#585858] ' >Have a good day at work</p>
                <div className=' w-657px border-2 flex justify-center px-24 rounded-2xl items-center border-[#E3E3E4]  ' > 
                    <FindPatient header='Enter Patient Name' body='To create/view a patient’s delivery record, you wil have to verify if patient has a file in the hospital.' value={setData} />
                </div>
            </div> 
        </div>
    )
} 