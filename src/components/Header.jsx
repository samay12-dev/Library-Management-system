import React from 'react'
import "./Styles/Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-gradient-to-r from-[#0B2C5F] to-[#1E3A6D] text-white p-6 items-center hover: border-b-2 hover:border-white">
      <h2 className="text-2xl font-semibold">MyLibrary</h2>
      <ul className="flex gap-6 items-center">
        <li className='text-xl'>
          <Link to={'/'} className="link">AddItem</Link>
        </li>
        <li className='text-xl'>
          <Link to={'/about'} className="link">AboutUs</Link>
        </li>
        <li className='text-xl'>
          <Link to={'/library'} className="link">Library</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
