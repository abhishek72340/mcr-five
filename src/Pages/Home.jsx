import React, { useState } from 'react'
import { recipes } from '../DB'
import AddModal from '../Components/AddModal';
import Card from '../card/RecipeCard';
import RecipeCard from '../card/RecipeCard';


export default function Home() {
    // const [add, setAdd] = useState(false)

    const [filterProduct, setFilterProduct] = useState(recipes)

    
    // const addHandler = () => {
    //     setAdd(!add);
    // }
    const deleteItem = (id) => {
        const deleteProduct = recipes.filter(product => product.id !== id);
        setFilterProduct(deleteProduct)
    };

    return (
        <div>
            <div>

                <nav className='w-100 bg-green-500 h-10 m-5  shadow-xl flex justify-center items-center gap-5'>
                    <input type="text" placeholder='search item' className='w-90 h-7 border-solid border-2 border-black-500 outline-none' style={{ width: '17rem' }} />

                    <div className='flex gap-2'>
                        <span className='font-bold'>Filters:</span>
                        <input type="radio" name='search' clicked />Name
                        <input type="radio" name='search' />Ingredients
                        <input type="radio" name='search' />Cusine
                    </div>
                </nav>
                <span className='text-2xl font-bold m-4'>All Recipies:</span>

                <div className='flex flex-wrap  m-10 gap-4'>
                    {filterProduct.map((item) => <RecipeCard item={item} />)}
                    <span className='m-20 text-white ' ><div className='w-10 h-10 bg-green-500 flex justify-center items-center text-4xl font-bold rounded-full cursor-pointer'>+</div></span>
                    {/* {add ? <AddModal /> : null} */}

                </div>

            </div>
        </div>
    )
}
