export default function Inventory(){

    const inventory = [
        {name: "Amala", price: 5, unit: "Scoop", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Amala.jpg/1024px-Amala.jpg"}
        ,{name: "White Rice", price: 2.80, unit: "Spoon", img: "https://static01.nyt.com/images/2018/02/21/dining/00RICEGUIDE8/00RICEGUIDE8-superJumbo.jpg"}
        ,{name: "Nigerian Jollof Rice", price: 3, unit: "Spoon", img: "https://i.etsystatic.com/43736205/r/il/7a1cd7/5083482431/il_794xN.5083482431_aj9p.jpg"}
        ,{name: "Stir Fried Rice", price: 3.5, unit: "Spoon", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA6F4LyczKxY_dkTpu6byAPDuxJqPHrWq4Zw&usqp=CAU"}


    ]


    return (
        <div className="inventory">
            <InventoryLoader inventory={inventory}/>
        </div>
    )
}
function InventoryLoader(props){
    return (
        props.inventory.map((item)=>
            <div className="inventorybox">
                <img className="inventoryPicture" src={item.img} alt={"Picture of " +item.name} srcset="" />
                <div className="inventoryDetails">
                    <div className="inventoryName">{item.name}</div>
                    <div  className="inventoryPrice">{"£" + item.price + " per " + item.unit}</div>
                </div>
                <button className="inventoryEdit">Edit</button>
            </div>
        )
    )
}