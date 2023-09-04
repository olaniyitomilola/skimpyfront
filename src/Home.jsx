import { useEffect, useState } from "react"

function Home(){

    const[salesInfo, setSalesInfo] = useState(null);
    const [salesChange, setSalesChange] = useState(null)
    const [topSellingQuantity, setTopSellingQuantity] = useState(null)


    async function fetchData(url){
        try {
            let req = await fetch(url);
            req = await req.json();
            return req;
            
        } catch (error) {
            console.log(error)
        }
        
    }

    function calculateChange(previous,current){
        //convert to int

        previous = previous !== null ? parseFloat(previous).toFixed(2) : 1;
        current = current !== null ? parseFloat(current).toFixed(2) : 1;


        let change = current - previous;

       

        let percentage = (change/previous) * 100;

        return parseFloat(percentage).toFixed(2);
    }

    useEffect(()=>{
        fetchData('http://localhost:3002/admin/allsales')
        .catch(err=>console.error(err))
        .then((res)=>setSalesInfo(res.message))


      
        
    },[])

    useEffect(()=>{
        fetchData('http://localhost:3002/admin/topselling')
        .catch(err=>console.error(err))
        .then((res)=>setTopSellingQuantity(res.message.byQuantity))
        .finally(()=>console.log(topSellingQuantity))

    },[salesInfo])

    useEffect(()=>{

        if(salesInfo){
            setSalesChange(calculateChange(salesInfo.previous,salesInfo.current))


        }

    },[salesInfo])




    return(
        <div className="homeBoard">
            <div className="summaryBoards">

                <div className="summaries">
                    <div className="summaryHeading">Sales</div>
                    {salesInfo?
                    <div className="summaryBody">
                    <div className="totalSales">Total Sales : <span>{"£" + salesInfo.total}</span></div>
                    <div className="totalSales">This Month : <span>{"£" + salesInfo.current}</span></div>
                    <div className="totalSales">Last Month : <span>{salesInfo.previous? "£" + salesInfo.previous : "£0.00"  }</span></div>
                    </div> :
                     ""}
                     {salesChange? <div className={salesChange < 0? "summaryFooter negative" : "summaryFooter"}>{salesChange + "%"}</div> : "" }
                    
                </div>
                <div className="summaries">
                    <div className="summaryHeading">Top Selling products - By Quantity</div>
                    {topSellingQuantity?
                    <div className="summaryBody">
                    <div className="totalSales">{topSellingQuantity[0].product_name} : <span>{topSellingQuantity[0].total_quantity}</span></div>
                    <div className="totalSales">{topSellingQuantity[1].product_name} : <span>{topSellingQuantity[1].total_quantity}</span></div>
                    <div className="totalSales">{topSellingQuantity[2].product_name} : <span>{topSellingQuantity[2].total_quantity}</span></div>
                    </div> :
                     ""}
                    
                </div>
                <div className="summaries"></div>
                <div className="summaries"></div>
                <div className="summaries"></div>
                <div className="summaries"></div>
            </div>
     


        </div>
    )
}

export default Home