"use client"

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';

async function fetchCategories() {
  const response = await fetch(`https://fakestoreapi.com/products/categories`)
  const categories = await response.json();
  return categories;
}


export const Navbar = async () => {

  const categories = await fetchCategories()
  return (
    <>
      <div className='text-black flex justify-between px-20 py-6 m-auto justify-center items-center'>
        <div className='font-bold text-2xl font-mono'>Shopway</div>

        <div>
          <ul className='flex justify-between '>
            <li className='py-0 p-10 flex m-auto items-center relative' id='menu-button' aria-expanded='true' aria-haspopup='true'   >
              Categories
              <svg className='px-1 visibility-0' stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>

                <div id='dropdown' className='absolute top-10  bg-white shadow-4xl w-full rounded-xl hidden '>
                  <ul>

                    <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                      <div class="py-1" role="none">

                        {
                          categories?.map((data, index) => (
                            <a key={index} href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0"> {data}</a>
                          ))}

                      </div>
                    </div>

                  </ul>
                </div>
               


            </li>


            <li className='py-0 p-10'>

              Deals
            </li>
            <li className='py-0 p-10'>What&apos;s New</li>
            <li className='py-0 p-10'>Delivery</li>
          </ul>
        </div>
        <form method="GET">
          <div class="relative text-gray-600 focus-within:text-gray-400">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </button>
            </span>
            <input type="search" name="q" class="py-2 text-sm text-white border-zinc-300 border-solid border-2 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search..." autocomplete="off" />
          </div>
        </form>
        <div className='flex '>
          <div className='flex mx-12'>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 22h-2v-2a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path></g></svg>
            <p className='mx-2'>Account</p>
          </div>

          <div className='flex'>
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            <p className='mx-2'>Cart</p>
          </div>
        </div>
      </div>
    </>
  )
}
