// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, ViewDirective } from '@syncfusion/ej2-react-schedule';

// export default function CalenderComponent(){

//     const data = [{
//         Id: 2,
//         Subject: 'Meeting',
//         StartTime: new Date(2022, 2, 9, 10, 0),
//         EndTime: new Date(2022, 2, 9, 12, 30),
//         IsAllDay: false,
//         Status: 'Completed',
//         Priority: 'High'
//     }]

//     // function CellDesign(props: { [key: string] : object}): JSX.Element {
//     //     return(
//     //         <div>
//     //             {props}
//     //         </div>
//     //     )
//     // }

//     function eventTemplate(props: { [key: string] : object}): JSX.Element {
//             return(
//                 <div className='bg-green-400'>
//                     {props.Subject}
//                 </div>
//             )
//         }

//     return(
//         <ScheduleComponent className='w-full ' selectedDate={new Date()} eventSettings={{ dataSource: data  }}  >
//             <Inject services={[Day, Week, Month]}/>
//             <ViewDirective option='Week' eventTemplate={eventTemplate.bind(data)} />
//         </ScheduleComponent>
//     )
// } 

import * as React from 'react'; 
import { ScheduleComponent, Day, Week, WorkWeek, Month, Inject, ViewDirective, ViewsDirective } from '@syncfusion/ej2-react-schedule';
export default class App extends React.Component<{}, {}> {
    private data = [{
        Id: 2,
        Subject: 'Consultation',
        StartTime: new Date(2022, 2, 10, 12, 0),
        EndTime: new Date(2022, 2, 10, 17, 30),
        IsReadonly: true
    }]; 

    private eventTemplate(props:  { [key: string] : object}): JSX.Element{ 
        return(
            <div className='template-wrap relative' > 
                <div className='absolute w-full top-0 z-50 rounded-md'  style={{backgroundColor: '#7123E2', paddingTop: '4px'}}> 
                    <div className='w-full py-6 px-3' style={{backgroundColor: '#F8F3FF'}} >
                        <div className='w-12 h-12 mx-auto rounded-full flex justify-center items-center' style={{backgroundColor: 'rgba(113, 35, 226, 0.08)'}} >
                            <svg className='w-7 h-8' viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.99996 9.11593C8.89238 9.11593 11.3333 9.58594 11.3333 11.3993C11.3333 13.2133 8.87637 13.6666 5.99996 13.6666C3.10821 13.6666 0.666626 13.1966 0.666626 11.3833C0.666626 9.56927 3.12355 9.11593 5.99996 9.11593ZM5.99996 0.333313C7.95936 0.333313 9.52928 1.90266 9.52928 3.86068C9.52928 5.8187 7.95936 7.38872 5.99996 7.38872C4.04122 7.38872 2.47064 5.8187 2.47064 3.86068C2.47064 1.90266 4.04122 0.333313 5.99996 0.333313Z" fill="#7123E2"/>
                            </svg>
                        </div>
                        <p className='font-Ubuntu-Medium text-center mt-2 text-sm ' style={{color: '#7123E2'}} >{props.Subject}</p>
                        <div className='mt-8' >
                            <p className='font-Ubuntu-Medium text-center mt-2 text-sm ' style={{color: '#6A5971'}} >10:00 - 11:35</p>
                            <div className='flex items-center' >
                                <div style={{backgroundColor:'#7123E2', width: '4px', height:'4px'}} className='mr-2 rounded-full' />
                                <p className='font-Ubuntu-Regular text-center text-sm ' style={{color: '#6A5971'}} >Ajayi Johnson</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}

    public render() {
        return <ScheduleComponent  selectedDate={new Date()} eventSettings={{ dataSource: this.data }} >
                    <ViewsDirective>
                        <ViewDirective option='Day' eventTemplate={this.eventTemplate.bind(this) as any}  />
                        <ViewDirective option='Week' eventTemplate={this.eventTemplate.bind(this) as any}  />
                        <ViewDirective option='Month' />
                    </ViewsDirective>
                    <Inject services={[Day, Week, WorkWeek, Month]}/>
                </ScheduleComponent>;
    }
} 