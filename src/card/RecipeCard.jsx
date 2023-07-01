import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineDelete } from 'react-icons/ai';
import { AiOutlineEdit } from 'react-icons/ai';
import EditModal from '../Components/EditModal';

export default function RecipeCard({ item }) {
    const [edit, setEdit] = useState(false)

    const onClose = () => {
        setEdit(!edit)
    };

    return (
        <div>
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
        </div>
    )
}
