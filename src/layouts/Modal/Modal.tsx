'use client'
import { useEffect, useRef } from "react";
import styles from "./Modal.module.scss";
import { Icon } from '@iconify/react';

interface ModalProps {
    isOpen: boolean;
    onClose?: () => void;
    children: React.ReactNode;
    button?: boolean;
    title?: string;
    size?: "small" | "medium" | "large";
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title, size = "medium", button = true }) => {

    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose?.();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    const modalClassNames = isOpen ? `${styles.modal} ${styles.open}` : styles.modal;

    let sizeClass;
    switch (size) {
        case "small":
            sizeClass = styles.small;
            break;
        case "large":
            sizeClass = styles.large;
            break;
        default:
            sizeClass = styles.medium;
    }

    return (
        <div className={modalClassNames}>
            <div className={`${styles.modalContent} ${sizeClass}`} ref={modalRef}>
                <div className={styles.modal_Header}>
                    <h2>{title}</h2>
                    {button && (
                        <button onClick={onClose} className={styles.closeButton}>
                            <Icon icon="ep:close-bold" className={styles.icon} />
                        </button>
                    )}
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;
