import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePaymentDto } from '../dto/create.payment.dot';

@Injectable()
export class PaymentService {
    private users = [
        {
            email: "user@gmail.come"
        },
        {
            email: "user1@gmail.come"
        },
        {
            email: "user2@gmail.come"
        },
        {
            email: "user3@gmail.come"
        },
        {
            email: "user4@gmail.come"
        },
    ]
    async createPayment(payload: CreatePaymentDto) {
        const { email } = payload
        const user = this.users.find((user) => user.email === email)
        if (user) {
            return {
                id: 1,
                status: 'success'
            }
        } else {
            throw new BadRequestException()
        }
    }
}
