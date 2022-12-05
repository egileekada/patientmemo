import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from "../../../assets/images/whitelogo.png"
import SideBarIcons from './SideBarIcons'

export default function SideBar() {
    

  const location = useLocation();

    const NavArray = [
        {
            name: "Dashboard",
            link: "/dashboard/pharmacy"
        },
        {
            name: "Inventory",
            link: "/dashboard/pharmacy/inventory",
            submenu : [
                {
                    name: "List of medicines",
                    link: "/dashboard/pharmacy/medicinelist",
                },
                {
                    name: "Medicine Groups",
                    link: "/dashboard/pharmacy/medicinegroup",
                },
            ]
        },
        {
            name: "Dispense",
            link: "/dashboard/pharmacy/dispense"
        },
        {
            name: "Reports",
            link: "/dashboard/pharmacy/reports"
        },
        {
            name: "Settings",
            link: "/dashboard/pharmacy/settings"
        },
    ]

    const [active, setActive] = React.useState(location.pathname) 
    const [tab, setTab] = React.useState(location.pathname) 
    const navigate = useNavigate()

    React.useEffect(() => {  
        navigate(active)
    }, [active])
    
    const ClickHandler =(item: any)=>{
        setActive(item)
        setTab(item)
    }

    return (
        <div className=' w-[300px] poppins-regular  h-full flex flex-col text-white justify-between bg-[#7123E2] ' >
            <div className=' w-full ' >
                <div className=' w-full flex justify-center items-center h-[81px] bg-[#262F56] ' >
                    <img src={Logo} className=" w-[160px] " alt='logo' /> 
                </div>
                <div className=' w-full h-full ' >
                    <div className=' flex pt-[40px] pl-[45px] pb-[30px] items-center ' >
                        <div className=' w-fit mr-3 ' >
                            <div className=' w-[48px] h-[48px] rounded-full bg-yellow-600 ' >

                            </div>
                        </div>
                        <div className='  ' >
                            <p className=' text-xl font-medium  ' >Tracy</p>
                            <p className=' font-normal ' >Pharmist</p>
                        </div>
                    </div>
                    {NavArray.map((item: any) => {
                        return(
                            <> 
                                <button onClick={()=> ClickHandler(item.link)} key={item.name} className={item.link === active ? ' w-full h-[59px]  pl-[45px] bg-[#262F56] flex items-center ' : ' w-full h-[59px]  pl-[45px] flex items-center '} >
                                    <div className=' w-9 ' >
                                        <SideBarIcons name={item.name} />
                                    </div>
                                    <p className=' font-medium ml-3 ' >{item.name}</p>
                                    {item.submenu && ( 
                                        <div className=' ml-auto mr-8 ' >
                                            {item.link === tab ? 
                                                <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2.4519 9.79532L8.00716 4.24006L13.5624 9.79532C14.1208 10.3537 15.0228 10.3537 15.5812 9.79532C16.1396 9.23693 16.1396 8.33492 15.5812 7.77653L9.0094 1.20472C8.45101 0.646326 7.54899 0.646326 6.9906 1.20472L0.418793 7.77653C-0.139597 8.33492 -0.139597 9.23693 0.418793 9.79532C0.977181 10.3394 1.89351 10.3537 2.4519 9.79532Z" fill="white"/>
                                                </svg>:
                                                <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13.5481 1.20468L7.99284 6.75994L2.43758 1.20468C1.87919 0.646291 0.977181 0.646291 0.418792 1.20468C-0.139597 1.76307 -0.139597 2.66508 0.418792 3.22347L6.9906 9.79528C7.54899 10.3537 8.45101 10.3537 9.0094 9.79528L15.5812 3.22347C16.1396 2.66508 16.1396 1.76307 15.5812 1.20468C15.0228 0.660609 14.1065 0.646291 13.5481 1.20468Z" fill="white"/>
                                                </svg>
                                            }
                                        </div>
                                    )}
                                </button>
                                {item.link === tab && item?.submenu && ( 
                                    <> 
                                        {item?.submenu.map((item: any) => {
                                            return( 
                                                <button onClick={()=> setActive(item.link)} key={item.name} className={item.link === active ? ' w-full h-[59px]  pl-[45px] bg-[#262F56] flex items-center ' : ' w-full h-[59px]  pl-[45px] bg-[#5500CF] flex items-center '} >
                                                    <div className=' w-9 ' >
                                                        <SideBarIcons name={item.name} />
                                                    </div>
                                                    <p className=' font-medium ml-3 ' >{item.name}</p> 
                                                </button>
                                            )
                                        })}
                                    </>
                                )}
                            </>
                        )
                    })}
                </div> 
            </div>
            <div className=' w-full bg-[#1D242E] flex justify-center items-center text-white h-[34px] ' >
                <p className=' text-xs  ' >Designed by Icoweb © 2022</p>
            </div>
        </div>
    )
} 