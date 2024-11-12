import { Controller, Get, UseGuards, Request, Body, Query } from '@nestjs/common';
import { UsersService } from './user.service';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { GetUser } from 'src/auth/decorator/get-user.decorator';
import { User } from './entities/user.entity';
import { Roles } from 'src/auth/decorator/roles.decorator';
import { RoleGuard } from 'src/auth/guard/role.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  // GLOBAL
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@GetUser() user: User) {
    return this.usersService.getProfile(user);
  } 


  //ADMIN 
  @Roles('admin')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get('admin-access')
  async getAllUsers(@Query('username') username: string) {
    return this.usersService.getAllCustomersOrQuery(username);
  }

 
}
