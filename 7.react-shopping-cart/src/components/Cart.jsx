import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useShoppingCart } from '../context/ShoppingCartContext';

function Cart() {
    const { openCart, cartQuantity } = useShoppingCart();

    return (
        <>
            {cartQuantity > 0 && (
                <button className='relative p-2' onClick={openCart}>
                    <ShoppingCartOutlinedIcon style={{ fontSize: '40px' }} />
                    <div className='absolute bottom-9 right-0 bg-red-700 w-8 h-8 rounded-full flex items-center justify-center text-white'>
                        {cartQuantity}
                    </div>
                </button>
            )}
        </>
    );
}

export default Cart;
