import { Select } from '@chakra-ui/react'
import React from 'react'

export default function Index() {
    return (
        <div className=' poppins-regular w-full flex h-auto flex-col pt-6 ' > 
            <div className=' flex items-center w-full justify-between ' >
                <div className=' ' >
                    <p className=' font-bold text-3xl ' >Dashboard</p>
                    <p className=' font-medium ' >A quick data overview of the inventory.</p>
                </div>
                <div className='' > 
                    <Select border="0.42px solid #1D242E" >
                        <option>Download Report</option>
                    </Select>
                </div>
            </div>
            <div className=' w-full grid grid-cols-4 gap-5 pt-8 ' >
                <div className=' w-full bg-white ' >
                    <div className=' w-full text-[#1D242E] h-[133.16px] flex flex-col justify-center items-center rounded-t-[4px] border-[#01A768] border-[1.07px] border-b-0 ' >
                        <svg width="28" height="34" viewBox="0 0 28 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.4554 18.2588H7.34977V13.3321H11.4554V9.22645H16.3821V13.3321H20.4877V18.2588H16.3821V22.3644H11.4554V18.2588ZM13.9188 0.194092L0.780792 5.12083V15.1221C0.780792 23.4155 6.38085 31.1504 13.9188 33.039C21.4567 31.1504 27.0567 23.4155 27.0567 15.1221V5.12083L13.9188 0.194092ZM23.7722 15.1221C23.7722 21.6911 19.5845 27.7674 13.9188 29.6231C8.25301 27.7674 4.06528 21.7075 4.06528 15.1221V7.40355L13.9188 3.7085L23.7722 7.40355V15.1221Z" fill="#01A768"/>
                        </svg>
                        <p className=' font-bold text-[20px] text-center mt-1 ' >Good</p>
                        <p className=' font-medium text-sm ' >Inventory Status</p>
                    </div>
                    <div className=' w-full h-[30px] flex justify-center items-center border-[#01A768] border-[1.07px] bg-[#01A7684D] rounded-b-[4px] ' >
                        <p className=' font-medium text-xs text-[#1D242E] ' >{'View Detailed Report >>'}</p>
                    </div>
                </div>
                <div className=' w-full bg-white ' >
                    <div className=' w-full text-[#1D242E] h-[133.16px] flex flex-col justify-center items-center rounded-t-[4px] border-[#03A9F5] border-[1.07px] border-b-0 ' >
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.7796 6.76308H23.2106V3.47858C23.2106 1.67211 21.7326 0.194092 19.9261 0.194092H13.3571C11.5506 0.194092 10.0726 1.67211 10.0726 3.47858V6.76308H3.50364C1.69717 6.76308 0.219147 8.2411 0.219147 10.0476V29.7545C0.219147 31.561 1.69717 33.039 3.50364 33.039H29.7796C31.586 33.039 33.0641 31.561 33.0641 29.7545V10.0476C33.0641 8.2411 31.586 6.76308 29.7796 6.76308ZM13.3571 3.47858H19.9261V6.76308H13.3571V3.47858ZM29.7796 29.7545H3.50364V10.0476H29.7796V29.7545Z" fill="#03A9F5"/>
                            <path d="M18.2836 13.3318H14.9991V18.2585H10.0724V21.543H14.9991V26.4698H18.2836V21.543H23.2103V18.2585H18.2836V13.3318Z" fill="#03A9F5"/>
                        </svg>
                        <p className=' font-bold text-[20px] text-center mt-1 ' >298</p>
                        <p className=' font-medium text-sm ' >Medicines Available</p>
                    </div>
                    <div className=' w-full h-[30px] flex justify-center items-center border-[#03A9F5] border-[1.07px] bg-[#03A9F54D] rounded-b-[4px] ' >
                        <p className=' font-medium text-xs text-[#1D242E] ' >{'Visit Inventory >>'}</p>
                    </div>
                </div>
                <div className=' w-full bg-white ' >
                    <div className=' w-full text-[#1D242E] h-[133.16px] flex flex-col justify-center items-center rounded-t-[4px] border-[#9B6705] border-[1.07px] border-b-0 ' >
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30.5026 6.76308H23.9336V3.47858C23.9336 1.67211 22.4556 0.194092 20.6491 0.194092H14.0801C12.2736 0.194092 10.7956 1.67211 10.7956 3.47858V6.76308H4.22663C2.42016 6.76308 0.942139 8.2411 0.942139 10.0476V29.7545C0.942139 31.561 2.42016 33.039 4.22663 33.039H30.5026C32.309 33.039 33.7871 31.561 33.7871 29.7545V10.0476C33.7871 8.2411 32.309 6.76308 30.5026 6.76308ZM14.0801 3.47858H20.6491V6.76308H14.0801V3.47858ZM30.5026 29.7545H4.22663V10.0476H30.5026V29.7545Z" fill="#9B6705"/>
                            <path d="M19.0068 13.3318H15.7223V18.2585H10.7956V21.543H15.7223V26.4698H19.0068V21.543H23.9336V18.2585H19.0068V13.3318Z" fill="#9B6705"/>
                        </svg>
                        <p className=' font-bold text-[20px] text-center mt-1 ' >298</p>
                        <p className=' font-medium text-sm ' >Medicines Despense</p>
                    </div>
                    <div className=' w-full h-[30px] flex justify-center items-center border-[#9B6705] border-[1.07px] bg-[#9B67054D] rounded-b-[4px] ' >
                        <p className=' font-medium text-xs text-[#1D242E] ' >{'Visit Inventory >>'}</p>
                    </div>
                </div>
                <div className=' w-full bg-white ' >
                    <div className=' w-full text-[#1D242E] h-[133.16px] flex flex-col justify-center items-center rounded-t-[4px] border-[#F0483E] border-[1.07px] border-b-0 ' >
                        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.0876 10.7467L32.4537 32.1123H7.72148L20.0876 10.7467ZM20.0876 4.19409L2.02289 35.3968H38.1523L20.0876 4.19409ZM21.7298 27.1855H18.4453V30.47H21.7298V27.1855ZM21.7298 17.3321H18.4453V23.901H21.7298V17.3321Z" fill="#F0483E"/>
                        </svg>
                        <p className=' font-bold text-[20px] text-center mt-1 ' >01</p>
                        <p className=' font-medium text-sm ' >Medicine Shortage</p>
                    </div>
                    <div className=' w-full h-[30px] flex justify-center items-center border-[#F0483E] border-[1.07px] bg-[#F0483E4D] rounded-b-[4px] ' >
                        <p className=' font-medium text-xs text-[#1D242E] ' >{'Resolve Now >>'}</p>
                    </div>
                </div>
            </div>
            <div className=' w-full text-[#1D242E] grid grid-cols-2 gap-5 pt-8 ' >
                <div className=' w-full border border-[#1D242E4D] rounded ' >
                    <div className=' w-full flex justify-between items-center px-6 h-[45px] border-b border-[#1D242E4D]  ' >
                        <p className=' font-semibold  ' >Inventory</p>
                        <p className=' font-normal text-sm ' >{"Go to Configuration >>"}</p>
                    </div>
                    <div className=' w-full py-[22px] px-[32px] flex justify-between  ' >
                        <div className=' w-full mr-4 ' >
                            <p className=' font-bold text-[#9B6705] text-[20px] ' >298</p>
                            <p className=' font-medium text-sm ' >Total no of Medicines</p>
                        </div>
                        <div className=' w-full ml-4 ' >
                            <p className=' font-bold text-[#7123E2] text-[20px] ' >24</p>
                            <p className=' font-medium text-sm ' >Medicine Groups</p>
                        </div>
                    </div>
                </div>
                <div className=' w-full border border-[#1D242E4D] rounded ' >
                    <div className=' w-full flex justify-between items-center px-6 h-[45px] border-b border-[#1D242E4D]  ' >
                        <p className=' font-semibold  ' >Quick Report</p>
                        <p className=' font-normal text-sm ' >{"November 2022"}</p>
                    </div>
                    <div className=' w-full py-[22px] px-[32px] flex justify-between  ' >
                        <div className=' w-full mr-4 ' >
                            <p className=' font-bold text-[#9B6705] text-[20px] ' >706</p>
                            <p className=' font-medium text-sm ' >Qty of Medicines despense</p>
                        </div> 
                    </div>
                </div>
                <div className=' w-full border border-[#1D242E4D] rounded ' >
                    <div className=' w-full flex justify-between items-center px-6 h-[45px] border-b border-[#1D242E4D]  ' >
                        <p className=' font-semibold  ' >My Pharmacy</p>
                        <p className=' font-normal text-sm ' >{"Go to User Management >>"}</p>
                    </div>
                    <div className=' w-full py-[22px] px-[32px] flex justify-between  ' >
                        <div className=' w-full mr-4 ' >
                            <p className=' font-bold text-[#9B6705] text-[20px] ' >04</p>
                            <p className=' font-medium text-sm ' >Total no of Suppliers</p>
                        </div>
                        <div className=' w-full ml-4 ' >
                            <p className=' font-bold text-[#7123E2] text-[20px] ' >05</p>
                            <p className=' font-medium text-sm ' >Total no of Users</p>
                        </div>
                    </div>
                </div>
                <div className=' w-full border border-[#1D242E4D] rounded ' >
                    <div className=' w-full flex justify-between items-center px-6 h-[45px] border-b border-[#1D242E4D]  ' >
                        <p className=' font-semibold  ' >Patients</p>
                        <p className=' font-normal text-sm ' >{"Go to Customers Page >>"}</p>
                    </div>
                    <div className=' w-full py-[22px] px-[32px] flex justify-between  ' >
                        <div className=' w-full mr-4 ' >
                            <p className=' font-bold text-[#7123E2] text-[20px] ' >845</p>
                            <p className=' font-medium text-sm ' >Total no of Patients</p>
                        </div>
                        <div className=' w-full ml-4 ' >
                            <p className=' font-bold text-[20px] ' >Paracetamol</p>
                            <p className=' font-medium text-sm ' >Frequently despense Item</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
