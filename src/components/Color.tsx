
type Props = {
    onChange : (col: string) => void
    isActive : boolean
    color : string
}

const Color = (props: Props) => {
    return (
        <div onClick={() => props.onChange(props.color)} className={`cursor-pointer border ${props.isActive ? ' border-gray-500' : 'border-gray-300'} w-fit p-1 rounded-full`}>
            <div className='w-6 h-6 rounded-full' style={{ backgroundColor: props.color }}></div>
        </div>
    )
}


export default Color
