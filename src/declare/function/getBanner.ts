import axios from "axios";
import { BannerProps } from "../type/BannerProps";

export default class getBanner {

    async getBannerPromotion(): Promise<BannerProps[] | null> { //TODO Change any to true type
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_END_POINT}/banner`)
            const banner = response.data;
            return banner
        } catch (error) {
            console.error("Error fetching data:", error);
            return null;
        }
    }
}