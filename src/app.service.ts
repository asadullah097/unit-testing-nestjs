import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private helloString;

  getHello(): string {
    return this.helloString;
  }

  async setHello(string) {
    this.helloString = string;
  }
}
