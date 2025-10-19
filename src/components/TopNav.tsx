import Logo from './Logo'
import { useState } from 'react'

const TopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className='w-full'>
      {/* Top blue bar with centered button */}
      <div className='bg-blue-700 text-center py-2'>
        <button className='uppercase cursor-pointer text-sm font-semibold bg-white text-blue-700 border border-blue-700 rounded-2xl px-6 py-1'>
          Book an Eye Test
        </button>
      </div>

      {/* Main nav for mobile */}
      <div className='flex items-center justify-between px-4 py-3 lg:hidden bg-white shadow'>
        {/* Hamburger icon */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='text-gray-700 focus:outline-none'
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>

        {/* Logo */}
        <div className='flex-1 flex justify-center'>
          <Logo />
        </div>

        {/* Cart icon */}
        <button className='text-gray-700'>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8H19M7 13h10M16 21a1 1 0 11-2 0 1 1 0 012 0zm-8 0a1 1 0 11-2 0 1 1 0 012 0z'
            />
          </svg>
        </button>
      </div>

      {/* Optional mobile menu */}
      {isMenuOpen && (
        <nav className='lg:hidden bg-white shadow-md'>
          <ul className='flex flex-col items-center gap-4 py-4'>
            <li><a href='#' className='text-gray-700'>Glasses</a></li>
            <li><a href='#' className='text-gray-700'>Sunglasses</a></li>
            <li><a href='#' className='text-gray-700'>Locations</a></li>
            <li><a href='#' className='text-gray-700'>Eye Test Info</a></li>
            <li><a href='#' className='text-gray-700'>Offers</a></li>
          </ul>
        </nav>
      )}

      {/* Desktop nav (hidden on mobile) */}
      <div className='hidden lg:flex items-center justify-between px-10 py-5'>
        <Logo />
        <div className='flex gap-6'>
          <a href='#' className='hover:text-blue-700'>Glasses</a>
          <a href='#' className='hover:text-blue-700'>Sunglasses</a>
          <a href='#' className='hover:text-blue-700'>Locations</a>
          <a href='#' className='hover:text-blue-700'>Eye Test Info</a>
          <a href='#' className='hover:text-blue-700'>Offers</a>
        </div>
        <div className='flex items-center gap-4'>
          <button className='uppercase cursor-pointer text-sm font-semibold bg-white text-blue-700 border border-blue-700 rounded-2xl px-6 py-1'>
            Book an Eye Test
          </button>
          <img
            className='w-6 h-6'
            src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-shop-icon.png'
            alt='cart'
          />
        </div>
      </div>
    </header>
  )
}

export default TopNav
