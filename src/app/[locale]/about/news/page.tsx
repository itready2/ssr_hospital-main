import { getTranslations } from "next-intl/server";
import Styles from "../About.module.scss"
import Search from "@/components/client/SearchAndFilter/Search";
import News from "@/declare/function/getNews";
import LayoutGrid from "@/layouts/gridlayout/LayoutGrid";
import { InfoProps } from "@/declare/type/InfoProps";
import Info_Card from "@/components/client/Info_Card/Info_Card";

const page = async (
  {
    searchParams,
  }: {
    searchParams: { [key: string]: string }
  }
) => {

  const news = await new News().getAll(searchParams.search);

  const t = await getTranslations();

  return (
    <main>
      <div className={Styles.title_layout}>
        <h3>{t('footer.news')}</h3>
        <div>
          <Search />
        </div>
      </div>
      <LayoutGrid>
        {news ? (
          news.map((item: InfoProps) => (
            <Info_Card
              id={`/about/news/${item.id + '_' + item.title.split(/[ .]/).join('_')}`}
              key={item.id}
              create_at={item.create_at}
              title={item.title}
              cover={item.cover}
              description={item.description}
            />
          ))
        ) : (
          <></>
        )}
      </LayoutGrid>
    </main>
  )
}

export default page;
