import { useEffect, useState } from "react"

 async function fetchData(){
        const items = await  fetch('http://localhost:3002');
        let res = await items.json();
        return res
        
    }

export default function Inventory(){

    const [inventory,setInventory] = useState([]);

    
    useEffect( ()=>{
       
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
            if(res.items.success){
                //set loading 
                
                let items = await fetchData();
                items = await items.json();

                props.setInventory(items)
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
                <div key={(item.id)} className="inventorybox">
                    <img className="inventoryPicture" src={item.img_sources} alt={"Picture of " +item.name} srcset="" />
                    <div className="inventoryDetails">
                        <div className="inventoryName">{item.product_name}</div>
                        <div  className="inventoryPrice">{"£" + item.price}</div>
                    </div>
                    <div className="buttons">
                        <button className="inventoryEdit">Edit</button>
                        <button className="inventoryEdit" onClick={async ()=> await handleDelete(item.id)}>Delete</button>


                    </div>
                </div>
                )
            }}
            
        })
    )
}