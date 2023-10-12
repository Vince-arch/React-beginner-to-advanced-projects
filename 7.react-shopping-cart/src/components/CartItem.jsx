import storeItems from "../data/items.json"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { Button } from "@mui/material"

function CartItem ({id, quantity}){
    const {removeFromCart} =useShoppingCart()
    const item =storeItems.find(i => i.id===id)
    if (item == null) return null
    
    return(
    <div className="flex flex-row items-center gap-2">
        <img src={item.imgUrl} className="m-1 w-28 h-20 object-cover"/>
        <div className="float-right">
            <div className="text-black">
                {item.name }
                {quantity > 1 && (<span 
                className="text-gray-500 ">
                X{quantity}
                </span>)}
            </div>
            <div className="text-gray-500 text-sm">
                ksh.{item.price}
            </div>
        </div>
        <div className="flex ml-auto gap-2 mr-1.5">
        <div >{item.price*quantity}</div>
        <button className=" border border-black text-red-500 py-0.25 px-1  rounded"onClick={()=>removeFromCart(item.id)}>X</button>
        </div>
    </div>
    )
}

export default CartItem;