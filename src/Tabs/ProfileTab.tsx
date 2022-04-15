import React from 'react'
import ChangePassword from '../components/profileComponent/ChangePassword'
import ViewUserInfo from '../components/profileComponent/ViewUserInfo'

export default function ProfileTab() {
    
    // const navigate = useNavigate()
    const [tab, setTab] = React.useState(0)

    return (
        <div className='w-full h-full ' >
            <div className='w-full px-12 border-b relative flex items-center border-[#D7D0DF]' > 
                {/* <div onClick={()=> navigate('/dashboard')} className='w-10 h-10 rounded-full cursor-pointer flex items-center justify-center bg-[#7123E214]' >
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 11L1 6L6 1" stroke="#7123E2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div> */}
                <p className='font-Ubuntu-Medium absolute text-lg ml-3 ' >Manage Users</p> 
                <div onClick={()=> setTab(0)} className={tab === 0 ? 'flex items-center pb-7 pt-8 cursor-pointer mx-3 ml-auto border-b-2 border-[#7123E2]  ': 'flex items-center ml-auto pb-7 pt-8  cursor-pointer mx-3 border-b-2 border-transparent '} > 
                    <p className={tab === 0 ? 'font-Ubuntu-Medium px-2 text-xs text-[#7123E2]': 'font-Ubuntu-Medium px-2 text-xs text-[#817D83]'} >Account</p>
                </div>
                <div onClick={()=> setTab(1)} className={tab === 1 ? 'flex items-center pb-7 pt-8  ml-4 cursor-pointer mx-3 border-b-2 border-[#7123E2] mr-auto ': 'mr-auto flex items-center ml-4 pb-7 pt-8  cursor-pointer mx-3 border-b-2 border-transparent '} > 
                    <p className={tab === 1 ? 'font-Ubuntu-Medium px-2 text-xs text-[#7123E2]': 'font-Ubuntu-Medium px-2 text-xs text-[#817D83]'} >Password</p>
                </div>
                {/* <button className='font-Ubuntu-Medium text-xs bg-[#7123E2] text-white rounded-lg py-3 px-6 ml-auto ' >Add to List</button> */}
            </div>
            <div className='w-full h-full' >
                {tab === 0 ?  
                <ViewUserInfo /> 
                :  
                    <ChangePassword next={setTab} />}
            </div>
        </div>
    )
}  
