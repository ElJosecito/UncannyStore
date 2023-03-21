import React from 'react'

function Header() {
  return (
    <div className='flex items-center justify-between w-full h-16  pl-10 pr-10 z-50 fixed'>
        <h2 className='text-2xl font-extrabold '>Uncanny</h2>
        <ul className='w-80 flex items-center justify-between text-base font-bold '>
            <li>Home</li>
            <li>Products</li>
            <li>Categories</li>
        </ul>

        <div className='text-base font-bold'>
            <button className='bg-slate-100 m-1 p-2 pl-5 pr-5 rounded-md'>Login</button>
            <button className='bg-blue-600 text-slate-100 m-1 p-2 pl-5 pr-5 rounded-md'>Register</button>
        </div>
    </div>
  )
}

export default Header