import { Stylesheet } from "@/declare/type/Stylesheet";
import { useTranslations } from "next-intl";

const Vision = () => {

  const t = useTranslations("vision");

  return (
    <main>
      <h1>{t('vision')}</h1>
      <ul style={Styles.list}>
        <li>{t('visiondet')}</li>
      </ul>
      <h1>{t('mission')}</h1>
      <ul style={Styles.list}>
        <li>{t('missiondet')}</li>
      </ul>
      <h1>{t('values')}</h1>
      <ul style={Styles.list}>
        <li>{t('value_list.customer')}</li>
        <li>{t('value_list.integrity')}</li>
        <li>{t('value_list.rapid')}</li>
        <li>{t('value_list.team')}</li>
        <li>{t('value_list.efficiency')}</li>
        <li>{t('value_list.continuous')}</li>
      </ul>
    </main>
  )
}

export default Vision

const Styles: Stylesheet = {
  list: {
    margin: '1em 0 1em 2em',
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    fontSize: '14pt'
  },

};