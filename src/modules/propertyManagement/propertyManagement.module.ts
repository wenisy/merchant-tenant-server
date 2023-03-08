import { Module } from '@nestjs/common';
import { PropertyManagementService } from '@/modules';

@Module({
  providers: [PropertyManagementService],
})
class PropertyManagementModule {}

export default PropertyManagementModule;
