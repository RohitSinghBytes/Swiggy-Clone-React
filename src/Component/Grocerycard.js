
export default function Grocerycard({FoodData}){

    return(
        <div className="flex-none">
        <a href={FoodData?.action.link}>
        <img className="w-36 h-45 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + FoodData?.imageId} />
        </a>
        <h2 className="text-center font-bold">{FoodData?.action.text}</h2>
        </div>
    )
}


 
