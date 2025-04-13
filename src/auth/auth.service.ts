import { Injectable } from '@nestjs/common';
import { LoginDto } from './login.dto';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}
  async login(loginDto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: loginDto.email },
    });
    if (!user) {
      throw new Error('Invalid credentials');
    }
    const isPasswordValid = await bcrypt.compareSync(
      loginDto.password,
      user.password,
    );
    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }
    const token = this.jwtService.sign({
      sub: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      isActive: user.isActive,
      clubActive: user.clubActive,
    });
    return { access_token: token };
  }
}
