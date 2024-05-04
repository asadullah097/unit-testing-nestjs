import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('payment')
export class PaymentController {

  @Get()
  getPayments(@Req() request: Request, @Res() response: Response) {
    const { count, page } = request?.query
    if (!count || !page) {
      response.status(400).send({ msg: "Missing count or pages" })
    } else {
      response.send(200)
    }
  }
}
