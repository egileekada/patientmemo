import { Input } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query';
import Pic from "../assets/images/Vector.png"
import staff from "../assets/images/user.png"

export default function ChatComponent() {
 
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
        <div className=' w-[350px] border-l h-full overflow-y-auto pr-4 py-10 rounded-xl border-[#C8C8C8] flex px-4 flex-col  ' >
            
            <div className=' w-28 h-28  rounded-full  mx-auto ' > 
                <img src={Pic} className="w-full h-full rounded-full" />
            </div>
            <div className=' w-full relative my-4 ' >  
                <div className=' absolute top-0 left-0 pl-3 pr-3 z-10 pt-3 ' >
                    <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3691 0.90918C17.6357 0.90918 22.733 6.00652 22.733 12.2732C22.733 15.2297 21.5984 17.9263 19.7417 19.9501L23.3952 23.5959C23.7371 23.9379 23.7383 24.491 23.3963 24.8329C23.226 25.0056 23.0007 25.0908 22.7767 25.0908C22.5538 25.0908 22.3297 25.0056 22.1582 24.8353L18.4606 21.148C16.5155 22.7057 14.0492 23.6383 11.3691 23.6383C5.10241 23.6383 0.00390625 18.5398 0.00390625 12.2732C0.00390625 6.00652 5.10241 0.90918 11.3691 0.90918ZM11.3691 2.65964C6.0675 2.65964 1.75437 6.9716 1.75437 12.2732C1.75437 17.5747 6.0675 21.8878 11.3691 21.8878C16.6694 21.8878 20.9826 17.5747 20.9826 12.2732C20.9826 6.9716 16.6694 2.65964 11.3691 2.65964Z" fill="#5F6777"/>
                    </svg>
                </div>
                <Input size='lg' paddingLeft="45px" placeholder='Search name' borderRadius='6px' fontSize='sm' backgroundColor='#FFFFFFCC' border='1px solid #D7D7D7' />
            </div>
            <p className=' font-Ubuntu-Medium text-sm mt-4 mb-2 ' >{data.data.length} participant</p>
            {!isLoading && (
                <> 
                    {data.data.splice(0, 6).map((item: any) => {
                        return(  
                            <button style={{boxShadow: "0px 4px 10px 0px #6C6C6C26"}} className=' my-3 p-4 rounded-md flex items-center ' >
                                <div className=' w-fit h-fit ' > 
                                    <div className=' w-14 h-14 rounded-full mx-auto ' >
                                        <img className=' w-full h-full rounded-xl object-cover ' src={item.avatar ? item.avatar : staff}  />
                                    </div>
                                </div>
                                <div className=' pl-2  font-Ubuntu-Medium ' >
                                    <p className=' text-base ' >{item?.title+" "+item?.fullName ? item?.fullName : (item?.firstName+" "+item?.lastName)}</p>
                                    <p className=' text-sm ' >Hi Admin kindly ....</p>
                                </div>
                            </button> 
                        )
                    })}
                </>
            )}
            <div className=' w-full h-fit ' >
                <button className=' w-full h-10 rounded-md bg-[#A5B0C1] font-Ubuntu-Regular text-sm ' >See all</button>
            </div>
        </div>
    )
} 