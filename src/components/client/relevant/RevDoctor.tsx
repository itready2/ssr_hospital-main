'use client'
import Styles from './PackageView.module.scss'
import { Suspense, useEffect, useState } from "react"
import Loading from "@/components/server/loader/Loading"
import DoctorCard from "../DoctorCard/DoctorCard"
import { Doctor } from "@/declare/function/getDoctor"
import { DoctorProps } from "@/declare/type/DoctorProps"

interface id {
    ids: string[];
    title: string;
}


const RevDoctor: React.FC<id> = ({ ids, title }) => {

    const [doctor, setDoctor] = useState<DoctorProps[]>([])

    useEffect(() => {
        async function fetchItems() {
            const fetchedDoctor: DoctorProps[] = [];

            for (const id of ids) {
                const promotion: DoctorProps | null = await new Doctor().getOne(id);
                if (promotion !== null) {
                    fetchedDoctor.push(promotion);
                }
            }

            setDoctor(fetchedDoctor);
        }

        fetchItems();
    }, [ids])

    return (
        <Suspense fallback={<Loading />}>
            {doctor ? (
                <section className={Styles.container}>
                    <div className={Styles.header}>
                        <h1>{title}</h1>
                    </div>
                    <div className={Styles.product_grid}>
                        {doctor.map((item: DoctorProps) => (
                            <DoctorCard
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                cover={item.cover}
                                specialized={item.specialized}
                                departments={item.departments}
                            />
                        ))}
                    </div>
                </section>
            ) : (
                <></>
            )}
        </Suspense>
    )
}

export default RevDoctor
