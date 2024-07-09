import Icon_Button, { Icon_Props } from '@/components/client/Icon_Button/Icon_Button'
import Styles from './Service.module.scss'
import { useTranslations } from 'next-intl';

const Service = () => {
  const t = useTranslations();

  const icon_data: Icon_Props[] = [
    { title: `${t('icon_btn.EM')}`, icon: "uil:ambulance", link: "/service/emergency" },
    { title: `${t('icon_btn.PC')}`, icon: "uil:clinic-medical", link: "/service/pediatric" },
    { title: `${t('icon_btn.WH')}`, icon: "streamline:toilet-women", link: "/service/women-health" },
    { title: `${t('icon_btn.GSC')}`, icon: "healthicons:general-surgery-outline", link: "/service/surgery" },
    { title: `${t('icon_btn.KC')}`, icon: "healthicons:kidneys", link: "/service/hemodialysis" },
    { title: `${t('icon_btn.BNSDC')}`, icon: "mdi:brain", link: "/service/brain-center" },
    { title: `${t('icon_btn.DC')}`, icon: "tabler:dental", link: "/service/dental" },
    { title: `${t('icon_btn.ENTC')}`, icon: "icomoon-free:eye", link: "/service/ent" },
    { title: `${t('icon_btn.GC')}`, icon: "healthicons:geriatrics-outline", link: "/service/geriatric" },
    { title: `${t('icon_btn.ASC')}`, icon: "icon-park-outline:plastic-surgery", link: "/service/aesthetic-surgery" },
    { title: `${t('icon_btn.OJSC')}`, icon: "healthicons:joints-outline", link: "/service/orthopedic" },
    { title: `${t('icon_btn.PTC')}`, icon: "medical-icon:i-physical-therapy", link: "/service/therapy" },
    { title: `${t('icon_btn.DC2')}`, icon: "material-symbols:dermatology-outline", link: "/service/dermatology" },
    { title: `${t('icon_btn.RECC')}`, icon: "carbon:airline-passenger-care", link: "/service/st_carlos_recc" },
    { title: `${t('icon_btn.SPA')}`, icon: "ri:leaf-fill", link: "/service/St_CarlosMedicalSpa" },
  ]

  return (
    <main>
      <section className={Styles.sec_container}>
        <h2>{t('section.service')}</h2>
        <div className={Styles.icon_grid}>
          <Icon_Button link='/service/doctor-appointment' icon='gravity-ui:calendar' title={`${t('icon_btn.MA')}`} />
          <Icon_Button link='/service/check-up' icon='carbon:reminder-medical' title={`${t('icon_btn.CC')}`} />
          <Icon_Button link='/service/accommodation' icon='tabler:bed-filled' title={`${t('icon_btn.AC')}`} />
        </div>
        <h2 id='clinic'>{t('section.clinic')}</h2>
        <div className={Styles.icon_grid} >
          {icon_data.map((props: Icon_Props, index: number) => (
            <Icon_Button key={index} link={props.link} icon={props.icon} title={props.title} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Service