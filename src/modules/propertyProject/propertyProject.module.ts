import { Module } from '@nestjs/common';
import PropertyProjectController from '@modules/propertyProject/propertyProject.controller';
import PropertyProjectService from '@modules/propertyProject/propertyProject.service';

@Module({
  controllers: [PropertyProjectController],
  providers: [PropertyProjectService],
})
class PropertyProjectModule {
  constructor(private propertyProjectService: PropertyProjectService) {}
}

export default PropertyProjectModule;
