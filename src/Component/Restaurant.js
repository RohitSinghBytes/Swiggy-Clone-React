// import { useEffect, useState } from "react";
// import RestCard from "./RestCard";
// import Shimmer from "./Shimmer";


// export default function Restaurant(){

//     const [RestData,setRestData] = useState([]);

//    useEffect(()=>{
//     async function fetchData() {

//        const proxyServer ="https://cors-anywhere.herokuapp.com/";
//       const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139&lng=77.2090&page_type=DESKTOP_WEB_LISTING";
//         const response = await fetch(proxyServer+swiggyAPI);
//         const data = await response.json();
//         setRestData(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//     }
//     fetchData();

//    },[])


//    // jab tak data fetch ho raha hai tab tak mein chahta hun kuch aur display ho
//    // shimmer effect

//   if(RestData.length==0) // Because RestData ke andar hi data ko rakha jata hai jab data nahi hai toh loading dekhe ga agar ho gaya toh nahi aayega
//    return <Shimmer></Shimmer>
//   // return <h1>Data is Loading.....</h1>


//    return(
//    //  <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5">
//      <div className="grid grid-cols-4 w-[80%] mx-auto mt-20 gap-5">

//          {
//             RestData.map((restInfo)=><RestCard key={restInfo?.info?.id} restInfo={restInfo}></RestCard>)
//          }
//     </div>
//    )
// }



// used because it is giving more images


import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";  // ✅ import karo

export default function Restaurant() {
  const [RestData, setRestData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const proxyServer = "https://cors-anywhere.herokuapp.com/";
        const swiggyAPI =
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139&lng=77.2090&page_type=DESKTOP_WEB_LISTING";
      
        const response = await fetch(proxyServer + swiggyAPI);
        const data = await response.json();

        const cards = data?.data?.cards;
        const restaurantCard = cards?.find(
          (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants?.length > 0
        );
        const restaurants = restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        setRestData(restaurants || []);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    }
    fetchData();
  }, []);

  // ✅ Shimmer tab tak dikhao jab tak data nahi aata
  if (RestData.length === 0) return <Shimmer />;

  return (
    <div className="grid grid-cols-4 w-[80%] mx-auto mt-20 mb-10 gap-5">
      {RestData.map((restInfo) => (
        <RestCard key={restInfo?.info?.id} restInfo={restInfo} />
      ))}
    </div>
  );
}