import React from 'react'

export const GifCard = ({image}) => {
  return (
    <div>
        <h4>{image.title}</h4>
        <img src={image.url}/>
    </div>
  )
}
