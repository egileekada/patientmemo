import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ReceptionistTab() {

    const navigate = useNavigate() 

    return (
        <div className='w-full h-full' >
            <div className='w-full flex items-center my-10 justify-center' >  
                <div className='w-auto bg-white rounded-tl-full rounded-bl-full font-Ubuntu-Medium' >
                    <button className='  py-3 w-36 bg-white text-[#A5B0C1] text-base rounded-tl-full rounded-bl-full' >Doctors</button>
                    <button className='bg-[#7123E2] py-3 w-48  text-white text-base rounded-full' >Receptionists/Nurse</button> 
                </div>
            </div>
            <div style={{width: '950px'}} className='mx-auto pb-28' >
                <div className='w-full flex items-center justify-center'>
                    <div style={{width: '450px'}} className='mr-auto bg-white py-6 px-8 rounded-xl' >
                        <div className='w-28 h-28 rounded-full flex justify-center items-center bg-[#F4EDFD]' >
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.5 30C21.8848 30 26.25 25.6348 26.25 20.25C26.25 14.8652 21.8848 10.5 16.5 10.5C11.1152 10.5 6.75 14.8652 6.75 20.25C6.75 25.6348 11.1152 30 16.5 30Z" stroke="#7123E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M29.1406 10.8632C30.4816 10.4854 31.888 10.3993 33.2651 10.6108C34.6422 10.8223 35.958 11.3264 37.1239 12.0892C38.2898 12.852 39.2786 13.8559 40.0239 15.033C40.7691 16.2102 41.2534 17.5334 41.4442 18.9136C41.635 20.2937 41.5279 21.6987 41.1299 23.0339C40.732 24.3691 40.0526 25.6035 39.1374 26.6541C38.2222 27.7046 37.0926 28.5468 35.8245 29.124C34.5564 29.7011 33.1794 29.9998 31.7861 30C34.4341 29.9981 37.0435 30.6343 39.3934 31.8546C41.7434 33.075 43.7647 34.8437 45.2862 37.0109M3 37.0119C4.52275 34.8459 6.5443 33.0781 8.89397 31.8577C11.2436 30.6373 13.8524 30.0001 16.5002 30C19.1479 29.9999 21.7567 30.6369 24.1065 31.8571C26.4562 33.0773 28.4779 34.845 30.0008 37.0109" stroke="#7123E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div> 
                        <p className='font-Ubuntu-Bold text-xl mt-6  ' >Register Users</p> 
                        <p className='font-Ubuntu-Regular text-base mt-2 text-[#727272]' >Register new users and help them create a profile on the system</p> 
                        <button className='bg-[#7123E2] py-3 w-full  text-white text-base rounded-full my-6' >Register Patients</button> 
                    </div>
                    <div style={{width: '450px'}} className='ml-auto bg-white py-6 px-8 rounded-xl' >
                        <div className='w-28 h-28 rounded-full flex justify-center items-center bg-[#F4EDFD]' >
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M43.2092 19.1C43.2135 18.1813 42.9541 17.2807 42.4618 16.5051C41.9695 15.7294 41.2649 15.1114 40.4317 14.7243C39.5986 14.3372 38.6718 14.1973 37.7615 14.3213C36.8512 14.4453 35.9956 14.8279 35.2963 15.4237C34.597 16.0195 34.0834 16.8034 33.8164 17.6825C33.5494 18.5615 33.5403 19.4987 33.7902 20.3828C34.04 21.2669 34.5383 22.0607 35.2259 22.6699C35.9135 23.2792 36.7615 23.6784 37.6692 23.82L37.7292 32.08C37.7292 38.86 32.9892 44.38 27.1592 44.38C22.0192 44.38 17.6692 40.08 16.7692 34.26C19.294 34.0985 21.6669 32.9981 23.4213 31.1753C25.1757 29.3524 26.1844 26.9391 26.2492 24.41V23.66H24.6492L26.2492 17.25C27.3892 13.59 27.1892 10.93 25.6592 9.33001C23.6592 7.23001 20.0692 7.75001 18.8892 8.00001L18.6792 7.32001L17.2092 7.77001C17.0501 7.817 16.9019 7.89495 16.773 7.99936C16.6441 8.10378 16.5371 8.23262 16.4582 8.37849C16.3792 8.52435 16.3298 8.68438 16.3128 8.84938C16.2958 9.01438 16.3116 9.18111 16.3592 9.34001C16.3592 9.34001 16.8092 10.56 17.6492 10.51C17.7692 10.51 19.4892 10.01 19.4892 10.01L19.3192 9.44001C20.3992 9.24001 23.1692 8.89001 24.5792 10.37C25.6992 11.54 25.7892 13.71 24.8092 16.84L23.0992 23.66H20.8292V24.41C20.8292 25.0666 20.6999 25.7168 20.4486 26.3234C20.1973 26.9301 19.829 27.4812 19.3647 27.9455C18.9005 28.4098 18.3493 28.7781 17.7426 29.0294C17.136 29.2807 16.4858 29.41 15.8292 29.41C15.1726 29.41 14.5224 29.2807 13.9158 29.0294C13.3092 28.7781 12.758 28.4098 12.2937 27.9455C11.8294 27.4812 11.4611 26.9301 11.2098 26.3234C10.9585 25.7168 10.8292 25.0666 10.8292 24.41V23.66H8.55921L6.84921 16.8C5.84921 13.71 5.95921 11.54 7.08921 10.37C8.49921 8.89001 11.2692 9.24001 12.3392 9.44001L12.1692 10.01C12.1692 10.01 13.8892 10.51 14.0092 10.51C14.8792 10.69 15.2992 9.34001 15.2992 9.34001C15.3958 9.02042 15.3615 8.67558 15.204 8.38122C15.0465 8.08685 14.7787 7.86703 14.4592 7.77001L12.9992 7.32001L12.7992 8.00001C11.5992 7.75001 7.99921 7.23001 5.99921 9.33001C4.45921 10.93 4.25921 13.59 5.38921 17.21L6.99921 23.66H5.37921V24.41C5.44999 27.0071 6.51394 29.4781 8.35195 31.3143C10.19 33.1504 12.6621 34.2119 15.2592 34.28C16.1992 40.94 21.2592 45.88 27.1592 45.88C33.8092 45.88 39.2292 39.69 39.2292 32.07L39.1692 23.82C40.2928 23.6398 41.3159 23.0663 42.0559 22.2018C42.7958 21.3373 43.2046 20.238 43.2092 19.1ZM6.91921 25.16H9.33921C9.43142 26.8216 10.1564 28.3847 11.3653 29.5284C12.5742 30.672 14.1751 31.3093 15.8392 31.3093C17.5033 31.3093 19.1043 30.672 20.3131 29.5284C21.522 28.3847 22.247 26.8216 22.3392 25.16H24.7592C24.4896 27.3104 23.4307 29.284 21.7879 30.6976C20.1452 32.1112 18.0358 32.864 15.8692 32.81C13.693 32.8769 11.5701 32.1301 9.91508 30.7155C8.26007 29.3009 7.19189 27.3201 6.91921 25.16ZM38.4092 22.4C37.7565 22.4 37.1185 22.2065 36.5758 21.8439C36.0331 21.4812 35.6102 20.9659 35.3604 20.3629C35.1106 19.7599 35.0453 19.0963 35.1726 18.4562C35.3 17.8161 35.6142 17.2281 36.0758 16.7666C36.5373 16.305 37.1253 15.9907 37.7654 15.8634C38.4056 15.7361 39.0691 15.8014 39.6721 16.0512C40.2751 16.301 40.7905 16.7239 41.1531 17.2666C41.5157 17.8093 41.7092 18.4473 41.7092 19.1C41.7092 19.9752 41.3615 20.8146 40.7427 21.4335C40.1238 22.0523 39.2844 22.4 38.4092 22.4Z" fill="#7123E2"/>
                            </svg>
                        </div>
                        <p className='font-Ubuntu-Bold text-xl mt-6  ' >Schedule with Doctor</p> 
                        <p className='font-Ubuntu-Regular text-base mt-2 text-[#727272]' >Find a doctot for a patient, check if the doctor is on seat and available for an apointment</p> 
                        <button onClick={()=> navigate('/receptionist/schedular')} className='bg-[#7123E2] py-3 w-full  text-white text-base rounded-full my-6' >Arrange Schedule</button> 
                    </div>
                </div>
                <p className='font-Ubuntu-Bold text-xl mt-6  ' >Available Doctors/Nurses</p> 
                <div className='w-full grid grid-cols-3 mt-3 gap-4 pb-10 ' >
                    <div className='w-full bg-white rounded-lg flex items-center py-4 px-5' >
                        <div className='w-12 h-12 bg-red-300 rounded-full' >

                        </div>
                        <div className='ml-2' >
                            <p className='font-Ubuntu-Medium text-base' >Dr. Adeyemi Joseph</p> 
                            <p className='font-Ubuntu-Regular text-xs mt-1' >Gynaecologist</p> 
                        </div>
                        <p className='font-Ubuntu-Regular text-xs text-[#7123E2] ml-auto' >2hrs</p> 
                    </div>
                    <div className='w-full bg-white rounded-lg flex items-center py-4 px-5' >
                        <div className='w-12 h-12 bg-red-300 rounded-full' >

                        </div>
                        <div className='ml-2' >
                            <p className='font-Ubuntu-Medium text-base' >Dr. Adeyemi Joseph</p> 
                            <p className='font-Ubuntu-Regular text-xs mt-1' >Gynaecologist</p> 
                        </div>
                        <p className='font-Ubuntu-Regular text-xs text-[#7123E2] ml-auto' >2hrs</p> 
                    </div>
                    <div className='w-full bg-white rounded-lg flex items-center py-4 px-5' >
                        <div className='w-12 h-12 bg-red-300 rounded-full' >

                        </div>
                        <div className='ml-2' >
                            <p className='font-Ubuntu-Medium text-base' >Dr. Adeyemi Joseph</p> 
                            <p className='font-Ubuntu-Regular text-xs mt-1' >Gynaecologist</p> 
                        </div>
                        <p className='font-Ubuntu-Regular text-xs text-[#7123E2] ml-auto' >2hrs</p> 
                    </div>
                    <div className='w-full bg-white rounded-lg flex items-center py-4 px-5' >
                        <div className='w-12 h-12 bg-red-300 rounded-full' >

                        </div>
                        <div className='ml-2' >
                            <p className='font-Ubuntu-Medium text-base' >Dr. Adeyemi Joseph</p> 
                            <p className='font-Ubuntu-Regular text-xs mt-1' >Gynaecologist</p> 
                        </div>
                        <p className='font-Ubuntu-Regular text-xs text-[#7123E2] ml-auto' >2hrs</p> 
                    </div>
                    <div className='w-full bg-white rounded-lg flex items-center py-4 px-5' >
                        <div className='w-12 h-12 bg-red-300 rounded-full' >

                        </div>
                        <div className='ml-2' >
                            <p className='font-Ubuntu-Medium text-base' >Dr. Adeyemi Joseph</p> 
                            <p className='font-Ubuntu-Regular text-xs mt-1' >Gynaecologist</p> 
                        </div>
                        <p className='font-Ubuntu-Regular text-xs text-[#7123E2] ml-auto' >2hrs</p> 
                    </div>
                </div>
            </div>
        </div>
    )
} 