import { useTranslations } from "next-intl";
import Styles from './ContactCard.module.scss'
import Link from "next/link";

import { FaFacebookSquare, FaLine } from "react-icons/fa";
import { PiPhoneFill } from "react-icons/pi";


const ContactCard = () => {

    const t = useTranslations("contact");

    return (
        <section className={Styles.container}>
            <h2 className={Styles.head}>{t("head")}</h2>
            <div className={Styles.list}>
                <Link href="https://page.line.me/ppy8997d?openQrModal=true" target="_blank" className={Styles.line}>
                    <FaLine className={Styles.icon} />
                    @stcarlosth
                </Link>
                <Link href='https://www.facebook.com/stcarlosth/' target="_blank" className={Styles.facebook}>
                    <FaFacebookSquare className={Styles.icon} />
                    @stcarlosth
                </Link>
                <Link href='#' className={Styles.phone}>
                    <PiPhoneFill className={Styles.icon} />
                    02-9756-700
                </Link>
            </div>
        </section>
    )
}

export default ContactCard
