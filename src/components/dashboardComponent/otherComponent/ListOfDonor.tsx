import React from 'react'
import { useQuery } from 'react-query'
import LoaderIcon from '../../LoaderIcon'

export default function ListOfDonors() {

    const { isLoading, data } = useQuery('donor', () =>
        fetch(`https://hospital-memo-api.herokuapp.com/blood-donors`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )  

    return (
        <div className='w-full h-full ' > 
            {isLoading ?
                <div className='w-full h-full py-20 justify-center item-center flex flex-1' > 
                    <LoaderIcon size='w-20 h-20 mr-1' /> 
                </div>
            :
                <div className='w-full h-full grid grid-cols-4 gap-6 py-12 px-8' > 
                    {data.map((item: any)=> {
                        return( 
                            <div className=' px-4 py-6 flex flex-col h-full' > 
                                <div className='flex' >
                                    <div className='w-8 h-8 rounded-full flex bg-[#7123E214] justify-center items-center' >
                                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4 11.2494C1.93225 11.2494 0.25 9.56713 0.25 7.49938C0.25 5.56663 3.34675 1.3715 3.69963 0.900125C3.84138 0.710375 4.15863 0.710375 4.30037 0.900125C4.65325 1.3715 7.75 5.56663 7.75 7.49938C7.75 9.56713 6.06775 11.2494 4 11.2494ZM6.54325 8.06413C6.62012 7.87175 6.52638 7.6535 6.334 7.57662C6.1405 7.49938 5.92337 7.59388 5.84687 7.78588C5.54312 8.54563 4.81825 9.03688 4 9.03688C3.793 9.03688 3.625 9.2045 3.625 9.41188C3.625 9.61888 3.793 9.78688 4 9.78688C5.12725 9.78688 6.1255 9.11038 6.54325 8.06413Z" fill="#F44336"/>
                                        </svg>
                                    </div>
                                    <div className='ml-3' > 
                                        <p className='font-Ubuntu-Medium text-sm' >{item.firstName+' '+item.lastName}</p>
                                        <p className='font-Ubuntu-Regular text-[#5F6777] mt-1 text-xs' >Blood group: <span className=' font-Ubuntu-Bold text-[#7123E2]' >{item.bloodGroup}</span></p>
                                    </div>
                                </div>
                                <p className='font-Ubuntu-Medium text-[#7123E2] ml-auto text-xs mt-auto'>{item.relationship} to a patient</p>
                            </div> 
                        )
                    })}
                </div>
            }
        </div>
    )
} 