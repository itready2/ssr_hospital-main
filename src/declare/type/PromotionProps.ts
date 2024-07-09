
export interface PromotionProps {
    id: string;
    title: string;
    cover: string;
    price: string;
    max_price?: string;
    create_at?: string;
    end_date?: string;
    description?: string;
    keywords?: string[],
    content?: string;
    price_lang?: string;
    relevant_promotion?: string[]
}