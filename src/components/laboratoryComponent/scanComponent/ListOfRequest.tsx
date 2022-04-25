import React from 'react'
import { useQuery } from 'react-query'
import DateFormat from '../../DateFormat'
import GetUserInfo from '../../GetUserInfo'
import LoaderIcon from '../../LoaderIcon'

export default function ListOfRequest(props: any) { 

    const { isLoading, data } = useQuery('requestAll', () =>
        fetch(`https://hospital-memo-api.herokuapp.com/requests`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )       

    const ClickHandler =(item:any)=> {
        props.close(false)
        props.data(item)
        props.next(2)
    }

    return (
        <div style={{ boxShadow: '0px 3px 34px 0px #E0E0E0', width: '550px', height:'70vh'}} className='bg-white overflow-y-auto px-6 py-10 '>
            <div className='font-Ubuntu-Medium relative flex cursor-pointer text-base ' > 
                <p>All Request</p>
                {/* <p className='text-xs text-[#7123E2] rounded-full bg-[#7123E214] h-6 w-6 flex justify-center items-center -mt-4 ' >32</p> */}
                <svg onClick={()=> props.close(false)} className='ml-auto cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <g id="Iconly_Light_Close_Square" data-name="Iconly/Light/Close Square" transform="translate(0.75 0.75)">
                        <g id="Close_Square" data-name="Close Square">
                        <path id="Stroke_1" data-name="Stroke 1" d="M4.792,0,0,4.792" transform="translate(6.853 6.845)" fill="none" stroke="#7123E2" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                        <path id="Stroke_2" data-name="Stroke 2" d="M4.8,4.8,0,0" transform="translate(6.85 6.843)" fill="none" stroke="#7123E2" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                        <path id="Stroke_3" data-name="Stroke 3" d="M13.584,0H4.915C1.894,0,0,2.139,0,5.166v8.168C0,16.361,1.885,18.5,4.915,18.5h8.668c3.031,0,4.917-2.139,4.917-5.166V5.166C18.5,2.139,16.614,0,13.584,0Z" fill="none" stroke="#7123E2" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                        </g>
                    </g>
                </svg>
            </div>
            {isLoading && (
                <div className='w-full h-auto py-7 justify-center  item-center flex flex-1' > 
                    <LoaderIcon size='w-20 h-20 animate-spin ' /> 
                </div> 
            )} 
            {!isLoading && (
                <div className='w-full mt-7' >
                    {data.map((item: any, index: any)=> {
                        if(item.kind === "scan"){
                            return( 
                                <div key={index} onClick={()=> ClickHandler(item)} className='flex cursor-pointer items-center mt-6' >
                                    <div className='w-14 h-14 rounded-full bg-pink-400' >
        
                                    </div>
                                    <div className='ml-2' >
                                        <p className='font-Ubuntu-Medium text-[#262F56]' ><GetUserInfo data={item.madeBy._id} /></p>
                                        <p className='font-Ubuntu-Regular text-xs text-[#75828E] ml-1' ><span className='text-[#262F56]' >P:</span> {item.patient.firstName+' '+item.patient.lastName}</p>
                                    </div>
                                        <p className='font-Ubuntu-Regular text-xs ml-auto text-[#75828E]' >{DateFormat(item.createdAt)}</p>
                                </div>
                            )
                        }
                    })}
                </div>
            )} 
        </div>
    )
} 