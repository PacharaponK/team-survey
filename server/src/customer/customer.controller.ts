import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CustomersService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { Roles } from 'src/auth/role/roles.decorator';
import { RoleGuard } from 'src/auth/role/role.guard';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) { }

  @UseGuards(JwtAuthGuard)
  @Post('register')
  async createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customersService.createCustomer(createCustomerDto);
  }

  @Roles('admin')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get()
  async getAllCustomers() {
    return this.customersService.getAllCustomers();
  }

}
