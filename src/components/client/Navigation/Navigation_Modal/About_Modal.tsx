'use client'

import { Icon } from '@iconify/react';
import Styles from "./Modal.module.scss";
import { useRouter } from 'next/navigation'

export type about_modal = {
    about: string;
    vision: string;
    history: string;
    team: string;
    awards: string;
    news: string;
    health_info: string;
    data_policy: string;
    cctv_policy: string;
}

const About_Modal: React.FC<about_modal> = ({
    about,
    vision,
    history,
    team,
    awards,
    news,
    health_info,
    data_policy,
    cctv_policy }) => {

    const navigate = useRouter().push;

    return (
        <div className={Styles.modal_wrapper}>
            <div className={Styles.modal}>
                <ul className={Styles.list}>
                    <li onClick={() => navigate('/about/about-us')}>
                        <div className={Styles.icon_wrap}>
                            <Icon icon="mdi:about-circle-outline" className={Styles.icon} />
                        </div>
                        {about}
                    </li>
                    <li onClick={() => navigate('/about/vision-mission')}>
                        <div className={Styles.icon_wrap}>
                            <Icon icon="material-symbols:other-admission-outline" className={Styles.icon} />
                        </div>
                        {vision}
                    </li>
                    <li onClick={() => navigate('/about/history')}>
                        <div className={Styles.icon_wrap}>
                            <Icon icon="mdi:clipboard-text-history-outline" className={Styles.icon} />
                        </div>
                        {history}
                    </li>
                    <li onClick={() => navigate('/about/medical-team')}>
                        <div className={Styles.icon_wrap}>
                            <Icon icon="ri:team-fill" className={Styles.icon} />
                        </div>
                        {team}
                    </li>
                    <li onClick={() => navigate('/about/awards')}>
                        <div className={Styles.icon_wrap}>
                            <Icon icon="material-symbols:trophy" className={Styles.icon} />
                        </div>
                        {awards}
                    </li>
                    <li onClick={() => navigate('/about/news')}>
                        <div className={Styles.icon_wrap}>
                            <Icon icon="tabler:news" className={Styles.icon} />
                        </div>
                        {news}
                    </li>
                    <li onClick={() => navigate('/about/health-information')}>
                        <div className={Styles.icon_wrap}>
                            <Icon icon="material-symbols:medical-information-outline" className={Styles.icon} />
                        </div>
                        {health_info}
                    </li>
                    <li onClick={() => window.open('/pdf/PDPA_Policy.pdf', '_blank')}>
                        <div className={Styles.icon_wrap}>
                            <Icon icon="icon-park-solid:personal-privacy" className={Styles.icon} />
                        </div>
                        {data_policy}
                    </li>
                    <li onClick={() => window.open('/pdf/CCTV_Policy.pdf', '_blank')}>
                        <div className={Styles.icon_wrap}>
                            <Icon icon="bx:cctv" className={Styles.icon} />
                        </div>
                        {cctv_policy}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default About_Modal;
