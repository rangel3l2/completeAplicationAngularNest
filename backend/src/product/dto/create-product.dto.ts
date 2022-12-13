import { Category } from "src/category/entities/category.entity";

export class CreateProductDto {
    id: string;
    name: string;
    description: string;
    category : Category
    image: string;   
    price: number;
    quantity: number;
    weight: number;
    unity:string
    active: boolean;    
}
