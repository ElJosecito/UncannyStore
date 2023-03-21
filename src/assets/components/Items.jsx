import React from 'react'

function Items({title, img, price, description, rating}) {
  return (
    <div className='max-w-[15rem] min-h-[20rem] flex flex-col items-start m-5'>
      <div className='w-60 max-h-[20rem] min-h-[20rem] flex justify-center items-center rounded-2xl' >
      <img src={img} alt={title} className="w-full h-full object-contain" />
      </div>
      <h2 className='m-3 mt-5 font-bold max-h-[3rem] min-h-[3rem] overflow-hidden'>
        {title}
      </h2>
      <h4 className='ml-3 font-mono font-normal ' >{`$${price}`}</h4>
    </div>
  )
}

export default Items