import React from 'react'
import logo from '../assets/images/modalogo.png'

export default function PharmacyModal(props: any) {
    return (
        <div style={{width: '900px'}} className='rounded-2xl flex bg-white items-center' >
            <div style={{width: '200px', height: '580px' }} className=' relative bg-gradient-to-b from-[#7123E2] to-[#BB5778] rounded-l-2xl flex flex-col items-center' >
                <div className=' mt-12 flex flex-col items-center' >
                    <div className='w-20 h-20 rounded-full bg-blue-400' >

                    </div>
                    <p className='font-Ubuntu-Bold text-sm mt-3 text-white ' >Dr. Adeyemi Joseph</p>
                    <p className='font-Ubuntu-Regular text-sm mt-1 text-white ' >Gynaecologist</p>
                </div>
                <div className=' mt-12 flex flex-col items-center' >
                    <div className='w-20 h-20 rounded-full bg-blue-400' >

                    </div>
                    <p className='font-Ubuntu-Bold text-sm mt-3 text-white ' >Dr. Adeyemi Joseph</p>
                    <p className='font-Ubuntu-Regular text-sm mt-1 text-white ' >Gynaecologist</p>
                </div>
                <img src={logo} alt='lo' className=' h-96 object-cover object-left absolute bottom-0' />
            </div>
            <div className=' flex flex-col flex-1 px-14' >
                <p className='font-Ubuntu-Medium text-lg' >Prescribed Drug</p> 
                <div style={{border: '1px solid #F0F5FF'}} className='p-8 rounded-lg pr-14 mt-4 w-full'  >
                    <p className='font-Ubuntu-Regular text-sm mt-1' >Lorem ipsum dolor sit amet, </p>
                    <p className='font-Ubuntu-Regular text-sm mt-1' >consectetur adipiscing elit</p>
                    <p className='font-Ubuntu-Regular text-sm mt-1' >Aliquet nisl, nullam senectus </p>
                    <p className='font-Ubuntu-Regular text-sm mt-1' >porta sem varius nunc odio et. </p>
                    <p className='font-Ubuntu-Regular text-sm mt-1' >Et dictumst eleifend ut elit felis, </p>
                    <p className='font-Ubuntu-Regular text-sm mt-1' >nulla quam bibendum faucibus. </p>
                    <p className='font-Ubuntu-Regular text-sm mt-1' >Vitae lacus, varius et sed in aenean porta mattis.</p>
                </div> 
                <p className='font-Ubuntu-Medium text-sm text-[#5F6777] mt-8' >Email: <span className='text-[#A5B0C1] ml-2 font-Ubuntu-Regular' >nifemidamola@hotail.com</span></p> 
                <p className='font-Ubuntu-Medium text-sm text-[#5F6777] mt-1' >Phone: <span className='text-[#A5B0C1] ml-2 font-Ubuntu-Regular' >090 09 098 8111</span></p> 
                <div className='w-full flex' >
                    <button onClick={()=> props.close(false)} className='bg-[#7123E2] py-3 w-48 ml-auto text-white text-sm mt-6 rounded-full' >Ok</button>
                </div>
            </div>
        </div>
    )
} 