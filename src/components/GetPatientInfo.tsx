import React from 'react'
import { useQuery } from 'react-query'
import DateFormat from './DateFormat'

export default function GetPatientInfo(props: any) {
 
    const { isLoading, data } = useQuery('patientsall', () =>
        fetch(`https://hospital-memo-api.herokuapp.com/patients`, {
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
                            if(props.title === 'name'){ 
                                return( 
                                    <p className='font-Ubuntu-Medium ml-2' >{item.firstName+' '+item.lastName}</p>
                                )
                            } else {
                                return( 
                                    <>
                                        {DateFormat(item.updatedAt)}
                                    </>
                                )
                            }
                        }
                    })}
                </>
            }
        </>
    )
} 