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
import { Link } from 'react-router-dom';
import { Internationalization } from '@syncfusion/ej2-base';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Inject, ViewDirective, ViewsDirective } from '@syncfusion/ej2-react-schedule';
export default class App extends React.Component<{}, {}> {
 
    instance: any 

    constructor(instance: any) {
        super(instance); 
        this.instance = new Internationalization();
    } 

    private data = [{
        Id: 1,
        Subject: 'Consultation',
        StartTime: new Date(2022, 3, 20, 12, 0),
        EndTime: new Date(2022, 3, 20, 13, 30),
        IsReadonly: true,
        staff: 'Johnson'
    },
    {
        Id: 2,
        Subject: 'Lab',
        StartTime: new Date(2022, 3, 21, 13, 0),
        EndTime: new Date(2022, 3, 21, 15, 30),
        IsReadonly: true,
        staff: 'Johnson'
    },
    {
        Id: 3,
        Subject: 'Lab',
        StartTime: new Date(2022, 3, 21, 4, 0),
        EndTime: new Date(2022, 3, 21, 5, 30),
        IsReadonly: true,
        staff: 'Johnson'
    },
    {
        Id: 4,
        Subject: 'Lab',
        StartTime: new Date(2022, 3, 21, 1, 0),
        EndTime: new Date(2022, 3, 21, 2, 30),
        IsReadonly: true,
        staff: 'Johnson'
    },
    {
        Id: 4,
        Subject: 'Night',
        StartTime: new Date(2022, 3, 18, 0, 0),
        EndTime: new Date(2022, 3, 18, 0, 30),
        IsReadonly: true,
        staff: 'James'
    },
    {
        Id: 4,
        Subject: 'Nurse',
        StartTime: new Date(2022, 3, 20, 1, 0),
        EndTime: new Date(2022, 3, 20, 2, 30),
        IsReadonly: true,
        staff: 'Johnson'
    },
    {
        Id: 4,
        Subject: 'Pharm',
        StartTime: new Date(2022, 3, 19, 4, 0),
        EndTime: new Date(2022, 3, 19, 6, 30),
        IsReadonly: true,
        staff: 'Philip'
    },
    {
        Id: 4,
        Subject: 'Birth',
        StartTime: new Date(2022, 3, 17, 1, 0),
        EndTime: new Date(2022, 3, 17, 2, 30),
        IsReadonly: true,
        staff: 'Hope'
    },
    {
        Id: 4,
        Subject: 'Check',
        StartTime: new Date(2022, 3, 22, 1, 0),
        EndTime: new Date(2022, 3, 22, 2, 30),
        IsReadonly: true,
        staff: 'Joy'
    }]; 

    getTimeString(value: any) {
        return this.instance.formatDate(value, { skeleton: 'hm' });
    }

    private eventTemplate(props:  { [key: string] : object}): JSX.Element{ 
        return(
            <Link to='/doctor/patientprofile' >
                <div className='template-wrap ' >  
                    <div style={{borderTopRightRadius: '8px', borderTopLeftRadius: '8px'}} className='h-1 bg-[#7123E2] absolute top-0 w-full' ></div>
                    <div className='py-2 px-2 w-full' >
                        <p className='font-Ubuntu-Medium text-sm text-left ' style={{color: '#7123E2'}} >{props.Subject}</p>
                        <p className='font-Ubuntu-Regular text-left text-xs ' style={{color: '#6A5971'}} >Time: {this.getTimeString(props.StartTime)} - {this.getTimeString(props.EndTime)}</p> 
                        <div className='absolute bottom-2 right-2 w-full' >
                            <div className='flex items-center justify-end' >
                                <div style={{backgroundColor:'#7123E2', width: '4px', height:'4px'}} className='mr-1 rounded-full' />
                                <p className='font-Ubuntu-Regular text-center text-xs ' style={{color: '#6A5971'}} >{props.staff}</p>
                            </div>
                        </div> 
                    </div>
                </div>
            </Link>
        )}

    public render() {
        return <ScheduleComponent allowDragAndDrop={true} readonly={true} allowMultiDrag={true}  selectedDate={new Date(2022, 3, 20)} height='69vh' cssClass='schedule-cell-dimension' eventSettings={{ dataSource: this.data }}  >
                    <ViewsDirective>
                        <ViewDirective option='Day' eventTemplate={this.eventTemplate.bind(this) as any}  />
                        <ViewDirective option='Week' eventTemplate={this.eventTemplate.bind(this) as any}  />
                        <ViewDirective option='Month' />
                    </ViewsDirective>
                    <Inject services={[Day, Week, WorkWeek, Month]}/>
                </ScheduleComponent>;
    }
} 

// function Nav(item: any){ 
//     const navigate = useNavigate() 
//     return(
//         navigate(item)
//     )
// }