import React from 'react'
import LoaderIcon from '../components/LoaderIcon'
import DrugsTab from '../components/pharmacyComponent/DrugsTab'
import RequestTab from '../components/pharmacyComponent/RequestTab'
import * as yup from 'yup'
import { useFormik } from 'formik'; 
import { Input } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import * as axios from 'axios'   

export default function Pharmacy(props: any) {

    const [tab, setTab] = React.useState(0)
    const [showModal, setShowModal] = React.useState(false) 
    const [loading, setLoading] = React.useState(false);

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
        <div className='w-full h-full relative' >
            {userData.role !== 'pharmacy' && ( 
                <>
                    <div className="absolute flex flex-1 justify-center items-center inset-0 z-50 "> 
                        <p className='font-Ubuntu-Bold text-5xl text-white relative z-50' >You Are Not Assigned To This Role</p>
                    </div>
                    <div className=" opacity-50  absolute flex flex-1 inset-0 z-40 bg-[#7123E2]"/>
                </>
            )}
            <div className='w-full px-12 border-b flex items-center border-[#D7D0DF]' >  
                <p className='font-Ubuntu-Medium text-lg mr-20' >Manage Pharmacy</p> 
                <div className='mx-auto flex' >
                    <div onClick={()=> setTab(0)} className={tab === 0 ? 'flex items-center pb-7 pt-8 cursor-pointer mx-3 border-b-2 border-[#7123E2]  ': 'flex items-center pb-7 pt-8  cursor-pointer mx-3 border-b-2 border-transparent '} > 
                        <p className={tab === 0 ? 'font-Ubuntu-Medium px-2 text-xs text-[#7123E2]': 'font-Ubuntu-Medium px-2 text-xs text-[#817D83]'} >Drugs</p>
                    </div>
                    <div onClick={()=> setTab(1)} className={tab === 1 ? 'flex items-center pb-7 pt-8  ml-4 cursor-pointer mx-3 border-b-2 border-[#7123E2] ': 'flex items-center ml-4 pb-7 pt-8  cursor-pointer mx-3 border-b-2 border-transparent '} > 
                        <p className={tab === 1 ? 'font-Ubuntu-Medium px-2 text-xs text-[#7123E2]': 'font-Ubuntu-Medium px-2 text-xs text-[#817D83]'} >Requests</p>
                    </div>
                </div>
                <button onClick={()=> setShowModal(true)} className='font-Ubuntu-Medium text-xs bg-[#7123E2] text-white rounded-lg py-3 px-6 ml-auto ' >Upload New Drug</button>
            </div>
            <div className='w-full relative' >
                {tab === 0 ? 
                    <DrugsTab />
                        :tab === 1 ? 
                            <RequestTab />
                :null}
                {showModal ? 
                    <div style={{ boxShadow: '0px 3px 34px 0px #5F67771C', width: '400px'}} className='  font-Ubuntu-Regular absolute h-auto px-8 rounded-lg py-8 top-4 border border-[#E0E0E0] z-50 bg-white right-4  ' > 
                        <div className='flex items-center' >
                            <p className='font-Ubuntu-Medium text-lg ' >Donor Details</p>
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
                        {!image && (
                            <div className='w-full rounded-lg mt-8 border-dashed h-44 flex flex-col justify-center items-center border border-[#8B9CA5]' > 
                                <p className='text-sm mb-2 font-Ubuntu-Medium mt-6' >Upload Image (Optional)</p>
                                <p className='text-xs font-Ubuntu-Regular' >Drag & Drop or  
                                    <label className='mt-auto cursor-pointer'>
                                    <input style={{display:'none'}} type="file" accept="image/*" id="input" onChange={handleImageChange} />
                                        <span className='font-Ubuntu-Medium text-[#7123E2] cursor-pointer' >Browse</span>
                                    </label>
                                </p>
                            </div>
                        )} 
                        {image && (
                            <label className='w-full cursor-pointer rounded-lg mt-8 h-44 flex flex-col justify-center items-center ' > 
                            <input style={{display:'none'}} type="file" accept="image/*" id="input" onChange={handleImageChange} />
                                <img className='w-full h-44 rounded-md object-cover' src={selectedFiles} alt=""/> 
                            </label>
                        )}
                        <div className=' w-full mr-2 mt-4' >
                            <p className='text-xs mb-2 font-Ubuntu-Medium' >Drug Name</p>
                            <Input  
                                name="name"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("name", true, true)
                                }  
                                fontSize='sm'/>
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
                        <div className='w-full flex mt-4' >
                            <div style={{width: '210px'}} className='mr-2' >
                                <p className='text-xs mb-2 font-Ubuntu-Medium' >Milligram</p>
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
                                <p className='text-xs mb-2 font-Ubuntu-Medium' >Quantity</p>
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
                            <button onClick={()=> sumbit(image)} className='text-xs h-12 items-center rounded bg-[#7123E2] mt-8 w-full flex justify-center text-white font-Ubuntu-Medium' >Upload Drug</button>
                        }
                        {/* <button onClick={()=> setShowModal(false)} className='text-xs py-3 rounded bg-[#7123E2] mt-8 w-full text-white font-Ubuntu-Medium' >I have carefully noted the details of the blood donated & the donor</button> */}
                    </div>
                :null} 
            </div>
 
        </div>
    )
} 