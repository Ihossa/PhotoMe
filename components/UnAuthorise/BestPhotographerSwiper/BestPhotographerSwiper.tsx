import styles from './BestPhotographerSwiper.module.scss'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import {IUser} from "../../../api/dto/photogapher";
import {BestPhotographerPhoto} from "../BestPhotographerPhoto/BestPhotographerPhoto";
import {useWindowSize} from "../../../hooks/useWindowSize";
import {ICON_NAME, Icons} from "../../../lib/icons";
import {Button} from "../../../shared/Button";

interface IBestPhotographerSwiper {
    bestPhotographers: IUser[]
}

export const BestPhotographerSwiper = (props: IBestPhotographerSwiper) => {

    return (
        <div className={styles['wrap-swiper']}>
            <Swiper
                spaceBetween={30}
                pagination={false}
                modules={[ Navigation, Pagination ]}
                loop={true}
                navigation = {{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                breakpoints={{
                    375: {
                        slidesPerView: 1
                    },
                    576: {
                        slidesPerView: 2
                    }
                }}
            >{
                props.bestPhotographers.map((photographerItem) => (
                    <SwiperSlide key={photographerItem._id}>
                        <BestPhotographerPhoto photographerItem={photographerItem} />
                    </SwiperSlide>
                ))
            }
            </Swiper>
            <div className={styles['wrap-btn']}>
                <button className={"swiper-button-prev"}><Icons name={ICON_NAME.ARROW_NAV} /></button>
                <button className={"swiper-button-next"}><Icons name={ICON_NAME.ARROW_NAV} /></button>
            </div>
        </div>
    )
}