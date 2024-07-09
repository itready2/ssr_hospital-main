import Styles from './Footer.module.scss';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

import { PiPhoneFill } from "react-icons/pi";
import { MdOutlineMail } from 'react-icons/md';
import { FaLine, FaSquareInstagram, FaSquareXTwitter } from 'react-icons/fa6';
import { FaFacebookSquare, FaYoutubeSquare } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const Footer = () => {

    const t = useTranslations("footer");

    return (
        <footer className={Styles.footer}>
            <section className={Styles.gridlayout}>
                <div className={Styles.gridItem}>
                    <h2 style={{ marginBottom: 12 }}>{t('service')}</h2>
                    <ul>
                        <li>
                            <Link href="#">
                                <p> {t('appointment')}</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/service#clinic">
                                <p>{t('clinic')}</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/service/check-up">
                                <p>{t('checkup')}</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <p>{t('spa')}</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/service/st_carlos_recc">
                                <p>{t('rehab')}</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/service/accommodation">
                                <p>{t('accommodation')}</p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={Styles.gridItem}>
                    <h2 style={{ marginBottom: 12 }}>{t('about')}</h2>
                    <ul>
                        <li>
                            <Link href="/about/about-us" target="_blank">
                                <p>{t('about')} </p>
                            </Link>

                        </li>
                        <li>
                            <Link href="/about/vision-mission">
                                <p>{t('vision')}</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about/history">
                                <p>{t('history')}</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about/medical-team">
                                <p>{t('team')}</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about/awards">
                                <p>{t('awards')}</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about/news">
                                <p>{t('news')}</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about/health-information">
                                <p>{t('health_info')}</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/pdf/PDPA_Policy.pdf" target="_blank">
                                {t('data_policy')}
                            </Link>
                        </li>
                        <li>
                            <Link href="/pdf/CCTV_Policy.pdf" target="_blank">
                                {t('cctv_policy')}
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={Styles.gridItem}>
                    <h2 style={{ marginBottom: 12 }}>{t('contact')}</h2>
                    <ul className={Styles.link}>
                        <li>
                            <Link href="#">
                                <PiPhoneFill className={Styles.icon} />
                                <p>02-9756-700</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <MdOutlineMail className={Styles.icon} />
                                <p>stcarlos@stcarlos.com</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.facebook.com/stcarlosth/" target="_blank">
                                <FaFacebookSquare className={Styles.icon} />
                                <p>@stcarlosth</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://page.line.me/ppy8997d?openQrModal=true" target="_blank">
                                <FaLine className={Styles.icon} />
                                <p>@stcarlosth</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://twitter.com/stcarlosth" target="_blank">
                                <FaSquareXTwitter className={Styles.icon} />
                                <p>@stcarlosth</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.instagram.com/stcarlosth/" target="_blank">
                                <FaSquareInstagram className={Styles.icon} />
                                <p>stcarlosth</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.youtube.com/user/KrungsiamStcarlos" target="_blank">
                                <FaYoutubeSquare className={Styles.icon} />
                                <p>KrungsiamStcarlos</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.youtube.com/user/KrungsiamStcarlos" target="_blank">
                                <HiOutlineLocationMarker className={Styles.icon} />
                                <p>{t('address')}</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
            <div className={Styles.bottom}>
                <p>
                    <Link href="/pdf/PDPA_Policy.pdf" target="_blank">
                        {t('data_policy')}
                    </Link>
                    &nbsp;|&nbsp;
                    <Link href="/pdf/CCTV_Policy.pdf" target="_blank">
                        {t('cctv_policy')}
                    </Link>
                    &nbsp;|&nbsp;
                    {t('cookie_policy')}
                </p>
                <p>
                    Copyright &copy; 2024 Krung Siam St. Carlos Medical Centre All right reserved
                </p>
            </div>
        </footer>
    );
}

export default Footer;
