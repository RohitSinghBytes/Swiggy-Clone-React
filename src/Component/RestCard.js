import { Link } from "react-router"
export default function RestCard({restInfo}){

    return(
        <Link to={"/city/delhi/"+restInfo?.info?.id}>
        <div className="max-w-70 mb-2 cursor-pointer transform transition duration-200 hover:scale-95">
        <img className="w-70 h-45 object-cover rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restInfo?.info?.cloudinaryImageId}></img>
        <div className="w-[95%] mx-auto mt-3">
        <div className="font-bold text-4.5 truncate">{restInfo?.info?.name}</div>
        <div className="flex gap-1 items-center mt-1">
             {/* ✅ Yeh green star SVG add karo */}
            <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="9" fill="#008000"/>
              <path d="M9 3.5L10.545 7.09L14.5 7.545L11.636 10.273L12.427 14.182L9 12.182L5.573 14.182L6.364 10.273L3.5 7.545L7.455 7.09L9 3.5Z" fill="white"/>
            </svg>
        <span className="text-4 ml-1">{restInfo?.info?.avgRating}</span>
        <span className="text-black-600 text-sm">•</span>
        <span className="text-4 font-semibold">{restInfo?.info?.sla?.slaString}</span>
        </div>
        <div className="text-gray-600 text-4 truncate mt-1">{restInfo?.info?.cuisines.join(" ")}</div>
        <div className="text-gray-600 text-4 truncate mt-1 cursor-pointer">{restInfo?.info?.areaName}</div>
        </div>
        </div>
        </Link>
    )
}