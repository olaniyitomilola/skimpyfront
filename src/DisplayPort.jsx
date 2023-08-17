import { useState } from "react";
import Home from "./Home";
import EventBooking from "./EventBooking";
import Orders from "./Orders";
import Inventory from "./Inventory";


function DisplayPort({activeNav}) {

  return (
    <div className="displayPort">

      {activeNav === "Home"? <Home/> :
       activeNav === "Clients" ? <EventBooking/> : 
       activeNav === "Orders"? <Orders/> : 
       activeNav ==="Inventory"? <Inventory/> : 'Loading'}
    </div>
  );
}

export default DisplayPort;