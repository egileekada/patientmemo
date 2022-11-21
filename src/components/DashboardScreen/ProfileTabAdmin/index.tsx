import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../Navbar'
import ChangePassword from './components/ChangePassword'
import ViewUserInfo from './components/ViewUserInfo'

export default function Index() {
    
    const navigate = useNavigate()
    const [tab, setTab] = React.useState(0)
    const userData: any = JSON.parse(localStorage.getItem('userData')+'') 

    const ClickHandler =()=> { 
        {userData.role === 'nurse' && ( 
            navigate('/dashboard/findpatient')
        )}
        {userData.role === 'admin' && ( 
            navigate('/dashboard')
        )}
        {userData.role === 'doctor' && ( 
            navigate('/dashboard/findpatient')
        )}
        {userData.role === 'pharmacy' && ( 
            navigate('/dashboard/pharmacy')
        )}
        {userData.role === 'lab' && ( 
            navigate('/dashboard/findpatient')
        )}
    }

    return (
        <div className='w-full h-full flex flex-col px-6' > 
            <div className='w-full h-full mt-32 ' >
                {tab === 0 ?  
                    <ViewUserInfo close={setTab} /> 
                :  
                    <ChangePassword next={setTab} />}
            </div>
        </div>
    )
}  
