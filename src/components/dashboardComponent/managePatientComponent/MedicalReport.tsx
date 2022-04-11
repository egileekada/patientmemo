import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import React from 'react'

export default function MedicalReport() {
    return (
        <div className='w-full flex flex-col justify-center items-center  px-16 py-6' >
            <div className='w-96' >
                <InputGroup >
                    <InputRightElement 
                    children={
                        <svg className='mt-1 cursor-pointer' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.82567 1.33398C11.4057 1.33398 14.3177 4.24598 14.3177 7.82598C14.3177 9.51502 13.6695 11.0555 12.6088 12.2116L14.6959 14.2945C14.8913 14.4898 14.8919 14.8058 14.6966 15.0011C14.5993 15.0998 14.4706 15.1485 14.3426 15.1485C14.2153 15.1485 14.0873 15.0998 13.9893 15.0025L11.8769 12.896C10.7657 13.7859 9.35679 14.3187 7.82567 14.3187C4.24567 14.3187 1.33301 11.406 1.33301 7.82598C1.33301 4.24598 4.24567 1.33398 7.82567 1.33398ZM7.82567 2.33398C4.79701 2.33398 2.33301 4.79732 2.33301 7.82598C2.33301 10.8547 4.79701 13.3187 7.82567 13.3187C10.8537 13.3187 13.3177 10.8547 13.3177 7.82598C13.3177 4.79732 10.8537 2.33398 7.82567 2.33398Z" fill="#5F6777"/>
                        </svg>
                    }
                    />
                    <Input  size='lg' fontSize='sm' placeholder="Search for Doctor, patient, date, nurse or drug" /> 
                </InputGroup> 
            </div>
            <div className='w-full grid grid-cols-3 gap-7 mt-6' >
                <div className=' w-full py-12' >
                    <div className='w-full flex' > 
                        <div className='w-8 h-8 rounded-full flex bg-[#7123E214] justify-center items-center' >
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.99967 8.85179C9.53054 8.85179 11.6663 9.26304 11.6663 10.8497C11.6663 12.437 9.51653 12.8337 6.99967 12.8337C4.46939 12.8337 2.33301 12.4224 2.33301 10.8357C2.33301 9.24846 4.48281 8.85179 6.99967 8.85179ZM6.99967 1.16699C8.71415 1.16699 10.0878 2.54017 10.0878 4.25344C10.0878 5.96671 8.71415 7.34047 6.99967 7.34047C5.28578 7.34047 3.91152 5.96671 3.91152 4.25344C3.91152 2.54017 5.28578 1.16699 6.99967 1.16699Z" fill="#7123E2"/>
                            </svg>
                        </div>
                        <div className='ml-3' > 
                            <p className='font-Ubuntu-Medium text-sm' >Dr. Emmanuel Joesph</p>
                            <p className='font-Ubuntu-Regular text-[#5F6777] mt-1 text-xs' >12:00pm, 12, Jun 22</p>
                        </div>
                    </div>
                    <div className='w-full mt-6' >
                        <div className='w-full flex items-center py-2 bg-[#F0F5FF] px-3' >
                            <p className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >Temp:</p>
                            <p className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' >34 degree celcious</p>
                        </div>
                        <div className='w-full flex items-center py-2 px-3' >
                            <p className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >Pulse:</p>
                            <p className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' >Lorem ipsum</p>
                        </div>
                        <div className='w-full flex items-center py-2 bg-[#F0F5FF] px-3' >
                            <p className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >R.....: </p>
                            <p className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' >Lorem ipsum</p>
                        </div>
                        <div className='w-full flex items-center py-2 px-3' >
                            <p className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >B/P:</p>
                            <p className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' >Lorem ipsum</p>
                        </div>
                        <div className='w-full flex items-center py-2 bg-[#F0F5FF] px-3' >
                            <p className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >FHR:</p>
                            <p className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' >140/90</p>
                        </div>
                        <div className='w-full flex items-center py-2 px-3' >
                            <p className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >Uterine contraction:</p>
                            <p className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' >Lorem ipsum</p>
                        </div>
                        <div className='w-full flex items-center py-2 bg-[#F0F5FF] px-3' >
                            <p className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >Nurse</p>
                            <p className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' >Lorem ipsum</p>
                        </div>
                        <div className='w-full flex items-center py-2 px-3' >
                            <p className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >CX OS</p>
                            <p className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' >Lorem ipsum</p>
                        </div>
                        <div className='w-full flex items-center py-2 bg-[#F0F5FF] px-3' >
                            <p className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >Remark</p>
                            <p className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' >Lorem ipsum</p>
                        </div>
                    </div> 
                </div> 
                <div className='w-full' >
                    <div className=' w-full bg-[#7123E2] rounded-md text-white py-12 px-2' >
                        <div className='w-full flex pl-2 ' > 
                            <div className='w-8 h-8 rounded-full flex bg-[#FFFFFF4F] justify-center items-center' >
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.99967 8.85179C9.53054 8.85179 11.6663 9.26304 11.6663 10.8497C11.6663 12.437 9.51653 12.8337 6.99967 12.8337C4.46939 12.8337 2.33301 12.4224 2.33301 10.8357C2.33301 9.24846 4.48281 8.85179 6.99967 8.85179ZM6.99967 1.16699C8.71415 1.16699 10.0878 2.54017 10.0878 4.25344C10.0878 5.96671 8.71415 7.34047 6.99967 7.34047C5.28578 7.34047 3.91152 5.96671 3.91152 4.25344C3.91152 2.54017 5.28578 1.16699 6.99967 1.16699Z" fill="#fff"/>
                                </svg>
                            </div>
                            <div className='ml-3' > 
                                <p className='font-Ubuntu-Medium text-sm' >Dr. Emmanuel Joesph</p>
                                <p className='font-Ubuntu-Regular text-[#fff] mt-1 text-xs' >12:00pm, 12, Jun 22</p>
                            </div>
                        </div>
                        <div className='w-full mt-6' >
                            <div className='w-full flex items-center py-2 bg-[#F4F4F43D] px-3' >
                                <p className=' text-sm font-Ubuntu-Regular ' >Temp:</p>
                                <p className='text-sm font-Ubuntu-Medium ml-auto   ' >34 degree celcious</p>
                            </div>
                            <div className='w-full flex items-center py-2 px-3' >
                                <p className=' text-sm font-Ubuntu-Regular ' >Pulse:</p>
                                <p className='text-sm font-Ubuntu-Medium ml-auto   ' >Lorem ipsum</p>
                            </div>
                            <div className='w-full flex items-center py-2 bg-[#F4F4F43D] px-3' >
                                <p className=' text-sm font-Ubuntu-Regular ' >R.....: </p>
                                <p className='text-sm font-Ubuntu-Medium ml-auto   ' >Lorem ipsum</p>
                            </div>
                            <div className='w-full flex items-center py-2 px-3' >
                                <p className=' text-sm font-Ubuntu-Regular ' >B/P:</p>
                                <p className='text-sm font-Ubuntu-Medium ml-auto   ' >Lorem ipsum</p>
                            </div>
                            <div className='w-full flex items-center py-2 bg-[#F4F4F43D] px-3' >
                                <p className=' text-sm font-Ubuntu-Regular ' >FHR:</p>
                                <p className='text-sm font-Ubuntu-Medium ml-auto   ' >140/90</p>
                            </div>
                            <div className='w-full flex items-center py-2 px-3' >
                                <p className=' text-sm font-Ubuntu-Regular ' >Uterine contraction:</p>
                                <p className='text-sm font-Ubuntu-Medium ml-auto   ' >Lorem ipsum</p>
                            </div>
                            <div className='w-full flex items-center py-2 bg-[#F4F4F43D] px-3' >
                                <p className=' text-sm font-Ubuntu-Regular ' >Nurse</p>
                                <p className='text-sm font-Ubuntu-Medium ml-auto   ' >Lorem ipsum</p>
                            </div>
                            <div className='w-full flex items-center py-2 px-3' >
                                <p className=' text-sm font-Ubuntu-Regular ' >CX OS</p>
                                <p className='text-sm font-Ubuntu-Medium ml-auto   ' >Lorem ipsum</p>
                            </div>
                            <div className='w-full flex items-center py-2 bg-[#F4F4F43D] px-3' >
                                <p className=' text-sm font-Ubuntu-Regular ' >Remark</p>
                                <p className='text-sm font-Ubuntu-Medium ml-auto   ' >Lorem ipsum</p>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className=' w-full py-12' >
                    <div className='w-full flex' > 
                        <div className='w-8 h-8 rounded-full flex bg-[#7123E214] justify-center items-center' >
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.99967 8.85179C9.53054 8.85179 11.6663 9.26304 11.6663 10.8497C11.6663 12.437 9.51653 12.8337 6.99967 12.8337C4.46939 12.8337 2.33301 12.4224 2.33301 10.8357C2.33301 9.24846 4.48281 8.85179 6.99967 8.85179ZM6.99967 1.16699C8.71415 1.16699 10.0878 2.54017 10.0878 4.25344C10.0878 5.96671 8.71415 7.34047 6.99967 7.34047C5.28578 7.34047 3.91152 5.96671 3.91152 4.25344C3.91152 2.54017 5.28578 1.16699 6.99967 1.16699Z" fill="#7123E2"/>
                            </svg>
                        </div>
                        <div className='ml-3' > 
                            <p className='font-Ubuntu-Medium text-sm' >Dr. Emmanuel Joesph</p>
                            <p className='font-Ubuntu-Regular text-[#5F6777] mt-1 text-xs' >12:00pm, 12, Jun 22</p>
                        </div>
                    </div>
                    <div className='w-full mt-6' >
                        <div className='w-full flex items-center py-2 bg-[#F0F5FF] px-3' >
                            <p className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >Temp:</p>
                            <p className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' >34 degree celcious</p>
                        </div>
                        <div className='w-full flex items-center py-2 px-3' >
                            <p className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >Pulse:</p>
                            <p className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' >Lorem ipsum</p>
                        </div>
                        <div className='w-full flex items-center py-2 bg-[#F0F5FF] px-3' >
                            <p className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >R.....: </p>
                            <p className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' >Lorem ipsum</p>
                        </div>
                        <div className='w-full flex items-center py-2 px-3' >
                            <p className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >B/P:</p>
                            <p className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' >Lorem ipsum</p>
                        </div>
                        <div className='w-full flex items-center py-2 bg-[#F0F5FF] px-3' >
                            <p className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >FHR:</p>
                            <p className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' >140/90</p>
                        </div>
                        <div className='w-full flex items-center py-2 px-3' >
                            <p className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >Uterine contraction:</p>
                            <p className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' >Lorem ipsum</p>
                        </div>
                        <div className='w-full flex items-center py-2 bg-[#F0F5FF] px-3' >
                            <p className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >Nurse</p>
                            <p className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' >Lorem ipsum</p>
                        </div>
                        <div className='w-full flex items-center py-2 px-3' >
                            <p className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >CX OS</p>
                            <p className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' >Lorem ipsum</p>
                        </div>
                        <div className='w-full flex items-center py-2 bg-[#F0F5FF] px-3' >
                            <p className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >Remark</p>
                            <p className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' >Lorem ipsum</p>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
} 