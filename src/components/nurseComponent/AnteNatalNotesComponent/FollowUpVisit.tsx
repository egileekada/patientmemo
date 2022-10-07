import { Input } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from '../../Modal';
import LoaderIcon from '../../LoaderIcon'

export default function FollowUpVisit(props: any) {
    const navigate = useNavigate()
    const [loading, setLoading] = React.useState(false);

    const [message, setMessage] = React.useState('');
    const [modal, setModal] = React.useState(0);

    
    const submit = async () => {  
 
        setLoading(true);
        const request = await fetch(`https://hospital-memo-api.herokuapp.com/nurse/create-antenatal`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(props.data),
        });

        const json = await request.json();

        console.log('patient '+request.status)
        console.log('patient '+json)
        if (request.status === 201) {     
            setMessage('Records Added Successful')
            setModal(1)          
            setLoading(false);
            const t1 = setTimeout(() => {  
                setModal(0)      
                navigate(0)
                clearTimeout(t1);
            }, 3000); 
        }else {
            setMessage(json.message)
            setModal(2)             
            const t1 = setTimeout(() => {  
                setModal(0)       
                clearTimeout(t1);
            }, 3000);    
            // alert(json.message);
            console.log(json) 
            setLoading(false);
        }  
    }   


    return (
        <div className='w-full h-full px-12 py-10 font-Ubuntu-Regular' > 
            <Modal message={message} modal={modal} />
            <p className='text-lg font-Ubuntu-Bold' >Follow up visit</p>
            <div className='w-full flex mt-8' >
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Date</p>
                    <Input 
                        onChange={(e)=> props.setData({...props.data, "followUpVisit.date": e.target.value})} 
                        fontSize='sm'  />
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Height of Fundus</p>
                    <Input 
                        onChange={(e)=> props.setData({...props.data, "followUpVisit.heightOfFundus": e.target.value})}  
                        fontSize='sm'  />
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Presentation & position</p>
                    <Input 
                        onChange={(e)=> props.setData({...props.data, "followUpVisit.presentationAndPosition": e.target.value})}  
                        fontSize='sm' />
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Relation of presenting part of birth</p>
                    <Input 
                        onChange={(e)=> props.setData({...props.data, "followUpVisit.roFPPartOfBirth": e.target.value})}  
                        fontSize='sm' />
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Feotal Heart</p>
                    <Input 
                        onChange={(e)=> props.setData({...props.data, "followUpVisit.feotalHeart": e.target.value})}  
                        fontSize='sm' />
                </div>
            </div>
            <div className='w-full flex mt-8' >
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Urine</p>
                    <Input 
                        onChange={(e)=> props.setData({...props.data, "followUpVisit.urine": e.target.value})} 
                        fontSize='sm'  />
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >B.P</p>
                    <Input 
                        onChange={(e)=> props.setData({...props.data, "followUpVisit.BP": e.target.value})}  
                        fontSize='sm' />
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >weight</p>
                    <Input 
                        onChange={(e)=> props.setData({...props.data, "followUpVisit.weight": e.target.value})}  
                        fontSize='sm'  />
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Hb</p>
                    <Input 
                        onChange={(e)=> props.setData({...props.data, "followUpVisit.HB": e.target.value})}  
                        fontSize='sm' />
                </div>
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Oedema</p>
                    <Input 
                        onChange={(e)=> props.setData({...props.data, "followUpVisit.oedema": e.target.value})}  
                        fontSize='sm' />
                </div>
            </div>
            <div className='w-full flex mt-8' >
                {/* <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Return</p>
                    <Input 
                        onChange={(e)=> props.setData({...props.data, "followUpVisit.date": e.target.value})} 
                        fontSize='sm'  />
                </div> */}
                <div className='mr-2 w-full' >
                    <p className='text-xs mb-2' >Initial Examiner</p>
                    <Input 
                        onChange={(e)=> props.setData({...props.data, "followUpVisit.initialExaminer": e.target.value})}  
                        fontSize='sm'  />
                </div>
            </div>
            <div className='mr-2 mt-4 w-full' >
                <p className='text-xs mb-2' >Remarks</p>
                <Input 
                        onChange={(e)=> props.setData({...props.data, "followUpVisit.remarks": e.target.value})}  
                    fontSize='sm' />
            </div> 
            <div className='w-full flex pb-10 py-4' >
                <button onClick={()=> props.next(5) }  className='  py-3 w-36 ml-auto text-[#A5B0C1] text-sm mt-4 rounded-full' >back</button>
                {loading ?  
                    <button className='bg-[#7123E2] h-12 flex justify-center items-center w-48  text-white text-sm mt-6 rounded-full' >
                        <div className='flex items-center ' >
                            <LoaderIcon size='w-10 h-10 mr-1 ' /> 
                            Loading
                        </div> 
                    </button>
                    :
                    <button onClick={()=> submit()} className='bg-[#7123E2] py-3 w-48  text-white text-sm mt-6 rounded-full' >Next</button>
                }
            </div>
        </div>
    )
} 