import { Input } from '@chakra-ui/react'
import React from 'react'

export default function AddDrugs(props:any) {
    return (
        <div style={{width: '800px'}} className='rounded-2xl flex flex-col py-6 bg-white items-center'> 
            <div style={{width: '400px'}} className='mt-10 font-Ubuntu-Regular '  >  
                <p className='font-Ubuntu-Bold text-lg text-[#333]  ' >Upload New Drug</p> 
                <p className='font-Ubuntu-Medium text-sm text-[#333333] mt-6 mb-2 ' >Name of Drug </p> 
                <Input size='lg' fontSize='sm' />
                <div className='w-full flex my-3' >
                    <div className='mr-2' > 
                        <p className='font-Ubuntu-Medium text-sm text-[#333333] mb-2 ' >Quantity <span className='font-Ubuntu-Regular' style={{color: '#C7CDD9'}} >(packs)</span></p> 
                        <Input size='lg' fontSize='sm' />
                    </div>
                    <div className='ml-2' > 
                        <p className='font-Ubuntu-Medium text-sm text-[#333333] mb-2 ' >Quantity <span className='font-Ubuntu-Regular' style={{color: '#C7CDD9'}} >(tablets/pack)</span></p> 
                        <Input size='lg' fontSize='sm' />
                    </div>
                </div>
                {/* <p className='font-Ubuntu-Regular text-sm text-[#333333] mb-2 ' >Date</p> */}
                <div className='w-full rounded-md border mt-6 py-5 flex items-center flex-col justify-center px-4 border-[#DFE6F4]' >
                    <svg className='my-5' width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.3066 34.4032C20.6958 34.4032 22.6383 32.4568 22.6383 30.0683C22.6383 27.6784 20.6958 25.7334 18.3066 25.7334C15.9191 25.7334 13.9766 27.6784 13.9766 30.0683C13.9765 32.4568 15.919 34.4032 18.3066 34.4032ZM18.3066 27.5954C19.67 27.5954 20.7788 28.7042 20.7788 30.0683C20.7788 31.4325 19.67 32.5412 18.3066 32.5412C16.944 32.5412 15.836 31.4324 15.836 30.0683C15.836 28.7042 16.944 27.5954 18.3066 27.5954ZM16.6905 47.2929C16.6905 47.7204 17.0375 48.0746 17.4642 48.0826H47.3002C47.731 48.0796 48.0819 47.7269 48.0819 47.2929C48.0819 47.0648 47.9869 46.8988 47.9081 46.8014L47.672 46.5079L47.6751 46.5015L36.234 32.1328C35.938 31.7261 35.2783 31.718 34.972 32.109L28.9484 39.6715L26.3741 36.4422C26.2162 36.2363 25.988 36.1215 25.7398 36.1215C25.4854 36.1215 25.2541 36.2396 25.1049 36.4455L16.9057 46.7522C16.7415 46.9738 16.6905 47.1302 16.6905 47.2929ZM25.7415 38.6296L28.9492 42.6534L35.5943 34.3122L45.0761 46.2223H19.7034L25.7415 38.6296Z" fill="#5F2FC9"/>
                        <path d="M51.7429 19.6769L51.3416 19.6705L45.4447 3.47024C45.0953 2.50654 44.1724 1.86035 43.148 1.86035C42.8631 1.86035 42.5817 1.91154 42.312 2.00866L3.47216 16.1462C2.85868 16.3695 2.36966 16.8178 2.09283 17.4097C1.81776 18.0016 1.78899 18.6654 2.01146 19.278L7.9211 35.617V51.6929C7.9211 53.0426 9.01715 54.1403 10.3654 54.1403H51.6982C53.0464 54.1403 54.1426 53.0426 54.1426 51.6929V22.1195C54.1423 20.7984 53.0662 19.704 51.7429 19.6769ZM7.92099 22.1195V30.0777L3.55901 18.0926L43.4966 3.55632L49.3656 19.6752H10.3653C9.01704 19.6752 7.92099 20.7729 7.92099 22.1195ZM52.283 52.277H9.78059V21.5356H52.283V52.277Z" fill="#515151"/>
                    </svg>
                    <p className='font-Ubuntu-Regular text-sm text-[#333333] ' >Upload Image of Drug (optional)</p>
                    {/* <p className='font-Ubuntu-Medium text-sm text-[#7123E2] ml-auto cursor-pointer ' >EDIT</p> */}
                </div>
                <div className='w-full flex mt-4' >
                    <button onClick={()=> props.close(false)} className='  py-3 w-36 ml-auto text-[#A5B0C1] text-sm mt-4 rounded-full' >Cancel</button>
                    <button className='bg-[#7123E2] py-3 w-48  text-white text-sm mt-6 rounded-full' >Save</button>
                </div>
            </div> 
        </div>
    )
} 