import React from 'react'

function HeaderLogged() {
  return (
    <div className='flex items-center justify-between w-full h-16  pl-10 pr-10 z-50 fixed bg-white'>
        <h2 className='text-2xl font-extrabold'>Uncanny</h2>
        
        <ul className='w-80 justify-between text-base font-bold hidden lg:flex h-16 items-end pb-2'>
            <li>Home</li>
            <li>Products</li>
            <li>Categories</li>
        </ul>

        <div className='text-base font-bold lg:flex hidden h-16 items-end pb-2'>
            <div className='bg-blue-600 m-1 mb-0 p-2 pl-5 pr-5 rounded-full h-12 w-12 flex justify-center items-center'>
                <p className='text-white font-sans font-bold text-2xl'>J</p>
            </div>
        </div>

        <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
    </div>
  )
}

export default HeaderLogged