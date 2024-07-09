import { Doctor } from "@/declare/function/getDoctor";
import Image from 'next/image'

import Styles from './doctor.module.scss'
import SectionRender from "@/components/server/SectionRender/SectionRender";

const page = async ({ params }: { params: { id: string } }) => {

    const str = params.id;
    const numberString = str.split("_")[0];
    const data = await new Doctor().getOne(numberString);

    if (!data) {
        return (
            <>
            </>
        )
    }

    return (
        <main>
            <section className={Styles['card-content']}>
                <div className={Styles['image-wrap']}>
                    <Image src={data.cover} alt={data.name} fill loading="lazy" />
                </div>
                <div className={Styles['text-wrap']}>
                    <article>
                        <h1 className={Styles['doc-name']}>{data.name}</h1>
                        <hr />
                        <ul className={Styles['doc-list']}>
                            <li >สาขา {data.specialized}</li>
                            {data.departments && (
                                <>
                                    {
                                        data.departments.map((department, index) => (
                                            <li key={index}>{department.TH_name}</li>
                                        ))
                                    }
                                </>
                            )}
                        </ul>
                    </article>
                </div>
            </section>
            <br />
            <h2>ข้อมูลเพิ่มเติม</h2>
            <section className={Styles['content-view']}>
                { data.content && (
                <SectionRender content={data.content}/>
                )}
            </section>
        </main>
    )
}

export default page
