import { Module } from '@nestjs/common';
import AppService from '@/app.service';
import {
  PropertyProjectController,
  PropertyProjectModule,
  PropertyManagementModule,
  PropertyManagementController,
} from '@modules';
import AppController from '@/app.controller';

@Module({
  imports: [PropertyProjectModule, PropertyManagementModule],
  controllers: [
    AppController,
    PropertyProjectController,
    PropertyManagementController,
  ],
  providers: [AppService],
})
class AppModule {}

export default AppModule;
