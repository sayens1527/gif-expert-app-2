import React, { useState } from 'react'
import { GifGrid } from './components/gifs/GifGrid';
import { GifSearch } from './components/gifs/GifSearch';

export const GiifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch']);

    const onAddCategory = (categoryName) => {
        const exists = categories.some(e => e.toLocaleLowerCase() ===  categoryName.toLocaleLowerCase());
        !exists && setCategories([categoryName,...categories]);
    }

  return (
    <>
        <h1>GiifExpertApp</h1>

        <GifSearch addCategoryFn = {onAddCategory}/>
            
        {
            categories.map(c => (<GifGrid key={c} category={c}/>))
        }
            
    </>
  )
}
