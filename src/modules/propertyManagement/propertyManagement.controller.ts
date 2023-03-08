import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';

import { PropertyManagementService } from '@/modules';
import {
  CreatePropertyDto,
  PropertyFilterDto,
} from '@modules/propertyManagement/dto';

@Controller('property-management')
class PropertyManagementController {
  constructor(
    private readonly propertyManagementService: PropertyManagementService,
  ) {}

  @Get()
  async findAll() {
    return this.propertyManagementService.findAll();
  }

  // http://localhost:3000/property-management?companyName=<companyName>&area=<area>&contact=<contact>
  @Get()
  async getPropertyManagementByFilter(
    @Query(ValidationPipe) filterDto: PropertyFilterDto,
  ) {
    return this.propertyManagementService.getPropertyManagementByFilter(
      filterDto,
    );
  }

  @Post()
  createProperty(@Body() property: CreatePropertyDto) {
    console.log('post');
    return this.propertyManagementService.createProperty(property);
  }
}
export default PropertyManagementController;
