import React from 'react'
import { useQuery } from 'react-query'
import user from '../assets/images/user.png'

export default function GetUserInfo(props: any) { 


    const { isLoading, data } = useQuery('requests', () =>
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
        <>
            {isLoading ? 
                null:
                <>
                    {data.map((item: any)=> {
                        if(item._id === props.data){ 
                            return( 
                                <>
                                    {props.image && (
                                        <> 
                                            {item.avatar && ( 
                                                <img src={item.avatar} alt='avater' className='w-full h-full rounded-full object-cover' />
                                            )}
                                            {!item.avatar && ( 
                                                <img src={user} alt='avater' className='w-full h-full rounded-full object-cover' />
                                            )}
                                        </>
                                    )}

                                    {!props.image && (
                                        <p className='font-Ubuntu-Medium text-sm ml-1' >{item.title ? item.title+' ': ''}{item.fullName ? item.fullName : (item.firstName+' '+item.lastName)}</p>
                                    )}
                                </>
                            )
                        }
                    })}
                </>
            }
        </>
  )
}
