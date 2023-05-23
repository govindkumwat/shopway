import React from 'react'

async function fetchFirstProdList() {
    const response = await fetch(`https://fakestoreapi.com/products?limit=10`)
    const FirstProdLists = await response.json();
    return FirstProdLists;
}

const FirstprodList = async () => {
    const FirstProdLists = await fetchFirstProdList()
  return (
    <>
    <div className='text-black text-center text-3xl font-medium  mb-8 mt-8'>
        Top Products
    </div>
    <div className='text-black m-4 flex overflow-scroll line-clamp-2'>{
        FirstProdLists.map((data, index) => {
            return (
                <div key={index} className='inline-block w-1/4 shadow-inner shadow hover:shadow-lg p-2 mr-2 h-fit rounded-md '>
                <img className='w-full p-4 h-96 w-96 object-contain ' src={data.image} alt="" />
                <div className='ml-2'>
                <p className='font-bold truncate font-serif mt-2 mb-2'>{data.title}</p>
                <p className='truncate text-slate-500 text-sm font-serif'>{data.description}</p>
                <div className='flex justify-between m-auto items-center mt-2 ' >
                    <div>
                    <p className='font-normal text-slate-800 text-xs'>{data.category}</p>
                    <p className='font-bold text-xl'>{`$ ${data.price}`}</p>
                    </div>
               
                <button className='bg-pink-500 rounded-sm p-2 text-white'>Add to Cart</button>
                </div>
                
                </div>
                </div>
                
            )
        })
    }
    </div>
    </>
  )
}

export default FirstprodList