import Info_Card from "@/components/client/Info_Card/Info_Card"
import getHealth from "@/declare/function/getHealth";
import LayoutGrid from "@/layouts/gridlayout/LayoutGrid"
import { getTranslations } from "next-intl/server";
import Styles from "../About.module.scss"
import { InfoProps } from "@/declare/type/InfoProps";
import Search from "@/components/client/SearchAndFilter/Search";

const page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string }
}) => {

  const t = await getTranslations();
  const health = await new getHealth().getAll(searchParams.search);

  return (
    <main>
      <div className={Styles.title_layout}>
        <h3>{t('footer.health_info')}</h3>
        <div>
          <Search />
          {/* <Filter />*/}
        </div>
      </div>

      <LayoutGrid>
        {health ? (
          health.map((item: InfoProps) => (
            <Info_Card
              id={`/about/health-information/${item.id + '_' + item.title.split(/[ .]/).join('_')}`}
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

export default page
