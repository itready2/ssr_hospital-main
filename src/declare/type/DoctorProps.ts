import { Department } from "./Department.type";

export interface DoctorProps {
    id: string;
    name: string;
    cover: string;
    specialized: string;
    content?: string;
    departments: Department[];
}