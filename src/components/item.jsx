import React from 'react'

const Item = ({key,name,image,new_price,old_price}) => {
  return (
    <div className='shadow-md rounded-xl hover:scale-105 duration-300' key={key}>
    <img className='w-full rounded-t-xl filter grayscale  object-cover' src={image} />
    <div className='p-3'>
    <h2>{name}</h2>
    <p className='line-through text-green-600'>{old_price}</p>
    <p>{new_price}$</p>
    </div>
    </div>
  )
}

export default Item