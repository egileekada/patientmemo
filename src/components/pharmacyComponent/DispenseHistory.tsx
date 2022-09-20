import { InputGroup, InputLeftElement, Input, Table, Tbody, Th, Thead, Tr, Td } from '@chakra-ui/react'; 
import React from 'react'
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import DateFormat from '../DateFormat'; 
import PharmImage from '../../assets/images/PharmacyImage.png'

export default function DispenseHistory() {
     
    const navigate = useNavigate()    
    const [requestId, setRequestID] = React.useState(-1) 
    const [dataValue, setDataValue] = React.useState({} as any)  
    const [loading, setLoading] = React.useState(false)  
    const [dataItem, setDataItem] = React.useState([] as any)  
    const [name, setName] = React.useState('')   
    
    const { isLoading, data } = useQuery('drugs', () =>
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

    const ClickHandler =(index: any, item: any)=> {
        setRequestID(index)
        setDataValue(item)
        setLoading(true)
        fetch(`https://hospital-memo-api.herokuapp.com/pharmacy/drugs/dispense/${item._id}`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => response.json())
        .then(data => {    
            if(data.length === 0 ){ 
                setDataItem([] as any)
            } else {
                data.map((item: any, index: any) => {
                    dataItem.splice(index, 1, item);
                })
            }
            setLoading(false)
        })
        .catch((error) => {
            console.error('Error:', error); 
        },);   
        console.log(dataItem)
    }   


    return (
        <div className='w-full  ' >
            {/* <Modal message={message} modal={modal} /> */}
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
                        <p className='font-Ubuntu-Medium text-lg text-white' >Medicine History</p>
                        {/* <p className='font-Ubuntu-Regular text-[#5F6777] mt-1 text-xs' >12:00pm, 12, Jun 22</p> */}
                    </div> 
                </div>
            </div>
            <div style={{ height: '69vh'}} className='w-full flex flex-1 overflow-y-hidden px-12 py-12' >
                <div className='w-2/5 overflow-auto  mr-4' >
                    <div style={{ boxShadow: '0px 3px 34px 0px #7123E229'}} className=' w-auto h-full mr-2  py-8 rounded-lg' >
                        <p className=' font-Ubuntu-Medium text-lg px-6' >All Medicine</p> 
                        <div className='w-full mx-auto py-4 px-6' >
                        {/* <FindPatient show={setShowFile} name={setName} numb={setNumb} array={setShow} index={setPatientIndex} nurse={true} /> */}
                            <InputGroup >
                                <InputLeftElement 
                                children={
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.82567 1.33398C11.4057 1.33398 14.3177 4.24598 14.3177 7.82598C14.3177 9.51502 13.6695 11.0555 12.6088 12.2116L14.6959 14.2945C14.8913 14.4898 14.8919 14.8058 14.6966 15.0011C14.5993 15.0998 14.4706 15.1485 14.3426 15.1485C14.2153 15.1485 14.0873 15.0998 13.9893 15.0025L11.8769 12.896C10.7657 13.7859 9.35679 14.3187 7.82567 14.3187C4.24567 14.3187 1.33301 11.406 1.33301 7.82598C1.33301 4.24598 4.24567 1.33398 7.82567 1.33398ZM7.82567 2.33398C4.79701 2.33398 2.33301 4.79732 2.33301 7.82598C2.33301 10.8547 4.79701 13.3187 7.82567 13.3187C10.8537 13.3187 13.3177 10.8547 13.3177 7.82598C13.3177 4.79732 10.8537 2.33398 7.82567 2.33398Z" fill="#5F6777"/>
                                    </svg>
                                }
                                />
                                <Input onChange={(e)=> setName(e.target.value)} fontSize='xs' placeholder="Search for Drugs by name" border='0px' backgroundColor='#F6F7F9'  /> 
                            </InputGroup> 
                        </div>
                            {!isLoading && (
                                <>
                                    {[...data.data].reverse().filter((item: any)=> item.category).map((item: any, index: any)=> { 
                                        let expired = new Date(item.expiryDate)
                                        let diff = new Date().getTime() - expired.getTime()
                                        if(diff < 0){
                                            if((item.name).toLowerCase().includes(name.toLowerCase())){ 
                                                return(
                                                    <div onClick={()=> ClickHandler(index, item)} className={requestId === index ? 'px-6 mb-4 py-4 flex text-white items-center bg-[#7123E2] cursor-pointer' : ' cursor-pointer items-center px-6 mb-4 py-4 flex bg-white'} >
                                                        <div className='flex flex-col' >  
                                                                <p className='font-Ubuntu-Medium' >{item.name}</p>
                                                                <p className='font-Ubuntu-Regular mt-3 text-xs' >{item.category}</p> 
                                                        </div>
                                                        <div className='flex flex-col ml-auto' >  
                                                                <p className='font-Ubuntu-Regular text-right text-xs' >Stock: {item.stock}</p>
                                                                <p className='font-Ubuntu-Regular mt-3 text-sm flex items-center ' >Date: <span className='ml-2' >{DateFormat(item.updatedAt)}</span> </p> 
                                                        </div>
                                                        {/* <p className='font-Ubuntu-Regular ml-auto text-sm mt-2' >{}</p> */}
                                                    </div>
                                                ) 
                                            } 
                                        }
                                    })}
                                </>
                            )}
                    </div>
                </div>
                <div className=' flex-1 overflow-auto' >

                {dataValue.category !== undefined && ( 
                    <div style={{ boxShadow: '0px 3px 34px 0px #7123E229'}} className=' flex-1 mr-2 rounded-lg' >
                        <div style={{background: 'linear-gradient(169.18deg, #7123E2 -73.89%, #FF8811 234.2%)'}} className='w-full rounded-t-lg px-4 pb-1 pt-5 ' >
                            <div className='px-6 mb-4 py-2 flex items-center text-white ' >
                                <div className='flex flex-col' >  
                                    <p className='font-Ubuntu-Medium' >{dataValue.name}</p>
                                    <p className='font-Ubuntu-Regular text-xs mt-8' >Category:<span className=' ml-1' >{dataValue.category}</span></p> 
                                    <p className='font-Ubuntu-Regular text-xs mt-2'>Dosage types:<span className='ml-1' >{dataValue.category}</span></p>
                                </div>
                                <div className='flex flex-col ml-auto' >  
                                    <div className='bg-[#FFFFFF80] rounded p-1 w-fit px-2 ml-auto flex justify-center ' >
                                        <p className='font-Ubuntu-Regular text-sm flex ' >Expiration Date: {DateFormat(dataValue.expiryDate)}</p>
                                    </div>
                                    <p className='font-Ubuntu-Regular text-sm mt-8 flex' >Purchase Date: <span className=' ml-1 ' >{DateFormat(dataValue.expiryDate)}</span></p> 
                                    <span className='font-Ubuntu-Regular text-xs mt-1 flex' >Stock:  <span className=' ml-1 ' >{dataValue.stock}</span></span>
                                </div>
                            </div>
                        </div>
                        <div className='py-8' > 
                            <Table variant='unstyled' >
                                {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                                 
                                <Tbody >
                                    {!loading && (
                                        <> 
                                            {dataItem.map((item: any, index: any) => {
                                                return (   
                                                    <Tr key={index} >
                                                        <Td> 
                                                            <div className='flex items-center w-full' > 
                                                                <div className=' w-14 h-14 rounded-full bg-yellow-300' />
                                                                
                                                                <div className=' ml-3' > 
                                                                    {/* <p className='font-Ubuntu-Medium' >{item.madeBy.title+' '+item.madeBy.name}</p> */}
                                                                    <p className='font-Ubuntu-Regular text-sm' >{item.patient.firstName+' '+item.patient.lastName}</p>
                                                                </div>  
                                                            </div>
                                                        </Td>
                                                        <Td className='text-sm' >{item.qty}</Td>
                                                        <Td>{DateFormat(item.updatedAt)}</Td>
                                                    </Tr>
                                                )
                                            })}
                                        </>
                                    )}
                                </Tbody>
                                
                            </Table>
                        </div>
                    </div>
                )}
                </div>
            </div>  
        </div>
    )
} 