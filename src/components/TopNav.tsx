import NavOptions from './NavOptions'

const TopNav = () => {
  return (
    <div className='flex items-center justify-between w-full px-5 py-1 bg-blue-700 lg:bg-transparent lg:relative fixed top-0 left-0 z-50'>
      <button className='uppercase cursor-pointer text-sm font-semibold bg-white border-blue-700 text-blue-700 border rounded-2xl px-10 py-1'>
        Book an eye test
      </button>

      {/* Nav options (search, user, Instagram) */}
      <NavOptions />
    </div>
  )
}

export default TopNav
