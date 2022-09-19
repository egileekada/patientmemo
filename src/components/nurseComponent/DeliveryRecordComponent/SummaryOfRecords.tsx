import { Checkbox, Input, Stack } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import LoaderIcon from '../../LoaderIcon'
import Modal from '../../Modal';

export default function SummaryOfRecords(props: any) {
    
    const navigate = useNavigate()
    const [loading, setLoading] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const [modal, setModal] = React.useState(0);
    const [patientData, setPatientData] = React.useState({
        "patient": localStorage.getItem('patientId')+"",
        "aminiotomy": false,
        "oxytocin": false,
        "protagladins": false,
        "others": false,
        "indication": "",
        "inductionDeliveryInterval": "",
        "methodOfDelivery.spontaneous": false,
        "methodOfDelivery.forceps": false,
        "methodOfDelivery.vacuum": false,
        "methodOfDelivery.caesarianSection": false,
        "methodOfDelivery.embryyotomy": false,
        "pulseLab.date": "",
        "pulseLab.time": "",
        "ruptOfMemb.date": "",
        "ruptOfMemb.time": "",
        "cxFully.date": "",
        "cxFully.time": "",
        "babyDelivered.date": "",
        "babyDelivered.time": "",
        "placentaDel.date": "",
        "placentaDel.time": "",
        "breechPresentation.assisted": false,
        "breechPresentation.external": false,
        "breechPresentation.internalPodalicVersion": false,
        "breechPresentation.spontaneous": false,
        "placentaMembrane.spontaneous": false,
        "placentaMembrane.fundalPressure": false,
        "placentaMembrane.complete": false,
        "placentaMembrane.CCT": false,
        "placentaMembrane.menuelRemoval": false,
        "placentaMembrane.incomplete": false,
        "durationOfLabour.firstStage": "",
        "durationOfLabour.secondStage": "",
        "durationOfLabour.thirdStage": "",
        "perineum.intact": false,
        "perineum.firstDegreeLaceration": false,
        "perineum.secondDegreeLaceration": false,
        "perineum.thirdDegreeLaceration": false,
        "perineum.episiotomy": false,
        "repairedBy": "",
        "designation": "",
        "bloodLoss": false,
        "treatment": "treatment",
        "infants.alive": false,
        "infants.freshSB": false,
        "infants.maceratedSB": false,
        "infants.sex": false,
        "sex": "",
        "malformation": false,
        "weight": "",
        "oneMinute": "",
        "pulse": "",
        "fiveMinute": "",
        "uterus": "",
        "bladder": "",
        "BP": "",
        "temp": "",
        "rep": "",
        "whoTookDelivery": "",
        "supervisor": ""
    }); 
    
    const submit = async () => {  
 
        setLoading(true);
        const request = await fetch(`https://hospital-memo-api.herokuapp.com/nurse/delivery-record/create-summary-of-labour`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(patientData),
        });

        const json = await request.json();

        console.log('patient '+request.status)
        console.log('patient '+json)
        if (request.status === 201) {     
            setMessage('Records Added Successful')
            setModal(1)          
            setLoading(false);
            const t1 = setTimeout(() => {  
                setModal(0)      
                navigate('/dashboard')
                clearTimeout(t1);
            }, 3000); 
        }else {
            setMessage('Failed To Add Records ')
            setModal(2)             
            const t1 = setTimeout(() => {  
                setModal(0)       
                clearTimeout(t1);
            }, 3000);    
            // alert(json.message);
            console.log(json) 
            setLoading(false);
        }  
    }   


    return (
        <div className='w-full px-32 py-14' >
            <Modal message={message} modal={modal} />
            <p className='font-Ubuntu-Bold text-xl' >Summary</p>
            <div className='w-full py-14 border-b font-Ubuntu-Medium text-xs border-[#E7EDF2]' >
                <div className='w-full flex' >
                    <div>
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] mb-6 '>INDUCTION OF LABOUR</p>
                        <Stack spacing={[1, 5]} direction={['row', 'column']}>
                            <Checkbox size='sm' defaultChecked={patientData.aminiotomy} onChange={()=> setPatientData({...patientData, aminiotomy: !patientData.aminiotomy})} colorScheme='gray'  >
                                AMINIOTOMY
                            </Checkbox>
                            <Checkbox size='sm' defaultChecked={patientData.oxytocin} onChange={()=> setPatientData({...patientData, oxytocin: !patientData.oxytocin})} colorScheme='gray'  >
                                OXYTOCIN
                            </Checkbox>
                            <Checkbox size='sm' defaultChecked={patientData.protagladins} onChange={()=> setPatientData({...patientData, protagladins: !patientData.protagladins})} colorScheme='gray'  >
                                PROSTAGLADINS
                            </Checkbox>
                            <Checkbox size='sm' defaultChecked={patientData.others} onChange={()=> setPatientData({...patientData, others: !patientData.others})} colorScheme='gray'  >
                                OTHERS
                            </Checkbox>
                        </Stack>
                    </div>
                    <div className='ml-24' > 
                        <p className='font-Ubuntu-Medium text-[#5F6777] mb-2 text-xs' >INDICATION</p>
                        <Input onChange={(e)=> setPatientData({...patientData, indication: e.target.value})} className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='---' />
                    </div>
                </div>
                <div className='mt-10 w-56' > 
                    <p className='font-Ubuntu-Medium text-[#5F6777] mb-2 text-xs' >INDUCTION-DELIVERY INTERVAL</p>
                    <div className='flex items-center' > 
                        <Input type="time" onChange={(e)=> setPatientData({...patientData, inductionDeliveryInterval: e.target.value})} className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='--' />
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
                            <Checkbox size='sm' defaultChecked={patientData['methodOfDelivery.spontaneous']} onChange={()=> setPatientData({...patientData, 'methodOfDelivery.spontaneous': !patientData['methodOfDelivery.spontaneous']})} colorScheme='gray'  >
                                Spontaneus
                            </Checkbox>
                            <Checkbox size='sm' defaultChecked={patientData['methodOfDelivery.forceps']} onChange={()=> setPatientData({...patientData, 'methodOfDelivery.forceps': !patientData['methodOfDelivery.forceps']})} colorScheme='gray'  >
                                Forceps
                            </Checkbox>
                            <Checkbox size='sm' defaultChecked={patientData['methodOfDelivery.vacuum']} onChange={()=> setPatientData({...patientData, 'methodOfDelivery.vacuum': !patientData['methodOfDelivery.vacuum']})} colorScheme='gray'  >
                                Vacuum
                            </Checkbox>
                        </Stack>
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] mb-6 '>Summary of labour</p>
                        <div className='flex items-center' >
                            <p className='font-Ubuntu-Medium text-xs mr-4 w-24 text-[#5F6777]'>Pulse Lab</p>
                            <div className=' w-48  ' >
                                <Input onChange={(e)=> setPatientData({...patientData, 'pulseLab.date': e.target.value})} type='date' width="200px" className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='--'  />
                                <Input onChange={(e)=> setPatientData({...patientData, 'pulseLab.time': e.target.value})} type='time' width='200px' className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='--'  />
                            </div>
                        </div>
                        <div className='flex items-center' >
                            <p className='font-Ubuntu-Medium text-xs mr-4 w-24 text-[#5F6777]'>Rupt of Memb.</p>
                            <div className=' w-48' >
                                <Input onChange={(e)=> setPatientData({...patientData, 'ruptOfMemb.date': e.target.value})} type='date' width='200px' className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='--'  />
                                <Input onChange={(e)=> setPatientData({...patientData, 'ruptOfMemb.time': e.target.value})} type='time' width='200px' className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='--'  />
                            </div>
                        </div>
                        <div className='flex items-center' >
                            <p className='font-Ubuntu-Medium text-xs mr-4 w-24 text-[#5F6777]'>CX. Fully</p>
                            <div className=' w-48' >
                                <Input onChange={(e)=> setPatientData({...patientData, 'cxFully.date': e.target.value})} type='date' width='200px' className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='--'  />
                                <Input onChange={(e)=> setPatientData({...patientData, 'cxFully.time': e.target.value})} type='time' width='200px' className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='--'  />
                            </div>
                        </div>
                        <div className='flex items-center' >
                            <p className='font-Ubuntu-Medium text-xs mr-4 w-24 text-[#5F6777]'>Baby Delivered</p>
                            <div className=' w-48' >
                                <Input onChange={(e)=> setPatientData({...patientData, 'babyDelivered.date': e.target.value})} type='date' width='200px' className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='--'  />
                                <Input onChange={(e)=> setPatientData({...patientData, 'babyDelivered.time': e.target.value})} type='time' width='200px' className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='--'  />
                            </div>
                        </div>
                        <div className='flex items-center' >
                            <p className='font-Ubuntu-Medium text-xs mr-4 w-24 text-[#5F6777]'>Placenta Del.</p>
                            <div className=' w-48' >
                                <Input onChange={(e)=> setPatientData({...patientData, 'placentaDel.date': e.target.value})} type='date' width='200px' className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='--'  />
                                <Input onChange={(e)=> setPatientData({...patientData, 'placentaDel.time': e.target.value})} type='time' width='200px' className='font-Ubuntu-Medium text-[#29313F] text-sm mt-2' fontSize='sm' placeholder='--'  />
                            </div>
                        </div>
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] mb-6 '>Breech Presentation</p>
                        <Stack spacing={[1, 5]} direction={['row', 'column']}>
                            <Checkbox size='sm' defaultChecked={patientData['breechPresentation.assisted']} onChange={()=> setPatientData({...patientData, 'breechPresentation.assisted': !patientData['breechPresentation.assisted']})} colorScheme='gray'  >
                                Assisted
                            </Checkbox>
                            <Checkbox size='sm' defaultChecked={patientData['breechPresentation.external']} onChange={()=> setPatientData({...patientData, 'breechPresentation.external': !patientData['breechPresentation.external']})} colorScheme='gray'  >
                                External
                            </Checkbox>
                            <Checkbox size='sm' defaultChecked={patientData['breechPresentation.internalPodalicVersion']} onChange={()=> setPatientData({...patientData, 'breechPresentation.internalPodalicVersion': !patientData['breechPresentation.internalPodalicVersion']})} colorScheme='gray'  >
                                Internal Podalic Version
                            </Checkbox>
                            <Checkbox size='sm' defaultChecked={patientData['breechPresentation.spontaneous']} onChange={()=> setPatientData({...patientData, 'breechPresentation.spontaneous': !patientData['breechPresentation.spontaneous']})} colorScheme='gray'  >
                                Spontaneous
                            </Checkbox>
                        </Stack>
                    </div>
                </div>
                <Stack spacing={[1, 5]} direction={['row', 'column']}>
                    <Checkbox size='sm' defaultChecked={patientData['methodOfDelivery.caesarianSection']} onChange={()=> setPatientData({...patientData, 'methodOfDelivery.caesarianSection': !patientData['methodOfDelivery.caesarianSection']})} colorScheme='gray'  >
                        CAESARIAN SECTION (EMERGENCY/ELECTIVE)
                    </Checkbox>
                    <Checkbox size='sm' defaultChecked={patientData['methodOfDelivery.embryyotomy']} onChange={()=> setPatientData({...patientData, 'methodOfDelivery.embryyotomy': !patientData['methodOfDelivery.embryyotomy']})} colorScheme='gray'  >
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
                                <Checkbox size='sm' defaultChecked={patientData['placentaMembrane.spontaneous']} onChange={()=> setPatientData({...patientData, 'placentaMembrane.spontaneous': !patientData['placentaMembrane.spontaneous']})} colorScheme='gray'  >
                                    Spontaneous
                                </Checkbox>
                                <Checkbox size='sm' defaultChecked={patientData['placentaMembrane.fundalPressure']} onChange={()=> setPatientData({...patientData, 'placentaMembrane.fundalPressure': !patientData['placentaMembrane.fundalPressure']})} colorScheme='gray'  >
                                    Fundal Pressure
                                </Checkbox>
                                <Checkbox size='sm' defaultChecked={patientData['placentaMembrane.complete']} onChange={()=> setPatientData({...patientData, 'placentaMembrane.complete': !patientData['placentaMembrane.complete']})} colorScheme='gray'  >
                                    Complete
                                </Checkbox> 
                            </Stack>
                        </div>
                        <div className='ml-16 mt-14' >
                            <Stack spacing={[1, 5]} direction={['row', 'column']}>
                                <Checkbox size='sm' defaultChecked={patientData['placentaMembrane.CCT']} onChange={()=> setPatientData({...patientData, 'placentaMembrane.CCT': !patientData['placentaMembrane.CCT']})} colorScheme='gray'  >
                                    C.C.T
                                </Checkbox>
                                <Checkbox size='sm' defaultChecked={patientData['placentaMembrane.menuelRemoval']} onChange={()=> setPatientData({...patientData, 'placentaMembrane.menuelRemoval': !patientData['placentaMembrane.menuelRemoval']})} colorScheme='gray'  >
                                    Menuel Removal
                                </Checkbox>
                                <Checkbox size='sm' defaultChecked={patientData['placentaMembrane.incomplete']} onChange={()=> setPatientData({...patientData, 'placentaMembrane.incomplete': !patientData['placentaMembrane.incomplete']})} colorScheme='gray'  >
                                    Incomplete
                                </Checkbox> 
                            </Stack>
                        </div>
                    </div>
                    <div className='w-full' > 
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] mb-6 '>Duration of labour</p>
                        <div className='flex items-center mt-2' >
                            <p className='font-Ubuntu-Medium text-xs mr-4 w-24 text-[#5F6777]'>1st Stage</p>
                            <Input type="time" onChange={(e)=> setPatientData({...patientData, 'durationOfLabour.firstStage': e.target.value})} width='200px' className='font-Ubuntu-Medium text-[#29313F] text-sm' fontSize='sm' placeholder='--' />
                            <p className='font-Ubuntu-Regular text-xs text-[#29313F] mx-2' >(Hour)</p>
                            {/* <Input onChange={(e)=> setPatientData({...patientData, indication: e.target.value})} width='200px' className='font-Ubuntu-Medium text-[#29313F] text-sm' fontSize='sm' placeholder='--' />
                            <p className='font-Ubuntu-Regular text-xs text-[#29313F] ml-2' >(Hour)</p> */}
                        </div> 
                        <div className='flex items-center mt-2' >
                            <p className='font-Ubuntu-Medium text-xs mr-4 w-24 text-[#5F6777]'>2nd Stage</p>
                            <Input type="time"  onChange={(e)=> setPatientData({...patientData, 'durationOfLabour.secondStage': e.target.value})} width='200px' className='font-Ubuntu-Medium text-[#29313F] text-sm' fontSize='sm' placeholder='--' />
                            <p className='font-Ubuntu-Regular text-xs text-[#29313F] mx-2' >(Hour)</p>
                            {/* <Input onChange={(e)=> setPatientData({...patientData, indication: e.target.value})} width='200px' className='font-Ubuntu-Medium text-[#29313F] text-sm' fontSize='sm' placeholder='--' />
                            <p className='font-Ubuntu-Regular text-xs text-[#29313F] ml-2' >(Hour)</p> */}
                        </div> 
                        <div className='flex items-center mt-2' >
                            <p className='font-Ubuntu-Medium text-xs mr-4 w-24 text-[#5F6777]'>3rd Stage</p>
                            <Input type="time" onChange={(e)=> setPatientData({...patientData, 'durationOfLabour.thirdStage': e.target.value})} width='200px' className='font-Ubuntu-Medium text-[#29313F] text-sm' fontSize='sm' placeholder='--' />
                            <p className='font-Ubuntu-Regular text-xs text-[#29313F] mx-2' >(Hour)</p>
                            {/* <Input onChange={(e)=> setPatientData({...patientData, indication: e.target.value})} width='200px' className='font-Ubuntu-Medium text-[#29313F] text-sm' fontSize='sm' placeholder='--' />
                            <p className='font-Ubuntu-Regular text-xs text-[#29313F] ml-2' >(Hour)</p> */}
                        </div>
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] mb-6 '>Perineum</p>
                        <Stack spacing={[1, 5]} direction={['row', 'column']}>
                            <Checkbox size='sm' defaultChecked={patientData['perineum.intact']} onChange={()=> setPatientData({...patientData, 'perineum.intact': !patientData['perineum.intact']})} colorScheme='gray'  >
                                Intact
                            </Checkbox>
                            <Checkbox size='sm' defaultChecked={patientData['perineum.firstDegreeLaceration']} onChange={()=> setPatientData({...patientData, 'perineum.firstDegreeLaceration': !patientData['perineum.firstDegreeLaceration']})} colorScheme='gray'  >
                                1st degree
                            </Checkbox>
                            <Checkbox size='sm' defaultChecked={patientData['perineum.secondDegreeLaceration']} onChange={()=> setPatientData({...patientData, 'perineum.secondDegreeLaceration': !patientData['perineum.secondDegreeLaceration']})} colorScheme='gray'  >
                                2nd degreee laceration
                            </Checkbox> 
                            <Checkbox size='sm' defaultChecked={patientData['perineum.thirdDegreeLaceration']} onChange={()=> setPatientData({...patientData, 'perineum.thirdDegreeLaceration': !patientData['perineum.thirdDegreeLaceration']})} colorScheme='gray'  >
                                3rd degree laceration
                            </Checkbox>
                            <Checkbox size='sm' defaultChecked={patientData['perineum.episiotomy']} onChange={()=> setPatientData({...patientData, 'perineum.episiotomy': !patientData['perineum.episiotomy']})} colorScheme='gray'  >
                                EPISIOTOMY
                            </Checkbox> 
                        </Stack>
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] mb-2 '>Repaired by</p>
                            <Input onChange={(e)=> setPatientData({...patientData, repairedBy: e.target.value})} width='200px' className='font-Ubuntu-Medium text-[#29313F] text-sm' fontSize='sm' placeholder='--' />
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] my-2 '>Designation</p>
                            <Input onChange={(e)=> setPatientData({...patientData, designation: e.target.value})} width='200px' className='font-Ubuntu-Medium text-[#29313F] text-sm' fontSize='sm' placeholder='--' />
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] my-2 '>No. of SKIN SUTURES</p>
                            <Input onChange={(e)=> setPatientData({...patientData, indication: e.target.value})} width='200px' className='font-Ubuntu-Medium text-[#29313F] text-sm' fontSize='sm' placeholder='--' />
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] mb-2 '>blood loss</p> 
                        <div className='flex items-center' > 
                            <Input onChange={(e)=> setPatientData({...patientData, bloodLoss: true})} width='200px' className='font-Ubuntu-Medium text-[#29313F] text-sm' fontSize='sm' placeholder='--' />
                            <p className='font-Ubuntu-Regular text-xs text-[#29313F] mx-2' >(ml)</p> 
                        </div>
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] mt-8 my-2 '>Treatment</p>
                            <Input onChange={(e)=> setPatientData({...patientData, treatment: e.target.value})} width='200px' className='font-Ubuntu-Medium text-[#29313F] text-sm' fontSize='sm' placeholder='--' />
                    </div>
                    <div className='w-full' />
                </div>
                <p className='font-Ubuntu-Medium text-xs text-[#5F6777] ml-auto mt-12 mb-6 mr-40 '>APGAR SCORE</p>
                <div className='w-full grid grid-cols-5 gap-x-6  ' > 
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] mb-6 '>INFANTS</p>
                        <Stack spacing={[1, 5]} direction={['row', 'column']}>
                            <Checkbox size='sm' defaultChecked={patientData['infants.alive']} onChange={()=> setPatientData({...patientData, 'infants.alive': !patientData['infants.alive']})} colorScheme='gray'  >
                                Alive
                            </Checkbox>
                            <Checkbox size='sm' defaultChecked={patientData['infants.freshSB']} onChange={()=> setPatientData({...patientData, aminiotomy: !patientData['infants.freshSB']})} colorScheme='gray'  >
                                Fresh SB
                            </Checkbox>
                            <Checkbox size='sm' defaultChecked={patientData['infants.maceratedSB']} onChange={()=> setPatientData({...patientData, aminiotomy: !patientData['infants.maceratedSB']})} colorScheme='gray'  >
                                Macerated S.B
                            </Checkbox> 
                            <Checkbox size='sm' defaultChecked={patientData['infants.sex']} onChange={()=> setPatientData({...patientData, 'infants.sex': !patientData['infants.sex']})} colorScheme='gray'  >
                                Immediate
                            </Checkbox> 
                        </Stack>
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] mb-2 '>Sex(es)</p>
                            <Input onChange={(e)=> setPatientData({...patientData, sex: e.target.value})} className='font-Ubuntu-Medium text-[#29313F] text-sm mb-4' fontSize='sm' placeholder='--' />
                        <Stack spacing={[1, 5]} direction={['row', 'column']}>
                            <Checkbox size='sm' defaultChecked={patientData.malformation} onChange={()=> setPatientData({...patientData, malformation: !patientData.malformation})} colorScheme='gray'  >
                                MALFORMATION
                            </Checkbox> 
                        </Stack>
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] mt-4 mb-2 '>Sex(es)</p>
                            <Input onChange={(e)=> setPatientData({...patientData, sex: e.target.value})} className='font-Ubuntu-Medium text-[#29313F] text-sm' fontSize='sm' placeholder='--' />
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] mb-2 '>Weight (s)</p>
                            <Input onChange={(e)=> setPatientData({...patientData, weight: e.target.value})} className='font-Ubuntu-Medium text-[#29313F] text-sm' fontSize='sm' placeholder='--' />
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] mb-2 '>1 Minute</p>
                            <Input onChange={(e)=> setPatientData({...patientData, oneMinute: e.target.value})} className='font-Ubuntu-Medium text-[#29313F] text-sm' fontSize='sm' placeholder='--' />
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] mb-2 '>5 Minute</p>
                            <Input onChange={(e)=> setPatientData({...patientData, fiveMinute: e.target.value})} className='font-Ubuntu-Medium text-[#29313F] text-sm' fontSize='sm' placeholder='--' />
                    </div>
                </div>
            </div> 
            <div className='w-full py-14 border-b flex flex-col font-Ubuntu-Medium text-xs border-[#E7EDF2]'>
                <p className='font-Ubuntu-Medium text-xs text-[#5F6777] mb-6 '>mother’s condition one hour post partum</p>
                <div className='w-full grid grid-cols-6 gap-y-8 gap-x-4' >
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] mb-2 '>Uterus</p>
                            <Input onChange={(e)=> setPatientData({...patientData, uterus: e.target.value})} className='font-Ubuntu-Medium text-[#29313F] text-sm' fontSize='sm' placeholder='--' />
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] mb-2 '>Bladder</p>
                            <Input onChange={(e)=> setPatientData({...patientData, bladder: e.target.value})} className='font-Ubuntu-Medium text-[#29313F] text-sm' fontSize='sm' placeholder='--' />
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] mb-2 '>B.P</p>
                            <Input onChange={(e)=> setPatientData({...patientData, BP: e.target.value})} className='font-Ubuntu-Medium text-[#29313F] text-sm' fontSize='sm' placeholder='--' />
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] mb-2 '>Pulse</p>
                            <Input onChange={(e)=> setPatientData({...patientData, pulse: e.target.value})} className='font-Ubuntu-Medium text-[#29313F] text-sm' fontSize='sm' placeholder='--' />
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] mb-2 '>Temp</p>
                            <Input onChange={(e)=> setPatientData({...patientData, temp: e.target.value})} className='font-Ubuntu-Medium text-[#29313F] text-sm' fontSize='sm' placeholder='--' />
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] mb-2 '>Rep</p>
                            <Input onChange={(e)=> setPatientData({...patientData, rep: e.target.value})} className='font-Ubuntu-Medium text-[#29313F] text-sm' fontSize='sm' placeholder='--' />
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] mb-2 '>who took delivery</p>
                            <Input onChange={(e)=> setPatientData({...patientData, whoTookDelivery: e.target.value})} className='font-Ubuntu-Medium text-[#29313F] text-sm' fontSize='sm' placeholder='--' />
                    </div>
                    <div className='w-full' >
                        <p className='font-Ubuntu-Medium text-xs text-[#5F6777] mb-2 '>SUPERVISOR</p>
                            <Input onChange={(e)=> setPatientData({...patientData, supervisor: e.target.value})} className='font-Ubuntu-Medium text-[#29313F] text-sm' fontSize='sm' placeholder='--' />
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
                    <button onClick={submit} className='bg-[#7123E2] py-3 w-48  text-white text-sm mt-6 rounded-full' >Add Information</button>
                }
            </div>
        </div>
    )
} 