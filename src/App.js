import React, {useState} from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Header from "./Component/Header";
import FoodOption from "./Component/FoodOption";
import GroceryOption from "./Component/GroceryOption";
import DineOption from "./Component/DineOption";
import Restaurant from "./Component/Restaurant";




function App(){
    return(
        <>
        <Header></Header>
        <FoodOption></FoodOption>
        <GroceryOption></GroceryOption>
        <DineOption></DineOption>
        <Restaurant></Restaurant>
        
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)