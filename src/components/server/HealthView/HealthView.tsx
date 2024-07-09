import Info_Card from "@/components/client/Info_Card/Info_Card"
import { InfoProps } from "@/declare/type/InfoProps"
import { Suspense } from "react"
import Loading from "../loader/Loading"

import Styles from './HealthView.module.scss'
import getHealth from "@/declare/function/getHealth"
import { getTranslations } from "next-intl/server"
import Link from "next/link"
import { MdArrowForwardIos } from "react-icons/md"

const HealthView = async() => {

    const health = await new getHealth().getTop();

    const t = await getTranslations();
    
  return (
    <section className={Styles.container}>
    <div className={Styles.header}>
      <h1>{t('section.info')}</h1>
    </div>
    <div className={Styles.pr_grid}>
      <Suspense fallback={<Loading />}>
        {health ? (
          health.map((item: InfoProps) => (
            <Info_Card
              id={`/about/health-information/${item.id + '_' + item.title.split(/[ .]/).join('_')}}`}
              key={item.id}
              create_at={item.create_at}
              title={item.title}
              cover={item.cover}
              description={item.description}
            />
          ))
        ) : (
          <></>
        )}
      </Suspense>
    </div>
    <Link href='/about/health-information' className={Styles.more}>{t('more')}<MdArrowForwardIos className={Styles.icon} /></Link>
  </section>
  )
}

export default HealthView
