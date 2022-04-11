import { Textarea } from '@chakra-ui/textarea';
import React from 'react' 
import FilesEditor from '../../FilesEditor';

export default function DoctorEditor() {
    return (
        <div className='p-12 w-full' >
            <p className='font-Ubuntu-Bold text-lg ' >Continuation Sheet for <span className=' text-[#7123E2]' >Adeyoni Josephine</span></p>
            <p className='text-xs mt-1 font-Ubuntu-Regular text-[#5F6777]' >12:00PM, 24, Jun 2022</p>
            {/* <FilesEditor /> */}
            <Textarea />
        </div>
    )
} 