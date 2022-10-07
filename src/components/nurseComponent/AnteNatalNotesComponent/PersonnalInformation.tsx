import { Input, Select } from '@chakra-ui/react';
import { useFormik } from 'formik';
import { motion } from 'framer-motion';
import React from 'react'
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router';
import * as yup from 'yup' 
import LoaderIcon from '../../LoaderIcon';

export default function PersonnalInformation(props: any) {

    const navigate = useNavigate()
    const [loading, setLoading] = React.useState(false);  

    const { isLoading, data, refetch } = useQuery('get-antenatal'+localStorage.getItem("patientId"), () =>
        fetch(`https://hospital-memo-api.herokuapp.com/nurse/get-antenatal/${localStorage.getItem("patientId")}`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )    

    React.useEffect(() => {
        if(data?.data){
            props.setData({ 
                "patient": data?.data?._id,
                "firstName": data?.data?.firstName,
                "lastName": data?.data?.lastName,
                "otherNames": data?.data?.otherName,
                "specialPoint": data?.data?.specialPoint,
                "dateOfBooking": data?.data?.dateOfBooking,
                "indicationOfBook": data?.data?.indicationOfBook,
                "LMP": data?.data?.LMP,
                "EDD": data?.data?.EDD,
                "address": data?.data?.address,
                "stateOfOrigin": data?.data?.stateOfOrigin,
                "age": data?.data?.age+"",
                "occupation": data?.data?.occupation,
                "nationality": data?.data?.nationality,
                "husband.name": data?.data?.husband.name,
                "husband.occupation": data?.data?.husband.occupation,
                "husband.employer": data?.data?.husband.employer,
                "prevMedHistory.heartDisease": data?.data?.prevMedHistory.heartDisease,
                "prevMedHistory.kidneyDisease": data?.data?.prevMedHistory.kidneyDisease,
                "prevMedHistory.chestDisease": data?.data?.prevMedHistory.chestDisease,
                "prevMedHistory.operations": data?.data?.prevMedHistory.operations,
                "prevMedHistory.GIT": data?.data?.prevMedHistory.GIT,
                "prevMedHistory.endocrine": data?.data?.prevMedHistory.endocrine,
                "prevMedHistory.NIL": data?.data?.prevMedHistory.NIL,
                "prevPregnancy.total": data?.data?.prevPregnancy.total,
                "prevPregnancy.noOfLivingChildren": data?.data?.prevPregnancy.noOfLivingChildren,
                "prevPregnancy.dateOfBirth": data?.data?.prevPregnancy.dateOfBirth,
                "prevPregnancy.durationOfPregnancy": data?.data?.prevPregnancy.durationOfPregnancy,
                "prevPregnancy.pregLabourAndPuerperium": data?.data?.prevPregnancy.pregLabourAndPuerperium,
                "prevPregnancy.birthWeight": data?.data?.prevPregnancy.birthWeight,
                "prevPregnancy.babySex": data?.data?.prevPregnancy.babySex,
                "specialInvestigation.report": data?.data?.specialInvestigation.report,
                "curPregHistory.bleeding": data?.data?.curPregHistory.bleeding,
                "curPregHistory.discharge": data?.data?.curPregHistory.discharge,
                "curPregHistory.urinarySymptoms": data?.data?.curPregHistory.urinarySymptoms,
                "curPregHistory.swellingAnkles": data?.data?.curPregHistory.swellingAnkles,
                "curPregHistory.otherSymptoms": data?.data?.curPregHistory.otherSymptoms,
                "curPregHistory.details": data?.data?.curPregHistory.details,
                "physicalExamination.height": data?.data?.physicalExamination.height,
                "physicalExamination.weight": data?.data?.physicalExamination.weight,
                "physicalExamination.BP": data?.data?.physicalExamination.BP,
                "physicalExamination.breastAndNipples": data?.data?.physicalExamination.breastAndNipples,
                "physicalExamination.PVC": data?.data?.physicalExamination.PVC,
                "physicalExamination.genotype": data?.data?.physicalExamination.genotype,
                "physicalExamination.kahn": data?.data?.physicalExamination.kahn,
                "physicalExamination.groupRH": data?.data?.physicalExamination.groupRH,
                "physicalExamination.chestXray": data?.data?.physicalExamination.chestXray,
                "physicalExamination.generalCondition": data?.data?.physicalExamination.generalCondition,
                "physicalExamination.ocdema": data?.data?.physicalExamination.ocdema,
                "physicalExamination.anaemia": data?.data?.physicalExamination.anaemia,
                "physicalExamination.respiratorySystem": data?.data?.physicalExamination.respiratorySystem,
                "physicalExamination.cardiovascularSystem": data?.data?.physicalExamination.cardiovascularSystem, 
                "physicalExamination.abdomen": data?.data?.physicalExamination.abdomen,
                "physicalExamination.spleen": data?.data?.physicalExamination.spleen,
                "physicalExamination.CM": data?.data?.physicalExamination.CM,
                "physicalExamination.vaginaExamination": data?.data?.physicalExamination.vaginaExamination,
                "physicalExamination.otherAbnormalities": data?.data?.physicalExamination.otherAbnormalities,
                "physicalExamination.comments": data?.data?.physicalExamination.comments,
                "physicalExamination.examiner": data?.data?.physicalExamination.examiner,
                "followUpVisit.date": data?.data?.followUpVisit.date,
                "followUpVisit.heightOfFundus": data?.data?.followUpVisit.heightOfFundus,
                "followUpVisit.presentationAndPosition": data?.data?.followUpVisit.presentationAndPosition,
                "followUpVisit.roFPPartOfBirth": data?.data?.followUpVisit.roFPPartOfBirth,
                "followUpVisit.feotalHeart": data?.data?.followUpVisit.feotalHeart,
                "followUpVisit.urine": data?.data?.followUpVisit.urine,
                "followUpVisit.BP": data?.data?.followUpVisit.BP,
                "followUpVisit.weight": data?.data?.followUpVisit.weight,
                "followUpVisit.HB": data?.data?.followUpVisit.HB,
                "followUpVisit.oedema": data?.data?.followUpVisit.oedema,
                "followUpVisit.initialExaminer": data?.data?.followUpVisit.initialExaminer,
                "followUpVisit.remarks": data?.data?.followUpVisit.remarks
            })
        }
    }, [data])
    

    console.log(data);

    return (
        <div className='w-auto h-full px-12 py-10 font-Ubuntu-Regular' > 
            <p className='text-lg font-Ubuntu-Bold' >Personal Information</p>
            <div className='w-full flex mt-8' >
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >First Name</p>
                    <Input value={props.data.firstName}
                        fontSize='sm' placeholder='Enter First Name' />
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Last Name/Surname</p>
                    <Input  value={props.data.lastName}
                        fontSize='sm' placeholder='Enter Last Name' />
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Other Names</p>
                    <Input  value={props.data.otherNames}
                        fontSize='sm' placeholder='Enter other Names' />
                </div>
            </div>
            <div className='w-full flex mt-5' >
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Special Points</p>
                    <Input value={props.data.specialPoint} onChange={(e)=> props.setData({...props.data, specialPoint: e.target.value})} 
                        fontSize='sm' placeholder='...' />
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Date of Booking</p>
                    <Input  value={props.data.dateOfBooking} onChange={(e)=> props.setData({...props.data, dateOfBooking: e.target.value})} 
                        fontSize='sm' placeholder='...' />
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Indication for Booking</p>
                    <Input  value={props.data.indicationOfBook} onChange={(e)=> props.setData({...props.data, indicationOfBook: e.target.value})} 
                        fontSize='sm' placeholder='...' />
                </div>
            </div>
            <div className='w-full flex mt-5' >
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >L.M.P</p>
                    <Input  value={props.data.LMP} onChange={(e)=> props.setData({...props.data, LMP: e.target.value})} 
                        fontSize='sm' placeholder='L.M.P' />
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >E.D.D</p>
                    <Input  value={props.data.EDD} onChange={(e)=> props.setData({...props.data, EDD: e.target.value})} 
                        fontSize='sm' placeholder='E.D.D' />
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Address</p>
                    <Input  value={props.data.address}
                        fontSize='sm' placeholder='Home Address' />
                </div> 
            </div>
            <div className='w-full flex mt-5' >
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >State of Origin</p>
                    <Input  value={props.data.stateOfOrigin}
                        fontSize='sm' placeholder='Enter Your State' />
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Age</p>
                    <Input  value={props.data.age}
                        fontSize='sm' placeholder='Enter Age' />
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Occupation</p>
                    <Input  value={props.data.occupation}
                        fontSize='sm' placeholder='What do you do?' />
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Tribe/Nationality</p>
                    <Input  value={props.data.nationality} onChange={(e)=> props.setData({...props.data, nationality: e.target.value})} 
                        fontSize='sm' placeholder='0' />
                </div>
            </div>
            <p className='text-xs mt-8' >HUSBAND (IF ANY)</p>
            <div className='w-full flex mt-6' >
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Full Name</p>
                    <Input  value={props.data["husband.name"]} onChange={(e)=> props.setData({...props.data, "husband.name": e.target.value})} 
                        fontSize='sm' placeholder='' />
                </div> 
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Occupation</p>
                    <Input  value={props.data["husband.occupation"]} onChange={(e)=> props.setData({...props.data, "husband.occupation": e.target.value})} 
                        fontSize='sm' placeholder='Where does he work?' />
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Employer</p>
                    <Input  value={props.data["husband.employer"]} onChange={(e)=> props.setData({...props.data, "husband.employer": e.target.value})} 
                        fontSize='sm' placeholder='Employer' />
                </div>
            </div> 
            <div className='w-full flex pb-10 py-4' >
                {/* <button onClick={()=> navigate('/dashboard/nurse')}  className='  py-3 w-36 ml-auto text-[#A5B0C1] text-sm mt-4 rounded-full' >Cancel</button> */}
                {loading ?  
                    <button className='bg-[#7123E2] h-12 flex justify-center items-center ml-auto w-48  text-white text-sm mt-6 rounded-full' >
                        <div className='flex items-center ' >
                            <LoaderIcon size='w-10 h-10 mr-1 ' /> 
                            Loading
                        </div> 
                    </button>
                    :
                    <button onClick={()=> props.next(2) } className='bg-[#7123E2] py-3 w-48 ml-auto  text-white text-sm mt-6 rounded-full' >Next</button>
                }
            </div>
        </div>
    )
} 