import { Category } from "src/category/entities/category.entity";
export declare class CreateProductDto {
    id: string;
    name: string;
    description: string;
    category: Category;
    image: string;
}
