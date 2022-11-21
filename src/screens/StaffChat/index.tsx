import { Input } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query';
import { io } from 'socket.io-client'; 
import staff from "../../assets/images/user.png"
import chat from "../../assets/images/Chat.png"
import GetMessage from '../../components/chat/GetMessage';
import Navbar from '../../components/Navbar'

export default function Chat() {

    const[showModal, setShowModal] = React.useState(false) 
    const [name, setName] = React.useState(''); 
    const [message, setMessage] = React.useState(''); 
    const [initialData, setInitialData] = React.useState({} as any); 
    const [initial, setInitial] = React.useState(''); 
    const userData: any = JSON.parse(localStorage.getItem('userData')+'') 

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
    
    const SendMessage =(item: any)=> { 
        if(item !== ""){
            const request = fetch(`https://hospital-memo-api.herokuapp.com/messages/send-message`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({ 
                    "message": item,
                    "to": initialData._id 
                }),
            });  
        }
        setMessage("")
    }   

    const CLickHandler =(item: any)=> {
        if(item._id === initialData._id){
            setShowModal(false)
        } else {
            setShowModal(true)
            setInitialData(item)
        }
        console.log("click")
    }

    console.log(data);
    

  return (
    <div className='w-full h-screen' >  
        <div className=' w-full h-screen flex  justify-center ' >
            <div  className=' h-screen w-full flex flex-col ' > 
                <div style={{boxShadow: "0px 0px 5px 0px #00000033"}}  className='w-full flex justify-center inset-x-0 absolute z-20 ' > 
                     <Navbar show={true} tab={2} />
                </div>
                <div className='w-full h-screen flex ' >
                    <div className=' w-fit overflow-y-auto ' > 
                        <div className={" w-full lg:flex flex-col hidden  pt-24  lg:w-[400px] px-4"}>  
                            <div className='  w-28 h-28 mt-8 mb-4 rounded-full mx-auto  ' >
                                <img className='w-full h-full rounded-full object-cover' src={userData.avatar ? userData.avatar : staff} alt='avatar'  />
                            </div>
                            <div className=' w-full relative ' >  
                                <div className=' absolute top-0 left-0 pl-3 pr-3 z-10 pt-3 ' >
                                    <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3691 0.90918C17.6357 0.90918 22.733 6.00652 22.733 12.2732C22.733 15.2297 21.5984 17.9263 19.7417 19.9501L23.3952 23.5959C23.7371 23.9379 23.7383 24.491 23.3963 24.8329C23.226 25.0056 23.0007 25.0908 22.7767 25.0908C22.5538 25.0908 22.3297 25.0056 22.1582 24.8353L18.4606 21.148C16.5155 22.7057 14.0492 23.6383 11.3691 23.6383C5.10241 23.6383 0.00390625 18.5398 0.00390625 12.2732C0.00390625 6.00652 5.10241 0.90918 11.3691 0.90918ZM11.3691 2.65964C6.0675 2.65964 1.75437 6.9716 1.75437 12.2732C1.75437 17.5747 6.0675 21.8878 11.3691 21.8878C16.6694 21.8878 20.9826 17.5747 20.9826 12.2732C20.9826 6.9716 16.6694 2.65964 11.3691 2.65964Z" fill="#5F6777"/>
                                    </svg>
                                </div>
                                <Input value={name} onChange={(e)=> setName(e.target.value)} size='lg' paddingLeft="45px" placeholder='Search  names' borderRadius='10px' fontSize='sm' backgroundColor='#FFFFFFCC' border='1px solid #D7D7D7' />
                            </div>
                            <p className=' text-base font-Ubuntu-Medium mt-4 ' >{data?.data?.length-1} participant</p>
                            {!isLoading && (  
                                <>
                                    {data?.data?.filter((item:any) => item._id !== userData._id).map((item: any) => {
                                        if(((item?.firstName+" "+item?.lastName).toLocaleLowerCase())?.includes(name.toLocaleLowerCase())){
                                            return(  
                                                <button onClick={()=> CLickHandler(item)} style={{boxShadow: "0px 4px 10px 0px #6C6C6C26"}} className=' my-3 p-4 mt-4 rounded-md flex items-center '  >
                                                    <div className=' w-fit h-fit ' > 
                                                        <div className=' w-14 h-14 rounded-full mx-auto ' >
                                                            <img className=' w-full h-full rounded-xl object-cover ' src={item.avatar ? item.avatar : staff}  />
                                                        </div>
                                                    </div>
                                                    <div className=' pl-2  font-Ubuntu-Medium ' >
                                                        <p className=' text-base ' >{ item?.fullName ? item?.title+" "+item?.fullName : (item?.firstName+" "+item?.lastName)}</p>
                                                        <p className=' text-sm ' >Hi Admin kindly ....</p>
                                                    </div>
                                                </button>
    
                                            )
                                        }
                                    })}
                                </>
                            )}
                        </div> 
                    </div>
                    {showModal && ( 
                        <div  className=' flex flex-col h-screen flex-1 p-6 bg-[#FFFFFF] border-l  ' >
                            <div style={{boxShadow: "0px 0px 4px 0px #00000040"}} className=' w-full relative h-screen mt-24  rounded-xl  ' > 
                                <div style={{boxShadow: "0px 0px 4px 0px #00000040"}} className=' w-full flex items-center px-6 absolute inset-x-0 top-0 rounded-t-xl h-28 ' >
                                    <div className=' w-fit h-fit ' > 
                                        <div className=' w-20 h-20 rounded-full mx-auto ' >
                                            <img className=' w-full h-full rounded-xl object-cover ' src={initialData.avatar ? initialData.avatar : staff}  />
                                        </div>
                                    </div>
                                    <div className=' pl-2  font-Ubuntu-Medium ' >
                                        <p className=' text-base ' >{initialData?.fullName ? initialData?.title+" "+initialData?.fullName : (initialData?.firstName+" "+initialData?.lastName)}</p> 
                                    </div>
                                </div>
                                <div className=' absolute py-3 px-6 rounded-xl inset-x-0 inset-0 bottom-24 lg:ml-2 top-32 overflow-y-auto pb-4 text-black flex flex-col-reverse ' >  
                                    <GetMessage index={initialData?._id} message={message} />
                                </div>  
                                <div className=' w-full flex absolute border-t border-[#D1D1D1] bottom-1 px-5 py-4' > 
                                    <div className=' w-full relative pr-1 flex items-center ' >
                                        <Input value={message} onChange={(e)=> setMessage(e.target.value)} backgroundColor="#fff" fontSize="sm" size="lg" borderRadius="16px" placeholder='Write your message here' /> 

                                        <button onClick={()=> SendMessage(message)} className=' px-2 flex h-full justify-center items-center ' > <svg width="62" height="61" viewBox="0 0 62 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g filter="url(#filter0_d_1533_3108)">
                                            <rect x="5" y="5" width="52.2519" height="51.8133" rx="16.2015" fill="white" shape-rendering="crispEdges"/>
                                            <path d="M16.5371 15.2265L46.5792 30.0294C46.743 30.1101 46.8809 30.2351 46.9774 30.3902C47.0739 30.5452 47.125 30.7242 47.125 30.9069C47.125 31.0895 47.0739 31.2685 46.9774 31.4236C46.8809 31.5786 46.743 31.7036 46.5792 31.7843L16.5352 46.5872C16.3669 46.6699 16.1783 46.7025 15.992 46.681C15.8057 46.6596 15.6295 46.5851 15.4844 46.4663C15.3392 46.3476 15.2313 46.1896 15.1734 46.0112C15.1155 45.8329 15.1101 45.6416 15.1578 45.4603L18.1336 34.2202C18.1819 34.0383 18.2815 33.8742 18.4207 33.7475C18.5598 33.6209 18.7326 33.537 18.9182 33.5061L32.3809 31.262C32.4611 31.2487 32.5367 31.2156 32.6009 31.1657C32.6652 31.1158 32.7159 31.0507 32.7487 30.9763L32.7839 30.8589C32.8022 30.7501 32.7831 30.6383 32.7298 30.5417C32.6766 30.4451 32.5922 30.3694 32.4904 30.3268L32.3809 30.2954L18.8438 28.0396C18.6586 28.0083 18.4863 27.9243 18.3475 27.7977C18.2087 27.671 18.1093 27.5071 18.0612 27.3255L15.1578 16.3554C15.1096 16.1739 15.1146 15.9824 15.1723 15.8037C15.23 15.625 15.3379 15.4667 15.4831 15.3476C15.6284 15.2286 15.8048 15.1539 15.9913 15.1324C16.1779 15.1109 16.3667 15.1436 16.5352 15.2265H16.5371Z" fill="#494949"/>
                                            </g>
                                            <defs>
                                            <filter id="filter0_d_1533_3108" x="0.949626" y="0.949626" width="60.3507" height="59.9142" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                            <feOffset/>
                                            <feGaussianBlur stdDeviation="2.02519"/>
                                            <feComposite in2="hardAlpha" operator="out"/>
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1533_3108"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1533_3108" result="shape"/>
                                            </filter>
                                            </defs>
                                            </svg>
                                        </button>
                                        <div className=' flex absolute h-full right-0 mr-6 z-20 top-0 items-center ' >
                                            <button className=' px-2 flex h-full justify-center items-center ' > 
                                                {/* <Image src={share} className='' alt="add" width={22} height={22}   /> */}
                                            </button>
                                        </div>
                                    </div>
                                    {/* <Input backgroundColor="#fff"   placeholder='Message' />
                                    <button className=' w-32 text-white ml-2 rounded-md font-Mulish-SemiBold bg-[#2eb1f7] ' >Send</button> */}
                                </div>
                            </div>
                        </div>
                    )}
                    {!showModal && ( 
                        <div  className=' flex flex-col h-screen flex-1 p-6 bg-[#FFFFFF] border-l  ' >
                            <div style={{boxShadow: "0px 0px 4px 0px #00000040"}} className=' w-full relative h-screen mt-24 flex justify-center items-center rounded-xl  ' >
                                <img src={chat} alt="" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
    // return (
    //     <div className=' w-full ' > 
    //         <Navbar />
    //         <div className=' w-full flex ' > 
    //             <div className=' w-280px border-r h-full mr-4 rounded-xl border-[#C8C8C8] flex px-4 flex-col  ' >
    //                 <div className=' w-14 h-14 mt-8 mb-4 rounded-full mx-auto bg-red-400 ' >

    //                 </div>
    //                 <Input />
    //                 <p className=' font-Ubuntu-Medium text-sm mt-4 mb-2 ' >12 participant</p>
    //                 <div style={{boxShadow: "0px 4px 10px 0px #6C6C6C26"}} className=' my-3 p-4 rounded-md flex items-center ' >
    //                     <div className=' w-fit h-fit ' > 
    //                         <div className=' w-14 h-14  rounded-full bg-red-400 ' >

    //                         </div>
    //                     </div>
    //                     <div className=' pl-2  font-Ubuntu-Medium ' >
    //                         <p className=' text-base ' >Dr Randon Mon</p>
    //                         <p className=' text-sm ' >Hi Admin kindly ....</p>
    //                     </div>
    //                 </div>
    //                 <div style={{boxShadow: "0px 4px 10px 0px #6C6C6C26"}} className=' my-3 p-4 rounded-md flex items-center ' >
    //                     <div className=' w-fit h-fit ' > 
    //                         <div className=' w-14 h-14  rounded-full bg-red-400 ' >

    //                         </div>
    //                     </div>
    //                     <div className=' pl-2  font-Ubuntu-Medium ' >
    //                         <p className=' text-base ' >Dr Randon Mon</p>
    //                         <p className=' text-sm ' >Hi Admin kindly ....</p>
    //                     </div>
    //                 </div>
    //                 <button className=' w-full h-9 bg-[#A5B0C1] font-Ubuntu-Regular text-sm ' >See all</button>
    //             </div>
    //         </div>
    //     </div>
    )
}
