'use client'
import Image from 'next/image';
import Styles from './RoomCard.module.scss'
import Link from 'next/link';
import { InfoProps } from '@/declare/type/InfoProps';

const RoomCard: React.FC<InfoProps> = ({ id, title, description, cover }) => {

    return (
        <Link className={Styles.card} href={id} >
            <div className={Styles['image-container']}>
                <Image loading='lazy' src={cover} alt={title} width={500} height={500} />
            </div>
            <div className={Styles.desc}>
                <h3 className={Styles.title}>{title}</h3>
                <p className={Styles.paragraph}>
                    {description}
                </p>
            </div>
        </Link>
    )
}

export default RoomCard