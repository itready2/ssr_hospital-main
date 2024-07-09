import { Stylesheet } from '@/declare/type/Stylesheet';
import Image from 'next/image'

//image import
import awards from '@/assets/image/awards.jpg'
import { useTranslations } from 'next-intl';

const Awards = () => {

  const t = useTranslations("Awards");

  return (
    <main>
      <h1>
        {t('head')}
      </h1>
      <Image style={Styles.img}
        src={awards} alt='Awards' 
        width={1600} height={900} quality={80}/>
      <ul style={Styles.list}>
        <li>{t('1')}</li>
        <li>{t('2')}</li>
        <li>{t('3')}</li>
        <li>{t('4')}</li>
        <li>{t('5')}</li>
        <li>{t('6')}</li>
        <li>{t('7')}</li>
        <li>{t('8')}</li>
        <li>{t('9')}</li>
        <li>{t('10')}</li>
        <li>{t('11')}</li>
        <li>{t('12')}</li>
      </ul>
    </main>
  )
}

export default Awards

const Styles: Stylesheet = {
  list: {
    margin: '1em 0 1em 2em',
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    fontSize: '14pt'
  },

  img: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    marginBottom: 16,
    borderRadius: 4
  }

};