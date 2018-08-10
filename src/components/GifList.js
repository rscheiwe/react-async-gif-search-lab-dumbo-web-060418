import React from 'react'

const GifList = (props) => {
  
  const gifList = props.gifs.map((gif) => {
    return <img src={gif.images.fixed_height.url} alt={gif.id} />

  })
  return (
    <div>
    {gifList}
    </div>
  )
}


export default GifList
