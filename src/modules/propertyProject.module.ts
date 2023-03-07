import { PropertyProjectController } from '@/controllers';
import { PropertyProjectService } from '@/services';
import { Module } from '@nestjs/common';

@Module({
    controllers: [PropertyProjectController],
    providers: [PropertyProjectService],
  })
  export class PropertyProjectModule {
    constructor(private propertyProjectService: PropertyProjectService) {}
  }
  