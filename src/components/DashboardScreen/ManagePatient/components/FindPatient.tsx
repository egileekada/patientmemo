import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';  
import SearchBar from './SearchBar'; 

export default function FindPatient(props: any) { 

    const navigate = useNavigate();  
    const [name, setName] = React.useState('');    

    const ClickHandler =(item: any)=> {
        localStorage.setItem('patientId', item)
        localStorage.setItem('show', 'true')
        {!props.nurse && (
            navigate('/dashboard/patientfile')
        )} 
        {props.nurse && (
            props.show(true)
        )} 
        {props.nurse && (
            props.index(item)
        )} 
        {props.nurse && (
            props.numb(-1)
        )} 
        {props.nurse && (
            props.array([] as any)
        )} 
        setName('')
    }

    return ( 
        <div className=' w-96 relative ' > 
            <InputGroup >
                <InputLeftElement 
                children={
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.82567 1.33398C11.4057 1.33398 14.3177 4.24598 14.3177 7.82598C14.3177 9.51502 13.6695 11.0555 12.6088 12.2116L14.6959 14.2945C14.8913 14.4898 14.8919 14.8058 14.6966 15.0011C14.5993 15.0998 14.4706 15.1485 14.3426 15.1485C14.2153 15.1485 14.0873 15.0998 13.9893 15.0025L11.8769 12.896C10.7657 13.7859 9.35679 14.3187 7.82567 14.3187C4.24567 14.3187 1.33301 11.406 1.33301 7.82598C1.33301 4.24598 4.24567 1.33398 7.82567 1.33398ZM7.82567 2.33398C4.79701 2.33398 2.33301 4.79732 2.33301 7.82598C2.33301 10.8547 4.79701 13.3187 7.82567 13.3187C10.8537 13.3187 13.3177 10.8547 13.3177 7.82598C13.3177 4.79732 10.8537 2.33398 7.82567 2.33398Z" fill="#5F6777"/>
                    </svg>
                }
                />
                <Input  onChange={(e)=> setName(e.target.value)} value={name} fontSize='xs' placeholder="Search for patient by name, Blood group, location" border='0px' backgroundColor='#F6F7F9'  /> 
            </InputGroup> 
            {/* <Input size='lg' borderRadius='6px' fontSize='sm' backgroundColor='#e3e3e3' border='1px solid #333' /> */}
            {name && (
                <div style={{boxShadow: '0px 16px 24px 0px #60617029'}} className='absolute bg-white top-12 w-full h-72 z-50 overflow-y-auto' >
                    <SearchBar open={ClickHandler} name={name} />
                </div>
            )}
        </div>  
    )
} 