import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='border-slate-400 border mb-10 px-20 py-10 flex'>
        <section>
            <div className='text-black '>
                <p className='text-3xl font-bold font-mono py-5'>Shopway</p>
                <p>The way you shop.</p>
            </div>

            <div className='text-black mt-10 font-bold'>
                <p className='text-bold'>Accepted Payments</p>
                <ul className='flex  '>
                    <li  className='mr-4 border p-2 rounded mt-4 '>
                    <img src="/stripe.png" alt="" />
                    </li>
                    <li className='mr-4 border p-2 rounded mt-4'>
                    <img src="/visa.png" alt="" />
                    </li>
                    <li className='mr-4 border p-2 rounded mt-4'>
                    <img src="/mastercard.png" alt="" />
                    </li>
                    <li className='mr-4 border p-2 rounded mt-4'>
                    <img src="/amazonpay.png" alt="" />
                    </li>
                    
                    {/* <li className='mr-4 border p-2 rounded mt-4'>
                    <img src="/klarna.png" alt="" />
                    </li>
                    <li className='mr-4 border p-2 rounded mt-4'>
                    <img src="/paypal.png" alt="" />
                    </li>

                    <li className='mr-4 border p-2 rounded mt-4'>
                    <img src="/applepay.png" alt="" />
                    </li>

                    <li className='mr-4 border p-2 rounded mt-4'>
                    <img src="/gpay.png" alt="" />
                    </li> */}


                    </ul>
            </div>

        </section>
        <section className='text-black ml-32 flex'>
            <div className='mr-16' >
              <p className='font-bold text-lg'>Department</p>  
                <ul className='mt-4'>
                <li className='mb-2'>Clothing</li>
                    <li className='mb-2'>Jewellery</li>
                    <li className='mb-2'>Electronics</li>
                </ul>
            </div>

            <div className='mr-16' >
              <p className='font-bold text-lg'>About Us</p>  
                <ul className='mt-4'>
                    <li className='mb-2'>About Shopway</li>
                    <li className='mb-2'>Careets</li>
                    <li className='mb-2'>News & Blog</li>
                    <li className='mb-2'>Help</li>
                    <li className='mb-2'>Press Center</li>
                    <li className='mb-2'>Shop By Location</li>
                    <li className='mb-2'>Shopway Brands</li>
                    <li className='mb-2'>Affiliate & Partners </li>
                    <li className='mb-2'>Ideas & Guides</li>
                </ul>
            </div>

            <div className='mr-16' >
              <p className='font-bold text-lg'>Services</p>  
                <ul className='mt-4'>
                    <li className='mb-2'>Gift Card</li>
                    <li className='mb-2'>Mobile App</li>
                    <li className='mb-2'>Shipping & Delivery</li>
                    <li className='mb-2'>Order Pickup</li>
                    <li className='mb-2'>Account Signup</li>
                </ul>
            </div>

            <div className='mr-16' >
              <p className='font-bold text-lg'>Help</p>  
                <ul className='mt-4'>
                    <li className='mb-2'>Shopway Help</li>
                    <li className='mb-2'>Returns</li>
                    <li className='mb-2'>Track Orders</li>
                    <li className='mb-2'>Contact Us</li>
                    <li className='mb-2'>Feedback</li>
                    <li className='mb-2'>Security & Fraud</li>
                </ul>
            </div>
        </section>

    </div>
    <div>
        
    </div>
    </>
  )
}

export default Footer