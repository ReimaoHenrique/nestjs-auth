import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppHelloService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [AppHelloService],
})
export class AppModule {}
