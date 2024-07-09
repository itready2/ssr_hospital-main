import { Suspense } from 'react';

import Styles from './page.module.scss'
//image import
import hospital from '@/assets/image/hospital.jpg'
import bed1 from '@/assets/image/bed1.jpg'
import bed2 from '@/assets/image/bed2.jpg'

import Icon_Button, { Icon_Props } from '../../components/client/Icon_Button/Icon_Button';
import Image from 'next/image';
import Banner from '@/components/client/Banner/Banner';

import { getTranslations } from 'next-intl/server';
import Loading from '@/components/server/loader/Loading';
import getBanner from '@/declare/function/getBanner';
import ViewTap from '@/components/client/ViewTab/ViewTap';
import PackageView from '@/components/server/PackageView/PackageView';
import HealthView from '@/components/server/HealthView/HealthView';

const Home = async () => {

  const banner = await new getBanner().getBannerPromotion();

  const t = await getTranslations();

  const icon_data: Icon_Props[] = [
    { title: `${t('icon_btn.DC')}`, icon: "tabler:dental", link: "/service/dental" },
    { title: `${t('icon_btn.ENTC')}`, icon: "icomoon-free:eye", link: "/service/ent" },
    { title: `${t('icon_btn.WH')}`, icon: "streamline:toilet-women", link: "/service/women-health" },
    { title: `${t('icon_btn.PTC')}`, icon: "medical-icon:i-physical-therapy", link: "/service/therapy" },
    { title: `${t('icon_btn.OJSC')}`, icon: "healthicons:joints-outline", link: "/service/orthopedic" },
    { title: `${t('icon_btn.AS')}`, icon: "gg:menu-grid-o", link: "/service" },
  ]

  const navTab = {
    EM: t('icon_btn.EM'),
    PC: t('icon_btn.PC'),
    CC: t('icon_btn.CC'),
    RECC: t('icon_btn.RECC')
  }

  return (
    <>
      <div className={Styles['banner-container']}>
        <Suspense fallback={<Loading />}>
          {banner ? (
            <Banner banner={banner} />
          ) : (
            <></>
          )}
        </Suspense>
      </div>
      <main>
        {/* Head */}
        <section className={Styles.ViewContainer}>
          <div className={Styles['left-side']}>
            <h1>{t('hospital')}</h1>
            <p>{t('footer.history_desc')}</p>
          </div>
          <div className={Styles['right-side']}>
            <div className={Styles.img_pack}>
              <Image className={Styles.i2} src={hospital} alt="hospital" width={1600} height={900} />
            </div>
            <div className={Styles.img_pack_2}>
              <Image className={Styles.i1} src={bed2} alt="" width={1600} height={900} />
              <Image className={Styles.i1} src={bed1} alt="" width={1600} height={900} />
            </div>
          </div>
        </section>
        {/* Promotion */}
        <PackageView />
        {/* Service */}
        <h1 className={Styles.head1}>{t('icon_btn.TC')}</h1>
        <ViewTap nav={navTab} lang={t('lang')} />
        {/* Service menu*/}
        <section className={Styles.IconContainer}>
          <div className={Styles.icon_grid}>
            {icon_data.map((props: Icon_Props, index: number) => (
              <Icon_Button key={index} link={props.link} icon={props.icon} title={props.title} />
            ))}
          </div>
        </section>
        {/* Health Info */}
        <HealthView />

      </main>
    </>
  )
}

export default Home