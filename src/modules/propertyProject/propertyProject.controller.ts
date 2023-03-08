import { Controller, Get } from '@nestjs/common';
import PropertyProjectService from '@modules/propertyProject/propertyProject.service';

@Controller()
class PropertyProjectController {
  constructor(
    private readonly propertyProjectService: PropertyProjectService,
  ) {}

  @Get()
  getHello(): string {
    return this.propertyProjectService.getHello();
  }
  // request method get, and named getPropertyProjects
  @Get('propertyProjects')
  getPropertyProjects(): string {
    return 'This action returns all propertyProjects';
  }
}

export default PropertyProjectController;
