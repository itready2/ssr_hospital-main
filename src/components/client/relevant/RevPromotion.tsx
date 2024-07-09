'use client'
import Promotion_Card from "@/components/client/Promotion_Card/Promotion_Card"
import Styles from './PackageView.module.scss'
import { Suspense, useEffect, useState } from "react"
import { PromotionProps } from "@/declare/type/PromotionProps"
import getPromotion from "@/declare/function/getPromotion"
import Loading from "@/components/server/loader/Loading"

interface id {
    ids: string[];
    price: string;
    title: string;
}


const RevPromotion: React.FC<id> = ({ ids, price, title }) => {

    const [promotion, setPromotion] = useState<PromotionProps[]>([])

    useEffect(() => {
        async function fetchItems() {
            const fetchedPromotions: PromotionProps[] = [];

            for (const id of ids) {
                const promotion: PromotionProps | null = await new getPromotion().getPreview(id);
                if (promotion !== null) {
                    fetchedPromotions.push(promotion);
                }
            }

            setPromotion(fetchedPromotions);
        }

        fetchItems();
    }, [ids])

    return (
        <Suspense fallback={<Loading />}>
            {promotion ? (
                <section className={Styles.container}>
                    <div className={Styles.header}>
                        <h1>{title}</h1>
                    </div>
                    <div className={Styles.product_grid}>
                        {promotion.map((item: PromotionProps) => (
                            <Promotion_Card
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                cover={item.cover}
                                price={item.price.toString()}
                                max_price={item.max_price?.toString()}
                                price_lang={price}
                            />
                        ))}
                    </div>
                </section>
            ) : (
                <></>
            )}
        </Suspense>
    )
}

export default RevPromotion
