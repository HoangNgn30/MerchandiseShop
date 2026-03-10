import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ProductZoom from '../../components/ProductZoom';

const ProductDetails = () => {
    return (
        <>
            <div className='py-5!'>
                <div className='container '>
                    <Breadcrumbs aria-label="breadcrumb" className='ml-3!'>
                        <Link underline="hover" color="inherit" href="/" className='link transition text-[14px]!'>
                        Home
                        </Link>
                        <Link
                        underline="hover"
                        color="inherit"
                        href="/"
                        className='link transition text-[14px]!'
                        >
                        Fashion
                        </Link>
                        <Link
                        underline="hover"
                        color="inherit"
                        className='link transition text-[14px]!'
                        >
                        Dragon Pony - 3rd EP Album [RUN RUN RUN] (RED Ver.)
                        </Link>
                    </Breadcrumbs>
                </div>
            </div>



            <section className='bg-white py-5!'>
                <div className='container flex gap-4'>
                    <div className='productZoomContainer w-[40%]'>
                        <ProductZoom/>
                    </div>


                    <div className='productContent w-[60%]'>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetails;
