import { Product } from "src/product/entities/product.entity";

export class CreateCategoryDto {
    id: string;
    name: string;
    product : Product[]

}
