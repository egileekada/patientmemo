import React from 'react'
import { useQuery } from 'react-query'
import LoaderIcon from '../../LoaderIcon'
import Avatar from '../../../assets/images/user.png'
import { Input, InputGroup, InputLeftElement, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'

export default function ManageUser(props: any) { 
    
    const [name, setName] = React.useState('');  
    const { isLoading, data } = useQuery('user', () =>
        fetch(`https://hospital-memo-api.herokuapp.com/admins`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )    

    return (
        <div className='w-full pt-1' > 
            <div className='w-full px-8 py-4 flex items-center ' > 
                {/* <div className='w-10 h-10 rounded-full cursor-pointer flex items-center justify-center bg-[#7123E214]' >
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 11L1 6L6 1" stroke="#7123E2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div> */}
                {/* <div className='ml-0 absolute'> 
                    <p className='font-Ubuntu-Medium text-lg' >Manage Staff</p> 
                    <p className='font-Ubuntu-Regular text-sm mt-1' >Add and Manage Staff</p> 
                </div>  */}
                <div className=' w-405px relative ' > 
                    <InputGroup >
                        <InputLeftElement 
                        children={
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.82567 1.33398C11.4057 1.33398 14.3177 4.24598 14.3177 7.82598C14.3177 9.51502 13.6695 11.0555 12.6088 12.2116L14.6959 14.2945C14.8913 14.4898 14.8919 14.8058 14.6966 15.0011C14.5993 15.0998 14.4706 15.1485 14.3426 15.1485C14.2153 15.1485 14.0873 15.0998 13.9893 15.0025L11.8769 12.896C10.7657 13.7859 9.35679 14.3187 7.82567 14.3187C4.24567 14.3187 1.33301 11.406 1.33301 7.82598C1.33301 4.24598 4.24567 1.33398 7.82567 1.33398ZM7.82567 2.33398C4.79701 2.33398 2.33301 4.79732 2.33301 7.82598C2.33301 10.8547 4.79701 13.3187 7.82567 13.3187C10.8537 13.3187 13.3177 10.8547 13.3177 7.82598C13.3177 4.79732 10.8537 2.33398 7.82567 2.33398Z" fill="#5F6777"/>
                            </svg>
                        }
                        />
                        <Input  onChange={(e)=> setName(e.target.value)} value={name} fontSize='xs' placeholder="Search for staff by name" border='0px' backgroundColor='#D4D4D4'  /> 
                    </InputGroup> 
                </div>
                <button onClick={()=> props.click(true)} className=' bg-[#7123E2] w-48 h-10 text-white ml-auto font-Ubuntu-Regular rounded-full ' >Register New Staff</button>
            </div>

            {isLoading ?
                <div className='w-full h-full py-20 justify-center item-center flex flex-1' > 
                    <LoaderIcon size='w-20 h-20 mr-1 ' /> 
                </div>
            :
                <div className='w-full py-2 relative' >  
                
                        <Table variant='unstyled' >
                            {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                            <Thead backgroundColor='#4C04B4' borderRadius='8px' >
                                <Tr className='font-Graphik-Medium text-sm h-20 text-white' > 
                                    {/* <Th>Index</Th>  */}
                                    <Th>Name</Th>  
                                    <Th>ID Number</Th>  
                                    <Th>Email</Th>  
                                    <Th>Role</Th>  
                                </Tr>
                            </Thead>
                            <Tbody >
                                {[...data].reverse().map((item: any, index: any)=> {
                                    if(name === ''){
                                        return(
                                            <Tr className={'font-Ubuntu-Medium cursor-pointer text-black text-sm'} key={index} >
                                                {/* <Td>{index+1}</Td>  */}
                                                <Td>
                                                    <div className='flex items-center' >
                                                        <div className='w-14 h-14 rounded-full bg-[#E0E0E0] flex justify-center items-center' >  
                                                            {item.avatarMedia === undefined ? 
                                                                <img src={Avatar} className='w-14 h-14 rounded-full object-cover' alt='avatar' />
                                                                :
                                                                <img src={item.avatarMedia.imageURL} className='w-14 h-14 rounded-full object-cover' alt={item.avatarMedia.asset_id} />
                                                            }
                                                        </div>
                                                        <div>
                                                            <p className='font-Ubuntu-Medium text-sm ml-3' >{item.fullName}</p> 
                                                        </div>
                                                    </div>
                                                </Td> 
                                                <Td>{(item._id).substr(0, 7)}</Td> 
                                                <Td>{item.email}</Td> 
                                                <Td>{item.role}</Td> 
                                            </Tr> 
                                        ) 
                                    } else {
                                        if(item.fullName !== undefined){ 
                                            if(item.fullName.toLowerCase().includes(name)){
                                                return(
                                                    <Tr className={'font-Ubuntu-Medium cursor-pointer text-black text-sm'} key={index} >
                                                        <Td>{index}</Td> 
                                                        <Td>
                                                            <div className='flex items-center' >
                                                                <div className='w-14 h-14 rounded-full bg-[#E0E0E0] flex justify-center items-center' >  
                                                                    {item.avatarMedia === undefined ? 
                                                                        <img src={Avatar} className='w-14 h-14 rounded-full object-cover' alt='avatar' />
                                                                        :
                                                                        <img src={item.avatarMedia.imageURL} className='w-14 h-14 rounded-full object-cover' alt={item.avatarMedia.asset_id} />
                                                                    }
                                                                </div>
                                                                <div>
                                                                    <p className='font-Ubuntu-Medium text-sm ml-3' >{item.fullName}</p> 
                                                                </div>
                                                            </div>
                                                        </Td> 
                                                        <Td>{(item._id).substr(0, 7)}</Td> 
                                                        <Td>{item.email}</Td> 
                                                        <Td>{item.role}</Td> 
                                                    </Tr> 
                                                ) 
                                            }
                                        }
                                        // console.log(item.fullName)
                                    }
                                })}
                            </Tbody> 
                        </Table>
                </div>
            }
        </div>
    )
} 