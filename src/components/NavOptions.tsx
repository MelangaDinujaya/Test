const NavOptions = () => {
  return (
    <div className='flex items-center justify-center gap-2 cursor-pointer'>
      <img
        className='w-6 h-6 hidden lg:block'
        src='https://www.iconpacks.net/icons/1/free-search-icon-957-thumb.png'
        alt='search'
      />
      <img
        className='w-6 h-6 hidden lg:block'
        src='https://static.vecteezy.com/system/resources/previews/020/911/736/non_2x/profile-icon-user-icon-person-icon-free-png.png'
        alt='user'
      />
      <img
        className='w-6 h-6'
        src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-shop-icon.png'
        alt='instagram'
      />
    </div>
  )
}

export default NavOptions
