import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findByTelegramId(telegramId: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { telegramId },
    });
  }

  async findOrCreateByTelegram(userData: {
    telegramId: string;
    username: string;
    firstName: string;
    lastName?: string;
    photoUrl?: string;
    authDate: Date;
    hash: string;
  }): Promise<User> {
    const existingUser = await this.findByTelegramId(userData.telegramId);

    if (existingUser) {
      return this.prisma.user.update({
        where: { telegramId: userData.telegramId },
        data: userData,
      });
    }

    return this.prisma.user.create({
      data: userData,
    });
  }
}
