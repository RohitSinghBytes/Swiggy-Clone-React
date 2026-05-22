import { useEffect, useState } from "react";
import RestCard from "./RestCard";


export default function Restaurant(){

    const [RestData,setRestData] = useState([]);

   useEffect(()=>{
    async function fetchData() {

       const proxyServer ="https://cors-anywhere.herokuapp.com/";
      const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139&lng=77.2090&page_type=DESKTOP_WEB_LISTING";
        const response = await fetch(proxyServer+swiggyAPI);
        const data = await response.json();
        setRestData(data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }
    fetchData();

   },[])

   return(
    <div className="flex flex-wrap w-[80%] mx-auto mt-20">
         {
            RestData.map((restInfo)=><RestCard key={restInfo.info.id} restInfo={restInfo}></RestCard>)
         }
    </div>
   )
}