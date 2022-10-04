import { Input } from '@chakra-ui/input';
import { Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react';
import { useFormik } from 'formik';
import { motion } from 'framer-motion';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup' 
import DateFormat from '../../DateFormat';
import GetUserInfo from '../../GetUserInfo';
import LoaderIcon from '../../LoaderIcon';

export default function Previousmedicalhistory(props: any) {

    const navigate = useNavigate()
    const [loading, setLoading] = React.useState(false); 

    console.log(props.data["prevMedHistory.dateOfBirth"]); 

    return (
        <div className='w-full h-full px-12 py-10 font-Ubuntu-Regular' > 
            <p className='text-lg font-Ubuntu-Bold' >Previous Medical History</p>
            <div className='w-full flex mt-8' >
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Heart Disease</p>
                    <Input value={props.data["prevMedHistory.heartDisease"]}  onChange={(e)=> props.setData({...props.data, "prevMedHistory.heartDisease": e.target.value})} 
                        fontSize='sm' placeholder='Heart Disease' />
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Kidney Diseases</p>
                    <Input value={props.data["prevMedHistory.kidneyDisease"]}   onChange={(e)=> props.setData({...props.data, "prevMedHistory.kidneyDisease": e.target.value})} 
                        fontSize='sm' placeholder='Kidney Diseases' />
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Chest Disease</p>
                    <Input value={props.data["prevMedHistory.chestDisease"]}   onChange={(e)=> props.setData({...props.data, "prevMedHistory.chestDisease": e.target.value})} 
                        fontSize='sm' placeholder='Chest Disease' />
                </div>
            </div>
            <div className='w-full flex mt-5' >
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Operations</p>
                    <Input value={props.data["prevMedHistory.operations"]}  onChange={(e)=> props.setData({...props.data, "prevMedHistory.operations": e.target.value})} 
                        fontSize='sm' />
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >G.I.T</p>
                    <Input value={props.data["prevMedHistory.GIT"]}   onChange={(e)=> props.setData({...props.data, "prevMedHistory.GIT": e.target.value})} 
                        fontSize='sm' />
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Endocrine</p>
                    <Input value={props.data["prevMedHistory.endocrine"]}   onChange={(e)=> props.setData({...props.data, "prevMedHistory.endocrine": e.target.value})} 
                        fontSize='sm' />
                </div>
            </div>
            <div className='w-full flex mt-5' >
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >NIL</p>
                    <Input value={props.data["prevMedHistory.NIL"]}   onChange={(e)=> props.setData({...props.data, "prevMedHistory.NIL": e.target.value})} 
                        fontSize='sm' />
                </div>
                <div className='mr-2 w-full' />
                <div className='mr-2 w-full' />
            </div> 

            <p className='text-lg font-Ubuntu-Bold mt-10' >Previous Pregnancies:</p>
            <div className='w-full flex mt-8' >
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Total</p>
                    <Input value={props.data["prevPregnancy.total"]}  onChange={(e)=> props.setData({...props.data, "prevPregnancy.total": e.target.value})} 
                        fontSize='sm' />
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >No. of living Children</p>
                    <Input value={props.data["prevPregnancy.noOfLivingChildren"]}   onChange={(e)=> props.setData({...props.data, "prevPregnancy.noOfLivingChildren": e.target.value})} 
                        fontSize='sm' />
                </div>
                <div className='mr-2 w-full' />
            </div>
            <div className='w-full mt-8' >
                <Table variant='unstyled' >
                    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                    <Thead>
                        <Tr className='font-Graphik-Medium text-sm' >
                            <Th>Date of Birth</Th>  
                            <Th>Duration of pregnacy</Th>  
                            <Th>Pregnancy Labour and Puerperium</Th> 
                            <Th>Birth Weight</Th>  
                            <Th>Baby Sex</Th>  
                        </Tr>
                    </Thead>
                    <Tbody > 
                        <Tr>
                            <Td> 
                                <Input value={props.data["prevPregnancy.dateOfBirth"]}  onChange={(e)=> props.setData({...props.data, "prevPregnancy.dateOfBirth": e.target.value})}  className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                            </Td> 
                            <Td>  
                                <Input value={props.data["prevPregnancy.durationOfPregnancy"]}  onChange={(e)=> props.setData({...props.data, "prevPregnancy.durationOfPregnancy": e.target.value})}  className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                            </Td> 
                            <Td>
                                <Input value={props.data["prevPregnancy.pregLabourAndPuerperium"]}  onChange={(e)=> props.setData({...props.data, "prevPregnancy.pregLabourAndPuerperium": e.target.value})}  className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                            </Td> 
                            <Td>
                                <Input value={props.data["prevPregnancy.birthWeight"]}  onChange={(e)=> props.setData({...props.data, "prevPregnancy.birthWeight": e.target.value})}  className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                            </Td>  
                            <Td>
                                <Input value={props.data["prevPregnancy.babySex"]}  onChange={(e)=> props.setData({...props.data, "prevPregnancy.babySex": e.target.value})}  className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                            </Td>  
                        </Tr>  
                        {/* <Tr>
                            <Td> 
                                <Input value={props.data["prevMedHistory.total"]} className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                            </Td> 
                            <Td>  
                                <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                            </Td> 
                            <Td>
                                <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                            </Td> 
                            <Td>
                                <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                            </Td>  
                            <Td>
                                <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                            </Td>  
                        </Tr>  
                        <Tr>
                            <Td> 
                                <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                            </Td> 
                            <Td>  
                                <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                            </Td> 
                            <Td>
                                <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                            </Td> 
                            <Td>
                                <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                            </Td>  
                            <Td>
                                <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                            </Td>  
                        </Tr>   */}
                    </Tbody> 
                </Table>
            </div>
            <div className='w-full flex pb-10 py-4' >
                <button onClick={()=> props.next(1)}  className='  py-3 w-36 ml-auto text-[#A5B0C1] text-sm mt-4 rounded-full' >Back</button>
                {loading ?  
                    <button className='bg-[#7123E2] h-12 flex justify-center items-center w-48  text-white text-sm mt-6 rounded-full' >
                        <div className='flex items-center ' >
                            <LoaderIcon size='w-10 h-10 mr-1 ' /> 
                            Loading
                        </div> 
                    </button>
                    :
                    <button onClick={()=> props.next(3) } className='bg-[#7123E2] py-3 w-48  text-white text-sm mt-6 rounded-full' >Next</button>
                }
            </div>
        </div>
    )
} 