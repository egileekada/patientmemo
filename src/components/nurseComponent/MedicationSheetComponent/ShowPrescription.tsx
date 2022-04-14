import { Item } from 'framer-motion/types/components/Reorder/Item'
import React from 'react' 
import DateFormat from '../../DateFormat'
import GetUserInfo from '../../GetUserInfo'

export default function ShowPrescription(props: any) {

    console.log(props.data)

    return (
        <div className='w-full h-full px-28  ' >
            <div className='w-full pt-8 flex items-center' >  
                <div className='ml-3' > 
                    <p className='font-Ubuntu-Medium text-lg' >Medical Sheets for {props.data.patient.firstName+' '+props.data.patient.lastName}</p>
                    <p className='font-Ubuntu-Regular mt-2 text-sm' >{DateFormat(props.data.createdAt)}</p>
                </div>
                {/* <button className='py-2 text-[#7123E2] border-[#7123E2] rounded-md px-4 border text-xs ml-auto font-Ubuntu-Medium  ' >Update Patient</button> */}
            </div> 
            <div className='mt-3 px-3 ml-10 flex items-center' > 
                <div className='w-6 h-6 mr-3 rounded-full flex bg-[#7123E214] justify-center items-center' >
                    <svg width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.99967 8.85179C9.53054 8.85179 11.6663 9.26304 11.6663 10.8497C11.6663 12.437 9.51653 12.8337 6.99967 12.8337C4.46939 12.8337 2.33301 12.4224 2.33301 10.8357C2.33301 9.24846 4.48281 8.85179 6.99967 8.85179ZM6.99967 1.16699C8.71415 1.16699 10.0878 2.54017 10.0878 4.25344C10.0878 5.96671 8.71415 7.34047 6.99967 7.34047C5.28578 7.34047 3.91152 5.96671 3.91152 4.25344C3.91152 2.54017 5.28578 1.16699 6.99967 1.16699Z" fill="#7123E2"/>
                    </svg>
                </div>
                <GetUserInfo data={props.data.madeBy._id} />
                {/* <div className='ml-3' > 
                    <p className='font-Ubuntu-Medium text-sm' >Dr. Emmanuel Joesph</p> */}
                    {/* <p className='font-Ubuntu-Regular text-[#5F6777] mt-1 text-xs' >12:00pm, 12, Jun 22</p> */}
                {/* </div> */}
            </div>
            <p className='text-[#5F6777] ml-20  font-Ubuntu-Bold mt-6' >{props.data.description}</p>
            {/* <p className='text-[#5F6777] ml-10 text-sm font-Ubuntu-Regular my-6'>Magna egestas. Porttitor ullamcorper tempor dictumst vel nunc. Auctor tellus nisl, metus phasellus porta morbi et. Erat quis arcu turpis eget et. Turpis et pharetra at viverra et nunc. Tortor, scelerisque diam tempus hac at in tortor massa. Libero tellus lorem tristique sed placerat eu mi. Et integer neque orci et quam lacus vitae faucibus sit.</p>
            <p className='text-[#5F6777] ml-10 text-sm font-Ubuntu-Regular my-6'>Feugiat dui elementum in viverra integer. Amet sollicitudin pellentesque amet tincidunt. Tellus vitae eleifend blandit lorem risus praesent pretium odio. Est amet, mi sodales ultricies. Lorem aliquet vestibulum sed ipsum. Quam morbi sollicitudin amet nibh bibendum.</p>
            <p className='text-[#5F6777] ml-10 text-sm font-Ubuntu-Regular my-6'>Cras leo purus id condimentum libero id. Imperdiet a mauris bibendum at faucibus purus neque in. Enim rhoncus lectus pellentesque arcu sed faucibus. Tincidunt donec erat nulla enim. Egestas vel pretium velit lacus, pharetra. Dignissim nullam diam tincidunt odio at tincidunt. Massa enim duis interdum id urna, eget elementum. Morbi mauris aliquam rhoncus egestas. Eget cursus sagittis purus arcu diam, imperdiet facilisi leo phasellus. Bibendum in ipsum risus tellus orci, fringilla sit consequat. Libero nisl vel blandit convallis justo et odio ullamcorper. Varius non cras at mattis tincidunt.</p>
            <p className='text-[#5F6777] ml-10 text-sm font-Ubuntu-Regular my-6'>Iaculis nunc viverra id id ridiculus aliquam feugiat tincidunt iaculis. Morbi sapien laoreet facilisis sed enim ullamcorper. Eros, sed scelerisque sed tellus nunc cursus turpis tincidunt. Rhoncus, a sed vitae tristique ac morbi. Auctor est elit, aliquet ac mauris, dictum imperdiet. Natoque amet, neque netus viverra in faucibus mi ultricies. Gravida faucibus arcu mattis commodo. Consequat nunc, donec tellus scelerisque. Tellus, nulla enim enim lectus. At id sed odio sed consectetur aliquet risus risus nibh. Lectus fringilla eget est egestas est. Sapien elementum commodo, blandit maecenas.</p>
            <p className='text-[#5F6777] ml-10 text-sm font-Ubuntu-Regular my-6'>Turpis ut in consequat id blandit arcu, porta vel est. Lacinia amet adipiscing volutpat condimentum nulla amet suspendisse massa etiam. Lobortis aliquam id mauris tempor nisi quis justo. In elementum diam venenatis aliquam vehicula. Morbi sed turpis ornare mauris at. Dictum viverra tempus aenean nullam. Mollis tellus in sed urna ultricies blandit semper diam habitasse. Pretium urna donec urna, cursus a rhoncus. Ornare posuere vivamus cursus dictumst. Aliquam ornare dolor ultricies mauris consequat, at. Tortor purus tristique ut euismod purus turpis eu. Tempus imperdiet leo sed eu. Sed sit consectetur ultrices id mauris mi.</p>
            <p className='text-[#5F6777] ml-10 text-sm font-Ubuntu-Regular my-6'>Aliquet nisi tempus eget pharetra dui purus penatibus sollicitudin. Pretium vulputate egestas fringilla lacinia tortor, nec volutpat, id. Nunc blandit maecenas tempus mauris posuere diam neque, diam accumsan. Tellus, vitae faucibus id tincidunt morbi. Sit libero platea ornare quam viverra senectus at eget. Ultricies ut nisl imperdiet fermentum aenean semper nibh. Morbi id purus commodo gravida habitasse sit. Adipiscing ac morbi morbi diam faucibus id condimentum. Diam at sed lobortis in </p>
            <p className='text-[#5F6777] ml-10 text-sm font-Ubuntu-Regular my-6'>nulla. Fringilla magna dictum neque, amet, quam risus ac ultricies. Tempus lacus massa in eu, sit consequat nascetur. A, id pulvinar feugiat eget eu tortor, ullamcorper morbi. Ac magna ultricies egestas in massa tincidunt nisl amet diam. Tempor ultrices quis rutrum porttitor ullamcorper. Erat tortor, facilisis aliquam cras aliquam etiam mauris.</p> */}
           
                <div className='w-full flex mt-10' >
                    <button onClick={()=> props.next(1)} className='font-Ubuntu-Medium text-xs bg-[#7123E2] text-white rounded-lg py-3 px-4 ml-auto ' >Add Prescription</button>
                </div> 
        </div>
    ) 
} 