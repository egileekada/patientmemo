import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import React from 'react'
import { useNavigate } from 'react-router-dom' 
import AddUser from './components/AddUser'
import ManageUser from './components/ManageUser'

export default function Index() {
    
    const navigate = useNavigate()
    const [tab, setTab] = React.useState(false)

    return (
        <div className='w-full h-full ' > 
            <div className='w-full h-full' >
                {!tab ?  
                    <ManageUser click={setTab} /> 
                : 
                    <AddUser /> 
                    }
            </div>
        </div>
    )
} 