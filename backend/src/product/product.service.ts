import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {

  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}
  //-----------------------------------------------------------------------------------------------
  async create(createProductDto: CreateProductDto) {
      try {
        await this.productsRepository.insert(createProductDto);
      
        return createProductDto;
      } catch (error) {
      
      return 'This action adds a new product';
    }
  }
  async findAll(): Promise<Product[]> {
    try {
      return await this.productsRepository.find();
    } catch (err) {
      console.log('Impossível buscar products');
      return null;
    }
  }

  async findOne(id: number): Promise<Product> {
    const product = this.productsRepository
    .createQueryBuilder('product')
    .select(['product.name', 'product.image'])
    .getOne();
  if (!product) throw new NotFoundException('products não encontrado');

  return product;
}
  //-----------------------------------------------------------------------------------------------

  async update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  async remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
