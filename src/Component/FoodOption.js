import { imageGridCards } from "../Utilis/FoodData"
import FoodCard from "./FoodCard"

export default function FoodOption(){


    return (
        <>
        <div className="w-[80%] container mx-auto flex flex-wrap mt-15 ml-38 gap-3"> 
           {
            imageGridCards.map((FoodData)=><FoodCard key={FoodData.id} FoodData={FoodData}></FoodCard>)
           }
        </div>
        </>
    )
}




// use it if you want the scrolling effect in the icons


// import { useState } from "react";
// import { imageGridCards } from "../Utilis/FoodData";
// import FoodCard from "./FoodCard";

// export default function FoodOption() {

//     const [slide, setSlide] = useState(0);

//     // 2 rows × 7 items
//     const itemsPerSlide = 10;

//     // total slides
//     const maxSlide = Math.ceil(imageGridCards.length / itemsPerSlide) - 1;

//     function nextSlide() {

//         if(slide < maxSlide){
//             setSlide(slide + 1);
//         }

//     }

//     function prevSlide() {

//         if(slide > 0){
//             setSlide(slide - 1);
//         }

//     }

//     return (

//         <div className="w-[80%] mx-auto mt-10">

//             {/* heading */}
//             <div className="flex justify-between items-center">

//                 <h1 className="text-2xl font-bold">
//                     Order our best food options
//                 </h1>

//                 <div className="flex gap-4">

//                     <button
//                         onClick={prevSlide}
//                         className="bg-gray-200 w-10 h-10 rounded-full"
//                     >
//                         ←
//                     </button>

//                     <button
//                         onClick={nextSlide}
//                         className="bg-gray-200 w-10 h-10 rounded-full"
//                     >
//                         →
//                     </button>

//                 </div>

//             </div>

//             {/* slider */}

//             <div className="overflow-hidden mt-10">

//                 <div
//                     className="flex transition-all duration-500"
//                     style={{
//                         transform: `translateX(-${slide * 100}%)`
//                     }}
//                 >

//                     {
//                         Array.from({ length: maxSlide + 1 }).map((_, index) => (

//                             <div
//                                 key={index}
//                                 className="min-w-full grid grid-rows-2 grid-flow-col gap-8"
//                             >

//                                 {
//                                     imageGridCards
//                                     .slice(
//                                         index * itemsPerSlide,
//                                         (index + 1) * itemsPerSlide
//                                     )
//                                     .map((item) => (

//                                         <FoodCard
//                                             key={item.id}
//                                             imageId={item.imageId}
//                                             title={item.action.text}
//                                         />

//                                     ))
//                                 }

//                             </div>

//                         ))
//                     }

//                 </div>

//             </div>

//         </div>
//     );
// }