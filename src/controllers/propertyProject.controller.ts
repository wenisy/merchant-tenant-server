import { Controller, Get } from '@nestjs/common';
import { AppService } from '@services';

@Controller()
class PropertyProjectController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  // request method get, and named getPropertyProjects
    @Get('propertyProjects')
    getPropertyProjects(): string {
      return 'This action returns all propertyProjects';
    }
}

export default PropertyProjectController;
