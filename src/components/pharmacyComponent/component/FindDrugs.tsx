import { Select } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'

export default function FindDrugs(props: any) { 

    const { isLoading, data } = useQuery('Alldrugs', () =>
        fetch(`https://hospital-memo-api.herokuapp.com/drugs`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )   

    const OnchangeHandler =(item: any)=> {
        console.log(item)
        props.id(item)
    }

    return (
        <div className=' w-full mr-2 mt-3' >
            <p className='text-xs mb-2 font-Ubuntu-Medium' >Medicine Name</p>
            <Select onChange={(e)=> OnchangeHandler(e.target.value)}  fontSize='sm'  placeholder='Medicine Name'> 
                {!isLoading && (
                    <>
                        {data.map((item: any, index: any)=> {
                                if(item.category){
                                    return(
                                        <option key={index} value={item._id} >{item.name}</option>
                                    )
                                } 
                        })}
                    </>
                )}
            </Select>
        </div>
    )
} 