import { Input, Select, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'

export default function MedicineList() {

    const [name, setName] = React.useState('')  
    const navigate = useNavigate()
    const { isLoading, data, refetch } = useQuery('Alldrugs', () =>
        fetch(`https://hospital-memo-api.herokuapp.com/pharmacy/get-all-drugs`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )   

    const ClickHandler =(item: any)=> {
        // setDrugInfo(item)
        // setShowModifyModal(true)
    }

    return (
        <div className=' poppins-regular w-full flex h-auto flex-col pt-6 '> 
            <div className=' flex items-center w-full justify-between ' >
                <div className=' ' >
                    <div className=' flex items-center ' > 
                        <p className=' font-bold text-2xl text-[#1D242E80] ' >Inventory</p>
                        <svg className=' mx-4 '  width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.209396 1.22595L2.98702 4.00358L0.209396 6.78121C-0.0697987 7.0604 -0.0697987 7.51141 0.209396 7.7906C0.488591 8.0698 0.939597 8.0698 1.21879 7.7906L4.5047 4.5047C4.78389 4.2255 4.78389 3.7745 4.5047 3.4953L1.21879 0.209396C0.939597 -0.0697985 0.48859 -0.0697985 0.209396 0.209396C-0.0626401 0.488591 -0.069799 0.946755 0.209396 1.22595Z" fill="#1D242E"/>
                        </svg>
                        <p className=' font-bold text-2xl ' >List of Medicines (298)</p>
                    </div>
                    <p className=' font-medium ' >List of medicines available</p>
                </div>
                <div className='' > 
                    <button onClick={()=> navigate("/dashboard/pharmacy/addmedicine")} className=' flex items-center px-3 h-[45px] bg-[#262F56] rounded text-white ' >
                        <svg className='mr-2' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 8H8V13C8 13.55 7.55 14 7 14C6.45 14 6 13.55 6 13V8H1C0.45 8 0 7.55 0 7C0 6.45 0.45 6 1 6H6V1C6 0.45 6.45 0 7 0C7.55 0 8 0.45 8 1V6H13C13.55 6 14 6.45 14 7C14 7.55 13.55 8 13 8Z" fill="white"/>
                        </svg>
                        Add New Item</button>
                </div>
            </div>
            <div className=' py-12 w-full flex items-center justify-between ' >
                <div className=' w-[340px] relative ' >
                    <Input placeholder='Search Medicine Inventory..' background="#E3EBF3"  height="45px" />
                    <button className=' h-[43px] px-4 z-10 absolute top-[1px] right-[1px] bg-[#E3EBF3] ' >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.2596 9.02847H9.61118L9.38138 8.80687C10.3662 7.65786 10.8751 6.09028 10.596 4.42421C10.2103 2.1426 8.30623 0.320595 6.00821 0.0415496C2.53655 -0.385226 -0.385226 2.53655 0.0415496 6.00821C0.320595 8.30623 2.1426 10.2103 4.42421 10.596C6.09028 10.8751 7.65786 10.3662 8.80687 9.38138L9.02847 9.61118V10.2596L12.5165 13.7476C12.853 14.0841 13.4029 14.0841 13.7394 13.7476C14.0759 13.4111 14.0759 12.8612 13.7394 12.5247L10.2596 9.02847ZM5.33521 9.02847C3.29161 9.02847 1.64196 7.37881 1.64196 5.33521C1.64196 3.29161 3.29161 1.64196 5.33521 1.64196C7.37881 1.64196 9.02847 3.29161 9.02847 5.33521C9.02847 7.37881 7.37881 9.02847 5.33521 9.02847Z" fill="#1D242E"/>
                        </svg>
                    </button>
                </div>
                <div className='' > 
                    <Select border="0.42px solid #1D242E" >
                        <option>- Select Group -</option>
                    </Select>
                </div>
            </div>

            <div className=' w-full' > 
                <Table variant='unstyled' >
                    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                    <Thead>
                        <Tr className='font-Graphik-Medium h-[35px] bg-[#7123E2] text-white text-sm' >
                            {/* <Th>S/N</Th>   */}
                            <Th>Medicine name</Th>  
                            <Th>Category</Th>  
                            <Th>Dosage types</Th>  
                            <Th>Purchase Date</Th>  
                            <Th>Expired Date</Th>  
                            <Th>Stock</Th>  
                            <Th>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody >
                        {!isLoading && !data.data && ( 
                            <>
                                {[...data.data].map((item: any, index: any)=> { 
                                    if(item.category){
                                        let expired = new Date(item.expiryDate)
                                        let diff = new Date().getTime() - expired.getTime()
                                        if(diff < 0){
                                            if((item.name).toLowerCase().includes(name.toLowerCase())){
                                               
                                                return(
                                                    <Tr className= 'font-Ubuntu-Medium text-black text-sm' key={index} >
                                                        {/* <Td>{index+1}</Td>  */}
                                                        <Td>{item.name}</Td>
                                                        <Td>{item.category}</Td>
                                                        <Td>{item.dosageType}</Td>
                                                        <Td>{new Date(item.purchaseDate).toUTCString()}</Td>
                                                        <Td>
                                                            <div className='bg-[#52EF2B1C] flex px-3 justify-center py-2 items-center text-[#29313F] rounded-lg' >
                                                                <div style={{width: '6px', height: '6px'}} className='rounded-full bg-[#1F670D] mr-2' /> 
                                                                {new Date(item.expiryDate).toUTCString()}
                                                            </div>
                                                        </Td>
                                                        <Td> 
                                                            <div className={item.stock <= 30 ? 'bg-[#F4433614] flex px-3 justify-center py-2 items-center text-[#29313F] rounded-lg':'bg-[#52EF2B1C] flex px-3 justify-center py-2 items-center text-[#29313F] rounded-lg'} >
                                                                <div style={{width: '6px', height: '6px'}} className={item.stock <= 30 ? 'rounded-full bg-[#F44336] mr-2' : 'rounded-full bg-[#1F670D] mr-2'} /> 
                                                                {item.stock}
                                                            </div>
                                                        </Td>
                                                        <Td>
                                                            <button onClick={()=> ClickHandler(item)} className='font-Ubuntu-Medium text-xs  bg-[#7123E2] mr-20 text-white rounded-lg h-10 px-3 ' >Modify</button>
                                                        </Td>
                                                    </Tr> 
                                                ) 
                                            }
                                        }
                                    }
                                })}
                            </>
                        )}
                    </Tbody> 
                </Table>
            </div>
        </div>
    )
} 