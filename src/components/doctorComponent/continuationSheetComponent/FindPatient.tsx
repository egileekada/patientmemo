import { Input } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'; 
import LoaderIcon from '../../LoaderIcon';
import SearchBar from './SearchBar';

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
                <p className='text-lg font-Ubuntu-Bold' >Enter Patient Name</p>
                <p className='text-sm font-Ubuntu-Regular text-center mt-1' >To create a continuation sheet, you wil have to verity patient<br/>before you has a file in the hospital.</p>
                <div className='mt-8 w-full relative ' > 
                    <Input onChange={(e)=> setName(e.target.value)} size='lg' borderRadius='6px' fontSize='sm' backgroundColor='#e3e3e3' border='1px solid #333' />
                    {name && (
                        <div style={{boxShadow: '0px 16px 24px 0px #60617029'}} className='absolute top-12 w-full h-48 overflow-y-auto' >
                            <SearchBar open={ClickHandler} name={name} />
                        </div>
                    )}
                </div> 
            </div>  
        </div>
    )
} 