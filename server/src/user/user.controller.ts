import { Controller, Get, UseGuards, Request, Body } from '@nestjs/common';
import { UsersService } from './user.service';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { GetUser } from 'src/auth/decorator/get-user.decorator';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@GetUser() user: User) {
    return this.usersService.getProfile(user);
  }
}
