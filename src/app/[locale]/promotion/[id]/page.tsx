import Image from "next/image";

import Styles from './Detail.module.scss';
import HealthView from "@/components/server/HealthView/HealthView";
import PackageView from "@/components/server/PackageView/PackageView";
import getPromotion from "@/declare/function/getPromotion";
import SectionRender from "@/components/server/SectionRender/SectionRender";
import { Suspense } from "react";
import RevPromotion from "@/components/client/relevant/RevPromotion";
import { getTranslations } from "next-intl/server";

// สร้าง metadata ใว้ทำ SEO 
export async function generateMetadata({ params }: { params: { id: string } }) {
  const str = params.id;
  //* ใช้ Regex ในการเอาแค่ id 
  const numberString = str.split("_")[0];
  const data = await new getPromotion().getPreview(numberString);

  if (!data) {
    return {
      title: 'not found',
      description: '...',
    }
  }

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    openGraph: {
      type: "website",
      title: data.title,
      description: data.description,
      images: [{
        url: data.cover,
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
    }
  };
}


const Detail = async ({ params }: { params: { id: string } }) => {
  const str = params.id;
  const numberString = str.split("_")[0];
  const data = await new getPromotion().getOne(numberString);

  const t = await getTranslations()

  if (!data) {
    return (
      <main style={{ height: '50vh', display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
        <h1 style={{
          color: 'green',
          fontSize: '24pt'
        }}>
          ขออภัยไม่พบหน้าที่ร้องขอ
        </h1>
      </main>
    );
  }

  return (
    <main>
      <h1>{data.title}</h1>
      <Image className={Styles.cover} src={data.cover} alt={data.title} width={3840} height={2160} />
      <article>
        <br />
        <p className={Styles.desc}>&emsp;{data.description}</p>
        <br />
        {data.content ? (
          <Suspense>
            <SectionRender content={data.content} />
          </Suspense>
        ) : (
          <></>
        )}
      </article>
      {(data.relevant_promotion && data.relevant_promotion.length > 0) && <RevPromotion ids={data.relevant_promotion} title={t('relevant_promo')} price={t('price')} />}
      <PackageView />
      <HealthView />
    </main>
  )
}

export default Detail;

