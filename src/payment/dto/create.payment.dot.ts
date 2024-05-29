import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator'
export class CreatePaymentDto {
    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsNotEmpty()
    @IsNumber()
    price: number
}