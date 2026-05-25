// it is which claude had designed

export default function RestInfo({restData}){

    return (
        <>
        <div className="flex w-full justify-between items-start py-5 px-20">
          <div className="flex-1 pr-10 max-w-[70%]">
            {/* Veg/Non-veg icon */}
            <div className="w-4 h-4 border-2 border-green-600 flex items-center justify-center mb-1.5">
              <div className="w-2 h-2 rounded-full bg-green-600"></div>
            </div>

            <p className="text-base font-bold text-gray-900 mb-1">{restData?.name}</p>
            <p className="text-sm font-medium text-gray-800 mb-1.5">{"₹"+ ("defaultPrice" in restData ? restData?.defaultPrice/100:restData?.price/100)}</p>
            
            <div className="flex items-center gap-1 mb-2">
              <span className="text-yellow-500 text-xs">★</span>
              <span className="text-xs font-semibold text-gray-700">{restData?.ratings?.aggregatedRating?.rating}</span>
              <span className="text-xs text-gray-500">{"("+restData?.ratings?.aggregatedRating?.ratingCountV2+")"}</span>
            </div>

            <p className="text-2 text-gray-500 leading-relaxed line-clamp-2">
              {restData?.description}
            </p>
          </div>

          <div className="flex flex-col items-center shrink-0">
            <div className="relative w-42 h-38">
              <img 
                className="w-full h-full object-cover rounded-2xl" 
                src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restData.imageId}
              />
            </div>
            <button className="w-20 -mt-4 bg-white text-green-600 font-bold text-sm tracking-widest py-1.5 rounded-xl shadow-lg border border-gray-100 hover:bg-green-50 transition-colors z-10 relative">
              ADD
            </button>
            {/* <span className="text-xs text-gray-400 mt-1">Customisable</span> */}
          </div>
        </div>
        <hr className="border-gray-400 mx-18"/>
        </>
    )
}

// this one is of mine


// export default function RestInfo({restData}){


//     return (
//          <>
//         <div className="flex w-full justify-between mb-2 pb-2">
//           <div className="w-[70%]">
//             <p className="text-2xl text-gray-700 font-semibold mb-1">{restData?.name}</p>
//             <p className="text-xl">{"₹"+ ("defaultPrice" in restData ? restData?.defaultPrice/100:restData?.price/100)}</p>
//             <span className="text-green-700">{restData?.ratings?.aggregatedRating?.rating}</span>
//             <span>{"("+restData?.ratings?.aggregatedRating?.ratingCountV2+")"}</span>
//             <p>
//                 {restData?.description}
//             </p>    
//           </div>
//           <div className="w-[20%] relative">
//             <img className="w-full h-36 object-cover rounded-3xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restData.imageId}></img>
//             <button className="absolute bottom-0 left-16 rounded-xl text-2xl text-green-600 px-6 py-2 shadow-md border border-white bg-white">ADD</button>
//           </div>
//         </div>
//         <hr className="mb-6 mt-2"></hr>
//         </>

//     )
// }