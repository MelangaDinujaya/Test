import React from 'react'
import { DUMMY_PRODUCT } from '../config/constant'

type Props = {
    product: typeof DUMMY_PRODUCT
}

const FrameDetails = (props: Props) => {
    return (
        <div className='p-4 border rounded-2xl relative mt-10'>
            <h1 className='absolute top-0 -translate-y-1/2 -translate-x-1/2 px-5 font-bold left-1/2 bg-white text-4xl'>About the frames</h1>

            <div className='flex flex-col lg:flex-row items-center'>
                <div className='p-10 lg:p-0'>
                    {
                        DUMMY_PRODUCT.frameDetails[0].desc
                    }
                </div>

                <div className='text-center lg:w-1/2 space-y-6'>
                    <h2 className='font-semibold text-2xl'>Made from Acetate</h2>

                    <div className='flex w-full'>
                        <div className='border w-1/2 p-5'>
                            <h3>Frame Fit</h3>
                            {
                                DUMMY_PRODUCT.frameDetails[0].frameFit
                            }
                        </div>
                        <div className='border w-1/2 p-5'>
                            <h3>Measurements</h3>
                            {
                                DUMMY_PRODUCT.frameDetails[0].measurement
                            }
                        </div>
                    </div>
                    <p>{DUMMY_PRODUCT.frameDetails[0].desc}</p>

                    <div className='border border-gray-400 p-5 text-xs'>
                        <p>{
                            DUMMY_PRODUCT.frameDetails[0].desc
                        }
                        </p>
                        <p className='font-semibold'>{DUMMY_PRODUCT.frameDetails[0].desc}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FrameDetails