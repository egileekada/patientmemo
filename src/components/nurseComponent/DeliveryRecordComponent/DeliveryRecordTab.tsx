import { Input } from '@chakra-ui/react';
import React from 'react'
import LoaderIcon from '../../LoaderIcon'

export default function DeliveryRecord(props: any) {
    const [loading, setLoading] = React.useState(false);
    return (
        <div className='w-full px-32 py-14' >
            <p className='font-Ubuntu-Bold text-xl' >Bio</p>
            <div className='w-full py-8 border-b border-[#E7EDF2]' >
                <div className='w-full grid grid-cols-6 gap-4' >
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >Surname</p>
                        <p className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' >Ayobami</p>
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >First Name</p>
                        <p className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' >Josephine</p>
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >Time/Time</p>
                        <p className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' >12:00 am, 12, Jun 2022</p>
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >Age</p>
                        <p className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' >23 yrs</p>
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >Height</p>
                        <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                        {/* <p className='font-Ubuntu-Medium text-[#29313F] text-sm mt-1' >---</p> */}
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >Parity</p>
                        <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >No. of living children</p>
                        <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                    </div>
                </div>
            </div>
            <p className='font-Ubuntu-Bold text-xl mt-8' >Others</p>
            <div className='w-full py-8 border-b border-[#E7EDF2]' >
                <div className='w-full grid grid-cols-4 gap-4' >
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >Place of admission</p>
                        <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >Labour ward</p>
                        <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >clinic</p>
                        <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >emergecy ward</p>
                        <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >past obstetric history</p>
                        <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                    </div>
                </div>
                <div className='w-full grid grid-cols-2 gap-4 mt-4' > 
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >LMP</p>
                        <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >EDD</p>
                        <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >antenatal complications</p>
                        <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                    </div>
                </div>
                <div className='w-full grid grid-cols-4 gap-4 mt-4' > 
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >labout onset (Hour)</p>
                        <div className='flex items-center' > 
                            <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='--' />
                            <p className='font-Ubuntu-Regular text-xs text-[#29313F] ml-2' >(Hour)</p>
                        </div>
                        {/* <p className='font-Ubuntu-Medium text-[#29313F] text-sm mt-1' >-- <span className='font-Ubuntu-Regular text-xs' >(Hour)</span></p> */}
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >Spontaneous</p>
                        <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >INDUCED</p>
                        <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                    </div> 
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >memebrane ruprtured at </p>
                        <div className='flex items-center' > 
                            <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='--' />
                            <p className='font-Ubuntu-Regular text-xs text-[#29313F] ml-2' >(Hour)</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className='font-Ubuntu-Bold text-xl mt-8' >General condition</p>
            <div className='w-full py-8 border-b border-[#E7EDF2]' >
                <div className='w-full grid grid-cols-5 gap-4' >
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >select  condition</p>
                        <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                    </div> 
                </div>
            </div>
            <p className='font-Ubuntu-Bold text-xl mt-8' >Abdomen</p>
            <div className='w-full py-8 border-b border-[#E7EDF2]' >
                <div className='w-full grid grid-cols-4 gap-4' >
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >fundal height</p>
                        <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >lie</p>
                        <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >position</p>
                        <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >multiple singleton</p>
                        <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >presentation</p>
                        <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >descent</p>
                        <div className='flex items-center' > 
                            <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='--' />
                            <p className='font-Ubuntu-Regular text-xs text-[#29313F] ml-2' >(Fifths)</p>
                        </div>
                        {/* <p className='font-Ubuntu-Medium text-[#29313F] text-sm mt-1' >-- <span className='font-Ubuntu-Regular text-xs' >(Fifths)</span></p> */}
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >fetal heart rate</p>
                        <div className='flex items-center' > 
                            <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='--' />
                            <p className='font-Ubuntu-Regular text-xs text-[#29313F] ml-2' >(Minute)</p>
                        </div>
                        {/* <p className='font-Ubuntu-Medium text-[#29313F] text-sm mt-1' >-- <span className='font-Ubuntu-Regular text-xs' >(Minute)</span></p> */}
                    </div>
                </div>
            </div>
            <p className='font-Ubuntu-Bold text-xl mt-8' >PV</p>
            <div className='w-full py-8 border-b border-[#E7EDF2]' >
                <div className='w-full grid grid-cols-5 gap-4' >
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >vulva</p>
                        <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >vigina</p>
                        <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                    </div> 
                </div>
                <div className='w-full grid grid-cols-5 gap-4 mt-4' >
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >cervix</p>
                        <div className='flex items-center' > 
                            <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='--' />
                            <p className='font-Ubuntu-Regular text-xs text-[#29313F] ml-2' >(%effacted)</p>
                        </div>
                        {/* <p className='font-Ubuntu-Medium text-[#29313F] text-sm mt-1' >-- <span className='font-Ubuntu-Regular text-xs' >(%effacted)</span></p> */}
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >Well/loosely applied to PP</p>
                        <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >Os</p>
                        <div className='flex items-center' > 
                            <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='--' />
                            <p className='font-Ubuntu-Regular text-xs text-[#29313F] ml-2' >(cm dilated)</p>
                        </div>
                        {/* <p className='font-Ubuntu-Medium text-[#29313F] text-sm mt-1' >-- <span className='font-Ubuntu-Regular text-xs' >(cm dilated)</span></p> */}
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >Membranes Ruptured</p>
                        <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >Intact</p>
                        <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >P.P at station</p>
                        <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >in </p>
                        <div className='flex items-center' > 
                            <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='--' />
                            <p className='font-Ubuntu-Regular text-xs text-[#29313F] ml-2' >(Position)</p>
                        </div>
                        {/* <p className='font-Ubuntu-Medium text-[#29313F] text-sm mt-1' >-- <span className='font-Ubuntu-Regular text-xs' >(Position)</span></p> */}
                    </div>
                </div>
                <div className='w-full grid grid-cols-5 gap-4 mt-4' >
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >CAPUT</p>
                        <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >Moulding</p>
                        <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >PELVIS</p>
                        <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >FORECAST</p>
                        <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-[#5F6777] text-xs' >Signature</p>
                        <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                    </div> 
                </div>
            </div>

            <div className='w-full flex mt-4 font-Ubuntu-Medium' >
                <button className='  py-3 w-36 ml-auto text-[#7123E2] text-sm mt-4 rounded-full' >Cancel</button> 
                {loading ?  
                    <button className='bg-[#7123E2] h-12 flex justify-center items-center w-48  text-white text-sm mt-6 rounded-full' >
                        <div className='flex items-center ' >
                            <LoaderIcon size='w-10 h-10 mr-1 s' /> 
                            Loading
                        </div> 
                    </button>
                    :
                    <button className='bg-[#7123E2] py-3 w-48  text-white text-sm mt-6 rounded-full' >Add Information</button>
                }
            </div>
        </div>
    )
}
