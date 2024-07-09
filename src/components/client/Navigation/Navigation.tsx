'use client'
import Link from 'next/link'
import Styles from './Navigation.module.scss'
import Image from 'next/image'
import { Icon } from '@iconify/react'

import { ChangeEvent, useEffect, useState, useTransition } from 'react'
import { useRouter, usePathname } from 'next/navigation'

import Product_Modal, { product_modal } from './Navigation_Modal/Product_Modal'
import Service_Modal, { service_modal } from './Navigation_Modal/Service_Modal'
import About_Modal, { about_modal } from './Navigation_Modal/About_Modal'

type nav_prop = {
    nav: {
        home: string;
        about: string;
        service: string;
        promo: string;
        appoint: string;
        contact: string;
    }
    localActive: string;
    about_nav: about_modal;
    product_nav: product_modal;
    service_nav: service_modal;

}

const Navigation = ({ nav, localActive, about_nav, product_nav, service_nav }: nav_prop) => {
    const router = useRouter();
    const pathname = usePathname()

    const [isPending, StartTransition] = useTransition();

    const [showMenu, setShowMenu] = useState(true);

    const [showProductMenu, setShowProductMenu] = useState(false);
    const [showServiceMenu, setShowServiceMenu] = useState(false);
    const [showAboutMenu, setShowAboutMenu] = useState(false);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 1024);
        };
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    useEffect(() => {
        setShowMenu(true);
    }, [pathname]);


    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        const nextLocale = e.target.value;
        StartTransition(() => {
            router.replace(`/${nextLocale}/`);
        });
    }

    return (
        <nav className={Styles['nav-container']}>
            <ul className={Styles['left-menu-container']}>
                <li>
                    <Link href="/">
                        <Image src={isMobile ? '/minilogo.png' : '/logo.jpg'} alt="logo" className={Styles.logo} height={100} width={300} />
                    </Link>
                </li>
                <li>
                    <Icon icon="ph:phone-fill" className={Styles['phone-icon']} />
                    <p>02-9756-700</p>
                </li>
            </ul>

            <div className={Styles['hamburger-icon']}>
                <select
                    className={Styles['lang-btn-ph']}
                    onChange={onSelectChange}
                    defaultValue={localActive}
                    disabled={isPending}>
                    <option value="th">TH</option>
                    <option value="en">EN</option>
                </select>
                <div className={Styles['ham-size']} onClick={() => setShowMenu(!showMenu)}>
                    {showMenu ? <Icon icon="charm:menu-hamburger" className={Styles.icon} /> : <Icon icon="bx:bx-x" className={Styles.icon} />}
                </div>
            </div>

            <ul className={`${Styles['right-menu-container']} ${showMenu ? Styles['show-menu'] : ''}`}>
                <li>
                    <div className={Styles.inline}>
                        <Link className={pathname === `/${localActive}` ? Styles.active : ""} href="/" >
                            {nav.home}
                        </Link>
                    </div>
                </li>
                <li onMouseEnter={() => !isMobile && setShowAboutMenu(true)}
                    onMouseLeave={() => !isMobile && setShowAboutMenu(false)}
                    onClick={() => isMobile && setShowAboutMenu(!showAboutMenu)}>
                    <div className={Styles.inline}>
                        <Link className={pathname === `/${localActive}/about` ? Styles.active : ""} href="/about">
                            {nav.about}
                        </Link>
                        <Icon icon="eva:arrow-down-fill" className={Styles['dropdown-icon']} />
                    </div>
                    {showAboutMenu && <About_Modal {...about_nav} />}
                </li>
                <li onMouseEnter={() => !isMobile && setShowServiceMenu(true)}
                    onMouseLeave={() => !isMobile && setShowServiceMenu(false)}
                    onClick={() => isMobile && setShowServiceMenu(!showServiceMenu)}>
                    <div className={Styles.inline}>
                        <Link className={pathname === `/${localActive}/service` ? Styles.active : ""} href="/service">
                            {nav.service}
                        </Link>
                        <Icon icon="eva:arrow-down-fill" className={Styles['dropdown-icon']} />
                    </div>
                    {showServiceMenu && <Service_Modal {...service_nav} />}
                </li>
                <li onMouseEnter={() => !isMobile && setShowProductMenu(true)}
                    onMouseLeave={() => !isMobile && setShowProductMenu(false)}
                    onClick={() => isMobile && setShowProductMenu(!showProductMenu)}>
                    <div className={Styles.inline}>
                        <Link className={pathname === `/${localActive}/promotion` ? Styles.active : ""} href="/promotion">
                            {nav.promo}
                        </Link>
                        <Icon icon="eva:arrow-down-fill" className={Styles['dropdown-icon']} />
                    </div>
                    {showProductMenu && <Product_Modal {...product_nav} />}
                </li>
                <li>
                    <div className={Styles.inline}>
                        <Link className={pathname === `/${localActive}/appointment` ? Styles.active : ""} href="/appointment">
                            {nav.appoint}
                        </Link>
                    </div>
                </li>
                <li>
                    <div className={Styles.inline}>
                        <Link className={pathname === `/${localActive}/contact` ? Styles.active : ""} href="/contact">
                            {nav.contact}
                        </Link>
                    </div>
                </li>
                <li>
                    <select
                        className={Styles['lang-btn']}
                        onChange={onSelectChange}
                        defaultValue={localActive}
                        disabled={isPending}>
                        <option value="th">TH</option>
                        <option value="en">EN</option>
                    </select>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation