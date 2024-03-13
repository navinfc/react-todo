import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-violet-400 text-black py-4'>
        <div className="logo">
            <span className='text-xl mx-9 cursor-pointer hover:font-bold transition-all duration-50 hover:text-green-500'>myTask</span>
        </div>
        <ul className="flex gap-8 mx-9">
            <li className='cursor-pointer hover:font-bold hover:text-green-500 transition-all duration-50'>Home</li>
            <li className='cursor-pointer hover:font-bold hover:text-green-500 transition-all duration-50'>Your Task</li>
        </ul>
    </nav>
  )
}

export default Navbar