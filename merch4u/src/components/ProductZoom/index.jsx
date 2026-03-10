import React, { useRef, useState } from 'react'
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../index.css'

import { Navigation } from 'swiper/modules';

const ProductZoom = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const zoomSliderBig = useRef();
    const zoomSliderSml = useRef();


    const goto = (index) => {
        setSlideIndex(index);
        zoomSliderSml.current.swiper.slideTo(index);
        zoomSliderBig.current.swiper.slideTo(index);
    }

    return (
        <>
            <div className='flex gap-3'>

                <div className='slider w-[15%] '>
                    <Swiper
                    ref={zoomSliderSml}
                        direction={'vertical'}
                        slidesPerView={5}
                        spaceBetween={0}
                        navigation={true}
                        modules={[Navigation]}
                        className="zoomProductSliderThumb h-[437px]! overflow-hidden!"
                    >
                        <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden h-full cursor-pointer group ${slideIndex === 0 ? 'opacity-30' : 'opacity-100'}`} onClick={() => goto(0)}>
                                <img src="https://media.ktown4u.com/products/resize/thumbnail/2026/02/26/5JiZ4g.jpg" alt="" className='w-full transition-all  object-cover group-hover:scale-105' />
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden h-full cursor-pointer group ${slideIndex === 1 ? 'opacity-30' : 'opacity-100'}`} onClick={() => goto(1)}>
                                <img src="https://media.ktown4u.com/products/resize/thumbnail/2026/02/26/5JiZ4g.jpg" alt="" className='w-full transition-all  object-cover group-hover:scale-105' />
                            </div>
                        </SwiperSlide>



                        <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden h-full cursor-pointer group ${slideIndex === 2 ? 'opacity-30' : 'opacity-100'}`} onClick={() => goto(2)}>
                                <img src="https://media.ktown4u.com/products/resize/thumbnail/2026/02/26/5X0Mbq.jpg" alt="" className='w-full transition-all  object-cover group-hover:scale-105' />
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden h-full cursor-pointer group ${slideIndex === 3 ? 'opacity-30' : 'opacity-100'}`} onClick={() => goto(3)}>
                                <img src="https://media.ktown4u.com/products/resize/thumbnail/2026/02/26/kxGTKe.jpg" alt="" className='w-full transition-all  object-cover group-hover:scale-105' />
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden h-full cursor-pointer group ${slideIndex === 4 ? 'opacity-30' : 'opacity-100'}`} onClick={() => goto(4)}>
                                <img src="https://media.ktown4u.com/products/resize/thumbnail/2026/02/26/5X0Mbq.jpg" alt="" className='w-full transition-all  object-cover group-hover:scale-105' />
                            </div>
                        </SwiperSlide>


                    </Swiper>
                </div>


                <div className='zoomContainer w-[85%] h-[500px]! overflow-hidden'>

                    <Swiper
                        ref={zoomSliderBig}
                        slidesPerView={1}
                        spaceBetween={0}
                        navigation={false}
                    >
                        <SwiperSlide>                
                            <InnerImageZoom 
                                zoomType='hover' 
                                zoomScale={1} 
                                src={'https://media.ktown4u.com/products/resize/thumbnail/2026/02/26/5JiZ4g.jpg'}
                            />
                        </SwiperSlide>
                        <SwiperSlide>                
                            <InnerImageZoom 
                                zoomType='hover' 
                                zoomScale={1} 
                                src={'https://media.ktown4u.com/products/resize/thumbnail/2026/02/26/5JiZ4g.jpg'}
                            />
                        </SwiperSlide>
                        <SwiperSlide>                
                            <InnerImageZoom 
                                zoomType='hover' 
                                zoomScale={1} 
                                src={'https://media.ktown4u.com/products/resize/thumbnail/2026/02/26/5X0Mbq.jpg'}
                            />
                        </SwiperSlide>
                        <SwiperSlide>                
                            <InnerImageZoom 
                                zoomType='hover' 
                                zoomScale={1} 
                                src={'https://media.ktown4u.com/products/resize/thumbnail/2026/02/26/kxGTKe.jpg'}
                            />
                        </SwiperSlide>
                        <SwiperSlide>                
                            <InnerImageZoom 
                                zoomType='hover' 
                                zoomScale={1} 
                                src={'https://media.ktown4u.com/products/resize/thumbnail/2026/02/26/5X0Mbq.jpg'}
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default ProductZoom;
