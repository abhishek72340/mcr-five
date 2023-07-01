import React from 'react'
import { recipes } from '../DB';
import {useParams} from 'react-router-dom';
export default function SinglePage() {
   
    const {id}=useParams();
    const singleProduct=recipes.find(single=>single.id===Number(id))
  return (
    <div>
        <h1 className=' text-2xl flex justify-center mt-3'>{singleProduct?.recipeName}</h1>

        <div className='flex justify-center mt-10'>
        <div className='w-96 h-100 bg-gray-200 shadow-md'>
          <img src={singleProduct.mediaUrl} alt="img" />
          <h2>Cusine: {singleProduct.cuisineType}</h2>
          <span className='text-sm'>Ingredients: {singleProduct.ingredients.map(item=>item)}</span>
          <h2 className='text-xl font-bold'>Instruction:</h2>
          <p className='text-sm'>{singleProduct.Instructions.map(item=><p>{item}</p>)}</p>
        </div>
        </div>
    </div>
  )
}
