import { Test, TestingModule } from '@nestjs/testing';
import { PaymentController } from './payment.controller';
import { Request, Response } from 'express';
import { send } from 'process';
import { PaymentService } from './service/payment.service';
import { BadRequestException } from '@nestjs/common';

describe('PaymentController', () => {
  let controller: PaymentController;
  let paymentService: PaymentService

  const requestMock = { query: { count: 10, page: 20 } } as unknown as Request

  const responeMock = {
    status: jest.fn((x) => ({ send: jest.fn((y) => y) })),
    send: jest.fn((x) => x)
  } as unknown as Response

  beforeEach(async () => {

    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentController],
      providers: [{
        provide: PaymentService,
        useValue: {
          createPayment: jest.fn((x) => x)
        }
      }]
    }).compile();

    controller = module.get<PaymentController>(PaymentController);
    paymentService = module.get<PaymentService>(PaymentService)
  });

  it('should be defined', () => { expect(controller).toBeDefined(); });
  it('payment service should be defined', () => { expect(paymentService).toBeDefined(); });

  describe('getPayments', () => {
    it(`should return status of 400 `, () => {
      controller.getPayments(requestMock, responeMock)
    });
    it("count should be greater than 0", () => {
      controller.getPayments(requestMock, responeMock)
    })
  });

  describe('createPayment', () => {
    it('it should return error', async () => {
      jest.spyOn(paymentService, 'createPayment').mockImplementationOnce(() => {
        throw new BadRequestException()
      })
      try {
        const response = await controller.createPayment({
          email: "user@gmail.com",
          price: 120
        })
      } catch (error) {
        return error
      }
    })
  })
});
