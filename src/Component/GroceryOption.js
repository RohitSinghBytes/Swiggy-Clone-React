
 import { GrocerGridCard } from "../Utilis/Grocery";
 import Grocerycard from "./Grocerycard";
 
 export default function GroceryOption(){
    
    return(
        
         <>
         <div className="mt-15 w-[80%] container mx-auto">
            <h1>
                Shop Groceries on instamart
            </h1>
                <div className="w-[80%] container mx-auto flex flex-wrap mt-15 ml-38 gap-3"> 
                   {
                   GrocerGridCard.map((FoodData)=><Grocerycard key={FoodData.id} FoodData={FoodData}></Grocerycard>)
                   }
                </div>
          </div> 
        </>
    )
 }

