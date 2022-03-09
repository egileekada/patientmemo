import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
// import Doctor from '../tabScreens/Doctor'

export default function Dashboard() {

    const [tab, setTab] = React.useState('Doctor')

    return (
        <div className='w-full h-screen overflow-hidden' >
            <div className='w-full' >
                <Navbar />
            </div>
            <div style={{backgroundColor: '#FAF6FF'}} className='w-full h-full flex' >
                <SideBar tab={setTab} />
                <div className='w-full overflow-y-auto h-auto' >
                    <Outlet /> 
                </div>
            </div>
        </div>
    )
}
