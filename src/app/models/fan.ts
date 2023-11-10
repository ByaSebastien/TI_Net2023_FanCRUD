import { Serie } from "./serie"

export interface Fan {
    name: string;
    birthdate: Date;
    series: Serie[];
}