import { Input } from '@chakra-ui/react';
import React from 'react'
import LoaderIcon from '../../LoaderIcon'
import { motion } from 'framer-motion'
import * as yup from 'yup'
import { useFormik } from 'formik'; 
import Modal from '../../Modal';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';

export default function DeliveryRecord(props: any) { 

    const navigate = useNavigate()
    const [message, setMessage] = React.useState('');
    const [modal, setModal] = React.useState(0);
    const loginSchema = yup.object({ 
        patient: yup.string().required('Required'), 
        placeOfAdmission: yup.string().required('Required'),
        labourWard: yup.string().required('Required'),
        clinic: yup.string().required('Required'),
        emergencyWard: yup.string().required('Required'),
        pastObstetricHistory: yup.string().required('Required'),
        lmp: yup.string().required('Required'),
        edd: yup.string().required('Required'),
        antenatalComplications: yup.string().required('Required'),
        labourOnset: yup.string().required('Required'),
        spontaneous: yup.string().required('Required'),
        indiced: yup.string().required('Required'),
        membranesRupturedAt: yup.string().required('Required'),
        generalCondition: yup.string().required('Required'),
        vulva: yup.string().required('Required'),
        vagina: yup.string().required('Required'),
        cervix: yup.string().required('Required'),
        wellAppliedToPP: yup.string().required('Required'),
        OS: yup.string().required('Required'),
        membranesRuptured: yup.string().required('Required'),
        intact: yup.string().required('Required'),
        abdomenFundalHeight: yup.string().required('Required'),
        LIE: yup.string().required('Required'),
        position: yup.string().required('Required'),
        descent: yup.string().required('Required'),
        fetalHeartRate: yup.string().required('Required'),
        multipleSingletonPresentation: yup.string().required('Required'),
        PPAtStation: yup.string().required('Required'),
        IN: yup.string().required('Required'),
        caput: yup.string().required('Required'),
        moulding: yup.string().required('Required'),
        pelvis: yup.string().required('Required'),
        forecast: yup.string().required('Required'),
        signature: yup.string().required('Required'),
    })   
 
    const { isLoading, data } = useQuery('patientdata', () =>
        fetch(`https://hospital-memo-api.herokuapp.com/patients/${localStorage.getItem("patientId")}`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    ) 

    console.log(data);
    

    // formik
    const formik = useFormik({
        initialValues: {
            patient: "", 
            placeOfAdmission: "",
            labourWard: "",
            clinic: "",
            emergencyWard: "",
            pastObstetricHistory: "",
            lmp: "",
            edd: "",
            antenatalComplications: "",
            labourOnset: "",
            spontaneous: "",
            indiced: "",
            membranesRupturedAt: "",
            generalCondition: "",
            vulva: "",
            vagina: "",
            cervix: "",
            wellAppliedToPP: "",
            OS: "",
            membranesRuptured: "",
            LIE: "",
            intact: "",
            abdomenFundalHeight: "",
            position: "",
            descent: "",
            fetalHeartRate: "",
            multipleSingletonPresentation: "",
            PPAtStation: "",
            IN: "",
            caput: "",
            moulding: "",
            pelvis: "",
            forecast: "",
            signature: "",
        },
        validationSchema: loginSchema,
        onSubmit: () => {},
    });  
 
    React.useEffect(()=> {
        formik.setFieldValue("patient", localStorage.getItem('patientId'))
    }, [])

    const submit = async () => {  

        if (!formik.dirty) { 
            setMessage('You have to fill in th form to continue')
            setModal(2)             
            const t1 = setTimeout(() => {  
                setModal(0)       
                clearTimeout(t1);
            }, 3000);    
            return;
        }else if (!formik.isValid) { 
            setMessage('You have to fill in the form correctly to continue')
            setModal(2)           
            const t1 = setTimeout(() => {  
                setModal(0)       
                clearTimeout(t1);
            }, 2000);    
            return;
        }else {
            setLoading(true);
            const request = await fetch(`https://hospital-memo-api.herokuapp.com/nurse/delivery-record/create-delivery-details`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(formik.values),
            });

            const json = await request.json();

            console.log('patient '+request.status)
            console.log('patient '+json)
            if (request.status === 201) {     
                setMessage(' Successful')
                setModal(1)          
                const t1 = setTimeout(() => {  
                    setModal(0)      
                    // navigate(0)
                    clearTimeout(t1);
                }, 3000); 
            }else {
                setMessage('Failed To Add Records ')
                setModal(2)             
                const t1 = setTimeout(() => {  
                    setModal(0)       
                    clearTimeout(t1);
                }, 3000);    
                // alert(json.message);
                console.log(json) 
            } 
        }
    }   


    const [loading, setLoading] = React.useState(false);
    return (
        <div className='w-full px-32 py-14' >
        <Modal message={message} modal={modal} />
            <p className='font-Ubuntu-Bold text-xl' >Bio</p>
            <div className='w-full py-8 border-b border-[#E7EDF2]' >
                <div className='w-full grid grid-cols-6 gap-4' >
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >Surname</p>
                        <p className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' >{data?.data.lastName}</p>
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >First Name</p>
                        <p className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' >{data?.data.firstName}</p>
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >Date/Time</p>
                        <p className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' >{new Date(data?.data?.updatedAt).toUTCString()}</p>
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >Age</p>
                        <p className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' >{data?.data?.age} yrs</p>
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >Height</p>
                        <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                        {/* <p className='font-Ubuntu-Medium text-[#29313F] text-sm mt-1' >---</p> */}
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >Parity</p>
                        <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >No. of living children</p>
                        <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                    </div>
                </div>
            </div>
            <p className='font-Ubuntu-Bold text-xl mt-8' >Others</p>
            <div className='w-full py-8 border-b border-[#E7EDF2]' >
                <div className='w-full grid grid-cols-4 gap-4' >
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >Place of admission</p>
                        <Input 
                            name="placeOfAdmission"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("placeOfAdmission", true, true)
                            }  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                        <div className="w-full h-auto pt-2">
                            {formik.touched.placeOfAdmission && formik.errors.placeOfAdmission && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                >
                                    {formik.errors.placeOfAdmission}
                                </motion.p>
                            )}
                        </div> 
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >Labour ward</p>
                        <Input 
                            name="labourWard"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("labourWard", true, true)
                            }  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                        <div className="w-full h-auto pt-2">
                            {formik.touched.labourWard && formik.errors.labourWard && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                >
                                    {formik.errors.labourWard}
                                </motion.p>
                            )}
                        </div> 
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >clinic</p>
                        <Input 
                            name="clinic"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("clinic", true, true)
                            }  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                        <div className="w-full h-auto pt-2">
                            {formik.touched.clinic && formik.errors.clinic && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                >
                                    {formik.errors.clinic}
                                </motion.p>
                            )}
                        </div> 
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >emergecy ward</p>
                        <Input 
                            name="emergencyWard"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("emergencyWard", true, true)
                            }  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                        <div className="w-full h-auto pt-2">
                            {formik.touched.emergencyWard && formik.errors.emergencyWard && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                >
                                    {formik.errors.emergencyWard}
                                </motion.p>
                            )}
                        </div> 
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >past obstetric history</p>
                        <Input 
                            name="pastObstetricHistory"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("pastObstetricHistory", true, true)
                            }  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                        <div className="w-full h-auto pt-2">
                            {formik.touched.pastObstetricHistory && formik.errors.pastObstetricHistory && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                >
                                    {formik.errors.pastObstetricHistory}
                                </motion.p>
                            )}
                        </div> 
                    </div>
                </div>
                <div className='w-full grid grid-cols-2 gap-4 mt-4' > 
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >LMP</p>
                        <Input 
                            name="lmp"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("lmp", true, true)
                            }  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                        <div className="w-full h-auto pt-2">
                            {formik.touched.lmp && formik.errors.lmp && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                >
                                    {formik.errors.lmp}
                                </motion.p>
                            )}
                        </div> 
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >EDD</p>
                        <Input 
                            name="edd"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("edd", true, true)
                            }  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                        <div className="w-full h-auto pt-2">
                            {formik.touched.edd && formik.errors.edd && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                >
                                    {formik.errors.edd}
                                </motion.p>
                            )}
                        </div> 
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >antenatal complications</p>
                        <Input 
                            name="antenatalComplications"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("antenatalComplications", true, true)
                            }  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                        <div className="w-full h-auto pt-2">
                            {formik.touched.antenatalComplications && formik.errors.antenatalComplications && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                >
                                    {formik.errors.antenatalComplications}
                                </motion.p>
                            )}
                        </div> 
                    </div>
                </div>
                <div className='w-full grid grid-cols-4 gap-4 mt-4' > 
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >labout onset (Hour)</p>
                        <div className='flex items-center' > 
                            <Input 
                            name="labourOnset"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("labourOnset", true, true)
                            }  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='--' />
                        <div className="w-full h-auto pt-2">
                            {formik.touched.labourOnset && formik.errors.labourOnset && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                >
                                    {formik.errors.labourOnset}
                                </motion.p>
                            )}
                        </div> 
                            <p className='font-Ubuntu-Regular text-xs text-[#29313F] ml-2' >(Hour)</p>
                        </div>
                        {/* <p className='font-Ubuntu-Medium text-[#29313F] text-sm mt-1' >-- <span className='font-Ubuntu-Regular text-xs' >(Hour)</span></p> */}
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >Spontaneous</p>
                        <Input 
                            name="spontaneous"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("spontaneous", true, true)
                            }  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                        <div className="w-full h-auto pt-2">
                            {formik.touched.spontaneous && formik.errors.spontaneous && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                >
                                    {formik.errors.spontaneous}
                                </motion.p>
                            )}
                        </div> 
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >INDUCED</p>
                        <Input 
                            name="indiced"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("indiced", true, true)
                            }  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                        <div className="w-full h-auto pt-2">
                            {formik.touched.indiced && formik.errors.indiced && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                >
                                    {formik.errors.indiced}
                                </motion.p>
                            )}
                        </div> 
                    </div> 
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >memebrane ruprtured at </p>
                        <div className='flex items-center' > 
                            <Input 
                            name="membranesRupturedAt"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("membranesRupturedAt", true, true)
                            }  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='--' />
                        <div className="w-full h-auto pt-2">
                            {formik.touched.membranesRupturedAt && formik.errors.membranesRupturedAt && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                >
                                    {formik.errors.membranesRupturedAt}
                                </motion.p>
                            )}
                        </div> 
                            <p className='font-Ubuntu-Regular text-xs text-[#29313F] ml-2' >(Hour)</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className='font-Ubuntu-Bold text-xl mt-8' >General condition</p>
            <div className='w-full py-8 border-b border-[#E7EDF2]' >
                <div className='w-full grid grid-cols-5 gap-4' >
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >select  condition</p>
                        <Input 
                            name="generalCondition"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("generalCondition", true, true)
                            }  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                        <div className="w-full h-auto pt-2">
                            {formik.touched.generalCondition && formik.errors.generalCondition && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                >
                                    {formik.errors.generalCondition}
                                </motion.p>
                            )}
                        </div> 
                    </div> 
                </div>
            </div>
            <p className='font-Ubuntu-Bold text-xl mt-8' >Abdomen</p>
            <div className='w-full py-8 border-b border-[#E7EDF2]' >
                <div className='w-full grid grid-cols-4 gap-4' >
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >fundal height</p>
                        <Input 
                            name="abdomenFundalHeight"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("abdomenFundalHeight", true, true)
                            }  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                        <div className="w-full h-auto pt-2">
                            {formik.touched.abdomenFundalHeight && formik.errors.abdomenFundalHeight && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                >
                                    {formik.errors.abdomenFundalHeight}
                                </motion.p>
                            )}
                        </div> 
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >lie</p>
                        <Input 
                            name="LIE"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("LIE", true, true)
                            }  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                        <div className="w-full h-auto pt-2">
                            {formik.touched.LIE && formik.errors.LIE && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                >
                                    {formik.errors.LIE}
                                </motion.p>
                            )}
                        </div> 
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >position</p>
                        <Input 
                            name="position"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("position", true, true)
                            }  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                        <div className="w-full h-auto pt-2">
                            {formik.touched.position && formik.errors.position && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                >
                                    {formik.errors.position}
                                </motion.p>
                            )}
                        </div> 
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >multiple singleton</p>
                        <Input 
                            name="multipleSingletonPresentation"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("multipleSingletonPresentation", true, true)
                            }  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                        <div className="w-full h-auto pt-2">
                            {formik.touched.multipleSingletonPresentation && formik.errors.multipleSingletonPresentation && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                >
                                    {formik.errors.multipleSingletonPresentation}
                                </motion.p>
                            )}
                        </div> 
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >presentation</p>
                        <Input 
                            name="position"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("position", true, true)
                            }  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                        <div className="w-full h-auto pt-2">
                            {formik.touched.position && formik.errors.position && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                >
                                    {formik.errors.position}
                                </motion.p>
                            )}
                        </div> 
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >descent</p>
                        <div className='flex items-center' > 
                            <Input 
                            name="descent"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("descent", true, true)
                            }  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='--' />
                        <div className="w-full h-auto pt-2">
                            {formik.touched.descent && formik.errors.descent && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                >
                                    {formik.errors.descent}
                                </motion.p>
                            )}
                        </div> 
                            <p className='font-Ubuntu-Regular text-xs text-[#29313F] ml-2' >(Fifths)</p>
                        </div>
                        {/* <p className='font-Ubuntu-Medium text-[#29313F] text-sm mt-1' >-- <span className='font-Ubuntu-Regular text-xs' >(Fifths)</span></p> */}
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >fetal heart rate</p>
                        <div className='flex items-center' > 
                            <Input 
                            name="fetalHeartRate"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("fetalHeartRate", true, true)
                            }  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='--' />
                        <div className="w-full h-auto pt-2">
                            {formik.touched.fetalHeartRate && formik.errors.fetalHeartRate && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                >
                                    {formik.errors.fetalHeartRate}
                                </motion.p>
                            )}
                        </div> 
                            <p className='font-Ubuntu-Regular text-xs text-[#29313F] ml-2' >(Minute)</p>
                        </div>
                        {/* <p className='font-Ubuntu-Medium text-[#29313F] text-sm mt-1' >-- <span className='font-Ubuntu-Regular text-xs' >(Minute)</span></p> */}
                    </div>
                </div>
            </div>
            <p className='font-Ubuntu-Bold text-xl mt-8' >PV</p>
            <div className='w-full py-8 border-b border-[#E7EDF2]' >
                <div className='w-full grid grid-cols-5 gap-4' >
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >vulva</p>
                        <Input 
                            name="vulva"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("vulva", true, true)
                            }  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                        <div className="w-full h-auto pt-2">
                            {formik.touched.vulva && formik.errors.vulva && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                >
                                    {formik.errors.vulva}
                                </motion.p>
                            )}
                        </div> 
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >vigina</p>
                        <Input 
                            name="vagina"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("vagina", true, true)
                            }  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                        <div className="w-full h-auto pt-2">
                            {formik.touched.vagina && formik.errors.vagina && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                >
                                    {formik.errors.vagina}
                                </motion.p>
                            )}
                        </div> 
                    </div> 
                </div>
                <div className='w-full grid grid-cols-5 gap-4 mt-4' >
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >cervix</p>
                        <div className='flex items-center' > 
                            <Input 
                            name="cervix"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("cervix", true, true)
                            }  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='--' />
                        <div className="w-full h-auto pt-2">
                            {formik.touched.cervix && formik.errors.cervix && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                >
                                    {formik.errors.cervix}
                                </motion.p>
                            )}
                        </div> 
                            <p className='font-Ubuntu-Regular text-xs text-[#29313F] ml-2' >(%effacted)</p>
                        </div>
                        {/* <p className='font-Ubuntu-Medium text-[#29313F] text-sm mt-1' >-- <span className='font-Ubuntu-Regular text-xs' >(%effacted)</span></p> */}
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >Well/loosely applied to PP</p>
                        <Input 
                            name="wellAppliedToPP"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("wellAppliedToPP", true, true)
                            }  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                        <div className="w-full h-auto pt-2">
                            {formik.touched.wellAppliedToPP && formik.errors.wellAppliedToPP && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                >
                                    {formik.errors.wellAppliedToPP}
                                </motion.p>
                            )}
                        </div> 
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >Os</p>
                        <div className='flex items-center' > 
                            <Input 
                            name="OS"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("OS", true, true)
                            }  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='--' />
                        <div className="w-full h-auto pt-2">
                            {formik.touched.OS && formik.errors.OS && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                >
                                    {formik.errors.OS}
                                </motion.p>
                            )}
                        </div> 
                            <p className='font-Ubuntu-Regular text-xs text-[#29313F] ml-2' >(cm dilated)</p>
                        </div>
                        {/* <p className='font-Ubuntu-Medium text-[#29313F] text-sm mt-1' >-- <span className='font-Ubuntu-Regular text-xs' >(cm dilated)</span></p> */}
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >Membranes Ruptured</p>
                        <Input 
                            name="membranesRuptured"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("membranesRuptured", true, true)
                            }  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                        <div className="w-full h-auto pt-2">
                            {formik.touched.membranesRuptured && formik.errors.membranesRuptured && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                >
                                    {formik.errors.membranesRuptured}
                                </motion.p>
                            )}
                        </div> 
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >Intact</p>
                        <Input 
                            name="intact"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("intact", true, true)
                            }  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                        <div className="w-full h-auto pt-2">
                            {formik.touched.intact && formik.errors.intact && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                >
                                    {formik.errors.intact}
                                </motion.p>
                            )}
                        </div> 
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >P.P at station</p>
                        <Input 
                            name="PPAtStation"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("PPAtStation", true, true)
                            }  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                        <div className="w-full h-auto pt-2">
                            {formik.touched.PPAtStation && formik.errors.PPAtStation && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                >
                                    {formik.errors.PPAtStation}
                                </motion.p>
                            )}
                        </div> 
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >in </p>
                        <div className='flex items-center' > 
                            <Input 
                            name="IN"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("IN", true, true)
                            }  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='--' />
                        <div className="w-full h-auto pt-2">
                            {formik.touched.IN && formik.errors.IN && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                >
                                    {formik.errors.IN}
                                </motion.p>
                            )}
                        </div> 
                            <p className='font-Ubuntu-Regular text-xs text-[#29313F] ml-2' >(Position)</p>
                        </div>
                        {/* <p className='font-Ubuntu-Medium text-[#29313F] text-sm mt-1' >-- <span className='font-Ubuntu-Regular text-xs' >(Position)</span></p> */}
                    </div>
                </div>
                <div className='w-full grid grid-cols-5 gap-4 mt-4' >
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >CAPUT</p>
                        <Input 
                            name="caput"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("caput", true, true)
                            }  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                        <div className="w-full h-auto pt-2">
                            {formik.touched.caput && formik.errors.caput && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                >
                                    {formik.errors.caput}
                                </motion.p>
                            )}
                        </div> 
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >Moulding</p>
                        <Input 
                            name="moulding"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("moulding", true, true)
                            }  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                        <div className="w-full h-auto pt-2">
                            {formik.touched.moulding && formik.errors.moulding && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                >
                                    {formik.errors.moulding}
                                </motion.p>
                            )}
                        </div> 
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >PELVIS</p>
                        <Input 
                            name="pelvis"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("pelvis", true, true)
                            }  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                        <div className="w-full h-auto pt-2">
                            {formik.touched.pelvis && formik.errors.pelvis && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                >
                                    {formik.errors.pelvis}
                                </motion.p>
                            )}
                        </div> 
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >FORECAST</p>
                        <Input 
                            name="forecast"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("forecast", true, true)
                            }  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                        <div className="w-full h-auto pt-2">
                            {formik.touched.forecast && formik.errors.forecast && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                >
                                    {formik.errors.forecast}
                                </motion.p>
                            )}
                        </div> 
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >Signature</p>
                        <Input 
                            name="signature"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("signature", true, true)
                            }  
                            className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                        <div className="w-full h-auto pt-2">
                            {formik.touched.signature && formik.errors.signature && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                >
                                    {formik.errors.signature}
                                </motion.p>
                            )}
                        </div> 
                    </div> 
                </div>
            </div>

            <div className='w-full flex mt-4 font-Ubuntu-Medium' >
                <button className='  py-3 w-36 ml-auto text-[#7123E2] text-sm mt-4 rounded-full' >Cancel</button> 
                {loading ?  
                    <button className='bg-[#7123E2] h-12 flex justify-center items-center w-48  text-white text-sm mt-6 rounded-full' >
                        <div className='flex items-center ' >
                            <LoaderIcon size='w-10 h-10 mr-1 s' /> 
                            Loading
                        </div> 
                    </button>
                    :
                    <button onClick={submit} className='bg-[#7123E2] py-3 w-48  text-white text-sm mt-6 rounded-full' >Add Information</button>
                }
            </div>
        </div>
    )
}
