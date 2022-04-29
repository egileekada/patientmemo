import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import AddUser from './addNewUser/AddUser'
import ManageUser from './addNewUser/ManageUser'

export default function AddNewUser() {
    
    const navigate = useNavigate()
    const [tab, setTab] = React.useState(0)

    return (
        <div className='w-full h-full ' >
            <div className='w-full px-12 border-b relative flex items-center border-[#D7D0DF]' > 
                <div onClick={()=> navigate('/dashboard')} className='w-10 absolute h-10 rounded-full cursor-pointer flex items-center justify-center bg-[#7123E214]' >
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 11L1 6L6 1" stroke="#7123E2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <p className='font-Ubuntu-Medium text-lg ml-14 absolute ' >Manage Staff</p> 
                <div onClick={()=> setTab(0)} className={tab === 0 ? 'flex items-center pb-7 pt-8  cursor-pointer mx-3 border-b-2 border-[#7123E2] ml-auto ': 'ml-auto flex items-center pb-7 pt-8  cursor-pointer mx-3 border-b-2 border-transparent '} > 
                    <p className={tab === 0 ? 'font-Ubuntu-Medium px-2 text-xs text-[#7123E2]': 'font-Ubuntu-Medium px-2 text-xs text-[#817D83]'} >Manage Staff</p>
                </div>
                <div onClick={()=> setTab(1)} className={tab === 1 ? 'flex items-center pb-7 pt-8 ml-4 cursor-pointer mr-auto mx-3 border-b-2 border-[#7123E2]  ': 'flex items-center  mr-auto pb-7 ml-4 pt-8  cursor-pointer mx-3 border-b-2 border-transparent '} > 
                    <p className={tab === 1 ? 'font-Ubuntu-Medium px-2 text-xs text-[#7123E2]': 'font-Ubuntu-Medium px-2 text-xs text-[#817D83]'} >Add New</p>
                </div>
                {/* <button className='font-Ubuntu-Medium text-xs bg-[#7123E2] text-white rounded-lg py-3 px-6 ml-auto ' >Add to List</button> */}
            </div>
            <div className='w-full h-full' >
                {tab === 0 ?  
                    <ManageUser /> 
                : 
                    <AddUser /> 
                    }
            </div>
        </div>
    )
} 