import axios from "axios";
import { PromotionProps } from "../type/PromotionProps";

export default class getPromotion {

    async getAll(param?: string): Promise<PromotionProps[] | null> {
        try {
            if (param === undefined) {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_END_POINT}/promotion`);
                const promotions: PromotionProps[] = response.data;
                return promotions
            } else {
                console.log("Promotions searched:",param)
                const response = await axios.get(`${process.env.NEXT_PUBLIC_END_POINT}/promotion?search=${param}`);
                const promotions: PromotionProps[] = response.data;
                return promotions
            }

        } catch (error) {
            console.error("Error fetching data:", error);
            return null;
        }
    }

    async getTop(): Promise<PromotionProps[] | null> {
        try {
            // const response = await axios.get(`${process.env.NEXT_PUBLIC_END_POINT}/promotion?important=true&page=1&size=3`);
            const response = await axios.get(`${process.env.NEXT_PUBLIC_END_POINT}/promotion?important=true&page=1&size=3` , {
                headers: {
                    "Content-Type": "application/json",
                    "ngrok-skip-browser-warning":"any"
                },
            });
            const promotions: PromotionProps[] = response.data;
            return promotions
        } catch (error) {
            console.error("Error fetching data:", error);
            return null;
        }
    }

    async getNewest(): Promise<PromotionProps[] | null> {
        try {
            // const response = await axios.get(`${process.env.NEXT_PUBLIC_END_POINT}/promotion?new=true&size=3`);
            const response = await axios.get(`${process.env.NEXT_PUBLIC_END_POINT}/promotion?new=true&size=3` , {
                headers: {
                    "Content-Type": "application/json",
                    "ngrok-skip-browser-warning":"any"
                },
            });
            const promotions: PromotionProps[] = response.data;
            return promotions
        } catch (error) {
            console.error("Error fetching data:", error);
            return null;
        }
    }

    async getPreview(id: string): Promise<PromotionProps | null> {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_END_POINT}/promotion/${id}?preview=true`);
            const promotions: PromotionProps = response.data;
            return promotions;
        } catch (error) {
            console.error("Error fetching data:", error);
            return null;
        }
    }

    async getOne(id: string): Promise<PromotionProps | null> {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_END_POINT}/promotion/${id}`);
            const promotions: PromotionProps = response.data;
            console.log('key', promotions)
            return promotions;
        } catch (error) {
            console.error("Error fetching data:", error);
            return null;
        }
    }
}