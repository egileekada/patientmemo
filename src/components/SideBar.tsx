import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function SideBar() {

    const [tab, setTab] = React.useState("0")
    const navigate = useNavigate() 


//     <div className='grid grid-cols-3 w-full gap-6 px-32' >
//     <div onClick={()=> navigate('/dashboard/registerpatient')} className='bg-[#7123E2] w-full rounded-md px-6 py-8 relative cursor-pointer' >
//         <div className='w-14 h-14 flex justify-center items-center  rounded-full bg-[#5815BA]' >
//             <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M20.333 0H4.33301C3.27214 0 2.25473 0.421427 1.50458 1.17157C0.754435 1.92172 0.333008 2.93913 0.333008 4V20C0.333008 21.0609 0.754435 22.0783 1.50458 22.8284C2.25473 23.5786 3.27214 24 4.33301 24H20.333C20.6866 24 21.0258 23.8595 21.2758 23.6095C21.5259 23.3594 21.6663 23.0203 21.6663 22.6667V1.33333C21.6663 0.979711 21.5259 0.640573 21.2758 0.390524C21.0258 0.140476 20.6866 0 20.333 0ZM4.33301 21.3333C3.97939 21.3333 3.64025 21.1929 3.3902 20.9428C3.14015 20.6928 2.99967 20.3536 2.99967 20C2.99967 19.6464 3.14015 19.3072 3.3902 19.0572C3.64025 18.8071 3.97939 18.6667 4.33301 18.6667H18.9997V21.3333H4.33301Z" fill="white"/>
//             </svg>
//         </div>
//         <p className='font-Ubuntu-Bold text-xl text-white mt-3 relative z-30' >Register<br/> New Patients</p>
//         <div className='w-36 h-36  rounded-tl-full absolute bottom-0 right-0 bg-[#5815BA]' />
//     </div> 
//     <div onClick={()=> navigate('/dashboard/manageuser')} className='bg-[#0DA400] w-full rounded-md px-6 py-8 relative cursor-pointer' >
//         <div className='w-14 h-14 flex justify-center items-center  rounded-full bg-[#109205]' >
//             <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M13.3304 15.9302C12.1911 15.9302 11.0775 15.5923 10.1303 14.9594C9.18305 14.3265 8.44478 13.4269 8.00882 12.3744C7.57285 11.3219 7.45879 10.1638 7.68104 9.04644C7.90329 7.92911 8.45188 6.90277 9.25743 6.09722C10.063 5.29167 11.0893 4.74309 12.2066 4.52084C13.324 4.29858 14.4821 4.41265 15.5346 4.84861C16.5871 5.28457 17.4867 6.02285 18.1196 6.97007C18.7525 7.9173 19.0904 9.03094 19.0904 10.1702C19.089 11.6974 18.4818 13.1617 17.4018 14.2416C16.3219 15.3216 14.8576 15.9288 13.3304 15.9302ZM13.3304 5.93016C12.4876 5.93016 11.6638 6.18013 10.9631 6.64845C10.2625 7.11676 9.71644 7.78238 9.39416 8.56108C9.07188 9.33979 8.98781 10.1966 9.15259 11.0231C9.31736 11.8496 9.72359 12.6086 10.3199 13.2042C10.9161 13.7998 11.6757 14.2051 12.5023 14.3689C13.329 14.5327 14.1857 14.4476 14.9641 14.1244C15.7424 13.8013 16.4074 13.2545 16.8749 12.5533C17.3423 11.852 17.5913 11.0279 17.5904 10.1852C17.5917 9.62489 17.4825 9.06986 17.269 8.55186C17.0555 8.03386 16.7419 7.56306 16.3462 7.16642C15.9505 6.76978 15.4804 6.4551 14.9629 6.24039C14.4454 6.02568 13.8906 5.91516 13.3304 5.91516V5.93016ZM13.3304 27.5852C10.3959 27.6471 7.53647 26.6555 5.27036 24.7902C5.17729 24.7019 5.10859 24.591 5.07092 24.4684C5.03325 24.3458 5.02789 24.2155 5.05536 24.0902C6.05536 19.3002 9.01036 16.6602 13.3304 16.6602C13.5293 16.6602 13.72 16.7392 13.8607 16.8798C14.0013 17.0205 14.0804 17.2112 14.0804 17.4102C14.0804 17.6091 14.0013 17.7998 13.8607 17.9405C13.72 18.0811 13.5293 18.1602 13.3304 18.1602C9.87536 18.1602 7.56036 20.1602 6.62036 23.9602C8.5744 25.3635 10.9247 26.1078 13.3304 26.0852C13.5293 26.0852 13.72 26.1642 13.8607 26.3048C14.0013 26.4455 14.0804 26.6362 14.0804 26.8352C14.0804 27.0341 14.0013 27.2248 13.8607 27.3655C13.72 27.5061 13.5293 27.5852 13.3304 27.5852Z" fill="white"/>
//                 <path d="M13.3301 27.585C13.1312 27.585 12.9404 27.5059 12.7997 27.3653C12.6591 27.2246 12.5801 27.0339 12.5801 26.835C12.5801 26.636 12.6591 26.4453 12.7997 26.3046C12.9404 26.164 13.1312 26.085 13.3301 26.085C14.9489 26.0933 16.5516 25.7629 18.0351 25.115C18.126 25.0752 18.2239 25.0538 18.3231 25.0519C18.4223 25.05 18.521 25.0677 18.6133 25.1039C18.7057 25.1401 18.7901 25.1942 18.8616 25.263C18.9331 25.3318 18.9904 25.414 19.0301 25.505C19.0698 25.5959 19.0912 25.6938 19.0931 25.793C19.095 25.8922 19.0774 25.9908 19.0411 26.0832C19.0049 26.1756 18.9509 26.26 18.8821 26.3315C18.8132 26.403 18.731 26.4602 18.6401 26.5C16.9652 27.2284 15.1564 27.598 13.3301 27.585ZM20.8701 25C20.6981 24.9993 20.5315 24.94 20.3979 24.8318C20.2642 24.7236 20.1715 24.573 20.1351 24.405C19.2701 20.325 16.9151 18.165 13.3301 18.165C13.1312 18.165 12.9404 18.0859 12.7997 17.9453C12.6591 17.8046 12.5801 17.6139 12.5801 17.415C12.5801 17.216 12.6591 17.0253 12.7997 16.8846C12.9404 16.744 13.1312 16.665 13.3301 16.665C17.6501 16.665 20.5851 19.305 21.6051 24.095C21.6271 24.1925 21.6296 24.2935 21.6123 24.392C21.595 24.4905 21.5583 24.5845 21.5043 24.6687C21.4503 24.7529 21.3802 24.8256 21.2979 24.8824C21.2157 24.9393 21.1229 24.9792 21.0251 25C20.9735 25.0049 20.9216 25.0049 20.8701 25ZM23.3801 19.13C23.1812 19.13 22.9904 19.0509 22.8497 18.9103C22.7091 18.7696 22.6301 18.5789 22.6301 18.38V12.71C22.6301 12.511 22.7091 12.3203 22.8497 12.1796C22.9904 12.039 23.1812 11.96 23.3801 11.96C23.579 11.96 23.7698 12.039 23.9104 12.1796C24.0511 12.3203 24.1301 12.511 24.1301 12.71V18.38C24.1288 18.5785 24.0493 18.7685 23.909 18.9088C23.7686 19.0492 23.5786 19.1286 23.3801 19.13Z" fill="white"/>
//                 <path d="M23.3799 16.2949H20.5449C20.346 16.2949 20.1552 16.2159 20.0146 16.0753C19.8739 15.9346 19.7949 15.7438 19.7949 15.5449C19.7949 15.346 19.8739 15.1552 20.0146 15.0146C20.1552 14.8739 20.346 14.7949 20.5449 14.7949H23.3799C23.5788 14.7949 23.7696 14.8739 23.9103 15.0146C24.0509 15.1552 24.1299 15.346 24.1299 15.5449C24.1299 15.7438 24.0509 15.9346 23.9103 16.0753C23.7696 16.2159 23.5788 16.2949 23.3799 16.2949ZM26.2149 16.2949H25.3399C25.141 16.2949 24.9502 16.2159 24.8096 16.0753C24.6689 15.9346 24.5899 15.7438 24.5899 15.5449C24.5899 15.346 24.6689 15.1552 24.8096 15.0146C24.9502 14.8739 25.141 14.7949 25.3399 14.7949H26.2149C26.4138 14.7949 26.6046 14.8739 26.7453 15.0146C26.8859 15.1552 26.9649 15.346 26.9649 15.5449C26.9649 15.7438 26.8859 15.9346 26.7453 16.0753C26.6046 16.2159 26.4138 16.2949 26.2149 16.2949Z" fill="white"/>
//             </svg>
//         </div>
//         <p className='font-Ubuntu-Bold text-xl text-white mt-3 relative z-30' >Manage<br/> Staff</p>
//             <div className='w-36 h-36  rounded-tl-full absolute bottom-0 right-0 bg-[#109205]' />
//     </div> 
//     <div onClick={()=> navigate('/dashboard/managepatient')} className='bg-[#176AE7] w-full rounded-md px-6 py-8 relative cursor-pointer' >
//         <div className='w-14 h-14 flex justify-center items-center  rounded-full bg-[#115FD6]' >
//             <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path fill-rule="evenodd" clip-rule="evenodd" d="M13.868 16.8167L13.9998 16.8167L14.2944 16.8177C16.5468 16.8325 21.694 17.0601 21.694 20.5488C21.694 24.0147 16.7262 24.2407 14.3295 24.2555L13.4416 24.2555C11.1891 24.2406 6.04086 24.0134 6.04086 20.529C6.04086 17.0588 11.1891 16.8324 13.4416 16.8177L13.7363 16.8167C13.782 16.8167 13.8259 16.8167 13.868 16.8167ZM13.868 18.5667C11.096 18.5667 7.79086 18.9073 7.79086 20.529C7.79086 22.114 10.8987 22.4845 13.6147 22.5055L13.868 22.5065C16.64 22.5065 19.944 22.167 19.944 20.5488C19.944 18.9108 16.64 18.5667 13.868 18.5667ZM23.1472 16.3432C25.9741 16.7667 26.5679 18.0944 26.5679 19.1339C26.5679 19.7686 26.3182 20.9271 24.6499 21.5629C24.5472 21.6014 24.4422 21.6201 24.3384 21.6201C23.9861 21.6201 23.6536 21.4054 23.5206 21.0566C23.3479 20.6051 23.5754 20.0987 24.0269 19.9272C24.8179 19.6262 24.8179 19.2937 24.8179 19.1339C24.8179 18.6229 24.1681 18.2659 22.8871 18.0746C22.4099 18.0022 22.0797 17.5577 22.1509 17.0782C22.2221 16.5999 22.6654 16.2814 23.1472 16.3432ZM5.58399 17.0782C5.65516 17.5577 5.32499 18.0022 4.84783 18.0746C3.56683 18.2659 2.91699 18.6229 2.91699 19.1339C2.91699 19.2937 2.91699 19.6251 3.70916 19.9272C4.16066 20.0987 4.38816 20.6051 4.21549 21.0566C4.08249 21.4054 3.74999 21.6201 3.39766 21.6201C3.29383 21.6201 3.18883 21.6014 3.08616 21.5629C1.41666 20.9259 1.16699 19.7674 1.16699 19.1339C1.16699 18.0956 1.76083 16.7667 4.58883 16.3432C5.07066 16.2826 5.51166 16.5999 5.58399 17.0782ZM13.868 4.66699C16.808 4.66699 19.1985 7.05866 19.1985 9.99749C19.1985 12.9363 16.808 15.328 13.868 15.328H13.8365C12.4132 15.3233 11.0797 14.7657 10.081 13.7577C9.08002 12.7508 8.53286 11.4138 8.53865 9.99399C8.53865 7.05866 10.9292 4.66699 13.868 4.66699ZM13.868 6.41699C11.894 6.41699 10.2887 8.02349 10.2887 9.99749C10.2852 10.9542 10.6515 11.849 11.3224 12.5245C11.9932 13.2 12.8869 13.5745 13.8389 13.578L13.868 14.453V13.578C15.842 13.578 17.4485 11.9727 17.4485 9.99749C17.4485 8.02349 15.842 6.41699 13.868 6.41699ZM21.0885 5.80974C23.1395 6.14691 24.6294 7.90158 24.6294 9.98174C24.6247 12.0759 23.0602 13.8726 20.9894 14.1631C20.9485 14.1689 20.9077 14.1712 20.868 14.1712C20.4387 14.1712 20.0642 13.8551 20.0024 13.4176C19.9359 12.9381 20.2684 12.4959 20.7479 12.4294C21.9612 12.2591 22.877 11.2067 22.8794 9.97941C22.8794 8.76258 22.0067 7.73358 20.8039 7.53641C20.3279 7.45824 20.0047 7.00791 20.0829 6.53074C20.1622 6.05358 20.609 5.73391 21.0885 5.80974ZM7.65319 6.53074C7.73136 7.00791 7.40819 7.45824 6.93219 7.53641C5.72936 7.73358 4.85669 8.76258 4.85669 9.98174C4.85903 11.2067 5.77486 12.2602 6.98703 12.4294C7.46653 12.4959 7.79903 12.9381 7.73252 13.4176C7.67069 13.8551 7.29619 14.1712 6.86686 14.1712C6.82719 14.1712 6.78636 14.1689 6.74553 14.1631C4.67469 13.8726 3.11136 12.0759 3.10669 9.98408C3.10669 7.90158 4.59653 6.14691 6.64753 5.80974C7.13869 5.73274 7.57386 6.05591 7.65319 6.53074Z" fill="white"/>
//             </svg>
//         </div>
//         <p className='font-Ubuntu-Bold text-xl text-white mt-3 relative z-30' >Manage<br/> Registered Patients</p>
//             <div className='w-36 h-36  rounded-tl-full absolute bottom-0 right-0 bg-[#115FD6]' />
//     </div>
// </div>
        
    React.useEffect(() => {
        sessionStorage.setItem("tab", tab)
    }, [tab])

    const ClickHandler =(item: any, index: any)=> { 
        setTab(index)
        navigate(item)
    }

    return (
        <div className=' w-250px bg-[#4C04B4] h-screen pt-28 flex flex-col ' >
            <button onClick={()=> ClickHandler("/dashboard", "0")} className={tab === "0" ? ' w-56 ml-auto relative my-3 bg-white rounded-tl-lg rounded-bl-lg h-10 pl-5 flex items-center ' : ' w-56 ml-auto relative my-3 text-white rounded-tl-lg rounded-bl-lg h-10 pl-5 flex items-center '} >
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1764_829)">
                        <path d="M25.683 13.3874L14.2544 1.95886C14.1117 1.81696 13.9186 1.7373 13.7173 1.7373C13.516 1.7373 13.3229 1.81696 13.1801 1.95886L1.75156 13.3874C1.62674 13.5332 1.56152 13.7207 1.56893 13.9124C1.57633 14.1042 1.65583 14.2861 1.79152 14.4218C1.92721 14.5575 2.1091 14.6369 2.30086 14.6444C2.49261 14.6518 2.6801 14.5865 2.82585 14.4617L13.7135 3.5741L24.6011 14.4693C24.7468 14.5942 24.9343 14.6594 25.1261 14.652C25.3178 14.6446 25.4997 14.5651 25.6354 14.4294C25.7711 14.2937 25.8506 14.1118 25.858 13.92C25.8654 13.7283 25.8002 13.5408 25.6754 13.3951L25.683 13.3874Z" fill={tab === "0" ? "#121212": "white"}/>
                        <path d="M21.3322 24.5946H17.5227V16.9756H9.90365V24.5946H6.09412V13.928L4.57031 15.4518V24.5946C4.57031 24.9988 4.73086 25.3864 5.01663 25.6721C5.3024 25.9579 5.68998 26.1185 6.09412 26.1185H11.4275V18.4994H15.9989V26.1185H21.3322C21.7364 26.1185 22.1239 25.9579 22.4097 25.6721C22.6955 25.3864 22.856 24.9988 22.856 24.5946V15.2689L21.3322 13.7451V24.5946Z" fill={tab === "0" ? "#121212": "white"}/>
                    </g>
                    <defs>
                        <clipPath id="clip0_1764_829">
                            <rect width="27.4286" height="27.4286" fill="white" transform="translate(0 0.213867)"/>
                        </clipPath>
                    </defs>
                </svg> 
                <div className=' absolute inset-0 flex items-center justify-center ' >
                <p className=' font-Ubuntu-Medium ' >Home</p>
                </div>
            </button>
            <button onClick={()=> ClickHandler("/dashboard/managepatient", "1")} className={tab === "1" ? ' w-56 ml-auto relative my-3 bg-white rounded-tl-lg rounded-bl-lg h-10 pl-5 flex items-center ' : ' w-56 ml-auto relative my-3 text-white rounded-tl-lg rounded-bl-lg h-10 pl-5 flex items-center '} >
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.7201 20.5381L16.0801 15.4141C15.9894 14.6884 15.6366 14.0207 15.0882 13.5368C14.5398 13.0528 13.8335 12.7859 13.1021 12.7861H10.8981C10.167 12.7863 9.46114 13.0535 8.91314 13.5374C8.36515 14.0213 8.01271 14.6887 7.92206 15.4141L7.28106 20.5381C7.24588 20.8196 7.271 21.1054 7.35474 21.3765C7.43848 21.6475 7.57893 21.8977 7.76677 22.1103C7.9546 22.3229 8.18552 22.4931 8.44419 22.6097C8.70286 22.7262 8.98336 22.7863 9.26706 22.7861H14.7351C15.0187 22.7862 15.2991 22.7259 15.5576 22.6094C15.8162 22.4928 16.047 22.3225 16.2347 22.1099C16.4224 21.8973 16.5628 21.6472 16.6465 21.3762C16.7301 21.1053 16.7552 20.8196 16.7201 20.5381V20.5381Z" stroke={tab === "1" ? "#121212": "white"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 8.78613C13.6569 8.78613 15 7.44299 15 5.78613C15 4.12928 13.6569 2.78613 12 2.78613C10.3431 2.78613 9 4.12928 9 5.78613C9 7.44299 10.3431 8.78613 12 8.78613Z" stroke={tab === "1" ? "#121212": "white"} stroke-width="2"/>
                    <path d="M4 11.7861C5.10457 11.7861 6 10.8907 6 9.78613C6 8.68156 5.10457 7.78613 4 7.78613C2.89543 7.78613 2 8.68156 2 9.78613C2 10.8907 2.89543 11.7861 4 11.7861Z" stroke={tab === "1" ? "#121212": "white"} stroke-width="2"/>
                    <path d="M20 11.7861C21.1046 11.7861 22 10.8907 22 9.78613C22 8.68156 21.1046 7.78613 20 7.78613C18.8954 7.78613 18 8.68156 18 9.78613C18 10.8907 18.8954 11.7861 20 11.7861Z" stroke={tab === "1" ? "#121212": "white"} stroke-width="2"/>
                    <path d="M4.00057 14.7861H3.69457C3.22114 14.7861 2.76303 14.954 2.40175 15.2599C2.04047 15.5659 1.79945 15.9901 1.72157 16.4571L1.38857 18.4571C1.34079 18.7437 1.356 19.0372 1.43314 19.3173C1.51029 19.5973 1.64753 19.8572 1.8353 20.0789C2.02308 20.3006 2.25689 20.4786 2.52047 20.6008C2.78405 20.7229 3.07107 20.7862 3.36157 20.7861H7.00057M20.0006 14.7861H20.3066C20.78 14.7861 21.2381 14.954 21.5994 15.2599C21.9607 15.5659 22.2017 15.9901 22.2796 16.4571L22.6126 18.4571C22.6604 18.7437 22.6452 19.0372 22.568 19.3173C22.4909 19.5973 22.3536 19.8572 22.1658 20.0789C21.9781 20.3006 21.7443 20.4786 21.4807 20.6008C21.2171 20.7229 20.9301 20.7862 20.6396 20.7861H17.0006" stroke={tab === "1" ? "#121212": "white"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div className=' absolute inset-0 flex items-center justify-center ' >
                <p className=' font-Ubuntu-Medium ' >Patients</p>
                </div>
            </button>
            <button onClick={()=> ClickHandler("/dashboard/manageuser", "2")} className={tab === "2" ? ' w-56 ml-auto relative my-3 bg-white rounded-tl-lg rounded-bl-lg h-10 pl-5 flex items-center ' : ' w-56 ml-auto relative my-3 text-white rounded-tl-lg rounded-bl-lg h-10 pl-5 flex items-center '} >
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.5 21.6426C22.5 21.6426 24 21.6426 24 20.1426C24 18.6426 22.5 14.1426 16.5 14.1426C10.5 14.1426 9 18.6426 9 20.1426C9 21.6426 10.5 21.6426 10.5 21.6426H22.5ZM10.533 20.1426C10.5219 20.1411 10.5109 20.139 10.5 20.1366C10.5015 19.7406 10.7505 18.5916 11.64 17.5566C12.468 16.5861 13.923 15.6426 16.5 15.6426C19.0755 15.6426 20.5305 16.5876 21.36 17.5566C22.2495 18.5916 22.497 19.7421 22.5 20.1366L22.488 20.1396C22.481 20.1408 22.474 20.1418 22.467 20.1426H10.533ZM16.5 11.1426C17.2956 11.1426 18.0587 10.8265 18.6213 10.2639C19.1839 9.70129 19.5 8.93823 19.5 8.14258C19.5 7.34693 19.1839 6.58387 18.6213 6.02126C18.0587 5.45865 17.2956 5.14258 16.5 5.14258C15.7044 5.14258 14.9413 5.45865 14.3787 6.02126C13.8161 6.58387 13.5 7.34693 13.5 8.14258C13.5 8.93823 13.8161 9.70129 14.3787 10.2639C14.9413 10.8265 15.7044 11.1426 16.5 11.1426ZM21 8.14258C21 8.73353 20.8836 9.31869 20.6575 9.86465C20.4313 10.4106 20.0998 10.9067 19.682 11.3246C19.2641 11.7424 18.768 12.0739 18.2221 12.3C17.6761 12.5262 17.0909 12.6426 16.5 12.6426C15.9091 12.6426 15.3239 12.5262 14.7779 12.3C14.232 12.0739 13.7359 11.7424 13.318 11.3246C12.9002 10.9067 12.5687 10.4106 12.3425 9.86465C12.1164 9.31869 12 8.73353 12 8.14258C12 6.9491 12.4741 5.80451 13.318 4.9606C14.1619 4.11668 15.3065 3.64258 16.5 3.64258C17.6935 3.64258 18.8381 4.11668 19.682 4.9606C20.5259 5.80451 21 6.9491 21 8.14258ZM10.404 14.5626C9.80397 14.3736 9.18545 14.2494 8.559 14.1921C8.207 14.1586 7.85359 14.1421 7.5 14.1426C1.5 14.1426 0 18.6426 0 20.1426C0 21.1431 0.4995 21.6426 1.5 21.6426H7.824C7.60163 21.1743 7.49074 20.6609 7.5 20.1426C7.5 18.6276 8.0655 17.0796 9.135 15.7866C9.4995 15.3456 9.924 14.9331 10.404 14.5626ZM7.38 15.6426C6.49223 16.9765 6.01266 18.5403 6 20.1426H1.5C1.5 19.7526 1.746 18.5976 2.64 17.5566C3.4575 16.6026 4.878 15.6726 7.38 15.6441V15.6426ZM2.25 8.89258C2.25 7.6991 2.72411 6.55451 3.56802 5.7106C4.41193 4.86668 5.55653 4.39258 6.75 4.39258C7.94347 4.39258 9.08807 4.86668 9.93198 5.7106C10.7759 6.55451 11.25 7.6991 11.25 8.89258C11.25 10.0861 10.7759 11.2306 9.93198 12.0746C9.08807 12.9185 7.94347 13.3926 6.75 13.3926C5.55653 13.3926 4.41193 12.9185 3.56802 12.0746C2.72411 11.2306 2.25 10.0861 2.25 8.89258ZM6.75 5.89258C5.95435 5.89258 5.19129 6.20865 4.62868 6.77126C4.06607 7.33387 3.75 8.09693 3.75 8.89258C3.75 9.68823 4.06607 10.4513 4.62868 11.0139C5.19129 11.5765 5.95435 11.8926 6.75 11.8926C7.54565 11.8926 8.30871 11.5765 8.87132 11.0139C9.43393 10.4513 9.75 9.68823 9.75 8.89258C9.75 8.09693 9.43393 7.33387 8.87132 6.77126C8.30871 6.20865 7.54565 5.89258 6.75 5.89258Z" fill={tab === "2" ? "#121212": "white"}/>
                </svg> 
                <div className=' absolute inset-0 flex items-center justify-center ' >
                <p className=' font-Ubuntu-Medium ' >Staffs</p>
                </div>
            </button>
            <button onClick={()=> ClickHandler("/dashboard", "3")} className={tab === "3" ? ' w-56 ml-auto relative my-3 bg-white rounded-tl-lg rounded-bl-lg h-10 pl-5 flex items-center ' : ' w-56 ml-auto relative my-3 text-white rounded-tl-lg rounded-bl-lg h-10 pl-5 flex items-center '} >
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.3838 16.498L22.6567 15.0214C22.7385 14.5205 22.7807 14.0089 22.7807 13.4974C22.7807 12.9859 22.7385 12.4744 22.6567 11.9734L24.3838 10.4968C24.5141 10.3853 24.6073 10.2368 24.6511 10.071C24.6949 9.9052 24.6872 9.73001 24.629 9.5687L24.6053 9.50015C24.1298 8.17131 23.4179 6.93946 22.5038 5.86411L22.4564 5.80874C22.3455 5.67836 22.1977 5.58464 22.0325 5.53992C21.8673 5.4952 21.6924 5.5016 21.5309 5.55825L19.3872 6.32026C18.5962 5.67163 17.7129 5.16011 16.7584 4.80151L16.3444 2.5603C16.3132 2.39166 16.2314 2.23652 16.1099 2.11548C15.9884 1.99444 15.8329 1.91324 15.6642 1.88267L15.593 1.86948C14.2192 1.62163 12.7743 1.62163 11.4006 1.86948L11.3294 1.88267C11.1606 1.91324 11.0052 1.99444 10.8837 2.11548C10.7622 2.23652 10.6804 2.39166 10.6491 2.5603L10.2325 4.81206C9.28565 5.17073 8.40387 5.68198 7.62217 6.32554L5.4627 5.55825C5.30124 5.50115 5.12623 5.49452 4.96092 5.53927C4.79561 5.58401 4.64783 5.678 4.53721 5.80874L4.48975 5.86411C3.57678 6.94022 2.86494 8.17186 2.38829 9.50015L2.36456 9.5687C2.2459 9.89829 2.34346 10.2674 2.60977 10.4968L4.35792 11.9892C4.27618 12.4849 4.23663 12.9912 4.23663 13.4948C4.23663 14.001 4.27618 14.5073 4.35792 15.0003L2.60977 16.4927C2.47951 16.6042 2.38627 16.7528 2.34247 16.9186C2.29867 17.0843 2.30637 17.2595 2.36456 17.4209L2.38829 17.4894C2.86553 18.8183 3.57217 20.0444 4.48975 21.1254L4.53721 21.1808C4.6481 21.3112 4.79588 21.4049 4.9611 21.4496C5.12631 21.4943 5.30119 21.488 5.4627 21.4313L7.62217 20.664C8.40792 21.31 9.28594 21.8215 10.2325 22.1775L10.6491 24.4292C10.6804 24.5979 10.7622 24.753 10.8837 24.8741C11.0052 24.9951 11.1606 25.0763 11.3294 25.1069L11.4006 25.1201C12.7869 25.3692 14.2066 25.3692 15.593 25.1201L15.6642 25.1069C15.8329 25.0763 15.9884 24.9951 16.1099 24.8741C16.2314 24.753 16.3132 24.5979 16.3444 24.4292L16.7584 22.188C17.7125 21.8304 18.6008 21.3172 19.3872 20.6693L21.5309 21.4313C21.6923 21.4884 21.8673 21.495 22.0326 21.4503C22.198 21.4055 22.3457 21.3116 22.4564 21.1808L22.5038 21.1254C23.4214 20.0417 24.128 18.8183 24.6053 17.4894L24.629 17.4209C24.7477 17.0965 24.6501 16.7274 24.3838 16.498ZM20.7847 12.2845C20.8506 12.6827 20.8849 13.0914 20.8849 13.5C20.8849 13.9087 20.8506 14.3174 20.7847 14.7156L20.6106 15.7729L22.5803 17.4578C22.2817 18.1457 21.9048 18.7968 21.457 19.3984L19.0102 18.5309L18.1822 19.2112C17.5521 19.728 16.8507 20.134 16.0913 20.4188L15.0867 20.7959L14.6148 23.3535C13.8701 23.4378 13.1182 23.4378 12.3735 23.3535L11.9016 20.7906L10.9049 20.4083C10.1534 20.1235 9.45469 19.7174 8.82979 19.2033L8.00186 18.5204L5.53917 19.3958C5.09092 18.7919 4.71651 18.1407 4.41592 17.4551L6.40665 15.7544L6.23526 14.6998C6.17198 14.3069 6.1377 13.9008 6.1377 13.5C6.1377 13.0966 6.16934 12.6932 6.23526 12.3003L6.40665 11.2457L4.41592 9.54497C4.71387 8.85679 5.09092 8.20815 5.53917 7.60435L8.00186 8.47974L8.82979 7.79683C9.45469 7.28267 10.1534 6.87661 10.9049 6.59185L11.9042 6.21479L12.3762 3.6519C13.1171 3.56753 13.8738 3.56753 14.6174 3.6519L15.0894 6.20952L16.094 6.58657C16.8507 6.87134 17.5547 7.27739 18.1849 7.79419L19.0128 8.47446L21.4597 7.60698C21.9079 8.21079 22.2823 8.86206 22.5829 9.54761L20.6133 11.2325L20.7847 12.2845ZM13.4994 8.59575C10.9365 8.59575 8.85879 10.6735 8.85879 13.2364C8.85879 15.7993 10.9365 17.877 13.4994 17.877C16.0623 17.877 18.14 15.7993 18.14 13.2364C18.14 10.6735 16.0623 8.59575 13.4994 8.59575ZM15.5877 15.3247C15.3138 15.5993 14.9883 15.8172 14.6299 15.9656C14.2715 16.114 13.8873 16.1901 13.4994 16.1895C12.711 16.1895 11.9701 15.881 11.4111 15.3247C11.1365 15.0508 10.9186 14.7253 10.7702 14.3669C10.6218 14.0085 10.5457 13.6243 10.5463 13.2364C10.5463 12.448 10.8548 11.7071 11.4111 11.1481C11.9701 10.5891 12.711 10.2833 13.4994 10.2833C14.2878 10.2833 15.0287 10.5891 15.5877 11.1481C15.8624 11.422 16.0802 11.7475 16.2286 12.1059C16.3771 12.4643 16.4531 12.8485 16.4525 13.2364C16.4525 14.0248 16.144 14.7657 15.5877 15.3247Z" fill={tab === "3" ? "#121212": "white"}/>
                </svg>
                <div className=' absolute inset-0 flex items-center justify-center ' >
                <p className=' font-Ubuntu-Medium ' >Settings</p>
                </div>
            </button>
            <button onClick={()=> ClickHandler("/", "4")} className={tab === "14" ? ' w-56 ml-auto relative my-3 bg-white rounded-tl-lg rounded-bl-lg h-10 pl-5 flex items-center ' : ' w-56 ml-auto relative my-3 text-white rounded-tl-lg rounded-bl-lg h-10 pl-5 flex items-center '} >
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 3.35742H7C6.46957 3.35742 5.96086 3.56814 5.58579 3.94321C5.21071 4.31828 5 4.82699 5 5.35742V19.3574C5 19.8879 5.21071 20.3966 5.58579 20.7716C5.96086 21.1467 6.46957 21.3574 7 21.3574H15M19 12.3574L15 8.35742M19 12.3574L15 16.3574M19 12.3574H9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div className=' absolute inset-0 flex items-center justify-center ' >
                <p className=' font-Ubuntu-Medium ' >Log out</p>
                </div>
            </button>
        </div>
    )
}
