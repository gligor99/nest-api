import { Injectable } from '@nestjs/common';
import { Bookmark, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signUp() {
    return { msg: 'Signed Up' };
  }

  signIn() {
    return { msg: 'Signed In' };
  }
}
