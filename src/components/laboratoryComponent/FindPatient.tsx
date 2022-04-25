import { Input } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'; 
import SearchBar from '../doctorComponent/continuationSheetComponent/SearchBar';
import LoaderIcon from '../LoaderIcon';

export default function FindPatient(props: any) { 

    // const navigate = useNavigate();
    // const [loading, setLoading] = React.useState(false); 
    // const [data, setData] = React.useState([] as any);  
    const [name, setName] = React.useState('');   

    const ClickHandler =(item: any)=> {
        props.value(item)
        props.next(1)
    }

    return (
        <div className='w-96 py-20 my-auto' > 
            <div className='w-full border-b pb-10 flex flex-col justify-center items-center border-[#DFE4EB]' > 
                <p className='text-lg font-Ubuntu-Bold' >{props.header}</p>
                <p className='text-sm font-Ubuntu-Regular text-center mt-1' >{props.body}</p>
                <div className='mt-8 w-full relative ' > 
                    <Input onChange={(e)=> setName(e.target.value)} size='lg' borderRadius='6px' fontSize='sm' backgroundColor='#e3e3e3' border='1px solid #A5B0C1' />
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