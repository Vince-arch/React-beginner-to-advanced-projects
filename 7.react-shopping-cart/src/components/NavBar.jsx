import { useState } from "react"
import Cart from "./Cart"
import { useShoppingCart } from "../context/ShoppingCartContext";

function NavBar ({setPage}) {
    const {openCart, cartQuantity} = useShoppingCart;

    return(
        <>
        <div name="nav" className="sticky top-0 z-10 bg-slate-100 flex items-center justify-between p-4">
            <ul name="routes" className=" flex">
                <li>
                     <button className=" m-2" onClick={() => setPage('home')}>
                     Home</button></li> 
                <li> 
                    <button className=" m-2" onClick={() =>setPage('products')}>
                    Products</button></li>
                <li>
                    <button className=" m-2" onClick={() => setPage('about')}>
                    About</button></li>      
            </ul>
            <div name="cart" className="flex items-end pr-2">
            <Cart/>
            </div>
        </div>
        </>
    
    )}

export default NavBar