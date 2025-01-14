import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';

import { Request } from 'express';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt.guard';
import { LocalGuard } from './guards/local.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalGuard)
  login(@Req() req: Request) {
    return req.user;
  }

  @Get('status')
  @UseGuards(JwtAuthGuard)
  status(@Req() req: Request) {
    console.log('Inside authcotroller status method');
    console.log(req.user);
    return req.user;
  }
}
