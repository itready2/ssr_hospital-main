'use client'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

import Styles from './Banner.module.scss'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/effect-fade';
import './custom.scss';
import { BannerComponentProps, BannerProps } from '@/declare/type/BannerProps';
import Link from 'next/link';

const Banner:React.FC<BannerComponentProps> = ({ banner }) => {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
                type: "bullets",
            }}
            navigation={true}
            loop={true}
            modules={[Autoplay, Pagination, Navigation, EffectFade]}
            effect="fade"
            className={Styles["banner-swiper"]}
        >
            {banner.map((banner:BannerProps, index:number) => (
                <SwiperSlide key={index}>
                    <Link href={banner.link}>
                    <Image src={banner.image} alt={`Image ${index + 1}`} loading="lazy"
                        className={Styles.banner} fill={true} />
                    </Link>

                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Banner
