import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import BannerBox from '../BannerBox';

const AdsBannerSlider = (props) => {
    return (
        <>
        <Swiper
            slidesPerView={props.items}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            className="smlBtn"
        >
            <SwiperSlide>
                <BannerBox img={'../src/assets/AdsBannerSilder/img1.png'} link={'/'}/>
            </SwiperSlide>


            <SwiperSlide>
                <BannerBox img={'../src/assets/AdsBannerSilder/img2.jpg'} link={'/'}/>
            </SwiperSlide>


            <SwiperSlide>
                <BannerBox img={'../src/assets/AdsBannerSilder/img3.png'} link={'/'}/>
            </SwiperSlide>



            <SwiperSlide>
                <BannerBox img={'../src/assets/AdsBannerSilder/img4.png'} link={'/'}/>
            </SwiperSlide>



            <SwiperSlide>
                <BannerBox img={'../src/assets/AdsBannerSilder/img4.jpg'} link={'/'}/>
            </SwiperSlide>


            <SwiperSlide>
                <BannerBox img={'../src/assets/AdsBannerSilder/img6.png'} link={'/'}/>
            </SwiperSlide>
        </Swiper>
        </>
    )
}
export default AdsBannerSlider;