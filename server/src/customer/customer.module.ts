import { Module } from '@nestjs/common';
import { CustomersService } from './customer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { CustomersController } from './customer.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
  exports: [TypeOrmModule, CustomersService],
  providers: [CustomersService],
  controllers: [CustomersController]
})
export class CustomersModule { }
