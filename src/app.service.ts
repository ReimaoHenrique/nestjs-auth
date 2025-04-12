import { Injectable } from '@nestjs/common';

@Injectable()
export class AppHelloService {
  getHello(): string {
    return 'Hello World! 4';
  }
}
