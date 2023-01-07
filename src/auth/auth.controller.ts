import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  // POST -> auth/signup
  @Post('signUp')
  signUp() {
    return this.authService.signUp();
  }

  @Post('signIn')
  signIn() {
    return this.authService.signIn();
  }
}
