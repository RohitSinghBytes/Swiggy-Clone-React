import React, {useState} from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Restaurant from "./Component/Restaurant";
import { BrowserRouter, createBrowserRouter, Route, Router, Routes } from "react-router";
import Home from "./Component/Home";
import RestaurantMenu from "./Component/RestaurantMenu";



function App(){
    return(
        <>
        
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/restaurant" element={<Restaurant></Restaurant>}></Route>
        <Route path="/city/delhi/:id" element={<RestaurantMenu></RestaurantMenu>}></Route>
        {/* because city/delhi sab mein same hai but id different hai */}
       </Routes>
       </BrowserRouter>
        
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)