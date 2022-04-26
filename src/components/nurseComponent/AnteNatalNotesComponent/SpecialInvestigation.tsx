import { Textarea } from '@chakra-ui/react'
import React from 'react'
import LoaderIcon from '../../LoaderIcon'

export default function SpecialInvestigation(props: any) {
    return (
        <div className='p-12 w-full flex flex-col ' >  
            <p className='font-Ubuntu-Bold text-lg text-center ' > Report of Special Investigations </p>
            <p className='text-xs mt-1 font-Ubuntu-Regular text-[#5F6777] mb-10' ></p>
            {/* <FilesEditor /> */}
            <Textarea 
                height='50vh'
                name="note"
                // onChange={formik.handleChange}
                // onFocus={() =>
                //     formik.setFieldTouched("note", true, true)
                // }  
                placeholder='How about the patient?...'
                />
            {/* <div className="w-full h-auto pt-2">
                {formik.touched.note && formik.errors.note && (
                    <motion.p
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                    >
                        {formik.errors.note}
                    </motion.p>
                )}
            </div> */}
            <div className='w-full flex mt-12 justify-end' >
                 
            <button  className='w-44 rounded-full py-2 mr-6 text-sm bg-[#7123E214] text-[#7123E2] font-Ubuntu-Medium' >Cancel</button>
                {/* {loading ?
                    <button className='w-44 flex justify-center items-center rounded-full h-10 text-sm bg-[#7123E2] text-white font-Ubuntu-Medium' >
                        <div className='flex mx-auto items-center ' >
                            <LoaderIcon size='w-6 h-6 mr-1 animate-spin ' /> 
                            Loading
                        </div> 
                    </button>: */}
                    <button onClick={()=> props.next(4)} className='w-44 rounded-full h-10 text-sm bg-[#7123E2] text-white font-Ubuntu-Medium' >Add to Patient File</button>
                {/* } */}
            </div> 
        </div>
    )
} 