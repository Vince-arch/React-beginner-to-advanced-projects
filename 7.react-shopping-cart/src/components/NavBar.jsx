import { useState } from "react"
import Cart from "./Cart"


function NavBar ({setPage}) {

const [isCartOpen, setIsCartOpen] =useState(false)

const toggleCart = () => (
    setIsCartOpen(prev => !prev)
)

    return(
        <>
        <div name="nav" className="bg-slate-400 flex items-center justify-between p-5">
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
            <div name="cart" className="flex items-end pr-2"  onClick={toggleCart}>
            <Cart/>
            </div>                
    
        </div>
        </>
    
    )}

export default NavBar