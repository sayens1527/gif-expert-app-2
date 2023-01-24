import React, { useEffect, useState } from 'react'

export const GifSearch = ({addCategoryFn}) => {


    const [inputValue, setInputValue] = useState('');

    const handleChange = ( {target} ) => {
        setInputValue(target.value);
    };

    const handleAdd = (e) => {
        e.preventDefault();
        inputValue.length >= 1 && addCategoryFn(inputValue),setInputValue('');
    }


  return (
    <>
        <form onSubmit={handleAdd}>
            <input 
                type="text" 
                value={inputValue}
                placeholder="Enter a new category" 
                onChange={handleChange} />
         </form>
    </>
  )
}
