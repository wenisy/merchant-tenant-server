import { Module } from '@nestjs/common';
import { AppController, PropertyProjectController } from '@controllers';
import { AppService, PropertyProjectService } from '@services';

@Module({
  imports: [PropertyProjectModule],
  controllers: [AppController, PropertyProjectController],
  providers: [AppService, PropertyProjectService],
})
class AppModule {}

export default AppModule;
