import React from 'react'
import { useQuery } from 'react-query'
import DateFormat from '../../DateFormat'
import GetUserInfo from '../../GetUserInfo'
import LoaderIcon from '../../LoaderIcon'
import Scan from '../../../assets/images/scan.jpg'

export default function ListRequestForPatient(props: any) { 

    const { isLoading, data } = useQuery('requestAllPatient', () =>
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
    const [numb, setNumb] = React.useState(-1) 

    const Check =(item: any)=> { 
        if(item !== numb){ 
            setNumb(item)
            const obj = [...show, item]
            setShow(obj)
        } 
    }

    const [show, setShow] = React.useState([] as any)

    const ClickHandler =(item:any)=> { 
        props.value(item)
        props.next(2)
    }

    return (
        <div className='w-full h-full p-10' > 
            {isLoading && (
                <div className='w-full h-auto py-7 justify-center  item-center flex flex-1' > 
                    <LoaderIcon size='w-20 h-20 animate-spin ' /> 
                </div> 
            )} 
            {!isLoading && (
                <div className='w-full grid grid-cols-3 gap-6' >
                    {data.map((item: any, index: any)=> {
                        if(item.kind === "scan") {  
                            if(item.patient._id === props.data._id){
                                // numb = index
                                return( 
                                    <div onClick={()=> ClickHandler(item)} key={index} className=' h-64 cursor-pointer' >
                                        <div className='w-full h-32 relative' >
                                            <img src={Scan} className='w-full h-32 rounded-md object-cover'  alt='scan' />
                                            <div className='py-1 rounded-sm px-1 bg-[#FFFFFFCC] absolute bottom-2 right-2 ' >
                                                <p className='font-Ubuntu-Medium text-sm  flex items-center' >TO <GetUserInfo data={item.madeBy._id} />
                                                </p>
                                            </div>
                                        </div>
                                        <div className='mt-6 px-3 flex items-center' > 
                                            <div className='w-8 h-8 rounded-full flex bg-[#7123E214] justify-center items-center' >
                                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.99967 8.85179C9.53054 8.85179 11.6663 9.26304 11.6663 10.8497C11.6663 12.437 9.51653 12.8337 6.99967 12.8337C4.46939 12.8337 2.33301 12.4224 2.33301 10.8357C2.33301 9.24846 4.48281 8.85179 6.99967 8.85179ZM6.99967 1.16699C8.71415 1.16699 10.0878 2.54017 10.0878 4.25344C10.0878 5.96671 8.71415 7.34047 6.99967 7.34047C5.28578 7.34047 3.91152 5.96671 3.91152 4.25344C3.91152 2.54017 5.28578 1.16699 6.99967 1.16699Z" fill="#7123E2"/>
                                                </svg>
                                            </div>
                                            <div className='ml-3' > 
                                                <p className='font-Ubuntu-Medium text-sm' >{item.patient.firstName+' '+item.patient.lastName}</p>
                                                <p className='font-Ubuntu-Regular text-[#5F6777] mt-1 text-xs' >{DateFormat(item.updatedAt)}</p>
                                            </div>
                                            {Check(item.patient._id)}
                                            {/* <p className='font-Ubuntu-Regular text-[#7123E2] ml-auto text-xs'>5 Images</p> */}
                                        </div>
                                    </div>
                                )
                            }  
                        } 
                    })}
                </div>
            )} 
            {show.length === 0 && (
                <> 
                    {!isLoading && ( 
                        <div className='w-full h-full justify-center flex mt-14' >
                            <p className='font-Ubuntu-Medium text-xl' >No Request For This Patient</p>
                        </div>
                    )} 
                </>
            )}
        </div>
    )
} 