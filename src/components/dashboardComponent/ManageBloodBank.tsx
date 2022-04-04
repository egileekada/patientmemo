import { InputGroup, InputRightElement, Input, Select } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ManageBloodBank() {
    
    const navigate = useNavigate()
    const [tab, setTab] = React.useState(0)
    const [showModal, setShowModal] = React.useState(false)
    const [showDetail, setShowDetail] = React.useState(false)

    return (
        <div className='w-full h-auto' >
            <div className='w-full px-12 border-b flex items-center border-[#D7D0DF]' > 
                <div onClick={()=> navigate('/dashboard')} className='w-10 h-10 rounded-full cursor-pointer flex items-center justify-center bg-[#7123E214]' >
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 11L1 6L6 1" stroke="#7123E2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <p className='font-Ubuntu-Medium text-lg ml-3 mr-20' >Manage Blood Bank</p> 
                <div className='mx-auto flex' >
                    <div onClick={()=> setTab(0)} className={tab === 0 ? 'flex items-center pb-7 pt-8 cursor-pointer mx-3 border-b-2 border-[#7123E2]  ': 'flex items-center pb-7 pt-8  cursor-pointer mx-3 border-b-2 border-transparent '} > 
                        <p className={tab === 0 ? 'font-Ubuntu-Medium px-2 text-xs text-[#7123E2]': 'font-Ubuntu-Medium px-2 text-xs text-[#817D83]'} >Blood Bank</p>
                    </div>
                    <div onClick={()=> setTab(1)} className={tab === 1 ? 'flex items-center pb-7 pt-8  ml-4 cursor-pointer mx-3 border-b-2 border-[#7123E2] ': 'flex items-center ml-4 pb-7 pt-8  cursor-pointer mx-3 border-b-2 border-transparent '} > 
                        <p className={tab === 1 ? 'font-Ubuntu-Medium px-2 text-xs text-[#7123E2]': 'font-Ubuntu-Medium px-2 text-xs text-[#817D83]'} >History</p>
                    </div>
                </div>
                <button onClick={()=> setShowModal(true)} className='font-Ubuntu-Medium text-xs bg-[#7123E2] text-white rounded-lg py-3 px-6 ml-auto ' >Add Donor</button>
            </div>
            <div className='w-full h-auto relative' >
                {tab === 0 ?  
                    <div className='w-full h-full grid grid-cols-4 gap-6 py-12 px-8' > 
                        <div className=' px-4 py-6 flex flex-col' > 
                            <div className='flex' >
                                <div className='w-8 h-8 rounded-full flex bg-[#7123E214] justify-center items-center' >
                                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4 11.2494C1.93225 11.2494 0.25 9.56713 0.25 7.49938C0.25 5.56663 3.34675 1.3715 3.69963 0.900125C3.84138 0.710375 4.15863 0.710375 4.30037 0.900125C4.65325 1.3715 7.75 5.56663 7.75 7.49938C7.75 9.56713 6.06775 11.2494 4 11.2494ZM6.54325 8.06413C6.62012 7.87175 6.52638 7.6535 6.334 7.57662C6.1405 7.49938 5.92337 7.59388 5.84687 7.78588C5.54312 8.54563 4.81825 9.03688 4 9.03688C3.793 9.03688 3.625 9.2045 3.625 9.41188C3.625 9.61888 3.793 9.78688 4 9.78688C5.12725 9.78688 6.1255 9.11038 6.54325 8.06413Z" fill="#F44336"/>
                                    </svg>
                                </div>
                                <div className='ml-3' > 
                                    <p className='font-Ubuntu-Medium text-sm' >Abayomi Josephine</p>
                                    <p className='font-Ubuntu-Regular text-[#5F6777] mt-1 text-xs' >Blood group: <span className=' font-Ubuntu-Bold text-[#7123E2]' >+O</span></p>
                                </div>
                            </div>
                            <p className='font-Ubuntu-Medium text-[#7123E2] ml-auto text-xs mt-2'>Husband to a patient</p>
                        </div>
                    </div>
                : 
                    <div className='w-full grid grid-cols-4 gap-6 py-12 relative px-8' > 
                        <div onClick={()=> setShowDetail(true)} className={showDetail ? ' px-4 rounded flex cursor-pointer flex-col py-6 bg-[#7123E2] text-white' : ' px-4 rounded flex cursor-pointer flex-col py-6 bg-[#7123E214]'} > 
                            <div className='flex' >
                                <div className={showDetail ? 'w-8 h-8 rounded-full flex bg-[#FFF] justify-center items-center':'w-8 h-8 rounded-full flex bg-[#7123E214] justify-center items-center'} >
                                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4 11.2494C1.93225 11.2494 0.25 9.56713 0.25 7.49938C0.25 5.56663 3.34675 1.3715 3.69963 0.900125C3.84138 0.710375 4.15863 0.710375 4.30037 0.900125C4.65325 1.3715 7.75 5.56663 7.75 7.49938C7.75 9.56713 6.06775 11.2494 4 11.2494ZM6.54325 8.06413C6.62012 7.87175 6.52638 7.6535 6.334 7.57662C6.1405 7.49938 5.92337 7.59388 5.84687 7.78588C5.54312 8.54563 4.81825 9.03688 4 9.03688C3.793 9.03688 3.625 9.2045 3.625 9.41188C3.625 9.61888 3.793 9.78688 4 9.78688C5.12725 9.78688 6.1255 9.11038 6.54325 8.06413Z" fill="#F44336"/>
                                    </svg>
                                </div>
                                <div className='ml-3' > 
                                    <p className='font-Ubuntu-Medium text-sm' >Abayomi Josephine</p>
                                    <p className={showDetail ? 'font-Ubuntu-Regular mt-1 text-xs': 'font-Ubuntu-Regular text-[#5F6777] mt-1 text-xs'} >Blood group: <span className={showDetail ? ' font-Ubuntu-Bold':' font-Ubuntu-Bold text-[#7123E2]'} >+O</span></p>
                                </div>
                            </div>
                            <p className='font-Ubuntu-Medium text-[#7123E2] ml-auto text-xs mt-2'>Husband to a patient</p> 
                        </div>
                    </div>}
                {showModal ? 
                    <div style={{ boxShadow: '0px 3px 34px 0px #5F67771C'}} className='  font-Ubuntu-Regular absolute w-auto h-auto px-8 rounded-lg py-8 top-4 border border-[#E0E0E0] z-50 bg-white right-4  ' > 
                        <div className='flex items-center' >
                            <p className='font-Ubuntu-Medium text-lg ' >Donor Details</p>
                            <svg onClick={()=> setShowModal(false)} className='ml-auto cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                <g id="Iconly_Light_Close_Square" data-name="Iconly/Light/Close Square" transform="translate(0.75 0.75)">
                                    <g id="Close_Square" data-name="Close Square">
                                    <path id="Stroke_1" data-name="Stroke 1" d="M4.792,0,0,4.792" transform="translate(6.853 6.845)" fill="none" stroke="#7123E2" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                                    <path id="Stroke_2" data-name="Stroke 2" d="M4.8,4.8,0,0" transform="translate(6.85 6.843)" fill="none" stroke="#7123E2" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                                    <path id="Stroke_3" data-name="Stroke 3" d="M13.584,0H4.915C1.894,0,0,2.139,0,5.166v8.168C0,16.361,1.885,18.5,4.915,18.5h8.668c3.031,0,4.917-2.139,4.917-5.166V5.166C18.5,2.139,16.614,0,13.584,0Z" fill="none" stroke="#7123E2" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div className='w-full flex mt-8' >
                            <div style={{width: '210px'}} className='mr-2' >
                                <p className='text-xs mb-2 font-Ubuntu-Medium' >First Name</p>
                                <Input fontSize='sm' placeholder='Enter First Name' />
                            </div>
                            <div style={{width: '210px'}} className='mr-2' >
                                <p className='text-xs mb-2 font-Ubuntu-Medium' >Last Name/Surname</p>
                                <Input fontSize='sm' placeholder='Enter Last Name' />
                            </div> 
                        </div>
                        <div className='w-full flex mt-4' >
                            <div style={{width: '210px'}} className='mr-2' >
                                <p className='text-xs mb-2 font-Ubuntu-Medium' >Patient <span className='text-[#5F6777] font-Ubuntu-Regular' >(If non enter NIL)</span></p>
                                <Input fontSize='sm' placeholder='Enter First Name' />
                            </div>
                            <div style={{width: '210px'}} className='mr-2' >
                                <p className='text-xs mb-2 font-Ubuntu-Medium' >Relationship <span className='text-[#5F6777] font-Ubuntu-Regular' >(If non enter NIL)</span></p>
                                <Input fontSize='sm' placeholder='Enter Last Name' />
                            </div> 
                        </div>
                        <div className=' w-full mr-2 mt-4' >
                            <p className='text-xs mb-2 font-Ubuntu-Medium' >Blood Group <span className='text-[#5F6777] font-Ubuntu-Regular' >(Please carefully confirm)</span></p>
                            <Select fontSize='sm' placeholder='Select Blood Group' />
                        </div>
                        <div className=' w-full mr-2 mt-4' >
                            <p className='text-xs mb-2 font-Ubuntu-Medium' >Home Address <span className='text-[#5F6777] font-Ubuntu-Regular' >(Optional)</span></p>
                            <Input fontSize='sm' placeholder='Home Address' />
                        </div>
                        <div className=' w-full mr-2 mt-4' >
                            <p className='text-xs mb-2 font-Ubuntu-Medium' >Health Challenges</p>
                            <Input fontSize='sm' placeholder='Note  if any' />
                        </div>
                        <button onClick={()=> setShowModal(false)} className='text-xs py-3 rounded bg-[#7123E2] mt-8 w-full text-white font-Ubuntu-Medium' >I have carefully noted the details of the blood donated & the donor</button>
                    </div>
                :null}
            </div>

            {showDetail ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">  
                            <div style={{ boxShadow: '0px 3px 34px 0px #5F67771C', width: '512px'}} className='  font-Ubuntu-Regular h-auto px-8 rounded-lg py-8 border border-[#E0E0E0] z-50 bg-white ' >
                                <div className='flex items-center' >
                                    <p className='font-Ubuntu-Medium text-base ' >Abayomi josephine Donation Details</p>
                                    <svg onClick={()=> setShowDetail(false)} className='ml-auto cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                        <g id="Iconly_Light_Close_Square" data-name="Iconly/Light/Close Square" transform="translate(0.75 0.75)">
                                            <g id="Close_Square" data-name="Close Square">
                                            <path id="Stroke_1" data-name="Stroke 1" d="M4.792,0,0,4.792" transform="translate(6.853 6.845)" fill="none" stroke="#7123E2" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                                            <path id="Stroke_2" data-name="Stroke 2" d="M4.8,4.8,0,0" transform="translate(6.85 6.843)" fill="none" stroke="#7123E2" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                                            <path id="Stroke_3" data-name="Stroke 3" d="M13.584,0H4.915C1.894,0,0,2.139,0,5.166v8.168C0,16.361,1.885,18.5,4.915,18.5h8.668c3.031,0,4.917-2.139,4.917-5.166V5.166C18.5,2.139,16.614,0,13.584,0Z" fill="none" stroke="#7123E2" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div className='flex items-center mt-7' >
                                    <p className='font-Ubuntu-Medium text-sm' >Patient Name</p>
                                    <p className='font-Ubuntu-Medium text-sm ml-auto' >Abayomi Anita</p>
                                </div>
                                <div className='flex items-center mt-4' >
                                    <p className='font-Ubuntu-Medium text-sm' >Relationship with patient</p>
                                    <p className='font-Ubuntu-Medium text-sm ml-auto' >Sister</p>
                                </div>
                                <div className='flex items-center mt-4' >
                                    <p className='font-Ubuntu-Medium text-sm' >Blood Group</p>
                                    <p className='font-Ubuntu-Medium text-sm ml-auto text-[#7123E2]' >+O</p>
                                </div>
                                <div className='flex items-center mt-4' >
                                    <p className='font-Ubuntu-Medium text-sm' >Home Address</p>
                                    <p className='font-Ubuntu-Medium text-sm ml-auto' >13, Ana street, choba, Port Harcourt</p>
                                </div>
                                <div className='flex items-center mt-4' >
                                    <p className='font-Ubuntu-Medium text-sm' >Health Challenge</p>
                                    <p className='font-Ubuntu-Medium text-sm ml-auto' >None</p>
                                </div>
                                <button onClick={()=> setShowDetail(false)} className='font-Ubuntu-Medium text-white text-xs py-3 w-full mt-7 bg-[#7123E2] rounded' >Ok</button>
                            </div>
                        </div> 
                        {/* <div className="opacity-25 absolute flex flex-1 inset-0 z-20 bg-black"/> */}
                    </>
                ) : null} 
        </div>
    )
} 