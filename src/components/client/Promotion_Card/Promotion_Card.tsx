'use client'
import { PromotionProps } from '@/declare/type/PromotionProps';
import Styles from './Promotion_Card.module.scss'
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';

const Promotion_Card: React.FC<PromotionProps> = ({ id, title, cover, price, max_price, end_date, price_lang }) => {

    return (
        <Link className={Styles.card} href={`/promotion/${id + '_' + title.split(/[ .]/).join('_')}`} >
            <div className={Styles['image-container']}>
                <Image loading='lazy' src={cover} alt={title} width={500} height={500} />
            </div>
            <div className={Styles.desc}>
                <h3 className={Styles.title}>{title}</h3>
                <div className={Styles.capsule}>
                    {price && <h3 className={Styles.price}><Icon icon="ion:pricetag-outline" /> {price} {max_price != '0' && `- ${max_price}`} {price_lang}</h3>}
                    {end_date && <h3 className={Styles.price}><Icon icon="ion:calendar-outline" /> {end_date}</h3>}
                </div>
            </div>
        </Link>
    )
}

export default Promotion_Card