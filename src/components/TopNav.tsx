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
    <div className='flex items-center justify-between w-full px-5 py-1 bg-blue-700 lg:bg-transparent lg:relative fixed top-0 left-0 z-50'>
      
      {/* Book an eye test button */}
      <button className='uppercase cursor-pointer text-sm font-semibold bg-white border-blue-700 text-blue-700 border rounded-2xl px-10 py-1'>
        Book an eye test
      </button>

      {/* Navigation links */}
      <div className='hidden lg:flex items-center gap-4'>
        {navItems.map((item) => (
          <NavLink key={item.label} label={item.label} path={item.path} isActive={false} />
        ))}
      </div>

      {/* Icons */}
      <NavOptions />
    </div>
  )
}

export default TopNav
