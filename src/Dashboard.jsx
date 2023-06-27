import NavBar from "./NavBar";
import DisplayPort from "./DisplayPort";
import { useState } from "react";


function Dashboard() {

  const [activeNav, setActiveNav] = useState('Home');

  const handleNavClick = (nav)=>{
    setActiveNav(nav);
  }

  return (
    <div className="Dashboard">

      <NavBar handleClick = {handleNavClick} active = {activeNav}/>
      <div className="dashDisplay">
        <div className="DashTop"></div>
        <DisplayPort activeNav = {activeNav}/>
      </div>
  
    </div>
  );
}

export default Dashboard;
