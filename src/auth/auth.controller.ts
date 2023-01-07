import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  // POST -> auth/signup
  @Post('signup')
  signUp(@Req() req: Request) {
    console.log(req.body);
    return this.authService.signUp(req.body);
  }

  @Post('signin')
  signIn() {
    return this.authService.signIn();
  }
}
