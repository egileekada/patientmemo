import { Input, Textarea } from '@chakra-ui/react';
import { useFormik } from 'formik';
import { motion } from 'framer-motion';
import React from 'react'
import { useNavigate } from 'react-router';
import * as yup from 'yup' 
import LoaderIcon from '../../LoaderIcon';

export default function Physicalexamination(props: any) { 
        const navigate = useNavigate()
        const [loading, setLoading] = React.useState(false); 
     
    return (
        <div className='w-full h-full px-12 py-10 font-Ubuntu-Regular' > 
            <p className='text-lg font-Ubuntu-Bold' >Physical Examination</p>
            <div className='w-full flex mt-8' >
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Height</p>
                    <Input value={props.data["physicalExamination.height"]}  
                        onChange={(e)=> props.setData({...props.data, "physicalExamination.height": e.target.value})} 
                        fontSize='sm'  />
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Weight</p>
                    <Input value={props.data["physicalExamination.weight"]}  
                        onChange={(e)=> props.setData({...props.data, "physicalExamination.weight": e.target.value})}  
                        fontSize='sm'  />
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >B.P</p>
                    <Input value={props.data["physicalExamination.BP"]}  
                        onChange={(e)=> props.setData({...props.data, "physicalExamination.BP": e.target.value})}  
                        fontSize='sm' />
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Breast & Nipples</p>
                    <Input value={props.data["physicalExamination.breastAndNipples"]}  
                        onChange={(e)=> props.setData({...props.data, "physicalExamination.breastAndNipples": e.target.value})}  
                        fontSize='sm' />
                </div>
            </div>
            <div className='w-full flex mt-4' >
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >PVC</p>
                    <Input value={props.data["physicalExamination.PVC"]}  
                        onChange={(e)=> props.setData({...props.data, "physicalExamination.PVC": e.target.value})} 
                        fontSize='sm'  />
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Genotype</p>
                    <Input value={props.data["physicalExamination.genotype"]}  
                        onChange={(e)=> props.setData({...props.data, "physicalExamination.genotype": e.target.value})}  
                        fontSize='sm'  />
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Kahn</p>
                    <Input value={props.data["physicalExamination.kahn"]}  
                        onChange={(e)=> props.setData({...props.data, "physicalExamination.kahn": e.target.value})}  
                        fontSize='sm' />
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Group R.H</p>
                    <Input value={props.data["physicalExamination.groupRH"]}  
                        onChange={(e)=> props.setData({...props.data, "physicalExamination.groupRH": e.target.value})}  
                        fontSize='sm' />
                </div>
            </div>
            <div className='w-full flex mt-4' >
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Chest X-Ray</p>
                    <Input value={props.data["physicalExamination.chestXray"]}  
                        onChange={(e)=> props.setData({...props.data, "physicalExamination.chestXray": e.target.value})} 
                        fontSize='sm'  />
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >General Condition</p>
                    <Input value={props.data["physicalExamination.generalCondition"]}  
                        onChange={(e)=> props.setData({...props.data, "physicalExamination.generalCondition": e.target.value})}  
                        fontSize='sm'  />
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Ocdema</p>
                    <Input value={props.data["physicalExamination.ocdema"]}  
                        onChange={(e)=> props.setData({...props.data, "physicalExamination.ocdema": e.target.value})}  
                        fontSize='sm' />
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Anaemia</p>
                    <Input value={props.data["physicalExamination.anaemia"]}  
                        onChange={(e)=> props.setData({...props.data, "physicalExamination.anaemia": e.target.value})}  
                        fontSize='sm' />
                </div>
            </div>
                <div className='mr-2 w-full mt-4' >
                    <p className='text-xs mb-2' >Respiratory System</p>
                    <Input value={props.data["physicalExamination.respiratorySystem"]}  
                        onChange={(e)=> props.setData({...props.data, "physicalExamination.respiratorySystem": e.target.value})}  
                        fontSize='sm' />
                </div>
                <div className='mr-2 w-full mt-4' >
                    <p className='text-xs mb-2' >Cardiovascular System</p>
                    <Input value={props.data["physicalExamination.cardiovascularSystem"]}  
                        onChange={(e)=> props.setData({...props.data, "physicalExamination.cardiovascularSystem": e.target.value})}  
                        fontSize='sm' />
                </div>

            <div className='w-full flex mt-4' >
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Abdomen</p>
                    <Input value={props.data["physicalExamination.abdomen"]}  
                        onChange={(e)=> props.setData({...props.data, "physicalExamination.abdomen": e.target.value})} 
                        fontSize='sm'  />
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Spleen</p>
                    <Input value={props.data["physicalExamination.spleen"]}  
                        onChange={(e)=> props.setData({...props.data, "physicalExamination.spleen": e.target.value})}  
                        fontSize='sm'  />
                </div> 
            </div> 
                <div className='mr-2 w-full mt-4' >
                    <p className='text-xs mb-2' >CM </p>
                    <Input value={props.data["physicalExamination.CM"]}  
                        onChange={(e)=> props.setData({...props.data, "physicalExamination.CM": e.target.value})}  
                        fontSize='sm'  />
                </div> 
                <div className='mr-2 w-full mt-4' >
                    <p className='text-xs mb-2' >Vagina Examination</p>
                    <Input value={props.data["physicalExamination.vaginaExamination"]}  
                        onChange={(e)=> props.setData({...props.data, "physicalExamination.vaginaExamination": e.target.value})}  
                        fontSize='sm'  />
                </div> 
                <div className='mr-2 w-full mt-4' >
                    <p className='text-xs mb-2' >Other Abinormalities</p>
                    <Input value={props.data["physicalExamination.otherAbnormalities"]}  
                        onChange={(e)=> props.setData({...props.data, "physicalExamination.otherAbnormalities": e.target.value})}  
                        fontSize='sm'  />
                </div> 
                <div className='mr-2 w-full mt-4' >
                    <p className='text-xs mb-2' >Comments</p>
                    <Textarea  value={props.data["physicalExamination.comments"]}  
                        onChange={(e)=> props.setData({...props.data, "physicalExamination.comments": e.target.value})} 
                        fontSize='sm'  />
                </div> 
                <div className='mr-2 w-full mt-4' >
                    <p className='text-xs mb-2' >Examiner</p>
                    <Input value={props.data["physicalExamination.examiner"]}  
                        onChange={(e)=> props.setData({...props.data, "physicalExamination.examiner": e.target.value})}  
                        fontSize='sm'  />
                </div> 
            <div className='w-full flex pb-10 py-4' >
                <button onClick={()=> props.next(4) }  className='  py-3 w-36 ml-auto text-[#A5B0C1] text-sm mt-4 rounded-full' >back</button>
                {loading ?  
                    <button className='bg-[#7123E2] h-12 flex justify-center items-center w-48  text-white text-sm mt-6 rounded-full' >
                        <div className='flex items-center ' >
                            <LoaderIcon size='w-10 h-10 mr-1 ' /> 
                            Loading
                        </div> 
                    </button>
                    :
                    <button onClick={()=> props.next(6) } className='bg-[#7123E2] py-3 w-48  text-white text-sm mt-6 rounded-full' >Next</button>
                }
            </div>
        </div>
    )
} 