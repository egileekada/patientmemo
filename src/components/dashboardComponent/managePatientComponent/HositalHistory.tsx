import { Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react'
import React from 'react'


const Information = [
    { 
      data: '...', 
    }, 
    { 
      data: '...', 
    }, 
    { 
      data: '...', 
    },  
]

export default function HositalHistory(props: any) {
    return (
        <div className='w-full py-12 px-20' >
            <p className='font-Ubuntu-Bold text-xl text-[#121212]' >Hospital History</p>
            <div className='bg-white w-full py-6' > 
                <Table variant='striped' colorScheme='blue' >
                    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                    <Thead>
                        <Tr className='font-Graphik-Medium text-sm' >
                            <Th>Date Attended or Admitted</Th>  
                            <Th>Reffered by</Th>  
                            <Th>Physcian or surgeon</Th> 
                            <Th>Ward or clinic</Th> 
                            <Th>Date Discharged</Th>  
                            <Th>Discharged to</Th> 
                            <Th>Cured Imporved I.S.O ward Died</Th>
                            {/* <Th>VENDOR</Th>  
                            <Th>STATUS</Th> 
                            <Th>ACTION</Th>
                            <Th>VENDOR</Th>  
                            <Th>STATUS</Th> 
                            <Th>ACTION</Th> */}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {Information.map((item, index)=> {
                            return(
                                <Tr className='font-Graphik-Regular text-sm' key={index} >
                                    <Td>{item.data}</Td> 
                                    <Td>{item.data}</Td> 
                                    <Td>{item.data}</Td> 
                                    <Td>{item.data}</Td> 
                                    <Td>{item.data}</Td> 
                                    <Td>{item.data}</Td> 
                                    <Td>{item.data}</Td> 
                                </Tr> 
                            )
                        })}
                    </Tbody> 
                </Table>
            </div>
            <p className='font-Ubuntu-Bold text-xl mt-8 text-[#121212]' >Diagnosis</p>
            <div className='bg-white w-full py-6' > 
                <Table variant='striped' colorScheme='blue' >
                    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                    <Thead>
                        <Tr className='font-Graphik-Medium text-sm' > 
                            <Th>Date</Th>  
                            <Th>Provisional Diagnosis</Th> 
                            <Th>Final Daignosis</Th>
                            <Th>Code Number</Th>   
                        </Tr>
                    </Thead>
                    <Tbody>
                        {Information.map((item, index)=> {
                            return(
                                <Tr className='font-Graphik-Regular text-sm' key={index} >
                                    <Td>{item.data}</Td> 
                                    <Td>{item.data}</Td> 
                                    <Td>{item.data}</Td> 
                                    <Td>{item.data}</Td>  
                                </Tr> 
                            )
                        })}
                    </Tbody> 
                </Table>
            </div>
            <p className='font-Ubuntu-Bold text-xl mt-8 text-[#121212]' >Operations</p>
            <div className='bg-white w-full py-6' > 
                <Table variant='striped' colorScheme='blue' >
                    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                    <Thead>
                        <Tr className='font-Graphik-Medium text-sm' > 
                            <Th>Date</Th>  
                            <Th>Surgeon</Th> 
                            <Th>Operation</Th>
                            <Th>Code Number</Th>   
                        </Tr>
                    </Thead>
                    <Tbody>
                        {Information.map((item, index)=> {
                            return(
                                <Tr className='font-Graphik-Regular text-sm' key={index} >
                                    <Td>{item.data}</Td> 
                                    <Td>{item.data}</Td> 
                                    <Td>{item.data}</Td> 
                                    <Td>{item.data}</Td>  
                                </Tr> 
                            )
                        })}
                    </Tbody> 
                </Table>
            </div>
            <div className='w-full flex' >
                <button className='bg-[#7123E2] py-3 w-48 ml-auto text-white text-sm mt-12 rounded-full' >Request Edit Access</button>
            </div>
        </div>
    )
} 