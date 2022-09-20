import React from 'react'

export default function GetMessage(props: any) {

    const [messages, setMessage] = React.useState([] as any)

    React.useEffect(()=> { 
        fetch("https://hospital-memo-api.herokuapp.com/messages/get-messages", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            Authorization : `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                to: props.index
            })
        })
            .then(function(response) {
            return response.json();
            })
            .then(function(response) {
                console.log(response);
                setMessage(response)
            //   setResp.setState({ responseData: response });
            });
    },)

    return (
        <>
            {[...messages].reverse().map((item: any)=> {
                if(item.fromSelf){ 
                    return( 
                        <div className=' w-fit flex flex-col pl-20 ml-auto my-1 ' > 
                            <div style={{boxShadow: "0px 0px 7.387387752532959px 0px #0000001A"}} className=' w-fit relative rounded-lg ml-auto flex flex-col items-center py-3 px-2 ' >
                                <p className=' font-Mulish-Regular  text-base '>{item.message}</p>
                            </div>
                            {/* <p className=' font-Mulish-Regular text-black mb-1 text-xs ml-auto mr-2 '>15:00</p> */}
                        </div>
                    )
                }else {
                    return( 
                        <div className=' w-fit flex flex-col my-1 pr-20 ' > 
                            <div style={{boxShadow: "0px 0px 7.387387752532959px 0px #0000001A"}} className=' w-fit relative rounded-lg ml-auto flex text-black  flex-col items-center py-3 px-2 bg-[#fff] ' >
                                <p className=' font-Mulish-Regular  text-base '>{item.message}</p>
                            </div>
                            {/* <p className=' font-Mulish-Regular text-black mb-1 text-xs ml-auto mr-2 '>15:00</p> */}
                        </div>
                    )
                }
            })} 
        </>
    )
} 