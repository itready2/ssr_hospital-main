import { Stylesheet } from "@/declare/type/Stylesheet";
import { useTranslations } from "next-intl";

const History = () => {

  const t = useTranslations("history");

  return (
    <main>
      <h1>{t('history')}</h1>
      <ol style={Styles.list}>
        <li>
          <p>{t('1')}</p>
        </li>
        <li>
          <p>{t('2')}</p>
        </li>
        <li>
          <p>{t('3')}</p>
        </li>
        <li>
          <p>{t('4')}</p>
        </li>
        <li>
          <p>{t('5')}</p>
        </li>
        <li>
          <p>{t('6')}</p>
        </li>
        <li>
          <p>{t('7')}</p>
        </li>
        {t('8') !== '' &&
          <li>
            <p>{t('8')}</p>
          </li>
        }
      </ol>
    </main>
  )
}

export default History

const Styles: Stylesheet = {
  list: {
    margin: '1em 0 1em 2em',
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    fontSize: '14pt'
  },

};