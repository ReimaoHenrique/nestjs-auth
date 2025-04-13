import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from './login.dto';
@Controller('auth')
export class AuthController {
  @Post('Login')
  login(@Body() loginDto: LoginDto) {}
}
