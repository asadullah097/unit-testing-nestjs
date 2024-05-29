import { Body, Controller, Get, Inject, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { PaymentService } from './service/payment.service';
import { CreatePaymentDto } from './dto/create.payment.dot';

@Controller('payment')
export class PaymentController {

    constructor(
        @Inject(PaymentService)
        private readonly paymentService: PaymentService
    ) { }

    @Get()
    getPayments(@Req() request: Request, @Res() response: Response) {
        const { count, page } = request?.query
        if (!count || !page) {
            response.status(400).send({ msg: "Missing count or pages" })
        } else {
            response.send(200)
        }
    }

    @Post('create')
    async createPayment(@Body() payload: CreatePaymentDto) {
        return await this.paymentService.createPayment(payload)
    }
}
