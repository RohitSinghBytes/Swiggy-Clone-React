
export default function Grocerycard({FoodData}){

    return(
        <div className="fle flex-col">
        <a href={FoodData?.action.link}>
        <img className="w-36 h-45 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + FoodData?.imageId} />
        </a>
        <h2>{FoodData?.action.text}</h2>
        </div>
    )
}



