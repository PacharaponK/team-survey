import { Controller, Get, Post, Body, Param, UseGuards, Query, Put } from '@nestjs/common';
import { CustomersService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { Roles } from 'src/auth/decorator/roles.decorator';
import { RoleGuard } from 'src/auth/guard/role.guard';
import { GetUser } from 'src/auth/decorator/get-user.decorator';
import { User } from 'src/user/entities/user.entity';
import { customerStatus } from './entities/customer.entity';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) { }

  // ADMIN, TEAM_LEADER, TEAM_WORKER ACCESS
  @Roles('team_worker', 'team_leader', 'admin')
  @UseGuards(JwtAuthGuard)
  @Post('register')
  async createCustomer(@Body() createCustomerDto: CreateCustomerDto, @GetUser() user: User) {
    return this.customersService.createCustomer(createCustomerDto, user);
  }


  // ADMIN ACCESS
  @Roles('admin')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get('admin-access')
  async getAllCustomersOrQuery(
    @Query('team_id') team_id = null,
    @Query('leader_id') leader_id = null,
    @Query('dealer_id') dealer_id = null,
    @Query('province') province = null,
    @Query('district') district = null,
    @Query('sub_district') sub_district = null) {
    return this.customersService.getAllCustomersOrQuery(team_id, leader_id, dealer_id, province, district, sub_district);
  }


  // TEAM_LEADER ACCESS (team-leader-access)
  @Roles('team_leader', 'admin')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get('team-leader-access')
  async getAllCurrentTeamLeaderUserCustomersOrQuery(
    @GetUser() user: User,
    @Query('dealer_id') dealer_id = null,
    @Query('province') province = null,
    @Query('district') district = null,
    @Query('sub_district') sub_district = null) {
    return this.customersService.getAllCurrentTeamLeaderUserCustomersOrQuery(user, dealer_id, province, district, sub_district);
  }


  // TEAM_WORKER ACCESS (team-worker-access)
  @Roles('team_worker')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get('team-worker-access')
  async getWorkerCustomers(
    @GetUser() user: User,
    @Query('id_card') id_card = null,
    @Query('province') province = null,
    @Query('district') district = null,
    @Query('sub_district') sub_district = null) {
    return this.customersService.getAllCurrentTeamWorkerUserCustomersOrQuery(user, id_card, province, district, sub_district);
  }

  @Roles('team_worker')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Put('team-worker-access/:id')
  async updateCustomerStatusById(@Param('id') customerId: number, @Body('status') status: customerStatus) {
    return this.customersService.updateCustomerStatusById(customerId, status);
  }
}
