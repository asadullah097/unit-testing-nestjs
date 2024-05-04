import { Test, TestingModule } from '@nestjs/testing';
import { PaymentController } from './payment.controller';
import { Request, Response } from 'express';
import { send } from 'process';

describe('PaymentController', () => {
  let controller: PaymentController;
  const requestMock = {
    query: {
      count: 10, page: 20
    }
  } as unknown as Request
  const responeMock = {
    status: jest.fn((x) => ({
      send: jest.fn((y) => y)
    })),
    send: jest.fn((x) => x)
  } as unknown as Response
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentController],
    }).compile();

    controller = module.get<PaymentController>(PaymentController);
  });
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  describe('getPayments', () => {
    it(`should return status of 400 `, () => {
      controller.getPayments(requestMock, responeMock)
    });
    it("count should be greater than 0", () => {
      controller.getPayments(requestMock, responeMock)
    })
  });
});
