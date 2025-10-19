
const NavOptions = () => {
    return (
        <div className='flex items-center justify-center gap-5'>
            <div className='fixed bg-blue-700 lg:bg-transparent lg:relative w-full top-0 left-0 text-center py-1'>
                <button className='uppercase cursor-pointer text-sm font-semibold bg-white border-blue-700 text-blue-700 border rounded-2xl px-10 py-1'>Book an eye test</button>
            </div>

            <div className='flex items-center justify-center gap-2 cursor-pointer'>
                <img className='w-6 h-6 hidden lg:block' src="https://www.iconpacks.net/icons/1/free-search-icon-957-thumb.png" alt="" />
                <img className='w-6 h-6 hidden lg:block' src="https://static.vecteezy.com/system/resources/previews/020/911/736/non_2x/profile-icon-user-icon-person-icon-free-png.png" alt="" />
                <img className='w-6 h-6' src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-shop-icon.png" alt="" />
            </div>
        </div>
    )
}


export default NavOptions
