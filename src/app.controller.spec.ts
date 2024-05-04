import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  const txtString = 'hell Jest';
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appController.setHello(txtString);
  });

  describe('root', () => {
    it(`should return ${txtString} `, () => {
      expect(appController.getHello()).toBe(txtString);
    });
  });
});
