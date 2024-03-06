import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-gray-800 text-white p-2'>
        <div className="logo">
            <span className='font-bold text-xl mx-8'>iTask</span>
        </div>
        <ul className='flex gap-6 mx-9'>
            <li className='cursor-pointer hover:font-bold transition-all duration-200' >Home</li>
            <li className='cursor-pointer hover:font-bold transition-all duration-200'>Your Task</li>
        </ul>
    </nav>
  )
}

export default Navbar
