import React from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik';  
import * as axios from 'axios'   
import { motion } from 'framer-motion';
import { Input, Select } from '@chakra-ui/react';
import LoaderIcon from '../../../../../LoaderIcon';

export default function AddMedicine() {
     
    const [loading, setLoading] = React.useState(false);
    const loginSchema = yup.object({ 
        category: yup.string().required('Required'),
        name: yup.string().required('Required'),
        purchaseDate: yup.string().required('Required'),  
        expiryDate: yup.string().required('Required'),
        dosageType: yup.string().required('Required'),   
        stock: yup.string().required('Required'),
        limit: yup.string().required('Required'),    
    })     

    // formik
    const formik = useFormik({
        initialValues: {
            name: '', 
            category: '',
            purchaseDate: '', 
            expiryDate: '',
            dosageType: '', 
            stock: '',
            limit: ''
        },
        validationSchema: loginSchema,
        onSubmit: () => {},
    });   


    const submit = async () => {  

        if (!formik.dirty) {
            // setMessage('You have to fill in the form to continue')
            // setModal(2)           
            // const t1 = setTimeout(() => {  
            //     setModal(0)       
            //     setLoading(false)  
            //     clearTimeout(t1); 
            // }, 2000);  
            return;
        }else if (!formik.isValid) {
            // setMessage('You have to fill in the form to continue')
            // setModal(2)           
            // const t1 = setTimeout(() => {  
            //     setModal(0)       
            //     setLoading(false)  
            //     clearTimeout(t1); 
            // }, 2000);  
            return;
        }else {
            setLoading(true);
            const request = await fetch(`https://hospital-memo-api.herokuapp.com/pharmacy/add-drug`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(formik.values),
            });

            const data = await request.json();

            console.log('patient '+request.status)
            console.log('patient '+data)
            // if (request.status === 201) {        
            //     refetch()            
            //     setMessage('Drugs Added Successfully')
            //     setModal(1)   
            //     const t1 = setTimeout(() => {  
            //         setModal(0)     
            //         setShowModal(false)
            //         setLoading(false)  
            //         clearTimeout(t1);
            //     }, 3000); 
            // }else { 
            //     setMessage(data.message)
            //     setModal(2)           
            //     const t1 = setTimeout(() => {  
            //         setModal(0)       
            //         setLoading(false)  
            //         clearTimeout(t1); 
            //     }, 2000); 
            // } 
        }
    } 

    return (
        <div className=' poppins-regular w-full flex h-full  flex-col pt-6 '> 
            <div className=' flex items-center w-full justify-between ' >
                <div className=' ' >
                    <div className=' flex items-center ' > 
                        <p className=' font-bold text-2xl text-[#1D242E80] ' >Inventory</p>
                        <svg className=' mx-4 '  width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.209396 1.22595L2.98702 4.00358L0.209396 6.78121C-0.0697987 7.0604 -0.0697987 7.51141 0.209396 7.7906C0.488591 8.0698 0.939597 8.0698 1.21879 7.7906L4.5047 4.5047C4.78389 4.2255 4.78389 3.7745 4.5047 3.4953L1.21879 0.209396C0.939597 -0.0697985 0.48859 -0.0697985 0.209396 0.209396C-0.0626401 0.488591 -0.069799 0.946755 0.209396 1.22595Z" fill="#1D242E"/>
                        </svg>
                        <p className=' font-bold text-2xl text-[#1D242E80] ' >List of Medicines</p>
                        <svg className=' mx-4 '  width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.209396 1.22595L2.98702 4.00358L0.209396 6.78121C-0.0697987 7.0604 -0.0697987 7.51141 0.209396 7.7906C0.488591 8.0698 0.939597 8.0698 1.21879 7.7906L4.5047 4.5047C4.78389 4.2255 4.78389 3.7745 4.5047 3.4953L1.21879 0.209396C0.939597 -0.0697985 0.48859 -0.0697985 0.209396 0.209396C-0.0626401 0.488591 -0.069799 0.946755 0.209396 1.22595Z" fill="#1D242E"/>
                        </svg>
                        <p className=' font-bold text-2xl ' >Add New Medicine</p>
                    </div>
                    <p className=' font-medium ' >*All fields are mandatory, except mentioned as (optional).</p>
                </div> 
            </div>
            <div className='  font-Ubuntu-Regular h-fit px-8 rounded-lg py-8 z-40 w-full  ' > 
                {/* <div className='flex items-center' >
                    <p className='font-Ubuntu-Medium text-lg ' >New Medicine</p>
                    <svg   className='ml-auto cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        <g id="Iconly_Light_Close_Square" data-name="Iconly/Light/Close Square" transform="translate(0.75 0.75)">
                            <g id="Close_Square" data-name="Close Square">
                            <path id="Stroke_1" data-name="Stroke 1" d="M4.792,0,0,4.792" transform="translate(6.853 6.845)" fill="none" stroke="#7123E2" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                            <path id="Stroke_2" data-name="Stroke 2" d="M4.8,4.8,0,0" transform="translate(6.85 6.843)" fill="none" stroke="#7123E2" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                            <path id="Stroke_3" data-name="Stroke 3" d="M13.584,0H4.915C1.894,0,0,2.139,0,5.166v8.168C0,16.361,1.885,18.5,4.915,18.5h8.668c3.031,0,4.917-2.139,4.917-5.166V5.166C18.5,2.139,16.614,0,13.584,0Z" fill="none" stroke="#7123E2" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                            </g>
                        </g>
                    </svg>
                </div>  */}
                <div className=' w-full mr-2 mt-8' >
                    <p className='text-xs mb-2 font-Ubuntu-Medium' >Medicine Name</p>
                    <Input  
                        name="name"
                        onChange={formik.handleChange}
                        backgroundColor="#E3EBF3"
                        height="45px"
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
                    <div  className=' w-full mr-2' >
                        <p className='text-xs mb-2 font-Ubuntu-Medium' >Category</p>
                        <Select 
                            name="category"
                            onChange={formik.handleChange}
                            backgroundColor="#E3EBF3"
                            height="45px"
                            onFocus={() =>
                                formik.setFieldTouched("category", true, true)
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
                            {formik.touched.category && formik.errors.category && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                >
                                    {formik.errors.category}
                                </motion.p>
                            )}
                        </div> 
                    </div>
                    <div  className=' w-full mr-2' >
                        <p className='text-xs mb-2 font-Ubuntu-Medium' >Dosage type</p>
                        <Select  
                            name="dosageType"
                            onChange={formik.handleChange}
                            backgroundColor="#E3EBF3"
                            height="45px"
                            onFocus={() =>
                                formik.setFieldTouched("dosageType", true, true)
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
                            {formik.touched.dosageType && formik.errors.dosageType && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                >
                                    {formik.errors.dosageType}
                                </motion.p>
                            )}
                        </div> 
                    </div> 
                </div>
                <div className='w-full flex mt-3' >
                    <div  className=' w-full mr-2' >
                        <p className='text-xs mb-2 font-Ubuntu-Medium' >Purchase Date</p>
                        <Input 
                            name="purchaseDate"
                            onChange={formik.handleChange}
                            backgroundColor="#E3EBF3"
                            height="45px"
                            type='date'
                            onFocus={() =>
                                formik.setFieldTouched("purchaseDate", true, true)
                            }  
                            fontSize='sm'/>
                        <div className="w-full h-auto pt-2">
                            {formik.touched.purchaseDate && formik.errors.purchaseDate && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                >
                                    {formik.errors.purchaseDate}
                                </motion.p>
                            )}
                        </div> 
                    </div>
                    <div  className=' w-full mr-2' >
                        <p className='text-xs mb-2 font-Ubuntu-Medium' >Expiry Date</p>
                        <Input  
                            name="expiryDate"
                            onChange={formik.handleChange}
                            backgroundColor="#E3EBF3"
                            height="45px"
                            type='date'
                            onFocus={() =>
                                formik.setFieldTouched("expiryDate", true, true)
                            }  
                            fontSize='sm' />
                        <div className="w-full h-auto pt-2">
                            {formik.touched.expiryDate && formik.errors.expiryDate && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                >
                                    {formik.errors.expiryDate}
                                </motion.p>
                            )}
                        </div> 
                    </div> 
                </div>
                <div className='w-full flex mt-3' >
                    <div  className=' w-full mr-2' >
                        <p className='text-xs mb-2 font-Ubuntu-Medium' >Stock</p>
                        <Input 
                            name="stock"
                            onChange={formik.handleChange}
                            backgroundColor="#E3EBF3"
                            height="45px"
                            onFocus={() =>
                                formik.setFieldTouched("stock", true, true)
                            }  
                            fontSize='sm'/>
                        <div className="w-full h-auto pt-2">
                            {formik.touched.stock && formik.errors.stock && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                >
                                    {formik.errors.stock}
                                </motion.p>
                            )}
                        </div> 
                    </div>
                    <div  className=' w-full mr-2' >
                        <p className='text-xs mb-2 font-Ubuntu-Medium' >Limit (%)</p>
                        <Input  
                            name="limit"
                            backgroundColor="#E3EBF3"
                            height="45px"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("limit", true, true)
                            }  
                            fontSize='sm' />
                        <div className="w-full h-auto pt-2">
                            {formik.touched.limit && formik.errors.limit && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                >
                                    {formik.errors.limit}
                                </motion.p>
                            )}
                        </div> 
                    </div> 
                </div>
                {loading ?  
                    <button className='bg-[#000000] h-12 flex justify-center items-center w-36  text-white text-sm mt-6 rounded' >
                        <div className='flex items-center ' >
                            <LoaderIcon size='w-10 h-10 mr-1 ' /> 
                            Loading
                        </div> 
                    </button>
                    :
                    <button onClick={()=> submit()} className='text-xs h-12 items-center rounded bg-[#000000] mt-8 w-36 flex justify-center text-white font-Ubuntu-Medium' >Upload Medicine</button>
                }
                {/* <button onClick={()=> setShowModal(false)} className='text-xs py-3 rounded bg-[#7123E2] mt-8 w-full text-white font-Ubuntu-Medium' >I have carefully noted the details of the blood donated & the donor</button> */}
            </div>
        </div>
    )
} 