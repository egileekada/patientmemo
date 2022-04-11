import { Input } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'; 
import LoaderIcon from '../LoaderIcon';

export default function FindPatient(props: any) { 

    const navigate = useNavigate();
    const [loading, setLoading] = React.useState(false); 
    const [data, setData] = React.useState([] as any);  
    const [name, setName] = React.useState('');  

    const submit = async () => { 

        setLoading(true);
        const request = await fetch(`https://hospital-memo-api.herokuapp.com/patients/search-patients
        `, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                keyword: name
            }),
        });

        const json = await request.json();

        console.log(request.status)
        console.log(json)
        if (request.status === 201) {   
            setData(json)
            // localStorage.setItem('token', json.token);         
            // const t1 = setTimeout(() => { 
            //     if(json.user.role === 'nurse'){
            //         navigate('/dashboard'); 
            //     } else {
            //         navigate('/dashboard'); 
            //     }
            //     clearTimeout(t1);
            //     setLoading(false);
            // }, 3000); 
        }else {
            alert(json.message);
            console.log(json)
            setLoading(false);
        } 

        if(json.length === 0){
            alert('No Patient Found');
        }
        setLoading(false)
    }   

    const ClickHandler =(item: any)=> {
        props.value(item)
        props.next(1)
    }

    return (
        <div className='w-96 py-20 my-auto' > 
            <div className='w-full border-b pb-10 flex flex-col justify-center items-center border-[#DFE4EB]' > 
                <p className='text-lg font-Ubuntu-Bold' >Upload Lab Result</p>
                <p className='text-sm font-Ubuntu-Regular text-center mt-1' >To upload a patient lab record, you wil have to verify if patient has a file in the hospital.</p>
                <div className='mt-8 w-full ' > 
                    <Input onChange={(e)=> setName(e.target.value)} borderRadius='6px' fontSize='sm' backgroundColor='white' border='1px solid #A5B0C1' />
                </div>
                {loading ?
                    <button onClick={()=> submit()} className='w-44 flex justify-center items-center rounded-full h-10 mt-10 text-sm bg-[#7123E2] text-white font-Ubuntu-Medium' >
                        <div className='flex mx-auto items-center animate-pulse ' >
                            <LoaderIcon size='w-8 h-8 mr-1 animate-pulse ' /> 
                            Loading
                        </div> 
                    </button>:
                    <button onClick={()=> submit()} className='w-44 rounded-full h-10 mt-10 text-sm bg-[#7123E2] text-white font-Ubuntu-Medium' >Find Patient</button>
                }
                
            </div> 
            {data.length !== 0 ? 
                <>
                    {data.map((item: any)=> {
                        return(
                            <div key={item._id} className='mt-8 px-3 flex items-center' > 
                                <div className='w-8 h-8 rounded-full flex bg-[#7123E214] justify-center items-center' >
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.99967 8.85179C9.53054 8.85179 11.6663 9.26304 11.6663 10.8497C11.6663 12.437 9.51653 12.8337 6.99967 12.8337C4.46939 12.8337 2.33301 12.4224 2.33301 10.8357C2.33301 9.24846 4.48281 8.85179 6.99967 8.85179ZM6.99967 1.16699C8.71415 1.16699 10.0878 2.54017 10.0878 4.25344C10.0878 5.96671 8.71415 7.34047 6.99967 7.34047C5.28578 7.34047 3.91152 5.96671 3.91152 4.25344C3.91152 2.54017 5.28578 1.16699 6.99967 1.16699Z" fill="#7123E2"/>
                                    </svg>
                                </div>
                                <div className='ml-3' > 
                                    <p className='font-Ubuntu-Medium text-sm' >{item.firstName+' '+item.lastName}</p>
                                    <p className='font-Ubuntu-Regular text-[#5F6777] mt-1 text-xs' >{item.phone}</p>
                                </div>
                                <button onClick={()=> ClickHandler(item)} className='w-20 rounded-md py-2 text-xs bg-[#7123E2] ml-auto text-white font-Ubuntu-Regular' >Verify</button>
                            </div>
                        )
                    })}
                </>
            :null}
        </div>
    )
} 