import Image from 'next/image';
import Styles from './Mini_Product_Caed.module.scss'
import { useRouter } from 'next/navigation'

interface MiniProps {
    id: string;
    locale: string;
    image: string;
    title: string;
    price: string;
    max_price?: string;
}

const Mini_Product_Card: React.FC<MiniProps> = ({ id, image, title, price, max_price, locale }) => {

    const navigate = useRouter().push;

    return (
        <div className={Styles.container} onClick={() => navigate(`/promotion/${id}`)}>
            <div className={Styles.image_wrap}>
                <Image width={160} height={90} src={image} alt={title} />
            </div>
            <div className={Styles.content}>
                <p className={Styles.title}>{title}</p>
                <p className={Styles.price}>{price} {max_price != '0'  && `- ${max_price}`} {locale}</p>
            </div>
        </div>
    )
}

export default Mini_Product_Card