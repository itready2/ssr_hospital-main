import axios from "axios";
import { InfoProps } from "../type/InfoProps";

export default class getHealth {

    async getAll(param?: string): Promise<InfoProps[] | null> {
        try {
            if (param === undefined) {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_END_POINT}/health`);
                const info: InfoProps[] = response.data;
                return info
            } else {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_END_POINT}/health?search=${param}`);
                const info: InfoProps[] = response.data;
                return info
            }

        } catch (error) {
            console.error("Error fetching data:", error);
            return null;
        }
    }

    async getTop(): Promise<InfoProps[] | null> {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_END_POINT}/health?important=true&page=1&size=4`)
            const info = response.data;
            return info
        } catch (error) {
            console.error("Error fetching data:", error);
            return null;
        }
    }

    async getOne(id: string): Promise<InfoProps | null> {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_END_POINT}/health/${id}`)
            const info = response.data;
            return info
        } catch (error) {
            console.error("Error fetching data:", error);
            return null;
        }
    }

    async getPreview(id: string): Promise<InfoProps | null> {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_END_POINT}/health/${id}?preview=true`);
            const promotions = response.data;
            return promotions;
        } catch (error) {
            console.error("Error fetching data:", error);
            return null;
        }
    }
}