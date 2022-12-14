import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToOne,
    PrimaryColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
import { Category } from 'src/category/entities/category.entity';

@Entity('tbl_product')
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id :  string 
    @Column()
    name : string
    @Column()
    description : string
    @ManyToOne(() => Category, (category) => category.products)
    category: Category;
    @Column({type: 'longblob'})
    image : string
    @Column()   
    price: number;
    @Column()
    quantity: number;
    @Column()
    weight: number;
    @Column()
    unity:string
    @Column()
    active: boolean; 

}
