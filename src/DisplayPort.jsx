import { useState } from "react";
import Home from "./Home";
import EventBooking from "./EventBooking";
import Orders from "./Orders";
import Inventory from "./Inventory";


function DisplayPort({activeNav}) {

  return (
    <div className="displayPort">

      {activeNav === "Home"? <Home/> : activeNav === "Event Bookings" ? <EventBooking/> : activeNav === "Orders"? <Orders/> : <Inventory/>}
    </div>
  );
}

export default DisplayPort;