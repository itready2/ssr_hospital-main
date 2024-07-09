import { Icon } from '@iconify/react';
import Styles from "./Modal.module.scss";
import { useRouter } from 'next/navigation';

export type service_modal = {
    clinic: string;
    checkup: string;
    spa: string;
    rehab: string;
    accommodation: string;
}

const Service_Modal: React.FC<service_modal> = ({
    clinic,
    checkup,
    spa,
    rehab,
    accommodation }) => {

    const navigate = useRouter().push;

    return (
        <div className={Styles.modal_wrapper}>
            <div className={Styles.modal}>
                <ul className={Styles.list}>
                    <li onClick={() => navigate('/service/check-up')}>
                        <div className={Styles.icon_wrap}>
                            <Icon icon="jam:medical" className={Styles.icon} />
                        </div>
                        {checkup}
                    </li>
                    <li onClick={() => navigate('/service#clinic')}>
                        <div className={Styles.icon_wrap}>
                            <Icon icon="fluent:briefcase-medical-24-filled" className={Styles.icon} />
                        </div>
                        {clinic}
                    </li>

                    <li onClick={() => navigate('/service/St_CarlosMedicalSpa')}>
                        <div className={Styles.icon_wrap}>
                            <Icon icon="ri:leaf-fill" className={Styles.icon} />
                        </div>
                        {spa}
                    </li>
                    <li onClick={() => navigate('/service/st_carlos_recc')}>
                        <div className={Styles.icon_wrap}>
                            <Icon icon="carbon:airline-passenger-care" className={Styles.icon} />
                        </div>
                        {rehab}
                    </li>
                    <li onClick={() => navigate('/service/accommodation')}>
                        <div className={Styles.icon_wrap}>
                            <Icon icon="tabler:bed-filled" className={Styles.icon} />
                        </div>
                        {accommodation}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Service_Modal;
