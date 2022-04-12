import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react'
import React from 'react'
import Logo from '../assets/images/patientMemologo.png'
import user from '../assets/images/user.png'

export default function Navbar() {  
    
    const userData: any = JSON.parse(localStorage.getItem('userData')+'') 

    return (
        <div className='w-full bg-white px-10 flex items-center py-5' > 
            <img style={{width: '150px'}} className='' alt='logo' src={Logo} />
            <div className=' w-96 mx-auto' >
                <InputGroup >
                    <InputLeftElement 
                    children={
                        <svg className='mt-2 cursor-pointer' width="16" height="17" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.82592 0.333328C10.4059 0.333328 13.3179 3.24533 13.3179 6.82533C13.3179 8.51436 12.6697 10.0548 11.609 11.211L13.6962 13.2938C13.8915 13.4891 13.8922 13.8051 13.6969 14.0005C13.5995 14.0991 13.4709 14.1478 13.3429 14.1478C13.2155 14.1478 13.0875 14.0991 12.9895 14.0018L10.8772 11.8953C9.76597 12.7852 8.35704 13.318 6.82592 13.318C3.24592 13.318 0.333252 10.4053 0.333252 6.82533C0.333252 3.24533 3.24592 0.333328 6.82592 0.333328ZM6.82592 1.33333C3.79725 1.33333 1.33325 3.79666 1.33325 6.82533C1.33325 9.85399 3.79725 12.318 6.82592 12.318C9.85392 12.318 12.3179 9.85399 12.3179 6.82533C12.3179 3.79666 9.85392 1.33333 6.82592 1.33333Z" fill="#727272"/>
                        </svg>
                    }
                    />
                    <Input size='lg' fontSize='sm' placeholder="Search" backgroundColor='#FAF6FF' /> 
                </InputGroup>
            </div>
            <div className='flex items-center mr-10' >
                <div className='w-10 h-10 rounded-full flex justify-center items-center' style={{backgroundColor: 'rgba(113, 35, 226, 0.08)'}} >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.30273 16.0233C8.71933 15.9351 11.2578 15.9351 11.6744 16.0233C12.0305 16.1055 12.4157 16.2977 12.4157 16.7174C12.395 17.1169 12.1606 17.4711 11.8367 17.696C11.4168 18.0233 10.924 18.2306 10.4089 18.3053C10.124 18.3423 9.84405 18.3431 9.56908 18.3053C9.0531 18.2306 8.56031 18.0233 8.14123 17.6952C7.81657 17.4711 7.58218 17.1169 7.56148 16.7174C7.56148 16.2977 7.9466 16.1055 8.30273 16.0233ZM10.0378 1.66667C11.7712 1.66667 13.542 2.48919 14.5938 3.85389C15.2762 4.73264 15.5893 5.61055 15.5893 6.97526V7.33028C15.5893 8.37689 15.8659 8.99378 16.4747 9.70467C16.936 10.2284 17.0834 10.9007 17.0834 11.63C17.0834 12.3585 16.8441 13.0501 16.3645 13.6116C15.7367 14.2847 14.8514 14.7145 13.9478 14.7892C12.6384 14.9008 11.3281 14.9948 10.0005 14.9948C8.67204 14.9948 7.36262 14.9386 6.05321 14.7892C5.1488 14.7145 4.26343 14.2847 3.63647 13.6116C3.15693 13.0501 2.91675 12.3585 2.91675 11.63C2.91675 10.9007 3.065 10.2284 3.52549 9.70467C4.15328 8.99378 4.41168 8.37689 4.41168 7.33028V6.97526C4.41168 5.57362 4.76119 4.6571 5.48091 3.75989C6.55097 2.45142 8.26621 1.66667 9.96323 1.66667H10.0378Z" fill="#7123E2"/>
                    </svg>
                </div>
                <div className='w-12 ml-6 h-12 rounded-full' >
                    {userData.avatar && ( 
                        <img className='w-12 h-12 rounded-full object-cover' src={userData.avatar} alt='avatar'  />
                    )}
                    {!userData.avatar && ( 
                        <img className='w-12 h-12 rounded-full object-cover' src={user} alt='avatar'  />
                    )}
                </div>
                <p className='font-Ubuntu-Medium ml-3' >{userData.fullName ? userData.fullName:(userData.firstName+' '+userData.lastName)}</p>
            </div>
        </div>
    )
}
