import { Category } from 'src/category/entities/category.entity';
export declare class Product {
    id: string;
    name: string;
    description: string;
    category: Category;
    image: string;
    price: number;
    quantity: number;
    weight: number;
    unity: string;
    active: boolean;
}
