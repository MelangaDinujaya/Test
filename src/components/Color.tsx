type Props = {
  onChange: (col: string) => void
  isActive: boolean
  color: string
}

const Color = ({ onChange, isActive, color }: Props) => {
  return (
    <div
      onClick={() => onChange(color)}
      className={`cursor-pointer border ${isActive ? 'border-gray-500' : 'border-gray-300'} w-fit p-1 rounded-full`}
    >
      <div className='w-6 h-6 rounded-full' style={{ backgroundColor: color }}></div>
    </div>
  )
}

export default Color
