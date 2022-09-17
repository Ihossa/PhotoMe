import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import styles from './Slider.module.scss'
import { EffectCoverflow, Pagination } from "swiper";

interface ISlider{
    className: string,
    photoList: string[]
}
export const Slider = (props:ISlider) => {
    return (
        <div className={props.className}>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 3,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {props.photoList.map((photo, idx) =>
                    <SwiperSlide key = {`${photo}-${idx}`} className={styles['img-container']}>
                        <img className={styles['img']} src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    );
}
