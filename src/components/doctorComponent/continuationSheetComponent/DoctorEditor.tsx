import { Textarea } from '@chakra-ui/textarea';
import React from 'react' 
import FilesEditor from '../../FilesEditor';
import { useNavigate } from 'react-router-dom';
import SideImage from '../assets/images/SideImage.png'
import Logo from '../assets/images/patientMemologo.png'
import { motion } from 'framer-motion'
import * as yup from 'yup'
import { useFormik } from 'formik'; 
import LoaderIcon from '../../LoaderIcon';
import DateFormat from '../../DateFormat';
import Modal from '../../Modal';

export default function DoctorEditor(props: any) {

    
    const [loading, setLoading] = React.useState(false); 
    const [showDetail, setShowDetail] = React.useState(false); 
    const [message, setMessage] = React.useState('');
    const [modal, setModal] = React.useState(0);  

    const loginSchema = yup.object({ 
        note: yup.string().required('Required'), 
    }) 

    // formik
    const formik = useFormik({
        initialValues: {note: ''},
        validationSchema: loginSchema,
        onSubmit: () => {},
    });    

    const submit = async () => {

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
            const request = await fetch(`https://hospital-memo-api.herokuapp.com/reports/create-report`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    note: formik.values.note,
                    patient: props.value._id
                }),
            });
    
            const json = await request.json();

            console.log(request.status)
            console.log(json)
            if (request.status === 201) { 
                setMessage('Record Added Successfully')
                setModal(1)           
                const t1 = setTimeout(() => {  
                    setModal(0)       
                    props.next(3)
                    setLoading(false)  
                    clearTimeout(t1); 
                }, 2000); 
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

    console.log(props.value)

    return (
        <div className='p-12 w-full' >
            <Modal message={message} modal={modal} />
            <p className='font-Ubuntu-Bold text-lg ' >Continuation Sheet for <span onClick={()=> setShowDetail(true)} className=' text-[#7123E2] cursor-pointer' >{props.value.firstName+' '+ props.value.lastName}</span></p>
            <p className='text-xs mt-1 font-Ubuntu-Regular text-[#5F6777] mb-10' >{DateFormat(props.value.updatedAt)}</p>
            {/* <FilesEditor /> */}
            <Textarea 
                height='50vh'
                name="note"
                onChange={formik.handleChange}
                onFocus={() =>
                    formik.setFieldTouched("note", true, true)
                }  
                placeholder='How about the patient?...'
                />
            <div className="w-full h-auto pt-2">
                {formik.touched.note && formik.errors.note && (
                    <motion.p
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                    >
                        {formik.errors.note}
                    </motion.p>
                )}
            </div>
            <div className='w-full flex mt-12 justify-end' >
                 
            <button onClick={()=> props.next(0)} className='w-44 rounded-full py-2 mr-6 text-sm bg-[#7123E214] text-[#7123E2] font-Ubuntu-Medium' >Cancel</button>
                {loading ?
                    <button className='w-44 flex justify-center items-center rounded-full h-10 text-sm bg-[#7123E2] text-white font-Ubuntu-Medium' >
                        <div className='flex mx-auto items-center ' >
                            <LoaderIcon size='w-6 h-6 mr-1 ' /> 
                            Loading
                        </div> 
                    </button>:
                    <button onClick={()=> submit()} className='w-44 rounded-full h-10 text-sm bg-[#7123E2] text-white font-Ubuntu-Medium' >Add to Patient File</button>
                }
            </div>
 
            {showDetail ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">  
                            <div style={{ boxShadow: '0px 3px 34px 0px #5F67771C', width: '512px'}} className='  font-Ubuntu-Regular h-auto px-8 rounded-lg py-8 border border-[#E0E0E0] z-50 bg-white ' >
                                <div className='flex items-center' >
                                    <p className='font-Ubuntu-Medium text-base ' >Patient Details</p>
                                    <svg onClick={()=> setShowDetail(false)} className='ml-auto cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                        <g id="Iconly_Light_Close_Square" data-name="Iconly/Light/Close Square" transform="translate(0.75 0.75)">
                                            <g id="Close_Square" data-name="Close Square">
                                            <path id="Stroke_1" data-name="Stroke 1" d="M4.792,0,0,4.792" transform="translate(6.853 6.845)" fill="none" stroke="#7123E2" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                                            <path id="Stroke_2" data-name="Stroke 2" d="M4.8,4.8,0,0" transform="translate(6.85 6.843)" fill="none" stroke="#7123E2" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                                            <path id="Stroke_3" data-name="Stroke 3" d="M13.584,0H4.915C1.894,0,0,2.139,0,5.166v8.168C0,16.361,1.885,18.5,4.915,18.5h8.668c3.031,0,4.917-2.139,4.917-5.166V5.166C18.5,2.139,16.614,0,13.584,0Z" fill="none" stroke="#7123E2" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div className='flex items-center mt-7' >
                                    <p className='font-Ubuntu-Medium text-sm' >Patient Name</p>
                                    <p className='font-Ubuntu-Medium text-sm ml-auto' >{props.value.firstName+' '+props.value.lastName}</p>
                                </div>
                                <div className='flex items-center mt-4' >
                                    <p className='font-Ubuntu-Medium text-sm' >Gender</p>
                                    <p className='font-Ubuntu-Medium text-sm ml-auto' >{props.value.gender}</p>
                                </div>
                                <div className='flex items-center mt-4' >
                                    <p className='font-Ubuntu-Medium text-sm' >Phone</p>
                                    <p className='font-Ubuntu-Medium text-sm ml-auto ' >{props.value.phone}</p>
                                </div>
                                <div className='flex items-center mt-4' >
                                    <p className='font-Ubuntu-Medium text-sm' >Home Address</p>
                                    <p className='font-Ubuntu-Medium text-sm ml-auto' >{props.value.address}</p>
                                </div>
                                <div className='flex items-center mt-4' >
                                    <p className='font-Ubuntu-Medium text-sm' >State Of Origin</p>
                                    <p className='font-Ubuntu-Medium text-sm ml-auto' >{props.value.stateOfOrigin}</p>
                                </div>
                                <div className='flex items-center mt-4' >
                                    <p className='font-Ubuntu-Medium text-sm' >Next Of Kin Name</p>
                                    <p className='font-Ubuntu-Medium text-sm ml-auto' >{props.value.nextOfKin.firstName+' '+props.value.nextOfKin.lastName}</p>
                                </div> 
                                <div className='flex items-center mt-4' >
                                    <p className='font-Ubuntu-Medium text-sm' >Next Of Kin Phone Number</p>
                                    <p className='font-Ubuntu-Medium text-sm ml-auto' >{props.value.nextOfKin.phone}</p>
                                </div> 
                                <button onClick={()=> setShowDetail(false)} className='font-Ubuntu-Medium text-white text-xs py-3 w-full mt-7 bg-[#7123E2] rounded' >Ok</button>
                            </div>
                        </div> 
                        <div className="opacity-25 fixed flex flex-1 inset-0 z-20 bg-black"/>
                    </>
                ) : null} 
        </div>
    )
} 