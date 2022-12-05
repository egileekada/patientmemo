import { InputGroup, InputRightElement, Input, Checkbox, Select, Table, TableContainer, Tbody, Td, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import DateFormat from '../../DateFormat'
import GetUserInfo from '../../GetUserInfo'
import LoaderIcon from '../../LoaderIcon' 

export default function OIChartList() {
 
    const { isLoading, data } = useQuery('OIChartListData', () =>
        fetch(`https://hospital-memo-api.herokuapp.com/nurse/io-chart/${localStorage.getItem("patientId")}`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )     

    const [numb, setNumb] = React.useState(-1) 
    const [showFile, setShowFile] = React.useState(false)
    const [patientIndex, setPatientIndex] = React.useState('')
    const [show, setShow] = React.useState([] as any)

    const Check =(item: any)=> { 
        if(numb !== item){ 
            setNumb(item)
            const obj = [...show, item]
            setShow(obj)
        } 
    } 
 
    return (
        <div className='w-full flex flex-col justify-center items-center  px-16 py-6' >
            

            {show.length === 0 && (
                <>  
                    {showFile && (
                        <>
                            {!isLoading && ( 
                                <div className='w-full h-full justify-center flex mt-14' >
                                    <p className='font-Ubuntu-Medium text-xl' >No Record For This Patient</p>
                                </div>
                            )} 
                        </>
                    )}
                </>
            )}

            {isLoading ?
                <div className='w-full h-full py-20 justify-center item-center flex flex-1' > 
                    <LoaderIcon size='w-20 h-20 mr-1 ' /> 
                </div>
            :
                <div className='w-full mt-6' > 
                    {!data?.data?.createdAt && ( 
                        <p className='font-Ubuntu-Medium text-2xl mt-20 text-center '>No Records Found</p>
                    )}
                    {data?.data?.createdAt && (
                        <div className=' w-full py-6 rounded-md px-2' >
                            <p className=' font-Ubuntu-Medium text-center mb-6 ' >INTAKE</p>
                            <TableContainer>
                                <Table variant='simple'> 
                                    <Thead className=' text-[#000] bg-[#B9B9B9] font-Ubuntu-Medium text-xs ' >
                                        <Tr> 
                                            <Td>
                                                DATE / TIME
                                            </Td>
                                            <Td>
                                                NATURE OF FLUID
                                            </Td>
                                            <Td>
                                                AMOUNT ( IV )
                                            </Td>
                                            <Td>
                                                AMOUNT ( ORAL )
                                            </Td>
                                            <Td>
                                                SIGN
                                            </Td>  
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr className=' text-xs poppins-regular ' > 
                                            <Td className=' text-[#1B2126] font-semibold ' >DD / MM /YYYY   |  HH:MM AM</Td>
                                            <Td className=' text-[#68727B] ' >
                                                
                                            <Input
                                                name="natureOfFluid"
                                                // onChange={formik.handleChange}
                                                // onFocus={() =>
                                                //     formik.setFieldTouched("natureOfFluid", true, true)
                                                // }  
                                                fontSize='sm' placeholder='Enter Nature of fluid' />
                                            </Td>
                                            <Td> 
                                                <Input
                                                    name="natureOfFluid"
                                                    // onChange={formik.handleChange}
                                                    // onFocus={() =>
                                                    //     formik.setFieldTouched("natureOfFluid", true, true)
                                                    // }  
                                                    fontSize='sm' placeholder='Enter Amount ( IV )' />
                                            </Td>
                                            <Td className=' text-[#68727B] ' > 
                                                <Input
                                                    name="natureOfFluid"
                                                    // onChange={formik.handleChange}
                                                    // onFocus={() =>
                                                    //     formik.setFieldTouched("natureOfFluid", true, true)
                                                    // }  
                                                    fontSize='sm' placeholder='Enter Amount ( Oral )' />    
                                            </Td>
                                            <Td className=' text-[#68727B] ' >  
                                                <button className='bg-[#7123E2] py-3  text-white text-sm rounded-lg w-48' >Submit</button>
                                            </Td> 
                                        </Tr> 
                                    </Tbody> 
                                </Table>
                            </TableContainer>
                            {/* <div className='w-full flex pl-2 justify-center ' >  
                                {Check(data?.data?.patient._id)} 
                                    <p id='cubetext' className='font-Ubuntu-Regular text-[#5F6777] mt-1 text-xs' >{DateFormat(data?.data?.createdAt)}</p> 
                            </div>
                            <div className='w-full mt-6' >
                                <div id='cubediv' className='w-full flex items-center py-2 bg-[#F0F5FF] px-3' >
                                    <p id='cubetext' className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >Nature of fluid:</p>
                                    <p id='cubetext' className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' >{data?.data?.natureOfFluid}</p>
                                </div>
                                <div className='w-full flex items-center py-2 px-3' >
                                    <p id='cubetext' className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >Amount:</p>
                                    <p id='cubetext' className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' >{data?.data?.urine}mls</p>
                                </div>
                                <div id='cubediv' className='w-full flex items-center py-2 bg-[#F0F5FF] px-3' >
                                    <p id='cubetext' className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >Urine:</p>
                                    <p id='cubetext' className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' >{data?.data?.urine}m/s</p>
                                </div>
                                <div className='w-full flex items-center py-2 px-3' >
                                    <p id='cubetext' className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >Emesis:</p>
                                    <p id='cubetext' className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' >{data?.data?.emesis}</p>
                                </div>
                                <div id='cubediv' className='w-full flex items-center py-2 bg-[#F0F5FF] px-3' >
                                    <p id='cubetext' className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >BO:</p>
                                    <p id='cubetext' className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' >{data?.data?.BO}</p>
                                </div> 
                                <div className='w-full flex items-center py-2 px-3' >
                                    <p id='cubetext' className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >Nurse</p>
                                    <p id='cubetext' className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' ><GetUserInfo data={data?.data?.nurse._id} /></p>
                                </div> 
                            </div>  */}
                        </div>
                    )} 
                    {data?.data?.createdAt && (
                        <div className=' w-full py-6 rounded-md px-2' >  
                            <p className=' font-Ubuntu-Medium text-center mb-6 ' >OUTPUT</p>
                            <TableContainer>
                                <Table variant='simple'> 
                                    <Thead className=' text-[#000] bg-[#B9B9B9] font-Ubuntu-Medium text-xs ' >
                                        <Tr> 
                                            <Td>
                                                DATE / TIME
                                            </Td>
                                            <Td>
                                                NATURE OF FLUID
                                            </Td>
                                            <Td>
                                                URINE
                                            </Td>
                                            <Td>
                                                EMESIS
                                            </Td>
                                            <Td>
                                                BO
                                            </Td>
                                            <Td>
                                                SIGN
                                            </Td>  
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr className=' text-xs poppins-regular ' > 
                                            <Td className=' text-[#1B2126] font-semibold ' >DD / MM /YYYY   |  HH:MM AM</Td>
                                            <Td className=' text-[#68727B] ' >
                                                
                                            <Input
                                                name="natureOfFluid"
                                                // onChange={formik.handleChange}
                                                // onFocus={() =>
                                                //     formik.setFieldTouched("natureOfFluid", true, true)
                                                // }  
                                                fontSize='sm' placeholder='Enter Nature of fluid' />
                                            </Td>
                                            <Td> 
                                                <Input
                                                    name="natureOfFluid"
                                                    // onChange={formik.handleChange}
                                                    // onFocus={() =>
                                                    //     formik.setFieldTouched("natureOfFluid", true, true)
                                                    // }  
                                                    fontSize='sm' placeholder='Enter Urine' />
                                            </Td>
                                            <Td className=' text-[#68727B] ' > 
                                                <Input
                                                    name="natureOfFluid"
                                                    // onChange={formik.handleChange}
                                                    // onFocus={() =>
                                                    //     formik.setFieldTouched("natureOfFluid", true, true)
                                                    // }  
                                                    fontSize='sm' placeholder='Enter Emesis' />    
                                            </Td>
                                            <Td className=' text-[#68727B] ' > 
                                                <Input
                                                    name="natureOfFluid"
                                                    // onChange={formik.handleChange}
                                                    // onFocus={() =>
                                                    //     formik.setFieldTouched("natureOfFluid", true, true)
                                                    // }  
                                                    fontSize='sm' placeholder='Enter Bo' />    
                                            </Td>
                                            <Td className=' text-[#68727B] ' >  
                                                <button className='bg-[#7123E2] py-3  text-white text-sm rounded-lg w-48' >Submit</button>
                                            </Td> 
                                        </Tr> 
                                    </Tbody> 
                                </Table>
                            </TableContainer>
                            {/* <div className='w-full flex pl-2 justify-center ' >  
                                {Check(data?.data?.patient._id)} 
                                    <p id='cubetext' className='font-Ubuntu-Regular text-[#5F6777] mt-1 text-xs' >{DateFormat(data?.data?.createdAt)}</p> 
                            </div>
                            <div className='w-full mt-6' >
                                <div id='cubediv' className='w-full flex items-center py-2 bg-[#F0F5FF] px-3' >
                                    <p id='cubetext' className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >Nature of fluid:</p>
                                    <p id='cubetext' className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' >{data?.data?.natureOfFluid}</p>
                                </div>
                                <div className='w-full flex items-center py-2 px-3' >
                                    <p id='cubetext' className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >Amount:</p>
                                    <p id='cubetext' className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' >{data?.data?.urine}mls</p>
                                </div>
                                <div id='cubediv' className='w-full flex items-center py-2 bg-[#F0F5FF] px-3' >
                                    <p id='cubetext' className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >Urine:</p>
                                    <p id='cubetext' className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' >{data?.data?.urine}m/s</p>
                                </div>
                                <div className='w-full flex items-center py-2 px-3' >
                                    <p id='cubetext' className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >Emesis:</p>
                                    <p id='cubetext' className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' >{data?.data?.emesis}</p>
                                </div>
                                <div id='cubediv' className='w-full flex items-center py-2 bg-[#F0F5FF] px-3' >
                                    <p id='cubetext' className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >BO:</p>
                                    <p id='cubetext' className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' >{data?.data?.BO}</p>
                                </div> 
                                <div className='w-full flex items-center py-2 px-3' >
                                    <p id='cubetext' className='text-[#5F6777] text-sm font-Ubuntu-Regular ' >Nurse</p>
                                    <p id='cubetext' className='text-sm font-Ubuntu-Medium ml-auto text-[#7123E2]  ' ><GetUserInfo data={data?.data?.nurse._id} /></p>
                                </div> 
                            </div>  */}
                        </div>
                    )} 
                </div> 
            }
        </div>
    )
} 