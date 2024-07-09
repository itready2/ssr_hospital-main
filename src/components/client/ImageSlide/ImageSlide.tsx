'use client'
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Image from 'next/image';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Styles from './ImageSlide.module.scss';

interface ImageSlideProps {
    images: string[];
}

const ImageSlide: React.FC<ImageSlideProps> = ({ images }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null); // Adjust type as needed

    return (
        <div>
            <Swiper
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className={Styles["mySwiper2"]}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className={Styles['swiper-slide-img-container']}>
                            <Image
                                alt='Slide Image'
                                layout="fill"
                                objectFit="cover"
                                src={image}
                                className={Styles['swiper-slide-img']}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className={Styles["mySwiper"]}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className={Styles['mini-img']}>
                        <div className={Styles['swiper-slide-thumb-container']}>
                            <Image
                                style={{ borderRadius: '4px', cursor: 'pointer' }}
                                alt='Thumbnail Image'
                                layout="fill"
                                objectFit="cover"
                                src={image}
                                className={Styles['swiper-slide-thumb']}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ImageSlide;
