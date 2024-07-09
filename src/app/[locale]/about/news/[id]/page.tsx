import Image from "next/image";

import Styles from './Detail.module.scss';
import SectionRender from "@/components/server/SectionRender/SectionRender";
import PackageView from "@/components/server/PackageView/PackageView";
import HealthView from "@/components/server/HealthView/HealthView";
import News from "@/declare/function/getNews";

// สร้าง metadata ใว้ทำ SEO 
export async function generateMetadata({ params }: { params: { id: string } }) {
  const str = params.id;
  const numberString = str.split("_")[0];
  const data = await new News().getPreview(numberString);

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
      //TODO: add url
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      //TODO: add url
    }
  };
}

const Detail = async ({ params }: { params: { id: string } }) => {
  const str = params.id;
  const numberString = str.split("_")[0];
  const data = await new News().getOne(numberString);

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
      <Image className={Styles.cover} src={data.cover} alt={data.title} width={3840} height={2160} />
      <article>
        <h1 className={Styles.header}>{data.title}</h1>
        <p className={Styles.desc}>{data.description}</p>
        {data.content ? (
          <SectionRender content={data.content} />
        ) : (
          <></>
        )}
      </article>
      <PackageView />
      <HealthView />
    </main>
  )
}

export default Detail;

