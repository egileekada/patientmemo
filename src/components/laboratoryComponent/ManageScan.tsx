import { InputGroup, InputRightElement, Input } from '@chakra-ui/input'
import React from 'react'
// import * as yup from 'yup'
// import { useFormik } from 'formik';  
// import { motion } from 'framer-motion'
import * as axios from 'axios'   
import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query';
import LoaderIcon from '../LoaderIcon';
import Scan from '../../assets/images/scan.jpg'
import DateFormat from '../DateFormat';
import GetUserInfo from '../GetUserInfo';
import Modal from '../Modal';
import ListOfRequest from './scanComponent/ListOfRequest';
import FindPatient from './FindPatient';
import ShowPrescription from '../nurseComponent/MedicationSheetComponent/ShowPrescription';
import ListOfPatientScan from './scanComponent/ListOfPatientScan';
import ListRequestForPatient from './scanComponent/ListRequestForPatient';

export default function ManageScan() {
    
    const navigate = useNavigate()  
    const [showModal, setShowModal] = React.useState(false)  
    const [requestData, setData] = React.useState({} as any);
    const [next, setNext] = React.useState(3) 


    const ClickHandler =()=> { 
        {next === 1 && (
            setNext(0)
        )}
        {next === 2 && (
            setNext(0)
        )}
        {next === 3 && (
            setNext(2)
        )}
        {next === 0 && (
            navigate('/dashboard/laboratory')
        )}
    }

    return (
        <div className='w-full h-full ' > 
            {/* <Modal message={message} modal={modal} /> */}
            {/* <div className='w-full py-3 px-12 border-b flex items-center border-[#D7D0DF]' >  */}
                {/* <div onClick={()=> ClickHandler()} className='w-10 h-10 rounded-full cursor-pointer flex items-center justify-center bg-[#7123E214]' >
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 11L1 6L6 1" stroke="#7123E2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div> */}
                {/* <p className='font-Ubuntu-Medium text-lg ml-3' >Manage Scan Activities</p>
                <div onClick={()=> setShowModal(true)} className='font-Ubuntu-Medium relative flex cursor-pointer text-base mr-8 ml-auto text-[#7123E2] ' > 
                    <p>Requests</p> */}
                    {/* <p className='text-xs text-[#7123E2] rounded-full bg-[#7123E214] h-6 w-6 flex justify-center items-center -mt-3 ' >32</p> */}
                {/* </div>
            </div> */}
            <div className='w-full relative' > 


            {next === 0 && (
                <div className='w-full flex justify-center items-center' > 
                    <FindPatient header='Upload Scan Result' body='To upload a patient scan record, you wil have to verify if patient has a file in the hospital.' next={setNext} value={setData} /> 
                </div>
            )}
            
            {next === 3 && (
                <div className='w-full flex justify-center items-center' > 
                    <ListOfPatientScan requestInfo={requestData} />
                </div>
            )}

            {next === 2 && (
                <div className='w-full flex justify-center items-center' > 
                    <ShowPrescription header='Scan Request' button='Add Scan' data={requestData}  next={setNext} />
                </div>
            )}

            {next === 1 && (
                <div className='w-full flex justify-center items-center' > 
                    <ListRequestForPatient data={requestData} value={setData} next={setNext} />
                </div>
            )}


            {showModal ? 
                (
                    <>
                        <div className="h-auto flex justify-end items-center overflow-x-hidden overflow-y-hidden fixed pr-10 inset-0 z-50 outline-none focus:outline-none">  
                            <ListOfRequest close={setShowModal} data={setData} next={setNext} />
                        </div> 
                        <div className="fixed flex flex-1 inset-0 z-20 bg-transparent "/>
                    </>
                ) : null}  
            </div>
        </div>
    )
} 


// <div className='w-full h-full px-6 flex ' > 
// <div className='h-auto border-r border-[#D7D0DF] pl-4 pr-8 pb-10 ' >
//     <div className='flex mt-10' >
//         <p className='text-lg font-Ubuntu-Medium' >Scan Request</p>
//         {/* <p className='text-sm text-[#A5B0C1] ml-3 font-Ubuntu-Medium' >13</p> */}
//     </div>
//     {isLoading && (
//         <div className='w-full h-full py-20 justify-center item-center flex flex-1' > 
//             <LoaderIcon size='w-20 h-20 mr-1 ' /> 
//         </div> 
//     )} 
//     {!isLoading && (
//         <>
//             {data.map((item: any) => {
//                 return(
//                     <> 
//                         {item.kind === 'scan' && ( 
//                             <div className='mt-8' >
//                                 <div className='w-8 h-8 rounded-full flex bg-[#7123E214] justify-center items-center' >
//                                     <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <path d="M6.99967 8.85179C9.53054 8.85179 11.6663 9.26304 11.6663 10.8497C11.6663 12.437 9.51653 12.8337 6.99967 12.8337C4.46939 12.8337 2.33301 12.4224 2.33301 10.8357C2.33301 9.24846 4.48281 8.85179 6.99967 8.85179ZM6.99967 1.16699C8.71415 1.16699 10.0878 2.54017 10.0878 4.25344C10.0878 5.96671 8.71415 7.34047 6.99967 7.34047C5.28578 7.34047 3.91152 5.96671 3.91152 4.25344C3.91152 2.54017 5.28578 1.16699 6.99967 1.16699Z" fill="#7123E2"/>
//                                     </svg>
//                                 </div>
//                                 <p className='font-Ubuntu-Medium text-sm mt-2' >{item.patient.firstName+' '+item.patient.lastName}</p>
//                                 <button onClick={()=> ClickHandler(item)} className='text-xs font-Ubuntu-Bold px-4 rounded-md py-3 bg-[#7123E2] mt-3 text-white' >Grant Request/Upload Result</button>
//                             </div> 
//                         )}
//                     </>
//                 )
//             })}
//         </>
//     )} 
// </div>
// <div className='flex flex-1 py-10 px-7' >
// </div>
// </div>