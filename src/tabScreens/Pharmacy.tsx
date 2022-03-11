import React from 'react'
import Navbar from '../components/Navbar'
import PharmacyModal from '../modal/PharmacyModal'
import ReceptionistModal from '../modal/ReceptionistModal'

export default function Pharmacy() {
    const [showModal, setShowModal] = React.useState(true)
    return (
        <div className=' w-full h-screen' style={{backgroundColor: 'rgba(113, 35, 226, 0.08)'}} >
            <div className='w-full bg-white' >
                <Navbar />
            </div>
            <div className='w-full p-8 px-40 flex flex-col' > 
                <p className='font-Ubuntu-Medium ml-3' >Pharmacy</p> 
                <div className='w-full bg-white mt-8 rounded-lg py-6 px-12' >
                    <div className='w-full flex' >
                        <button style={{border: '1px solid #7123E2', borderRadius: '10px'}} className='ml-auto py-2 w-32 text-sm' >Patients</button> 
                    </div>
                    <div className='my-6 w-full h-full grid gap-6 grid-cols-3' >
                        <div onClick={()=> setShowModal(true)} className='w-full h-full cursor-pointer p-2 px-4 rounded-md' style={{border: '1px solid #F0F5FF'}} >
                            <div className='flex items-center' >
                                <div className='w-12 h-12 bg-yellow-200 rounded-full' >

                                </div> 
                                <p className='font-Ubuntu-Medium ml-3' >Adesanya Warisi</p> 
                                <svg className='ml-auto cursor-pointer' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 7.25C6.69036 7.25 7.25 6.69036 7.25 6C7.25 5.30964 6.69036 4.75 6 4.75C5.30964 4.75 4.75 5.30964 4.75 6C4.75 6.69036 5.30964 7.25 6 7.25Z" fill="#9B6705"/>
                                    <path d="M6 12C6.69036 12 7.25 11.4404 7.25 10.75C7.25 10.0596 6.69036 9.5 6 9.5C5.30964 9.5 4.75 10.0596 4.75 10.75C4.75 11.4404 5.30964 12 6 12Z" fill="#9B6705"/>
                                    <path d="M6 2.5C6.69036 2.5 7.25 1.94036 7.25 1.25C7.25 0.559644 6.69036 0 6 0C5.30964 0 4.75 0.559644 4.75 1.25C4.75 1.94036 5.30964 2.5 6 2.5Z" fill="#9B6705"/>
                                </svg>
                            </div>
                            <p style={{color: '#5F6777'}} className='font-Ubuntu-Regular text-xs mt-3 ml-2' >Email:<span className='ml-2' style={{color: '#A5B0C1'}}>nifemidamola@hotail.com</span></p>
                            <p style={{color: '#5F6777'}} className='font-Ubuntu-Regular text-xs mt-1 ml-2' >Phone:<span className='ml-2' style={{color: '#A5B0C1'}}>090 09 098 8111</span></p>
                            <div className='w-full' >
                                <div className='w-8 h-8 bg-yellow-200 ml-auto -mt-4 rounded-full' >

                                </div> 
                            </div>
                        </div>
                        <div className='w-full h-full p-2 px-4 rounded-md' style={{border: '1px solid #F0F5FF'}} >
                            <div className='flex items-center' >
                                <div className='w-12 h-12 bg-yellow-200 rounded-full' >

                                </div> 
                                <p className='font-Ubuntu-Medium ml-3' >Adesanya Warisi</p> 
                                <svg className='ml-auto cursor-pointer' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 7.25C6.69036 7.25 7.25 6.69036 7.25 6C7.25 5.30964 6.69036 4.75 6 4.75C5.30964 4.75 4.75 5.30964 4.75 6C4.75 6.69036 5.30964 7.25 6 7.25Z" fill="#9B6705"/>
                                    <path d="M6 12C6.69036 12 7.25 11.4404 7.25 10.75C7.25 10.0596 6.69036 9.5 6 9.5C5.30964 9.5 4.75 10.0596 4.75 10.75C4.75 11.4404 5.30964 12 6 12Z" fill="#9B6705"/>
                                    <path d="M6 2.5C6.69036 2.5 7.25 1.94036 7.25 1.25C7.25 0.559644 6.69036 0 6 0C5.30964 0 4.75 0.559644 4.75 1.25C4.75 1.94036 5.30964 2.5 6 2.5Z" fill="#9B6705"/>
                                </svg>
                            </div>
                            <p style={{color: '#5F6777'}} className='font-Ubuntu-Regular text-xs mt-3 ml-2' >Email:<span className='ml-2' style={{color: '#A5B0C1'}}>nifemidamola@hotail.com</span></p>
                            <p style={{color: '#5F6777'}} className='font-Ubuntu-Regular text-xs mt-1 ml-2' >Phone:<span className='ml-2' style={{color: '#A5B0C1'}}>090 09 098 8111</span></p>
                            <div className='w-full' >
                                <div className='w-8 h-8 bg-yellow-200 ml-auto -mt-4 rounded-full' >

                                </div> 
                            </div>
                        </div>
                        <div className='w-full h-full p-2 px-4 rounded-md' style={{border: '1px solid #F0F5FF'}} >
                            <div className='flex items-center' >
                                <div className='w-12 h-12 bg-yellow-200 rounded-full' >

                                </div> 
                                <p className='font-Ubuntu-Medium ml-3' >Adesanya Warisi</p> 
                                <svg className='ml-auto cursor-pointer' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 7.25C6.69036 7.25 7.25 6.69036 7.25 6C7.25 5.30964 6.69036 4.75 6 4.75C5.30964 4.75 4.75 5.30964 4.75 6C4.75 6.69036 5.30964 7.25 6 7.25Z" fill="#9B6705"/>
                                    <path d="M6 12C6.69036 12 7.25 11.4404 7.25 10.75C7.25 10.0596 6.69036 9.5 6 9.5C5.30964 9.5 4.75 10.0596 4.75 10.75C4.75 11.4404 5.30964 12 6 12Z" fill="#9B6705"/>
                                    <path d="M6 2.5C6.69036 2.5 7.25 1.94036 7.25 1.25C7.25 0.559644 6.69036 0 6 0C5.30964 0 4.75 0.559644 4.75 1.25C4.75 1.94036 5.30964 2.5 6 2.5Z" fill="#9B6705"/>
                                </svg>
                            </div>
                            <p style={{color: '#5F6777'}} className='font-Ubuntu-Regular text-xs mt-3 ml-2' >Email:<span className='ml-2' style={{color: '#A5B0C1'}}>nifemidamola@hotail.com</span></p>
                            <p style={{color: '#5F6777'}} className='font-Ubuntu-Regular text-xs mt-1 ml-2' >Phone:<span className='ml-2' style={{color: '#A5B0C1'}}>090 09 098 8111</span></p>
                            <div className='w-full' >
                                <div className='w-8 h-8 bg-yellow-200 ml-auto -mt-4 rounded-full' >

                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div> 

            {showModal ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed pb-4 px-4 inset-0 z-50 outline-none focus:outline-none"> 
                            <ReceptionistModal close={setShowModal} />
                        </div> 
                        <div className="opacity-50 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 
        </div>
    )
}
