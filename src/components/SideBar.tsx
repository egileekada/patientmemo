import React from 'react'
import { useNavigate } from 'react-router-dom';
import Icons from './Icons'

export default function SideBar(props: any) {

    const MenuArray = ['Doctor', 'Matron', 'Reception', 'Pharmacy', 'Others']
    const [active, setActive] = React.useState('Doctor')
    const navigate = useNavigate();

    React.useEffect(() => { 
        if(active === 'Doctor'){
            navigate('/dashboard')
        }
    }, [navigate, active])

    return (
        <div className='bg-white w-56 pt-20 h-full' >
            {MenuArray.map((item: any)=> {
                return(
                    <div onClick={()=> setActive(item)} className='flex items-center py-3 my-2 ml-6 cursor-pointer' >
                        <div className='w-8 flex justify-center' >
                            <Icons icon={item} active={active} />
                        </div>
                        <p style={active === item ? {color: '#7123E2'}: {color: '#333333'}} className='font-Ubuntu-Medium ml-3' >{item}</p>
                    </div>
                )
            })}
        </div>
    )
}
