import { useState } from 'react'
import Calender from 'react-calendar'


export default function EventBooking(){
    const [value, onChangeValue] = useState(new Date())
    
    const events = [
        {"date" : "28-June-2023", "event" : "Birthday Party at Duxford", "Hours": "7Hrs"},
        {"date" : "29-June-2023", "event" : "Birthday Party at Cambridge", "Hours": "10Hrs"},
        {"date" : "29-June-2023", "event" : "Graduation Party at Langley", "Hours": "3Hrs"}


    ]
    return(
            <>
                   <Calender showNeighboringMonth = {false} onChange={onChangeValue} value={value}/>
                    <EventsLoader events = {events}/>
            </>
         
            )
}


const EventsLoader = (props)=>{
    return(
           <table className='eventTable'>
            <thead>Upcoming Events</thead>
                <tr className='tableHead'>
                    <th>Date</th>
                    <th className='eventsDesc'>Event</th>
                    <th>Booking Hours</th>
                </tr>
                {props.events.map((event)=>
                    <tr>
                        <td>{event.date}</td>
                        <td>{event.event}</td>
                        <td>{event.Hours}</td>
                    </tr>

            
                    
                )}

            </table>

    )
}