import React from 'react'
import { useFetchGifs } from '../../hooks/useFetchGifs';

import { GifCard } from './GifCard';

export const GifGrid = ({category}) => {



  const { gifs, isLoading } = useFetchGifs(category);

  

  return (
    <div>
      <h3>{category}</h3>
      {
        isLoading && <h2>Cargando.....</h2>
      }
      <div className='card-grid'>
        {
          gifs.map(g => (
            <GifCard key={g.id} image={g}/>
          ))
        }
      </div>


    </div> 
  )
}

