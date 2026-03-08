import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import "../../index.css";
import "./style.css";


const HomeSlider = () => {
    return (
        <div className='homeSlider pt-4 py-8 '>
            <div className='container'>
                <Swiper spaceBetween={10} autoplay={{ delay: 2000, disableOnInteraction: false,}} navigation={true} modules={[Navigation, Autoplay]} className="sliderHome">
                    <SwiperSlide>
                        <div className='item rounded-[20px] overflow-hidden '>
                            <img src="..\src\assets\Home Banner\img4.png" alt="Banner slide" className='w-full h-[400px] object-cover'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item rounded-[20px] overflow-hidden '>
                            <img src="..\src\assets\Home Banner\img3.jpg" alt="Banner slide" className='w-full h-[400px] object-cover'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item rounded-[20px] overflow-hidden'>
                            <img src="..\src\assets\Home Banner\img5.jpg" alt="Banner slide" className='w-full h-[400px] object-cover'/>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default HomeSlider;