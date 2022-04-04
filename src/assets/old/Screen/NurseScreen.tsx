import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../../../components/Navbar'

export default function NurseScreen() {
    return (
        <div className='w-full h-screen overflow-hidden' >
            <div className='w-full' >
                <Navbar />
            </div>
            <div style={{backgroundColor: '#FAF6FF'}} className='w-full h-full flex' >
                {/* <SideBar /> */}
                <div className='w-full overflow-y-auto h-auto' > 
                    <Outlet /> 
                </div>
            </div>
        </div>
    )
} 