import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async setHello(string) {
    return await this.appService.setHello(string);
  }
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
