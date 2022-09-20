import React from 'react'
import { useQuery } from 'react-query'
import DateFormat from '../DateFormat'
import LoaderIcon from '../LoaderIcon'

export default function DrugsTab() {
 
    const { isLoading, data } = useQuery('drugs', () =>
        fetch(`https://hospital-memo-api.herokuapp.com/pharmacy/get-all-drugs`, {
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
        <div className='w-full ' >
            {!isLoading ?
                <div className='w-full grid grid-cols-6 gap-4 px-16 py-12' >
                    {/* {data.map((item:any) => { 
                        return(
                            <> 
                                {item.name && (

                                    <div key={item._id} className='w-full p-6 flex flex-col rounded-md border border-[#A5B0C1]' >
                                        <div className='py-1 w-12 text-[#7123E2] bg-[#7123E214] ml-auto text-xs  flex justify-center font-Ubuntu-Bold items-center rounded-lg '  >
                                            <p className='' >{item.qty}</p>
                                        </div>
                                        {!item.imageURL ?  
                                            <div className='w-16 h-16 mb-3 flex justify-center items-center rounded-full bg-[#7123E205]' >
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M22.5 9.70575C22.5 7.51425 21.6458 5.45325 20.0963 3.90375C18.5468 2.35425 16.4858 1.5 14.2943 1.5C12.1028 1.5 10.0418 2.3535 8.49226 3.90375C7.67626 4.71975 7.07101 5.667 6.67126 6.67725C7.61101 6.3015 8.63401 6.0885 9.70651 6.0885C11.6993 6.0885 13.5278 6.804 14.9505 7.98975L17.718 5.22225C18.0113 4.929 18.4853 4.929 18.7785 5.22225C19.0718 5.5155 19.0718 5.9895 18.7785 6.28275L16.011 9.05025C17.1968 10.4738 17.9123 12.3015 17.9123 14.2943C17.9123 15.3668 17.6993 16.389 17.3235 17.3288C18.3338 16.929 19.2803 16.3238 20.0963 15.5085C21.6458 13.9583 22.5 11.898 22.5 9.70575Z" fill="#F4D0B5"/>
                                                    <path d="M16.0109 9.0494L18.7784 6.2819C19.0717 5.98865 19.0717 5.51465 18.7784 5.2214C18.4852 4.92815 18.0112 4.92815 17.7179 5.2214L14.9504 7.9889C15.3352 8.3099 15.6899 8.66465 16.0109 9.0494Z" fill="#A7856C"/>
                                                    <path d="M17.9123 14.2941C17.9123 12.3014 17.1968 10.4729 16.011 9.05013C15.69 8.66538 15.3353 8.30988 14.9505 7.98963C13.527 6.80388 11.6993 6.08838 9.7065 6.08838C8.634 6.08838 7.611 6.30138 6.67125 6.67713C3.64575 7.88688 1.5 10.8419 1.5 14.2941C1.5 18.8189 5.181 22.4999 9.70575 22.4999C13.158 22.4999 16.1138 20.3541 17.3235 17.3286C17.6993 16.3889 17.9123 15.3666 17.9123 14.2941ZM15.2978 13.5441C15.7125 13.5441 16.0478 13.8794 16.0478 14.2941C16.0478 14.7089 15.7125 15.0441 15.2978 15.0441H4.11375C3.69975 15.0441 3.36375 14.7089 3.36375 14.2941C3.36375 13.8794 3.69975 13.5441 4.11375 13.5441H15.2978Z" fill="#E4EDF2"/>
                                                    <path d="M3.36377 14.2942C3.36377 14.7089 3.69977 15.0442 4.11377 15.0442H15.2978C15.7125 15.0442 16.0478 14.7089 16.0478 14.2942C16.0478 13.8794 15.7125 13.5442 15.2978 13.5442H4.11377C3.69977 13.5442 3.36377 13.8794 3.36377 14.2942Z" fill="#8B9CA5"/>
                                                </svg>
                                            </div>
                                        :
                                            <div className='w-16 h-16 mb-3 flex justify-center items-center rounded-md bg-[#7123E205]' >
                                                <img className='w-16 h-16 rounded-md object-cover' src={item.imageURL} alt=""/> 
                                            </div> 
                                        }
                                        <p className='font-Ubuntu-Medium mt-auto text-sm' >{item.name+' '+item.milligram+'mg'}</p>
                                        <p className='font-Ubuntu-Regular text-xs text-[#5F6777] mt-1' >{DateFormat(item.createdAt)}</p>
                                    </div>
                                )}
                            </>
                        )
                    })}  */}
                </div>
            : 
                <div className='w-full h-full py-20 justify-center item-center flex flex-1' > 
                    <LoaderIcon size='w-20 h-20 animate-spin ' /> 
                </div>}
        </div>
    )
} 