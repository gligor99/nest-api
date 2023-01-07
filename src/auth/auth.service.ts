import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signUp() {
    return { msg: 'Signed Up' };
  }

  signIn() {
    return { msg: 'Signed In' };
  }
}
