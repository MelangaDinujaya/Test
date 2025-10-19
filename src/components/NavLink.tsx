type Props = {
  label: string
  path: string
  isActive: boolean
}

const NavLink = ({ label, path, isActive }: Props) => {
  return (
    <a
      href={path}
      className={`px-4 relative py-2 hover:bg-gray-200 ${isActive ? 'active' : ''}`}
    >
      {label}
    </a>
  )
}

export default NavLink
