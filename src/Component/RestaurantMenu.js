
// import { useEffect,useState } from "react";
// import { useParams } from "react-router";
// import MenuCard  from "./MenuCard";

// export default function RestaurantMenu(){

//    let {id} = useParams();
//    console.log(id);

//    const [RestData,setRestData] = useState([]);

//    useEffect(()=>{
   
//     async function fetchData() {

//        const proxyServer ="https://cors-anywhere.herokuapp.com/";
//     //    const swiggyAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.717&lng=75.8337&restaurantId=581971&catalog_qa=undefined&submitAction=ENTER=${id}`;
//           const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
//        const response = await fetch(proxyServer+swiggyAPI);
//        const data = await response.json();
//        const tempData = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
//        const filterData = tempData?.filter((items)=> 'title' in items?.card?.card)
//     //    setRestData(filterData);
//     setRestData(filterData || []);
//     }
//     fetchData();
//    },[])

//    console.log(RestData);


//    return(
//     <div className="w-[80%] mx-auto">
//         {
//   RestData?.map((menuItems) => (
//     <MenuCard
//       key={menuItems?.card?.card?.title}
//       menuItems={menuItems?.card?.card}
//     />
//   ))
// }
//         {/* {
//             RestData.map((menuItems)=><MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card}></MenuCard>)
//         } */}
//     </div>
//    )
// }


// import { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import MenuCard from "./MenuCard";

// export default function RestaurantMenu() {
//     const { id } = useParams();
//     const [RestData, setRestData] = useState([]);

//     useEffect(() => {
//         async function fetchData() {
//             try {
//                 const proxyServer = "https://cors-anywhere.herokuapp.com/";
//                 const swiggyAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.717&lng=75.8337&restaurantId=${id}`;

//                 const response = await fetch(proxyServer + swiggyAPI);
//                 const data = await response.json();

//                 // Dynamic search - index hardcode mat karo
//                 const menuCard = data?.data?.cards?.find(
//                     (card) => card?.groupedCard?.cardGroupMap?.REGULAR
//                 );

//                 const tempData = menuCard?.groupedCard?.cardGroupMap?.REGULAR?.cards;

//                 const filterData = tempData?.filter(
//                     (items) => "title" in items?.card?.card
//                 );

//                 setRestData(filterData || []);
//             } catch (err) {
//                 console.error("Error fetching menu:", err);
//             }
//         }

//         fetchData();
//     }, [id]);

//     return (
//         <div className="w-[80%] mx-auto">
//             {RestData?.map((menuItems) => (
//                 <MenuCard
//                     key={menuItems?.card?.card?.title}
//                     menuItems={menuItems?.card?.card}
//                 />
//             ))}
//         </div>
//     );
// }

// DAY 22

// import { useEffect, useState } from "react";
// import { useParams } from "react-router";


// export default function RestaurantMenu(){
   
//     let {id} = useParams();
//     console.log(id);

//     const [RestData, setRestData] = useState(null);

//     useEffect(()=>{
    
//         async function fetchData() {
           
//            const proxyServer = "https://cors-anywhere.herokuapp.com/"
//            const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
//            const response = await fetch(proxyServer+swiggyAPI);
//            const data = await response.json();
//            setRestData(data);
//         }
   
//         fetchData();
//        },[])

//        console.log(RestData);

//     return(
//         <>
//         <h1>Hello Coder Army</h1>
//         <h2>{id}</h2>
//         </>
//     )

// }


// Day23

import { useEffect, useState } from "react";
import { useParams } from "react-router";
import MenuCard from "./MenuCard"


export default function RestaurantMenu(){
   
    let {id} = useParams();
    console.log(id);

    const [RestData, setRestData] = useState([]);

    useEffect(()=>{
    
        async function fetchData() {
           
           const proxyServer = "https://cors-anywhere.herokuapp.com/"
           const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
           const response = await fetch(proxyServer+swiggyAPI);
           const data = await response.json();
           const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
           const filterData = tempData.filter((items)=> 'title' in items?.card?.card);
           setRestData(filterData);
        }
   
        fetchData();
       },[])

       console.log(RestData);

    return(
        <div className="w-[80%] mx-auto mt-20">
          {
            RestData.map((menuItems)=><MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card}></MenuCard>)
          }
        </div>
    )

}