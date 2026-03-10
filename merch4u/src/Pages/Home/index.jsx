import React from 'react'
import HomeSlider from '../../components/HomeSlider';
import HomeCatSlider from '../../components/HomeCatSlider';
import { LiaShippingFastSolid } from "react-icons/lia";
import AdsBannerSlider from '../../components/AdsBannerSlider';
import '../../index.css'

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import ProductsSlider from '../../components/ProductsSilder';


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import BlogItem from '../../components/BlogItem';
import HomeBannerV2 from '../../components/HomeSliderV2';
import BannerBoxV2 from '../../components/bannerBoxV2';
import AdsBannerSliderV2 from '../../components/AdsBannerSlider V2'


const Home = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <HomeSlider/>

            <section className='py-6!'>
                <div className='container flex gap-5'>
                    <div className='part1 w-[70%]'>
                        <HomeBannerV2/>
                    </div>

                    <div className='part2 w-[30%] flex items-center gap-5 justify-between flex-col'>
                        <BannerBoxV2 info='left' image={'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/648161978_2820494124963830_1612202728413776195_n.png?stp=dst-png_s2048x2048&_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGSXdQzFFKZOB-45rklKgiiJdU46uCg7LYl1Tjq4KDstl3yYsrJlsEQqVigCqQPhMxNLt_w0IoBCWlKonPla14l&_nc_ohc=LIXYy5kYG3QQ7kNvwHkJzya&_nc_oc=AdkirMUs3fSB6d68ZEjhSGVciGXuuN1mCUJIi4aiPRLtcgOMqhnGzrajyBLnNkvVGlg&_nc_zt=23&_nc_ht=scontent.fhan17-1.fna&_nc_ss=8&oh=03_Q7cD4wHT-uD5vgvwjIhlosMOUzxcFpbLFLF5e1or_WpPRj0zOA&oe=69D743FF'}/>
                        <BannerBoxV2 info='right' image={'https://media.ktown4u.com/products/resize/thumbnail/2026/02/06/LtxEQQ.png'}/>
                    </div>
                </div>
            </section>

            <br />
            <HomeCatSlider/>


            <section className='bg-white py-8!  '>
                <div className='container'>
                    <div className='flex items-center justify-between'>
                        <div className='leftSec'>
                            <h2 className='text-[20px] font-semibold'>Popular Products</h2>
                            <p className='text-[14px] font-normal'>Do not miss the current offers until the end of March</p>
                        </div>


                        <div className='rightSec w-[60%]'>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                variant="scrollable"
                                scrollButtons="auto"
                                aria-label="scrollable auto tabs example"
                            >
                                <Tab label="Fashion" />
                                <Tab label="Postcard" />
                                <Tab label="Photo" />
                                <Tab label="Trading Car" />
                                <Tab label="Dolls" />
                                <Tab label="Albums" />
                                <Tab label="Photobooks" />
                                <Tab label="Poster" />
                                <Tab label="Banner" />
                                <Tab label="Lightstick" />
                                <Tab label="Key Ring" />
                                <Tab label="Pins & Stickers" />
                                <Tab label="Ancessories" />
                                <Tab label="Jewelries" />
                            </Tabs>
                        </div>

                    </div>


                    <ProductsSlider items={6}/>


                </div>
            </section>


            <section className='py-4! pt-2! bg-white '>
                <div className='container '>
                    <div className='freeShipping w-[80%] m-auto! py-2 p-4 border border-primary flex items-center justify-between rounded-md mb-7'>
                        <div className='col1 flex items-center gap-4 pl-4!'>
                            <LiaShippingFastSolid className='text-[50px] ' />
                            <span className='text-[20px] font-semibold uppercase'>Free Shipping</span>
                        </div>

                        <div className='col2'>
                            <p className='mb-0 font-medium '> Free Delivery Now On Your First Order and over $200*</p>
                        </div>


                        <p className='font-bold text-[25px] pr-4!'>- Only $200</p>
                    </div>
                    <br />

                    <AdsBannerSliderV2 items={4}/>

                </div>
            </section>





            <section className='py-5! pt-0! bg-white'>
                <div className='container'>
                    <h2 className='text-[20px] font-semibold'>Lastest Products</h2>
                    <ProductsSlider items={6}/>



                    <AdsBannerSlider items={3}/>
                </div>
            </section>




            <section className='py-5! pt-0! bg-white'>
                <div className='container'>
                    <h2 className='text-[20px] font-semibold'>Featured Products</h2>
                    <ProductsSlider items={6}/>



                    <AdsBannerSlider items={2}/>
                </div>
            </section>



            <section className='py-5! pt-0! pb-8! bg-white'>
                <div className='container'>
                    <h2 className='text-[50px] font-semibold italic mb-4! '>allNews</h2>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        navigation={true}
                        modules={[Navigation]}
                        className="blogSlider"
                    >
                        <SwiperSlide>
                            <BlogItem/>
                        </SwiperSlide>


                        <SwiperSlide>
                            <BlogItem/>
                        </SwiperSlide>



                        <SwiperSlide>
                            <BlogItem/>
                        </SwiperSlide>



                        <SwiperSlide>
                            <BlogItem/>
                        </SwiperSlide>



                        <SwiperSlide>
                            <BlogItem/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>



            

            
        </>
    )
}


export default Home;