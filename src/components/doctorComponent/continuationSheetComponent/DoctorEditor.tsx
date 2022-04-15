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
    const [showpassword, setShowpass] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const [modal, setModal] = React.useState(0); 

    const handleShowpassword = () => {
        setShowpass(prev => !prev);
    } 

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


    return (
        <div className='p-12 w-full' >
            <Modal message={message} modal={modal} />
            <p className='font-Ubuntu-Bold text-lg ' >Continuation Sheet for <span className=' text-[#7123E2]' >{props.value.firstName+' '+ props.value.lastName}</span></p>
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
        </div>
    )
} 