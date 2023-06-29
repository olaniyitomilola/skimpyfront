export default function Orders(){
    const orders = [
        {trackingID: "GB56738292",products : "Amala and Gbegiri", client: "Bashorun Gaa", address: "Cambridge Science Park", status: "Preparing"},
        {trackingID: "GB56Y87812",products : "Amala and Gbegiri", client: "Bankole Lawal", address: "Cambridge Science Park", status: "Delivered"}
        ,{trackingID: "GB56Y87812",products : "Rice and beans", client: "Mike Scott", address: "Metford Park", status: "Out for Delivery"}

    ]

    return (
        <div>
            <OrderLoader orders = {orders}/>
        </div>
    )
}

function OrderLoader(props){
    return (
        <table className="orderTable">
            <thead>Orders</thead>
            <tr>
                <th id = "tracking">Tracking ID</th>
                <th id="products">Product</th>
                <th id ="client">Client</th>
                <th id ="address">Delivery Address</th>
                <th id= "status">Status</th>

            </tr>
            {props.orders.map((order)=>
                <tr>
                    <td id = "tracking">{order.trackingID}</td>
                    {/* TODO: Implement multi-order here, products should be an array */}
                    <td id="products">{order.products}</td>
                    <td id ="client">{order.client}</td>
                    <td id ="address">{order.address}</td>
                    <td id= "status">{order.status}</td>
                </tr>
            )}
        </table>
    )
}