import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentModule } from './payment/payment.module';
import { TweetsModule } from './tweets/tweets.module';

@Module({
  imports: [PaymentModule, TweetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
