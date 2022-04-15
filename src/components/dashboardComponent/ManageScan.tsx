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

export default function ManageScan() {
    
    const navigate = useNavigate() 
    const [ selectedFiles, setSelectedFiles ] = React.useState([]);
    const [ imageFiles, setImageFiles ] = React.useState([]  as Array<string>);  
    const [ requestInfo, setRequestInfo ] = React.useState({}as any); 
 
    const [role, setRole] = React.useState(''); 
    const [loading, setLoading] = React.useState(false);
    const [show, setShow] = React.useState(false);

	const handleImageChange = (e:any) => {  
		if (e.target.files) {
			const filesArray: any = Array.from(e.target.files).map((file:any) => URL.createObjectURL(file)); 
            const fileName = Array.from(e.target.files).map((file) => file);  

            setImageFiles((prevImages: any) => prevImages.concat(fileName));
			setSelectedFiles((prevImages: any) => prevImages.concat(filesArray));
			Array.from(e.target.files).map(
				(file : any) => URL.revokeObjectURL(file) // avoid memory leak
			);
        } 
    };  

    const sumbit =async(item: any)=> {
        if (!imageFiles) {
            alert('Please Add Images to continue');
            return; 
        }else {
            setLoading(true)
            try {
            
                let formData = new FormData()  

                // formData.append('requestId', requestInfo.madeBy._id) 
                item.map((items: any)=> {
                    formData.append('images', items) 
                })   
        
                await axios.default.put(`https://hospital-memo-api.herokuapp.com/requests/scan/${requestInfo._id}`, formData, {
                    headers: { 'content-type': 'application/json',
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                }})      
                
                navigate('/dashboard')
                alert('Upload Successfull')
                
            } catch (error) { 
                return error
            }
        }
    }  

    const { isLoading, data } = useQuery('requestAll', () =>
        fetch(`https://hospital-memo-api.herokuapp.com/requests`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )      

    // console.log(data)

    const ClickHandler =(item: any)=> {
        setShow(true)
        setRequestInfo(item)
    }

    return (
        <div className='w-full h-full ' >
            <div className='w-full py-3 px-12 border-b flex items-center border-[#D7D0DF]' > 
                <div onClick={()=> navigate('/dashboard')} className='w-10 h-10 rounded-full cursor-pointer flex items-center justify-center bg-[#7123E214]' >
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 11L1 6L6 1" stroke="#7123E2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <p className='font-Ubuntu-Medium text-lg ml-3' >Manage Scan Activities</p>
            </div>
            <div className='w-full h-full px-6 flex ' > 
                <div className='h-auto border-r border-[#D7D0DF] pl-4 pr-8 pb-10 ' >
                    <div className='flex mt-10' >
                        <p className='text-lg font-Ubuntu-Medium' >Scan Request</p>
                        {/* <p className='text-sm text-[#A5B0C1] ml-3 font-Ubuntu-Medium' >13</p> */}
                    </div>
                    {isLoading && (
                        <div className='w-full h-full py-20 justify-center item-center flex flex-1' > 
                            <LoaderIcon size='w-20 h-20 mr-1 ' /> 
                        </div> 
                    )} 
                    {!isLoading && (
                        <>
                            {data.map((item: any) => {
                                return(
                                    <> 
                                        {item.kind === 'scan' && ( 
                                            <div className='mt-8' >
                                                <div className='w-8 h-8 rounded-full flex bg-[#7123E214] justify-center items-center' >
                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.99967 8.85179C9.53054 8.85179 11.6663 9.26304 11.6663 10.8497C11.6663 12.437 9.51653 12.8337 6.99967 12.8337C4.46939 12.8337 2.33301 12.4224 2.33301 10.8357C2.33301 9.24846 4.48281 8.85179 6.99967 8.85179ZM6.99967 1.16699C8.71415 1.16699 10.0878 2.54017 10.0878 4.25344C10.0878 5.96671 8.71415 7.34047 6.99967 7.34047C5.28578 7.34047 3.91152 5.96671 3.91152 4.25344C3.91152 2.54017 5.28578 1.16699 6.99967 1.16699Z" fill="#7123E2"/>
                                                    </svg>
                                                </div>
                                                <p className='font-Ubuntu-Medium text-sm mt-2' >{item.patient.firstName+' '+item.patient.lastName}</p>
                                                <button onClick={()=> ClickHandler(item)} className='text-xs font-Ubuntu-Bold px-4 rounded-md py-3 bg-[#7123E2] mt-3 text-white' >Grant Request/Upload Result</button>
                                            </div> 
                                        )}
                                    </>
                                )
                            })}
                        </>
                    )} 
                </div>
                <div className='flex flex-1 py-10 px-7' >
                    <div className='w-full grid grid-cols-3 gap-6' >
                        {show && (
                            <>
                                <div  className=' h-52' >
                                    <div className='w-full h-32 relative' >
                                        <img src={Scan} className='w-full h-32 rounded-md object-cover'  alt='scan' />
                                        <div className='py-1 rounded-sm px-1 bg-[#FFFFFFCC] absolute bottom-2 right-2 ' >
                                            <p className='font-Ubuntu-Medium text-sm  flex items-center' >BY <GetUserInfo data={requestInfo.madeBy._id} />
                                            </p>
                                        </div>
                                    </div>
                                    <div className='mt-6 px-3 flex items-center' > 
                                        <div className='w-8 h-8 rounded-full flex bg-[#7123E214] justify-center items-center' >
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.99967 8.85179C9.53054 8.85179 11.6663 9.26304 11.6663 10.8497C11.6663 12.437 9.51653 12.8337 6.99967 12.8337C4.46939 12.8337 2.33301 12.4224 2.33301 10.8357C2.33301 9.24846 4.48281 8.85179 6.99967 8.85179ZM6.99967 1.16699C8.71415 1.16699 10.0878 2.54017 10.0878 4.25344C10.0878 5.96671 8.71415 7.34047 6.99967 7.34047C5.28578 7.34047 3.91152 5.96671 3.91152 4.25344C3.91152 2.54017 5.28578 1.16699 6.99967 1.16699Z" fill="#7123E2"/>
                                            </svg>
                                        </div>
                                        <div className='ml-3' > 
                                            <p className='font-Ubuntu-Medium text-sm' >{requestInfo.patient.firstName+' '+requestInfo.patient.lastName}</p>
                                            <p className='font-Ubuntu-Regular text-[#5F6777] mt-1 text-xs' >{DateFormat(requestInfo.updatedAt)}</p>
                                        </div>
                                        {/* <p className='font-Ubuntu-Regular text-[#7123E2] ml-auto text-xs'>5 Images</p> */}
                                    </div>
                                </div>
                                <div className=' h-52 border-dashed border py-7 px-5' > 
                                    <div className='flex items-center mb-5' > 
                                        <div className='w-10 h-10 rounded-full flex bg-[#7123E214] justify-center items-center' >
                                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.83398 8.9348L5.39598 10.9278L1.19992 15.1239C0.913797 14.742 0.705765 14.2977 0.606015 13.8121L0.605359 13.8114C0.587641 13.7241 0.575828 13.6355 0.564672 13.5456C0.562047 13.5226 0.556797 13.4997 0.554172 13.4761C0.543015 13.3632 0.537109 13.249 0.537109 13.1328V11.231L2.83398 8.9348ZM11.4112 6.64515L16.4617 10.517V13.1328C16.4617 14.9776 14.9766 16.4626 13.1319 16.4626H3.86692C3.7652 16.4626 3.66545 16.4567 3.56636 16.4476C3.53486 16.4449 3.50336 16.441 3.47186 16.4371C3.40492 16.4292 3.33798 16.4193 3.27236 16.4075C3.23495 16.401 3.19755 16.3951 3.16014 16.3865C3.15948 16.3865 3.15817 16.3865 3.15752 16.3865C3.07942 16.3695 3.00264 16.3491 2.92652 16.3268C2.86483 16.3084 2.8038 16.2874 2.74408 16.2658C2.72767 16.2599 2.71127 16.2546 2.69486 16.2481C2.48683 16.1693 2.28864 16.0709 2.10292 15.9534L11.4112 6.64515ZM6.21302 3.58637C6.74917 3.58637 7.17245 4.0103 7.17245 4.54646C7.17245 5.08262 6.74917 5.5059 6.21302 5.5059C5.67686 5.5059 5.25292 5.08262 5.25292 4.54646C5.25292 4.0103 5.67686 3.58637 6.21302 3.58637ZM6.21302 2.36115C5.01339 2.36115 4.02836 3.34749 4.02836 4.54646C4.02836 5.74543 5.01339 6.73046 6.21302 6.73046C7.41198 6.73046 8.39702 5.74543 8.39702 4.54646C8.39702 3.34749 7.41198 2.36115 6.21302 2.36115ZM3.86692 0.538086H13.1319C14.9766 0.538086 16.4617 2.02318 16.4617 3.86724V8.97352L11.7308 5.34643C11.6159 5.25849 11.4742 5.21387 11.3298 5.22043C11.1775 5.22765 11.0325 5.2913 10.9249 5.39893L6.2688 10.055L3.15883 7.63543C3.04464 7.54684 2.90289 7.50155 2.75852 7.5068C2.60495 7.51337 2.45861 7.57702 2.34967 7.68596L0.537109 9.49918V3.86724C0.537109 2.02318 2.0222 0.538086 3.86692 0.538086Z" fill="#7123E2"/>
                                            </svg>
                                        </div>
                                        <label className="cursor-pointer items-center ml-4 ">
                                            <input   style={{display:'none' , width:'100%', height: '100%'}} type="file" id="file" multiple onChange={handleImageChange} />
                                            <p className='font-Ubuntu-Medium text-sm' >Upload Scan Image</p>
                                            <p className='font-Ubuntu-Regular text-[#5F6777] mt-1 text-xs' >Drag and Drop or <span className='text-[#7123E2]' >Browse</span></p>
                                        </label>
                                        {loading && ( 
                                            <LoaderIcon size='w-12 h-12 ml-auto ' /> 
                                        )}
                                        {!loading && (
                                            <svg onClick={()=> sumbit(imageFiles)} className='ml-auto cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.368 8.79441C7.782 8.79441 8.118 9.13041 8.118 9.54441C8.118 9.95841 7.782 10.2944 7.368 10.2944H6.435C4.816 10.2944 3.5 11.6104 3.5 13.2284V18.1034C3.5 19.7224 4.816 21.0384 6.435 21.0384H17.565C19.183 21.0384 20.5 19.7224 20.5 18.1034V13.2194C20.5 11.6064 19.188 10.2944 17.576 10.2944H16.633C16.219 10.2944 15.883 9.95841 15.883 9.54441C15.883 9.13041 16.219 8.79441 16.633 8.79441H17.576C20.015 8.79441 22 10.7794 22 13.2194V18.1034C22 20.5494 20.01 22.5384 17.565 22.5384H6.435C3.99 22.5384 2 20.5494 2 18.1034V13.2284C2 10.7834 3.99 8.79441 6.435 8.79441H7.368ZM12.5306 2.22202L15.4466 5.15002C15.7386 5.44402 15.7376 5.91802 15.4446 6.21001C15.1506 6.50202 14.6766 6.50201 14.3846 6.20801L12.749 4.56677L12.7496 15.5413H11.2496L11.249 4.56677L9.6156 6.20801C9.4696 6.35601 9.2766 6.42901 9.0846 6.42901C8.8936 6.42901 8.7016 6.35602 8.5556 6.21001C8.2626 5.91802 8.2606 5.44402 8.5536 5.15002L11.4686 2.22202C11.7496 1.93902 12.2496 1.93902 12.5306 2.22202Z" fill="#7123E2"/>
                                            </svg>
                                        )}
                                    </div>
                                    <InputGroup >
                                        <InputRightElement 
                                        children={
                                            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 5L5 9L13 1" stroke="#7123E2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        }
                                        />
                                        <Input disabled _placeholder={{color: 'black'}} fontSize='xs' placeholder={requestInfo.patient.firstName+' '+requestInfo.patient.lastName} border='0px' backgroundColor='#F6F7F9'  /> 
                                    </InputGroup> 
                                    <p className=' text-xs underline ml-auto mt-3 mb-5  font-Ubuntu-Medium w-full flex justify-end' >{imageFiles.length} <span className='text-[#B0BAC8] ml-2' >uploaded</span></p>
                                    <div className='w-full bg-[#F4EDFD] mt-auto'  style={{height: '2px'}} >
                                        <div style={{width: '40%'}} className='h-full bg-[#894ae2]' >

                                        </div>
                                    </div>
                                </div>
                                {selectedFiles && (
                                    <>
                                        {selectedFiles.map((item: any) =>{
                                            return( 
                                                <div key={item} className='w-full h-52 rounded-md' >
                                                    <img src={item} alt='files' className='w-full h-full rounded-md object-cover' />
                                                </div>
                                            )
                                        })}
                                    </>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
} 