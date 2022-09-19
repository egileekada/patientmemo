import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IUser, UserContext } from '../../../context'; 
import LoaderIcon from '../../LoaderIcon';
import Modal from '../../Modal';

export default function  SearchBar(props: any) {

    const navigate = useNavigate();
    const [data, setData] = React.useState([] as any);  
    const [tab, setTab] = React.useState(false);  
    const [message, setMessage] = React.useState('');
    const [modal, setModal] = React.useState(0); 
    const [loading, setLoading] = React.useState(true); 
    React.useEffect(() => { 
        submit() 
    },[props.name])



    const submit = async () => {  
        const request = await fetch(`https://hospital-memo-api.herokuapp.com/patients/search-patients
        `, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                keyword: props.name
            }),
        });

        const json = await request.json(); 
        if (request.status === 201) {   
            setData(json) 
            setLoading(false)
        }else {
            // alert(json.message);
            // console.log(json)
            // setLoading(false);
        } 

        if(json.length === 0){
            // alert('No Patient Found');
            setMessage('No Patient Found')
            setModal(2)           
            const t1 = setTimeout(() => {  
                setModal(0)          
                clearTimeout(t1); 
            }, 2000); 
        } 
    }         

    const userContext: IUser = React.useContext(UserContext);   
    const ClickHandler =(item: any)=> {
        userContext.setPatient(item)
        localStorage.setItem("patientId", item._id)
        navigate('/patientfile')
    }

    return (
        <div className='w-full bg-white' > 
            <Modal message={message} modal={modal} /> 
            {loading ?
                <div className='w-full h-full pt-10 justify-center item-center flex flex-1' > 
                    <LoaderIcon size='w-20 h-20 mr-1 animate-spin ' /> 
                </div>
            :
                <>
                    {data.length !== 0 ? 
                            <>
                                {data.map((item: any)=> {
                                    return(
                                        <div key={item._id} className='my-8 px-3 flex items-center' > 
                                            <div className='w-8 h-8 rounded-full flex bg-[#7123E214] justify-center items-center' >
                                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.99967 8.85179C9.53054 8.85179 11.6663 9.26304 11.6663 10.8497C11.6663 12.437 9.51653 12.8337 6.99967 12.8337C4.46939 12.8337 2.33301 12.4224 2.33301 10.8357C2.33301 9.24846 4.48281 8.85179 6.99967 8.85179ZM6.99967 1.16699C8.71415 1.16699 10.0878 2.54017 10.0878 4.25344C10.0878 5.96671 8.71415 7.34047 6.99967 7.34047C5.28578 7.34047 3.91152 5.96671 3.91152 4.25344C3.91152 2.54017 5.28578 1.16699 6.99967 1.16699Z" fill="#7123E2"/>
                                                </svg>
                                            </div>
                                            <div className='ml-3' > 
                                                <p className='font-Ubuntu-Medium text-sm' >{item.firstName+' '+item.lastName}</p>
                                                <p className='font-Ubuntu-Regular text-[#5F6777] mt-1 text-xs' >{item._id}</p>
                                            </div>
                                            <button onClick={()=> ClickHandler(item)} className='w-20 rounded-md py-2 text-xs bg-[#7123E2] ml-auto text-white font-Ubuntu-Medium' >Open</button>
                                        </div>
                                    )
                                })}
                            </>
                        :null}
                </>
            } 
        </div>
    )
} 