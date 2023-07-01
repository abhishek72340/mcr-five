
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { recipes } from '../DB'
import { AiOutlineDelete } from 'react-icons/ai';
import { AiOutlineEdit } from 'react-icons/ai';
import EditModal from '../Components/EditModal';
import AddModal from '../Components/AddModal';
const [add, setAdd] = useState(false)

export default function Home() {
    const [edit, setEdit] = useState(false)
   
    const [filterProduct, setFilterProduct] = useState(recipes)

    const onClose = () => {
        setEdit(!edit)
    };

    const addHandler=()=>{
        setAdd(!add);
    }
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
                    {
                        filterProduct.map((item) => {
                            return (
                                <div key={item.id} className='flex justify-center flex-col'>
                                    <span className='flex justify-end gap-5 text-2xl cursor-pointer'>
                                        <span onClick={onClose}><AiOutlineEdit /></span>
                                        {edit ? <EditModal onClose={onClose} /> : null}
                                        <span onClick={() => deleteItem(item.id)}><AiOutlineDelete /></span>
                                    </span>
                                    <Link to={`/single/${item.id}`}><img src={item.mediaUrl} alt="" width='300px' /></Link>
                                    <h1 className='font-bold flex justify-center'>{item.recipeName}</h1>
                                    <span className='flex justify-around'><p>Cusine Type:</p> <p>{item.cuisineType}</p></span>
                                    <p className='flex justify-around'><span>Ingredients:</span>
                                        <details>
                                            <summary>See Recipes</summary>
                                            {item.ingredients.map(ingr => <p>{ingr}</p>)}
                                        </details>
                                    </p>

                                    <p className='flex justify-around'> <span >Instruction:</span>
                                        <details>
                                            <summary>See Recipes</summary>
                                            {item.Instructions.map(ins => <p >{ins}</p>)}
                                        </details>
                                    </p>

                                </div>

                            )
                        })
                    }
                    <span className='m-20 text-white ' onClick={addHandler}><div className='w-10 h-10 bg-green-500 flex justify-center items-center text-4xl font-bold rounded-full cursor-pointer'>+</div></span>
                    {add?<AddModal/>:null}

                </div>

            </div>
        </div>
    )
}
