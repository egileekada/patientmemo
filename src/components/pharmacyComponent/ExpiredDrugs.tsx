import { Table, Thead, Tr, Th, Tbody, Td, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import moment from 'moment'
import React from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import PharmImage from '../../assets/images/PharmacyImage.png'

export default function ExpiredDrugs() {

    const navigate = useNavigate()  
    const [more, setMore] = React.useState(false) 
    const [name, setName] = React.useState('')  
    
    const { isLoading, data } = useQuery('Alldrugs', () =>
        fetch(`https://hospital-memo-api.herokuapp.com/drugs`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )   

    const day = new Date()


    return (
        <div className=' w-full' >
            <div className='w-full relative h-48 flex' >
                <div className='w-full h-48 absolute z-20  ' style={{background: 'linear-gradient(180deg, rgba(46, 19, 53, 0.67) 0%, #5E3168 100%)'}} />
                <img src={PharmImage} alt='pharmimg' className='w-full h-full object-cover z-10 absolute inset-0'  />
                <div className='w-full mb-6 flex items-center pl-12 pr-5 z-30 mt-auto relative' >
                    <div onClick={()=> navigate('/dashboard/pharmacy')} className='w-10 h-10 rounded-full cursor-pointer flex items-center justify-center bg-[#FAF6FF42]' >
                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 11L1 6L6 1" stroke="#FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className='ml-3' > 
                        <p className='font-Ubuntu-Medium text-lg text-white' >Expired Medicine (233)</p>
                         
                    </div>

                    <div className='right-12 absolute  ml-auto' > 
                        {more && ( 
                            <div style={{boxShadow: '0px 4px 34px 0px #7123E229'}} className='absolute top-12 bg-white px-6 py-6 rounded-lg right-4' >
                                <div className='flex items-center cursor-pointer' >
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.40169 10.0912C6.27369 10.0912 6.14569 10.0425 6.04836 9.94455C5.85302 9.74921 5.85302 9.43321 6.04836 9.23788L9.243 6.04323C9.43834 5.8479 9.75434 5.8479 9.94967 6.04323C10.145 6.23856 10.145 6.55456 9.94967 6.74988L6.755 9.94455C6.65769 10.0425 6.52969 10.0912 6.40169 10.0912Z" fill="#262F56"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.59758 10.0931C9.46958 10.0931 9.34158 10.0444 9.24425 9.9464L6.04689 6.7484C5.85156 6.5531 5.85156 6.2371 6.04689 6.04176C6.24289 5.84643 6.55889 5.84643 6.75358 6.04176L9.95092 9.23973C10.1462 9.43507 10.1462 9.75107 9.95092 9.9464C9.85358 10.0444 9.72492 10.0931 9.59758 10.0931Z" fill="#262F56"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.10992 2.33325C3.42325 2.33325 2.33325 3.48859 2.33325 5.27725V10.7226C2.33325 12.5113 3.42325 13.6666 5.10992 13.6666H10.8886C12.5759 13.6666 13.6666 12.5113 13.6666 10.7226V5.27725C13.6666 3.48859 12.5759 2.33325 10.8893 2.33325H5.10992ZM10.8886 14.6666H5.10992C2.85059 14.6666 1.33325 13.0813 1.33325 10.7226V5.27725C1.33325 2.91859 2.85059 1.33325 5.10992 1.33325H10.8893C13.1486 1.33325 14.6666 2.91859 14.6666 5.27725V10.7226C14.6666 13.0813 13.1486 14.6666 10.8886 14.6666Z" fill="#262F56"/>
                                    </svg>
                                    <p className=' font-Ubuntu-Medium text-[#262F56] ml-3 text-sm' >Expired Medicine</p>
                                </div>
                                <div className='flex items-center my-3 cursor-pointer' >
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6058 1.33325C12.7018 1.33325 14.1098 2.76859 14.1098 4.90459V11.0353C14.1098 13.1899 12.7451 14.5913 10.6331 14.6046L5.50442 14.6066C3.40842 14.6066 1.99976 13.1713 1.99976 11.0353V4.90459C1.99976 2.74925 3.36442 1.34859 5.47642 1.33592L10.6051 1.33325H10.6058ZM10.6058 2.33325L5.47976 2.33592C3.92776 2.34525 2.99976 3.30525 2.99976 4.90459V11.0353C2.99976 12.6453 3.93642 13.6066 5.50376 13.6066L10.6298 13.6046C12.1818 13.5953 13.1098 12.6339 13.1098 11.0353V4.90459C13.1098 3.29459 12.1738 2.33325 10.6058 2.33325ZM10.4772 10.3157C10.7532 10.3157 10.9772 10.5397 10.9772 10.8157C10.9772 11.0917 10.7532 11.3157 10.4772 11.3157H5.66382C5.38782 11.3157 5.16382 11.0917 5.16382 10.8157C5.16382 10.5397 5.38782 10.3157 5.66382 10.3157H10.4772ZM10.4772 7.52472C10.7532 7.52472 10.9772 7.74872 10.9772 8.02472C10.9772 8.30072 10.7532 8.52472 10.4772 8.52472H5.66382C5.38782 8.52472 5.16382 8.30072 5.16382 8.02472C5.16382 7.74872 5.38782 7.52472 5.66382 7.52472H10.4772ZM7.50029 4.74019C7.77629 4.74019 8.00029 4.96419 8.00029 5.24019C8.00029 5.51619 7.77629 5.74019 7.50029 5.74019H5.66362C5.38762 5.74019 5.16362 5.51619 5.16362 5.24019C5.16362 4.96419 5.38762 4.74019 5.66362 4.74019H7.50029Z" fill="#262F56"/>
                                    </svg>
                                    <p className=' font-Ubuntu-Medium text-[#262F56] ml-3 text-sm' >Medicine History</p>
                                </div>
                                <div className='flex items-center cursor-pointer' >
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.76483 3.46904C7.0535 3.69571 7.2195 4.03371 7.2195 4.39638C7.2195 7.31971 7.31816 8.10638 7.7215 8.40571C7.98616 8.60104 8.34883 8.59904 9.57083 8.56504C10.1388 8.54838 10.8662 8.52704 11.8188 8.52704C12.1988 8.52704 12.5568 8.68971 12.7995 8.97304C13.0248 9.23638 13.1235 9.58038 13.0715 9.91904C12.6262 12.8024 10.1728 14.8964 7.23816 14.8964C3.98216 14.8964 1.3335 12.2477 1.3335 8.99238C1.3335 6.41104 3.2855 3.82971 5.68483 3.23904C6.0595 3.14771 6.46216 3.23304 6.76483 3.46904ZM5.98816 4.20238C5.96683 4.20238 5.9455 4.20504 5.92416 4.21038C3.94416 4.69771 2.3335 6.84304 2.3335 8.99238C2.3335 11.6964 4.5335 13.8964 7.23816 13.8964C9.67616 13.8964 11.7135 12.1597 12.0828 9.76638C12.0855 9.74638 12.0948 9.68838 12.0402 9.62371C11.9882 9.56304 11.9055 9.52704 11.8188 9.52704C10.8782 9.52704 10.1602 9.54838 9.5995 9.56438C8.24216 9.60504 7.68083 9.62038 7.12616 9.20904C6.33303 8.62147 6.22876 7.63367 6.22015 4.86174L6.2195 4.39638C6.2195 4.34038 6.1955 4.29371 6.1475 4.25638C6.10283 4.22104 6.04616 4.20238 5.98816 4.20238ZM13.3671 2.48924C14.5391 3.66058 15.2831 5.19991 15.2618 6.41124C15.2538 6.88391 14.9104 7.27858 14.4464 7.34858C13.5411 7.48524 12.4811 7.52658 11.5431 7.52658C10.6698 7.52658 9.9011 7.49124 9.4591 7.46591C8.9031 7.43324 8.46043 6.98991 8.42843 6.43391C8.37643 5.55258 8.26376 3.31324 8.34376 1.58124C8.36576 1.07791 8.77243 0.677242 9.26976 0.668576C10.6944 0.627242 12.1644 1.28858 13.3671 2.48924ZM9.3551 1.66791H9.34043C9.2671 3.34724 9.37576 5.51658 9.42643 6.37591C9.4291 6.42724 9.46643 6.46458 9.5171 6.46724C10.2024 6.50658 12.5638 6.61591 14.2618 6.36591C14.2658 5.42991 13.6251 4.16058 12.6604 3.19658C11.6711 2.20858 10.5004 1.66791 9.3551 1.66791Z" fill="#262F56"/>
                                    </svg>
                                    <p className=' font-Ubuntu-Medium text-[#262F56] ml-3 text-sm' >Stock Report</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>   
            <div className='w-96 mx-auto pt-6' >  
                <InputGroup > 
                    <InputLeftElement 
                    children={
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.82567 1.33398C11.4057 1.33398 14.3177 4.24598 14.3177 7.82598C14.3177 9.51502 13.6695 11.0555 12.6088 12.2116L14.6959 14.2945C14.8913 14.4898 14.8919 14.8058 14.6966 15.0011C14.5993 15.0998 14.4706 15.1485 14.3426 15.1485C14.2153 15.1485 14.0873 15.0998 13.9893 15.0025L11.8769 12.896C10.7657 13.7859 9.35679 14.3187 7.82567 14.3187C4.24567 14.3187 1.33301 11.406 1.33301 7.82598C1.33301 4.24598 4.24567 1.33398 7.82567 1.33398ZM7.82567 2.33398C4.79701 2.33398 2.33301 4.79732 2.33301 7.82598C2.33301 10.8547 4.79701 13.3187 7.82567 13.3187C10.8537 13.3187 13.3177 10.8547 13.3177 7.82598C13.3177 4.79732 10.8537 2.33398 7.82567 2.33398Z" fill="#5F6777"/>
                        </svg>
                    }
                    />
                    <Input onChange={(e)=> setName(e.target.value)} fontSize='xs' placeholder="Search for drugs by name" border='0px' backgroundColor='#F6F7F9'  /> 
                </InputGroup> 
            </div>
            <div className='bg-white w-full py-6 px-12' > 
                <Table variant='unstyled' >
                    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                    <Thead>
                        <Tr className='font-Graphik-Medium h-20 bg-[#7123E2] text-white text-sm' >
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
                        {!isLoading && (
                            <>
                                {[...data].reverse().map((item: any, index: any)=> { 
                                    if(item.category){
                                        let expired = new Date(item.expiryDate)
                                        let diff = new Date().getTime() - expired.getTime()
                                        if(diff > 0){
                                            if((item.name).toLowerCase().includes(name.toLowerCase())){ 
                                                return(
                                                    <Tr className= 'font-Ubuntu-Medium text-black text-sm' key={index} >
                                                        {/* <Td>{index+1}</Td>  */}
                                                        <Td>{item.name}</Td>
                                                        <Td>{item.category}</Td>
                                                        <Td>{item.dosageType}</Td>
                                                        <Td>{item.purchaseDate}</Td>
                                                        <Td>
                                                            <div className=' bg-[#F4433614] flex px-3 justify-center py-2 items-center text-[#29313F] rounded-lg' >
                                                                <div style={{width: '6px', height: '6px'}} className='rounded-full bg-[#F44336] mr-2' /> 
                                                                {item.expiryDate}
                                                            </div>
                                                        </Td>
                                                        <Td> 
                                                            <div className='bg-[#F4433614] flex px-3 justify-center py-2 items-center text-[#29313F] rounded-lg' >
                                                                <div style={{width: '6px', height: '6px'}} className='rounded-full bg-[#F44336] mr-2' /> 
                                                                {item.stock}
                                                            </div>
                                                        </Td>
                                                        <Td>
                                                            <button className='font-Ubuntu-Medium text-xs  bg-[#7123E2] mr-20 text-white rounded-lg h-10 px-3 ' >Modify</button>
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