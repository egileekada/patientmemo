import React from 'react'
import Scan from '../../../assets/images/scan.jpg'
import DateFormat from '../../DateFormat';
import GetUserInfo from '../../GetUserInfo';
import Modal from '../../Modal';
import * as axios from 'axios'   
import { useNavigate } from 'react-router-dom'
import LoaderIcon from '../../LoaderIcon';
import { useQuery } from 'react-query';

export default function ListOfPatientScan(props: any) {

    const userData: any = JSON.parse(localStorage.getItem('userData')+'') 
    const [ selectedFiles, setSelectedFiles ] = React.useState([]);
    const [ imageFiles, setImageFiles ] = React.useState([]  as Array<string>);  
    const [show, setShow] = React.useState(true);  
    const [message, setMessage] = React.useState('');
    const [modal, setModal] = React.useState(0);
    const [loading, setLoading] = React.useState(false);
    const navigate = useNavigate() 

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
    
    const submit =async(item: any)=> {
        if (selectedFiles.length === 0) {
            // alert('Please Add Images to continue');
            setMessage('Please Add Images to continue')
            setModal(2)           
            const t1 = setTimeout(() => {  
                setModal(0)       
                clearTimeout(t1);
            }, 2000); 
            return; 
        }else {
            setLoading(true)
            try {
            
                let formData = new FormData()  

                formData.append('patientId', localStorage.getItem("patientId")+"")
                formData.append('requestId', userData._id)
                item.map((items: any)=> {
                    return(
                        formData.append('images', items) 
                    )
                })   
        
                await axios.default.post(`https://hospital-memo-api.herokuapp.com/scan`, formData, {
                    headers: { 'content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                }})      
                
                // alert('Please Add Images to continue');
                setMessage('Upload Successful')
                setModal(1)           
                const t1 = setTimeout(() => {  
                    setModal(0)       
                    navigate('/dashboard')
                    clearTimeout(t1);
                }, 2000); 
                // alert('Upload Successfull')
                
            } catch (error) { 
                setMessage('Upload Failed')
                setModal(2)           
                const t1 = setTimeout(() => {  
                    setModal(0)        
                    clearTimeout(t1);
                    setLoading(false)
                }, 2000); 
                return error
            }
        }
    }  
 
    const { isLoading, data } = useQuery('get-scans', () =>
        fetch(`https://hospital-memo-api.herokuapp.com/scans`, {
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
    

    return ( 
        <div className='w-full p-10' > 
            <Modal message={message} modal={modal} />
            <div className='w-full grid grid-cols-3 gap-6' >
                {show && (
                    <>
                        <div  className=' h-64' >
                            <div className='w-full h-32 relative' >
                                <img src={Scan} className='w-full h-32 rounded-md object-cover'  alt='scan' />
                                <div className='py-1 rounded-sm px-1 bg-[#FFFFFFCC] absolute bottom-2 right-2 ' >
                                    {/* <p className='font-Ubuntu-Medium text-sm  flex items-center' >TO <GetUserInfo data={props.requestInfo.madeBy._id} />
                                    </p> */}
                                </div>
                            </div>
                            <div className='mt-6 px-3 flex items-center' > 
                                <div className='w-8 h-8 rounded-full flex bg-[#7123E214] justify-center items-center' >
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.99967 8.85179C9.53054 8.85179 11.6663 9.26304 11.6663 10.8497C11.6663 12.437 9.51653 12.8337 6.99967 12.8337C4.46939 12.8337 2.33301 12.4224 2.33301 10.8357C2.33301 9.24846 4.48281 8.85179 6.99967 8.85179ZM6.99967 1.16699C8.71415 1.16699 10.0878 2.54017 10.0878 4.25344C10.0878 5.96671 8.71415 7.34047 6.99967 7.34047C5.28578 7.34047 3.91152 5.96671 3.91152 4.25344C3.91152 2.54017 5.28578 1.16699 6.99967 1.16699Z" fill="#7123E2"/>
                                    </svg>
                                </div>
                                <div className='ml-3' > 
                                    {/* <p className='font-Ubuntu-Medium text-sm' >{props.requestInfo.patient.firstName+' '+props.requestInfo.patient.lastName}</p>
                                    <p className='font-Ubuntu-Regular text-[#5F6777] mt-1 text-xs' >{DateFormat(props.requestInfo.updatedAt)}</p> */}
                                </div>
                                {/* <p className='font-Ubuntu-Regular text-[#7123E2] ml-auto text-xs'>5 Images</p> */}
                            </div>
                        </div>
                        <div className=' w-72 h-auto border-dashed relative flex flex-col justify-center items-center border py-7 px-5' > 
                            <div className='flex items-center' > 
                                <label className="cursor-pointer items-center">
                                    <input   style={{display:'none' , width:'100%', height: '100%'}} type="file" id="file" multiple onChange={handleImageChange} />
                                    <div className='w-10 h-10 rounded-full flex bg-[#7123E214] justify-center items-center' >
                                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.83398 8.9348L5.39598 10.9278L1.19992 15.1239C0.913797 14.742 0.705765 14.2977 0.606015 13.8121L0.605359 13.8114C0.587641 13.7241 0.575828 13.6355 0.564672 13.5456C0.562047 13.5226 0.556797 13.4997 0.554172 13.4761C0.543015 13.3632 0.537109 13.249 0.537109 13.1328V11.231L2.83398 8.9348ZM11.4112 6.64515L16.4617 10.517V13.1328C16.4617 14.9776 14.9766 16.4626 13.1319 16.4626H3.86692C3.7652 16.4626 3.66545 16.4567 3.56636 16.4476C3.53486 16.4449 3.50336 16.441 3.47186 16.4371C3.40492 16.4292 3.33798 16.4193 3.27236 16.4075C3.23495 16.401 3.19755 16.3951 3.16014 16.3865C3.15948 16.3865 3.15817 16.3865 3.15752 16.3865C3.07942 16.3695 3.00264 16.3491 2.92652 16.3268C2.86483 16.3084 2.8038 16.2874 2.74408 16.2658C2.72767 16.2599 2.71127 16.2546 2.69486 16.2481C2.48683 16.1693 2.28864 16.0709 2.10292 15.9534L11.4112 6.64515ZM6.21302 3.58637C6.74917 3.58637 7.17245 4.0103 7.17245 4.54646C7.17245 5.08262 6.74917 5.5059 6.21302 5.5059C5.67686 5.5059 5.25292 5.08262 5.25292 4.54646C5.25292 4.0103 5.67686 3.58637 6.21302 3.58637ZM6.21302 2.36115C5.01339 2.36115 4.02836 3.34749 4.02836 4.54646C4.02836 5.74543 5.01339 6.73046 6.21302 6.73046C7.41198 6.73046 8.39702 5.74543 8.39702 4.54646C8.39702 3.34749 7.41198 2.36115 6.21302 2.36115ZM3.86692 0.538086H13.1319C14.9766 0.538086 16.4617 2.02318 16.4617 3.86724V8.97352L11.7308 5.34643C11.6159 5.25849 11.4742 5.21387 11.3298 5.22043C11.1775 5.22765 11.0325 5.2913 10.9249 5.39893L6.2688 10.055L3.15883 7.63543C3.04464 7.54684 2.90289 7.50155 2.75852 7.5068C2.60495 7.51337 2.45861 7.57702 2.34967 7.68596L0.537109 9.49918V3.86724C0.537109 2.02318 2.0222 0.538086 3.86692 0.538086Z" fill="#7123E2"/>
                                        </svg>
                                    </div>
                                </label>
                                <label className="cursor-pointer items-center ml-4 ">
                                    <input   style={{display:'none' , width:'100%', height: '100%'}} type="file" id="file" multiple onChange={handleImageChange} />
                                    <p className='font-Ubuntu-Medium text-sm' >Upload Scan Image</p>
                                    <p className='font-Ubuntu-Regular text-[#5F6777] mt-1 text-xs' >Drag and Drop or <span className='text-[#7123E2]' >Browse</span></p>
                                </label> 
                            </div> 
                            {selectedFiles.length !== 0 && (
                                <div className='grid grid-cols-4 mb-4 pb-4 px-2 gap-4 flex-1 overflow-x-auto mt-5' > 
                                    {selectedFiles && (
                                        <>
                                            {selectedFiles.map((item: any, index: any) =>{ 
                                                return( 
                                                    <div key={index} className='w-16 h-12 pr-3 rounded-md' >
                                                        <img src={item} alt='files' className='w-full h-full rounded-md object-cover' />
                                                    </div>
                                                ) 
                                            })}
                                        </>
                                    )}
                                </div>
                            )}
                            {selectedFiles.length !== 0  && ( 
                                <>
                                    {loading ?
                                        <button className='w-44 flex justify-center items-center rounded-full h-10 text-sm bg-[#7123E2] text-white font-Ubuntu-Medium' >
                                            <div className='flex mx-auto items-center  ' >
                                                <LoaderIcon size='w-6 h-6 mr-1  ' /> 
                                                Loading
                                            </div> 
                                        </button>:
                                        <button onClick={()=> submit(imageFiles)} className='w-44 rounded-full h-10 text-sm bg-[#7123E2] text-white font-Ubuntu-Medium' >Add Scan</button>
                                    }
                                </>
                                // <button onClick={()=> sumbit(imageFiles)} className='px-3 py-2 border font-Ubuntu-Medium text-xs mt-auto ml-auto rounded-sm border-[#7123E2] text-[#7123E2] ' >
                                //     Update
                                // </button>
                            )}
                        </div>
                    </>
                )}
            </div>  
        </div>
    )
} 