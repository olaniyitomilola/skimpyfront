import { useEffect, useState } from 'react'
import Calender from 'react-calendar'


export default function EventBooking(){
    const [clients, setClients]   = useState([]); 
    
    async function fetchClient(){
        try {
            let req = await fetch('http://localhost:3002/users');
            req = await req.json();
            return req;
            
        } catch (error) {
            console.log(error)
        }
        
    }

    useEffect(()=>{
        fetchClient()
        .catch(err=>console.error(err))
        .then((result)=>setClients(result))
    },[])
   
    return(
            <>
                    <ClientsLoader clients = {clients}/>
            </>
         
    )
}


const ClientsLoader = (props)=>{
    return(
           <table className='eventTable'>
            <thead>Clients</thead>
                <tr className='tableHead'>
                    <th>Name</th>
                    <th className='eventsDesc'>Phone</th>
                    <th>Address</th>
                    <th></th>
                   
                </tr>
                {props.clients.map((client)=>
                    <tr>
                        <td>{client.first_name + " " +client.last_name}</td>
                        <td>{client.phone}</td>
                        <td>{client.address}</td>
                        <td><button>View Orders</button></td>
                    </tr>

            
                    
                )}

            </table>

    )
}