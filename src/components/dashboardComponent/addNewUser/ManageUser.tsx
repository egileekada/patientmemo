import React from 'react'
import { useQuery } from 'react-query'
import LoaderIcon from '../../LoaderIcon'
import Avatar from '../../../assets/images/user.png'

export default function ManageUser() { 
    
    const { isLoading, data } = useQuery('user', () =>
        fetch(`https://hospital-memo-api.herokuapp.com/admins`, {
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
        <div className='w-full px-24 pt-10' > 
            <div className='w-full px-12 py-4 flex items-center ' > 
                {/* <div className='w-10 h-10 rounded-full cursor-pointer flex items-center justify-center bg-[#7123E214]' >
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 11L1 6L6 1" stroke="#7123E2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div> */}
                <div className='ml-0'> 
                    <p className='font-Ubuntu-Medium text-lg' >Manage Staff</p> 
                    <p className='font-Ubuntu-Regular text-sm mt-1' >Add and Manage Staff</p> 
                </div> 
                {/* <button className='font-Ubuntu-Medium text-xs border text-[#7123E2] border-[#7123E2] rounded-lg py-3 px-6 ml-auto ' >Update Profile</button> */}
            </div>

            {isLoading ?
                <div className='w-full h-full py-20 justify-center item-center flex flex-1' > 
                    <LoaderIcon size='w-20 h-20 mr-1 ' /> 
                </div>
            :
                <div className='w-full grid grid-cols-4 gap-6 py-12 relative px-20' > 
                    {[...data].reverse().map((item: any) => {
                        return(
                            <div key={item._id} className='px-3' > 
                                {item.avatarMedia === undefined ? 
                                    <img src={Avatar} className='w-20 h-20 rounded-full object-cover' alt='avatar' />
                                    :
                                    <img src={item.avatarMedia.imageURL} className='w-20 h-20 rounded-full object-cover' alt={item.avatarMedia.asset_id} />
                                }
                                <div className=' mt-4' > 
                                    <p className='font-Ubuntu-Medium text-xs text-[#2C3E50]' >{item.title+' '+item.fullName}</p>
                                    <p className='font-Ubuntu-Regular text-[#8EA7C0] mt-1 text-xs' >{item.email}</p>
                                </div> 
                            </div> 
                        )
                    })}
                </div>
            }
        </div>
    )
} 