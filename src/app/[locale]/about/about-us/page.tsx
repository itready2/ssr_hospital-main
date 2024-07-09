import { useTranslations } from "next-intl";
import Image from 'next/image'

//image import
import Hospital from '@/assets/image/hospital.jpg'

const About_us = () => {

  const t = useTranslations("AboutUs");

  return (
    <main>
      <h1>{t('head')}</h1>
      <Image style={{ width: '100%', height: 'auto', objectFit: 'cover', paddingBottom: 16 }} 
      src={Hospital} alt="Hospital" width={1600} height={900} />
      <p style={{ fontSize: '14pt' }}>{t('text-1')}</p><br />
      <p style={{ fontSize: '14pt' }}>{t('text-2')}</p><br />
      <p style={{ fontSize: '14pt' }}>{t('text-3')}</p><br />
    </main>
  )
}

export default About_us
