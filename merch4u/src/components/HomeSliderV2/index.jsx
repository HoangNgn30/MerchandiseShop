import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../../index.css'

import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

import Button from '@mui/material/Button';
import '../../index.css'


const HomeBannerV2 = () => {
    return (
        <Swiper
            loop={true}
            spaceBetween={30}
            effect={'fade'}
            fadeEffect={{ crossFade: true }}
            navigation={true}
            pagination={{
            clickable: true,
            }}
            autoplay={{ delay: 2500, disableOnInteraction: false,}}
            modules={[EffectFade, Navigation, Pagination, Autoplay]}
            className="homeSliderV2"
        >
            <SwiperSlide>
                <div className='item w-full rounded-md overflow-hidden relative'>
                    <img src="https://media.ktown4u.com/products/resize/thumbnail/2026/03/06/1GbETZ.jpg" className='w-full h-[450px] object-cover' />


                    <div className='info absolute top-0  -right-full opacity-0 w-[50%] h-full z-50 p-8! flex items-center flex-col justify-center transition-all duration-700'>
                        <h4 className='text-[18px] font-medium w-full text-left mb-3! relative -right-full opacity-0'>Limited Edition</h4>
                        <h2 className='text-[35px] font-bold w-full relative -right-full opacity-0'>MONSTA X - English Album (DIGIPACK Ver.)</h2>

                        <h3 className='flex items-center gap-3 text-[18px] font-medium w-full text-left mb-3! mt-3! relative -right-full opacity-0'>Starting At Only <span className='text-primary text-[30px] font-bold'>$10.70</span></h3>


                        <div className='w-full relative -right-full opacity-0 btn_'>
                            <Button className='btn-org'>SHOP NOW</Button>
                        </div>

                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='item w-full rounded-md overflow-hidden'>
                    <img src="https://media.ktown4u.com/products/resize/thumbnail/2026/03/05/BZgNVm.jpg" className='w-full h-[450px] object-cover' />


                    <div className='info absolute top-0  -right-full opacity-0 w-[50%] h-full z-50 p-8! flex items-center flex-col justify-center transition-all duration-700'>
                        <h4 className='text-[18px] font-medium w-full text-left mb-3! relative -right-full opacity-0 '>Special Gift</h4>
                        <h2 className='text-[35px] font-bold w-full relative -right-full opacity-0'>YENA - 5th Mini Album [LOVE CATCHER]</h2>

                        <h3 className='flex items-center gap-3 text-[18px] font-medium w-full text-left mb-3! mt-3! relative -right-full opacity-0'>Starting At Only <span className='text-primary text-[30px] font-bold'>$28.23</span></h3>


                        <div className='w-full relative -right-full opacity-0 btn_'>
                            <Button className='btn-org'>SHOP NOW</Button>
                        </div>

                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default HomeBannerV2;
