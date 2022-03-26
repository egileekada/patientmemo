import React from 'react'
import { useNavigate } from 'react-router-dom'
import ReceptionistModal from '../../modal/ReceptionistModal'
import CalenderComponent from '../CalenderComponent'

export default function ReceptionistSchedular() {
    const [showModal, setShowModal] = React.useState(false)
    const navigate = useNavigate()
    return (
        <div className='p-8 w-full  overflow-hidden' >
            <div className='w-full flex items-center' >
                <div onClick={()=> navigate('/receptionist')} style={{backgroundColor: 'rgba(113, 35, 226, 0.08)'}} className='w-10 h-10 cursor-pointer rounded-full flex justify-center items-center' >
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 11L1 6L6 1" stroke="#7123E2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <p className='font-Ubuntu-Medium ml-3' >Availability</p>
                <div className='ml-auto' >
                    {/* <button style={{border: '1px solid #7123E2', borderRadius: '10px'}} className='py-2 w-32 text-sm' >Patients</button> */}
                    <button onClick={()=> setShowModal(true)} style={{backgroundColor: '#7123E2', borderRadius: '10px'}} className='py-2 w-32 text-white ml-4 text-sm' >Add Scedular</button>
                </div>
            </div> 
            <div className='mt-8 w-full overflow-auto ' >  
                <CalenderComponent /> 
            </div>
            {showModal ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">  
                                <ReceptionistModal close={setShowModal} />   
                        </div> 
                        <div className="opacity-50 absolute flex flex-1 inset-0 z-20 bg-black"/>
                    </>
                ) : null} 
        </div>
    )
} 