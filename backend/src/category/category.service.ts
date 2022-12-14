import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}
  //-----------------------------------------------------------------------------------------------
  async create(createCategoryDto: CreateCategoryDto) {
      try {
        const category = await this.categoriesRepository.create(createCategoryDto);
      
        return this.categoriesRepository.save(category);
      } catch (error) {
      
      return 'This action adds a new category';
    }
  }
  async findAll(): Promise<Category[]> {
    try {
      return await this.categoriesRepository.find();
    } catch (err) {
      console.log('Impossível buscar categories');
      return null;
    }
  }

  async findOne(id: number): Promise<Category> {
    const user = this.categoriesRepository
    .createQueryBuilder('category')
    .select(['category.name', 'category.image'])
    .getOne();
  if (!user) throw new NotFoundException('categories não encontrado');

  return user;
}

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
