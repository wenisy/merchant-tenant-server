import { Injectable } from '@nestjs/common';

@Injectable()
class PropertyProjectService {
  getHello(): string {
    return 'Hello World!';
  }
}

export default PropertyProjectService;
