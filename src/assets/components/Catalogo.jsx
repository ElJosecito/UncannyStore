import React from 'react'
import Items from './Items'

function Catalogo({data}) {




  return (
    <>
        <section className='flex'>
        {
       data.map((respon) => {
        return (<Items key={respon.id} title={respon.title} description={respon.description} rating={respon.rating.rate} img={respon.image} price={respon.price} />)
      })
      } 
        </section>
    </>
  )
}

export default Catalogo