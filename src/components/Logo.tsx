import React from 'react'
import logo from '../assets/OW-Logo-RGB.svg'

const Logo = () => {
    return (
        <div className='w-3/4 md:py-5 lg:w-60 h-17 px-5'>
            <img src={logo} alt='logo' className='w-full h-full object-contain' />
        </div>
    )
}

export default Logo