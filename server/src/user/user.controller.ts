import { Controller, Get, UseGuards, Request, Body } from '@nestjs/common';
import { UsersService } from './user.service';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }


  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Body() data: any) {
    return this.usersService.findByEmail(data.user);
  }
}
