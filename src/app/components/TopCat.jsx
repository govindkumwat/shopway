import React from 'react'


async function fetchCategories() {
    const response = await fetch(`https://fakestoreapi.com/products/categories`)
    const categories = await response.json();
    return categories;
}

const TopCat = async () => {

    const categories = await fetchCategories()

    


  return (
    <div className='text-black flex m-auto items-center justify-center justify-around mt-2'>{
        categories.map((data, index) => {
            return(
            <p  key={index}>{data}</p>
            )
        })
    }</div>
  )
}

export default TopCat