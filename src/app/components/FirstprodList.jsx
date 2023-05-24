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
    <div className='text-black ml-16 text-3xl font-medium font-serif  mb-8 mt-16'>
        Today&apos;s Best Deals For You
    </div>
    <div className='text-black ml-16 flex overflow-scroll line-clamp-2'>{
        FirstProdLists.reverse().map((data, index) => {
            return (
                <div key={index} className='inline-block w-1/4 mr-4 border border-2/4 border-slate-300  shadow hover:shadow-lg   h-fit rounded-md '>
                <img className='w-full p-4 h-96 w-96 object-contain ' src={data.image} alt="" />
                <div className=' bg-honeydew-300 p-2'>
                <p className='font-bold truncate  mt-2 mb-2'>{data.title}</p>
                <p className='truncate text-slate-500 text-sm '>{data.description}</p>
                <div className='flex justify-between m-auto items-center mt-2 ' >
                    <div>
                    <p className='font-normal text-slate-800 text-xs  '>{data.category}</p>
                    <p className='font-bold text-xl font-serif '>{`$ ${data.price}`}</p>
                    </div>
               
                <button className='shadow-lg hover:bg-pink-500 border-pink-500 border-2 rounded-full text-sm p-2 text-black hover:text-white'>Add to Cart</button>
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