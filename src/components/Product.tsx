
import type { DUMMY_PRODUCT } from '../config/constant'
import Color from './Color'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


type Props = {
    product: typeof DUMMY_PRODUCT
}

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Product = (props: Props) => {
    const [selectedColor, setSelectedColor] = React.useState(props.product.colors[0].color)
    return (
        <div className='flex items-center justify-center gap-2 flex-col lg:flex-row'>
            {/* Product carasoul */}
            <Carousel responsive={responsive} className='w-full lg:w-2/3'>
                {
                    props.product.images.map((image, index) => (
                        <div className='w-full'>
                            <img key={index} src={image} alt="" className='min-w-[400px] w-full h-full object-contain' />
                        </div>

                    ))
                }
            </Carousel>

            {/* Product Info */}

            <div className='w-full lg:w-1/3'>
                <div className='py-4'>
                    <h2 className='text-xl font-semibold'>{props.product.title}</h2>
                    <p>{props.product.desc}</p>
                    <hr />
                    {/* Color palette */}
                    <h2 className='font-semibold capitalize text-2xl mt-5'>{props.product.colors?.find((color) => color.color === selectedColor)?.label}</h2>
                    <div className='flex flex-wrap gap-4 max-w-72 mt-5'>
                        {
                            props.product.colors.map((color, index) => (
                                <Color key={index} color={color.color} onChange={(color) => setSelectedColor(color)} isActive={color.color === selectedColor} />
                            ))
                        }
                    </div>
                    <h5 className='mt-2 capitalize'>Color : {props.product.colors?.find((color) => color.color === selectedColor)?.label}</h5>
                </div>
                <hr />
                <div className='text-right'>
                    <h2 className='font-semibold text-2xl mt-5'>From : ${props.product.price}</h2>
                    <p className='text-xs'>Or ZIP it from $10/week with ZIP</p>

                    <div className='flex flex-col mt-5 gap-2'>
                        <button className='cursor-pointer hover:opacity-50 px-5 py-2 border bg-black text-white'>Prescription</button>
                        <button className='cursor-pointer hover:opacity-50 px-5 py-2 border'>Book an Eye test</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Product
