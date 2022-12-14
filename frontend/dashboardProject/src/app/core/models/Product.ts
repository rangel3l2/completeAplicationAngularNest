import { Category } from "./Category";

export interface Product {
    id?: string;
    name?: string;
    description?: string;
    category?: Category
    image?: string;
    value?: number;
}