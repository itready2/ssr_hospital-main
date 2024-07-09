'use client'
import { useState } from 'react'; // Import useState hook

import Styles from './ViewTap.module.scss';
import Image from "next/image"
import { Icon } from '@iconify/react';

import EMimg from '@/assets/clinic-cover/emergency2.jpg'
import PCimg from '@/assets/clinic-cover/pediatrics2.jpg'
import CCimg from '@/assets/clinic-cover/check-up.jpg'
import RECCimg from '@/assets/clinic-cover/recc2.jpg'
import Link from 'next/link';

interface ViewTapProps {
    nav: {
        EM: string;
        PC: string;
        CC: string;
        RECC: string;
    }
    lang: string;
}

const ViewTap: React.FC<ViewTapProps> = ({ nav, lang }) => {

    const [activeContent, setActiveContent] = useState(`EM-${lang}`); // State for active content

    const handleItemClick = (content: string) => {
        setActiveContent(content); // Update active content when an item is clicked
    };

    return (
        <section className={Styles.sec_service_container}>
            <ul className={Styles.nav_button}>
                <li onClick={() => handleItemClick(`EM-${lang}`)} className={activeContent === `EM-${lang}` ? Styles.active : ''}>
                    <Icon icon='uil:ambulance' className={Styles.icon} />
                    {nav.EM}
                </li>
                <li onClick={() => handleItemClick(`PC-${lang}`)} className={activeContent === `PC-${lang}` ? Styles.active : ''}>
                    <Icon icon='uil:clinic-medical' className={Styles.icon} />
                    {nav.PC}
                </li>
                <li onClick={() => handleItemClick(`CC-${lang}`)} className={activeContent === `CC-${lang}` ? Styles.active : ''}>
                    <Icon icon='carbon:reminder-medical' className={Styles.icon} />
                    {nav.CC}
                </li>
                <li onClick={() => handleItemClick(`RECC-${lang}`)} className={activeContent === `RECC-${lang}` ? Styles.active : ''}>
                    <Icon icon='carbon:airline-passenger-care' className={Styles.icon} />
                    {nav.RECC}
                </li>
            </ul>
            <div className={Styles.content_container}>

                {(() => {
                    switch (activeContent) {
                        case 'EM-TH':
                            return <Emergency />;
                        case 'PC-TH':
                            return <Pediatrics />;
                        case 'CC-TH':
                            return <CheckUpCenter />;
                        case 'RECC-TH':
                            return <RECC />;
                        case 'EM-EN':
                            return <Emergency_EN />;
                        case 'PC-EN':
                            return <Pediatrics_EN />;
                        case 'CC-EN':
                            return <CheckUpCenter_EN />;
                        case 'RECC-EN':
                            return <RECC_EN />;
                        default:
                            return <></>;
                        // error handle
                    }
                })()}

            </div>
        </section>
    )
}

export default ViewTap;

const Pediatrics = () => {
    return (
        <>
            <div className={Styles['content-l']}>
                <Image src={PCimg} alt="" width={1000} height={1000} />
            </div>
            <div className={Styles['content-r']}>
                <h2>ศูนย์กุมารเวช</h2>
                <p>  เปิดให้บริการตรวจรักษาผู้ป่วยเด็ก ตั้งแต่แรกเกิดจนไปถึงอายุ 14 ปี ให้การรักษา ป้องกัน ส่งเสริมสุขภาพร่างกาย
                    พัฒนาการเด็ก และรักษาโรคเด็กทั่วไป โรคระบบทางเดินหายใจ โรคติดเชื้อ วัคซีนตามช่วงอายุ วัคซีนป้องกันโรค ฯลฯ โดยมีกุมารแพทย์บริการตลอด 24 ชั่วโมง</p>
                <div className={Styles.list2}>
                    <ul>
                        <li>ให้บริการตรวจรักษา โรคเด็กทั่วไป,โรคระบบทางเดินหายใจ โรคติดเชื้อ และโรคอื่นๆ</li>
                        <li>ให้คำแนะนำวัคซีนตามช่วยอายุ และวัคซีนเสริม เพิ่มเสริมสร้างเกราะป้องกันจากโรคต่างๆ</li>
                        <li>โซนเด็กเล่นเพื่อเสริมพัฒนาการ แบ่งเป็นสัดส่วนอย่างชัดเจน</li>
                    </ul>
                </div>
                <Link href='/service/pediatric' className={Styles['link']}>
                    ข้อมูลเพิ่มเติม
                </Link>
            </div>
        </>
    )
}

