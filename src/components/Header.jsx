import React from 'react'
import Logo from '../assets/img/logo.svg'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <header className='py-6 mb-12 border-b '>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/'><img src={Logo} alt="" /></Link>
        <div className='flex items-center gap-6'>
            <Link to='hover:text-violet-900' className='hover:text-violet-900 transition'>Log in</Link>
            <Link to='' className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition'>Sign up</Link>
        </div>
      </div>
    </header>
  )
}

export default Header
