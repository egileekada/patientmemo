import React from 'react'
import AddDrugs from '../../modal/AddDrugs'
import PharmacyModal from '../../modal/PharmacyModal'

export default function Pharmacy() {
    const [showModal, setShowModal] = React.useState(false)
    return (
        <div className=' w-full h-screen px-28 py-8 ' style={{backgroundColor: 'rgba(113, 35, 226, 0.08)'}} > 
            <div className='w-full flex items-center px-8 mb-4 bg-white rounded-lg' >
                <p className='py-6 mx-4 border-b-2 font-Ubuntu-Bold text-[#7123E2] cursor-pointer text-base border-[#7123E2]' >Medicine Store</p>
                <p className='py-6 mx-6 border-b-2 font-Ubuntu-Bold text-[#727272] cursor-pointer text-base border-transparent' >Doctor’s Prescription</p>
                <p className='py-6 mx-6 border-b-2 font-Ubuntu-Bold text-[#727272] cursor-pointer text-base border-transparent' >Pharmacy Record</p>
            </div>
            <div className='w-full flex py-4 items-center px-8 mb-4 bg-white rounded-lg' >
                <div className='mr-auto' >
                    <p className='font-Ubuntu-Bold text-[#121212] text-base' >Medicine Store</p>
                    <p className='font-Ubuntu-Regular text-[#727272] mt-1 text-xs' >Get the doctor’s prescription and dispense drug today</p>
                </div>
                <button onClick={()=> setShowModal(true)} style={{border: '1px solid #7123E2', borderRadius: '4px'}} className='ml-auto flex items-center font-Ubuntu-Medium text-[#7123E2] py-2 w-auto px-5 text-sm' > 
                    <svg className='mr-2' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 6V11M6 1V6V1ZM6 6H11H6ZM6 6H1H6Z" stroke="#7123E2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>Add Drug
                </button> 
            </div>
            <div className='w-full flex flex-col' >  
                <div className='mb-8 w-full h-full grid gap-4 grid-cols-4' >
                    <div onClick={()=> setShowModal(true)} className='w-full h-full bg-white cursor-pointer py-8 px-6 rounded-md' style={{border: '1px solid #F0F5FF'}} >
                        <svg className='mx-auto'  width="107" height="107" viewBox="0 0 107 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M93.9587 13.0404C89.8205 8.90563 84.21 6.58301 78.3601 6.58301C72.5103 6.58301 66.8997 8.90563 62.7615 13.0404L13.04 62.762C9.09617 66.9379 6.93583 72.4868 7.01788 78.23C7.09993 83.9733 9.41792 89.4583 13.4794 93.5198C17.5409 97.5812 23.0259 99.8992 28.7691 99.9813C34.5124 100.063 40.0613 97.903 44.2372 93.9592L93.9587 44.2376C98.0935 40.0994 100.416 34.4889 100.416 28.639C100.416 22.7891 98.0935 17.1786 93.9587 13.0404Z" fill="#E0E0E0"/>
                            <path d="M40.3584 35.4766L13.04 62.7616C9.09617 66.9374 6.93583 72.4864 7.01788 78.2296C7.09993 83.9729 9.41792 89.4578 13.4794 93.5193C17.5409 97.5808 23.0259 99.8988 28.7691 99.9809C34.5124 100.063 40.0613 97.9026 44.2372 93.9587L71.5556 66.6737L40.3584 35.4766Z" fill="#F44336"/>
                            <path d="M20.0619 85.8004C19.1751 85.8004 18.3246 85.4482 17.6975 84.8211C17.0704 84.194 16.7181 83.3435 16.7181 82.4567C16.6071 79.4422 17.1134 76.4368 18.2059 73.625C19.2984 70.8133 20.9541 68.2545 23.0713 66.1058L30.7284 58.4486C31.049 58.128 31.4295 57.8737 31.8484 57.7003C32.2672 57.5268 32.7161 57.4375 33.1694 57.4375C33.6227 57.4375 34.0716 57.5268 34.4904 57.7003C34.9092 57.8737 35.2898 58.128 35.6103 58.4486C35.9309 58.7691 36.1851 59.1497 36.3586 59.5685C36.5321 59.9873 36.6214 60.4362 36.6214 60.8895C36.6214 61.3428 36.5321 61.7917 36.3586 62.2105C36.1851 62.6294 35.9309 63.0099 35.6103 63.3304L27.9531 70.9876C26.4559 72.4414 25.2782 74.1914 24.4952 76.1258C23.7122 78.0603 23.3411 80.1367 23.4056 82.2226C23.4378 82.681 23.3751 83.1411 23.2216 83.5742C23.068 84.0073 22.8268 84.4041 22.513 84.7398C22.1993 85.0756 21.8197 85.343 21.3979 85.5255C20.9762 85.708 20.5214 85.8016 20.0619 85.8004Z" fill="#FAFAFA"/>
                        </svg>
                        <p className='font-Ubuntu-Medium text-[#121212] text-lg mt-3 ' >Paracetamol 250mg</p>
                        <p className='font-Ubuntu-Medium text-[#7123E2] text-sm mt-1 ' >10 tablets</p>
                        <button className='w-full rounded-full font-Ubuntu-Medium text-sm py-2 text-white bg-[#7123E2] mt-4' >Update</button>
                    </div> 
                </div>
            </div> 

            {showModal ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed pb-4 px-4 inset-0 z-50 outline-none focus:outline-none"> 
                            <AddDrugs close={setShowModal} />
                        </div> 
                        <div className="opacity-50 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 
        </div>
    )
} 