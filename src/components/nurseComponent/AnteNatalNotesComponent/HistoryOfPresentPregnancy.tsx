import { Input, Textarea } from '@chakra-ui/react';
import { useFormik } from 'formik';
import { motion } from 'framer-motion';
import React from 'react'
import { useNavigate } from 'react-router';
import * as yup from 'yup' 
import LoaderIcon from '../../LoaderIcon';

export default function HistoryOfPresentPregnancy(props: any) {

    const navigate = useNavigate()
    const [loading, setLoading] = React.useState(false); 

    return (
        <div className='w-full h-full px-12 py-10 font-Ubuntu-Regular' > 
            <p className='text-lg font-Ubuntu-Bold' >History of Present Pregnancy</p>
            <div className='w-full flex mt-8' >
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Bleeding</p>
                    <Input 
                onChange={(e)=> props.setData({...props.data, "curPregHistory.bleeding": e.target.value})} 
                        fontSize='sm' />
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Discharge</p>
                    <Input 
                onChange={(e)=> props.setData({...props.data, "curPregHistory.discharge": e.target.value})}   
                        fontSize='sm' />
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Urinary Symptoms</p>
                    <Input 
                onChange={(e)=> props.setData({...props.data, "curPregHistory.urinarySymptoms": e.target.value})}   
                        fontSize='sm' />
                </div>
            </div>
            <div className='w-full flex mt-5' >
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Swelling Ankles</p>
                    <Input 
                onChange={(e)=> props.setData({...props.data, "curPregHistory.swellingAnkles": e.target.value})}  
                        fontSize='sm' />
                </div> 
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Other Symptoms</p>
                    <Input 
                onChange={(e)=> props.setData({...props.data, "curPregHistory.otherSymptoms": e.target.value})}   
                        fontSize='sm' />
                </div>
            </div>
            <div className='w-full flex mt-5' >
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Details</p>
                    <Textarea  
                onChange={(e)=> props.setData({...props.data, "curPregHistory.details": e.target.value})}   
                        fontSize='sm' />
                </div> 
            </div>
            <div className='w-full flex pb-10 py-4' >
                <button onClick={()=> props.next(4) }  className='  py-3 w-36 ml-auto text-[#A5B0C1] text-sm mt-4 rounded-full' >Cancel</button>
                {loading ?  
                    <button className='bg-[#7123E2] h-12 flex justify-center items-center w-48  text-white text-sm mt-6 rounded-full' >
                        <div className='flex items-center ' >
                            <LoaderIcon size='w-10 h-10 mr-1 ' /> 
                            Loading
                        </div> 
                    </button>
                    :
                    <button onClick={()=> props.next(5) } className='bg-[#7123E2] py-3 w-48  text-white text-sm mt-6 rounded-full' >Next</button>
                }
            </div>
        </div>
    )
}
