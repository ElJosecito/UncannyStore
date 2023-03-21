import React from 'react'

function Items({title, img, price, description, rating}) {
  return (
    <div>
      <img src={img} alt={title} />
      <h2>
        {price}
      </h2>
      <p>{description}</p>
      <h4>{rating}</h4>
    </div>
  )
}

export default Items