import React from 'react'
import { useQuery } from 'react-query';
import staff from "../assets/images/staff.png"

export default function ViewAllStaff() {

    const { isLoading, data } = useQuery('get-staffs', () =>
        fetch(`https://hospital-memo-api.herokuapp.com/admins/get-staffs`, {
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
        <div> 
            <p className=' text-xl mt-8 ' >Our Staffs</p> 
            <div className="  scroll_event w-full mt-4 py-1 overflow-x-auto overflow-y-hidden flex flex-row ">
                <div className=" flex  "> 
                    {!isLoading && (
                        <> 
                            {data.data.map((item: any) => {
                                return( 
                                    <div style={{boxShadow:"0px 0px 5px 2px #00000026"}} className=' w-32  mr-4 rounded-xl ' > 
                                        <img className=' w-full h-44 rounded-xl object-cover ' src={item.avatar ? item.avatar : staff}  />
                                        <div style={{background: "linear-gradient(360deg, #5E15C9 15.91%, rgba(18, 18, 18, 0) 100%)"}} className=' w-full flex text-white relative z-20 rounded-b-xl -mt-8 flex-col items-center bottom-0 ' >
                                            <p className='font-Ubuntu-Bold text-xs' >{item?.title+" "+item?.fullName ? item?.fullName : (item?.firstName+" "+item?.lastName)}</p>
                                            <p className='font-Ubuntu-Regular text-xs'>{item?.role}</p>
                                        </div>
                                    </div> 
                                )
                            })}
                        </>
                    )}
                    {/* <img className=' w-32 mr-2 ' src={staff}  />
                    <img className=' w-32 mr-2 ' src={staff}  />
                    <img className=' w-32 mr-2 ' src={staff}  />
                    <img className=' w-32 mr-2 ' src={staff}  />
                    <img className=' w-32 mr-2 ' src={staff}  />
                    <img className=' w-32 mr-2 ' src={staff}  /> */}
                </div>
            </div>
        </div>
    )
} 