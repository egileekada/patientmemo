import { Checkbox, Input, Stack } from '@chakra-ui/react'
import React from 'react'
import LoaderIcon from '../../LoaderIcon'

export default function SummaryOfRecords(props: any) {
    const [loading, setLoading] = React.useState(false);
    return (
        <div className='w-full px-32 py-14' >
            <p className='font-Ubuntu-Bold text-xl' >Summary</p>
            <div className='w-full py-14 border-b font-Ubuntu-Medium text-xs border-[#E7EDF2]' >
                <div className='w-full flex' >
                    <div>
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] mb-6 '>INDUCTION OF LABOUR</p>
                        <Stack spacing={[1, 5]} direction={['row', 'column']}>
                            <Checkbox size='sm' colorScheme='gray'  >
                                AMINIOTOMY
                            </Checkbox>
                            <Checkbox size='sm' colorScheme='gray'  >
                                OXYTOCIN
                            </Checkbox>
                            <Checkbox size='sm' colorScheme='gray'  >
                                PROSTAGLADINS
                            </Checkbox>
                            <Checkbox size='sm' colorScheme='gray'  >
                                OTHERS
                            </Checkbox>
                        </Stack>
                    </div>
                    <div className='ml-24' > 
                        <p className='font-Ubuntu-Medium text-[#5F6777] mb-2 text-xs' >INDICATION</p>
                        <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                    </div>
                </div>
                <div className='mt-10 w-56' > 
                    <p className='font-Ubuntu-Medium text-[#5F6777] mb-2 text-xs' >INDUCTION-DELIVERY INTERVAL</p>
                    <div className='flex items-center' > 
                        <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='--' />
                        <p className='font-Ubuntu-Regular text-xs text-[#29313F] ml-2' >(Hour)</p>
                    </div>
                </div>
            </div>
            <div className='w-full py-14 border-b font-Ubuntu-Medium text-xs border-[#E7EDF2]' >
                <p className='font-Ubuntu-Bold text-xl' >Method of Delivery</p>
                <div className='w-full grid grid-cols-3 gap-6 mb-10 mt-6' >
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] mb-3 '>Method of Delivery</p>
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] mb-3 '>Fetus/fetuses</p>
                        <p className='font-Ubuntu-Medium text-xs text-[#29313F] mb-6 '>Cephalic Presentation</p>
                        <Stack spacing={[1, 5]} direction={['row', 'column']}>
                            <Checkbox size='sm' colorScheme='gray'  >
                                Spontaneus
                            </Checkbox>
                            <Checkbox size='sm' colorScheme='gray'  >
                                Forceps
                            </Checkbox>
                            <Checkbox size='sm' colorScheme='gray'  >
                                Vacuum
                            </Checkbox>
                        </Stack>
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] mb-6 '>Summary of labour</p>
                        <div className='flex items-center' >
                            <p className='font-Ubuntu-Medium text-xs mr-4 w-24 text-[#5F6777]'>Pulse Lab</p>
                            <Input type='datetime-local' width='200px' className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='--'  />
                        </div>
                        <div className='flex items-center' >
                            <p className='font-Ubuntu-Medium text-xs mr-4 w-24 text-[#5F6777]'>Rupt of Memb.</p>
                            <Input type='datetime-local' width='200px' className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='--'  />
                        </div>
                        <div className='flex items-center' >
                            <p className='font-Ubuntu-Medium text-xs mr-4 w-24 text-[#5F6777]'>CX. Fully</p>
                            <Input type='datetime-local' width='200px' className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='--'  />
                        </div>
                        <div className='flex items-center' >
                            <p className='font-Ubuntu-Medium text-xs mr-4 w-24 text-[#5F6777]'>Baby Delivered</p>
                            <Input type='datetime-local' width='200px' className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='--'  />
                        </div>
                        <div className='flex items-center' >
                            <p className='font-Ubuntu-Medium text-xs mr-4 w-24 text-[#5F6777]'>Placenta Del.</p>
                            <Input type='datetime-local' width='200px' className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='--'  />
                        </div>
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] mb-6 '>Breech Presentation</p>
                        <Stack spacing={[1, 5]} direction={['row', 'column']}>
                            <Checkbox size='sm' colorScheme='gray'  >
                                Assisted
                            </Checkbox>
                            <Checkbox size='sm' colorScheme='gray'  >
                                External
                            </Checkbox>
                            <Checkbox size='sm' colorScheme='gray'  >
                                Internal Podalic Version
                            </Checkbox>
                            <Checkbox size='sm' colorScheme='gray'  >
                                Spontaneous
                            </Checkbox>
                        </Stack>
                    </div>
                </div>
                <Stack spacing={[1, 5]} direction={['row', 'column']}>
                    <Checkbox size='sm' colorScheme='gray'  >
                        CAESARIAN SECTION (EMERGENCY/ELECTIVE)
                    </Checkbox>
                    <Checkbox size='sm' colorScheme='gray'  >
                        EMBRYYOTOMY - (Specify) --
                    </Checkbox> 
                </Stack>
            </div>
            <div className='w-full py-14 border-b flex flex-col font-Ubuntu-Medium text-xs border-[#E7EDF2]' >
                <div className='w-full grid grid-cols-2 gap-x-6 gap-y-12 ' >
                    <div className='w-full flex' >
                        <div>
                            <p className='font-Ubuntu-Medium text-xs text-[#5F6777] mb-10 '>Placenta & Membranes</p>
                            <Stack spacing={[1, 5]} direction={['row', 'column']}>
                                <Checkbox size='sm' colorScheme='gray'  >
                                    Spontaneous
                                </Checkbox>
                                <Checkbox size='sm' colorScheme='gray'  >
                                    Fundal Pressure
                                </Checkbox>
                                <Checkbox size='sm' colorScheme='gray'  >
                                    Complete
                                </Checkbox> 
                            </Stack>
                        </div>
                        <div className='ml-16 mt-14' >
                            <Stack spacing={[1, 5]} direction={['row', 'column']}>
                                <Checkbox size='sm' colorScheme='gray'  >
                                    C.C.T
                                </Checkbox>
                                <Checkbox size='sm' colorScheme='gray'  >
                                    Menuel Removal
                                </Checkbox>
                                <Checkbox size='sm' colorScheme='gray'  >
                                    Incomplete
                                </Checkbox> 
                            </Stack>
                        </div>
                    </div>
                    <div className='w-full' > 
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] mb-6 '>Placenta & Membranes</p>
                        <div className='flex items-center mt-2' >
                            <p className='font-Ubuntu-Medium text-xs mr-4 w-24 text-[#5F6777]'>1st Stage</p>
                            <Input width='200px' className='font-Ubuntu-Medium text-[#29313F] text-sm' fontSize='sm' placeholder='--' />
                            <p className='font-Ubuntu-Regular text-xs text-[#29313F] mx-2' >(Hour)</p>
                            <Input width='200px' className='font-Ubuntu-Medium text-[#29313F] text-sm' fontSize='sm' placeholder='--' />
                            <p className='font-Ubuntu-Regular text-xs text-[#29313F] ml-2' >(Hour)</p>
                        </div> 
                        <div className='flex items-center mt-2' >
                            <p className='font-Ubuntu-Medium text-xs mr-4 w-24 text-[#5F6777]'>2nd Stage</p>
                            <Input width='200px' className='font-Ubuntu-Medium text-[#29313F] text-sm' fontSize='sm' placeholder='--' />
                            <p className='font-Ubuntu-Regular text-xs text-[#29313F] mx-2' >(Hour)</p>
                            <Input width='200px' className='font-Ubuntu-Medium text-[#29313F] text-sm' fontSize='sm' placeholder='--' />
                            <p className='font-Ubuntu-Regular text-xs text-[#29313F] ml-2' >(Hour)</p>
                        </div> 
                        <div className='flex items-center mt-2' >
                            <p className='font-Ubuntu-Medium text-xs mr-4 w-24 text-[#5F6777]'>3rd Stage</p>
                            <Input width='200px' className='font-Ubuntu-Medium text-[#29313F] text-sm' fontSize='sm' placeholder='--' />
                            <p className='font-Ubuntu-Regular text-xs text-[#29313F] mx-2' >(Hour)</p>
                            <Input width='200px' className='font-Ubuntu-Medium text-[#29313F] text-sm' fontSize='sm' placeholder='--' />
                            <p className='font-Ubuntu-Regular text-xs text-[#29313F] ml-2' >(Hour)</p>
                        </div>
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] mb-6 '>Perineum</p>
                        <Stack spacing={[1, 5]} direction={['row', 'column']}>
                            <Checkbox size='sm' colorScheme='gray'  >
                                Intact
                            </Checkbox>
                            <Checkbox size='sm' colorScheme='gray'  >
                                1st degree
                            </Checkbox>
                            <Checkbox size='sm' colorScheme='gray'  >
                                2nd degreee laceration
                            </Checkbox> 
                            <Checkbox size='sm' colorScheme='gray'  >
                                3rd degree laceration
                            </Checkbox>
                            <Checkbox size='sm' colorScheme='gray'  >
                                EPISIOTOMY
                            </Checkbox> 
                        </Stack>
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] mb-2 '>Repaired by</p>
                            <Input width='200px' className='font-Ubuntu-Medium text-[#29313F] text-sm' fontSize='sm' placeholder='--' />
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] my-2 '>Designation</p>
                            <Input width='200px' className='font-Ubuntu-Medium text-[#29313F] text-sm' fontSize='sm' placeholder='--' />
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] my-2 '>No. of SKIN SUTURES</p>
                            <Input width='200px' className='font-Ubuntu-Medium text-[#29313F] text-sm' fontSize='sm' placeholder='--' />
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] mb-2 '>blood loss</p> 
                        <div className='flex items-center' > 
                            <Input width='200px' className='font-Ubuntu-Medium text-[#29313F] text-sm' fontSize='sm' placeholder='--' />
                            <p className='font-Ubuntu-Regular text-xs text-[#29313F] mx-2' >(ml)</p> 
                        </div>
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] mt-8 my-2 '>Treatment</p>
                            <Input width='200px' className='font-Ubuntu-Medium text-[#29313F] text-sm' fontSize='sm' placeholder='--' />
                    </div>
                    <div className='w-full' />
                </div>
                <p className='font-Ubuntu-Medium text-xs text-[#5F6777] ml-auto mt-12 mb-6 mr-40 '>APGAR SCORE</p>
                <div className='w-full grid grid-cols-5 gap-x-6  ' > 
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] mb-6 '>INFANTS</p>
                        <Stack spacing={[1, 5]} direction={['row', 'column']}>
                            <Checkbox size='sm' colorScheme='gray'  >
                                Alive
                            </Checkbox>
                            <Checkbox size='sm' colorScheme='gray'  >
                                Fresh SB
                            </Checkbox>
                            <Checkbox size='sm' colorScheme='gray'  >
                                Macerated S.B
                            </Checkbox> 
                            <Checkbox size='sm' colorScheme='gray'  >
                                Immediate
                            </Checkbox> 
                        </Stack>
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] mb-2 '>Sex(es)</p>
                            <Input className='font-Ubuntu-Medium text-[#29313F] text-sm mb-4' fontSize='sm' placeholder='--' />
                        <Stack spacing={[1, 5]} direction={['row', 'column']}>
                            <Checkbox size='sm' colorScheme='gray'  >
                                MALFORMATION
                            </Checkbox> 
                        </Stack>
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] mt-4 mb-2 '>Sex(es)</p>
                            <Input className='font-Ubuntu-Medium text-[#29313F] text-sm' fontSize='sm' placeholder='--' />
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] mb-2 '>Weight (s)</p>
                            <Input className='font-Ubuntu-Medium text-[#29313F] text-sm' fontSize='sm' placeholder='--' />
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] mb-2 '>1 Minute</p>
                            <Input className='font-Ubuntu-Medium text-[#29313F] text-sm' fontSize='sm' placeholder='--' />
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] mb-2 '>5 Minute</p>
                            <Input className='font-Ubuntu-Medium text-[#29313F] text-sm' fontSize='sm' placeholder='--' />
                    </div>
                </div>
            </div> 
            <div className='w-full py-14 border-b flex flex-col font-Ubuntu-Medium text-xs border-[#E7EDF2]'>
                <p className='font-Ubuntu-Medium text-xs text-[#5F6777] mb-6 '>mother’s condition one hour post partum</p>
                <div className='w-full grid grid-cols-6 gap-y-8 gap-x-4' >
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] mb-2 '>Uterus</p>
                            <Input className='font-Ubuntu-Medium text-[#29313F] text-sm' fontSize='sm' placeholder='--' />
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] mb-2 '>Bladder</p>
                            <Input className='font-Ubuntu-Medium text-[#29313F] text-sm' fontSize='sm' placeholder='--' />
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] mb-2 '>B.P</p>
                            <Input className='font-Ubuntu-Medium text-[#29313F] text-sm' fontSize='sm' placeholder='--' />
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] mb-2 '>Pulse</p>
                            <Input className='font-Ubuntu-Medium text-[#29313F] text-sm' fontSize='sm' placeholder='--' />
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] mb-2 '>Temp</p>
                            <Input className='font-Ubuntu-Medium text-[#29313F] text-sm' fontSize='sm' placeholder='--' />
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] mb-2 '>Rep</p>
                            <Input className='font-Ubuntu-Medium text-[#29313F] text-sm' fontSize='sm' placeholder='--' />
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] mb-2 '>who took delivery</p>
                            <Input className='font-Ubuntu-Medium text-[#29313F] text-sm' fontSize='sm' placeholder='--' />
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] mb-2 '>SUPERVISOR</p>
                            <Input className='font-Ubuntu-Medium text-[#29313F] text-sm' fontSize='sm' placeholder='--' />
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