import { useEffect, useState } from "react"

export default function Inventory(){

    const [inventory,setInventory] = useState([]);

    
    useEffect( ()=>{
        async function fetchData(){
        const items = await  fetch('http://localhost:3002');
        let res = await items.json();
        return res
        
    }
    fetchData()
        .catch(console.error)
        .then((res)=> {setInventory(res)})
        
    },[])


 


    return (
        <div className="inventory">
            {!inventory.length? "Loading" : <InventoryLoader setInventory={setInventory} inventory={inventory}/>}
            
        </div>
    )
}
function InventoryLoader(props){

    const handleDelete = async (key) =>{
        try{
            let req = await fetch(`http://localhost:3002/${key}`,{
            method: 'delete'
            })
            let res = await req.json()
            if(res.items){
                props.setInventory(res.items)
            }

        }catch(error){
            console.error(error)
        }
        
    } 

    const handleEdit = async()=>{
        
    }
    
    return (
        props.inventory.map((item)=>{
            //The if is here because we are currently serving array from
            //the server and want to set item to null when we delete
            //to remove this when we serve from db.
            {if(item){
                return(
                <div key={props.inventory.indexOf(item)} className="inventorybox">
                    <img className="inventoryPicture" src={item.img} alt={"Picture of " +item.name} srcset="" />
                    <div className="inventoryDetails">
                        <div className="inventoryName">{item.name}</div>
                        <div  className="inventoryPrice">{"£" + item.price + " per " + item.unit}</div>
                    </div>
                    <div className="buttons">
                        <button className="inventoryEdit">Edit</button>
                        <button className="inventoryEdit" onClick={async ()=> await handleDelete(props.inventory.indexOf(item))}>Delete</button>


                    </div>
                </div>
                )
            }}
            
        })
    )
}