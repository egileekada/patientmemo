import { Input, InputGroup, InputLeftElement, Select, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import DateFormat from '../components/DateFormat'
import GetUserInfo from '../components/GetUserInfo'
import * as yup from 'yup'
import { useFormik } from 'formik';  
import { motion } from 'framer-motion'
import * as axios from 'axios'   
import LoaderIcon from '../components/LoaderIcon'

export default function PharmacyTab() {
    
    const [name, setName] = React.useState('')

    const data =[
        {
            name: 'Paracetamol',
            category: 'Syrup',
            dosage: 'Syrup',
            purchase: '04, Jul 2022',
            date: '02, Dec 2028',
            stock: '344'
        },
        {
            name: 'Paracetamol',
            category: 'Syrup',
            dosage: 'Syrup',
            purchase: '04, Jul 2022',
            date: '02, Dec 2028',
            stock: '344'
        },
        {
            name: 'Paracetamol',
            category: 'Syrup',
            dosage: 'Syrup',
            purchase: '04, Jul 2022',
            date: '02, Dec 2028',
            stock: '344'
        },
        {
            name: 'Paracetamol',
            category: 'Syrup',
            dosage: 'Syrup',
            purchase: '04, Jul 2022',
            date: '02, Dec 2028',
            stock: '344'
        },
        {
            name: 'Paracetamol',
            category: 'Syrup',
            dosage: 'Syrup',
            purchase: '04, Jul 2022',
            date: '02, Dec 2028',
            stock: '344'
        }
    ]

    const [more, setMore] = React.useState(false)

    const [tab, setTab] = React.useState(0)
    const [showModal, setShowModal] = React.useState(false) 
    const [loading, setLoading] = React.useState(false);
    const navigate = useNavigate()

    const [ selectedFiles, setSelectedFiles ] = React.useState({}as any);  
    const userData: any = JSON.parse(localStorage.getItem('userData')+'')

    const [image, SetImage] = React.useState('');   

    const handleImageChange = (e: any ) => {

        const selected = e.target.files[0]; 
        const TYPES = ["image/png", "image/jpg", "image/jpeg", "image/svg" ];        
        if (selected && TYPES.includes(selected.type)) {
            SetImage(selected)
            const reader: any = new FileReader();
            reader.onloadend= () => {  
                setSelectedFiles(reader.result)
            }
            reader.readAsDataURL(selected)
        } else {
            alert('File Type .svg Cannot be added')
        }   
    } 
     
    const loginSchema = yup.object({ 
        name: yup.string().required('Required'),
        milligram: yup.string().required('Required'),
        qty: yup.string().required('Required'),   
    })    
 
    // formik
    const formik = useFormik({
        initialValues: {name: '', milligram: '',qty: ''},
        validationSchema: loginSchema,
        onSubmit: () => {},
    });    

    const sumbit =async(item: any)=> {
        setLoading(true)
        if (!formik.dirty) {
            alert('You have to fill in th form to continue');
            return;
        }else if (!formik.isValid) {
            alert('You have to fill in the form correctly to continue');
            return;
        }else {
            try {
            
                let formData = new FormData()  

                formData.append('name', formik.values.name)
                formData.append('milligram', formik.values.milligram) 
                formData.append('qty', formik.values.qty)   
                formData.append('image', item)    
        
                await axios.default.post(`https://hospital-memo-api.herokuapp.com/drugs`, formData, {
                    headers: { 'content-type': 'application/json',
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                }})       

                setShowModal(false)
                setTab(0)
                SetImage('')
                setSelectedFiles({}as any)
                setLoading(false)
                
            } catch (error) { 
                return error
            }
          }
    }

    return (
        <div className='w-full h-full relative flex flex-col' > 
            <div className='w-full relative px-12 border-b flex items-center border-[#D7D0DF]' >  
                <p className='font-Ubuntu-Medium  text-lg absolute ' >Manage Pharmacy</p> 
                <div className='w-96 mx-auto py-4' >
                            <InputGroup >
                                <InputLeftElement 
                                children={
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.82567 1.33398C11.4057 1.33398 14.3177 4.24598 14.3177 7.82598C14.3177 9.51502 13.6695 11.0555 12.6088 12.2116L14.6959 14.2945C14.8913 14.4898 14.8919 14.8058 14.6966 15.0011C14.5993 15.0998 14.4706 15.1485 14.3426 15.1485C14.2153 15.1485 14.0873 15.0998 13.9893 15.0025L11.8769 12.896C10.7657 13.7859 9.35679 14.3187 7.82567 14.3187C4.24567 14.3187 1.33301 11.406 1.33301 7.82598C1.33301 4.24598 4.24567 1.33398 7.82567 1.33398ZM7.82567 2.33398C4.79701 2.33398 2.33301 4.79732 2.33301 7.82598C2.33301 10.8547 4.79701 13.3187 7.82567 13.3187C10.8537 13.3187 13.3177 10.8547 13.3177 7.82598C13.3177 4.79732 10.8537 2.33398 7.82567 2.33398Z" fill="#5F6777"/>
                                    </svg>
                                }
                                />
                                <Input fontSize='xs' placeholder="Search for patient by name, Blood group, location" border='0px' backgroundColor='#F6F7F9'  /> 
                            </InputGroup> 
                </div>
                <div className='right-12 absolute  ml-auto' >
                    <button className='font-Ubuntu-Medium text-xs border border-[#7123E2] text-[#7123E2] rounded-lg h-10 px-4 mr-3 ' >Dispense Medicine</button>
                    <button onClick={()=> setShowModal(true)} className='font-Ubuntu-Medium text-xs  bg-[#7123E2] mr-20 text-white rounded-lg h-10 px-6 ' >New Medicine</button>
                    <button onClick={()=> setMore((prev)=> !prev)} className='font-Ubuntu-Medium ml-3 absolute right-4 text-xs border border-[#7123E2] text-[#7123E2]  rounded-lg h-10 px-3 ' >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 4C8.82843 4 9.5 3.32843 9.5 2.5C9.5 1.67157 8.82843 1 8 1C7.17157 1 6.5 1.67157 6.5 2.5C6.5 3.32843 7.17157 4 8 4Z" fill="url(#paint0_linear_960_1441)"/>
                            <path d="M8 9.5C8.82843 9.5 9.5 8.82843 9.5 8C9.5 7.17157 8.82843 6.5 8 6.5C7.17157 6.5 6.5 7.17157 6.5 8C6.5 8.82843 7.17157 9.5 8 9.5Z" fill="url(#paint1_linear_960_1441)"/>
                            <path d="M8 15C8.82843 15 9.5 14.3284 9.5 13.5C9.5 12.6716 8.82843 12 8 12C7.17157 12 6.5 12.6716 6.5 13.5C6.5 14.3284 7.17157 15 8 15Z" fill="url(#paint2_linear_960_1441)"/>
                            <defs>
                                <linearGradient id="paint0_linear_960_1441" x1="-5.89941" y1="0.728669" x2="-3.8704" y2="11.3494" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#7123E2"/>
                                    <stop offset="1" stop-color="#FF8811"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_960_1441" x1="-5.89941" y1="6.22867" x2="-3.8704" y2="16.8494" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#7123E2"/>
                                    <stop offset="1" stop-color="#FF8811"/>
                                </linearGradient>
                                <linearGradient id="paint2_linear_960_1441" x1="-5.89941" y1="11.7287" x2="-3.8704" y2="22.3494" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#7123E2"/>
                                    <stop offset="1" stop-color="#FF8811"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </button>
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
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.40169 10.0912C6.27369 10.0912 6.14569 10.0425 6.04836 9.94455C5.85302 9.74921 5.85302 9.43321 6.04836 9.23788L9.243 6.04323C9.43834 5.8479 9.75434 5.8479 9.94967 6.04323C10.145 6.23856 10.145 6.55456 9.94967 6.74988L6.755 9.94455C6.65769 10.0425 6.52969 10.0912 6.40169 10.0912Z" fill="#262F56"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.59758 10.0931C9.46958 10.0931 9.34158 10.0444 9.24425 9.9464L6.04689 6.7484C5.85156 6.5531 5.85156 6.2371 6.04689 6.04176C6.24289 5.84643 6.55889 5.84643 6.75358 6.04176L9.95092 9.23973C10.1462 9.43507 10.1462 9.75107 9.95092 9.9464C9.85358 10.0444 9.72492 10.0931 9.59758 10.0931Z" fill="#262F56"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.10992 2.33325C3.42325 2.33325 2.33325 3.48859 2.33325 5.27725V10.7226C2.33325 12.5113 3.42325 13.6666 5.10992 13.6666H10.8886C12.5759 13.6666 13.6666 12.5113 13.6666 10.7226V5.27725C13.6666 3.48859 12.5759 2.33325 10.8893 2.33325H5.10992ZM10.8886 14.6666H5.10992C2.85059 14.6666 1.33325 13.0813 1.33325 10.7226V5.27725C1.33325 2.91859 2.85059 1.33325 5.10992 1.33325H10.8893C13.1486 1.33325 14.6666 2.91859 14.6666 5.27725V10.7226C14.6666 13.0813 13.1486 14.6666 10.8886 14.6666Z" fill="#262F56"/>
                                </svg>
                                <p className=' font-Ubuntu-Medium text-[#262F56] ml-3 text-sm' >Medicine History</p>
                            </div>
                            <div className='flex items-center cursor-pointer' >
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.40169 10.0912C6.27369 10.0912 6.14569 10.0425 6.04836 9.94455C5.85302 9.74921 5.85302 9.43321 6.04836 9.23788L9.243 6.04323C9.43834 5.8479 9.75434 5.8479 9.94967 6.04323C10.145 6.23856 10.145 6.55456 9.94967 6.74988L6.755 9.94455C6.65769 10.0425 6.52969 10.0912 6.40169 10.0912Z" fill="#262F56"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.59758 10.0931C9.46958 10.0931 9.34158 10.0444 9.24425 9.9464L6.04689 6.7484C5.85156 6.5531 5.85156 6.2371 6.04689 6.04176C6.24289 5.84643 6.55889 5.84643 6.75358 6.04176L9.95092 9.23973C10.1462 9.43507 10.1462 9.75107 9.95092 9.9464C9.85358 10.0444 9.72492 10.0931 9.59758 10.0931Z" fill="#262F56"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.10992 2.33325C3.42325 2.33325 2.33325 3.48859 2.33325 5.27725V10.7226C2.33325 12.5113 3.42325 13.6666 5.10992 13.6666H10.8886C12.5759 13.6666 13.6666 12.5113 13.6666 10.7226V5.27725C13.6666 3.48859 12.5759 2.33325 10.8893 2.33325H5.10992ZM10.8886 14.6666H5.10992C2.85059 14.6666 1.33325 13.0813 1.33325 10.7226V5.27725C1.33325 2.91859 2.85059 1.33325 5.10992 1.33325H10.8893C13.1486 1.33325 14.6666 2.91859 14.6666 5.27725V10.7226C14.6666 13.0813 13.1486 14.6666 10.8886 14.6666Z" fill="#262F56"/>
                                </svg>
                                <p className=' font-Ubuntu-Medium text-[#262F56] ml-3 text-sm' >Stock Report</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className='bg-white w-full py-6 px-12' > 
                <Table variant='unstyled' >
                    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                    <Thead>
                        <Tr className='font-Graphik-Medium h-20 bg-[#7123E2] text-white text-sm' >
                            <Th>S/N</Th>  
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
                        {data.map((item: any, index: any)=> {
                            return(
                                <Tr className= 'font-Ubuntu-Medium text-black text-sm' key={index} >
                                    <Td>{index+1}</Td> 
                                    <Td>{item.name}</Td>
                                    <Td>{item.category}</Td>
                                    <Td>{item.dosage}</Td>
                                    <Td>{item.purchase}</Td>
                                    <Td>
                                        <div className='bg-[#52EF2B1C] flex px-3 justify-center py-2 items-center text-[#29313F] rounded-lg' >
                                            <div style={{width: '6px', height: '6px'}} className='rounded-full bg-[#1F670D] mr-2' /> 
                                            {item.date}
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
                        })}
                    </Tbody> 
                </Table>
            </div>

            {showModal ? 
                <div className='w-full flex items-center justify-center' >
                    <div style={{ boxShadow: '0px 3px 34px 0px #5F67771C'}} className='  font-Ubuntu-Regular absolute h-auto px-8 rounded-lg py-8 -top-8 border border-[#E0E0E0] z-50 bg-white right-auto mx-auto left-auto  ' > 
                        <div className='flex items-center' >
                            <p className='font-Ubuntu-Medium text-lg ' >New Medicine</p>
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
                        <div className=' w-full mr-2 mt-8' >
                            <p className='text-xs mb-2 font-Ubuntu-Medium' >Medicine Name</p>
                            <Input  
                                name="name"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("name", true, true)
                                }  
                                fontSize='sm'  placeholder='Medicine Name'/>
                            <div className="w-full h-auto pt-2">
                                {formik.touched.name && formik.errors.name && (
                                    <motion.p
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                    >
                                        {formik.errors.name}
                                    </motion.p>
                                )}
                            </div> 
                        </div> 
                        <div className='w-full flex mt-3' >
                            <div style={{width: '210px'}} className='mr-2' >
                                <p className='text-xs mb-2 font-Ubuntu-Medium' >Category</p>
                                <Select 
                                    name="milligram"
                                    onChange={formik.handleChange}
                                    onFocus={() =>
                                        formik.setFieldTouched("milligram", true, true)
                                    }  
                                    placeholder='Select Drugs Categories'
                                    fontSize='sm'> 
                                    <option>Anti infectives</option>
                                    <option>Analgesic</option>
                                    <option>Antiallergic</option>
                                    <option>Antihypertensives</option>
                                    <option>Antimalarial</option>
                                    <option>Blood builders</option>
                                    <option>Antiulcer</option>
                                    <option>Anaesthetics</option>
                                    <option>Antihelmintics</option>
                                    <option>Antitussives</option>
                                    <option>Multivitamins</option>
                                    <option>Topicals</option>
                                    <option>Drips</option>
                                    <option>Sundries</option>
                                    <option>Hormonal drugs</option>
                                </Select>
                                <div className="w-full h-auto pt-2">
                                    {formik.touched.milligram && formik.errors.milligram && (
                                        <motion.p
                                            initial={{ y: -100, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                        >
                                            {formik.errors.milligram}
                                        </motion.p>
                                    )}
                                </div> 
                            </div>
                            <div style={{width: '210px'}} className='mr-2' >
                                <p className='text-xs mb-2 font-Ubuntu-Medium' >Dosage type</p>
                                <Select  
                                    name="qty"
                                    onChange={formik.handleChange}
                                    onFocus={() =>
                                        formik.setFieldTouched("qty", true, true)
                                    }  
                                    fontSize='sm'> 
                                    <option>Injections</option>
                                    <option>Infusion</option>
                                    <option>Tablet</option>
                                    <option>Capsule</option>
                                    <option>Syrup</option>
                                    <option>Pessaries</option>
                                    <option>Suppository</option>
                                    <option>Suspension</option>
                                </Select>
                                <div className="w-full h-auto pt-2">
                                    {formik.touched.qty && formik.errors.qty && (
                                        <motion.p
                                            initial={{ y: -100, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                        >
                                            {formik.errors.qty}
                                        </motion.p>
                                    )}
                                </div> 
                            </div> 
                        </div>
                        <div className='w-full flex mt-3' >
                            <div style={{width: '210px'}} className='mr-2' >
                                <p className='text-xs mb-2 font-Ubuntu-Medium' >Purchase Date</p>
                                <Input 
                                    name="milligram"
                                    onChange={formik.handleChange}
                                    onFocus={() =>
                                        formik.setFieldTouched("milligram", true, true)
                                    }  
                                    fontSize='sm'/>
                                <div className="w-full h-auto pt-2">
                                    {formik.touched.milligram && formik.errors.milligram && (
                                        <motion.p
                                            initial={{ y: -100, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                        >
                                            {formik.errors.milligram}
                                        </motion.p>
                                    )}
                                </div> 
                            </div>
                            <div style={{width: '210px'}} className='mr-2' >
                                <p className='text-xs mb-2 font-Ubuntu-Medium' >Expiry Date</p>
                                <Input  
                                    name="qty"
                                    onChange={formik.handleChange}
                                    onFocus={() =>
                                        formik.setFieldTouched("qty", true, true)
                                    }  
                                    fontSize='sm' />
                                <div className="w-full h-auto pt-2">
                                    {formik.touched.qty && formik.errors.qty && (
                                        <motion.p
                                            initial={{ y: -100, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                        >
                                            {formik.errors.qty}
                                        </motion.p>
                                    )}
                                </div> 
                            </div> 
                        </div>
                        <div className='w-full flex mt-3' >
                            <div style={{width: '210px'}} className='mr-2' >
                                <p className='text-xs mb-2 font-Ubuntu-Medium' >Stock</p>
                                <Input 
                                    name="milligram"
                                    onChange={formik.handleChange}
                                    onFocus={() =>
                                        formik.setFieldTouched("milligram", true, true)
                                    }  
                                    fontSize='sm'/>
                                <div className="w-full h-auto pt-2">
                                    {formik.touched.milligram && formik.errors.milligram && (
                                        <motion.p
                                            initial={{ y: -100, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                        >
                                            {formik.errors.milligram}
                                        </motion.p>
                                    )}
                                </div> 
                            </div>
                            <div style={{width: '210px'}} className='mr-2' >
                                <p className='text-xs mb-2 font-Ubuntu-Medium' >Limit (%)</p>
                                <Input  
                                    name="qty"
                                    onChange={formik.handleChange}
                                    onFocus={() =>
                                        formik.setFieldTouched("qty", true, true)
                                    }  
                                    fontSize='sm' />
                                <div className="w-full h-auto pt-2">
                                    {formik.touched.qty && formik.errors.qty && (
                                        <motion.p
                                            initial={{ y: -100, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                        >
                                            {formik.errors.qty}
                                        </motion.p>
                                    )}
                                </div> 
                            </div> 
                        </div>
                        {loading ?  
                            <button className='bg-[#7123E2] h-12 flex justify-center items-center w-full  text-white text-sm mt-6 rounded' >
                                <div className='flex items-center ' >
                                    <LoaderIcon size='w-10 h-10 mr-1 ' /> 
                                    Loading
                                </div> 
                            </button>
                            :
                            <button className='text-xs h-12 items-center rounded bg-[#7123E2] mt-8 w-full flex justify-center text-white font-Ubuntu-Medium' >Upload Medicine</button>
                        }
                        {/* <button onClick={()=> setShowModal(false)} className='text-xs py-3 rounded bg-[#7123E2] mt-8 w-full text-white font-Ubuntu-Medium' >I have carefully noted the details of the blood donated & the donor</button> */}
                    </div>
                    <div className='fixed flex-1 inset-0 bg-black opacity-25 ' />
                </div>
            :null} 
        </div>
    )
} 