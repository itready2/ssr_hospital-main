'use client'
import { useState } from 'react';
import axios from 'axios';
import { Icon } from '@iconify/react';
import Modal from '@/layouts/Modal/Modal';
import Styles from './contact.module.scss';
import { FaFacebookSquare, FaLine, FaYoutubeSquare } from 'react-icons/fa';
import Link from 'next/link';
import { FaSquareInstagram, FaSquareXTwitter } from 'react-icons/fa6';
import Image from 'next/image'
// import image
import QR from '@/assets/image/lineqr.jpg'

type Errors = {
    name?: string;
    email?: string;
    phoneNumber?: string;
    details?: string;
}

type Contact = {
    contact: {
        head: string;
        name: string;
        email: string;
        phone: string;
        detail: string;
        submit: string;
        v_name: string;
        v_email: string;
        i_email: string;
        v_phone: string;
        i_phone: string;
        v_detail: string;
        address: string;
        modal_head: string;
        modal_decs: string;
    }
}

const Contact_form = ({ contact }: Contact) => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [details, setDetails] = useState<string>('');
    const [errors, setErrors] = useState<Errors>({});
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [isModalopen, setModalopen] = useState(false);

    //* Use Regex for validate form
    const validateForm = (): boolean => {
        const newErrors: Errors = {};
        if (!name.trim()) {
            newErrors.name = contact.v_name;
        }
        if (!email.trim()) {
            newErrors.email = contact.v_email;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = contact.i_email;
        }
        if (!phoneNumber.trim()) {
            newErrors.phoneNumber = contact.v_phone;
        } else if (!/^\d{10}$/.test(phoneNumber)) {
            newErrors.phoneNumber = contact.i_phone;
        }
        if (!details.trim()) {
            newErrors.details = contact.v_detail;
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitting(true);
            try {
                const response = await axios.post(`${process.env.NEXT_PUBLIC_END_POINT}/contact`, {
                    name,
                    email,
                    phone: phoneNumber,
                    detail: details
                });
                console.log('Server Response:', response.data);
                setModalopen(true)
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setTimeout(() => {
                    setIsSubmitting(false);
                    setName('');
                    setEmail('');
                    setPhoneNumber('');
                    setDetails('');
                    setErrors({});
                    setModalopen(false);
                }, 2000);
            }
        }
    };

    return (
        <section className={Styles['contact-form']}>
            <h1 style={{textAlign: 'center', marginTop: '1rem', fontSize: '24pt'}}>{contact.head}</h1>
            <div className={Styles['contact-view']}>
                <div className={Styles.sidebar}>
                    <Image src={QR} alt='qr code' width={200} height={200} className={Styles.qrcode} />
                    <ul className={Styles['contact-label']}>
                        <li>
                            <Icon icon="prime:map-marker" className={Styles.icon} />
                            <p>{contact.address}</p>
                        </li>
                        <li>
                            <Icon icon="lucide:mail" className={Styles.icon} />
                            <p>stcarlos@stcarlos.com</p>
                        </li>
                        <li>
                            <Icon icon="ph:phone-fill" className={Styles.icon} />
                            <p>02-9756-700 - 05</p>
                        </li>
                        <li>
                            <Icon icon="ph:phone-fill" className={Styles.icon} />
                            <p>063-353-6601 - 05</p>
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
                    </ul>
                </div>
                <form onSubmit={handleSubmit} className={Styles['form-layout']}>
                    <div>
                        <label>{contact.name}*</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder={contact.name}
                            className={errors.name && Styles['error-from']}
                        />
                        {errors.name && <span className={Styles.error}>{errors.name}</span>}
                    </div>
                    <div>
                        <label>{contact.email}*</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={contact.email}
                            className={errors.email && Styles['error-from']}
                        />
                        {errors.email && <span className={Styles.error}>{errors.email}</span>}
                    </div>
                    <div>
                        <label>{contact.phone}*</label>
                        <input
                            type="tel"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder={contact.phone}
                            className={errors.phoneNumber && Styles['error-from']}
                        />
                        {errors.phoneNumber && <span className={Styles.error}>{errors.phoneNumber}</span>}
                    </div>
                    <div>
                        <label>{contact.detail}*</label>
                        <textarea
                            value={details}
                            onChange={(e) => setDetails(e.target.value)}
                            placeholder={contact.detail}
                            className={errors.details && Styles['error-from']}
                        />
                        {errors.details && <span className={Styles.error}>{errors.details}</span>}
                    </div>
                    <button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : contact.submit}</button>
                </form>
                <Modal isOpen={isModalopen} onClose={() => setModalopen(false)} size='small' button={false} >
                    <h1 style={{ textAlign: 'center' }}>{contact.modal_head}</h1>
                    <p style={{ textAlign: 'center' }}>{contact.modal_decs}</p>
                </Modal>
            </div>

        </section>
    );
};

export default Contact_form;
