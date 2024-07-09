'use client'
import { Icon } from '@iconify/react';
import Styles from './Icon_Button.module.scss'
import Link from 'next/link';

export type Icon_Props = {
    icon: string;
    title: string;
    link: string;
    target?: "_self" | "_blank"
}

const Icon_Button: React.FC<Icon_Props> = ({ icon, title, link, target = "_self" }) => {
    return (
        <Link href={link} target={target} className={Styles.box}>
            <div className={Styles.wrap}>
                <Icon icon={icon} className={Styles.icon} />
            </div>
            <p className={Styles.link}>{title}</p>
        </Link>
    )
}

export default Icon_Button