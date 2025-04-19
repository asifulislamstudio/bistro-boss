import SectionTitle from "../../Shared/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useRef, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";
const Testimonials = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    return (
        <div>
            <SectionTitle
                subheading={'What Our Client Say'}
                heading={'TESTIMONIAL'}
            ></SectionTitle>
            <div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        reviews.map(review => <SwiperSlide key={review.id}><div>
                            <div className="flex flex-col items-center my-4">
                            <FaQuoteLeft className="text-8xl mb-2"></FaQuoteLeft>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            </div>
                            <p className="text-center my-4">{review.details}</p>
                            <h3 className="text-3xl underline font-semibold text-center text-amber-500">{review.name}</h3>


                        </div></SwiperSlide>)
                    }
                    <div className="autoplay-progress mt-8" slot="container-end">
                        
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;