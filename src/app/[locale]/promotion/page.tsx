import { lazy, Suspense } from 'react';

import Styles from './Promotion.module.scss'

const Promotion_Card = lazy(() => import('@/components/client/Promotion_Card/Promotion_Card'));
// import Filter from '../../components/Search/Filter';

import Banner from '@/components/client/Banner/Banner';
import { getTranslations } from 'next-intl/server';
import Loading from '@/components/server/loader/Loading';
import getPromotion from '@/declare/function/getPromotion';
import getBanner from '@/declare/function/getBanner';
import LayoutGrid from '@/layouts/gridlayout/LayoutGrid';
import { PromotionProps } from '@/declare/type/PromotionProps';

import Search from '@/components/client/SearchAndFilter/Search';

const Promotion = async (
  {
    searchParams,
  }: {
    searchParams: { [key: string]: string  }
  }
) => {


  const promotion = await new getPromotion().getAll(searchParams.search)
  const banner = await new getBanner().getBannerPromotion();

  const t = await getTranslations();

  console.log(searchParams)

  return (
    <main>
      <section className={Styles.slide_container}>
        <h1 className={Styles["head"]}>{t('package.rec')}</h1>
        <Suspense fallback={<Loading />}>
          {banner ? (
            <Banner banner={banner} />
          ) : (
            <></>
          )}
        </Suspense>
      </section>
      <div className={Styles.title_layout}>
        <h3>{t('navigation.promotion')}</h3>
        <div>
          <Search />
          {/* <Filter />*/}
        </div>
      </div>
      <LayoutGrid>
        <Suspense fallback={<Loading />}>
          {promotion ? (
            promotion.map((item: PromotionProps) => (
              <Promotion_Card
                key={item.id}
                id={item.id.toString()}
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
      </LayoutGrid>
    </main>
  )
}

export default Promotion
