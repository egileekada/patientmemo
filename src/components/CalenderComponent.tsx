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
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, ViewDirective } from '@syncfusion/ej2-react-schedule';
export default class App extends React.Component<{}, {}> {
    private data = [{
        Id: 2,
        Subject: 'Paris',
        StartTime: new Date(2018, 1, 15, 10, 0),
        EndTime: new Date(2018, 1, 15, 12, 30),
    }]; 

    private eventTemplate(props:  { [key: string] : object}): JSX.Element{ 
        return(
            <div className='bg-green-400 w-full h-40'>
                {props.Subject}
            </div>
        )}

    public render() {
        return <ScheduleComponent  selectedDate={new Date(2018, 1, 15)} eventSettings={{ dataSource: this.data, template: (this.eventTemplate.bind(this))as any}} >
                    <ViewDirective option='Week' eventTemplate={this.eventTemplate.bind(this)}  />
                    <ViewDirective option='Month' eventTemplate={this.eventTemplate.bind(this)} />
                    <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
                </ScheduleComponent>;
    }
}