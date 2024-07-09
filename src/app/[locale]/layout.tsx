import type { Metadata } from "next";
import "../globals.css";
import Navigation from "@/components/client/Navigation/Navigation";
import Footer from "@/components/server/Footer/Footer";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {

  const t = await getTranslations();

  return {
    title: t('hospital'),
    description: t('footer.history_desc'),
    keywords: ["Krung Siam St. Carlos", "โรงพยาบาลกรุงสยามเซนต์คาร์ลอส", "กรุงสยามเซนต์คาร์ลอส", "St.Carlos"],
    formatDetection: {
      telephone: false,
    },
    openGraph: {
      type: "website",
      title: t('hospital'),
      description: t('footer.history_desc'),
      images: `${process.env.NEXT_PUBLIC_END_POINT}/uploads/Og.jpg`,
    },
    twitter: {
      card: "summary_large_image",
      title: t('hospital'),
      description: t('footer.history_desc'),
    }
  }
}


export default function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {

  const t = useTranslations();

  const nav_prop = {
    home: t('navigation.home'),
    about: t('navigation.about'),
    service: t('navigation.service'),
    promo: t('navigation.promotion'),
    appoint: t('navigation.appointment'),
    contact: t('navigation.contact'),
  }
  const about_nav = {
    about: t('footer.about'),
    vision: t('footer.vision'),
    history: t('footer.history'),
    team: t('footer.team'),
    awards: t('footer.awards'),
    news: t('footer.news'),
    health_info: t('footer.health_info'),
    data_policy: t('footer.data_policy'),
    cctv_policy: t('footer.cctv_policy')
  }
  const service_nav = {
    clinic: t('footer.clinic'),
    checkup: t('footer.checkup'),
    spa: t('footer.spa'),
    rehab: t('footer.rehab'),
    accommodation: t('footer.accommodation'),
  }
  const product_nav = {
    rec_pkg: t('modal.rec_pkg'),
    new_pkg: t('modal.new_pkg'),
    more: t('modal.more'),
    locale: t('thb')

  }
  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/minilogo.png" />
      </head>
      <body>
        <Navigation
          nav={nav_prop}
          localActive={locale}
          about_nav={about_nav}
          service_nav={service_nav}
          product_nav={product_nav}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}