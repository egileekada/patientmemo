import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom' 
import NavbarAdmin from '../../components/NavbarAdmin'
import SideBar from '../../components/SideBar'

export default function Dashboard() {

    const navigate = useNavigate()
    React.useEffect(() => {
        if(!localStorage.getItem('token')){
            navigate('/')
        }
    }, [])

    return (
        <div className='w-full h-screen overflow-y-hidden flex flex-1 ' >
            <div className=' w-fit h-screen ' >
                <SideBar />
            </div>
            <div className='w-full h-full flex flex-col overflow-y-auto ' > 
                <div className='w-full' >
                    <NavbarAdmin />
                </div> 
                <Outlet /> 
            </div>
        </div>
    )
} 