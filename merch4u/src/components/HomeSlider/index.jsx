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
                <Swiper loop={true} spaceBetween={10} autoplay={{ delay: 2500, disableOnInteraction: false,}} navigation={true} modules={[Navigation, Autoplay]} className="sliderHome">
                    <SwiperSlide>
                        <div className='item rounded-[20px] overflow-hidden '>
                            <img src="https://kstars.com/cdn/shop/files/NEW_HOMEPAGE_BANNER_2000_x_1200_px_300_x_100_px_938_x_313_px_Email_Header_58.png?v=1772454067&width=1100&fbclid=IwY2xjawQcriZleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAEwAAEeKoPNfyZLZuZ-tn8zgK5c8JVKHsaCnuSl0e0q73c0kFeoR9C9XEyzFNu6DDk_aem_ZOjFL7D-qnQoFq-hgGEagA" alt="Banner slide" className='w-full h-[400px] object-cover'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item rounded-[20px] overflow-hidden '>
                            <img src="https://kstars.com/cdn/shop/files/NEW_HOMEPAGE_BANNER_2000_x_1200_px_300_x_100_px_938_x_313_px_Email_Header_8_f6dcdfb2-7fa2-4790-86c6-0f248d43753e.svg?v=1771865141&width=2000&fbclid=IwY2xjawQcrcdleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAEwAAEeeATQDS9X0yNA0pBGp-1oQjK62wjbScvbiJ0ibhTZ4VQg2m5WXC22aXtEmcY_aem_zFBMyHdQeoyTMtzM65Zx3Q" alt="Banner slide" className='w-full h-[400px] object-cover'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item rounded-[20px] overflow-hidden'>
                            <img src="https://kstars.com/cdn/shop/files/NEW_HOMEPAGE_BANNER_2000_x_1200_px_300_x_100_px_938_x_313_px_Email_Header_11.svg?v=1771868523&width=1100&fbclid=IwY2xjawQcroVleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAEwAAEe1d8ZHjIONceWHmT2t5Xy6bifCM3fZ9LXfYyMh8wTLEjj4brMzRfyVlGM5NU_aem_3OVpIyDGV4GDPbvaFzbqQw" alt="Banner slide" className='w-full h-[400px] object-cover'/>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default HomeSlider;