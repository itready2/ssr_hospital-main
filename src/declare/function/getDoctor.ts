import axios from "axios";
import { DoctorProps } from "../type/DoctorProps";

export class Doctor {

    private EndPoint = process.env.NEXT_PUBLIC_END_POINT;

    async getAll(): Promise<DoctorProps[] | []> {
        try {
            const response = await axios.get(`${this.EndPoint}/doctor`);
            const news: DoctorProps[] = response.data;
            return news;
        } catch (error) {
            console.error("Error fetching data:", error);
            return [];
        }
    }

    async getOne(slug: string): Promise<DoctorProps | null> {
        try {
            const response = await axios.get(`${this.EndPoint}/doctor/${slug}`);
            const news: DoctorProps = response.data;
            return news;
        } catch (error) {
            console.error("Error fetching data:", error);
            return null;
        }
    }
}