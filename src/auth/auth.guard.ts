import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private prismaService: PrismaService,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const token = request.headers['authorization']?.split(' ')[1];
    if (!token) {
      throw new UnauthorizedException('Token is required');
    }
    try {
      const payload = await this.jwtService.verifyAsync<{
        sub: string;
        name: string;
        email: string;
        role: string;
        isActive: boolean;
        clubActive: boolean;
      }>(token, {
        algorithms: ['HS256'],
      });
      const user = await this.prismaService.user.findUnique({
        where: { id: payload.sub },
      });
      if (!user) {
        throw new UnauthorizedException('User not found');
      }
      request.user = user;
      return true;
    } catch (e) {
      console.log(e);
      throw new UnauthorizedException('Invalid token', { cause: e });
    }
  }
}
