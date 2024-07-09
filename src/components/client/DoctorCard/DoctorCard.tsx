"use client"
import { DoctorProps } from "@/declare/type/DoctorProps"
import Styles from './DoctorCard.module.scss'
import Link from "next/link"
import Image from "next/image"

const DoctorCard: React.FC<DoctorProps> = ({ id, name, cover, departments, specialized }) => {
    return (
        <Link className={Styles.card} href={`/about/medical-team/${id + '_' + name.split(/[ .]/).join('_')}}`}>
            <div className={Styles['image-container']}>
                <Image loading='lazy' src={cover} alt={name} width={500} height={500} />
            </div>
            <div className={Styles.desc}>
                <h3 className={Styles.title}>{name}</h3>
                <p className={Styles.department}>{specialized}</p>
                <p className={Styles.department}>{departments[0].TH_name}</p>
                {/* {departments ? (
                    <>
                        {
                            departments.map((department, index) => (
                                <p key={index}>{department.TH_name}</p>
                            ))
                        }
                    </>
                ) : (<></>)} */}

            </div>
        </Link>
    )
}

export default DoctorCard
