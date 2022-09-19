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

    console.log(data);
    
    return (
        <div>
            
            <p className=' text-xl mt-8 ' >Our Staffs</p> 
            <div className="  scroll_event w-full mt-4 py-1 overflow-x-auto overflow-y-hidden flex flex-row ">
                <div className=" flex  "> 
                    <img className=' w-32 mr-2 ' src={staff}  />
                    <img className=' w-32 mr-2 ' src={staff}  />
                    <img className=' w-32 mr-2 ' src={staff}  />
                    <img className=' w-32 mr-2 ' src={staff}  />
                    <img className=' w-32 mr-2 ' src={staff}  />
                    <img className=' w-32 mr-2 ' src={staff}  />
                    <img className=' w-32 mr-2 ' src={staff}  />
                </div>
            </div>
        </div>
    )
} 