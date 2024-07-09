import axios from "axios";
import { InfoProps } from "../type/InfoProps";

export default class News {

    async getAll(param?: string): Promise<InfoProps[] | null> {
        try {
            if (param === undefined) {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_END_POINT}/news`);
                const info: InfoProps[] = response.data;
                return info
            } else {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_END_POINT}/news?search=${param}`);
                const info: InfoProps[] = response.data;
                return info
            }

        } catch (error) {
            console.error("Error fetching data:", error);
            return null;
        }
    }

    async getOne(id: string): Promise<InfoProps | null> {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_END_POINT}/news/${id}`)
            const info = response.data;
            return info
        } catch (error) {
            console.error("Error fetching data:", error);
            return null;
        }
    }

    async getPreview(id: string): Promise<InfoProps | null> {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_END_POINT}/news/${id}?preview=true`);
            const promotions = response.data;
            return promotions;
        } catch (error) {
            console.error("Error fetching data:", error);
            return null;
        }
    }
}