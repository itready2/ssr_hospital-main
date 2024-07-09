'use client'
import { useState } from 'react';
import Styles from './Accom.module.scss'
import LayoutGrid from '@/layouts/gridlayout/LayoutGrid';
import RoomCard from '../RoomCard/RoomCard';

import VIITHimg1 from '@/assets/bedroom/7th/7th-cov1.jpg'
import VIITHimg2 from '@/assets/bedroom/7th/7th-cov2.jpg'
import VIITHimg3 from '@/assets/bedroom/7th/7th-cov3.jpg'

import IVImg1 from '@/assets/bedroom/4th/vip2.jpg'
import IVImg2 from '@/assets/bedroom/4th/4th-suit3.jpg'
import IVImg3 from '@/assets/bedroom/4th/4th-delux-cov.jpg'

import ICU1 from '@/assets/bedroom/icu/icu1.jpg'
import ICU2 from '@/assets/bedroom/icu/icu2.jpg'
import ICU3 from '@/assets/bedroom/icu/icu3.jpg'

interface AccomProps {
    nav: {
        VII: string;
        IV: string;
        ACR: string;
    }
    lang: string;
}

const test: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque minima cupiditate totam consectetur adipisicing elit. Eaque minima cupiditate totam?'

const Accom: React.FC<AccomProps> = ({ nav, lang }) => {

    const [activeContent, setActiveContent] = useState(`VII-${lang}`); // State for active content

    const handleItemClick = (content: string) => {
        setActiveContent(content); // Update active content when an item is clicked
    };

    return (
        <section>
            <h1 className={Styles.head}>บริการห้องพัก</h1>
            <p style={{ marginTop: 16, marginBottom: 16, fontSize: '14pt' }}>
                โรงพยาบาลกรุงสยามเซนคาร์ลอส
                เสนอบริการห้องพักพร้อมสิ่งอำนวยความสะดวกครบครันเพื่อให้ผู้ป่วย
                เลือกพักได้ตามความต้องการและงบประมาณ โดยเริ่มตั้งแต่ห้องพักราคาประหยัดขนาด 10 เตียง
                ไปจนถึงห้องชุดสูท ห้องพักทุกประเภทได้รับการออกแบบเพื่อให้คุณได้รับความสะดวก และความปลอดภัยสูงสุด
            </p>
            <ul className={Styles.nav_button}>
                <li onClick={() => handleItemClick(`VII-${lang}`)} className={activeContent === `VII-${lang}` ? Styles.active : ''}>
                    {nav.VII}
                </li>
                <li onClick={() => handleItemClick(`IV-${lang}`)} className={activeContent === `IV-${lang}` ? Styles.active : ''}>
                    {nav.IV}
                </li>
                <li onClick={() => handleItemClick(`ACR-${lang}`)} className={activeContent === `ACR-${lang}` ? Styles.active : ''}>
                    {nav.ACR}
                </li>
            </ul>
            <div>
                {(() => {
                    switch (activeContent) {
                        case 'VII-TH':
                            return <VIITH />;
                        case 'IV-TH':
                            return <IVTH />;
                        case 'ACR-TH':
                            return <ACRTH />;
                        case 'VII-EN':
                            return <VIITH />;
                        case 'IV-EN':
                            return <IVTH />;
                        case 'ACR-EN':
                            return <ACRTH />;
                        default:
                            return <></>;
                        // error handle
                    }
                })()}
            </div>

        </section>
    )
}

export default Accom

const VIITH = () => {
    return (
        <LayoutGrid>
            <RoomCard id='' title='ห้องผู้ป่วยเดี่ยว VIP ชั้น 7' description={test} cover={VIITHimg1.src} />
            <RoomCard id='' title='ห้องผู้ป่วยเดี่ยว VIP ชั้น 7' description={test} cover={VIITHimg2.src} />
            <RoomCard id='/service/accommodation/super_deluxe_7th' title='ห้องผู้ป่วยเดี่ยว SUPER DELUXE ชั้น 7' description={test} cover={VIITHimg3.src} />
        </LayoutGrid>
    )
}

const IVTH = () => {
    return (
        <LayoutGrid>
            <RoomCard id='' title='ห้องผู้ป่วยเดี่ยว VIP ชั้น 4' description={test} cover={IVImg1.src} />
            <RoomCard id='' title='ห้องผู้ป่วยเดี่ยว Suite Room ชั้น 4' description={test} cover={IVImg2.src} />
            <RoomCard id='' title='ห้องผู้ป่วยเดี่ยว DELUXE ชั้น 4' description={test} cover={IVImg3.src} />
        </LayoutGrid>
    )
}

const ACRTH = () => {
    return (
        <LayoutGrid>
            <RoomCard id='' title='ห้องผู้ ICU แบบแยก' description={test} cover={ICU1.src} />
            <RoomCard id='' title='ห้องผู้ ICU' description={test} cover={ICU2.src} />
            {/* <RoomCard id='' title='ห้องผู้ ICU' description={test} cover={ICU3.src} /> */}
        </LayoutGrid>
    )
}

