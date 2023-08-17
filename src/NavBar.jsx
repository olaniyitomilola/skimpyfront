
function NavBar(props) {

  return (
    <div className="NavBar">
      <Navlink active = {props.active === "Home"} linkName={'Home'} onClick = {()=> props.handleClick('Home')}/>
      <Navlink active = {props.active === "Inventory"} linkName={'Inventory'} onClick = {()=> props.handleClick('Inventory')}/>
      <Navlink active = {props.active === "Orders"} linkName={'Orders'} onClick = {()=> props.handleClick('Orders')}/>
      <Navlink active = {props.active === "Clients"} linkName={'Clients'} onClick = {()=> props.handleClick('Clients')}/>

    </div>
  );
}


function Navlink({active, onClick,linkName}){
  return(

    <div className="navElement" id={active? "activeNav" : ""}>
      <button onClick={onClick} > <div>{linkName}</div></button>
    </div>
  )
}

export default NavBar;
