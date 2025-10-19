import React from 'react'

type Props = {
    label : string
    path : string
    isActive : boolean
}

const NavLink = (props: Props) => {
  return (
    <a href={props.path} className={`px-4 relative py-2 hover:bg-gray-200 ${props.isActive ? 'active' : ''}`}>{props.label}</a>
  )
}

export default NavLink