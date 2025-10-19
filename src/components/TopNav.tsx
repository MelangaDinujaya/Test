

import { useState } from 'react'
import { NAV_LINKS } from '../config/constant'
import Logo from './Logo'
import NavLink from './NavLink'
import NavOptions from './NavOptions'
import { FiMenu } from 'react-icons/fi'

const TopNav = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='border-b-gray-500 overflow-visible border pt-10 lg:pt-0 flex items-center justify-between px-10 relative'>
            <FiMenu size={24} onClick={() => setOpen(!open)} className='block lg:hidden cursor-pointer' />
            <Logo />
            <div className={`${open ? 'block absolute' : 'hidden lg:relative lg:block'} z-50 bg-white rounded-2xl lg:bg-transparent  bottom-0 translate-y-full lg:translate-y-0 left-0 flex-col lg:flex-row flex`}>
                {
                    NAV_LINKS.map((item, index) => (
                        <NavLink key={index} label={item.label} path={item.path} isActive={index === 0} />
                    ))
                }
            </div>
            <NavOptions />
        </div>
    )
}

export default TopNav