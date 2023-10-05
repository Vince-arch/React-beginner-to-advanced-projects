import React from 'react';

function Card() {
  return (
    <>
    <div className=' h-max w-full flex flex-row flex-wrap  justify-center'>
    <div className="m-10 w-72 border border-solid border-gray-300 bg-gray-200 hover:bg-gray-300 text-center drop-shadow-2xl my-5 flex flex-col rounded-md">
        <img src='./src/assets/pizza.jpg' className='h-64 w-full object-cover mb-4 rounded-t-md rounded-r-md'></img>
      <div className='flex justify-between m-2'>
      <div className="text-2xl font-bold text-center">Pizza </div>
      <div className="text-xl  text-center">Sh.1000 </div>
      </div>
      <button className="text-white bg-gray-500  m-2 h-10">Add to cart</button>
    </div>
    
    
    </div>
    
    
    
    </>
  );
}

export default Card;
