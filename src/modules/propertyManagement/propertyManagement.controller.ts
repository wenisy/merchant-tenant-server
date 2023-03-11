import {
  Body,
  Controller, Delete,
  Get, Param, ParseIntPipe,
  Post, Put,
  Query,
  ValidationPipe
} from "@nestjs/common";

import { PropertyManagementService } from '@/modules';
import {
  CreatePropertyDto,
  PropertyFilterDto,
  UpdatePropertyDto,
} from '@modules/propertyManagement/dto';
import PropertyEntity from "@modules/propertyManagement/property.entity";

@Controller('property-management')
class PropertyManagementController {
  constructor(
    private readonly propertyManagementService: PropertyManagementService,
  ) {}

  // POST http://localhost:3000/property-management
  @Post()
  async createProperty(@Body() createPropertyDto: CreatePropertyDto): Promise<PropertyEntity> {
    return this.propertyManagementService.createProperty(createPropertyDto);
  }

  // http://localhost:3000/property-management/1
  @Delete(':id')
  async deletePropertyManagementById(@Param('id') id: number) {
    return this.propertyManagementService.deletePropertyManagementById(id);
  }

  @Put(':id')
  async updatePropertyManagement(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePropertyDto: UpdatePropertyDto,
  ): Promise<PropertyEntity> {
    const updatedProperty = await this.propertyManagementService.updatePropertyManagement(id, updatePropertyDto);
    return updatedProperty;
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

}
export default PropertyManagementController;
