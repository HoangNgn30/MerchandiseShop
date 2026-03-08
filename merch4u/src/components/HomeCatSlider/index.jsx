import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import '../../components/HomeCatSlider/style.css'

const HomeCatSlider = () => {
    return (
        <div className='homeCatSlider'>
            <div className='container'>
                <Swiper
                    slidesPerView={8}
                    spaceBetween={44}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Link to='/' className="">
                            <div className='w-[120px] h-[120px] item py-7 px-3 bg-white rounded-xl text-center flex items-center justify-center flex-col 
                                            border border-gray-100 shadow-sm hover:shadow-md hover:bg-green-50 
                                            transition-all duration-300 ease-in-out cursor-pointer group'>
                                <img src="https://frugivore-bucket.s3.amazonaws.com/media/package/img_one/2021-07-10/Standrad_Banana_WAnKgF3.jpg" 
                                    alt="Category" 
                                    className='w-[70px] object-contain rounded-sm'/>
                                
                                <h3 className='text-[14px] font-medium mt-4 text-gray-600 '>
                                    SechThoi
                                </h3>
                            </div>
                        </Link>
                    </SwiperSlide>



                    <SwiperSlide>
                        <Link to='/' className="">
                            <div className='w-[120px] h-[120px] item py-7 px-3 bg-white rounded-xl text-center flex items-center justify-center flex-col 
                                            border border-gray-100 shadow-sm hover:shadow-md hover:bg-green-50 
                                            transition-all duration-300 ease-in-out cursor-pointer group'>
                                <img src="https://frugivore-bucket.s3.amazonaws.com/media/package/img_one/2021-07-10/Standrad_Banana_WAnKgF3.jpg" 
                                    alt="Category" 
                                    className='w-[70px] object-contain rounded-sm'/>
                                <h3 className='text-[14px] font-medium mt-4 text-gray-600 '>
                                    SechThoi
                                </h3>
                            </div>
                        </Link>
                    </SwiperSlide>



                    <SwiperSlide>
                        <Link to='/' className="">
                            <div className='w-[120px] h-[120px] item py-7 px-3 bg-white rounded-xl text-center flex items-center justify-center flex-col 
                                            border border-gray-100 shadow-sm hover:shadow-md hover:bg-green-50 
                                            transition-all duration-300 ease-in-out cursor-pointer group'>
                                <img src="https://frugivore-bucket.s3.amazonaws.com/media/package/img_one/2021-07-10/Standrad_Banana_WAnKgF3.jpg" 
                                    alt="Category" 
                                    className='w-[70px] object-contain rounded-sm'/>
                                <h3 className='text-[14px] font-medium mt-4 text-gray-600 '>
                                    SechThoi
                                </h3>
                            </div>
                        </Link>
                    </SwiperSlide>




                    <SwiperSlide>
                        <Link to='/' className="">
                            <div className='w-[120px] h-[120px] item py-7 px-3 bg-white rounded-xl text-center flex items-center justify-center flex-col 
                                            border border-gray-100 shadow-sm hover:shadow-md hover:bg-green-50 
                                            transition-all duration-300 ease-in-out cursor-pointer group'>
                                <img src="https://frugivore-bucket.s3.amazonaws.com/media/package/img_one/2021-07-10/Standrad_Banana_WAnKgF3.jpg" 
                                    alt="Category" 
                                    className='w-[70px] object-contain rounded-sm'/>
                                <h3 className='text-[14px] font-medium mt-4 text-gray-600 '>
                                    SechThoi
                                </h3>
                            </div>
                        </Link>
                    </SwiperSlide>



                    <SwiperSlide>
                        <Link to='/' className="">
                            <div className='w-[120px] h-[120px] item py-7 px-3 bg-white rounded-xl text-center flex items-center justify-center flex-col 
                                            border border-gray-100 shadow-sm hover:shadow-md hover:bg-green-50 
                                            transition-all duration-300 ease-in-out cursor-pointer group'>
                                <img src="https://frugivore-bucket.s3.amazonaws.com/media/package/img_one/2021-07-10/Standrad_Banana_WAnKgF3.jpg" 
                                    alt="Category" 
                                    className='w-[70px] object-contain rounded-sm'/>
                                <h3 className='text-[14px] font-medium mt-4 text-gray-600 '>
                                    SechThoi
                                </h3>
                            </div>
                        </Link>
                    </SwiperSlide>





                    <SwiperSlide>
                        <Link to='/' className="">
                            <div className='w-[120px] h-[120px] item py-7 px-3 bg-white rounded-xl text-center flex items-center justify-center flex-col 
                                            border border-gray-100 shadow-sm hover:shadow-md hover:bg-green-50 
                                            transition-all duration-300 ease-in-out cursor-pointer group'>
                                <img src="https://frugivore-bucket.s3.amazonaws.com/media/package/img_one/2021-07-10/Standrad_Banana_WAnKgF3.jpg" 
                                    alt="Category" 
                                    className='w-[70px] object-contain rounded-sm'/>
                                <h3 className='text-[14px] font-medium mt-4 text-gray-600 '>
                                    SechThoi
                                </h3>
                            </div>
                        </Link>
                    </SwiperSlide>




                    <SwiperSlide>
                        <Link to='/' className="">
                            <div className='w-[120px] h-[120px] item py-7 px-3 bg-white rounded-xl text-center flex items-center justify-center flex-col 
                                            border border-gray-100 shadow-sm hover:shadow-md hover:bg-green-50 
                                            transition-all duration-300 ease-in-out cursor-pointer group'>
                                <img src="https://frugivore-bucket.s3.amazonaws.com/media/package/img_one/2021-07-10/Standrad_Banana_WAnKgF3.jpg" 
                                    alt="Category" 
                                    className='w-[70px] object-contain rounded-sm'/>
                                <h3 className='text-[14px] font-medium mt-4 text-gray-600 '>
                                    SechThoi
                                </h3>
                            </div>
                        </Link>
                    </SwiperSlide>




                    <SwiperSlide>
                        <Link to='/' className="">
                            <div className='w-[120px] h-[120px] item py-7 px-3 bg-white rounded-xl text-center flex items-center justify-center flex-col 
                                            border border-gray-100 shadow-sm hover:shadow-md hover:bg-green-50 
                                            transition-all duration-300 ease-in-out cursor-pointer group'>
                                <img src="https://frugivore-bucket.s3.amazonaws.com/media/package/img_one/2021-07-10/Standrad_Banana_WAnKgF3.jpg" 
                                    alt="Category" 
                                    className='w-[70px] object-contain rounded-sm'/>
                                <h3 className='text-[14px] font-medium mt-4 text-gray-600 '>
                                    SechThoi
                                </h3>
                            </div>
                        </Link>
                    </SwiperSlide>





                    <SwiperSlide>
                        <Link to='/' className="">
                            <div className='w-[120px] h-[120px] item py-7 px-3 bg-white rounded-xl text-center flex items-center justify-center flex-col 
                                            border border-gray-100 shadow-sm hover:shadow-md hover:bg-green-50 
                                            transition-all duration-300 ease-in-out cursor-pointer group'>
                                <img src="https://frugivore-bucket.s3.amazonaws.com/media/package/img_one/2021-07-10/Standrad_Banana_WAnKgF3.jpg" 
                                    alt="Category" 
                                    className='w-[70px] object-contain rounded-sm'/>
                                <h3 className='text-[14px] font-medium mt-4 text-gray-600 '>
                                    SechThoi
                                </h3>
                            </div>
                        </Link>
                    </SwiperSlide>





                    <SwiperSlide>
                        <Link to='/' className="">
                            <div className='w-[120px] h-[120px] item py-7 px-3 bg-white rounded-xl text-center flex items-center justify-center flex-col 
                                            border border-gray-100 shadow-sm hover:shadow-md hover:bg-green-50 
                                            transition-all duration-300 ease-in-out cursor-pointer group'>
                                <img src="https://frugivore-bucket.s3.amazonaws.com/media/package/img_one/2021-07-10/Standrad_Banana_WAnKgF3.jpg" 
                                    alt="Category" 
                                    className='w-[70px] object-contain rounded-sm'/>
                                <h3 className='text-[14px] font-medium mt-4 text-gray-600 '>
                                    SechThoi
                                </h3>
                            </div>
                        </Link>
                    </SwiperSlide>





                    <SwiperSlide>
                        <Link to='/' className="">
                            <div className='w-[120px] h-[120px] item py-7 px-3 bg-white rounded-xl text-center flex items-center justify-center flex-col 
                                            border border-gray-100 shadow-sm hover:shadow-md hover:bg-green-50 
                                            transition-all duration-300 ease-in-out cursor-pointer group'>
                                <img src="https://frugivore-bucket.s3.amazonaws.com/media/package/img_one/2021-07-10/Standrad_Banana_WAnKgF3.jpg" 
                                    alt="Category" 
                                    className='w-[70px] object-contain rounded-sm'/>
                                <h3 className='text-[14px] font-medium mt-4 text-gray-600 '>
                                    SechThoi
                                </h3>
                            </div>
                        </Link>
                    </SwiperSlide>





                    <SwiperSlide>
                        <Link to='/' className="">
                            <div className='w-[120px] h-[120px] item py-7 px-3 bg-white rounded-xl text-center flex items-center justify-center flex-col 
                                            border border-gray-100 shadow-sm hover:shadow-md hover:bg-green-50 
                                            transition-all duration-300 ease-in-out cursor-pointer group'>
                                <img src="https://frugivore-bucket.s3.amazonaws.com/media/package/img_one/2021-07-10/Standrad_Banana_WAnKgF3.jpg" 
                                    alt="Category" 
                                    className='w-[70px] object-contain rounded-sm'/>
                                <h3 className='text-[14px] font-medium mt-4 text-gray-600 '>
                                    SechThoi
                                </h3>
                            </div>
                        </Link>
                    </SwiperSlide>




                    <SwiperSlide>
                        <Link to='/' className="">
                            <div className='w-[120px] h-[120px] item py-7 px-3 bg-white rounded-xl text-center flex items-center justify-center flex-col 
                                            border border-gray-100 shadow-sm hover:shadow-md hover:bg-green-50 
                                            transition-all duration-300 ease-in-out cursor-pointer group'>
                                <img src="https://frugivore-bucket.s3.amazonaws.com/media/package/img_one/2021-07-10/Standrad_Banana_WAnKgF3.jpg" 
                                    alt="Category" 
                                    className='w-[70px] object-contain rounded-sm'/>
                                <h3 className='text-[14px] font-medium mt-4 text-gray-600 '>
                                    SechThoi
                                </h3>
                            </div>
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default HomeCatSlider;