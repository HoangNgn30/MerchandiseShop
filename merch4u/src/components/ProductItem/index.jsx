import React from 'react'
import "../ProductItem/style.css";
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import { FaRegHeart } from "react-icons/fa";
import { LuGitCompareArrows } from "react-icons/lu";
import { MdZoomOutMap } from "react-icons/md";


const ProductItem = () => {
    return (
        <div className='productItem shadow-lg rounded-md overflow-hidden border border-[rgba(0,0,0,0.1)] '>
            <div className='group imgWraper w-full  rounded-md relative'>
                <div className='img h-[220px] overflow-hidden'>
                    <img src="https://media.ktown4u.com/products/resize/thumbnail/2026/02/13/XfAvHd.jpg" alt="" className='w-full aspect-square object-cover'/>


                    <img src="https://choicemusicla.com/cdn/shop/files/BLACKPINK_3rd_Mini_Album_-_DEADLINE_Silver_Ver._Cover_ROSE.webp?v=1771348896&width=800" alt="" className='w-full aspect-square object-cover transition-all duration-700 absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-105'/>
                </div>

                <span className='discount flex items-center absolute top-[10px] left-[10px] z-50 bg-primary text-white rounded-lg p-1! text-[12px] font-medium'>10%</span>


                <div className='actions absolute top-[-200px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px] transition-all duration-300 group-hover:top-[15px] opacity-0 group-hover:opacity-100'>
                    <Button className='w-[35px]! h-[35px]! min-w-[35px]! rounded-full! bg-white! text-black  hover:bg-primary! hover:text-white group'>
                        <MdZoomOutMap className='text-[18px] text-black! group-hover:text-white hover:text-white! '/>
                    </Button>


                    <Button className='w-[35px]! h-[35px]! min-w-[35px]! rounded-full! text-black! bg-white! hover:bg-primary! hover:text-white! group'>
                        <LuGitCompareArrows className='text-[18px] text-black! group-hover:text-white hover:text-white! '/>
                    </Button>


                    <Button className='w-[35px]! h-[35px]! min-w-[35px]! rounded-full! text-black! bg-white! hover:bg-primary! hover:text-white! group'>
                        <FaRegHeart className='text-[18px] text-black! group-hover:text-white hover:text-white! '/>
                    </Button>
                </div>
            </div>

            <div className='infor p-3! py-5!'>
                <h6 className='text-[13px]'>
                    <Link to='/' className='link transition-all'>Youngjae</Link>
                </h6>
                <h3 className='text-[13px] title mt-1! font-medium mb-1! text-black'>
                    <Link to='/' className='link transition-all'>YOUNGJAE - 2024 WELCOMING KIT [BRUNCH TIME]</Link>
                </h3>

                <Rating name="size-small" defaultValue={4} size="small" readOnly />


                <div className='flex items-center gap-4'>
                    <span className='oldPrice line-through text-gray-500 text-[15px] font-medium'>$50.00</span>
                    <span className='price text-primary text-[15px] font-semibold'>$32.68</span>
                </div>

            </div>
        </div>
    )
}

export default ProductItem;