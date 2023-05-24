import React from 'react'

const ShopTop = () => {
  return (
    <div className='text-center pt-16 text-black'>
    <div>
        <h2 className='text-3xl pb-10 font-serif'>Shop Our Top Categories</h2>
    </div>
    <div className='flex justify-center margin-auto'>

        <div className='w-56 relative mt-4 mr-10'>
           <img className='h-full rounded shadow-xl object-cover ' src="/mensclothing.jpg" alt="" />
           <p className='absolute top-2 right-2 text-white text-xl font-bold ' >Men&apos;s Clothing</p>
        </div>

        <div className='w-56 relative mt-4 mr-10'>
           <img className='h-full cover rounded shadow-xl object-cover' src="/woomanclothing.jpg" alt="" />
           <p className='absolute top-2 right-2 text-white text-xl'>Wooman&apos;s Clothing</p>
        </div>

        <div className='w-56 relative mt-4 mr-10'>
           <img className='h-full rounded shadow-xl object-cover' src="/electronics.jpg" alt="" />
           <p className='absolute top-2 right-2 text-white text-xl'>Electronics</p>
        </div>

        <div className='w-56 relative mt-4 mr-10'>
           <img className='h-full rounded shadow-xl object-cover' src="/jewellery.jpg" alt="" />
           <p className='absolute top-2 right-2 text-white text-xl'>Jewellery</p>
        </div>

       
    </div>
    </div>
  )
}

export default ShopTop