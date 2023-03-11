import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PropertyEntity } from '@/modules';
import { CreatePropertyDto, PropertyFilterDto, UpdatePropertyDto } from "@modules/propertyManagement/dto";

@Injectable()
class PropertyManagementService {
  constructor(
    @InjectRepository(PropertyEntity)
    private propertyEntityRepository: Repository<PropertyEntity>,
  ) {}

  async createProperty(createPropertyDto: CreatePropertyDto): Promise<PropertyEntity> {
    const newProperty = this.propertyEntityRepository.create(createPropertyDto);
    return await this.propertyEntityRepository.save(newProperty);
  }

  async deletePropertyManagementById(id: number) {
    const result = await this.propertyEntityRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Property Management with ID ${id} not found`);
    }
    return { message: `Property Management with ID ${id} has been deleted` };
  }

  async updatePropertyManagement(
    id: number,
    updatePropertyDto: UpdatePropertyDto,
  ): Promise<PropertyEntity> {
    const property = await this.propertyEntityRepository.findOneOrFail(id);

    property.companyName = updatePropertyDto.companyName;
    property.area = updatePropertyDto.area;
    property.address = updatePropertyDto.address;
    property.establishTime = updatePropertyDto.establishTime;
    property.remark = updatePropertyDto.remark;

    return await this.propertyEntityRepository.save(property);
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
