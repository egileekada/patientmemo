import React from 'react'

export default function DateFormat(item: any) {
    var date = new Date(item);
    let string = date+'' 
    return( 
        <p className=' font-Montserrat-Medium text-xs' >{string.substr(4, 11)}</p>
    )
}  