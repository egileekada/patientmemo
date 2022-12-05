import { Table, Thead, Tr, Th, Tbody, Input, Td } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function MedicineGroup() {

    const [showModal, setShowModal] = React.useState(false)
    const navigate = useNavigate()

    return (
        <div className=' poppins-regular w-full flex h-auto flex-col pt-6 '> 
            <div className=' flex items-center w-full justify-between ' >
                <div className=' ' >
                    <div className=' flex items-center ' > 
                        <p className=' font-bold text-2xl text-[#1D242E80] ' >Inventory</p>
                        <svg className=' mx-4 '  width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.209396 1.22595L2.98702 4.00358L0.209396 6.78121C-0.0697987 7.0604 -0.0697987 7.51141 0.209396 7.7906C0.488591 8.0698 0.939597 8.0698 1.21879 7.7906L4.5047 4.5047C4.78389 4.2255 4.78389 3.7745 4.5047 3.4953L1.21879 0.209396C0.939597 -0.0697985 0.48859 -0.0697985 0.209396 0.209396C-0.0626401 0.488591 -0.069799 0.946755 0.209396 1.22595Z" fill="#1D242E"/>
                        </svg>
                        <p className=' font-bold text-2xl ' >Medicine Groups (02)</p>
                    </div>
                    <p className=' font-medium ' >List of medicines available</p>
                </div>
                <div className='' > 
                    <button onClick={()=> setShowModal(true)} className=' flex items-center px-3 h-[45px] bg-[#262F56] rounded text-white ' >
                        <svg className='mr-2' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 8H8V13C8 13.55 7.55 14 7 14C6.45 14 6 13.55 6 13V8H1C0.45 8 0 7.55 0 7C0 6.45 0.45 6 1 6H6V1C6 0.45 6.45 0 7 0C7.55 0 8 0.45 8 1V6H13C13.55 6 14 6.45 14 7C14 7.55 13.55 8 13 8Z" fill="white"/>
                        </svg>
                        Add New Group</button>
                </div>
            </div>
             
            <div className=' py-12 w-full flex items-center justify-between ' >
                <div className=' w-[340px] relative ' >
                    <Input placeholder='Search Medicine Groups..' background="#E3EBF3"  height="45px" />
                    <button className=' h-[43px] px-4 z-10 absolute top-[1px] right-[1px] bg-[#E3EBF3] ' >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.2596 9.02847H9.61118L9.38138 8.80687C10.3662 7.65786 10.8751 6.09028 10.596 4.42421C10.2103 2.1426 8.30623 0.320595 6.00821 0.0415496C2.53655 -0.385226 -0.385226 2.53655 0.0415496 6.00821C0.320595 8.30623 2.1426 10.2103 4.42421 10.596C6.09028 10.8751 7.65786 10.3662 8.80687 9.38138L9.02847 9.61118V10.2596L12.5165 13.7476C12.853 14.0841 13.4029 14.0841 13.7394 13.7476C14.0759 13.4111 14.0759 12.8612 13.7394 12.5247L10.2596 9.02847ZM5.33521 9.02847C3.29161 9.02847 1.64196 7.37881 1.64196 5.33521C1.64196 3.29161 3.29161 1.64196 5.33521 1.64196C7.37881 1.64196 9.02847 3.29161 9.02847 5.33521C9.02847 7.37881 7.37881 9.02847 5.33521 9.02847Z" fill="#1D242E"/>
                        </svg>
                    </button>
                </div>
                {/* <div className='' > 
                    <Select border="0.42px solid #1D242E" >
                        <option>- Select Group -</option>
                    </Select>
                </div> */}
            </div>
            <div className=' w-full' > 
                <Table variant="simple" >
                    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                    <Thead>
                        <Tr className='font-Graphik-Medium h-[35px]  text-sm' >
                            {/* <Th>S/N</Th>   */}
                            <Th>Group Name</Th>  
                            <Th>No of Medicines</Th>   
                            <Th>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody >
                        <Tr>
                            <Td>Diabetes </Td>
                            <Td>32 </Td>
                            <Td><button onClick={()=> navigate('/dashboard/pharmacy/medicinegroupdetail')} >{"View Full Detail >>"}</button></Td>
                        </Tr>
                        <Tr>
                            <Td>Diabetes </Td>
                            <Td>32 </Td>
                            <Td><button onClick={()=> navigate('/dashboard/pharmacy/medicinegroupdetail')} >{"View Full Detail >>"}</button></Td>
                        </Tr>
                        <Tr>
                            <Td>Diabetes </Td>
                            <Td>32 </Td>
                            <Td><button onClick={()=> navigate('/dashboard/pharmacy/medicinegroupdetail')} >{"View Full Detail >>"}</button></Td>
                        </Tr>
                    </Tbody>
                </Table>
            </div>
            {showModal && (
                <div className=' fixed inset-0 flex items-center bg-black bg-opacity-50 justify-center z-40 ' >
                    <div className=' rounded-md w-[500px] bg-white relative z-50 p-2 pb-8 ' >
                        <div className='flex items-center w-full' >
                            {/* <p className='font-Ubuntu-Medium text-lg ' >New Medicine</p> */}
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
                        <div className=' w-full flex flex-col   px-12 ' > 
                            <p className=' font-bold text-2xl text-[#1D242E] text-center mb-4 ' >Add Group</p>

                            <p className=' font-medium text-sm text-[#1D242E] text-left mb-1 ' >Name of Medicine Group</p>
                            <Input placeholder='Enter Medicine Name or Medicine ID' fontSize="sm"  height="45px" />
                            <p className=' font-medium text-sm text-[#1D242E] text-left mt-4 mb-1 ' >Qty of Group</p>
                            <Input placeholder='Enter medicine number' fontSize="sm"  height="45px" />

                            <button onClick={()=> setShowModal(false)} className=' flex mx-auto mt-8 items-center px-8 h-[45px] bg-[#262F56] rounded-lg text-white ' >
                                <svg className='mr-2' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 8H8V13C8 13.55 7.55 14 7 14C6.45 14 6 13.55 6 13V8H1C0.45 8 0 7.55 0 7C0 6.45 0.45 6 1 6H6V1C6 0.45 6.45 0 7 0C7.55 0 8 0.45 8 1V6H13C13.55 6 14 6.45 14 7C14 7.55 13.55 8 13 8Z" fill="white"/>
                                </svg>
                                Add  Group</button> 
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
} 