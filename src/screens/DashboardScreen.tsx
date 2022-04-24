import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Dashboard() {
    return (
        <div className='w-full h-screen flex flex-1 flex-col' >
            <div className='w-full' >
                <Navbar />
            </div> 
            <div className='w-full h-full' > 
                <Outlet /> 
            </div>
        </div>
    )
} 