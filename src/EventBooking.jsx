import { useEffect, useState } from 'react'
import Calender from 'react-calendar'


export default function EventBooking(){
    const [clients, setClients]   = useState([]); 
    
    async function fetchClient(){
        try {
            let req = await fetch('http://localhost:3002/admin/userorders');
            req = await req.json();
            return req;
            
        } catch (error) {
            console.log(error)
        }
        
    }

    useEffect(()=>{
        fetchClient()
        .catch(err=>console.error(err))
        .then((result)=>setClients(result.message))
        .finally(()=>console.log(clients))
    },[clients])
   
    return(
            <>
                {clients? <ClientsLoader clients = {clients}/> : "Loading"}
            </>
         
    )
}


const ClientsLoader = (props)=>{
    return(
           <table className='eventTable'>
            <thead>Clients</thead>
                <tr className='tableHead'>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Month's Orders</th>
                   
                </tr>
                {props.clients.map((client)=>

                    <tr key={client.id}> 
                        <td>{client.first_name + " " +client.last_name}</td>
                        <td>{client.address}</td>
                        <td><button>{client.order_count}</button></td>
                    </tr>
                    
                )}

            </table>

    )
}