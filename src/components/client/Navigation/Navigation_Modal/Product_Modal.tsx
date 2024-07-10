'use client'
import { useEffect, useState } from "react";
import Mini_Product_Card from "../../Mini_Product_Card/Mini_Product_Card";
import Styles from "./Modal.module.scss";
import { useRouter } from 'next/navigation'
import getPromotion from "@/declare/function/getPromotion";
import { PromotionProps } from "@/declare/type/PromotionProps";
import { Icon } from '@iconify/react';

export type product_modal = {
  rec_pkg: string;
  new_pkg: string;
  more: string;
  locale: string;
}

const Product_Modal: React.FC<product_modal> = ({ rec_pkg, new_pkg, more, locale }) => {

  const [popular, SetPopular] = useState<PromotionProps[] | null>(null);
  const [newest, SetNewest] = useState<PromotionProps[] | null>(null);

  useEffect(() => {
    async function getData() {

        const promotion = new getPromotion();
        const getPular = await promotion.getTop();
        const getNewest = await promotion.getNewest();

        SetPopular(getPular);
        SetNewest(getNewest);
      
    }
    getData()
  }, [])

  const navigate = useRouter();

  return (
    <div className={Styles.modal_wrapper}>
      <div className={Styles.modal}>
        <div className={Styles.layout}>
          <div className={Styles.container}>
            <div className={Styles.head}>
              <h4 className={Styles.title}>{rec_pkg}</h4>
            </div>
            <div className={Styles.wrap}>
              {popular ? (
                popular.map((item, index) => (
                  <Mini_Product_Card
                    key={index}
                    id={item.id}
                    locale={locale}
                    image={item.cover}
                    title={item.title}
                    price={item.price}
                    max_price={item.max_price} />
                ))
              ) : (<></>)}
            </div>
          </div>
          <div className={Styles.container}>
            <div className={Styles.head}>
              <h4 className={Styles.title}>{new_pkg}</h4>
              <button onClick={() => navigate.push('/promotion')} className={Styles.link} title={more}><Icon icon="gg:more-o" /> {more}</button>
            </div>
            <div className={Styles.wrap}>
              {newest ? (
                newest.map((item, index) => (
                  <Mini_Product_Card
                    key={index}
                    id={item.id}
                    locale={locale}
                    image={item.cover}
                    title={item.title}
                    price={item.price}
                    max_price={item.max_price} />))
              ) : (<></>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product_Modal