import React from 'react'
import { FaRegClock } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

const BlogItem = () => {
  return (
    <div className='blogItem group'>
      <div className='imgWrapper w-full overflow-hidden rounded-md cursor-pointer relative'>
        <img src="https://www.allkpop.com/upload/2026/03/content/071352/1772909554-image.png" className='w-full transition-all group-hover:scale-105 group-hover:rotate-1' alt="blog image"/>

        <span className='flex items-center justify-center text-white absolute bottom-3.75 right-3.75 z-50 bg-primary rounded-md p-1! text-[11px] font-medium gap-1'>
          <FaRegClock className='text-[16px]'/> 5 April, 2026
        </span>
      </div>

      <div className='info py-4!'>
        <h2 className='text-[15px]  font-semibold text-black'>
          <Link className='link'>GIRLSET unveils their official fandom name</Link>
        </h2>
        <p className='text-[13px]  font-normal text-[rgba(0,0,0,0.8)] mb-4!'>On March 7, GIRLSET announced that their fans will officially be called LOCKETS ...</p>

        <Link  className='link font-medium  text-[14px] flex items-center gap-1'>Read more <IoIosArrowForward/> </Link>
      </div>
    </div>
  )
}
export default BlogItem;

