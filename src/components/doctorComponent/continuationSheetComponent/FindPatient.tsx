import { Input } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'; 
import { IUser, UserContext } from '../../../context';
import LoaderIcon from '../../LoaderIcon';
import SearchBar from './SearchBar';

export default function FindPatient(props: any) { 

    const navigate = useNavigate();
    const [loading, setLoading] = React.useState(false); 
    const [data, setData] = React.useState([] as any);   
    const [name, setName] = React.useState(''); 
    const [initial, setInitial] = React.useState(''); 

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
        <div className='w-full h-72 ' > 
            <div className='w-full flex flex-col h-full  justify-center items-center border-[#DFE4EB]' > 
                <p className='text-xl text-[#262F56] font-Ubuntu-Bold -mt-10 ' >{props.header}</p>
                <p className='text-sm font-Ubuntu-Regular text-center mt-1' >{props.body}</p>
                <div className='mt-8 w-full relative ' > 
                    <div className=' w-full relative ' >  
                        <div className=' absolute top-0 left-0 pl-3 pr-3 z-10 pt-3 ' >
                            <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3691 0.90918C17.6357 0.90918 22.733 6.00652 22.733 12.2732C22.733 15.2297 21.5984 17.9263 19.7417 19.9501L23.3952 23.5959C23.7371 23.9379 23.7383 24.491 23.3963 24.8329C23.226 25.0056 23.0007 25.0908 22.7767 25.0908C22.5538 25.0908 22.3297 25.0056 22.1582 24.8353L18.4606 21.148C16.5155 22.7057 14.0492 23.6383 11.3691 23.6383C5.10241 23.6383 0.00390625 18.5398 0.00390625 12.2732C0.00390625 6.00652 5.10241 0.90918 11.3691 0.90918ZM11.3691 2.65964C6.0675 2.65964 1.75437 6.9716 1.75437 12.2732C1.75437 17.5747 6.0675 21.8878 11.3691 21.8878C16.6694 21.8878 20.9826 17.5747 20.9826 12.2732C20.9826 6.9716 16.6694 2.65964 11.3691 2.65964Z" fill="#5F6777"/>
                            </svg>
                        </div>
                        <Input value={name} onChange={(e)=> setName(e.target.value)} size='lg' paddingLeft="45px" placeholder='Search for patient by name or Card number' borderRadius='6px' fontSize='sm' backgroundColor='#FFFFFFCC' border='1px solid #D7D7D7' />
                    </div>
                    {/* <button onClick={()=> setName(initial)} className=' w-full bg-[#7123E2] font-Ubuntu-Medium rounded-lg h-11 text-white mt-6 ' >
                    Find Patient
                    </button> */}
                    {name && (
                        <div style={{boxShadow: '0px 16px 24px 0px #60617029'}} className='absolute top-10 bg-white w-full h-48 overflow-y-auto' >
                            <SearchBar open={ClickHandler} name={name} />
                        </div>
                    )}
                </div> 
            </div>  
        </div>
    )
} 