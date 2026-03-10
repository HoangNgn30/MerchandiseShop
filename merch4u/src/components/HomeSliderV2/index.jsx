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
                    <img src="https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/644929259_2136387587181150_5000631830126867946_n.png?stp=dst-png_s2048x2048&_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeE_xWUJiA4VmPAwgJtOr99rUUP-aVmI6JJRQ_5pWYjoknBqY3a1RYvhkn1M7WvhrSkDBxAHT16ecBigrQuBJqUq&_nc_ohc=Xxn8LFC6zFQQ7kNvwGz3W4B&_nc_oc=AdniS6nnvUl-Y5dKxdXRjEPWOcx03-Pxi8EugBgQZsEqngb-5OL0mjZa0gteasp_7kY&_nc_zt=23&_nc_ht=scontent.fhan17-1.fna&_nc_ss=8&oh=03_Q7cD4wFR6MlljoAggCUN5rO9CpqyTrU1ifw6FB6fCg0eaJlJaQ&oe=69D72B25" className='w-full h-[450px] object-cover' />


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
                    <img src="https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/645728612_1454525843003968_767012005812804470_n.png?stp=dst-png_s2048x2048&_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEdp0ZIImffcj3VBLIV-0JOnclWSzul1MGdyVZLO6XUwV9i58ivf_bcJJIGXWeC-jmCY-KIo-LnLXndg__ffvTR&_nc_ohc=e6O6--jfmxQQ7kNvwHVd5z1&_nc_oc=AdlIZvIAZg_zsW9h8HRLYZX7v7farW53eHSffy_4auXZTa_tkRyLodgTqelC_A5OCOI&_nc_zt=23&_nc_ht=scontent.fhan17-1.fna&_nc_ss=8&oh=03_Q7cD4wGgrhCX_ZKPXXvDHhjAbBsgTB3_QEmqJDAVHOVZeKF5ew&oe=69D74358" className='w-full h-[450px] object-cover' />


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
