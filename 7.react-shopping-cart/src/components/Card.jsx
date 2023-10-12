import React, { useState } from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';

function Card({ id, name, price, imgUrl }) {

const {
  getItemQuantity, 
  increaseCartQuantity, 
  decreaseCartQuantity, 
  removeFromCart
} = useShoppingCart()

const quantity = getItemQuantity(id);
  return (
    <div className='h-max w-full flex flex-row flex-wrap justify-center'>
      <div className="m-10 w-72 border border-solid border-gray-300 bg-gray-200 hover:bg-gray-300 text-center drop-shadow-2xl my-5 flex flex-col rounded-md">
        <img src={imgUrl} alt='image' className='h-64 w-full object-cover mb-4 rounded-t-md rounded-r-md'></img>
        <div className='flex justify-between m-2 items-baseline'>
          <div className="text-2xl font-bold text-center">{name}</div>
          <div className="text-xl  text-center">Ksh.{price} </div>
        </div> 
        <div className="">
  {quantity === 0 ? (
    <button className="text-white w-full bg-gray-500 m-0 h-10" onClick={()=>increaseCartQuantity(id)}>Add to cart</button>
  ) : (
    <div className="flex items-center flex-col" style={{ gap: ".5rem" }}>
      <div className="flex items-center justify-between">
        <button className="w-8 h-8 bg-gray-400 text-black rounded text-xl font-bold" onClick={()=>decreaseCartQuantity(id)}>-</button>
        <div className='pl-1 pr-2'>
          <span className="font-bold text-xl mr-1">{quantity}</span>In Cart
        </div>
        <button className="w-8 h-8 bg-gray-400 text-black rounded text-xl font-bold" onClick={()=>increaseCartQuantity(id)}>+</button>
      </div>
      <button className="w-18 mb-1 pr-1 pl-1 flex items-center justify-center h-8 bg-red-800 text-white rounded text-xl font-bold" onClick={()=>removeFromCart(id)}>Remove</button>
    </div>
  )}
</div>
      </div>
    </div>
  );
}

export default Card;
