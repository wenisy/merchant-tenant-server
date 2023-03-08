import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PropertyEntity } from '@/modules';
import { PropertyFilterDto } from '@modules/propertyManagement/dto';

@Injectable()
class PropertyManagementService {
  constructor(
    @InjectRepository(PropertyEntity)
    private propertyEntityRepository: Repository<PropertyEntity>,
  ) {}
  findAll() {
    return 'This action returns all propertyManagement';
  }
  createProperty(property) {
    console.log('post');
    console.log(property);
    return 'This action adds a new propertyManagement';
  }

  async getPropertyManagementByFilter(
    filterDto: PropertyFilterDto,
  ): Promise<PropertyEntity[]> {
    const { companyName, area, contact } = filterDto;

    const queryBuilder = this.propertyEntityRepository.createQueryBuilder('pm');

    if (companyName) {
      queryBuilder.andWhere('pm.companyName = :companyName', { companyName });
    }

    if (area) {
      queryBuilder.andWhere('pm.area = :area', { area });
    }

    if (contact) {
      queryBuilder.andWhere('pm.contact = :contact', { contact });
    }

    return await queryBuilder.getMany();
  }
}

export default PropertyManagementService;
