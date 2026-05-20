export default function FoodCard({FoodData}){

    return(
        <>
        <a href={FoodData?.action.link}>
        <img className="w-36 h-45 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + FoodData?.imageId} />
        </a>
        </>
    )
}



// use it if you want the scrolling effect in the icons


// export default function FoodCard({ imageId, title }) {

//     return (

//           <div className="w-30 text-center">

//             <img
//                 className="w-full"
//                 src={
//                     "https://media-assets.swiggy.com/swiggy/image/upload/" +
//                     imageId
//                 }
//             />

//             {/* <h2 className="text-2xl mt-2">
//                 {title}
//             </h2> */}

//         </div>

//     );
// }