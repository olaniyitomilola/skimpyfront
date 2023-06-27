import { useState } from "react";
import Home from "./Home";

function DisplayPort({activeNav}) {

  return (
    <div className="displayPort">

      {activeNav === "Home"? <Home/> : ""}
    </div>
  );
}

export default DisplayPort;