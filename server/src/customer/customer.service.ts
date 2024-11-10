import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CustomersService {

  constructor(
    @InjectRepository(Customer)
    private customersRepository: Repository<Customer>,
  ) { }

  async createCustomer(customer: CreateCustomerDto) {
    try {
      const newCustomer = this.customersRepository.create(customer);
      return await this.customersRepository.save(newCustomer);
    } catch (error) {
      throw new Error('Failed to create customer: ' + error.message);
    }
  }

  async getAllCustomers() {
    return await this.customersRepository.find({ relations: ['dealer'] });
  }
}