const Emergency = () => {
    return (
        <>
            <div className={Styles['content-l']}>
                <Image src={EMimg} alt="" width={1000} height={1000} />
            </div>
            <div className={Styles['content-r']}>
                <h2>ศูนย์อุบัติเหตุ-ฉุกเฉิน 24 ชั่วโมง </h2>
                <p> ศูนย์อุบัติเหตุ-ฉุกเฉิน โรงพยาบาลกรุงสยามเซนต์คาร์ลอส ให้บริการตลอด 24 ชั่วโมง พร้อมให้บริการผู้ป่วยฉุกเฉินด้วยทีมแพทย์
                    พยาบาล ศัลยแพทย์ที่มีความเชี่ยวชาญ เพียบพร้อมด้วยการรักษาทางอายุรกรรมและการทำศัลยกรรมอุบัติเหตุ</p>
                <div className={Styles.list2}>
                    <ul>
                        <li>ทีมแพทย์ฉุกเฉิน พร้อมให้บริการตลอด 24 ชั่วโมง</li>
                        <li>พยาบาลวิชาชีพ ซึ่งผ่านการอบรมช่วยฟื้นคืนชีพขั้นสูง</li>
                        <li>ทีมศัลยแพทย์ พร้อมให้บริการตลอด 24 ชั่วโมง</li>
                        <li>การรักษาทางอายุรกรรมและการทำศัลยกรรมอุบัติเหตุ</li>
                        <li>รถพยาบาลและการขนย้ายผู้ป่วยหนัก</li>
                        <li>ติดต่อศูนย์อุบัติเหตุ-ฉุกเฉิน โทร. 029756700 ต่อ 2210,2211</li>
                    </ul>
                </div>
                <Link href='/service/emergency' className={Styles['link']}>
                    ข้อมูลเพิ่มเติม
                </Link>
            </div>
        </>
    )
}

const CheckUpCenter = () => {
    return (
        <>
            <div className={Styles['content-l']}>
                <Image src={CCimg} alt="" width={1000} height={1000} />
            </div>
            <div className={Styles['content-r']}>
                <h2>ศูนย์ตรวจสุขภาพ  </h2>
                <p> ให้บริการตรวจสุขภาพครอบคลุมหลากหลายประเภท ทั้งตรวจสุขภาพประจำปี
                    ตรวจสุขภาพกลุ่มเสี่ยง ตรวจสุขภาพเพื่อทำใบอนุญาตขับขี่ ใบรับรองแพทย์บวชพระ เตรียมความพร้อมก่อนอุปสมบท พร้อมให้บริษัททั้งบริษัทคู่สัญญา และบุคคลทั่วไป</p>
                <div className={Styles.list2}>
                    <ul>
                        <li>ตรวจสุขภาพชุดพื้นฐานตามอายุ</li>
                        <li>ตรวจสุขภาพก่อนแต่งงาน</li>
                        <li>ตรวจสุขภาพก่อนเข้างาน</li>
                        <li>ตรวจสุขภาพประจำปี</li>
                        <li>ตรวจสุขภาพแรงงานต่างด้าว</li>
                        <li>ตรวจสุขภาพนอกสถานที่</li>
                        <li>บริการฉีดวัคซีนนอกสถานที่</li>
                    </ul>
                </div>
                <Link href='/service/check-up' className={Styles['link']}>
                    ข้อมูลเพิ่มเติม
                </Link>
            </div>
        </>
    )
}

const RECC = () => {
    return (
        <>
            <div className={Styles['content-l']}>
                <Image src={RECCimg} alt="" width={1000} height={1000} />
            </div>
            <div className={Styles['content-r']}>
                <h2>ศูนย์ฟื้นฟูสมรรถภาพและการดูแลระยะยาว </h2>
                <p> ให้บริการฟื้นฟูอย่างครบวงจรแก่ผู้พักฟื้นจากการเจ็บป่วย
                    การบาดเจ็บ หรือการผ่าตัด ด้วยการดูแลทางการแพทย์ การพยาบาล
                    และการรักษาที่มีคุณภาพสูงแก่ผู้ป่วยที่ไม่สามารถช่วยเหลือตนเองได้ เนื่องจากความผิดปกติทางร่างกาย
                    เช่น อัมพฤกษ์-อัมพาต โดยการพัฒนาแผนการดูแลเฉพาะบุคคลที่ตอบสนองความต้องการและเป้าหมายเฉพาะของผู้ป่วย
                    และยังรองรับผู้ป่วยโรคเรื้อรัง เช่น โรคทางเดินหายใจ โรคหัวใจและหลอดเลือด โรคไตเรื้อรัง โรคหลอดเลือดสมอง มะเร็ง หรือเบาหวาน
                    โดยให้ความรู้ด้านการจัดการโรค การจัดการอาการ และการดูแลแบบสหสาขาวิชาชีพที่พัฒนาคุณภาพชีวิต ป้องกันภาวะแทรกซ้อน</p>
                <Link href='/service/st_carlos_recc' className={Styles['link']}>
                    ข้อมูลเพิ่มเติม
                </Link>
            </div>
        </>
    )
}

