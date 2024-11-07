import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }

  async findOne(conditions: Partial<User>): Promise<User | undefined> {
    return await this.usersRepository.findOne({ where: conditions });
  }

  // async findOne(data: number | any): Promise<User | undefined> {
  //   console.log(data.email)
  //   return await this.usersRepository.findOne(data.email);
  // }

  async create(data) {
    return await this.usersRepository.save(data).then(res => res).catch(e => console.log(e));
  }
}