import Logo from './Logo'
import NavLink from './NavLink'
import NavOptions from './NavOptions'

const navItems = [
  { label: 'Glasses', path: '/glasses' },
  { label: 'Sunglasses', path: '/sunglasses' },
  { label: 'Locations', path: '/locations' },
  { label: 'Eye Test Info', path: '/eye-test-info' },
  { label: 'Offers', path: '/offers' }
]

const TopNav = () => {
  return (
    <div className='flex items-center justify-between w-full px-5 py-3 bg-blue-700 lg:bg-transparent fixed top-0 left-0 z-50'>
      
      {/* Logo */}
      <Logo />

      {/* Navigation Links */}
      <div className='hidden lg:flex items-center gap-4'>
        {navItems.map((item) => (
          <NavLink key={item.label} label={item.label} path={item.path} isActive={false} />
        ))}
      </div>

      {/* Book an Eye Test Button */}
      <div className='hidden lg:block'>
        <button className='uppercase cursor-pointer text-sm font-semibold bg-white border-blue-700 text-blue-700 border rounded-2xl px-5 py-2'>
          Book an Eye Test
        </button>
      </div>

      {/* Icons */}
      <NavOptions />
    </div>
  )
}

export default TopNav
