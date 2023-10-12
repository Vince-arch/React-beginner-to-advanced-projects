import { useState } from 'react';
import Drawer from '@mui/material/Drawer'
import { Button } from '@mui/material';
import { useShoppingCart } from '../context/ShoppingCartContext';
import CartItem from './CartItem';
import storeItems from "../data/items.json"

function ShoppingCart({ isOpen }){
    const { closeCart, openCart, cartItems } = useShoppingCart();

    return (
        <div>
            {/*<button onClick={openCart}>Open Cart</button>*/}
            <Drawer
                anchor="right"
                open={isOpen}
                onClose={closeCart}
            >
                <div style={{ width: 300, padding: 20 }} className='flex justify-between'>
                    <h2>Your Cart</h2>
          
                    <button onClick={closeCart} className='text-red-600 border border-red-500 py-1 px-2 rounded'>X</button>
                </div>
                <div>{cartItems.map(item => (<CartItem key={item.id} {...item}/>
                ))} 
                </div>
                <div className='flex ml-auto p-2 text-xl font-black'>
                Total: Ksh.{cartItems.reduce((total, cartItem)=> {
                  const item = storeItems.find(i => i.id===
                    cartItem.id)
                   return total + (item?.price ||0) * cartItem.quantity
                  },0)
                }
                </div>
            </Drawer>
           
        </div>
    )
}

export default ShoppingCart;
