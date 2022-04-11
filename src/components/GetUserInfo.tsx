import React from 'react'
import { useQuery } from 'react-query'

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
                                <p className='font-Ubuntu-Medium text-sm ml-2' >{item.title+' '+item.fullName}</p>
                            )
                        }
                    })}
                </>
            }
        </>
  )
}
