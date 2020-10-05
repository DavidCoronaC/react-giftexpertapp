import React, {useState} from 'react'
import CategoriesAdd from './components/CategoriesAdd'
import GifGrid from './components/GifGrid'

const GiftExpertApp = () => {

    // const categories = ['Naruto', 'Dragon ball', 'Pokemon']

    const [categories, setCategories] = useState(['Naruto'])

    // const handleAdd = () => {
    //     setCategories([
    //         ...categories,
    //         'Pikachu'
    //     ])
    // }
    return (
        <>
            <h2>GiftExpertApp</h2>
            <CategoriesAdd setCategories={ setCategories } />
            <hr/>
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {
                    categories.map( data => (
                    <GifGrid key={data} category={data}/>
                    ))
                }
            </ol>
        </>
    )
}

export default GiftExpertApp
