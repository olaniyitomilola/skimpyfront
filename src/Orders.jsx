import { useEffect, useState } from "react"

async function fetchData(url){
        try {
            let req = await fetch(url);
            req = await req.json();
            return req;
            
        } catch (error) {
            console.log(error)
        }
        
    }

export default function Orders(){


    const [orders,setOrders] = useState("");

    useEffect(()=>{
        fetchData('http://localhost:3002/admin/orders')
        .catch(err=>console.error(err))
        .then((res)=>setOrders(res.message)) 
        .finally(()=>{console.log(orders)})
    },[orders])

    return (
        <div>
            {orders?
            <OrderLoader orders = {orders}/> :
            "loading"}
        </div>
    )
}

function OrderLoader(props){
    return (
        <table className="orderTable">
            <thead>Orders</thead>
            <tr>
                <th id = "tracking">Tracking ID</th>
                <th id ="client">Customer</th>
                <th id ="address">Delivery Address</th>
                <th id= "status">Price</th>

            </tr>
            {props.orders.map((order)=>
                <tr key={order.id}>
                    <td id = "tracking">{order.id}</td>
                    {/* TODO: Implement multi-order here, products should be an array */}
                    <td id ="client">{order.first_name + " " + order.last_name}</td>
                    <td id ="address">{order.address}</td>
                    <td id= "status">{order.total_price}</td>
                </tr>
            )}
        </table>
    )
}