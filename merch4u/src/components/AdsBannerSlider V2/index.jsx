import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import BannerBox from '../BannerBox';
import BannerBoxV2 from '../bannerBoxV2';

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
                <BannerBoxV2 info='left' image={'https://media.ktown4u.com/products/resize/thumbnail/2026/03/03/dltGqK.jpg'} link={'/'}/>
            </SwiperSlide>


            <SwiperSlide>
                <BannerBoxV2 info='right' image={'https://media.ktown4u.com/products/resize/thumbnail/2026/02/06/LtxEQQ.png'} link={'/'}/>
            </SwiperSlide>


            <SwiperSlide>
                <BannerBoxV2 info='left' image={'https://media.ktown4u.com/products/resize/thumbnail/2026/03/03/dltGqK.jpg'} link={'/'}/>
            </SwiperSlide>



            <SwiperSlide>
                <BannerBoxV2 info='right' image={'https://media.ktown4u.com/products/resize/thumbnail/2026/02/06/LtxEQQ.png'} link={'/'}/>
            </SwiperSlide>



            <SwiperSlide>
                <BannerBoxV2 info='left' image={'https://media.ktown4u.com/products/resize/thumbnail/2026/03/03/dltGqK.jpg'} link={'/'}/>
            </SwiperSlide>


            <SwiperSlide>
                <BannerBoxV2 info='right' image={'https://media.ktown4u.com/products/resize/thumbnail/2026/02/06/LtxEQQ.png'} link={'/'}/>
            </SwiperSlide>
        </Swiper>
        </>
    )
}
export default AdsBannerSlider;