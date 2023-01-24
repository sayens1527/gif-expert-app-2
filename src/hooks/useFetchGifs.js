import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

    const [gifs, setgifs] = useState([]);  
    const [isLoading, setIsLoading] = useState([]);  

    useEffect(() => {
        getGifs(category).then( (images) => {
            setgifs(images);
            setIsLoading(false);
        });
      }, [category])

    return {
        gifs,
        isLoading
    }
}
