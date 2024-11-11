import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customersRepository: Repository<Customer>,
  ) { }

  // [ADMIN, TEAM_LEADER, TEAM_WORKER] ACCESS
  async createCustomer(customer: CreateCustomerDto, user: User) {
    try {
      const newCustomer = this.customersRepository.create({ ...customer, dealer: user });
      return await this.customersRepository.save(newCustomer);
    } catch (error) {
      throw new Error('Failed to create customer: ' + error.message);
    }
  }

  // ADMIN ACCESS
  async getAllCustomersOrQuery(team_id: number, leader_id: number, dealer_id: number) {
    if (team_id && !leader_id && !dealer_id) {
      return await this.customersRepository.find({
        where: {
          dealer: {
            team: {
              id: team_id
            }
          }
        },
        relations: ['dealer']
      });
    }

    else if (leader_id && !team_id && !dealer_id) {
      return await this.customersRepository.find({
        where: {
          dealer: {
            team: {
              leader_id: {
                id: leader_id
              }
            }
          }
        },
        relations: ['dealer']
      });
    }

    else if (dealer_id && !team_id && !leader_id) {
      return await this.customersRepository.find({
        where: {
          dealer: {
            id: dealer_id
          }
        },
        relations: ['dealer']
      });
    }
    else {
      return await
        this.customersRepository.find({ relations: ['dealer'] });
    }

  }


  // TEAM_LEADER ACCESS
  async getAllCurrentTeamLeaderUserCustomersOrQuery(user: User, dealer_id?: number) {
    const query = {
      where: {
        dealer: {
          team: {
            leader_id: {
              id: user.id
            }
          },
          ...(dealer_id && { id: dealer_id })
        }
      },
      relations: ['dealer']
    };
    return await this.customersRepository.find(query);
  }



  // TEAM_WORKER ACCESS
  async getAllCurrentTeamWorkerUserCustomersOrQuery(user: User, id_card: string) {

    return (id_card
      ?
      await this.customersRepository.find({
        where: {
          identification_number: id_card
        },
        relations: ['dealer']
      })
      :
      await this.customersRepository.find({
        where: {
          dealer: {
            id: user.id
          }
        },
        relations: ['dealer']
      })
    )
  }
}
