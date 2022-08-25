import React from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik';  
import { motion } from 'framer-motion'
import LoaderIcon from '../../LoaderIcon'
import Modal from '../../Modal'
import { Input, InputGroup, InputLeftElement, Select, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'

export default function ModifyDrugs(props: any) {
    
    const [loading, setLoading] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const [modal, setModal] = React.useState(0);
    const loginSchema = yup.object({  
        purchaseDate: yup.string().required('Required'),  
        expiryDate: yup.string().required('Required'),   
        stock: yup.string().required('Required'),   
    })     

    // formik
    const formik = useFormik({
        initialValues: { 
            purchaseDate: '', 
            expiryDate: '', 
            stock: '', 
        },
        validationSchema: loginSchema,
        onSubmit: () => {},
    });   

    React.useEffect(() => {
        formik.setFieldValue('purchaseDate', props.value.purchaseDate)
        formik.setFieldValue('expiryDate', props.value.expiryDate) 
    }, [props.value])

    const submit = async () =>  {  

        if (!formik.dirty) {
            setMessage('You have to fill in the form to continue')
            setModal(2)           
            const t1 = setTimeout(() => {  
                setModal(0)       
                setLoading(false)  
                clearTimeout(t1); 
            }, 2000);  
            return;
        }else if (!formik.isValid) {
            setMessage('You have to fill in the form to continue')
            setModal(2)           
            const t1 = setTimeout(() => {  
                setModal(0)       
                setLoading(false)  
                clearTimeout(t1); 
            }, 2000);  
            return;
        }else {
            setLoading(true);
            const request = await fetch(`https://hospital-memo-api.herokuapp.com/drugs/${props.value._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(formik.values),
            });

            const data = await request.json();

            console.log('patient '+request.status)
            console.log('patient '+data)
            if (request.status === 201) {         
                setMessage('Drugs Updated Successfully')
                setModal(1)   
                props.reload()   
                const t1 = setTimeout(() => {  
                    setModal(0)     
                    props.close(false)
                    setLoading(false)  
                    clearTimeout(t1);
                }, 3000); 
            }else { 
                setMessage('Error Occurred')
                setModal(2)           
                const t1 = setTimeout(() => {  
                    setModal(0)       
                    setLoading(false)  
                    clearTimeout(t1); 
                }, 2000); 
            } 
        }
    }

    return (
        <div style={{ boxShadow: '0px 3px 34px 0px #5F67771C'}} className=' w-500px font-Ubuntu-Regular absolute h-auto px-8 rounded-lg py-8 -top-8 border border-[#E0E0E0] z-50 bg-white right-auto mx-auto left-auto  ' >  
            <Modal message={message} modal={modal} />
            <div className='flex items-center' >
                <p className='font-Ubuntu-Medium text-lg ' >Modification on {props.value.name}</p>
                <svg onClick={()=> props.close(false)} className='ml-auto cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <g id="Iconly_Light_Close_Square" data-name="Iconly/Light/Close Square" transform="translate(0.75 0.75)">
                        <g id="Close_Square" data-name="Close Square">
                        <path id="Stroke_1" data-name="Stroke 1" d="M4.792,0,0,4.792" transform="translate(6.853 6.845)" fill="none" stroke="#7123E2" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                        <path id="Stroke_2" data-name="Stroke 2" d="M4.8,4.8,0,0" transform="translate(6.85 6.843)" fill="none" stroke="#7123E2" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                        <path id="Stroke_3" data-name="Stroke 3" d="M13.584,0H4.915C1.894,0,0,2.139,0,5.166v8.168C0,16.361,1.885,18.5,4.915,18.5h8.668c3.031,0,4.917-2.139,4.917-5.166V5.166C18.5,2.139,16.614,0,13.584,0Z" fill="none" stroke="#7123E2" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                        </g>
                    </g>
                </svg>
            </div>  
            <div className='w-full flex flex-col mt-8' >
                <div className='mr-2' >
                    <p className='text-xs mb-2 font-Ubuntu-Medium' >Purchase Date</p>
                    <Input 
                        name="purchaseDate"
                        onChange={formik.handleChange}
                        type='date'
                        onFocus={() =>
                            formik.setFieldTouched("purchaseDate", true, true)
                        }  
                        value={formik.values.purchaseDate}
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
                <div className='mr-2' >
                    <p className='text-xs mb-2 font-Ubuntu-Medium' >Expiry Date</p>
                    <Input  
                        name="expiryDate"
                        onChange={formik.handleChange}
                        type='date'
                        onFocus={() =>
                            formik.setFieldTouched("expiryDate", true, true)
                        }  
                        value={formik.values.expiryDate}
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
            <div className='w-full mt-3' >
                <div className='mr-2' >
                    <p className='text-xs mb-2 font-Ubuntu-Medium' >Stock</p>
                    <Input 
                        name="stock"
                        onChange={formik.handleChange}
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
            </div>
            {loading ?  
                <button className='bg-[#7123E2] h-12 flex justify-center items-center w-full  text-white text-sm mt-6 rounded' >
                    <div className='flex items-center ' >
                        <LoaderIcon size='w-10 h-10 mr-1 ' /> 
                        Loading
                    </div> 
                </button>
                :
                <button onClick={()=> submit()} className='text-xs h-12 items-center rounded bg-[#7123E2] mt-8 w-full flex justify-center text-white font-Ubuntu-Medium' >Upload Medicine</button>
            }
            {/* <button onClick={()=> setShowModal(false)} className='text-xs py-3 rounded bg-[#7123E2] mt-8 w-full text-white font-Ubuntu-Medium' >I have carefully noted the details of the blood donated & the donor</button> */}
        </div>
    )
} 