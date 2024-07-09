'use client'
import Image from 'next/image';
import Styles from './Info_Card.module.scss'
import Link from 'next/link';
import { InfoProps } from '@/declare/type/InfoProps';
import { format } from 'date-fns';


const Info_Card: React.FC<InfoProps> = ({ id, title, description, cover, create_at }) => {

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return format(date, 'dd/MM/yyyy');
    };

    return (
        <Link className={Styles.card} href={id} >
            <div className={Styles['image-container']}>
                <Image loading='lazy' src={cover} alt={title} width={500} height={500} />
            </div>
            <div className={Styles.desc}>
                <h3 className={Styles.title}>{title}</h3>
                <div className={Styles.capsule}>
                    {create_at && <p className={Styles.date}>{formatDate(create_at)}</p>}
                </div>
                <p className={Styles.paragraph}>
                    {description}
                </p>
            </div>
        </Link>
    )
}

export default Info_Card