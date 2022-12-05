import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './component/Navbar'
import SideBar from './component/SideBar'

export default function Index() {
    return (
        <div className=' w-full flex h-screen overflow-hidden ' >
            <div className=' w-fit ' >
                <SideBar />
            </div>
            <div className=' flex flex-col flex-1 overflow-y-hidden bg-[#f9f9f9] ' >
                <div className=' w-full h-fit ' > 
                    <Navbar />
                </div>
                <div className=' flex flex-col flex-1 px-[50px] pb-10 bg-white overflow-y-auto ' >
                    <Outlet />
                    <div className=' w-full h-[50px] ' />
                </div>
            </div>
        </div>
    )
} 