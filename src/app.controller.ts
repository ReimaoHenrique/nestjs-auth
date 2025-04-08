import { Controller, Get } from '@nestjs/common';
import { AppHelloService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppHelloService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
