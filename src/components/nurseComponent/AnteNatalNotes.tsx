import React from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom' 
import FindPatient from '../doctorComponent/continuationSheetComponent/FindPatient'
import FollowUpVisit from './AnteNatalNotesComponent/FollowUpVisit'
import HistoryOfPresentPregnancy from './AnteNatalNotesComponent/HistoryOfPresentPregnancy'
import PersonnalInformation from './AnteNatalNotesComponent/PersonnalInformation'
import Physicalexamination from './AnteNatalNotesComponent/Physicalexamination'
import Previousmedicalhistory from './AnteNatalNotesComponent/Previousmedicalhistory'
import SpecialInvestigation from './AnteNatalNotesComponent/SpecialInvestigation'

export default function AnteNatalNotes() {

    const { isLoading, data, refetch } = useQuery('patientdata', () =>
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
    

    const [next, setNext] = React.useState(1)
    const navigate = useNavigate()
    const [patientInfo, setPatientInfo] = React.useState({
        "patient": data?.data?._id,
        "firstName": data?.data?.firstName,
        "lastName": data?.data?.lastName,
        "otherNames": data?.data?.otherName,
        "specialPoint": "",
        "dateOfBooking": "",
        "indicationOfBook": "",
        "LMP": "",
        "EDD": "",
        "address": data?.data?.address,
        "stateOfOrigin": data?.data?.stateOfOrigin,
        "age": data?.data?.age+"",
        "occupation": data?.data?.occupation,
        "nationality": "",
        "husband.name": "",
        "husband.occupation": "",
        "husband.employer": "",
        "prevMedHistory.heartDisease": "",
        "prevMedHistory.kidneyDisease": "",
        "prevMedHistory.chestDisease": "",
        "prevMedHistory.operations": "",
        "prevMedHistory.GIT": "",
        "prevMedHistory.endocrine": "",
        "prevMedHistory.NIL": "",
        "prevPregnancy.total": "",
        "prevPregnancy.noOfLivingChildren": "",
        "prevPregnancy.dateOfBirth": "",
        "prevPregnancy.durationOfPregnancy": "",
        "prevPregnancy.pregLabourAndPuerperium": "",
        "prevPregnancy.birthWeight": "",
        "prevPregnancy.babySex": "",
        "specialInvestigation.report": "",
        "curPregHistory.bleeding": "",
        "curPregHistory.discharge": "",
        "curPregHistory.urinarySymptoms": "",
        "curPregHistory.swellingAnkles": "",
        "curPregHistory.otherSymptoms": "",
        "curPregHistory.details": "",
        "physicalExamination.height": "",
        "physicalExamination.weight": "",
        "physicalExamination.BP": "",
        "physicalExamination.breastAndNipples": "",
        "physicalExamination.PVC": "",
        "physicalExamination.genotype": "",
        "physicalExamination.kahn": "",
        "physicalExamination.groupRH": "",
        "physicalExamination.chestXray": "",
        "physicalExamination.generalCondition": "",
        "physicalExamination.ocdema": "",
        "physicalExamination.anaemia": "",
        "physicalExamination.respiratorySystem": "",
        "physicalExamination.cardiovascularSystem": "",
        "followUpVisit.date": "",
        "followUpVisit.heightOfFundus": "",
        "followUpVisit.presentationAndPosition": "",
        "followUpVisit.roFPPartOfBirth": "",
        "followUpVisit.feotalHeart": "",
        "followUpVisit.urine": "",
        "followUpVisit.BP": "",
        "followUpVisit.weight": "",
        "followUpVisit.HB": "",
        "followUpVisit.oedema": "",
        "followUpVisit.initialExaminer": "",
        "followUpVisit.remarks": ""
      }) 
    const [requestData, setData] = React.useState({} as any);

    console.log(patientInfo['curPregHistory.details']);
    

    return (
        <div className='w-full h-full ' >
            <div className='w-full py-3 px-12 border-b flex items-center border-[#D7D0DF]' > 
                {/* <div onClick={()=> navigate('/dashboard/nurse')} className='w-10 h-10 rounded-full cursor-pointer flex items-center justify-center bg-[#7123E214]' >
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 11L1 6L6 1" stroke="#7123E2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div> */}
                <p className='font-Ubuntu-Medium text-lg ml-3' >ANTE-NATAL NOTES</p>
            </div>
            <div className='w-full h-full px-6 flex ' >
                <div className='h-auto w-auto border-r border-[#D7D0DF] px-4 pr-12 ' >
                    {/* <div className='flex items-center mt-20' >
                        <div className='w-10 h-10 flex justify-center items-center border border-[#7123E2] rounded-full ' >
                            <div className='w-5 h-5 bg-[#7123E2] rounded-full ' />
                        </div>
                        <p className='text-sm font-Ubuntu-Medium ml-3 text-[#7123E2]' >Personal Information</p>
                    </div> */}
                    <div className='flex items-center  mt-20' >
                        <div className={next >= 1 ? 'w-10 h-10 flex justify-center items-center border border-[#7123E2] rounded-full ' : 'w-10 h-10 flex justify-center items-center border border-[#5F6777] rounded-full '} >
                            <div className={next >= 1 ? 'w-5 h-5 bg-[#7123E2] rounded-full ': 'w-5 h-5 bg-[#5F6777] rounded-full '} />
                        </div>
                        <p className={next >= 1 ? 'text-sm font-Ubuntu-Medium ml-3 text-[#7123E2]' : 'text-sm font-Ubuntu-Medium ml-3 text-[#5F6777]'} >Personal Information</p>
                    </div>
                    <div style={{width: '1px', marginLeft: '19px'}} className='h-10 bg-[#5F6777]' >

                    </div>
                    <div className='flex items-center' >
                        <div className={next >= 2 ? 'w-10 h-10 flex justify-center items-center border border-[#7123E2] rounded-full ' : 'w-10 h-10 flex justify-center items-center border border-[#5F6777] rounded-full '} >
                            <div className={next >= 2 ? 'w-5 h-5 bg-[#7123E2] rounded-full ': 'w-5 h-5 bg-[#5F6777] rounded-full '} />
                        </div>
                        <p className={next >= 2 ? 'text-sm font-Ubuntu-Medium ml-3 text-[#7123E2]' : 'text-sm font-Ubuntu-Medium ml-3 text-[#5F6777]'} >Prev. Medical History</p>
                    </div>
                    <div style={{width: '1px', marginLeft: '19px'}} className='h-10 bg-[#5F6777]' >

                    </div>
                    <div className='flex items-center' >
                        <div className={next >= 3 ? 'w-10 h-10 flex justify-center items-center border border-[#7123E2] rounded-full ' : 'w-10 h-10 flex justify-center items-center border border-[#5F6777] rounded-full ' } >
                            <div className={next >= 3 ? 'w-5 h-5 bg-[#7123E2] rounded-full ' : 'w-5 h-5 bg-[#5F6777] rounded-full '} />
                        </div>
                        <p className={next >= 3 ? 'text-sm font-Ubuntu-Medium ml-3 text-[#7123E2]' : 'text-sm font-Ubuntu-Medium ml-3 text-[#5F6777]'} >Special Report</p>
                    </div>
                    <div style={{width: '1px', marginLeft: '19px'}} className='h-10 bg-[#5F6777]' >

                    </div>
                    <div className='flex items-center' >
                        <div className={next >= 4 ? 'w-10 h-10 flex justify-center items-center border border-[#7123E2] rounded-full ' : 'w-10 h-10 flex justify-center items-center border border-[#5F6777] rounded-full ' } >
                            <div className={next >= 4 ? 'w-5 h-5 bg-[#7123E2] rounded-full ' : 'w-5 h-5 bg-[#5F6777] rounded-full '} />
                        </div>
                        <p className={next >= 4 ? 'text-sm font-Ubuntu-Medium ml-3 text-[#7123E2]' : 'text-sm font-Ubuntu-Medium ml-3 text-[#5F6777]'} >History of Present Preg.</p>
                    </div>
                    <div style={{width: '1px', marginLeft: '19px'}} className='h-10 bg-[#5F6777]' >

                    </div>
                    <div className='flex items-center' >
                        <div className={next >= 5 ? 'w-10 h-10 flex justify-center items-center border border-[#7123E2] rounded-full ' : 'w-10 h-10 flex justify-center items-center border border-[#5F6777] rounded-full ' } >
                            <div className={next >= 5 ? 'w-5 h-5 bg-[#7123E2] rounded-full ' : 'w-5 h-5 bg-[#5F6777] rounded-full '} />
                        </div>
                        <p className={next >= 5 ? 'text-sm font-Ubuntu-Medium ml-3 text-[#7123E2]' : 'text-sm font-Ubuntu-Medium ml-3 text-[#5F6777]'} >Physical Examination</p>
                    </div>
                    <div style={{width: '1px', marginLeft: '19px'}} className='h-10 bg-[#5F6777]' >

                    </div>
                    <div className='flex items-center' >
                        <div className={next >= 6 ? 'w-10 h-10 flex justify-center items-center border border-[#7123E2] rounded-full ' : 'w-10 h-10 flex justify-center items-center border border-[#5F6777] rounded-full ' } >
                            <div className={next >= 6 ? 'w-5 h-5 bg-[#7123E2] rounded-full ' : 'w-5 h-5 bg-[#5F6777] rounded-full '} />
                        </div>
                        <p className={next >= 6 ? 'text-sm font-Ubuntu-Medium ml-3 text-[#7123E2]' : 'text-sm font-Ubuntu-Medium ml-3 text-[#5F6777]'} >Follow up visit</p>
                    </div>
                    <div style={{width: '1px', marginLeft: '19px'}} className='h-10 bg-[#5F6777]' >

                    </div>
                    <div className='flex items-center' >
                        <div className={next >= 7 ? 'w-10 h-10 flex justify-center items-center border border-[#7123E2] rounded-full ' : 'w-10 h-10 flex justify-center items-center border border-[#5F6777] rounded-full ' } >
                            <div className={next >= 7 ? 'w-5 h-5 bg-[#7123E2] rounded-full ' : 'w-5 h-5 bg-[#5F6777] rounded-full '} />
                        </div>
                        <p className={next >= 7 ? 'text-sm font-Ubuntu-Medium ml-3 text-[#7123E2]' : 'text-sm font-Ubuntu-Medium ml-3 text-[#5F6777]'} >Pelvic Assessment</p>
                    </div>
                </div>
                <div className='flex flex-1 justify-center w-full ' > 
                    <div className={next === 0 ? " w-full ": "hidden"} >
                        <FindPatient header='Patient Delivery Record' body='To create/view a patient’s delivery record, you wil have to verify if patient has a file in the hospital.'  next={setNext} value={setData} />
                    </div>  
                    <div className={next === 1 ? " w-full ": "hidden"} >
                        <PersonnalInformation data={patientInfo} setData={setPatientInfo} next={setNext} />
                    </div>
                   
                    <div className={next === 2 ? " w-full ": "hidden"} >
                        <Previousmedicalhistory data={patientInfo} setData={setPatientInfo} next={setNext} />
                    </div>
                   
                    <div className={next === 3 ? " w-full ": "hidden"} >
                        <SpecialInvestigation data={patientInfo} setData={setPatientInfo} next={setNext} />
                    </div>
                   
                    <div className={next === 4 ? " w-full ": "hidden"} >
                        <HistoryOfPresentPregnancy data={patientInfo} setData={setPatientInfo} next={setNext} />
                    </div>
                   
                    <div className={next === 5 ? " w-full ": "hidden"} >
                        <Physicalexamination data={patientInfo} setData={setPatientInfo} next={setNext} />
                    </div>
                   
                    <div className={next === 6 ? " w-full ": "hidden"} >
                        <FollowUpVisit data={patientInfo} setData={setPatientInfo} next={setNext} />
                    </div>
                </div> 
            </div>
        </div>
    )
} 