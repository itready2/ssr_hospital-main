import Icon_Button, { Icon_Props } from '@/components/client/Icon_Button/Icon_Button';
import Styles from './About.module.scss'
import { useTranslations } from 'next-intl';

const About = () => {
  const t = useTranslations("footer");

  const icon_data: Icon_Props[] = [
    { title: `${t('about')}`, icon: "mdi:about-circle-outline", link: "/about/about-us" },
    { title: `${t('vision')}`, icon: "material-symbols:other-admission-outline", link: "/about/vision-mission" },
    { title: `${t('history')}`, icon: "mdi:clipboard-text-history-outline", link: "/about/history" },
    { title: `${t('team')}`, icon: "ri:team-fill", link: "/about/medical-team" },
    { title: `${t('awards')}`, icon: "material-symbols:trophy", link: "/about/awards" },
    { title: `${t('news')}`, icon: "tabler:news", link: "/about/news" },
    { title: `${t('health_info')}`, icon: "material-symbols:medical-information-outline", link: "/about/health-information" },
    { title: `${t('data_policy')}`, icon: "icon-park-solid:personal-privacy", link: "/pdf/PDPA_Policy.pdf", target: "_blank" },
    { title: `${t('cctv_policy')}`, icon: "bx:cctv", link: "/pdf/CCTV_Policy.pdf", target: "_blank" }
  ]

  return (
    <main>
      <section className={Styles.sec_container}>
        <h2>{t('about')}</h2>
        <div className={Styles.icon_grid}>
          {icon_data.map((props: Icon_Props, index: number) => (
            <Icon_Button key={index} link={props.link} icon={props.icon} title={props.title} target={props.target} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default About