const Pediatrics_EN = () => {
    return (
        <>
            <div className={Styles['content-l']}>
                <Image src={PCimg} alt="" width={1000} height={1000} />
            </div>
            <div className={Styles['content-r']}>
                <h2>Pediatrics Center</h2>
                <p>
                    Provides medical services for children from birth to 14 years old.
                    Offers treatment, prevention, and health promotion for physical development and general pediatric diseases,
                    respiratory diseases, infectious diseases,
                    age-appropriate vaccinations, and disease prevention vaccines, with pediatricians available 24 hours a day.
                </p>
                <div className={Styles.list2}>
                    <ul>
                        <li>Treatment of general pediatric diseases, respiratory diseases, infectious diseases, and other conditions.</li>
                        <li>Advice on age-appropriate vaccinations and additional vaccines to enhance protection against various diseases.</li>
                        <li>A play area for children to enhance development, clearly divided into sections.</li>
                    </ul>
                </div>
                <Link href='/service/pediatric' className={Styles['link']}>
                    ข้อมูลเพิ่มเติม
                </Link>
            </div>
        </>
    )
}

const Emergency_EN = () => {
    return (
        <>
            <div className={Styles['content-l']}>
                <Image src={EMimg} alt="" width={1000} height={1000} />
            </div>
            <div className={Styles['content-r']}>
                <h2>24-Hour Emergency Center</h2>
                <p>
                    The 24-hour Emergency Center at Krung Siam St. Carlos Hospital provides round-the-clock emergency services with a team of specialized doctors,
                    nurses, and surgeons. Equipped to offer both medical and surgical treatment for emergencies.
                </p>
                <div className={Styles.list2}>
                    <ul>
                        <li>Emergency medical team available 24 hours a day.</li>
                        <li>Professional nurses trained in advanced resuscitation.</li>
                        <li>Surgeons available 24 hours a day.</li>
                        <li>Medical and surgical treatment for accidents.</li>
                        <li>Ambulance services and transportation for critical patients.</li>
                        <li>Contact the Emergency Center at 029756700 ext. 2210, 2211.</li>
                    </ul>
                </div>
                <Link href='/service/emergency' className={Styles['link']}>
                    ข้อมูลเพิ่มเติม
                </Link>
            </div>
        </>
    )
}

const CheckUpCenter_EN = () => {
    return (
        <>
            <div className={Styles['content-l']}>
                <Image src={CCimg} alt="" width={1000} height={1000} />
            </div>
            <div className={Styles['content-r']}>
                <h2>Health Check-Up Center</h2>
                <p>
                    Offers a wide range of health check-up services including annual health check-ups,
                    risk group check-ups, health checks for driving licenses, ordination certificates,
                    and preparation before ordination. Services are available to both corporate clients and the general public.
                </p>
                <div className={Styles.list2}>
                    <ul>
                        <li>Basic health check-up packages by age.</li>
                        <li>Pre-marital health check-ups.</li>
                        <li>Pre-employment health check-ups.</li>
                        <li>Annual health check-ups.</li>
                        <li>Health check-ups for migrant workers.</li>
                        <li>On-site health check-ups.</li>
                        <li>On-site vaccination services.</li>
                    </ul>
                </div>
                <Link href='/service/check-up' className={Styles['link']}>
                    ข้อมูลเพิ่มเติม
                </Link>
            </div>
        </>
    )
}

const RECC_EN = () => {
    return (
        <>
            <div className={Styles['content-l']}>
                <Image src={RECCimg} alt="" width={1000} height={1000} />
            </div>
            <div className={Styles['content-r']}>
                <h2>Rehabilitation and Long-Term Care Center</h2>
                <p>
                    Provides comprehensive rehabilitation services for patients recovering from illness,
                    injury, or surgery. Offers high-quality medical and nursing care for patients who cannot take care of themselves due to physical disabilities such as paralysis.
                    Develops personalized care plans to meet the specific needs and goals of patients. Also caters to chronic disease patients such as those with respiratory diseases,
                    cardiovascular diseases, chronic kidney diseases, stroke, cancer, or diabetes,
                    providing disease management education, symptom management, and multidisciplinary care to improve quality of life and prevent complications.
                </p>
                <Link href='/service/st_carlos_recc' className={Styles['link']}>
                    ข้อมูลเพิ่มเติม
                </Link>
            </div>
        </>
    )
}