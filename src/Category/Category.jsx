import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import slide1 from '../assets/home/slide1.jpg'
import slide2 from '../assets/home/slide2.jpg'
import slide3 from '../assets/home/slide3.jpg'
import slide4 from '../assets/home/slide4.jpg'
import slide5 from '../assets/home/slide5.jpg'

const Category = () => {
    return (
            <Swiper
                slidesPerView={5}
                spaceBetween={-100}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-16 mr-50 text-shadow-2xs text-white'>Salad</h3>
                    </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-16 mr-50 text-shadow-2xs text-white'>Pizza</h3>
                    </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-16 mr-50 text-shadow-2xs text-white'>Soup</h3>
                    </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-16 mr-50 text-shadow-2xs text-white'>Dessert</h3>
                    </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-16 mr-50 text-shadow-2xs text-white'>Salad</h3>
                    </SwiperSlide>
                
            </Swiper>
    );
};

export default Category;