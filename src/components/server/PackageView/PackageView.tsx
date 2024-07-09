import Promotion_Card from "@/components/client/Promotion_Card/Promotion_Card"
import Styles from './PackageView.module.scss'
import Loading from "../loader/Loading"
import { Suspense } from "react"
import { PromotionProps } from "@/declare/type/PromotionProps"
import Link from "next/link"
import { MdArrowForwardIos } from "react-icons/md"
import getPromotion from "@/declare/function/getPromotion"
import { getTranslations } from "next-intl/server"

const PackageView = async() => {

    const promotion = await new getPromotion().getTop();

    const t = await getTranslations();

  return (
        <section className={Styles.container}>
          <div className={Styles.header}>
            <h1>{t('section.promo')}</h1>
          </div>
          <div className={Styles.product_grid}>
            <Suspense fallback={<Loading />}>
              {promotion ? (
                promotion.map((item: PromotionProps) => (
                  <Promotion_Card
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    cover={item.cover}
                    price={item.price.toString()}
                    max_price={item.max_price?.toString()}
                    price_lang={t('thb')}
                  />
                ))
              ) : (
                <></>
              )}
            </Suspense>
          </div>
          <Link href='/promotion' className={Styles.more}>{t('more')}<MdArrowForwardIos className={Styles.icon} /></Link>
        </section>
  )
}

export default PackageView
