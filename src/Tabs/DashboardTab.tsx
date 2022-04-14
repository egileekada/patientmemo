import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function DashboardTab() {

    const navigate = useNavigate() 
    const userData: any = JSON.parse(localStorage.getItem('userData')+'') 

    return (
        <div className='w-full h-full relative px-32 py-12' > 
            {userData.role !== 'nurse' && ( 
                <>
                    <div className="absolute flex flex-1 justify-center items-center inset-0 z-50 "> 
                        <p className='font-Ubuntu-Bold text-5xl text-white relative z-50' >You Are Not Assigned To This Role</p>
                    </div>
                    <div className=" opacity-50  absolute flex flex-1 inset-0 z-40 bg-[#7123E2]"/>
                </>
            )}
            <div className='grid grid-cols-3 w-full gap-6' >
                <div onClick={()=> navigate('/dashboard/registerpatient')} className='bg-[#7123E2] w-full rounded-md px-6 py-8 relative cursor-pointer' >
                    <div className='w-14 h-14 flex justify-center items-center  rounded-full bg-[#5815BA]' >
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3304 15.9302C12.1911 15.9302 11.0775 15.5923 10.1303 14.9594C9.18305 14.3265 8.44478 13.4269 8.00882 12.3744C7.57285 11.3219 7.45879 10.1638 7.68104 9.04644C7.90329 7.92911 8.45188 6.90277 9.25743 6.09722C10.063 5.29167 11.0893 4.74309 12.2066 4.52084C13.324 4.29858 14.4821 4.41265 15.5346 4.84861C16.5871 5.28457 17.4867 6.02285 18.1196 6.97007C18.7525 7.9173 19.0904 9.03094 19.0904 10.1702C19.089 11.6974 18.4818 13.1617 17.4018 14.2416C16.3219 15.3216 14.8576 15.9288 13.3304 15.9302ZM13.3304 5.93016C12.4876 5.93016 11.6638 6.18013 10.9631 6.64845C10.2625 7.11676 9.71644 7.78238 9.39416 8.56108C9.07188 9.33979 8.98781 10.1966 9.15259 11.0231C9.31736 11.8496 9.72359 12.6086 10.3199 13.2042C10.9161 13.7998 11.6757 14.2051 12.5023 14.3689C13.329 14.5327 14.1857 14.4476 14.9641 14.1244C15.7424 13.8013 16.4074 13.2545 16.8749 12.5533C17.3423 11.852 17.5913 11.0279 17.5904 10.1852C17.5917 9.62489 17.4825 9.06986 17.269 8.55186C17.0555 8.03386 16.7419 7.56306 16.3462 7.16642C15.9505 6.76978 15.4804 6.4551 14.9629 6.24039C14.4454 6.02568 13.8906 5.91516 13.3304 5.91516V5.93016ZM13.3304 27.5852C10.3959 27.6471 7.53647 26.6555 5.27036 24.7902C5.17729 24.7019 5.10859 24.591 5.07092 24.4684C5.03325 24.3458 5.02789 24.2155 5.05536 24.0902C6.05536 19.3002 9.01036 16.6602 13.3304 16.6602C13.5293 16.6602 13.72 16.7392 13.8607 16.8798C14.0013 17.0205 14.0804 17.2112 14.0804 17.4102C14.0804 17.6091 14.0013 17.7998 13.8607 17.9405C13.72 18.0811 13.5293 18.1602 13.3304 18.1602C9.87536 18.1602 7.56036 20.1602 6.62036 23.9602C8.5744 25.3635 10.9247 26.1078 13.3304 26.0852C13.5293 26.0852 13.72 26.1642 13.8607 26.3048C14.0013 26.4455 14.0804 26.6362 14.0804 26.8352C14.0804 27.0341 14.0013 27.2248 13.8607 27.3655C13.72 27.5061 13.5293 27.5852 13.3304 27.5852Z" fill="white"/>
                            <path d="M13.3301 27.585C13.1312 27.585 12.9404 27.5059 12.7997 27.3653C12.6591 27.2246 12.5801 27.0339 12.5801 26.835C12.5801 26.636 12.6591 26.4453 12.7997 26.3046C12.9404 26.164 13.1312 26.085 13.3301 26.085C14.9489 26.0933 16.5516 25.7629 18.0351 25.115C18.126 25.0752 18.2239 25.0538 18.3231 25.0519C18.4223 25.05 18.521 25.0677 18.6133 25.1039C18.7057 25.1401 18.7901 25.1942 18.8616 25.263C18.9331 25.3318 18.9904 25.414 19.0301 25.505C19.0698 25.5959 19.0912 25.6938 19.0931 25.793C19.095 25.8922 19.0774 25.9908 19.0411 26.0832C19.0049 26.1756 18.9509 26.26 18.8821 26.3315C18.8132 26.403 18.731 26.4602 18.6401 26.5C16.9652 27.2284 15.1564 27.598 13.3301 27.585ZM20.8701 25C20.6981 24.9993 20.5315 24.94 20.3979 24.8318C20.2642 24.7236 20.1715 24.573 20.1351 24.405C19.2701 20.325 16.9151 18.165 13.3301 18.165C13.1312 18.165 12.9404 18.0859 12.7997 17.9453C12.6591 17.8046 12.5801 17.6139 12.5801 17.415C12.5801 17.216 12.6591 17.0253 12.7997 16.8846C12.9404 16.744 13.1312 16.665 13.3301 16.665C17.6501 16.665 20.5851 19.305 21.6051 24.095C21.6271 24.1925 21.6296 24.2935 21.6123 24.392C21.595 24.4905 21.5583 24.5845 21.5043 24.6687C21.4503 24.7529 21.3802 24.8256 21.2979 24.8824C21.2157 24.9393 21.1229 24.9792 21.0251 25C20.9735 25.0049 20.9216 25.0049 20.8701 25ZM23.3801 19.13C23.1812 19.13 22.9904 19.0509 22.8497 18.9103C22.7091 18.7696 22.6301 18.5789 22.6301 18.38V12.71C22.6301 12.511 22.7091 12.3203 22.8497 12.1796C22.9904 12.039 23.1812 11.96 23.3801 11.96C23.579 11.96 23.7698 12.039 23.9104 12.1796C24.0511 12.3203 24.1301 12.511 24.1301 12.71V18.38C24.1288 18.5785 24.0493 18.7685 23.909 18.9088C23.7686 19.0492 23.5786 19.1286 23.3801 19.13Z" fill="white"/>
                            <path d="M23.3799 16.2949H20.5449C20.346 16.2949 20.1552 16.2159 20.0146 16.0753C19.8739 15.9346 19.7949 15.7438 19.7949 15.5449C19.7949 15.346 19.8739 15.1552 20.0146 15.0146C20.1552 14.8739 20.346 14.7949 20.5449 14.7949H23.3799C23.5788 14.7949 23.7696 14.8739 23.9103 15.0146C24.0509 15.1552 24.1299 15.346 24.1299 15.5449C24.1299 15.7438 24.0509 15.9346 23.9103 16.0753C23.7696 16.2159 23.5788 16.2949 23.3799 16.2949ZM26.2149 16.2949H25.3399C25.141 16.2949 24.9502 16.2159 24.8096 16.0753C24.6689 15.9346 24.5899 15.7438 24.5899 15.5449C24.5899 15.346 24.6689 15.1552 24.8096 15.0146C24.9502 14.8739 25.141 14.7949 25.3399 14.7949H26.2149C26.4138 14.7949 26.6046 14.8739 26.7453 15.0146C26.8859 15.1552 26.9649 15.346 26.9649 15.5449C26.9649 15.7438 26.8859 15.9346 26.7453 16.0753C26.6046 16.2159 26.4138 16.2949 26.2149 16.2949Z" fill="white"/>
                        </svg>
                    </div>
                    <p className='font-Ubuntu-Bold text-xl text-white mt-3 relative z-30' >Register<br/> New Patients</p>
                    <div className='w-36 h-36  rounded-tl-full absolute bottom-0 right-0 bg-[#5815BA]' />
                </div>
                <div onClick={()=> navigate('/dashboard/managescan')} className='bg-[#F28211] w-full rounded-md px-6 py-8 relative cursor-pointer' >
                    <div className='w-14 h-14 flex justify-center items-center  rounded-full bg-[#DB720A]' >
                        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.2071 9.08295L21.1977 9.09216C21.4729 9.06112 21.7418 9.18824 21.8894 9.41912C22.0369 9.65 22.0369 9.94373 21.8894 10.1746C21.7418 10.4055 21.4729 10.5326 21.1977 10.5016H20.1219V13.3112C20.1168 15.8986 17.988 17.9949 15.3604 18H14.5746C14.1768 18 13.8543 17.6824 13.8543 17.2907C13.8543 16.8989 14.1768 16.5814 14.5746 16.5814H15.3604C16.2444 16.5887 17.0949 16.2487 17.7235 15.6366C18.3521 15.0245 18.7069 14.1909 18.7094 13.3204V10.5016H3.2835V13.2651C3.28349 15.0676 4.76462 16.5302 6.59506 16.5353H7.40892C7.80673 16.5353 8.12923 16.8529 8.12923 17.2446C8.12923 17.6364 7.80673 17.9539 7.40892 17.9539H6.62312C3.99705 17.9489 1.87093 15.8511 1.87094 13.2651V10.5016H0.720311C0.322494 10.5016 0 10.184 0 9.79226C0 9.40052 0.322494 9.08295 0.720311 9.08295H21.2071ZM12.844 12.3992L12.9417 12.4057C13.2933 12.4527 13.5643 12.7494 13.5643 13.1085C13.5643 13.5003 13.2418 13.8178 12.844 13.8178H8.82148C8.42366 13.8178 8.10116 13.5003 8.10116 13.1085C8.10629 12.7153 8.43147 12.3992 8.83083 12.3992H12.844ZM15.3604 8.1556e-05C16.6281 -0.00727614 17.8464 0.483473 18.7455 1.3636C19.6445 2.24372 20.15 3.44055 20.15 4.6889V5.74826L20.1434 5.84451C20.0957 6.19073 19.7944 6.45758 19.4297 6.45758C19.0319 6.45758 18.7094 6.14001 18.7094 5.74826V4.6889C18.7094 3.81678 18.3557 2.98078 17.7268 2.3667C17.0979 1.75262 16.246 1.41133 15.3604 1.4187H14.584C14.1862 1.4187 13.8637 1.10113 13.8637 0.709393C13.8637 0.317651 14.1862 8.1556e-05 14.584 8.1556e-05H15.3604ZM7.39021 8.1556e-05C7.78802 8.1556e-05 8.11052 0.317651 8.11052 0.709393C8.11052 1.10113 7.78802 1.4187 7.39021 1.4187H6.60441C4.77032 1.4187 3.2835 2.88282 3.2835 4.6889V5.74826L3.2745 5.85938C3.25067 6.00543 3.18025 6.14135 3.07197 6.24659C2.93661 6.37816 2.75336 6.45083 2.56319 6.44842C2.17997 6.43368 1.87563 6.12589 1.87093 5.74826V4.6889C1.86576 2.10801 3.98351 0.0102375 6.60441 8.1556e-05H7.39021ZM8.72878 4.89319L8.83083 4.90078H12.8346C13.1984 4.94179 13.473 5.24496 13.473 5.60548C13.473 5.966 13.1984 6.26917 12.8346 6.31019H8.7747C8.49953 6.32861 8.23783 6.1907 8.10076 5.95502C7.9637 5.71933 7.97533 5.42727 8.13072 5.20288C8.28611 4.9785 8.55797 4.86118 8.83083 4.90078L8.72878 4.89319Z" fill="white"/>
                        </svg>
                    </div>
                    <p className='font-Ubuntu-Bold text-xl text-white mt-3 relative z-30' >Manage<br/>Scan Images</p>
                        <div className='w-36 h-36  rounded-tl-full absolute bottom-0 right-0 bg-[#DB720A]' />
                </div>
                <div onClick={()=> navigate('/dashboard/manageuser')} className='bg-[#0DA400] w-full rounded-md px-6 py-8 relative cursor-pointer' >
                    <div className='w-14 h-14 flex justify-center items-center  rounded-full bg-[#109205]' >
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3304 15.9302C12.1911 15.9302 11.0775 15.5923 10.1303 14.9594C9.18305 14.3265 8.44478 13.4269 8.00882 12.3744C7.57285 11.3219 7.45879 10.1638 7.68104 9.04644C7.90329 7.92911 8.45188 6.90277 9.25743 6.09722C10.063 5.29167 11.0893 4.74309 12.2066 4.52084C13.324 4.29858 14.4821 4.41265 15.5346 4.84861C16.5871 5.28457 17.4867 6.02285 18.1196 6.97007C18.7525 7.9173 19.0904 9.03094 19.0904 10.1702C19.089 11.6974 18.4818 13.1617 17.4018 14.2416C16.3219 15.3216 14.8576 15.9288 13.3304 15.9302ZM13.3304 5.93016C12.4876 5.93016 11.6638 6.18013 10.9631 6.64845C10.2625 7.11676 9.71644 7.78238 9.39416 8.56108C9.07188 9.33979 8.98781 10.1966 9.15259 11.0231C9.31736 11.8496 9.72359 12.6086 10.3199 13.2042C10.9161 13.7998 11.6757 14.2051 12.5023 14.3689C13.329 14.5327 14.1857 14.4476 14.9641 14.1244C15.7424 13.8013 16.4074 13.2545 16.8749 12.5533C17.3423 11.852 17.5913 11.0279 17.5904 10.1852C17.5917 9.62489 17.4825 9.06986 17.269 8.55186C17.0555 8.03386 16.7419 7.56306 16.3462 7.16642C15.9505 6.76978 15.4804 6.4551 14.9629 6.24039C14.4454 6.02568 13.8906 5.91516 13.3304 5.91516V5.93016ZM13.3304 27.5852C10.3959 27.6471 7.53647 26.6555 5.27036 24.7902C5.17729 24.7019 5.10859 24.591 5.07092 24.4684C5.03325 24.3458 5.02789 24.2155 5.05536 24.0902C6.05536 19.3002 9.01036 16.6602 13.3304 16.6602C13.5293 16.6602 13.72 16.7392 13.8607 16.8798C14.0013 17.0205 14.0804 17.2112 14.0804 17.4102C14.0804 17.6091 14.0013 17.7998 13.8607 17.9405C13.72 18.0811 13.5293 18.1602 13.3304 18.1602C9.87536 18.1602 7.56036 20.1602 6.62036 23.9602C8.5744 25.3635 10.9247 26.1078 13.3304 26.0852C13.5293 26.0852 13.72 26.1642 13.8607 26.3048C14.0013 26.4455 14.0804 26.6362 14.0804 26.8352C14.0804 27.0341 14.0013 27.2248 13.8607 27.3655C13.72 27.5061 13.5293 27.5852 13.3304 27.5852Z" fill="white"/>
                            <path d="M13.3301 27.585C13.1312 27.585 12.9404 27.5059 12.7997 27.3653C12.6591 27.2246 12.5801 27.0339 12.5801 26.835C12.5801 26.636 12.6591 26.4453 12.7997 26.3046C12.9404 26.164 13.1312 26.085 13.3301 26.085C14.9489 26.0933 16.5516 25.7629 18.0351 25.115C18.126 25.0752 18.2239 25.0538 18.3231 25.0519C18.4223 25.05 18.521 25.0677 18.6133 25.1039C18.7057 25.1401 18.7901 25.1942 18.8616 25.263C18.9331 25.3318 18.9904 25.414 19.0301 25.505C19.0698 25.5959 19.0912 25.6938 19.0931 25.793C19.095 25.8922 19.0774 25.9908 19.0411 26.0832C19.0049 26.1756 18.9509 26.26 18.8821 26.3315C18.8132 26.403 18.731 26.4602 18.6401 26.5C16.9652 27.2284 15.1564 27.598 13.3301 27.585ZM20.8701 25C20.6981 24.9993 20.5315 24.94 20.3979 24.8318C20.2642 24.7236 20.1715 24.573 20.1351 24.405C19.2701 20.325 16.9151 18.165 13.3301 18.165C13.1312 18.165 12.9404 18.0859 12.7997 17.9453C12.6591 17.8046 12.5801 17.6139 12.5801 17.415C12.5801 17.216 12.6591 17.0253 12.7997 16.8846C12.9404 16.744 13.1312 16.665 13.3301 16.665C17.6501 16.665 20.5851 19.305 21.6051 24.095C21.6271 24.1925 21.6296 24.2935 21.6123 24.392C21.595 24.4905 21.5583 24.5845 21.5043 24.6687C21.4503 24.7529 21.3802 24.8256 21.2979 24.8824C21.2157 24.9393 21.1229 24.9792 21.0251 25C20.9735 25.0049 20.9216 25.0049 20.8701 25ZM23.3801 19.13C23.1812 19.13 22.9904 19.0509 22.8497 18.9103C22.7091 18.7696 22.6301 18.5789 22.6301 18.38V12.71C22.6301 12.511 22.7091 12.3203 22.8497 12.1796C22.9904 12.039 23.1812 11.96 23.3801 11.96C23.579 11.96 23.7698 12.039 23.9104 12.1796C24.0511 12.3203 24.1301 12.511 24.1301 12.71V18.38C24.1288 18.5785 24.0493 18.7685 23.909 18.9088C23.7686 19.0492 23.5786 19.1286 23.3801 19.13Z" fill="white"/>
                            <path d="M23.3799 16.2949H20.5449C20.346 16.2949 20.1552 16.2159 20.0146 16.0753C19.8739 15.9346 19.7949 15.7438 19.7949 15.5449C19.7949 15.346 19.8739 15.1552 20.0146 15.0146C20.1552 14.8739 20.346 14.7949 20.5449 14.7949H23.3799C23.5788 14.7949 23.7696 14.8739 23.9103 15.0146C24.0509 15.1552 24.1299 15.346 24.1299 15.5449C24.1299 15.7438 24.0509 15.9346 23.9103 16.0753C23.7696 16.2159 23.5788 16.2949 23.3799 16.2949ZM26.2149 16.2949H25.3399C25.141 16.2949 24.9502 16.2159 24.8096 16.0753C24.6689 15.9346 24.5899 15.7438 24.5899 15.5449C24.5899 15.346 24.6689 15.1552 24.8096 15.0146C24.9502 14.8739 25.141 14.7949 25.3399 14.7949H26.2149C26.4138 14.7949 26.6046 14.8739 26.7453 15.0146C26.8859 15.1552 26.9649 15.346 26.9649 15.5449C26.9649 15.7438 26.8859 15.9346 26.7453 16.0753C26.6046 16.2159 26.4138 16.2949 26.2149 16.2949Z" fill="white"/>
                        </svg>
                    </div>
                    <p className='font-Ubuntu-Bold text-xl text-white mt-3 relative z-30' >Manage<br/> User</p>
                        <div className='w-36 h-36  rounded-tl-full absolute bottom-0 right-0 bg-[#109205]' />
                </div>
                <div onClick={()=> navigate('/dashboard/managebloodbank')} className='bg-[#121212] w-full rounded-md px-6 py-8 relative cursor-pointer' >
                    <div className='w-14 h-14 flex justify-center items-center  rounded-full bg-[#1A1A1C]' >
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3304 15.9302C12.1911 15.9302 11.0775 15.5923 10.1303 14.9594C9.18305 14.3265 8.44478 13.4269 8.00882 12.3744C7.57285 11.3219 7.45879 10.1638 7.68104 9.04644C7.90329 7.92911 8.45188 6.90277 9.25743 6.09722C10.063 5.29167 11.0893 4.74309 12.2066 4.52084C13.324 4.29858 14.4821 4.41265 15.5346 4.84861C16.5871 5.28457 17.4867 6.02285 18.1196 6.97007C18.7525 7.9173 19.0904 9.03094 19.0904 10.1702C19.089 11.6974 18.4818 13.1617 17.4018 14.2416C16.3219 15.3216 14.8576 15.9288 13.3304 15.9302ZM13.3304 5.93016C12.4876 5.93016 11.6638 6.18013 10.9631 6.64845C10.2625 7.11676 9.71644 7.78238 9.39416 8.56108C9.07188 9.33979 8.98781 10.1966 9.15259 11.0231C9.31736 11.8496 9.72359 12.6086 10.3199 13.2042C10.9161 13.7998 11.6757 14.2051 12.5023 14.3689C13.329 14.5327 14.1857 14.4476 14.9641 14.1244C15.7424 13.8013 16.4074 13.2545 16.8749 12.5533C17.3423 11.852 17.5913 11.0279 17.5904 10.1852C17.5917 9.62489 17.4825 9.06986 17.269 8.55186C17.0555 8.03386 16.7419 7.56306 16.3462 7.16642C15.9505 6.76978 15.4804 6.4551 14.9629 6.24039C14.4454 6.02568 13.8906 5.91516 13.3304 5.91516V5.93016ZM13.3304 27.5852C10.3959 27.6471 7.53647 26.6555 5.27036 24.7902C5.17729 24.7019 5.10859 24.591 5.07092 24.4684C5.03325 24.3458 5.02789 24.2155 5.05536 24.0902C6.05536 19.3002 9.01036 16.6602 13.3304 16.6602C13.5293 16.6602 13.72 16.7392 13.8607 16.8798C14.0013 17.0205 14.0804 17.2112 14.0804 17.4102C14.0804 17.6091 14.0013 17.7998 13.8607 17.9405C13.72 18.0811 13.5293 18.1602 13.3304 18.1602C9.87536 18.1602 7.56036 20.1602 6.62036 23.9602C8.5744 25.3635 10.9247 26.1078 13.3304 26.0852C13.5293 26.0852 13.72 26.1642 13.8607 26.3048C14.0013 26.4455 14.0804 26.6362 14.0804 26.8352C14.0804 27.0341 14.0013 27.2248 13.8607 27.3655C13.72 27.5061 13.5293 27.5852 13.3304 27.5852Z" fill="white"/>
                            <path d="M13.3301 27.585C13.1312 27.585 12.9404 27.5059 12.7997 27.3653C12.6591 27.2246 12.5801 27.0339 12.5801 26.835C12.5801 26.636 12.6591 26.4453 12.7997 26.3046C12.9404 26.164 13.1312 26.085 13.3301 26.085C14.9489 26.0933 16.5516 25.7629 18.0351 25.115C18.126 25.0752 18.2239 25.0538 18.3231 25.0519C18.4223 25.05 18.521 25.0677 18.6133 25.1039C18.7057 25.1401 18.7901 25.1942 18.8616 25.263C18.9331 25.3318 18.9904 25.414 19.0301 25.505C19.0698 25.5959 19.0912 25.6938 19.0931 25.793C19.095 25.8922 19.0774 25.9908 19.0411 26.0832C19.0049 26.1756 18.9509 26.26 18.8821 26.3315C18.8132 26.403 18.731 26.4602 18.6401 26.5C16.9652 27.2284 15.1564 27.598 13.3301 27.585ZM20.8701 25C20.6981 24.9993 20.5315 24.94 20.3979 24.8318C20.2642 24.7236 20.1715 24.573 20.1351 24.405C19.2701 20.325 16.9151 18.165 13.3301 18.165C13.1312 18.165 12.9404 18.0859 12.7997 17.9453C12.6591 17.8046 12.5801 17.6139 12.5801 17.415C12.5801 17.216 12.6591 17.0253 12.7997 16.8846C12.9404 16.744 13.1312 16.665 13.3301 16.665C17.6501 16.665 20.5851 19.305 21.6051 24.095C21.6271 24.1925 21.6296 24.2935 21.6123 24.392C21.595 24.4905 21.5583 24.5845 21.5043 24.6687C21.4503 24.7529 21.3802 24.8256 21.2979 24.8824C21.2157 24.9393 21.1229 24.9792 21.0251 25C20.9735 25.0049 20.9216 25.0049 20.8701 25ZM23.3801 19.13C23.1812 19.13 22.9904 19.0509 22.8497 18.9103C22.7091 18.7696 22.6301 18.5789 22.6301 18.38V12.71C22.6301 12.511 22.7091 12.3203 22.8497 12.1796C22.9904 12.039 23.1812 11.96 23.3801 11.96C23.579 11.96 23.7698 12.039 23.9104 12.1796C24.0511 12.3203 24.1301 12.511 24.1301 12.71V18.38C24.1288 18.5785 24.0493 18.7685 23.909 18.9088C23.7686 19.0492 23.5786 19.1286 23.3801 19.13Z" fill="white"/>
                            <path d="M23.3799 16.2949H20.5449C20.346 16.2949 20.1552 16.2159 20.0146 16.0753C19.8739 15.9346 19.7949 15.7438 19.7949 15.5449C19.7949 15.346 19.8739 15.1552 20.0146 15.0146C20.1552 14.8739 20.346 14.7949 20.5449 14.7949H23.3799C23.5788 14.7949 23.7696 14.8739 23.9103 15.0146C24.0509 15.1552 24.1299 15.346 24.1299 15.5449C24.1299 15.7438 24.0509 15.9346 23.9103 16.0753C23.7696 16.2159 23.5788 16.2949 23.3799 16.2949ZM26.2149 16.2949H25.3399C25.141 16.2949 24.9502 16.2159 24.8096 16.0753C24.6689 15.9346 24.5899 15.7438 24.5899 15.5449C24.5899 15.346 24.6689 15.1552 24.8096 15.0146C24.9502 14.8739 25.141 14.7949 25.3399 14.7949H26.2149C26.4138 14.7949 26.6046 14.8739 26.7453 15.0146C26.8859 15.1552 26.9649 15.346 26.9649 15.5449C26.9649 15.7438 26.8859 15.9346 26.7453 16.0753C26.6046 16.2159 26.4138 16.2949 26.2149 16.2949Z" fill="white"/>
                        </svg>
                    </div>
                    <p className='font-Ubuntu-Bold text-xl text-white mt-3 relative' >Manage<br/> Blood Bank</p>
                        <div className='w-36 h-36  rounded-tl-full absolute bottom-0 right-0 bg-[#1A1A1C]' />
                </div>
                <div onClick={()=> navigate('/dashboard/managepatient')} className='bg-[#176AE7] w-full rounded-md px-6 py-8 relative cursor-pointer' >
                    <div className='w-14 h-14 flex justify-center items-center  rounded-full bg-[#115FD6]' >
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.868 16.8167L13.9998 16.8167L14.2944 16.8177C16.5468 16.8325 21.694 17.0601 21.694 20.5488C21.694 24.0147 16.7262 24.2407 14.3295 24.2555L13.4416 24.2555C11.1891 24.2406 6.04086 24.0134 6.04086 20.529C6.04086 17.0588 11.1891 16.8324 13.4416 16.8177L13.7363 16.8167C13.782 16.8167 13.8259 16.8167 13.868 16.8167ZM13.868 18.5667C11.096 18.5667 7.79086 18.9073 7.79086 20.529C7.79086 22.114 10.8987 22.4845 13.6147 22.5055L13.868 22.5065C16.64 22.5065 19.944 22.167 19.944 20.5488C19.944 18.9108 16.64 18.5667 13.868 18.5667ZM23.1472 16.3432C25.9741 16.7667 26.5679 18.0944 26.5679 19.1339C26.5679 19.7686 26.3182 20.9271 24.6499 21.5629C24.5472 21.6014 24.4422 21.6201 24.3384 21.6201C23.9861 21.6201 23.6536 21.4054 23.5206 21.0566C23.3479 20.6051 23.5754 20.0987 24.0269 19.9272C24.8179 19.6262 24.8179 19.2937 24.8179 19.1339C24.8179 18.6229 24.1681 18.2659 22.8871 18.0746C22.4099 18.0022 22.0797 17.5577 22.1509 17.0782C22.2221 16.5999 22.6654 16.2814 23.1472 16.3432ZM5.58399 17.0782C5.65516 17.5577 5.32499 18.0022 4.84783 18.0746C3.56683 18.2659 2.91699 18.6229 2.91699 19.1339C2.91699 19.2937 2.91699 19.6251 3.70916 19.9272C4.16066 20.0987 4.38816 20.6051 4.21549 21.0566C4.08249 21.4054 3.74999 21.6201 3.39766 21.6201C3.29383 21.6201 3.18883 21.6014 3.08616 21.5629C1.41666 20.9259 1.16699 19.7674 1.16699 19.1339C1.16699 18.0956 1.76083 16.7667 4.58883 16.3432C5.07066 16.2826 5.51166 16.5999 5.58399 17.0782ZM13.868 4.66699C16.808 4.66699 19.1985 7.05866 19.1985 9.99749C19.1985 12.9363 16.808 15.328 13.868 15.328H13.8365C12.4132 15.3233 11.0797 14.7657 10.081 13.7577C9.08002 12.7508 8.53286 11.4138 8.53865 9.99399C8.53865 7.05866 10.9292 4.66699 13.868 4.66699ZM13.868 6.41699C11.894 6.41699 10.2887 8.02349 10.2887 9.99749C10.2852 10.9542 10.6515 11.849 11.3224 12.5245C11.9932 13.2 12.8869 13.5745 13.8389 13.578L13.868 14.453V13.578C15.842 13.578 17.4485 11.9727 17.4485 9.99749C17.4485 8.02349 15.842 6.41699 13.868 6.41699ZM21.0885 5.80974C23.1395 6.14691 24.6294 7.90158 24.6294 9.98174C24.6247 12.0759 23.0602 13.8726 20.9894 14.1631C20.9485 14.1689 20.9077 14.1712 20.868 14.1712C20.4387 14.1712 20.0642 13.8551 20.0024 13.4176C19.9359 12.9381 20.2684 12.4959 20.7479 12.4294C21.9612 12.2591 22.877 11.2067 22.8794 9.97941C22.8794 8.76258 22.0067 7.73358 20.8039 7.53641C20.3279 7.45824 20.0047 7.00791 20.0829 6.53074C20.1622 6.05358 20.609 5.73391 21.0885 5.80974ZM7.65319 6.53074C7.73136 7.00791 7.40819 7.45824 6.93219 7.53641C5.72936 7.73358 4.85669 8.76258 4.85669 9.98174C4.85903 11.2067 5.77486 12.2602 6.98703 12.4294C7.46653 12.4959 7.79903 12.9381 7.73252 13.4176C7.67069 13.8551 7.29619 14.1712 6.86686 14.1712C6.82719 14.1712 6.78636 14.1689 6.74553 14.1631C4.67469 13.8726 3.11136 12.0759 3.10669 9.98408C3.10669 7.90158 4.59653 6.14691 6.64753 5.80974C7.13869 5.73274 7.57386 6.05591 7.65319 6.53074Z" fill="white"/>
                        </svg>
                    </div>
                    <p className='font-Ubuntu-Bold text-xl text-white mt-3 relative z-30' >Manage<br/> Registered Patients</p>
                        <div className='w-36 h-36  rounded-tl-full absolute bottom-0 right-0 bg-[#115FD6]' />
                </div>
            </div>
        </div>
    )
} 